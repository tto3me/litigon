const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim();
const runtimeSiteUrl = typeof window !== "undefined" ? window.location.origin : "";

export const appConfig = {
    name: "Litigon",
    description: "Litigon is an events and conferences management company in Saudi Arabia, delivering strategy, creative, production and logistics for every event.",
    url: (configuredSiteUrl || runtimeSiteUrl || "https://litigon.lovable.app").replace(/\/$/, ""),
    logo: "/litigon-mark.png",
    favicon: "/favicon.ico",
    ogImage: "/litigon-mark.png",
}
