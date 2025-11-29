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
      "Seasoned plumbing and civil engineering teams for complex systems and infrastructure.",
    icon: Layers3,
  },
  {
    title: "Our Legacy",
    description:
      "Decades of delivery that prove our quality, precision, and reliability.",
    icon: Sparkles,
  },
  {
    title: "Public and Private Sector Pioneers",
    description:
      "Work across public infrastructure and private developments, tuned to each stakeholder.",
    icon: Building2,
  },
  {
    title: "Building Strong Relationships",
    description:
      "Long-term partnerships keep objectives aligned and communication clear.",
    icon: Handshake,
  },
  {
    title: "Our Commitments",
    description:
      "We push standards forward with practical innovation and disciplined delivery.",
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
                Two decades in Ghana&apos;s construction industry give us the
                experience to design, build, and maintain systems that simply
                work—safely, on schedule, and to spec.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-[#F0F0F0] bg-white/90 p-6 text-sm text-[#666666] shadow-sm shadow-black/5 lg:max-w-md">
            <p>
              Strategic guidance plus hands-on delivery keep projects moving
              smoothly from plan to handover.
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
