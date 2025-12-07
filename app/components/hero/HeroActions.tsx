"use client";

import Link from "next/link";

/**
 * CTA buttons that drive engagement from the hero section.
 */
const HeroActions = () => {
  const whatsappHref =
    "https://wa.me/233277600770?text=Hello%20Alpha%20Engineering%2C%20I%27d%20like%20to%20discuss%20a%20project.";

  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#F8D064] via-[#EAA315] to-[#C4721D] px-8 py-4 text-sm font-bold uppercase tracking-[0.28em] text-[#2C1404] shadow-[0_18px_48px_rgba(0,0,0,0.3)] transition duration-150 hover:translate-y-[-1px] hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
        >
          Get a Quote
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm transition duration-150 hover:border-white/50 hover:bg-white/10"
        >
          Contact Us
        </Link>
        <Link
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#0E2A14] shadow-[0_14px_36px_rgba(0,0,0,0.25)] transition duration-150 hover:scale-[1.01] hover:shadow-[0_16px_44px_rgba(0,0,0,0.3)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden
          >
            <path d="M12.04 2C6.61 2 2.2 6.4 2.2 11.85c0 1.72.45 3.41 1.31 4.9L2 22l5.36-1.48c1.44.78 3.05 1.18 4.68 1.18 5.43 0 9.84-4.4 9.84-9.85C21.88 6.4 17.47 2 12.04 2Zm0 17.93c-1.47 0-2.9-.4-4.15-1.16l-.3-.18-3.18.88.86-3.1-.2-.32a7.8 7.8 0 0 1-1.2-4.2c0-4.35 3.55-7.89 7.97-7.89 4.41 0 7.97 3.54 7.97 7.89 0 4.36-3.56 7.88-7.97 7.88Zm4.41-5.84c-.24-.12-1.44-.7-1.66-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.18-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.38.1-.5.1-.1.24-.26.36-.38.12-.12.16-.2.24-.34.08-.16.04-.28-.02-.4-.06-.12-.54-1.28-.74-1.74-.2-.48-.4-.4-.54-.4h-.46c-.16 0-.4.06-.62.3-.22.24-.82.8-.82 1.94 0 1.14.84 2.24.96 2.4.12.16 1.64 2.5 3.98 3.5.56.24 1 .38 1.34.48.56.18 1.08.16 1.48.1.46-.06 1.44-.58 1.64-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
          </svg>
          WhatsApp
        </Link>
      </div>

      <div className="flex w-full flex-col gap-3 rounded-2xl border border-white/12 bg-white/5 px-5 py-4 text-sm text-white/80 backdrop-blur-sm sm:max-w-md">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#F3C15B]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              aria-hidden
            >
              <path
                d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#F3C15B]">
              Head Office
            </p>
            <p className="text-sm font-semibold text-white">
              Clinton Lane, Shiashie, Accra, Ghana
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[#F3C15B]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              aria-hidden
            >
              <path
                d="M12 7v5l3 1.8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#F3C15B]">
              Working Hours
            </p>
            <p className="text-sm font-semibold text-white">
              Mon–Fri · 8:00 AM – 5:00 PM
            </p>
            <p className="text-xs text-white/70">
              Call ahead for site visits or after-hours coordination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroActions;
