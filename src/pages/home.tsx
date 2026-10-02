import Layout from "@/components/layout";
import SEO from "@/components/seo";
import Hero from "@/components/sections/litigon/hero";
import Services from "@/components/sections/litigon/services";
import ScrollLion from "@/components/sections/litigon/scroll-lion";
import Stats from "@/components/sections/litigon/stats";
import Approach from "@/components/sections/litigon/approach";
import Projects from "@/components/sections/litigon/projects";
import Showcase from "@/components/sections/litigon/showcase";
import { appConfig } from "@/utils/app-config";

const organizationId = `${appConfig.url}/#organization`;
const websiteId = `${appConfig.url}/#website`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": organizationId,
      name: appConfig.name,
      url: appConfig.url,
      logo: {
        "@type": "ImageObject",
        url: appConfig.logo,
      },
      description: appConfig.description,
      email: appConfig.contact.email,
      telephone: appConfig.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "5660 Anas Ibn Malik St., Al Malqa Dist.",
        addressLocality: "Riyadh",
        postalCode: "13525",
        addressCountry: "SA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 24.801777,
        longitude: 46.601017,
      },
      areaServed: {
        "@type": "Country",
        name: "Saudi Arabia",
      },
      sameAs: [
        "https://www.instagram.com/litigon.sa",
        "https://x.com/litigonsa",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: appConfig.contact.phone,
        email: appConfig.contact.email,
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["English", "Arabic", "French"],
      },
      knowsAbout: [
        "Event management",
        "Conference management",
        "Exhibition production",
        "Live event production",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: appConfig.url,
      name: appConfig.name,
      publisher: { "@id": organizationId },
    },
  ],
};

export default function Home() {
  return (
    <Layout>
      <SEO jsonLd={jsonLd} />
      <Hero />
      <Stats />
      <Services />
      <ScrollLion />
      <Projects />
      <Approach />
      <Showcase />
    </Layout>
  );
}
