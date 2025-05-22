import { Container } from "@/components/container";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:p-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Hello, there!
        </h1>
        <p className="text-secondary max-w-lg pt-10 text-sm">
          I'm a software engineer with a passion for building scalable and
          efficient systems. I'm a currently working as a freelancer.
        </p>
      </Container>
    </div>
  );
}
