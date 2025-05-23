"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
  const projects = [
    {
      title: "Macbook Mockup",
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/macbook-scroll.png",
      description: "A mockup of a Macbook with a scrolling effect.",
      href: "#",
    },
    {
      title: "Flight Simulator",
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/background-lines.webp",
      description: "A flight simulator built with React and Three.js.",
      href: "#",
    },
    {
      title: "3D Model Viewer",
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/carousel.webp",
      description: "A 3D model viewer built with React and Three.js.",
      href: "#",
    },
    {
      title: "WebGL Animation",
      src: "https://aceternity.com/cdn-cgi/image/width=1080/https://assets.aceternity.com/animated-testimonials.webp",
      description: "A WebGL animation built with React and Three.js.",
      href: "#",
    },
  ];

  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I love building web apps and products that can impact millions of lives
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
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
