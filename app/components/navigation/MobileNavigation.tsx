import Image from "next/image";
import Link from "next/link";
import type { NavigationLink } from "./types";

type MobileNavigationProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  primaryLinks: NavigationLink[];
  secondaryLinks: NavigationLink[];
};

export default function MobileNavigation({
  isOpen,
  onToggle,
  onClose,
  primaryLinks,
  secondaryLinks,
}: MobileNavigationProps) {
  return (
    <div className="relative flex w-full flex-col md:hidden">
      <div className="flex items-center justify-between px-5 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center transition hover:opacity-90"
        >
          <Image
            src="/images/ael-logo-dark.png"
            alt="Alpha Engineering Limited"
            width={200}
            height={47}
            className="h-8 w-auto"
            priority
            unoptimized
          />
        </Link>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggle}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/70 transition hover:scale-[1.05] hover:border-white/70"
            aria-expanded={isOpen}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <span
              aria-hidden="true"
              className="relative flex h-2.5 w-3.5 flex-col justify-between"
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
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#EAA315] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_6px_14px_rgba(234,163,21,0.3)] transition hover:bg-[#f0b83e]"
          >
            Contact
          </Link>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 top-full transition-all duration-500 ease-out ${
          isOpen
            ? "pointer-events-auto visible max-h-[32rem] opacity-100"
            : "pointer-events-none invisible max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-6 sm:px-6">
          <div className="relative rounded-3xl border border-white/50 bg-white/70 px-6 py-7 shadow-[0_28px_72px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
            <nav className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
                  Explore
                </span>
                <ul className="flex flex-col gap-4 text-xl font-semibold text-zinc-900">
                  {primaryLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="transition duration-200 hover:text-zinc-700"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 top-10 h-32 w-32 rounded-full bg-[#EAA315]/25 blur-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
