import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import { Subheading } from "@/components/subheading";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>Projects</Heading>
        <Subheading>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet harum
          distinctio, exercitationem repellat sed provident alias aspernatur
          eos. Autem, quaerat! Maiores accusantium dignissimos debitis quis
          quibusdam.
        </Subheading>
        <Projects />
      </Container>
    </div>
  );
}
