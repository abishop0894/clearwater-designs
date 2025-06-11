import Page from "./modules/layout/Page";
import Carousel from "./modules/components/cta/Carousel";
import { portfolioCards } from "@/lib/constants";
import HeroTwo from "./modules/components/hero/HeroTwo";
import TwoColumnSectionComponent from "./modules/components/cta/TwoColumnSection";
import ImageGridSectionComponent from "./modules/components/cta/ServicesGrid";
import AboutHome from "./modules/components/cta/AboutHome";
export default function Home() {
  return (
  <Page>
    <HeroTwo/>
    <AboutHome />
    <TwoColumnSectionComponent />
    <ImageGridSectionComponent />
  
<Carousel cards={portfolioCards} />

  </Page>
  );
}
