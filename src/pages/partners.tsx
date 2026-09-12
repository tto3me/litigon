import Container from "@/components/container";
import Layout from "@/components/layout";
import SEO from "@/components/seo";
import LionWatermark from "@/components/sections/shared/lion-watermark";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowUpRight } from "lucide-react";

import acwapower from "@/assets/litigon/partners/acwapower.png.asset.json";
import alamoudi from "@/assets/litigon/partners/alamoudi.png.asset.json";
import elegaci from "@/assets/litigon/partners/elegaci.png.asset.json";
import kayanee from "@/assets/litigon/partners/kayanee.png.asset.json";
import leaderssoft from "@/assets/litigon/partners/leaderssoft.png.asset.json";
import mcvities from "@/assets/litigon/partners/mcvities.png.asset.json";
import mega from "@/assets/litigon/partners/mega.png.asset.json";
import mgc from "@/assets/litigon/partners/mgc.png.asset.json";
import rc from "@/assets/litigon/partners/rc.png.asset.json";
import riyadbank from "@/assets/litigon/partners/riyadbank.png.asset.json";
import riyadhmun from "@/assets/litigon/partners/riyadhmun.png.asset.json";
import riyadhseason from "@/assets/litigon/partners/riyadhseason.png.asset.json";
import sas from "@/assets/litigon/partners/sas.png.asset.json";
import ulker from "@/assets/litigon/partners/ulker.png.asset.json";

type Partner = { name: string; logo: string; url?: string };

const partners: Partner[] = [
  { name: "Riyad Bank", logo: riyadbank.url, url: "https://www.riyadbank.com" },
  { name: "ACWA Power", logo: acwapower.url, url: "https://www.acwapower.com" },
  { name: "Riyadh Season", logo: riyadhseason.url, url: "https://riyadhseason.sa" },
  { name: "Riyadh Region Municipality", logo: riyadhmun.url, url: "https://www.alriyadh.gov.sa" },
  { name: "McVitie's", logo: mcvities.url, url: "https://www.mcvities.com" },
  { name: "Ülker", logo: ulker.url, url: "https://www.ulker.com.tr" },
  { name: "Kayanee", logo: kayanee.url, url: "https://kayanee.com" },
  { name: "MGC — Mutlaq Al-Ghowairi Contracting", logo: mgc.url, url: "https://mgc.com.sa" },
  { name: "Elegaci", logo: elegaci.url, url: "https://elegaci.sa" },
  { name: "Leaderssoft", logo: leaderssoft.url, url: "https://www.linkedin.com/company/leaderssoft" },
  { name: "SAS Technique for Contracting", logo: sas.url, url: "https://www.linkedin.com/company/sas-technical-contracting-co" },
  { name: "Mega", logo: mega.url },
  { name: "Al-Amoudi", logo: alamoudi.url },
  { name: "R.C. — Rabie Al-Otaibi", logo: rc.url },
];

const PartnerCard = ({ partner }: { partner: Partner }) => {
  const inner = (
    <>
      <div className="flex h-24 w-full items-center justify-center md:h-28">
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          loading="lazy"
          className="max-h-full max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <span className="text-center">{partner.name}</span>
        {partner.url && (
          <ArrowUpRight className="size-4 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
        )}
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col items-center justify-between gap-5 rounded-3xl border border-border bg-card p-8 text-center transition-colors hover:border-primary/40";

  return partner.url ? (
    <a href={partner.url} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
};

const PartnersPage = () => {
  const metaTitle = "Success Partners | Litigon Events & Conferences";
  const metaDescription =
    "Organizations and institutions that partner with Litigon to deliver exceptional events, conferences and experiences across Saudi Arabia.";

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} canonicalUrl="/partners" />
      <Layout>
        <section className="relative overflow-hidden bg-black text-white">
          <LionWatermark />
          <Container className="relative pt-[150px] md:pt-[190px] pb-10">
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

        <section className="bg-background py-16 md:py-24">
          <Container>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {partners.map((partner, index) => (
                <AnimateOnView key={partner.name} once delay={index * 0.04} className="h-full">
                  <PartnerCard partner={partner} />
                </AnimateOnView>
              ))}
            </div>

            <AnimateOnView
              once
              className="mt-16 rounded-3xl border border-white/10 bg-black p-8 md:p-12 text-center md:text-left"
            >
              <div className="max-w-[720px]">
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
