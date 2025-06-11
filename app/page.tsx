import Page from "./modules/layout/Page";
import SectionHeading from "./modules/components/cta/SectionHeading";
import Carousel from "./modules/components/cta/Carousel";
import { portfolioCards } from "@/lib/constants";
import FixedSectionHeadingWithCards from "./modules/components/sections/FixedSectionHeadingWithCards";
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
    <SectionHeading title="Our Services" backgroundImg= "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg" />
<Carousel cards={portfolioCards} />
<FixedSectionHeadingWithCards />
<FixedSectionHeadingWithCards />
<FixedSectionHeadingWithCards />
  </Page>
  );
}
