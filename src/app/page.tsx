import { Container } from "@/components/container";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          John Doe
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm">
          I'm a software engineer with a passion for building scalable and
          efficient systems. I'm a currently working as a freelancer.
        </p>
        <Projects />
        <LandingBlogs />
      </Container>
    </div>
  );
}
