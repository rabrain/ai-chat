'use client'

import Linux from '@/components/icons/Linux';
import MacOS from '@/components/icons/MacOS';
import Windows from '@/components/icons/Windows';
import { SVGComponent } from '@/components/icons/types';
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type SystemType = {
  name: string
  logo: (props: SVGComponent) => ReactNode
  fileFormat: string
  href?: string
}

type ReleaseAsset = {
  systems: SystemType[]
  current?: SystemType,
  url?: string,
}

const initialReleaseAsset: ReleaseAsset = {
  systems: [],
}

const ReleaseContext = createContext<ReleaseAsset>(initialReleaseAsset)

const systemsTemplate: SystemType[] = [
  {
    name: 'Download for Windows',
    logo: Windows,
    fileFormat: '{appname}-{tag}-win-x64.exe',
  },
  {
    name: 'Download for Mac (M1/M2/M3)',
    logo: MacOS,
    fileFormat: '{appname}-{tag}-mac-arm64.dmg',
  },
  {
    name: 'Download for Mac (Intel)',
    logo: MacOS,
    fileFormat: '{appname}-{tag}-mac-x64.dmg',
  },
  {
    name: 'Download for Linux (AppImage)',
    logo: Linux,
    fileFormat: '{appname}-{tag}-linux-x86_64.AppImage',
  },
]

const extractAppName = (fileName: string) => {
  const regex = /^(.*?)-[\d\.]+-(?:mac|win|linux)-(?:arm64|x64|x86_64|amd64).*$/
  const match = fileName.match(regex)
  return match ? match[1] : null
}

type Props = {
  /**
    Github Repository, e.g. rabrain/ai-chat
   */
  repo: string
  children: ReactNode
}

export const ReleaseProvider = ({ repo, children }: Props) => {
  const [systems, setSystems] = useState(systemsTemplate)
  const [defaultSystem, setDefaultSystem] = useState(systems[0])

  const changeDefaultSystem = async (systems: SystemType[]) => {
    const userAgent = navigator.userAgent
    if (userAgent.includes('Windows')) {
      // windows user
      setDefaultSystem(systems[0])
    } else if (userAgent.includes('Linux')) {
      // linux user
      setDefaultSystem(systems[3])
    } else if (userAgent.includes('Mac OS')) {
      setDefaultSystem(systems[1])
    } else {
      setDefaultSystem(systems[2])
    }
  }

  useEffect(() => {
    const updateDownloadLinks = async () => {
      try {
        const url = `https://api.github.com/repos/${repo}/releases/latest`
        const response = await fetch(url)
        const lastRelease = await response.json()
        const firstAssetName = await lastRelease.assets[0]?.name
        const appname = extractAppName(firstAssetName)
        if (!appname) {
          console.error(
            'Failed to extract appname from file name:',
            firstAssetName
          )
          changeDefaultSystem(systems)
          return
        }
        const tag = lastRelease.tag_name.startsWith('v')
          ? lastRelease.tag_name.substring(1)
          : lastRelease.tag_name

        const updatedSystems = systems.map((system) => {
          const downloadUrl = system.fileFormat
            .replace('{appname}', appname)
            .replace('{tag}', tag)
          return {
            ...system,
            href: `https://github.com/${repo}/releases/download/${lastRelease.tag_name}/${downloadUrl}`,
          }
        })
        setSystems(updatedSystems)
        changeDefaultSystem(updatedSystems)
      } catch (error) {
        console.error('Failed to update download links:', error)
      }
    }

    updateDownloadLinks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const context = {
    systems,
    current: defaultSystem,
    url: `https://github.com/${repo}/releases/latest`
  }
  return (
    <ReleaseContext.Provider value={context}>
      {children}
    </ReleaseContext.Provider>
  );
};

export const useRelease = () => useContext(ReleaseContext);
