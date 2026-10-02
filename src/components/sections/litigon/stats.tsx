import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 60, suffix: "", label: "Success partners" },
  { value: 1500, suffix: "", label: "Successful events delivered" },
  { value: 80, suffix: "k", label: "Operational & technical management hours" },
  { value: 100, suffix: "", label: "Artists & influencers managed" },
];

interface CounterValueProps {
  value: number;
  suffix: string;
  shouldStart: boolean;
}

const CounterValue = ({ value, suffix, shouldStart }: CounterValueProps) => {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const finalValue = `+${value}${suffix}`;

  useEffect(() => {
    if (!shouldStart) return;

    if (reduceMotion) {
      setCount(value);
      return;
    }

    const duration = 600;
    const startedAt = performance.now();
    let animationFrame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [reduceMotion, shouldStart, value]);

  return (
    <>
      <p
        aria-hidden="true"
        data-i18n-ignore
        dir="ltr"
        className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-none text-primary [font-variant-numeric:tabular-nums]"
      >
        +{count}{suffix}
      </p>
      <span className="sr-only" dir="ltr">
        {finalValue}
      </span>
    </>
  );
};

const Stats = () => {
  const countersRef = useRef<HTMLDivElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  useEffect(() => {
    if (hasEnteredViewport) return;

    let animationFrame = 0;

    const checkPosition = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const counters = countersRef.current;
        if (!counters) return;

        const bounds = counters.getBoundingClientRect();
        const triggerLine = window.innerHeight * 0.9;

        if (bounds.top <= triggerLine && bounds.bottom >= 0) {
          setHasEnteredViewport(true);
        }
      });
    };

    checkPosition();
    window.addEventListener("scroll", checkPosition, { passive: true });
    window.addEventListener("resize", checkPosition);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
    };
  }, [hasEnteredViewport]);

  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-[#171717] py-10 text-white md:py-12"
      aria-labelledby="homepage-stats-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(var(--primary)/0.12),transparent_48%)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <AnimateOnView once className="mb-8 flex items-end justify-between gap-6 md:mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Litigon in numbers
            </p>
            <h2
              id="homepage-stats-heading"
              className="mt-2 font-display text-2xl font-medium tracking-tight sm:text-3xl"
            >
              Scale, measured in delivery
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent md:block" />
        </AnimateOnView>

        <div
          ref={countersRef}
          className="grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4 lg:gap-0"
        >
          {stats.map((stat, index) => (
            <AnimateOnView
              key={stat.label}
              once
              delay={index * 0.04}
              className="min-w-0 lg:border-s lg:border-white/10 lg:px-8 lg:first:border-s-0 lg:first:ps-0"
            >
              <CounterValue
                value={stat.value}
                suffix={stat.suffix}
                shouldStart={hasEnteredViewport}
              />
              <p className="mt-3 max-w-[220px] text-sm leading-6 text-white/65">
                {stat.label}
              </p>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
