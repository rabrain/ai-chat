'use client';

// Ref: https://github.com/janhq/docs/blob/main/src/components/DropdownDownload/index.tsx#L114
import { ReactNode, useEffect, useState } from 'react'
import { Button, ButtonGroup } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";

// import { FaWindows, FaApple, FaLinux } from 'react-icons/fa'
// import { IconType } from 'react-icons/lib'
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { Link } from '@nextui-org/link';
import MacOS from './icons/MacOS';
import Windows from './icons/Windows';
import Linux from './icons/Linux';
import { SVGComponent } from './icons/types';

type Props = {
  /**
    Github Repository, e.g. rabrain/ai-chat
   */
  repo: string
}

type SystemType = {
  name: string
  logo: (props: SVGComponent) => ReactNode
  fileFormat: string
  href?: string
}

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
  /* {
    name: 'Download for Linux (deb)',
    logo: FaLinux,
    fileFormat: '{appname}-{tag}-linux-amd64.deb',
  }, */
]

const extractAppName = (fileName: string) => {
  const regex = /^(.*?)-[\d\.]+-(?:mac|win|linux)-(?:arm64|x64|x86_64|amd64).*$/
  const match = fileName.match(regex)
  return match ? match[1] : null
}

const DropdownDownload = ({ repo }: Props) => {
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

  return (
    <ButtonGroup variant="flat">
      <Button
        href={defaultSystem.href}
        as={Link}
        color="primary"
        variant="solid"
        size='lg'
        startContent={
          <defaultSystem.logo className='w-6' />
        }
      // showAnchorIcon
      >
        {defaultSystem.name}
      </Button>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button isIconOnly color='primary' variant='solid' size='lg' aria-label="Download options">
            <ChevronDownIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          // disallowEmptySelection
          aria-label="Download options"
          // selectionMode="single"
          color="primary"
          variant="solid"
        >
          {systems.map((system) => (
            <DropdownItem
              key={system.name}
              startContent={<system.logo className="w-6" />}
              textValue={system.name}
            >
              <Link color='foreground' href={system.href || ''}>
                {system.name}
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  )
}

export default DropdownDownload
