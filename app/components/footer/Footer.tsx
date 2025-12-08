import Image from "next/image";
import Link from "next/link";

const LINK_GROUPS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Core Values", href: "/about#values" },
      { label: "Careers", href: "/careers" },
      { label: "Safety Policy", href: "/about#safety" },
    ],
  },
  // {
  //   heading: "Services",
  //   links: [
  //     { label: "Plumbing & Fire Fighting", href: "/services/plumbing-fire" },
  //     { label: "Civil Engineering", href: "/services/civil-engineering" },
  //     { label: "Project Management", href: "/services/project-management" },
  //   ],
  // },
  {
    heading: "Resources",
    links: [
      { label: "Completed Projects", href: "/projects" },
      // { label: "News & Insights", href: "/news" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

const POLICY_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappHref =
    "https://wa.me/233277600770?text=Hello%20Alpha%20Engineering%2C%20I%27d%20like%20to%20discuss%20a%20project.";

  return (
    <footer className="relative overflow-hidden bg-[#7F4511] text-white">
      <div className="pointer-events-none absolute left-8 top-20 hidden h-16 w-16 rounded-xl bg-white/10 lg:block" />
      <div className="pointer-events-none absolute left-32 top-32 hidden h-16 w-16 rounded-xl bg-white/5 lg:block" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-20 sm:px-8 md:px-10 lg:px-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex flex-col gap-4">
              <Image
                src="/images/ael-logo-light.png"
                alt="Alpha Engineering Limited"
                width={220}
                height={52}
                priority
                sizes="220px"
                className="h-auto w-auto max-w-[220px]"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#F3C15B]">
                Alpha Engineering Limited
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              Providing responsive, safe, and trusted engineering solutions with
              the highest-quality, most dependable, and cost-effective services
              in Ghana.
            </p>
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
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <strong className="font-semibold text-white">
                  Head Office:
                </strong>{" "}
                Clinton Lane, Shiashie, Accra, Ghana
              </li>
              <li>
                <strong className="font-semibold text-white">
                  Postal Address:
                </strong>{" "}
                P.O. Box CT475 Cantonments, Accra, Ghana
              </li>
              <li>
                <strong className="font-semibold text-white">Phone:</strong>{" "}
                <a
                  href="tel:0303973857"
                  className="transition hover:text-[#F3C15B]"
                >
                  030 397 3857
                </a>
              </li>
              <li className="flex flex-col gap-2">
                <span>
                  <strong className="font-semibold text-white">
                    General Inquiries:
                  </strong>{" "}
                  <a
                    href="mailto:info@ael.africa"
                    className="transition hover:text-[#F3C15B]"
                  >
                    info@ael.africa
                  </a>
                </span>
                <span>
                  <strong className="font-semibold text-white">
                    Alternative Email:
                  </strong>{" "}
                  <a
                    href="mailto:info@ael.africa"
                    className="transition hover:text-[#F3C15B]"
                  >
                    info@ael.africa
                  </a>
                </span>
              </li>
            </ul>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-[0_14px_36px_rgba(0,0,0,0.25)] transition duration-150 hover:bg-white/30 hover:shadow-[0_16px_44px_rgba(0,0,0,0.35)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 text-white"
                aria-hidden
              >
                <path d="M12.04 2C6.61 2 2.2 6.4 2.2 11.85c0 1.72.45 3.41 1.31 4.9L2 22l5.36-1.48c1.44.78 3.05 1.18 4.68 1.18 5.43 0 9.84-4.4 9.84-9.85C21.88 6.4 17.47 2 12.04 2Zm0 17.93c-1.47 0-2.9-.4-4.15-1.16l-.3-.18-3.18.88.86-3.1-.2-.32a7.8 7.8 0 0 1-1.2-4.2c0-4.35 3.55-7.89 7.97-7.89 4.41 0 7.97 3.54 7.97 7.89 0 4.36-3.56 7.88-7.97 7.88Zm4.41-5.84c-.24-.12-1.44-.7-1.66-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.18-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.38.1-.5.1-.1.24-.26.36-.38.12-.12.16-.2.24-.34.08-.16.04-.28-.02-.4-.06-.12-.54-1.28-.74-1.74-.2-.48-.4-.4-.54-.4h-.46c-.16 0-.4.06-.62.3-.22.24-.82.8-.82 1.94 0 1.14.84 2.24.96 2.4.12.16 1.64 2.5 3.98 3.5.56.24 1 .38 1.34.48.56.18 1.08.16 1.48.1.46-.06 1.44-.58 1.64-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
              </svg>
              WhatsApp
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            {LINK_GROUPS.map((group) => (
              <div key={group.heading} className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F3C15B]">
                  {group.heading}
                </h4>
                <ul className="space-y-3 text-sm text-white/80">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="transition hover:text-[#F3C15B]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <svg
            className="h-8 w-full max-w-3xl text-[#8D4E12]"
            viewBox="0 0 960 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 32H120V48H240V32H360V48H480V32H600V48H720V32H840V48H960"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-8 border-t border-white/10 pt-8 text-sm text-white/70 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3 max-w-3xl">
            <p>
              © {currentYear} Alpha Engineering Limited. All rights reserved.
            </p>
            <p>
              Alpha Engineering Limited provides MEP and Civil Engineering
              contracting services. All information on this website is for
              informational purposes only. For project inquiries, please contact
              our head office directly for a formal consultation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {POLICY_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-white transition hover:text-[#F3C15B]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
