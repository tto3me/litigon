import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";
import PolicyContent, { type PolicySection } from "@/components/sections/legal/policy-content";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const CookiePolicyPage = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Cookie Policy | ${appConfig.name}`,
        "description": "How Litigon uses cookies and browser storage on its website.",
        "url": `${appConfig.url}/cookie-policy`
    };

    const sections: PolicySection[] = [
        {
            id: "what-they-are",
            title: "What cookies and browser storage are",
            content: (
                <>
                    <p>Cookies are small text files placed on a device by a website. Similar browser-storage technologies, such as local storage, can remember preferences between pages.</p>
                    <p>Some of these technologies are necessary for a requested feature to work. Others may support preferences, measurement or marketing. Litigon currently uses only the functional storage described below and does not currently use advertising cookies.</p>
                </>
            ),
        },
        {
            id: "what-we-use",
            title: "What this website uses",
            content: (
                <>
                    <ul>
                        <li><strong className="text-foreground">Language preference:</strong> the <code className="rounded bg-card px-1.5 py-0.5 text-sm text-foreground">litigon-language</code> local-storage item remembers the language you select until you change it or clear browser data.</li>
                    </ul>
                    <p>Visitors do not need to create an account to browse the Litigon website.</p>
                </>
            ),
        },
        {
            id: "third-parties",
            title: "Service providers",
            content: <p>Our hosting and content infrastructure may process limited technical information required to deliver pages and protect the service. If we later introduce analytics, embedded media or advertising technologies that require optional cookies, we will update this policy and provide an appropriate choice before using them where consent is required.</p>,
        },
        {
            id: "your-controls",
            title: "Your controls",
            content: (
                <>
                    <p>You can delete or block cookies and local storage through your browser settings. You can also use private-browsing controls. Blocking functional storage may cause your language selection to reset.</p>
                    <p>Because the current public website does not use optional advertising or analytics cookies, no separate cookie-consent control is presently required for those categories.</p>
                </>
            ),
        },
        {
            id: "changes-contact",
            title: "Changes and contact",
            content: (
                <>
                    <p>We may update this policy when website features or service providers change. The latest revision date will appear at the top of this page.</p>
                    <p>For questions about cookies or privacy, contact <a href="mailto:info@litigon.sa">info@litigon.sa</a>. You can also read our <a href="/privacy-policy">Privacy Policy</a>.</p>
                </>
            ),
        },
    ];

    return (
        <>
            <SEO
                title={`Cookie Policy | ${appConfig.name}`}
                description="Learn how Litigon uses cookies and browser storage on its website."
                canonicalUrl="/cookie-policy"
                ogType="website"
                jsonLd={jsonLd}
                noIndex
            />
            <Layout>
                <LegalHero
                    title="Cookie Policy"
                    description="A clear explanation of the cookies and browser storage used by the Litigon website."
                />
                <PolicyContent
                    updatedAt="14 September 2026"
                    summary="This policy explains the limited cookies and browser-storage technologies used by Litigon, what they do, and how you can control them."
                    sections={sections}
                />
            </Layout>
        </>
    );
};

export default CookiePolicyPage;
