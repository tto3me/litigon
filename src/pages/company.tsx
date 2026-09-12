import Container from "@/components/container";
import Layout from "@/components/layout";
import SEO from "@/components/seo";
import Approach from "@/components/sections/litigon/approach";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import aboutImage from "@/assets/litigon/about-conference-crowd.jpg";

const values = [
  {
    title: "Vision",
    text: "To be the leading events partner in the region, setting the standard for experiences that carry the Kingdom's ambition to the world.",
  },
  {
    title: "Mission",
    text: "To plan and deliver events that are precise in execution, generous in hospitality and memorable in every detail.",
  },
  {
    title: "Values",
    text: "Accountability, creativity and respect for the guest — from the head of state to the first-time visitor.",
  },
];

const AboutPage = () => {
  const metaTitle = "About Litigon | Events & Conferences Management";
  const metaDescription =
    "Litigon is a Saudi events and conferences management company delivering strategy, creative, production and logistics for national and corporate events.";

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} canonicalUrl="/company" />
      <Layout>
        <section className="bg-black text-white">
          <Container className="pt-[150px] md:pt-[190px] pb-16">
            <AnimateOnView once blur className="max-w-[820px]">
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-primary">About us</p>
              <h1 className="h1 mb-6">We create exceptional impact</h1>
              <p className="paragraph-large text-muted">
                Litigon is an events and conferences management company based in Saudi Arabia.
                We bring strategy, creative direction, technical production and logistics
                together in one integrated ecosystem, supporting the goals of Saudi Vision 2030.
              </p>
            </AnimateOnView>
          </Container>
        </section>

        <section className="bg-background py-16 md:py-24">
          <Container className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateOnView once blur>
              <img
                src={aboutImage}
                alt="Audience at a Litigon-managed conference"
                loading="lazy"
                className="h-full w-full rounded-3xl object-cover"
              />
            </AnimateOnView>
            <div className="space-y-8">
              {values.map((value, index) => (
                <AnimateOnView key={value.title} once delay={index * 0.08}>
                  <h2 className="h4 mb-3">{value.title}</h2>
                  <p className="text-muted-foreground">{value.text}</p>
                </AnimateOnView>
              ))}
            </div>
          </Container>
        </section>

        <Approach />
      </Layout>
    </>
  );
};

export default AboutPage;
