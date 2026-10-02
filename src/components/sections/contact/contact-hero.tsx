import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import LionWatermark from "@/components/sections/shared/lion-watermark";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-black pb-24 pt-[150px] text-white md:pb-32 md:pt-[190px]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgb(var(--primary)/0.16),transparent_34%)]"
        aria-hidden="true"
      />
      <LionWatermark className="opacity-[0.08]" />
      <Container className="relative z-10">
        <AnimateOnView blur once className="max-w-[820px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Contact us
          </p>
          <h1 className="h1 max-w-[760px] text-white">Let’s plan your next event</h1>
          <div className="mt-7 h-px w-20 bg-primary" aria-hidden="true" />
          <p className="paragraph-large mt-7 max-w-[680px] text-white/70">
            Share the date, the audience and the ambition — our team will get back to you within
            one business day.
          </p>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default ContactHero;
