"use client";
import { cn } from "@/lib/utils";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Data = {
  title: string;
  content: {
    title: string;
    description?: string | React.ReactNode;
  }[];
};

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const data: Data[] = [
    {
      title: "2025",
      content: [
        {
          title: "Reached $20k MRR with my VSCode fork.",
          description:
            "Reached the ravenue milestone of $20k MRR with my VSCode fork.",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Launched AI-powered code completion tool",
          description:
            "Successfully developed and launched a machine learning-based code completion tool for developers.",
        },
        {
          title: "Another major open-source contribution",
          description:
            "Successfully developed and launched a machine learning-based code completion tool for developers.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Created developer productivity platform",
          description:
            "Built and deployed a comprehensive platform to improve developer workflow efficiency.",
        },
      ],
    },
    {
      title: "2022",
      content: [
        {
          title: "Open-source contributions milestone",
          description:
            "Contributed to 50+ major open-source projects and became a key maintainer in 3 projects.",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "Started tech consulting business",
          description:
            "Founded a successful technical consulting firm focusing on software architecture and development.",
        },
      ],
    },
    {
      title: "2020",
      content: [
        {
          title: "Released first SaaS product",
          description:
            "Developed and launched first successful SaaS product for developer tools market.",
        },
      ],
    },
  ];

  return (
    <div
      ref={ref}
      className="shadow-section-inset my-6 border-y border-neutral-100 px-4 py-4"
    >
      {data.map((year, index) => (
        <div content="px-4 py-1" key={year.title} className="mb-4">
          <motion.h2
            initial={{
              filter: "blur(10px)",
              opacity: 0,
            }}
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.3,
              delay: index * 0.1,
            }}
            className="shadow-aceternity mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-black"
          >
            {year.title}
          </motion.h2>

          <div className="flex flex-col gap-4">
            {year.content.map((item, idx) => (
              <div key={item.title} className="pl-4">
                <Step isInView={isInView} idx={idx}>
                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.3,
                      delay: idx * 0.2,
                    }}
                    className="text-neutral-600"
                  >
                    {item.title}
                  </motion.h3>
                </Step>
                {item.description && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.3,
                      delay: idx * 0.3,
                    }}
                    className="pt-1 pl-6 text-sm text-neutral-400"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children?: React.ReactNode;
  isInView: boolean;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.2 * idx,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-1 size-4 text-neutral-500" />
      {children}
    </motion.div>
  );
};
