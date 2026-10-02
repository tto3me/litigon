import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import LionWatermark from "@/components/sections/shared/lion-watermark";

interface PlanHeroProps {
  title: string;
  description: string;
}

const LegalHero = ({ title, description }: PlanHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-black banner-top-padding md:pb-20 xl:pb-32 pb-12">
      <LionWatermark />
      <Container className="relative z-10 pt-20">
        {/* Main headline */}
        <AnimateOnView once blur className="text-center max-w-4xl mx-auto mb-10" delay={0.2}>
          <h1 className="h1 text-white mb-6">
            {title}
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            {description}
          </p>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default LegalHero;

