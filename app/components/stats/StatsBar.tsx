const STATS = [
  { value: "40+", label: "Years Established" },
  { value: "60+", label: "Completed Projects" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "G1", label: "MWH Classification" },
];

const StatsBar = () => {
  return (
    <section className="bg-[#2C1404] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-16 sm:px-8 md:px-10 md:gap-12 md:py-20 lg:px-16">
        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 left-1/2 z-0 block w-px -translate-x-1/2 bg-[#4A2D0C] lg:hidden" />
          <span className="pointer-events-none absolute inset-x-0 top-1/2 z-0 block h-px -translate-y-1/2 bg-[#4A2D0C] lg:hidden" />
          <span className="pointer-events-none absolute inset-y-[12%] left-1/4 hidden w-px -translate-x-1/2 bg-[#4A2D0C] lg:block" />
          <span className="pointer-events-none absolute inset-y-[12%] left-1/2 hidden w-px -translate-x-1/2 bg-[#4A2D0C] lg:block" />
          <span className="pointer-events-none absolute inset-y-[12%] left-3/4 hidden w-px -translate-x-1/2 bg-[#4A2D0C] lg:block" />
          <dl className="relative z-10 grid grid-cols-2 gap-0 lg:grid-cols-4 lg:gap-0">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-start gap-4 px-6 py-12 text-left sm:px-10 lg:px-8 lg:py-14"
              >
                <dt className="flex flex-col items-start gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#EAA315]">
                  <span>{stat.label}</span>
                  <div className="h-px w-12 bg-[#EAA315]" aria-hidden="true" />
                </dt>
                <dd className="font-semibold tracking-tight text-white">
                  <span className="text-5xl sm:text-6xl lg:text-7xl">{stat.value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
