import { Container } from "@/components/container";
import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

export const metadata = {
  title: "All blogs - Gaurav Shukla",
  description: "All my general blogs, tutorials, and articles.",
};

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  console.log(frontmatter);

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
