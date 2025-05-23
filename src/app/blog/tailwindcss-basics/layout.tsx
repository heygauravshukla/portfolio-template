import { Container } from "@/components/container";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Freelancer Portfolio website template",
  description:
    "A perfect portfolio website template that showcases your skills, minimal and smooth microintereactions, perfect for developers, designers, and freelancers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="prose min-h-screen px-10 md:pt-20 md:pb-10">
      {children}
    </Container>
  );
}
