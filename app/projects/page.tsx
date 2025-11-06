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
      <HorizontalProjectAccordion items={projects} />
      <MobileProjectCarousel items={projects} />
      <ProjectsMasonry />
    </div>
  );
};

export default Projects;
