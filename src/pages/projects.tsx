import Container from "@/components/container";
import Layout from "@/components/layout";
import SEO from "@/components/seo";
import Projects from "@/components/sections/litigon/projects";
import LionWatermark from "@/components/sections/shared/lion-watermark";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

import { appConfig } from "@/utils/app-config";

const ProjectsPage = () => {
  const metaTitle = "Projects | Litigon Events & Conferences";
  const metaDescription =
    "Featured Litigon projects: conferences, exhibition stands, Formula 1 and motorsport hospitality, air shows, cultural seasons and brand activations in Saudi Arabia.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": metaTitle,
    "description": metaDescription,
    "url": `${appConfig.url}/projects`
  };

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} canonicalUrl="/projects" jsonLd={jsonLd} />
      <Layout>
        <section className="relative overflow-hidden bg-black text-white">
          <LionWatermark />
          <Container className="relative pt-[150px] md:pt-[190px] pb-10">
            <AnimateOnView once blur className="max-w-[820px]">
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-primary">Our work</p>
              <h1 className="h1 mb-6">Projects delivered across the Kingdom</h1>
              <p className="paragraph-large text-muted">
                A selection of conferences, exhibitions, sports weekends and public
                celebrations produced by the Litigon team.
              </p>
            </AnimateOnView>
          </Container>
        </section>
        <Projects />
      </Layout>
    </>
  );
};

export default ProjectsPage;
