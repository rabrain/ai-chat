import React, { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  size?: number,
  filled?: boolean,
  label?: string,
}

export const ChevronDownIcon = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  label,
  ...props
}: Props) => (
  <svg
    width={size || width || 24}
    height={size || height || 24}
    viewBox="0 0 24 24"
    fill={filled ? fill : 'none'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" stroke={fill} />
  </svg>
);
