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
  {
    heading: "Services",
    links: [
      { label: "Plumbing & Fire Fighting", href: "/services/plumbing-fire" },
      { label: "Civil Engineering", href: "/services/civil-engineering" },
      { label: "Project Management", href: "/services/project-management" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Completed Projects", href: "/projects" },
      { label: "News & Insights", href: "/news" },
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

  return (
    <footer className="relative overflow-hidden bg-[#7F4511] text-white">
      <div className="pointer-events-none absolute left-8 top-20 hidden h-16 w-16 rounded-xl bg-white/10 lg:block" />
      <div className="pointer-events-none absolute left-32 top-32 hidden h-16 w-16 rounded-xl bg-white/5 lg:block" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-20 sm:px-8 md:px-10 lg:px-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <div className="flex flex-col gap-4">
              <Image
                src="/images/ael-logo-light.png"
                alt="Alpha Engineering Limited"
                width={1967}
                height={462}
                className="h-12 w-auto"
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
                    href="mailto:alphaengacc@gmail.com"
                    className="transition hover:text-[#F3C15B]"
                  >
                    alphaengacc@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
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

          <div className="flex flex-col gap-5 rounded-3xl bg-[#5B2C09] px-6 py-8 shadow-lg shadow-black/10 sm:px-8 lg:col-span-3">
            <h4 className="text-lg font-semibold leading-tight">
              Join our newsletter for project updates
            </h4>
            <form className="flex flex-col gap-4" noValidate>
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email here"
                  className="w-full rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#F3C15B] focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#F3C15B] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#2C1404] transition hover:bg-[#FFD36B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Join
                </button>
              </div>
              <span className="text-xs text-white/60">
                By subscribing, you agree to our Privacy Policy.
              </span>
            </form>
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
