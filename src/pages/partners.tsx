import Container from "@/components/container";
import Layout from "@/components/layout";
import SEO from "@/components/seo";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const partners = [
  { name: "Mega", initials: "M" },
  { name: "ACWA Power", initials: "AP" },
  { name: "Al-Jeshi Elegaci", initials: "AJ" },
  { name: "Kayanee", initials: "K" },
  { name: "Al-Amoudi", initials: "AA" },
  { name: "R.C.", initials: "RC" },
  { name: "Riyadh Region Municipality", initials: "RRM" },
  { name: "MGC", initials: "MGC" },
];

const PartnersPage = () => {
  const metaTitle = "Success Partners | Litigon Events & Conferences";
  const metaDescription =
    "Organizations and institutions that partner with Litigon to deliver exceptional events, conferences and experiences across Saudi Arabia.";

  return (
    <>
      <SEO title={metaTitle} description={metaDescription} canonicalUrl="/partners" />
      <Layout>
        <section className="bg-black text-white">
          <Container className="pt-[150px] md:pt-[190px] pb-10">
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((partner, index) => (
                <AnimateOnView
                  key={partner.name}
                  once
                  delay={index * 0.05}
                  className="h-full"
                >
                  <div className="group flex h-full flex-col items-center justify-center gap-5 rounded-3xl border border-white/10 bg-black p-8 text-center transition-colors hover:border-primary/30 hover:bg-black/80">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <span className="text-xl font-semibold tracking-tight">
                        {partner.initials}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-white">{partner.name}</h3>
                  </div>
                </AnimateOnView>
              ))}
            </div>

            <AnimateOnView once className="mt-16 rounded-3xl border border-white/10 bg-black p-8 md:p-12 text-center md:text-left">
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
