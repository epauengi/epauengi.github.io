import { SiteFrame } from "../shared/SiteFrame";
import { ContactFooter } from "./ContactFooter";
import { ContactHeader } from "./ContactHeader";

export function ContactPage() {
  return (
    <SiteFrame pageId="contact" loaderLabel="Contact">
      <ContactHeader />
      <ContactFooter />
    </SiteFrame>
  );
}
