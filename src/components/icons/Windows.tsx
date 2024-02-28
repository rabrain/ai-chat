import React from "react";
import { SVGComponent } from "./types";

export default function Windows({ ...props }: SVGComponent) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Windows"
      viewBox="0 0 512 512"
      {...props}
    >
      <rect width={512} height={512} rx="15%" fill="#00adef" />
      <path
        fill="#fff"
        d="M98 145l127-18v123H98m142-125l168-24v148H240M98 263h127v123L98 368m142-104h168v147l-168-24"
      />
    </svg>
  );
}
