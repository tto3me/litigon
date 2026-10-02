import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../../container";

const CTA = () => {

    return (
        <div className="bg-black text-white md:pt-20 xl:pt-24 pt-12 pb-8 overflow-hidden">
            <Container className="relative z-20">
                <StaggerContainer className="max-w-[721px] mx-auto text-center">
                    <AnimateOnView
                        once
                        blur
                        className="mb-6"
                    >
                        <h2
                            className="h1"
                        >Ready to plan your next event?</h2>
                    </AnimateOnView>
                    <AnimateOnView
                        once
                        blur
                        className="mb-10"
                    >
                        <p className="text-lg text-muted">Tell us the date, the audience and the ambition — we will handle the rest.</p>
                    </AnimateOnView>
                    <AnimateOnView
                        once
                    >
                        <Button asChild>
                            <Link to="/contact">
                                Talk to Litigon
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </AnimateOnView>
                </StaggerContainer>
            </Container>
        </div>
    );
};

export default CTA;

