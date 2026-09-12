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

const Services = ({ heading = "An integrated ecosystem", intro }: { heading?: string; intro?: string }) => {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <AnimateOnView once blur className="mb-12 max-w-[720px]">
          <h2 id="litigon-ecosystem-heading" className="h2 mb-5">{heading}</h2>
          <p className="paragraph-large text-muted-foreground">
            {intro ??
              "Strategy, creativity, production and logistics under one roof — so nothing falls between suppliers."}
          </p>
        </AnimateOnView>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimateOnView
              key={service.title}
              once
              delay={index * 0.05}
              className="h-full"
            >
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="h6">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
