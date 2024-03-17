import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { navLinks } from "@/constants/nav-links";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30 ">
      <div className="relative container lg:w-4/5 py-6 flex justify-between transition-all">
        <Logo />
        {/* desktop navigation */}
        <nav className="hidden md:flex gap-8 capitalize">
          {Object.entries(navLinks).map(([key, link]) => (
            <Link
              key={key}
              href={link}
              className="text-base font-semibold tracking-wide text-slate-200"
              target={link.startsWith("http") ? "_blank" : undefined}
            >
              {key}
            </Link>
          ))}
        </nav>
        {/* mobile navigation */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
