import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import {
  CalendarCheck,
  Cpu,
  Megaphone,
  PartyPopper,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const services = [
  {
    icon: CalendarCheck,
    title: "Events & Conference Management",
    description:
      "End-to-end management of conferences, exhibitions and corporate events: strategy, creative direction, production and on-site logistics.",
  },
  {
    icon: Users,
    title: "Strategic Conferences & Summits",
    description:
      "Agenda design, speaker and delegation coordination, registration and hospitality for high-level summits.",
  },
  {
    icon: Cpu,
    title: "AI & Smart Experiences",
    description:
      "Interactive installations, smart registration and data-driven experiences that make every guest feel recognised.",
  },
  {
    icon: Megaphone,
    title: "Marketing Management",
    description:
      "Campaign planning, content production and media coverage that build attendance before the doors open.",
  },
  {
    icon: PartyPopper,
    title: "Entertainment & Cultural Seasons",
    description:
      "Programming and operating cultural seasons, festivals and national celebrations for wide public audiences.",
  },
  {
    icon: ShieldCheck,
    title: "Crowd Management",
    description:
      "Flow planning, access control and safety operations for venues of every scale.",
  },
  {
    icon: Star,
    title: "VIP & Official Delegations",
    description:
      "Protocol, reception and private hospitality for ministers, sponsors and official delegations.",
  },
  {
    icon: Plane,
    title: "Private Aviation",
    description:
      "Private jet arrangements, airport handling and ground transfers for guests and delegations.",
  },
  {
    icon: Sparkles,
    title: "Show Production",
    description:
      "Drone shows, fireworks, stage design, lighting and sound engineered for one unforgettable moment.",
  },
];

const Services = ({
  heading = "An integrated ecosystem",
  intro,
  dockedLion = false,
}: {
  heading?: string;
  intro?: string;
  dockedLion?: boolean;
}) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useRef(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)");
    isMobile.current = mql.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      isMobile.current = e.matches;
      if (!e.matches) setActiveIndex(-1);
    };
    mql.addEventListener("change", handleChange);

    if (!mql.matches) return () => mql.removeEventListener("change", handleChange);

    // Track which cards are visible and how close to center
    const ratioMap = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const idx = Number(entry.target.getAttribute("data-service-index"));
          if (entry.isIntersecting) {
            ratioMap.set(idx, entry.intersectionRatio);
          } else {
            ratioMap.delete(idx);
          }
        }

        // Find the card with the highest intersection ratio
        let bestIdx = -1;
        let bestRatio = 0;
        for (const [idx, ratio] of ratioMap) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIdx = idx;
          }
        }
        setActiveIndex(bestIdx);
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-30% 0px -30% 0px",
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      mql.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <section className="bg-revio-obsidian py-16 md:py-24">
      <Container>
        <AnimateOnView
          once
          blur
          className={`mb-12 max-w-[720px] ${dockedLion ? "lg:pl-[72px] lg:max-w-[792px]" : ""}`}
        >
          <h2 id="litigon-ecosystem-heading" className="h2 mb-5 text-revio-light">
            {heading}
          </h2>
          <p className="paragraph-large text-revio-light/70">
            {intro ??
              "Strategy, creativity, production and logistics under one roof — so nothing falls between suppliers."}
          </p>
        </AnimateOnView>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <AnimateOnView
                key={service.title}
                once
                delay={index * 0.05}
                className="h-full"
              >
                <div
                  ref={(el) => { cardRefs.current[index] = el; }}
                  data-service-index={index}
                  className={[
                    "group relative flex h-full flex-col rounded-xs border bg-card-dark p-8 transition-all duration-500",
                    // Mobile: active state via scroll, no hover effects
                    isActive
                      ? "border-primary/50"
                      : "border-borderDark sm:hover:border-primary/50",
                  ].join(" ")}
                >
                  <div className="mb-8">
                    <span
                      className={[
                        "flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300",
                        isActive
                          ? "border-primary/30 bg-primary text-primary-foreground"
                          : "border-primary/30 bg-primary/5 text-primary sm:group-hover:bg-primary sm:group-hover:text-primary-foreground",
                      ].join(" ")}
                    >
                      <service.icon className="h-6 w-6" />
                    </span>
                  </div>
                  <h3 className="font-display text-[22px] font-semibold leading-[1.3] tracking-tight text-card-dark-foreground md:text-[24px]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-card-dark-foreground/60">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <div
                      className={[
                        "h-[1px] bg-primary transition-all duration-700",
                        isActive
                          ? "w-full"
                          : "w-0 sm:group-hover:w-full",
                      ].join(" ")}
                    />
                  </div>
                </div>
              </AnimateOnView>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;

