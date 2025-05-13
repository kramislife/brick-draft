import React from "react";
import { Link } from "react-router-dom";
import {
  publicNavLinks,
  accountLinks,
  supportInfo,
  socialLinks,
} from "@/constant/userNavigation";

const FooterSection = ({ title, children }) => (
  <div>
    <h2 className="font-['Bangers'] text-2xl tracking-wide border-b-2 border-foreground dark:border-accent mb-5 w-max">
      {title}
    </h2>
    {children}
  </div>
);

const NavLinks = ({ links }) => (
  <nav className="flex flex-col space-y-5">
    {links.map((link) => (
      <Link
        key={link.path}
        to={link.path}
        className="hover:text-background dark:hover:text-accent transition-colors duration-300 flex items-center gap-2"
      >
        <span>{link.name}</span>
      </Link>
    ))}
  </nav>
);

const SupportLinks = ({ items }) => (
  <div className="flex flex-col space-y-5">
    {items.map((item, index) => {
      if (item.type === "routerLink") {
        return (
          <Link
            key={index}
            to={item.path}
            className="hover:text-background dark:hover:text-accent transition-colors duration-300 flex items-center gap-2"
          >
            <span>{item.text}</span>
          </Link>
        );
      } else {
        return (
          <p key={index} className="flex items-center gap-2">
            <span>{item.text}</span>
          </p>
        );
      }
    })}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-accent text-foreground dark:bg-primary p-5">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
        <FooterSection title="Account">
          <NavLinks links={accountLinks} />
        </FooterSection>

        <FooterSection title="Quick Links">
          <NavLinks links={publicNavLinks} />
        </FooterSection>

        <div className="col-span-2 md:col-span-1">
          <FooterSection title="Support">
            <SupportLinks items={supportInfo} />
          </FooterSection>
        </div>

        <div className="col-span-2 md:col-span-1">
          <FooterSection title="Brick Draft">
            <p className="text-sm leading-6 mb-4">
              Connect with us for updates on new releases and promotions, or
              reach out via email for any inquiries or support needs.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, ariaLabel }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-foreground text-background dark:bg-muted-foreground/10 dark:text-accent hover:text-accent dark:hover:text-foreground p-3 rounded-full transition-colors duration-300"
                  aria-label={ariaLabel}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </FooterSection>
        </div>
      </div>

      <div className="mt-10 border-t border-foreground/10 dark:border-border pt-5 text-sm text-center">
        <p>© {new Date().getFullYear()} Brick Draft. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
