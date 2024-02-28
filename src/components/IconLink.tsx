import Link from "next/link"
import Image from "next/image"

export type IconProps = {
  src: string,
  height?: number,
  width?: number
}

export type Props = {
  href: string,
  icon: IconProps,
  text: string,
}

export default function IconLink(props: Props) {
  return (
    <Link href={props.href} className="btn btn-outline">
      <Image src={props.icon.src} className="w-6 h-6" alt={props.text} />
      <span>{props.text}</span>
    </Link>
  )
}
