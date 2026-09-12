import Container from "@/components/container";
import NewsletterForm from "@/components/newsletter-form";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { Link } from "react-router-dom";
import litigonLogo from "@/assets/litigon/litigon-logo.png";

const pagesLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/features",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Partners",
    href: "/partners",
  },
  {
    title: "About",
    href: "/company",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const serviceLinks = [
  {
    title: "Conferences & summits",
    href: "/features",
  },
  {
    title: "Exhibitions & stands",
    href: "/features",
  },
  {
    title: "Cultural seasons",
    href: "/features",
  },
  {
    title: "Show production",
    href: "/features",
  },
];

const Footer = () => {

  return (
    <footer className="relative bg-black text-white pt-36 pb-8 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute bottom-0 left-0 pointer-events-none w-[533px] h-[601px] z-10">
        <img src="/images/common/footer-pattern.svg" alt="pattern" />
      </div>

      <Container className="relative z-20">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div
            className="space-y-[60px] max-w-[310px]"
          >

            <div>
              <Link to="/">
                <img className="mb-6 h-7 w-auto" src={litigonLogo} alt="Litigon" />
              </Link>
              <p className="text-muted">
                Events and conferences management in the Kingdom of Saudi Arabia. We create exceptional impact.
              </p>
            </div>

            <div className="space-y-2.5">
              <p className="text-white">
                Head Office:
              </p>
              <p className="text-muted">
                Riyadh, <br />Kingdom of Saudi Arabia
              </p>
            </div>
          </div>

          <div className="max-w-[537px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Column 2: Pages */}
            <AnimateOnView
              once
              delay={0.1}
            >
              <h3 className="text-lg font-semibold mb-6">Pages</h3>
              <ul className="space-y-3">
                {pagesLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-muted hover:text-white transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimateOnView>

            {/* Column 3: Utility & Newsletter */}
            <AnimateOnView
              once
              delay={0.2}
              className="space-y-8 lg:col-span-2"
            >
              {/* Utility Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Services</h3>
                <ul className="space-y-3">
                  {serviceLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href} className="text-muted hover:text-white">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Stay updated with Litigon
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  News from our events and cultural seasons.
                </p>
                <NewsletterForm
                  buttonVariant="secondary"
                  buttonClassName="bg-white text-black hover:bg-white/90 px-4 h-10"
                  inputClassName="bg-foreground"
                  formClassName="flex"
                  gap="gap-1"
                />
              </div>
            </AnimateOnView>

          </div>

        </div>

        {/* Bottom Bar: Copyright and Legal Links */}
        <AnimateOnView
          once
          delay={0.3}
          className="border-t border-[#2a2a2a] pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Litigon. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-&-condition"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                to="/login"
                className="text-sm text-muted-foreground hover:text-white transition-colors"
              >
                Admin
              </Link>
            </div>
          </div>
        </AnimateOnView>
      </Container>
    </footer>
  );
};

export default Footer;

