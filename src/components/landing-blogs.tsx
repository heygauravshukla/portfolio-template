import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";

export const LandingBlogs = async () => {
  const allBlogs = await getBlogs();
  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div>
      <p className="text-secondary mb-12 max-w-lg pt-4 text-sm md:text-sm">
        I love writing things down
      </p>
      <div className="flex flex-col gap-4">
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
            <p className="text-secondary max-w-lg pt-4 text-sm">
              {truncate(blog.description || "", 150)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
