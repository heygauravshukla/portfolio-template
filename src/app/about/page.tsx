import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Scales } from "@/components/scales";
import { SectionHeading } from "@/components/section-heading";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>About Me</Heading>
        <Subheading>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet harum
          distinctio, exercitationem repellat sed provident alias aspernatur
          eos. Autem, quaerat! Maiores accusantium dignissimos debitis quis
          quibusdam.
        </Subheading>

        <SectionHeading className="text-secondary max-w-lg px-4 pt-4 text-sm">
          Travelling is in my blood
        </SectionHeading>
        <Collage />

        <SectionHeading className="text-secondary max-w-lg px-4 pt-4 text-sm">
          Here is a timeline of my life achievements.
        </SectionHeading>
        <Timeline />
      </Container>
    </div>
  );
}
