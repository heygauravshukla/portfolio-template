import { Container } from "@/components/container";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";
import Image from "next/image";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const frontmatter = await getBlogFrontMatterBySlug(params.slug);

  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: frontmatter.title + " - Gaurav Shukla",
    description: frontmatter.description,
  };
}

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
        <Image
          src={frontmatter.image}
          alt={frontmatter.title}
          width={1000}
          height={500}
          className="mx-auto mb-20 max-h-96 w-full max-w-2xl rounded-2xl object-cover shadow-xl"
        />
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
