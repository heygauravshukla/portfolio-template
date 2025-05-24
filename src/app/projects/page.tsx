import { Container } from "@/components/container";
import { Projects } from "@/components/projects";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Projects
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet harum
          distinctio, exercitationem repellat sed provident alias aspernatur
          eos. Autem, quaerat! Maiores accusantium dignissimos debitis quis
          quibusdam.
        </p>
        <Projects />
      </Container>
    </div>
  );
}
