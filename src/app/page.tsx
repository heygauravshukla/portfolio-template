import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import { Subheading } from "@/components/subheading";
import { Testimonials } from "@/components/testimonials";
import { projects } from "@/constants/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>John Doe</Heading>
        <Subheading>
          I'm a software engineer with a passion for building scalable and
          efficient systems. I'm a currently working as a freelancer.
        </Subheading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Testimonials />
      </Container>
    </div>
  );
}
