import Page from "./modules/layout/Page";
import SectionHeading from "./modules/components/cta/SectionHeading";
import SectionNumber from "./modules/components/cta/layout/SectionNumber";
import AnimatedParagraph from "./modules/components/cta/layout/AnimatedParagraph";
import Carousel from "./modules/components/cta/Carousel";
import { portfolioCards } from "@/lib/constants";
import FixedSectionHeadingWithCards from "./modules/components/sections/FixedSectionHeadingWithCards";
import HeroTwo from "./modules/components/hero/HeroTwo";

export default function Home() {
  return (
  <Page>
    <HeroTwo/>
    <SectionHeading title="Our Services" backgroundImg= "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg" />
    <SectionNumber text="IV" />
    <AnimatedParagraph 
  text="Main heading text"
  subparagraph={true}
  subText="Additional details in smaller text"
/>
<Carousel cards={portfolioCards} />
<FixedSectionHeadingWithCards />
<FixedSectionHeadingWithCards />
<FixedSectionHeadingWithCards />
  </Page>
  );
}
