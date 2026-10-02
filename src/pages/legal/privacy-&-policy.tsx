import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";
import PolicyContent, { type PolicySection } from "@/components/sections/legal/policy-content";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const PrivacyPolicyPage = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Privacy Policy | ${appConfig.name}`,
        "description": "How Litigon collects, uses, protects and manages personal data.",
        "url": `${appConfig.url}/privacy-policy`
    };

    const sections: PolicySection[] = [
        {
            id: "who-we-are",
            title: "Who we are",
            content: <p>Litigon is an events and conferences management company based in Riyadh, Kingdom of Saudi Arabia. For the purposes of applicable data-protection law, Litigon is responsible for the personal data described in this policy.</p>,
        },
        {
            id: "data-we-collect",
            title: "Personal data we collect",
            content: (
                <>
                    <p>We collect only the information reasonably needed to answer enquiries, plan services, operate this website and maintain our business relationships. This may include:</p>
                    <ul>
                        <li>Your name, organisation, job title, email address and telephone number.</li>
                        <li>Event information you provide, including dates, locations, audience, budget range and service requirements.</li>
                        <li>Messages, proposals and other correspondence exchanged with Litigon.</li>
                        <li>Technical information such as IP address, browser type, device information, access times and security logs.</li>
                        <li>Website preferences stored on your device, including your selected language.</li>
                    </ul>
                </>
            ),
        },
        {
            id: "how-we-use-data",
            title: "How we use personal data",
            content: (
                <>
                    <p>We may use personal data to:</p>
                    <ul>
                        <li>Respond to enquiries and prepare event proposals or quotations.</li>
                        <li>Plan, deliver and follow up on contracted services.</li>
                        <li>Manage supplier, partner and client relationships.</li>
                        <li>Operate, secure, troubleshoot and improve our website and internal systems.</li>
                        <li>Send business or marketing communications where you have agreed to receive them or where otherwise permitted by law.</li>
                        <li>Meet legal, regulatory, accounting and safety obligations.</li>
                    </ul>
                    <p>We process personal data using an appropriate legal basis under the Saudi Personal Data Protection Law, including consent, steps requested before entering a contract, performance of a contract, compliance with legal obligations, and legitimate interests where permitted.</p>
                </>
            ),
        },
        {
            id: "sharing",
            title: "How we share personal data",
            content: (
                <>
                    <p>We do not sell personal data. We may share the minimum necessary information with trusted service providers supporting our website, cloud hosting, email, communications, IT security and professional services. Event delivery may also require sharing relevant details with approved venues, suppliers or operational partners.</p>
                    <p>We may disclose information where required by Saudi law, a competent authority or legal process, or where necessary to protect people, property, our operations or our legal rights.</p>
                </>
            ),
        },
        {
            id: "international-transfers",
            title: "International data transfers",
            content: <p>Some technology or service providers may process information outside Saudi Arabia. Where this occurs, Litigon will use appropriate safeguards, limit transfers to what is necessary and follow the requirements of the Saudi Personal Data Protection Law and its regulations.</p>,
        },
        {
            id: "retention-security",
            title: "Retention and security",
            content: (
                <>
                    <p>We retain personal data only for as long as needed for the purpose for which it was collected, our contractual relationship, dispute handling, and applicable legal or regulatory retention periods. Data is then securely deleted or anonymised when appropriate.</p>
                    <p>We use reasonable organisational and technical safeguards designed to protect personal data against unauthorised access, loss, misuse, alteration or disclosure. No online system can be guaranteed completely secure.</p>
                </>
            ),
        },
        {
            id: "your-rights",
            title: "Your privacy rights",
            content: (
                <>
                    <p>Subject to the conditions and exceptions in applicable law, you may have the right to be informed about our processing, access your personal data, obtain a clear copy, request correction or completion, request destruction, and withdraw consent where processing is based on consent.</p>
                    <p>To exercise a right, email <a href="mailto:info@litigon.sa">info@litigon.sa</a>. We may need to verify your identity before completing a request. You may also raise a complaint with the Saudi Data &amp; AI Authority through its official channels.</p>
                </>
            ),
        },
        {
            id: "children-links",
            title: "Children and external links",
            content: <p>This website is intended for business audiences and is not directed to children. Our pages may link to third-party websites; their privacy practices are controlled by those organisations and are not covered by this policy.</p>,
        },
        {
            id: "updates-contact",
            title: "Updates and contact",
            content: (
                <>
                    <p>We may update this policy to reflect changes to our services, technology or legal requirements. The latest version will always appear on this page with its revision date.</p>
                    <p>Questions about privacy can be sent to <a href="mailto:info@litigon.sa">info@litigon.sa</a> or addressed to Litigon, Riyadh, Kingdom of Saudi Arabia.</p>
                </>
            ),
        },
    ];

    return (
        <>
            <SEO
                title={`Privacy Policy | ${appConfig.name}`}
                description="Learn how Litigon collects, uses, protects and manages personal data."
                canonicalUrl="/privacy-policy"
                ogType="website"
                jsonLd={jsonLd}
                noIndex
            />
            <Layout>
                <LegalHero
                    title="Privacy Policy"
                    description="How Litigon handles and protects the personal information entrusted to us."
                />
                <PolicyContent
                    updatedAt="14 September 2026"
                    summary="This policy explains what personal data Litigon may collect through its website and business interactions, why we use it, when it may be shared, and the choices available to you."
                    sections={sections}
                />
            </Layout>
        </>
    );
};

export default PrivacyPolicyPage;
