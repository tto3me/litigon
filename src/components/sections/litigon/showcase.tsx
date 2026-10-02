import { memo, useCallback, useId, useState } from "react";
import { Minus, Plus } from "lucide-react";

import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/utils";
import ai from "@/assets/litigon/service-ai.jpg";
import aviation from "@/assets/litigon/service-private-aviation.jpg";
import conferences from "@/assets/litigon/service-conferences.jpg";
import vip from "@/assets/litigon/service-vip-reception.jpg";
import droneShow from "@/assets/litigon/tech-drone-show.jpg";
import fireworks from "@/assets/litigon/tech-fireworks.jpg";

const items = [
  {
    image: droneShow,
    title: "Drone shows",
    text: "Choreographed drone formations that turn the night sky into your message.",
    profileText:
      "We create spectacular drone shows that transform the night sky into a living canvas. Every formation is designed around the occasion, combining precise choreography, light, music and storytelling to deliver a safe and unforgettable visual experience.",
  },
  {
    image: fireworks,
    title: "Fireworks & pyrotechnics",
    text: "Licensed pyrotechnic displays synchronised to music and stage moments.",
    profileText:
      "Our specialised teams design and produce fireworks and pyrotechnic shows for national celebrations, festivals and major events. Displays are planned with exact timing, creative direction and strict safety standards, then synchronised with music, lighting and live performances.",
  },
  {
    image: ai,
    title: "AI technologies",
    text: "Smart registration, crowd analytics and interactive content driven by AI.",
    profileText:
      "We integrate artificial intelligence into the guest journey through smart registration, facial recognition, crowd analytics and interactive experiences. These technologies help organisers understand attendance, improve movement and deliver personalised content in real time.",
  },
  {
    image: conferences,
    title: "Conferences & summits",
    text: "Halls, stages, translation and hospitality built for high-level agendas.",
    profileText:
      "We manage conferences and strategic summits from concept to closing session. Our work covers agenda development, speaker and delegation coordination, registration, staging, simultaneous interpretation, hospitality and complete on-site operations.",
  },
  {
    image: vip,
    title: "VIP reception",
    text: "Protocol-trained hosts, lounges and transport for official delegations.",
    profileText:
      "We provide refined reception and hospitality services for VIP guests and official delegations. Protocol-trained teams coordinate arrivals, private lounges, transportation, accommodation and every detail of the guest journey with discretion and precision.",
  },
  {
    image: aviation,
    title: "Private aviation",
    text: "Private jet charters, airport handling and seamless ground transfers.",
    profileText:
      "Our private aviation service arranges aircraft charter, flight coordination, airport handling and ground transportation. We provide a seamless, private and carefully managed travel experience for executives, VIP guests and official delegations.",
  },
];

type ShowcaseItem = (typeof items)[number];

interface ShowcaseCardProps {
  item: ShowcaseItem;
  isExpanded: boolean;
  onToggle: (title: string) => void;
}

const ShowcaseCard = memo(({ item, isExpanded, onToggle }: ShowcaseCardProps) => {
  const contentId = useId();
  const titleId = useId();

  return (
    <article
      data-state={isExpanded ? "open" : "closed"}
      onClick={() => onToggle(item.title)}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle(item.title);
        }
      }}
      className={cn(
        "group w-full overflow-hidden rounded-3xl bg-foreground text-left text-primary-foreground cursor-pointer",
        "shadow-[0_14px_40px_rgba(0,0,0,0.08)] transition-[box-shadow,outline-color] duration-300",
        "hover:shadow-[0_20px_52px_rgba(0,0,0,0.13)] motion-reduce:transition-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isExpanded && "outline outline-2 outline-primary/80"
      )}
    >
      <div className="relative h-[200px] w-full overflow-hidden md:h-[220px]">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 id={titleId} className="h6 text-primary-foreground">
            {item.title}
          </h3>
          <span
            aria-hidden="true"
            className={cn(
              "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border",
              "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground",
              "transition-[background-color,border-color,transform] duration-200",
              "group-hover:border-primary/70 group-hover:bg-primary/20",
              "motion-reduce:transition-none",
              isExpanded && "border-primary/70 bg-primary/15 text-primary"
            )}
          >
            <span className="relative h-5 w-5">
              <Plus
                className={cn(
                  "absolute inset-0 h-5 w-5 transition-[opacity,transform] duration-200 motion-reduce:transition-none",
                  isExpanded ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
                )}
              />
              <Minus
                className={cn(
                  "absolute inset-0 h-5 w-5 transition-[opacity,transform] duration-200 motion-reduce:transition-none",
                  isExpanded ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"
                )}
              />
            </span>
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-primary-foreground/80">{item.text}</p>

        <div
          id={contentId}
          role="region"
          aria-labelledby={titleId}
          aria-hidden={!isExpanded}
          style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
          className={cn(
            "grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out motion-reduce:transition-none",
            isExpanded ? "mt-4 opacity-100" : "mt-0 opacity-0"
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-t border-primary-foreground/10 pt-4">
              <p className="text-sm leading-7 text-primary-foreground/85 md:text-base">
                {item.profileText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

ShowcaseCard.displayName = "ShowcaseCard";

const Showcase = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = useCallback((title: string) => {
    setExpandedItem((current) => (current === title ? null : title));
  }, []);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <AnimateOnView once blur className="mb-12 max-w-[720px]">
          <h2 className="h2 mb-5">Moments we engineer</h2>
          <p className="paragraph-large text-muted-foreground">
            Technology, spectacle and hospitality combined into experiences guests remember long
            after the last guest leaves.
          </p>
        </AnimateOnView>

        <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const isExpanded = expandedItem === item.title;

            return (
              <AnimateOnView
                key={item.title}
                once
                delay={index * 0.05}
                className="self-start"
              >
                <ShowcaseCard
                  item={item}
                  isExpanded={isExpanded}
                  onToggle={toggleItem}
                />
              </AnimateOnView>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Showcase;
