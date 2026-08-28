import type { Metadata } from "next";
import { WorkPage } from "@/components/portfolio/work/WorkPage";

export const metadata: Metadata = {
  title: "Projects | Phong Nguyen",
  description: "Selected full-stack projects by Phong Nguyen.",
};

export default function Page() {
  return <WorkPage />;
}
