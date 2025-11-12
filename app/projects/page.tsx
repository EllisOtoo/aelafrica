import HorizontalProjectAccordion from "../components/projects/projectHighlights";
import MobileProjectCarousel from "../components/projects/projectsResponsive";
import SectionHero from "../components/hero/SectionHero";
import ProjectsMasonry from "../components/projects/ProjectsMasonry";

const projects = [
  {
    id: "p1",
    number: "01",
    title: "Paiton Solar Farm",
    client: "PT Perusahaan Listrik Negara (Persero)",
    location: "East Java, Indonesia",
    excerpt:
      "A utility-scale installation with floating arrays and high-wind tracking systems.",
    accent: "#EAB308",
  },
  {
    id: "p2",
    number: "02",
    title: "Suramadu Solar Farm",
    client: "PT Perusahaan Listrik Negara (Persero)",
    location: "Surabaya, Indonesia",
    excerpt:
      "200MW floating solar farm. Our team installed 46,000 piles as part of the NEXTracker system—targeting mid-2025 go-live.",
    accent: "#EAB308",
  },
  {
    id: "p3",
    number: "03",
    title: "Karimun Jawa Solar Farm",
    client: "PT Perusahaan Listrik Negara (Persero)",
    location: "Central Java, Indonesia",
    excerpt:
      "Island-grid stabilization with utility storage. Marine-grade racking across lagoon zones.",
    accent: "#EAB308",
  },
];

const Projects = () => {
  return (
    <div className="">
      <SectionHero
        label="Projects"
        caption="A Legacy of Landmarks"
        subCaption="For over 40 years, we have delivered projects that shape communities and drive progress. Explore a selection of our completed works that stand as a testament to our commitment to quality, safety, and engineering excellence."
      />
      <div className="mx-auto w-full max-w-6xl px-5 pb-6 sm:px-8 md:px-10 lg:px-16">
        <a
          href="/projects/portfolio"
          className="inline-flex items-center gap-3 rounded-full border border-[#E0D8CC] bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#7F4511] shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition hover:bg-[#FFF8EF]"
        >
          Explore full portfolio
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 md:px-10 lg:px-16">
        <HorizontalProjectAccordion items={projects} />
      </div>
      <div className="mx-auto w-full max-w-5xl px-5 pb-12 sm:px-8 md:px-10 lg:px-0">
        <MobileProjectCarousel items={projects} />
      </div>
      <ProjectsMasonry />
    </div>
  );
};

export default Projects;
