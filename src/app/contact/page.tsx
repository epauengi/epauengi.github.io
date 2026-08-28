import type { Metadata } from "next";
import { ContactPage } from "@/components/portfolio/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Phong Nguyen",
  description: "Contact Phong Nguyen for full-stack opportunities.",
};

export default function Page() {
  return <ContactPage />;
}
