"use client";

import { useEffect, useRef, useState } from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

const secondaryLinks = [
  { label: "Recent Highlights", href: "#highlights" },
  { label: "News & Insights", href: "#news" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isElevated, setIsElevated] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsElevated(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!isOpen) return;
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <header className="pointer-events-none relative z-30 w-full flex justify-center px-4  sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <div
          ref={navRef}
          className={`pointer-events-auto rounded-2xl relative transition-all duration-500 ease-out  ${
            isElevated ? "" : ""
          }`}
        >
          <DesktopNavigation
            isOpen={isOpen}
            onToggle={toggleMenu}
            onClose={closeMenu}
            primaryLinks={primaryLinks}
            secondaryLinks={secondaryLinks}
          />
          <MobileNavigation
            isOpen={isOpen}
            onToggle={toggleMenu}
            onClose={closeMenu}
            primaryLinks={primaryLinks}
            secondaryLinks={secondaryLinks}
          />
        </div>
      </div>
    </header>
  );
}
