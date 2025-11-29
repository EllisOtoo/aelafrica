import Link from "next/link";
import {
  Award,
  CheckCircle,
  HardHat,
  ShieldCheck,
  Users2,
  Zap,
} from "lucide-react";

const focusAreas = [
  {
    title: "Plumbing",
    description:
      "Comprehensive plumbing systems tailored for estates, commercial hubs, and institutional facilities, emphasizing reliability and efficiency.",
  },
  {
    title: "Engineering",
    description:
      "Civil and structural engineering expertise that strengthens infrastructure and ensures every build meets regulatory and safety standards.",
  },
  {
    title: "Repairs",
    description:
      "Rapid-response maintenance and remedial works that keep mission-critical systems running with minimal downtime.",
  },
];

const coreValues = [
  {
    title: "Teamwork",
    description:
      "We are committed to delivering high-quality work on time for all stakeholders and clients.",
    icon: Users2,
  },
  {
    title: "Integrity",
    description:
      "We uphold strong moral and ethical principles, ensuring transparency in all our work.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description:
      "We strive to consistently deliver work that meets the highest industry standards and satisfies our customers.",
    icon: Award,
  },
  {
    title: "Responsiveness",
    description:
      "We address internal and external customer concerns with focus, speed, and skill.",
    icon: Zap,
  },
  {
    title: "Safety",
    description:
      "We execute all projects in compliance with required safety standards and environmental practices.",
    icon: HardHat,
  },
  {
    title: "Accountability",
    description:
      "We take responsibility for our actions and commitments to ensure trust and reliability.",
    icon: CheckCircle,
  },
];

const missionVision = [
  {
    title: "Vision",
    description:
      "To build trusted relationships with satisfied clients through integrity, honesty, and quality work, delivering solutions in a collaborative, efficient, and cost-effective manner.",
  },
  {
    title: "Mission",
    description:
      "To provide responsive, safe, and trusted plumbing and civil engineering solutions, offering high-quality, dependable, and cost-effective engineering, design, and construction management services.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F8F6F2] text-[#222222]">
      <section className="mx-auto w-full max-w-6xl px-5 pt-32 pb-16 sm:px-8 md:px-10 lg:px-16 lg:pt-40 lg:pb-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="space-y-6 lg:flex-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F0F0F0] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#7F4511]">
              About Us
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#1F140C] sm:text-[52px]">
              Alpha Engineering Limited
            </h1>
            <p className="text-lg leading-relaxed text-[#666666]">
              Alpha Engineering Limited is a plumbing and civil engineering firm
              at GA-288-5164, Clinton Lane, near Allied Filing Station, Shiashie,
              Accra. We deliver reliable systems for public institutions and
              private developers.
            </p>
            <p className="text-lg leading-relaxed text-[#666666]">
              Long-term relationships with clients, consultants, and contractors
              reflect our commitment to quality, safety, and satisfaction.
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#7F4511]">
              {focusAreas.map((area) => (
                <span
                  key={area.title}
                  className="rounded-full border border-[#E0D8CC] px-4 py-2"
                >
                  {area.title}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-[32px] border border-[#F0F0F0] bg-white/80 p-8 text-[#222222] shadow-[0_20px_60px_rgba(15,23,42,0.08)] lg:max-w-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#AD7A50]">
                Headquarters
              </p>
              <p className="mt-2 text-lg font-semibold text-[#1F140C]">
                GA-288-5164, Clinton Lane,
                <br /> near Allied Filing Station, Shiashie, Accra.
              </p>
            </div>
            <div className="rounded-2xl bg-[#FFF7EC] p-4 text-sm leading-relaxed text-[#7F4511]">
              <p>
                Decades of field-tested work help us plan, build, and maintain
                resilient systems that meet Ghana&apos;s evolving needs.
              </p>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-[#0E1B2C] px-5 py-4 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                  Get in Touch
                </p>
                <p className="text-lg font-semibold">
                  info@ael.africa
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#7F4511] shadow-lg"
                aria-label="Contact Alpha Engineering"
              >
                →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-16 sm:px-8 md:px-10 lg:px-16 lg:py-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#A5621C]">
                What We Deliver
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1F140C] sm:text-4xl">
                Engineering Expertise That Powers Ghana
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-[#666666]">
              We combine multidisciplinary teams with precision planning to
              provide solutions that are dependable, compliant, and built for
              longevity across public and private developments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <article
                key={area.title}
                className="flex flex-col rounded-3xl border border-[#F0F0F0] bg-[#FDFBF7] px-6 py-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
              >
                <span className="text-sm font-semibold text-[#AD7A50]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-[#1F140C]">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A3526]">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:px-10 lg:px-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {missionVision.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-[#F0F0F0] bg-white px-8 py-10 shadow-[0_20px_55px_rgba(15,23,42,0.08)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#A5621C]">
                {item.title}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#4A3526]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#7F4511] via-[#5B2C09] to-[#2C1404] text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:px-10 lg:px-16 lg:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/60">
                Our Core Values
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                The principles that guide our partnerships
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-white/80">
              These values shape how we collaborate, the standards we uphold on
              every site, and the way we nurture the trust placed in us by
              communities and stakeholders.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="rounded-3xl border border-white/15 bg-white/10 px-6 py-8 shadow-[0_24px_60px_rgba(0,0,0,0.25)] backdrop-blur"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#7F4511]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
