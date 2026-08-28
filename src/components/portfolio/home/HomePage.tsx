import { Footer } from "../shared/Footer";
import { HomeHeader } from "./HomeHeader";
import { HomeIntro } from "./HomeIntro";
import { HorizontalItems } from "./HorizontalItems";
import { MoreWork } from "./MoreWork";
import { MouseFollow } from "./MouseFollow";
import { SiteFrame } from "../shared/SiteFrame";
import { WorkGrid } from "./WorkGrid";
import { WorkTiles } from "./WorkTiles";

export function HomePage() {
  return (
    <SiteFrame pageId="home" loaderLabel="Home" beforeChrome={<MouseFollow />}>
      <HomeHeader />
      <HomeIntro />
      <WorkGrid />
      <WorkTiles />
      <MoreWork />
      <HorizontalItems />
      <Footer />
    </SiteFrame>
  );
}
