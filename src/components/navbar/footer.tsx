import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { Container } from "../container";

export const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-neutral-100 p-3">
      <p className="text-xs text-neutral-500">
        Built with love by Gaurav Shukla
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="https://x.com/heygauravshukla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
          <div className="sr-only">Visit my X profile</div>
        </Link>
        <Link
          href="https://linkedin.com/in/heygauravshukla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" />
          <div className="sr-only">Visit my LinkedIn profile</div>
        </Link>
        <Link
          href="https://github.com/heygauravshukla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
          <div className="sr-only">Visit my GitHub profile</div>
        </Link>
      </div>
    </Container>
  );
};
