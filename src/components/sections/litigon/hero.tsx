import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/litigon/about-conference-crowd.jpg";

const Hero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Litigon conference stage with a full audience in Saudi Arabia"
          className="h-full w-full object-cover opacity-40"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
      </div>

      <Container className="relative z-10 pt-[150px] md:pt-[190px] pb-16 md:pb-24">
        <AnimateOnView once blur className="max-w-[900px]">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-primary">
            Events &amp; Conferences Management
          </p>
          <h1 className="h1 mb-6">
            We Create <span className="text-primary">Exceptional Impact</span>
          </h1>
          <p className="paragraph-large max-w-[640px] text-muted">
            Litigon designs, produces and manages conferences, exhibitions and national
            celebrations across the Kingdom of Saudi Arabia — from the first idea to the
            final firework.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/contact">
                Plan your event
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="gray">
              <Link to="/projects">See our work</Link>
            </Button>
          </div>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default Hero;
