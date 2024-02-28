import React, { ReactNode } from "react";
import Logo from "@/components/Logo";
import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react";
import { footerColumns } from "@/constants/footer-links";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks: ReactNode[] = [
    // <Facebook key="f" className="social-link" />,
    // <Instagram key="i" className="social-link" />,
    <Twitter key="t" className="social-link" />,
    <Link href="https://github.com/rabrain/chat-bar-docs" target="_blank">
      <Github key="g" className="social-link" />
    </Link>,
    // <Youtube key="y" className="social-link" />,
  ];
  return (
    <footer className="pt-20 pb-4">
      {/* Links */}
      <div className="container lg:w-4/5 mb-12 flex flex-col lg:flex-row">
        <div className="basis-1/2 flex flex-col md:items-center lg:items-start gap-4 lg:gap-6">
          <Logo />
          <p className="text-lg">
            Making generative artificial intelligence accessible to all.
          </p>
          <ul className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-0">
            {socialLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-1/2 grid grid-cols-2 pt-8 lg:pt-0 lg:ps-8">
          {footerColumns.map((col, index) => (
            <article
              key={index}
              className="capitalize flex flex-col md:text-center lg:text-start"
            >
              <h2 className="font-bold lg:text-lg text-slate-100 mb-6">
                {col.title}
              </h2>
              <ul>
                {col.links.map((link, index) => (
                  <li
                    key={index}
                    className="font-normal pb-3 hover:text-sky-600 hover:ps-1 transition-all cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      {/* Links */}
      {/* Copyrights */}
      <div className="container border-t border-slate-700">
        <p className="capitalize pt-4 text-center">
          {`© ${currentYear} ChatBar all rights reserved.`}
        </p>
      </div>
      {/* Copyrights */}
    </footer>
  );
};
export default Footer;
