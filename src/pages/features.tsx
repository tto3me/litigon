import Container from "@/components/container";
import Layout from "@/components/layout";
import SEO from "@/components/seo";
import Approach from "@/components/sections/litigon/approach";
import Services from "@/components/sections/litigon/services";
import Showcase from "@/components/sections/litigon/showcase";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const ServicesPage = () => {
  const metaTitle = "Services | Litigon Events & Conferences Management";
  const metaDescription =
    "Conference management, exhibition stands, cultural seasons, crowd management, VIP reception, private aviation and show production by Litigon in Saudi Arabia.";

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} canonicalUrl="/features" />
      <Layout>
        <section className="bg-black text-white">
          <Container className="pt-[150px] md:pt-[190px] pb-16">
            <AnimateOnView once blur className="max-w-[820px]">
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-primary">Our services</p>
              <h1 className="h1 mb-6">Everything an event needs, in one team</h1>
              <p className="paragraph-large text-muted">
                Litigon covers strategy, creative direction, technical production, hospitality
                and operations — so your event has a single point of accountability.
              </p>
            </AnimateOnView>
          </Container>
        </section>
        <Services heading="Our capabilities" intro="Nine core services, delivered by our own teams and trusted specialists." />
        <Showcase />
        <Approach />
      </Layout>
    </>
  );
};

export default ServicesPage;
