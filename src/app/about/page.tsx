import type { Metadata } from "next";
import { AboutPage } from "@/components/portfolio/about/AboutPage";

export const metadata: Metadata = {
  title: "About | Phong Nguyen",
  description: "Information Technology student focused on full-stack web development and database systems.",
};

export default function Page() {
  return <AboutPage />;
}
