import { useEffect, useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { useLanguage, type Locale } from "@/i18n/language-provider";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/litigon/hero-conference.jpg";
import heroImage2 from "@/assets/litigon/hero-drones.jpg";
import heroImage3 from "@/assets/litigon/hero-fireworks.jpg";

const slides = [
  { src: heroImage1, alt: "Litigon conference stage with a full audience in Saudi Arabia" },
  { src: heroImage2, alt: "Litigon drone light show over the Riyadh skyline" },
  { src: heroImage3, alt: "Litigon fireworks display at a national celebration" },
];

const SLIDE_INTERVAL = 3500;

const heroTitles: Record<
  Locale,
  { lead: string; emphasis: string; impact: string; separator: string }
> = {
  en: { lead: "We Create", emphasis: "Exceptional", impact: "Impact", separator: " " },
  ar: { lead: "نصنع", emphasis: "تأثيراً", impact: "استثنائياً", separator: " " },
  fr: { lead: "Nous créons", emphasis: "un impact", impact: "exceptionnel", separator: " " },
  zh: { lead: "我们创造", emphasis: "非凡", impact: "影响力", separator: "" },
};

const Hero = ({ heroRef }: { heroRef?: React.RefObject<HTMLElement | null> }) => {
  const [active, setActive] = useState(0);
  const { locale } = useLanguage();
  const title = heroTitles[locale];

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-dvh bg-black text-white overflow-hidden flex flex-col">
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1080}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === active ? "opacity-85" : "opacity-0"
            }`}
            fetchPriority={i === 0 ? "high" : undefined}
            aria-hidden={i !== active}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/75" />
      </div>

      <Container className="relative z-10 flex flex-1 items-center pt-[120px] md:pt-[140px] pb-16 md:pb-24">
        <AnimateOnView once blur className="max-w-[1100px]">
          <h1 className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[96px] font-semibold leading-[1.1] tracking-tight mb-8" data-i18n-ignore>
            {title.lead}
            {title.separator}
            <span className="text-primary">
              {title.emphasis}
              {title.separator}
              <span id="litigon-word-impact">{title.impact}</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-[720px] text-muted leading-relaxed">
            Litigon designs, produces and manages conferences, exhibitions and national
            celebrations across the Kingdom of Saudi Arabia — from the first idea to the
            final firework.
          </p>
          <div className="mt-12 flex flex-wrap gap-5">
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
