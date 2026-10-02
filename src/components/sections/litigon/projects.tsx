import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import riyadBank from "@/assets/litigon/project-riyad-bank-stage.jpg";
import saudiPavilion from "@/assets/litigon/project-saudi-pavilion.jpg";
import formulaOne from "@/assets/litigon/project-formula-one.jpg";
import airShow from "@/assets/litigon/project-air-show.jpg";
import desertRally from "@/assets/litigon/project-desert-rally.jpg";
import paddockClub from "@/assets/litigon/project-paddock-club.jpg";
import policeDroneBooth from "@/assets/litigon/project-police-drone-booth.jpg";
import ajlanBros from "@/assets/litigon/project-ajlan-bros-booth.jpg";
import qetafMedical from "@/assets/litigon/project-qetaf-medical.jpg";
import stcPlay from "@/assets/litigon/project-stc-play.jpg";
import lazadak from "@/assets/litigon/project-lazadak-booth.jpg";
import nightBooths from "@/assets/litigon/project-night-booths.jpg";
import padel from "@/assets/litigon/project-activation-padel.jpg";

export const projects = [
  {
    image: riyadBank,
    title: "Riyad Bank main stage",
    category: "Corporate conference",
    description: "Stage design, screens and full technical production for a national bank event.",
  },
  {
    image: saudiPavilion,
    title: "Saudi pavilion",
    category: "Exhibition",
    description: "Pavilion concept, build and hosting team for an international exhibition.",
  },
  {
    image: formulaOne,
    title: "Formula 1 activation",
    category: "Sports hospitality",
    description: "Brand activation and guest experience around a Formula 1 race weekend.",
  },
  {
    image: paddockClub,
    title: "Paddock Club hospitality",
    category: "VIP hospitality",
    description: "VIP lounge design, catering coordination and guest management.",
  },
  {
    image: airShow,
    title: "Air show",
    category: "Public show",
    description: "Aerial display programming with crowd management and live commentary.",
  },
  {
    image: desertRally,
    title: "Desert rally",
    category: "Motorsport",
    description: "Route logistics, hospitality camps and safety operations in the desert.",
  },
  {
    image: policeDroneBooth,
    title: "Security forces exhibition booth",
    category: "Government exhibition",
    description: "Interactive booth featuring drone technology and live demonstrations.",
  },
  {
    image: ajlanBros,
    title: "Ajlan & Bros booth",
    category: "Exhibition stand",
    description: "Custom stand design and build for a leading Saudi group.",
  },
  {
    image: qetafMedical,
    title: "Qetaf Medical",
    category: "Healthcare event",
    description: "Exhibition presence and visitor experience for a medical brand.",
  },
  {
    image: stcPlay,
    title: "STC Play zone",
    category: "Brand activation",
    description: "Gaming and entertainment activation with a fully themed environment.",
  },
  {
    image: lazadak,
    title: "Lazadak stand",
    category: "Exhibition stand",
    description: "Retail-style stand with product display and hosting staff.",
  },
  {
    image: nightBooths,
    title: "Cultural season village",
    category: "Cultural season",
    description: "Multi-booth village with lighting design and evening programming.",
  },
  {
    image: padel,
    title: "Padel activation",
    category: "Sports activation",
    description: "Sponsored padel court activation with audience entertainment.",
  },
];

const Projects = ({ limit }: { limit?: number }) => {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <section className={`bg-black text-white ${limit ? "py-16 md:py-24" : "pb-16 pt-2 md:pb-24"}`}>
      <Container>
        {limit ? (
          <AnimateOnView once blur className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[620px]">
              <h2 className="h2 mb-5">Featured projects</h2>
              <p className="paragraph-large text-muted">
                Conferences, exhibitions, sports weekends and national celebrations delivered
                across the Kingdom.
              </p>
            </div>
            <Button asChild variant="gray">
              <Link to="/projects">
                All projects
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </AnimateOnView>
        ) : null}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((project, index) => (
            <AnimateOnView key={project.title} once delay={index * 0.05} className="h-full">
              <article className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    decoding="async"
                    alt={project.title}
                    loading="lazy"
                    className="block h-[calc(100%+6px)] w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">{project.category}</p>
                  <h3 className="h6">{project.title}</h3>
                  <p className="text-sm text-muted">{project.description}</p>
                </div>
              </article>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
