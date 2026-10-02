import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const fallbackUrl = "https://litigon.lovable.app";
const siteUrl = (process.env.VITE_SITE_URL || process.env.URL || fallbackUrl).replace(/\/$/, "");
const publicDir = resolve(process.cwd(), "public");
const indexableRoutes = ["/", "/features", "/projects", "/partners", "/company", "/contact"];

const escapeXml = (value) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const sitemapEntries = indexableRoutes
  .map((route) => `  <url><loc>${escapeXml(`${siteUrl}${route}`)}</loc></url>`)
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const llms = `# Litigon

Litigon is an events and conferences management company in Riyadh, Saudi Arabia.

## Primary pages

${indexableRoutes
  .map((route) => `- ${route === "/" ? "Home" : route.slice(1)}: ${siteUrl}${route}`)
  .join("\n")}

## Contact

- Email: Info@litigon.sa
- Phone: +966 57 511 1122
- Address: 5660 Anas Ibn Malik St., Al Malqa District, Riyadh 13525, Saudi Arabia
`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(resolve(publicDir, "sitemap.xml"), sitemap);
writeFileSync(resolve(publicDir, "robots.txt"), robots);
writeFileSync(resolve(publicDir, "llms.txt"), llms);

console.log(`Generated SEO files for ${siteUrl}`);
