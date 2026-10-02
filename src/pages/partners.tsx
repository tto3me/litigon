import Container from "@/components/container";
import Layout from "@/components/layout";
import SEO from "@/components/seo";
import LionWatermark from "@/components/sections/shared/lion-watermark";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

type Partner = { name: string; logo: string; url?: string };

const partners: Partner[] = [
  { name: "SAS Technique for Contracting", logo: "/images/partners/sas-technique.png", url: "https://www.linkedin.com/company/sas-technical-contracting-co" },
  { name: "Riyad Bank", logo: "/images/partners/riyad-bank.png", url: "https://www.riyadbank.com" },
  { name: "McVitie's", logo: "/images/partners/mcvities.png", url: "https://www.mcvities.com" },
  { name: "Riyadh Season", logo: "/images/partners/riyadh-season.png", url: "https://riyadhseason.com" },
  { name: "Ülker", logo: "/images/partners/ulker.png", url: "https://www.ulker.com.tr" },
  { name: "Leaderssoft", logo: "/images/partners/leaderssoft.png", url: "https://www.linkedin.com/company/leaderssoft" },
  { name: "Mega", logo: "/images/partners/mega.png" },
  { name: "ACWA Power", logo: "/images/partners/acwa-power.png", url: "https://www.acwapower.com" },
  { name: "Elegaci", logo: "/images/partners/elegaci.png", url: "https://elegaci.sa" },
  { name: "Kayanee", logo: "/images/partners/kayanee.png", url: "https://kayanee.com" },
  { name: "Al-Amoudi", logo: "/images/partners/al-amoudi.png" },
  { name: "R.C. — Rabie Al-Otaibi", logo: "/images/partners/rc.png" },
  { name: "Riyadh Region Municipality", logo: "/images/partners/riyadh-municipality.png", url: "https://www.alriyadh.gov.sa" },
  { name: "MGC — Mutlaq Al-Ghowairi Contracting", logo: "/images/partners/mgc.png", url: "https://mgc.com.sa" },
];

const partnerRows = [
  partners.filter((_, index) => index % 2 === 0),
  partners.filter((_, index) => index % 2 === 1),
];

const PartnerCard = ({ partner, duplicate = false }: { partner: Partner; duplicate?: boolean }) => {
  const inner = (
    <img
      src={partner.logo}
      alt={`${partner.name} logo`}
      loading="lazy"
      className="max-h-20 max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105 md:max-h-24 md:max-w-[190px]"
    />
  );

  const className =
    "group mx-3 flex h-32 w-52 shrink-0 items-center justify-center bg-transparent px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:mx-4 sm:h-36 sm:w-60 sm:px-6";

  return partner.url ? (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={partner.name}
      className={className}
      tabIndex={duplicate ? -1 : undefined}
    >
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
};

import { appConfig } from "@/utils/app-config";

const PartnersPage = () => {
  const metaTitle = "Success Partners | Litigon Events & Conferences";
  const metaDescription =
    "Organizations and institutions that partner with Litigon to deliver exceptional events, conferences and experiences across Saudi Arabia.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": metaTitle,
    "description": metaDescription,
    "url": `${appConfig.url}/partners`
  };

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} canonicalUrl="/partners" jsonLd={jsonLd} />
      <Layout>
        <section className="relative overflow-hidden bg-black text-white">
          <LionWatermark />
          <Container className="relative pb-5 pt-[150px] md:pb-7 md:pt-[190px]">
            <AnimateOnView once blur className="max-w-[820px]">
              <p className="mb-6 text-sm uppercase tracking-[0.2em] text-primary">Success Partners</p>
              <h1 className="h1 mb-6">Trusted by leading organizations</h1>
              <p className="paragraph-large text-muted">
                We are proud to work alongside government entities, corporations and institutions
                that share our commitment to exceptional events and experiences.
              </p>
            </AnimateOnView>
          </Container>
        </section>

        <section className="overflow-hidden bg-background pb-16 pt-3 md:pb-24 md:pt-5">
          <div className="space-y-3 md:space-y-5">
            {partnerRows.map((rowPartners, rowIndex) => (
              <div key={rowIndex} className="partners-marquee-mask relative overflow-hidden" dir="ltr">
                <div
                  className={`partners-marquee-track ${rowIndex === 1 ? "partners-marquee-reverse" : ""}`}
                >
                  {[0, 1].map((copyIndex) => (
                    <div
                      key={copyIndex}
                      aria-hidden={copyIndex === 1 ? "true" : undefined}
                      className={`partners-marquee-copy flex shrink-0 ${copyIndex === 1 ? "partners-marquee-duplicate" : ""}`}
                    >
                      {rowPartners.map((partner) => (
                        <PartnerCard
                          key={`${copyIndex}-${partner.name}`}
                          partner={partner}
                          duplicate={copyIndex === 1}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Container>
            <AnimateOnView
              once
              className="mt-16 rounded-3xl border border-white/10 bg-black p-8 md:p-12 text-center"
            >
              <div className="max-w-[720px] mx-auto">
                <h2 className="h3 mb-4 text-white">Become a partner</h2>
                <p className="paragraph text-muted">
                  Interested in collaborating with Litigon? We work with brands, venues, technology
                  providers and public entities to deliver standout events across the Kingdom.
                </p>
              </div>
            </AnimateOnView>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default PartnersPage;
