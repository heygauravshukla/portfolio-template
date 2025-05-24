import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";

export const metadata = {
  title: "All blogs - Gaurav Shukla",
  description: "All my general blogs, tutorials, and articles.",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>All blogs</Heading>
        <Subheading>
          I'm a software engineer with a passion for building scalable and
          efficient systems. I'm a currently working as a freelancer.
        </Subheading>
        <div className="flex flex-col gap-8 px-4 py-10">
          {allBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.title}>
              <div className="flex items-center justify-between">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary text-sm">
                  {new Date(blog.date || "").toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <p className="text-secondary max-w-lg pt-2 text-sm">
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
