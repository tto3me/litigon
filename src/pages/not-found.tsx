import heroFireworks from "@/assets/litigon/hero-fireworks.jpg";
import litigonLion from "@/assets/litigon/litigon-lion.png";
import Container from "@/components/container";
import Navbar from "@/components/sections/shared/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, FolderOpen } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import SEO from "@/components/seo";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  const reveal = reducedMotion
    ? { initial: false as const, animate: undefined }
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

  return (
    <main className="relative min-h-dvh overflow-hidden bg-black text-white">
      <SEO
        title="Page Not Found | Litigon"
        description="The requested Litigon page could not be found. Return home or explore our projects."
        canonicalUrl="/404"
        noIndex
      />

      <Navbar />

      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroFireworks}
          alt=""
          width="1920"
          height="1088"
          className="h-full w-full object-cover opacity-35"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_42%,rgb(var(--primary)/0.2),transparent_32%)]" />
      </div>

      <section className="relative z-10 flex min-h-dvh items-center pb-12 pt-28 md:pb-16 md:pt-36">
        <Container className="w-full">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] lg:gap-14">
            <motion.div
              {...reveal}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex select-none items-center justify-center lg:justify-start"
              aria-hidden="true"
            >
              <span className="text-[clamp(8rem,20vw,17rem)] font-black leading-[0.72] tracking-[-0.12em] text-white">
                4
              </span>
              <motion.div
                animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 mx-1 h-[clamp(6.5rem,14vw,12rem)] w-[clamp(6.5rem,14vw,12rem)] shrink-0 drop-shadow-[0_0_45px_rgb(var(--primary)/0.28)]"
              >
                <span className="absolute inset-[18%] rounded-full bg-primary/20 blur-2xl" />
                <img src={litigonLion} alt="" className="relative h-full w-full object-contain" />
              </motion.div>
              <span className="text-[clamp(8rem,20vw,17rem)] font-black leading-[0.72] tracking-[-0.12em] text-white">
                4
              </span>
            </motion.div>

            <motion.div
              {...reveal}
              transition={{ duration: 0.55, delay: reducedMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2rem] border border-white/15 bg-black/55 p-6 shadow-2xl backdrop-blur-md sm:p-8 lg:p-10"
            >
              <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Page not found
              </div>

              <h1 className="mb-5 text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-white">
                This page missed its cue.
              </h1>
              <p className="mb-2 text-lg leading-8 text-white/75">
                The address may be incorrect, or the page may have moved while we were setting the stage.
              </p>
              <p className="mb-8 max-w-full overflow-hidden text-ellipsis whitespace-nowrap font-mono text-sm text-white/45">
                {location.pathname}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-xl px-6">
                  <Link to="/">
                    Return home
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-white/25 px-6 text-white hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Link to="/projects">
                    <FolderOpen aria-hidden="true" />
                    Explore projects
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.p
            {...reveal}
            transition={{ duration: 0.45, delay: reducedMotion ? 0 : 0.24 }}
            className="mt-10 text-center text-sm uppercase tracking-[0.2em] text-white/45 lg:text-left"
          >
            The show goes on · Litigon, Riyadh
          </motion.p>
        </Container>
      </section>
    </main>
  );
};

export default NotFound;
