import Container from "@/components/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const faqs = [
  {
    question: "What does Litigon do?",
    answer: "Litigon is an events and conferences management company in Saudi Arabia. We handle strategy, creative direction, technical production, hospitality and on-site operations for conferences, exhibitions, cultural seasons, sports weekends and national celebrations.",
  },
  {
    question: "How early should we contact you?",
    answer: "The earlier the better. Large conferences and cultural seasons usually need two to six months of preparation, while smaller activations and exhibition stands can be delivered in a few weeks. Tell us your date and we will tell you honestly what is possible.",
  },
  {
    question: "Do you manage the whole event or only parts of it?",
    answer: "Both. Many clients ask us to run the event end to end, while others bring us in for a specific element such as stage production, an exhibition stand, crowd management or VIP reception.",
  },
  {
    question: "Can you handle VIPs and official delegations?",
    answer: "Yes. Our protocol-trained hosts manage reception, lounges, transport and private aviation arrangements for ministers, sponsors and official delegations.",
  },
  {
    question: "Do you produce drone shows and fireworks?",
    answer: "Yes. We produce choreographed drone formations and licensed pyrotechnic displays synchronised with music, stage moments and screen content.",
  },
  {
    question: "Where do you work?",
    answer: "We work across the Kingdom of Saudi Arabia, with teams and suppliers able to mobilise for events in any region, including remote desert locations.",
  },
  {
    question: "How is pricing decided?",
    answer: "Every event is quoted individually based on scale, venue, production requirements and duration. After an initial conversation we send a detailed proposal with a clear breakdown.",
  },
  {
    question: "Can you support Saudi Vision 2030 programmes?",
    answer: "Yes. Much of our work supports national and cultural programmes tied to Saudi Vision 2030, from public seasons to international pavilions.",
  },
];

const FAQ = () => {

  return (
    <section className="bg-black text-white md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-[507px] md:sticky static top-24 self-start">
            <AnimateOnView once blur>
              <span className="paragraph-small uppercase tracking-[0.2em] text-primary">
                FAQs
              </span>
              <h2 className="h2 md:mb-6 mb-3 mt-4 text-white">Frequently asked questions</h2>
              <p className="paragraph mb-8 text-muted">
                Everything you need to know before we start planning together.
              </p>
              <Button asChild className="rounded-full">
                <Link 
                  to="/contact#contact-form"
                  onClick={(e) => {
                    if (window.location.pathname === "/contact") {
                      const el = document.getElementById("contact-form");
                      el?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                >
                  Talk to our team <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </AnimateOnView>
          </div>
          <div className="md:max-w-[612px] w-full">
            <AnimateOnView once y={40}>
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-colors data-[state=open]:border-primary/50 hover:border-white/20"
                  >
                    <AccordionTrigger className="text-left py-0 text-white hover:no-underline [&[data-state=open]>svg]:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-0 data-[state=closed]:pt-0 pt-4 text-muted">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimateOnView>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
