import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { Timeline } from "@/components/timeline";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          About Me
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet harum
          distinctio, exercitationem repellat sed provident alias aspernatur
          eos. Autem, quaerat! Maiores accusantium dignissimos debitis quis
          quibusdam.
        </p>

        <p className="text-secondary max-w-lg pt-4 text-sm">
          I love to travel and explore new places. Here are some of my favorite
          travel photos.
        </p>
        <Collage />

        <p className="text-secondary max-w-lg pt-4 text-sm">
          Here is a timeline of my life achievements.
        </p>
        <Timeline />
      </Container>
    </div>
  );
}
