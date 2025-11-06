type ProjectCard = {
  id: string;
  client: string;
  serviceProvided: string;
  description: string;
  accent?: "gold" | "russet" | "slate" | "white";
  span?: "feature" | "cta";
  isCta?: boolean;
};

const cards: ProjectCard[] = [
  {
    id: "ssnit",
    client: "Featured Partnership",
    serviceProvided: "Building for the Nation: Our Work with SSNIT",
    description:
      "Full plumbing design, distribution networks, and fire protection for the Borteyman & Asokore Mampong affordable housing communities.",
    accent: "gold",
    span: "feature",
  },
  {
    id: "ashesi",
    client: "Ashesi University",
    serviceProvided: "Plumbing Installation",
    description: "Campus hub, guest house, and wet lab upgrades.",
    accent: "slate",
  },
  {
    id: "nestle",
    client: "Nestle Ghana Ltd.",
    serviceProvided: "Washroom Refurbishment",
    description: "Mechanical and plumbing fit-out for manufacturing blocks.",
    accent: "russet",
  },
  {
    id: "bog",
    client: "Bank of Ghana",
    serviceProvided: "Mechanical & Fire Protection",
    description:
      "Regional office and cash processing center – High Street, Accra.",
    accent: "white",
  },
  {
    id: "youth",
    client: "Ministry of Youth & Sports",
    serviceProvided: "Stadium Fire Protection",
    description:
      "Sprinkler retrofits and pump upgrades for Accra Sports Stadium.",
    accent: "white",
  },
  {
    id: "airports",
    client: "Ghana Airports Company",
    serviceProvided: "MEP Systems Upgrade",
    description: "Terminal plumbing, sewage, and fire suppression maintenance.",
    accent: "slate",
  },
  {
    id: "cta",
    client: "Explore Our Full Project Portfolio",
    serviceProvided: "View more projects",
    description: "Dive deeper into decades of landmark delivery across Ghana.",
    accent: "russet",
    span: "cta",
    isCta: true,
  },
];

const accentStyles: Record<
  NonNullable<ProjectCard["accent"]>,
  { container: string; label: string; body: string }
> = {
  gold: {
    container: "bg-[#EAA315] text-[#5A2E04]",
    label: "text-[#5A2E04]/80",
    body: "text-[#5A2E04]",
  },
  russet: {
    container: "bg-[#7F4511] text-white",
    label: "text-white/70",
    body: "text-white",
  },
  slate: {
    container: "bg-[#1F1F1F] text-white",
    label: "text-white/70",
    body: "text-white",
  },
  white: {
    container: "bg-white text-[#2C1404] border border-black/5",
    label: "text-[#8A5C31]",
    body: "text-[#2C1404]",
  },
};

const spanClasses: Record<NonNullable<ProjectCard["span"]>, string> = {
  feature: "md:col-span-2 md:row-span-2",
  cta: "md:col-span-2 lg:col-span-3 md:row-span-2",
};

const ProjectsMasonry = () => {
  return (
    <section className="">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:px-10 lg:px-16 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[#EAA315]">
            Additional Projects
          </span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Partnerships That Shape Ghana&apos;s Infrastructure
          </h2>
        </div>

        <div className="grid auto-rows-[minmax(220px,_auto)] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const accent = accentStyles[card.accent ?? "gold"];
            const span = card.span ? spanClasses[card.span] : "";
            return (
              <div
                key={card.id}
                className={`flex flex-col justify-between gap-4 rounded-[28px] p-6 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.2)] ${accent.container} ${span}`}
              >
                <div className="space-y-4">
                  <div
                    className={`text-xs font-semibold uppercase tracking-[0.28em] ${accent.label}`}
                  >
                    {card.client}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
                      Service Provided
                    </p>
                    <h3 className="text-2xl font-semibold leading-snug">
                      {card.serviceProvided}
                    </h3>
                  </div>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${accent.body}`}>
                  {card.description}
                </p>
                {card.isCta && (
                  <div className="mt-8">
                    <a
                      href="/projects"
                      className="inline-flex items-center gap-3 rounded-full bg-[#EAA315] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#4A2507] transition hover:bg-[#f3c452]"
                    >
                      Explore Portfolio
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4A2507] text-white">
                        →
                      </span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMasonry;
