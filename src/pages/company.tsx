import Container from "@/components/container";
import Layout from "@/components/layout";
import SEO from "@/components/seo";
import Approach from "@/components/sections/litigon/approach";
import LionWatermark from "@/components/sections/shared/lion-watermark";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import aboutImage from "@/assets/litigon/about-conference-crowd.jpg";
import brandBusinessCards from "@/assets/litigon/brand/brand-business-cards.jpg";
import brandIdStationery from "@/assets/litigon/brand/brand-id-stationery.jpg";
import brandSiteVest from "@/assets/litigon/brand/brand-site-vest.webp";
import { Link } from "react-router-dom";

const foundations = [
  {
    title: "Integrated Ecosystem",
    text: "Our integrated operational and media ecosystem seamlessly connects strategy, creativity, production, logistics, and execution into one unified workflow — ensuring every event is delivered with precision, efficiency, and measurable impact.",
  },
  {
    title: "Innovation in Experience",
    text: "We create innovative concepts and digital solutions that give every event its own distinctive identity, ensuring meaningful audience engagement and leaving a lasting impact.",
  },
  {
    title: "Operational Excellence",
    text: "We are committed to the highest international standards in crowd management, time control, and risk management, ensuring that every event and conference is delivered with exceptional precision, efficiency, and professionalism.",
  },
  {
    title: "Strategic Reliability",
    text: "We stand as a trusted strategic partner, capable of delivering major national events and flagship projects while transforming our partners' ambitions into measurable success and lasting achievements.",
  },
];

import { appConfig } from "@/utils/app-config";

const AboutPage = () => {
  const metaTitle = "About Litigon | Events & Conferences Management";
  const metaDescription =
    "Litigon was founded to redefine the events and experiences industry in Saudi Arabia through strategic thinking, creative excellence and flawless execution.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": metaTitle,
    "description": metaDescription,
    "url": `${appConfig.url}/company`
  };

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} canonicalUrl="/company" jsonLd={jsonLd} />
      <Layout>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#1a1a1a] text-white">
          <LionWatermark />
          <Container className="relative pb-20 pt-[150px] md:pb-28 md:pt-[190px]">
            <AnimateOnView once blur className="max-w-[900px]">
              <p className="mb-6 text-sm uppercase tracking-[0.25em] text-primary">About us</p>
              <h1 className="font-display text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[1.05] tracking-tight">
                We create exceptional impact
              </h1>
              <div className="mt-8 h-px w-24 bg-primary" />
              <p className="paragraph-large mt-8 text-white/70">
                Litigon was founded to redefine the events and experiences industry through
                integrated solutions that combine strategic thinking, creative excellence, and
                flawless execution. We transform ambitious visions into world-class experiences
                that inspire audiences, elevate brands, and reinforce Saudi Arabia's position as a
                global destination for events, business tourism, and entertainment.
              </p>
            </AnimateOnView>
          </Container>
        </section>

        {/* Vision & mission */}
        <section className="bg-background py-16 md:py-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              <AnimateOnView once blur>
                <img
                  src={aboutImage}
                  alt="Audience at a Litigon-managed conference in Saudi Arabia"
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-sm object-cover"
                />
              </AnimateOnView>

              <div className="space-y-10">
                <AnimateOnView once>
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">Vision</p>
                  <h2 className="font-display text-3xl font-medium leading-snug md:text-4xl">
                    Shaping the future of the events industry in Saudi Arabia
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    To shape the future of the events and experiences industry in Saudi Arabia
                    through innovation, operational excellence, and transformative experiences that
                    set new international benchmarks.
                  </p>
                </AnimateOnView>

                <div className="h-px w-full bg-border" />

                <AnimateOnView once delay={0.08}>
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-primary">Mission</p>
                  <h2 className="font-display text-3xl font-medium leading-snug md:text-4xl">
                    Turning bold ideas into unforgettable experiences
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    To transform bold ideas into unforgettable experiences through an integrated
                    ecosystem of expertise, innovation, and strategic partnerships — creating
                    measurable value for our clients while contributing to the ambitions of Saudi
                    Vision 2030.
                  </p>
                </AnimateOnView>
              </div>
            </div>
          </Container>
        </section>

        {/* Brand in action */}
        <section className="bg-background pb-16 md:pb-24">
          <Container>
            <AnimateOnView once blur className="mb-10 max-w-[700px]">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
                Litigon in every detail
              </p>
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                A consistent presence from planning to production
              </h2>
              <p className="paragraph-large mt-5 text-muted-foreground">
                Our identity carries through every touchpoint, from the planning desk and team
                credentials to the people delivering safely on site.
              </p>
            </AnimateOnView>

            <div className="grid gap-4 md:grid-cols-2">
              <AnimateOnView once className="overflow-hidden rounded-sm">
                <img
                  src={brandIdStationery}
                  alt="Litigon team credential and branded stationery"
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video h-full w-full object-cover"
                />
              </AnimateOnView>
              <AnimateOnView once delay={0.06} className="overflow-hidden rounded-sm">
                <img
                  src={brandBusinessCards}
                  alt="Litigon business cards in the company identity"
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video h-full w-full object-cover"
                />
              </AnimateOnView>
              <AnimateOnView once delay={0.1} className="overflow-hidden rounded-sm md:col-span-2">
                <img
                  src={brandSiteVest}
                  alt="Front and back of a Litigon event operations safety vest"
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/7] w-full object-cover object-center"
                />
              </AnimateOnView>
            </div>
          </Container>
        </section>

        {/* Foundations */}
        <section className="bg-[#222222] py-16 text-white md:py-24">
          <Container>
            <AnimateOnView once blur className="mb-14 max-w-[720px]">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-primary">
                Our foundations
              </p>
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                Four principles behind every Litigon delivery
              </h2>
            </AnimateOnView>

            <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
              {foundations.map((item, index) => (
                <AnimateOnView key={item.title} once delay={index * 0.07} className="h-full">
                  <div className="group h-full bg-[#2a2a2a] p-8 transition-colors duration-300 hover:bg-[#2f2f2f] md:p-10">
                    <span className="font-display text-2xl text-primary">
                      0{index + 1}
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-medium">{item.title}</h3>
                    <div className="mt-4 h-px w-10 bg-primary transition-all duration-300 group-hover:w-20" />
                    <p className="mt-5 text-sm leading-relaxed text-white/65">{item.text}</p>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </Container>
        </section>

        {/* Scope of services teaser */}
        <section className="bg-[#1a1a1a] py-16 text-white md:py-24">
          <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <AnimateOnView once blur className="max-w-[760px]">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-primary">
                Scope of services
              </p>
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                Planning, development, execution and operations
              </h2>
              <p className="paragraph-large mt-6 text-white/70">
                We deliver integrated solutions in event management and live experiences, covering
                planning, development, execution, and operations through a comprehensive portfolio
                of specialized services.
              </p>
            </AnimateOnView>
            <AnimateOnView once delay={0.1}>
              <Link
                to="/features"
                className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Explore our services
              </Link>
            </AnimateOnView>
          </Container>
        </section>

        <Approach />
      </Layout>
    </>
  );
};

export default AboutPage;
