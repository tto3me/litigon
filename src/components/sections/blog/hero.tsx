import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import BlogBreadcrumbs from "@/components/sections/blog/blog-breadcrumbs";
import LionWatermark from "@/components/sections/shared/lion-watermark";

const BlogHero = () => {
  return (
    <section className="relative bg-foreground overflow-hidden banner-top-padding pb-[200px] lg:pb-[301px]">
      <LionWatermark />
      <Container className="relative z-10">
        <BlogBreadcrumbs
          className="mb-8 flex justify-center"
          items={[{ label: "Home", to: "/" }, { label: "Newsroom", to: "/blog" }]}
        />

        <StaggerContainer className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-4 xl:gap-6 mb-4 md:mb-8">
          <AnimateOnView blur>
            <Badge variant="color" className="gap-2">
              Company updates
            </Badge>
          </AnimateOnView>
          <AnimateOnView blur delay={0.1}>
            <Badge variant="color" className="gap-2">
              Press releases & project stories
            </Badge>
          </AnimateOnView>
        </StaggerContainer>

        <AnimateOnView blur className="text-center max-w-3xl mx-auto lg:mb-10 md:mb-8 mb-4" delay={0.2}>
          <h1 className="h1 text-white">
            News from behind Saudi Arabia&apos;s biggest events
          </h1>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default BlogHero;
