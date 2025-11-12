import {
  Building2,
  Handshake,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    title: "Expertise in Plumbing and Civil Engineering",
    description:
      "We bring a wealth of experience and technical knowledge to every engagement, from complex infrastructure development to intricate plumbing solutions executed with precision.",
    icon: Layers3,
  },
  {
    title: "Our Legacy",
    description:
      "Decades of successful delivery have cemented our reputation for excellence. Each milestone demonstrates our commitment to precision, innovation, and unwavering quality benchmarks.",
    icon: Sparkles,
  },
  {
    title: "Public and Private Sector Pioneers",
    description:
      "Our portfolio spans transformative public infrastructure and cutting-edge private developments, giving us nuanced insight into diverse stakeholder needs and constraints.",
    icon: Building2,
  },
  {
    title: "Building Strong Relationships",
    description:
      "Long-term partnerships with clients, consultants, and contractors keep projects aligned with shared objectives and transparent communication at every stage.",
    icon: Handshake,
  },
  {
    title: "Our Commitments",
    description:
      "We continually push boundaries, embrace innovation, and pioneer new techniques to elevate plumbing and civil engineering standards across Ghana and the sub-region.",
    accent: true,
    icon: ShieldCheck,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F8F6F2] text-[#222222]">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:px-10 lg:px-16 lg:py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-6 lg:max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F0F0F0] px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#7F4511]">
              Why Choose Us
            </span>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
                Why Choose Alpha Engineering
              </h2>
              <p className="text-base text-[#666666] sm:text-lg">
                With over two decades of experience in Ghana&apos;s construction
                industry, Alpha Engineering leads the field in comprehensive
                plumbing engineering services. Our commitment to excellence,
                innovative solutions, and unwavering dedication to client
                satisfaction set us apart.
              </p>
              <p className="text-base text-[#666666] sm:text-lg">
                We combine cutting-edge technology with time-tested expertise to
                deliver work that exceeds expectations, ensuring every
                installation meets the highest standards of quality, safety, and
                efficiency.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-[#F0F0F0] bg-white/90 p-6 text-sm text-[#666666] shadow-sm shadow-black/5 lg:max-w-md">
            <p>
              We pair strategic insight with hands-on craftsmanship, enabling
              project teams to move confidently from planning to completion
              while preserving timelines and budgets.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {HIGHLIGHTS.map((item, index) => {
            const isAccent = item.accent;
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`flex flex-col rounded-3xl border px-6 py-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  isAccent
                    ? "border-transparent bg-gradient-to-br from-[#7F4511] to-[#EAA315] text-white"
                    : "border-[#F0F0F0] bg-white text-[#222222]"
                }`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${
                      isAccent
                        ? "bg-white/20 text-white"
                        : "bg-[#F8F6F2] text-[#7F4511]"
                    }`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span
                    className={`text-sm font-semibold tracking-[0.28em] ${
                      isAccent ? "text-white/70" : "text-[#AD7A50]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className={`text-xl font-semibold leading-snug ${
                    isAccent ? "text-white" : "text-[#222222]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    isAccent ? "text-white/85" : "text-[#666666]"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
