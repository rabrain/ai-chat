import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-end gap-2">
      <Image src="/logo.svg" width={32} height={32} alt="Logo" />
      <div className="relative">
        <h1 className="capitalize text-white text-xl font-bold tracking-wide">
          AI Chat
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
