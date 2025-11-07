import Link from "next/link";
import SectionHero from "../components/hero/SectionHero";

const serviceCards = [
  {
    id: "01",
    title: "Plumbing & Fire Fighting",
    subtitle: "High-standard mechanical services for buildings.",
    tagline: "Our Commitment to Quality",
    description:
      "Ensuring the safety and functionality of every building with certified, industry-standard plumbing, pumping, and fire suppression installations.",
    placeholder: "#D9D4CF",
  },
  {
    id: "02",
    title: "Civil & Structural Engineering",
    subtitle: "Building the foundations of modern infrastructure.",
    tagline: "Built to Last",
    description:
      "From design to construction, we provide dependable solutions for public and private sector developments, renovations, and expansions.",
    placeholder: "#CFC8C0",
  },
  {
    id: "03",
    title: "Project Management",
    subtitle: "Coordinated delivery with trusted partners.",
    tagline: "A Focus on Dependability",
    description:
      "We deliver cost-effective and dependable project management services that keep budgets, timelines, and quality controls on track.",
    placeholder: "#E2DBD1",
  },
];

const Services = () => {
  return (
    <div className="bg-[#F5EFE8] text-[#1F140C]">
      <SectionHero
        label="Our Capabilities"
        caption="Our Core Engineering Services"
        subCaption="High-standard mechanical and civil engineering services tailored for Ghana's most demanding public and private infrastructure projects."
        tone="light"
      />

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:px-10 lg:px-16 lg:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#A5621C]">
              Our Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#221710] sm:text-4xl">
              Tailored Solutions for Every Project
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#EAA315] px-6 py-3 text-sm font-semibold uppercase text-[#512807] transition hover:bg-[#f3c452]"
            >
              Request a Quote
            </Link>
            <Link
              href="/projects"
              // className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7F4511] transition hover:text-[#5C2E0A]"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase  text-[#7F4511] transition hover:text-[#5C2E0A]"
            >
              Explore Projects
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => (
            <article
              key={service.id}
              className="flex h-full flex-col rounded-[28px] bg-white px-6 pb-8 pt-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center justify-between text-sm text-[#8A8A8A]">
                <span>({service.id})</span>
                <div
                  className="h-2 w-2 rounded-full bg-[#EAA315]"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-[#1F140C]">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6B5A4A]">{service.subtitle}</p>
              </div>

              <div
                className="mt-6 h-48 w-full rounded-2xl"
                style={{ backgroundColor: service.placeholder }}
                aria-hidden="true"
              />

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#AD7A50]">
                  {service.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#4A3526]">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
