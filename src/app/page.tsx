import type { Metadata } from "next";
import { HomePage } from "@/components/portfolio/home/HomePage";

export const metadata: Metadata = {
  title: "PORTFOLIO | Phong Nguyen",
  description: "Portfolio of Phong Nguyen, an aspiring full-stack engineer.",
};

export default function Page() {
  return <HomePage />;
}
