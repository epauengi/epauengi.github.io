import { Footer } from "../shared/Footer";
import { SiteFrame } from "../shared/SiteFrame";
import { AboutHeader } from "./AboutHeader";
import { AboutPortrait } from "./AboutPortrait";
import { AboutServices } from "./AboutServices";
import { Certificates } from "./Certificates";
import { DigitalGlobeDivider } from "./DigitalGlobeDivider";

export function AboutPage() {
  return (
    <SiteFrame pageId="about" loaderLabel="About">
      <AboutHeader />
      <DigitalGlobeDivider />
      <AboutPortrait />
      <AboutServices />
      <Certificates />
      <Footer />
    </SiteFrame>
  );
}
