import { useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { Minus, Plus } from "lucide-react";
import droneShow from "@/assets/litigon/tech-drone-show.jpg";
import fireworks from "@/assets/litigon/tech-fireworks.jpg";
import ai from "@/assets/litigon/service-ai.jpg";
import vip from "@/assets/litigon/service-vip-reception.jpg";
import aviation from "@/assets/litigon/service-private-aviation.jpg";
import conferences from "@/assets/litigon/service-conferences.jpg";

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

const Showcase = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <AnimateOnView once blur className="mb-12 max-w-[720px]">
          <h2 className="h2 mb-5">Moments we engineer</h2>
          <p className="paragraph-large text-muted-foreground">
            Technology, spectacle and hospitality combined into experiences guests remember
            long after the last guest leaves.
          </p>
        </AnimateOnView>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const isExpanded = expandedItem === item.title;
            return (
              <AnimateOnView
                key={item.title}
                once
                delay={index * 0.05}
                className="h-full"
              >
                <Button
                  type="button"
                  variant="outline"
                  aria-expanded={isExpanded}
                  onClick={() =>
                    setExpandedItem((current) =>
                      current === item.title ? null : item.title
                    )
                  }
                  className={`group flex h-full w-full flex-col overflow-hidden whitespace-normal rounded-3xl border-0 bg-card p-0 text-left transition-all duration-500 hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isExpanded ? "ring-1 ring-primary/30" : ""
                  }`}
                >
                  <div className="relative h-[200px] w-full shrink-0 overflow-hidden md:h-[220px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-5 text-white md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="h6">{item.title}</h3>
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/30 transition-colors group-hover:bg-white/10"
                        aria-hidden="true"
                      >
                        {isExpanded ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-white/80">{item.text}</p>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                        isExpanded
                          ? "mt-4 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden border-t border-white/10 pt-4">
                        <p className="text-sm leading-7 text-white/85 md:text-base">
                          {item.profileText}
                        </p>
                      </div>
                    </div>
                  </div>
                </Button>
              </AnimateOnView>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Showcase;
