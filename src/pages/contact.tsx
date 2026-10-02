import ContactForm from "@/components/sections/contact/contact-form";
import Layout from "@/components/layout";
import SEO from "@/components/seo";
import FAQ from "@/components/sections/shared/faq";
import ContactHero from "@/components/sections/contact/contact-hero";
import { appConfig } from "@/utils/app-config";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${appConfig.url}/contact#webpage`,
  name: "Contact Litigon",
  description:
    "Contact Litigon in Riyadh to plan conferences, exhibitions, cultural events and live productions across Saudi Arabia.",
  url: `${appConfig.url}/contact`,
  mainEntity: { "@id": `${appConfig.url}/#organization` },
  isPartOf: { "@id": `${appConfig.url}/#website` },
};

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Litigon | Event Management in Riyadh"
        description="Contact Litigon in Riyadh to plan conferences, exhibitions, cultural events and live productions across Saudi Arabia."
        canonical="/contact"
        jsonLd={jsonLd}
      />
      <ContactHero />
      <ContactForm />
      <FAQ />
    </Layout>
  );
}
