const MissionCta = () => {
  return (
    <section className="bg-[#F8F6F2] text-[#222222]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-20 sm:px-8 md:flex-row md:items-start md:justify-between md:px-10 lg:px-16">
        <div className="flex max-w-3xl flex-col gap-8">
          <p className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
            Alpha Engineering Limited provides responsive, safe, and trusted solutions
            with the highest-quality, most dependable, cost-effective engineering,
            design, and construction management services.
          </p>
          <a
            href="#projects"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#7F4511] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-150 hover:bg-[#93551A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAA315]"
          >
            View Our Work
          </a>
        </div>

        <div className="flex max-w-sm flex-col gap-6 text-sm text-[#666666] md:border-l md:border-[#E0D8CC] md:pl-8">
          <p>
            Reach out to us to receive a copy of our company profile and see how we can
            assist your next project.
          </p>
          <div className="h-px w-20 bg-[#E0D8CC]" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default MissionCta;
