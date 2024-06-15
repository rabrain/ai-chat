'use client'

import { useRelease } from "@/lib/release-provider"
import { Button, ButtonProps } from "@nextui-org/button"
import { Link, LinkProps } from "@nextui-org/link"

const DownloadLink = ({ children, ...props }: ButtonProps & LinkProps) => {
  const release = useRelease()
  const systems = release.systems
  const defaultSystem = release.current ?? systems[0]
  const href = defaultSystem.href || release.url

  return (
    <Button
      as={Link}
      href={href}
      {...props}
    >
      {children}
    </Button>
  )
}

export default DownloadLink
