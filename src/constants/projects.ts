export type Project = {
  title: string;
  src: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
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
