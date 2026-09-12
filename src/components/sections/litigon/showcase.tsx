import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
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
  },
  {
    image: fireworks,
    title: "Fireworks & pyrotechnics",
    text: "Licensed pyrotechnic displays synchronised to music and stage moments.",
  },
  {
    image: ai,
    title: "AI technologies",
    text: "Smart registration, crowd analytics and interactive content driven by AI.",
  },
  {
    image: conferences,
    title: "Conferences & summits",
    text: "Halls, stages, translation and hospitality built for high-level agendas.",
  },
  {
    image: vip,
    title: "VIP reception",
    text: "Protocol-trained hosts, lounges and transport for official delegations.",
  },
  {
    image: aviation,
    title: "Private aviation",
    text: "Private jet charters, airport handling and seamless ground transfers.",
  },
];

const Showcase = () => {
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
          {items.map((item, index) => (
            <AnimateOnView key={item.title} once delay={index * 0.05} className="h-full">
              <div className="relative h-[320px] overflow-hidden rounded-3xl">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="h6 mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.text}</p>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Showcase;
