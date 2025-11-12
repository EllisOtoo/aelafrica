import { ArrowUpRight, FileText, Mail, Phone } from "lucide-react";

const contactHighlights = [
  {
    title: "Request our profile",
    description:
      "Get a detailed view of our capabilities, certifications, and landmark projects.",
    icon: FileText,
  },
  {
    title: "Talk to our team",
    description:
      "We respond promptly to scope discussions, RFPs, and technical clarifications.",
    icon: Phone,
  },
  {
    title: "Email us anytime",
    description: "projects@alphaengineering.com",
    icon: Mail,
  },
];

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
            className="inline-flex w-fit items-center justify-center gap-3 rounded-full bg-[#7F4511] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-150 hover:bg-[#93551A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAA315]"
          >
            View Our Work
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="flex max-w-sm flex-col gap-6 text-sm text-[#666666] md:border-l md:border-[#E0D8CC] md:pl-8">
          {contactHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4">
                <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-[#7F4511] shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#222222]">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#666666]">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionCta;
