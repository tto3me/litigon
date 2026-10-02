import Container from "@/components/container";
import type { ReactNode } from "react";

export interface PolicySection {
  id: string;
  title: string;
  content: ReactNode;
}

interface PolicyContentProps {
  updatedAt: string;
  summary: string;
  sections: PolicySection[];
}

const PolicyContent = ({ updatedAt, summary, sections }: PolicyContentProps) => (
  <section className="bg-background py-14 md:py-20 lg:py-24">
    <Container>
      <div className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-[220px_minmax(0,760px)] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Policy contents">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            On this page
          </p>
          <nav>
            <ul className="space-y-1 border-s border-border ps-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block py-2 text-base leading-6 text-muted-foreground transition-colors hover:text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="min-w-0">
          <div className="mb-12 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Last updated {updatedAt}
            </p>
            <p className="text-lg leading-8 text-card-foreground">{summary}</p>
          </div>

          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="mb-4 text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                  {section.title}
                </h2>
                <div className="space-y-4 text-base leading-7 text-muted-foreground [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_li]:ps-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:ps-6">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </Container>
  </section>
);

export default PolicyContent;
