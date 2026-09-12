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

        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <AnimateOnView
              key={item.title}
              once
              delay={index * 0.05}
              className={`h-full transition-[grid-column] duration-500 ${
                expandedItem === item.title ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              <Button
                type="button"
                variant="outline"
                aria-expanded={expandedItem === item.title}
                onClick={() =>
                  setExpandedItem((current) => (current === item.title ? null : item.title))
                }
                className={`group relative block h-[320px] w-full overflow-hidden whitespace-normal rounded-3xl border-0 p-0 text-left transition-[height] duration-500 hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  expandedItem === item.title ? "h-[460px] md:h-[420px]" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    expandedItem === item.title
                      ? "bg-black/60"
                      : "bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                  }`}
                />
                <div
                  className={`absolute inset-x-0 bottom-0 p-6 text-white transition-all duration-500 md:p-10 ${
                    expandedItem === item.title
                      ? "inset-y-0 flex flex-col justify-center"
                      : ""
                  }`}
                >
                  <div
                    className={
                      expandedItem === item.title ? "w-full max-w-xl" : "w-full"
                    }
                  >
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className={
                        expandedItem === item.title ? "h4" : "h6"
                      }
                    >
                      {item.title}
                    </h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/30" aria-hidden="true">
                      {expandedItem === item.title ? <Minus /> : <Plus />}
                    </span>
                  </div>
                  <p className={`mt-2 text-sm text-white/80 ${expandedItem === item.title ? "hidden" : ""}`}>
                    {item.text}
                  </p>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                      expandedItem === item.title
                        ? "mt-5 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-base leading-7 text-white/85 md:text-lg">
                      {item.profileText}
                    </p>
                  </div>
                </div>
              </Button>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Showcase;
