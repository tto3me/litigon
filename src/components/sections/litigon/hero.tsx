import { useEffect, useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/litigon/about-conference-crowd.jpg";
import heroImage2 from "@/assets/litigon/tech-drone-show.jpg";
import heroImage3 from "@/assets/litigon/tech-fireworks.jpg";

const slides = [
  { src: heroImage1, alt: "Litigon conference stage with a full audience in Saudi Arabia" },
  { src: heroImage2, alt: "Litigon drone light show over the night sky" },
  { src: heroImage3, alt: "Litigon fireworks display at a national celebration" },
];

const SLIDE_INTERVAL = 3500;

const Hero = ({ heroRef }: { heroRef?: React.RefObject<HTMLElement | null> }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={heroRef} className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === active ? "opacity-70" : "opacity-0"
            }`}
            fetchPriority={i === 0 ? "high" : undefined}
            aria-hidden={i !== active}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      <Container className="relative z-10 pt-[150px] md:pt-[190px] pb-16 md:pb-24">
        <AnimateOnView once blur className="max-w-[900px]">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-primary">
            Events &amp; Conferences Management
          </p>
          <h1 className="h1 mb-6">
            We Create{" "}
            <span className="text-primary">
              Exceptional <span id="litigon-word-impact">Impact</span>
            </span>
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
