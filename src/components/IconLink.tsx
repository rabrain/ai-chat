import Link from "next/link"

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
      <img src={props.icon.src} className="w-6 h-6"/>
      <span>{props.text}</span>
    </Link>
  )
}
