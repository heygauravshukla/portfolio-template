import Marquee from "react-fast-marquee";
import { SectionHeading } from "./section-heading";

export const Testimonials = () => {
  const data = [
    {
      quote:
        "Gaurav is so great with his work, our production was shut down within the first day itself. Highly recommended",
      name: "Elon Musk",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "His attention to detail and problem-solving skills are exceptional. A true professional.",
      name: "Mark Zuckerberg",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop",
    },
    {
      quote:
        "Working with Gaurav was a game-changer for our project. Delivered beyond expectations.",
      name: "Satya Nadella",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
    },
    {
      quote:
        "Innovative solutions and excellent communication throughout the project.",
      name: "Sundar Pichai",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop",
    },
    {
      quote:
        "One of the most talented developers I've worked with. Highly dependable.",
      name: "Jeff Bezos",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1374&auto=format&fit=crop",
    },
  ];
  return (
    <div className="shadow-section-inset my-4 border-y border-neutral-100 p-4">
      <SectionHeading className="pb-4" delay={0.8}>
        People love my work
      </SectionHeading>
      <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] py-4">
        <Marquee speed={20} pauseOnHover className="py-4">
          {data.map((item, idx) => (
            <TestimonialCard key={`testimonial-${idx}`} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="shadow-aceternity mx-4 flex h-50 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 transition duration-300 hover:shadow-md">
      <p className="text-sm text-neutral-700">{quote}</p>
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="size-4 rounded-full object-cover"
        />
        <p className="text-sm text-neutral-500">{name}</p>
      </div>
    </div>
  );
};
