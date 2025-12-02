import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import type { NavigationLink } from "./types";

type DesktopNavigationProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  primaryLinks: NavigationLink[];
  secondaryLinks: NavigationLink[];
};

export default function DesktopNavigation({
  isOpen,
  onToggle,
  onClose,
  primaryLinks,
  secondaryLinks,
}: DesktopNavigationProps) {
  const menuIcon = useMemo(
    () => (
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300/60 bg-white/70 transition hover:border-zinc-300 hover:bg-white/80">
        <span className="sr-only">
          {isOpen ? "Close navigation menu" : "Open navigation menu"}
        </span>
        <span
          aria-hidden="true"
          className="relative flex h-3 w-4 flex-col justify-between"
        >
          {isOpen ? (
            <>
              <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 rotate-45 bg-zinc-800 transition" />
              <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 -rotate-45 bg-zinc-800 transition" />
            </>
          ) : (
            <>
              <span className="h-[1.5px] w-full bg-zinc-800 transition" />
              <span className="h-[1.5px] w-full bg-zinc-800 transition" />
              <span className="h-[1.5px] w-full bg-zinc-800 transition" />
            </>
          )}
        </span>
      </span>
    ),
    [isOpen]
  );

  return (
    <div className="relative hidden w-full flex-col md:flex">
      <div className="flex items-center justify-between px-6 py-4 lg:px-16">
        <Link
          href="/"
          className="flex items-center transition hover:opacity-90"
        >
          <Image
            src="/images/ael-logo-dark.png"
            alt="Alpha Engineering Limited"
            width={200}
            height={47}
            className="h-10 w-auto"
            priority
            unoptimized
          />
        </Link>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onToggle}
            className="transition-transform duration-300 hover:scale-[1.05]"
          >
            {menuIcon}
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#EAA315] px-5 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-white  transition hover:bg-[#f0b83e]"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 top-full px-6 transition-[max-height] duration-500 ease-out lg:px-10 ${
          isOpen
            ? "pointer-events-auto visible max-h-[420px]"
            : "pointer-events-none invisible max-h-0"
        }`}
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/70 px-10 py-9 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
          <div className="grid grid-cols-2 gap-12">
            <nav className="flex flex-col gap-5">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Explore
              </span>
              <ul className="flex flex-col gap-3 text-2xl font-semibold text-zinc-900">
                {primaryLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition duration-200 hover:text-zinc-700"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-12 h-48 w-48 rounded-full bg-[#EAA315]/30 blur-3xl"
          />
        </div>
      </div>
    </div>
  );
}
