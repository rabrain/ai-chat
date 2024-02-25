import React, { ReactNode } from "react";
import Logo from "@/components/Logo";
import { Facebook, Github, Instagram, Twitter, Youtube } from "lucide-react";
import { footerColumns } from "@/constants/footer-links";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks: ReactNode[] = [
    <Facebook key="f" className="social-link" />,
    <Instagram key="i" className="social-link" />,
    <Twitter key="t" className="social-link" />,
    <Github key="g" className="social-link" />,
    <Youtube key="y" className="social-link" />,
  ];
  return (
    <footer className="pt-20 pb-4">
      {/* Links */}
      <div className="container mb-12 flex flex-col lg:flex-row">
        <div className="basis-1/3 flex flex-col md:items-center lg:items-start gap-4 lg:gap-6">
          <Logo />
          <p className="text-lg">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>
          <ul className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-0">
            {socialLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-2/3 grid grid-cols-2 lg:grid-cols-4 pt-8 lg:pt-0 lg:ps-8">
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
        <p className="capitalize pt-4 text-center lg:text-start">
          {`© ${currentYear} ocean, inc. all rights reserved.`}
        </p>
      </div>
      {/* Copyrights */}
    </footer>
  );
};
export default Footer;
