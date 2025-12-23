import Link from "next/link";
import Image from "next/image";
import SectionHero from "../components/hero/SectionHero";
import ProductsSection from "../components/services/ProductsSection";

const serviceCards = [
  {
    id: "01",
    title: "Plumbing Systems",
    subtitle: "Internal and external water, drainage, and pumping.",
    tagline: "Built for reliability",
    description:
      "Designing and installing pressurized water supply, sanitary stacks, pump rooms, and storage to keep facilities running safely around the clock.",
    placeholder: "#F6E3C3",
    image: "/images/services/plumbing.jpeg",
  },
  {
    id: "02",
    title: "Civil Engineering",
    subtitle: "Core infrastructure and structural works.",
    tagline: "Engineered foundations",
    description:
      "Delivering civil works from earthworks to reinforced concrete structures, drainage, and utilities that meet public and private sector standards.",
    placeholder: "#E8DAC9",
    image: "/images/services/civilengineering.png",
  },
  {
    id: "03",
    title: "Building Construction",
    subtitle: "Shell, finishes, and coordinated fit-outs.",
    tagline: "Quality from ground up",
    description:
      "Managing building construction and renovations with disciplined supervision to ensure timelines, safety, and workmanship stay on track.",
    placeholder: "#E4D2C2",
    image: "/images/services/Building Construction.png",
  },
  {
    id: "04",
    title: "Electrical Installations",
    subtitle: "Power, lighting, and controls for modern facilities.",
    tagline: "Safe power distribution",
    description:
      "Providing compliant electrical infrastructure, switchgear, and lighting that integrate with mechanical systems for dependable operations.",
    placeholder: "#F2E7D7",
    image: "/images/services/electrical installations.png",
  },
  {
    id: "05",
    title: "HVAC (Heating/Cooling)",
    subtitle: "Comfort cooling and ventilation for occupied spaces.",
    tagline: "Efficient environments",
    description:
      "Supplying and coordinating HVAC solutions that balance comfort, airflow, and energy use across offices, hostels, and mixed-use buildings.",
    placeholder: "#E9DFD3",
    image: "/images/services/hvac.png",
  },
  {
    id: "06",
    title: "Fire Protection Systems",
    subtitle: "Firefighting networks and life-safety support.",
    tagline: "Protection first",
    description:
      "Installing firefighting piping, hydrants, hose reels, and pump assemblies so buildings are prepared and compliant with safety standards.",
    placeholder: "#F7E0B8",
    image: "/images/services/fire.png",
  },
  {
    id: "07",
    title: "Solar Power Design and Installation",
    subtitle: "Renewable and backup generation.",
    tagline: "Resilient energy",
    description:
      "Designing solar-assisted solutions that stabilize power supply, reduce operating costs, and integrate with existing electrical systems.",
    placeholder: "#E5D5C2",
    image: "/images/services/solar.jpg",
  },
  {
    id: "08",
    title: "Maintenance Services",
    subtitle: "Preventive and corrective support for MEP assets.",
    tagline: "Uptime you can trust",
    description:
      "Providing scheduled maintenance and rapid response for plumbing, fire, and mechanical systems to extend asset life and reduce downtime.",
    placeholder: "#EFE4D8",
    image: "/images/services/Maintenance.png",
  },
  {
    id: "09",
    title: "MEP Designs",
    subtitle: "Front-end design and coordination drawings.",
    tagline: "Clear constructability",
    description:
      "Producing coordinated MEP designs and shop drawings that de-risk installations, sequencing, and approvals for complex builds.",
    placeholder: "#DDCFC2",
    image: "/images/services/mep.png",
  },
  {
    id: "10",
    title: "Supply and installation of Valves",
    subtitle: "Specialized flow control and pressure management.",
    tagline: "Precision flow control",
    description:
      "Providing specialized supply and installation of industrial-grade valves to ensure precise flow control and pressure management. Our solutions are engineered to enhance system longevity and prevent operational failures in complex networks.",
    placeholder: "#F6E3C3",
    image: "/images/services/Supply and installarion of Valves.jpeg",
  },
  {
    id: "11",
    title: "Water Treatment Units",
    subtitle: "Purification and filtration for clean water supply.",
    tagline: "Pure water solutions",
    description:
      "Installing comprehensive water treatment and filtration units designed to deliver clean, potable water for various applications. We utilize advanced technologies to eliminate impurities and maintain consistent water quality across all facilities.",
    placeholder: "#E8DAC9",
    image: "/images/services/Water Treatment Units.jpeg",
  },
];

const Services = () => {
  return (
    <div className="bg-[#F5EFE8] text-[#1F140C]">
      <SectionHero
        label="Our Capabilities"
        caption="Full-Scope MEP & Civil Services"
        subCaption="Integrated delivery across building systems—plumbing, fire protection, electrical, HVAC, solar, and maintenance—built for Ghana's most demanding projects."
        tone="light"
      />

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:px-10 lg:px-16 lg:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#A5621C]">
              Our Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#221710] sm:text-4xl">
              Integrated Delivery Across Building Systems
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
              className="flex h-full flex-col  bg-white px-6 pb-8 pt-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
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

              {service.image ? (
                <div className="relative mt-6 h-48 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className="mt-6 h-48 w-full rounded-2xl"
                  style={{ backgroundColor: service.placeholder }}
                  aria-hidden="true"
                />
              )}

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
      <ProductsSection />
    </div>
  );
};

export default Services;
