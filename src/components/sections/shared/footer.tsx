import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import litigonLogo from "@/assets/litigon/litigon-logo-optimized.png";
import { useLanguage } from "@/i18n/language-provider";
import { Instagram, MapPin, Phone, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const XLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

const pagesLinks = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/features" },
  { title: "Projects", href: "/projects" },
  { title: "Partners", href: "/partners" },
  { title: "About", href: "/company" },
  { title: "Contact", href: "/contact" },
];

const serviceLinks = [
  { title: "Conferences & summits", href: "/features" },
  { title: "Exhibitions & stands", href: "/features" },
  { title: "Cultural seasons", href: "/features" },
  { title: "Show production", href: "/features" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-black pb-8 pt-20 text-white md:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgb(var(--primary)/0.08),transparent_32%)]" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 z-0 h-[460px] w-[460px] opacity-30">
        <img src="/images/common/footer-pattern.svg" alt="" aria-hidden="true" />
      </div>

      <Container className="relative z-20">
        <div className="grid gap-8 pb-12 lg:grid-cols-[minmax(220px,0.72fr)_minmax(460px,1.55fr)_minmax(280px,0.82fr)] lg:items-stretch lg:gap-10">
          <div className="flex max-w-[330px] flex-col justify-between gap-10 py-1">
            <div>
              <Link
                to="/"
                className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-black"
              >
                <img className="h-8 w-auto" src={litigonLogo} alt="Litigon" />
              </Link>
              <p className="mt-6 text-base leading-7 text-white/60">
                Events and conferences management in the Kingdom of Saudi Arabia. We create exceptional impact.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a 
                  href="tel:+966575111122" 
                  className="flex w-fit items-center gap-2 text-base font-medium text-white/90 transition-colors hover:text-primary"
                  dir="ltr"
                >
                  <Phone className="h-4 w-4" />
                  <span className="pt-0.5">+966 57 511 1122</span>
                </a>
                <a 
                  href="mailto:Info@litigon.sa" 
                  className="flex w-fit items-center gap-2 text-base font-medium text-white/90 transition-colors hover:text-primary"
                  dir="ltr"
                >
                  <Mail className="h-4 w-4" />
                  <span className="pt-0.5">Info@litigon.sa</span>
                </a>
                <div className="flex items-center gap-2 pt-2" aria-label="Litigon social media">
                  <a
                    href="https://www.instagram.com/litigon.sa?stkn=Mml6NnliNGU0M3Z4&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Litigon on Instagram"
                    title="Instagram"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/80 transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://x.com/litigonsa?s=11"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Litigon on X"
                    title="X"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/80 transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <XLogo className="h-[18px] w-[18px]" />
                  </a>
                  <a
                    href="https://linkedin.com/company/litigon-sa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Litigon on LinkedIn"
                    title="LinkedIn"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/80 transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="h-px w-16 bg-primary" aria-hidden="true" />
          </div>

          <div className="grid min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:grid-cols-[minmax(0,0.9fr)_minmax(230px,1.1fr)]">
            <div className="flex min-w-0 flex-col justify-between gap-8 p-6 md:p-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Head Office
                </p>
                <address className="mt-4 not-italic text-base leading-7 text-white/75" data-i18n-ignore>
                  {t("Riyadh, 5660 Anas Ibn Malik st., Al Malqa Dist., P.O. Box 13525")}
                </address>
              </div>
              <a
                href="https://maps.google.com/?q=24.801777,46.601017"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("View head office on Google Maps")}
                className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                data-i18n-ignore
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {t("Open in Google Maps")}
              </a>
            </div>
            <div className="min-h-52 overflow-hidden border-t border-white/10 sm:border-s sm:border-t-0">
              <iframe
                src="https://www.google.com/maps?q=24.801777,46.601017&z=15&output=embed"
                title={t("Litigon head office map")}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full min-h-52 w-full border-0 grayscale-[15%]"
                data-i18n-ignore
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-7 lg:gap-6">
            <AnimateOnView once delay={0.1}>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Pages
              </h3>
              <ul className="space-y-2.5">
                {pagesLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="inline-flex min-h-8 items-center text-sm text-white/55 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimateOnView>

            <AnimateOnView once delay={0.2}>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Services
              </h3>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      to={link.href}
                      className="inline-flex min-h-8 items-center text-sm text-white/55 transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimateOnView>
          </div>
        </div>

        <AnimateOnView once delay={0.3} className="border-t border-white/10 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-white/45 md:text-left" data-i18n-ignore>
              © {new Date().getFullYear()} Litigon. {t("All rights reserved.")}
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              <Link
                to="/privacy-policy"
                className="inline-flex min-h-8 items-center py-1 text-sm text-white/45 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
                className="inline-flex min-h-8 items-center py-1 text-sm text-white/45 transition-colors hover:text-white"
              >
                Cookie Policy
              </Link>
              <Link
                to="/terms-&-condition"
                className="inline-flex min-h-8 items-center py-1 text-sm text-white/45 transition-colors hover:text-white"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </AnimateOnView>
      </Container>
    </footer>
  );
};

export default Footer;
