const STATS = [
  { value: "40+", label: "Years Established" },
  { value: "60+", label: "Completed Projects" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "G1", label: "MWH Classification" },
];

const StatsBar = () => {
  return (
    <section className="bg-[#2C1404] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-16 sm:px-8 md:px-10 md:py-20 lg:px-16">
        <dl className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left"
            >
              <dt className="flex flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#EAA315] lg:items-start">
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
    </section>
  );
};

export default StatsBar;
