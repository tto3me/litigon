import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const steps = [
  {
    number: "01",
    title: "Strategy",
    text: "We start with your objective, audience and budget, then shape the event concept around it.",
  },
  {
    number: "02",
    title: "Creative",
    text: "Identity, stage design, content and show flow developed as one visual story.",
  },
  {
    number: "03",
    title: "Production",
    text: "Build, staging, lighting, sound and technology delivered by our own crews.",
  },
  {
    number: "04",
    title: "Operations",
    text: "Logistics, hospitality, crowd flow and reporting on the day and after it.",
  },
];

const Approach = () => {
  return (
    <section className="bg-foreground py-16 text-white md:py-24">
      <Container>
        <AnimateOnView once blur className="mb-12 max-w-[720px]">
          <h2 className="h2 mb-5">How we work</h2>
          <p className="paragraph-large text-muted">
            One team from the first brief to the final report, supporting the ambitions of
            Saudi Vision 2030.
          </p>
        </AnimateOnView>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <AnimateOnView key={step.number} once delay={index * 0.08} className="h-full">
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8">
                <span className="text-3xl font-semibold text-primary">{step.number}</span>
                <h3 className="h6">{step.title}</h3>
                <p className="text-sm text-muted">{step.text}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Approach;
