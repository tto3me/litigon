import Container from "@/components/container";
import BlogCard from "@/components/ui/blog-card";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { useBlogPosts } from "@/hooks/use-blog";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const News = () => {
  const { data: posts = [], isLoading } = useBlogPosts();
  const latest = posts.slice(0, 3);

  if (!isLoading && latest.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <AnimateOnView once blur className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <span className="paragraph-small uppercase tracking-[0.2em] text-primary">
              Newsroom
            </span>
            <h2 className="h2 mt-4 mb-4">Company updates & press releases</h2>
            <p className="paragraph-large text-muted-foreground">
              Announcements, project stories and news from our events, shows and exhibitions
              across Saudi Arabia.
            </p>
          </div>
          <Button asChild variant="secondary" className="rounded-full">
            <Link to="/blog" className="flex items-center gap-2">
              All updates
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </AnimateOnView>

        <div className="grid grid-cols-1 gap-y-[30px] gap-x-4 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, index) => (
            <AnimateOnView key={post.id} once delay={index * 0.1}>
              <BlogCard
                image={post.image}
                category={post.category}
                readTime={post.read_time}
                title={post.title}
                date={post.date}
                author={post.author}
                slug={post.slug}
              />
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default News;
