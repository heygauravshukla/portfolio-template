"use client";
import { SectionHeading } from "@/components/section-heading";
import { Project, projects as defaultProjects } from "@/constants/projects";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const Projects = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => {
  return (
    <div className="py-10">
      <SectionHeading delay={0.2}>A lifetime in projects</SectionHeading>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeInOut" }}
            key={idx}
            className="group relative mb-4"
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                height={300}
                width={300}
                className="w-full rounded-xl object-cover transition-all duration-200 group-hover:scale-[1.02]"
              />
              <h2 className="mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                {project.title}
              </h2>
              <p className="mt-2 max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
