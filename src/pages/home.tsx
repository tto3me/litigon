import Layout from "@/components/layout";
import SEO from "@/components/seo";
import Hero from "@/components/sections/litigon/hero";
import Services from "@/components/sections/litigon/services";
import { lazy, Suspense } from "react";

const Projects = lazy(() => import("@/components/sections/litigon/projects"));
const Showcase = lazy(() => import("@/components/sections/litigon/showcase"));
const Approach = lazy(() => import("@/components/sections/litigon/approach"));

const Home = () => {
  const metaTitle = "Litigon | Events & Conferences Management in Saudi Arabia";
  const metaDescription =
    "Litigon plans, produces and manages conferences, exhibitions, cultural seasons and shows across Saudi Arabia — strategy, creative, production and logistics in one team.";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Litigon",
    description: metaDescription,
    areaServed: "Saudi Arabia",
    knowsAbout: [
      "Event management",
      "Conference management",
      "Exhibition stands",
      "Crowd management",
      "Drone shows",
      "VIP hospitality",
    ],
  };

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} canonicalUrl="/" jsonLd={jsonLd} />
      <Layout>
        <Hero />
        <Services />
        <Suspense fallback={null}>
          <Showcase />
        </Suspense>
        <Suspense fallback={null}>
          <Projects limit={6} />
        </Suspense>
        <Suspense fallback={null}>
          <Approach />
        </Suspense>
      </Layout>
    </>
  );
};

export default Home;
