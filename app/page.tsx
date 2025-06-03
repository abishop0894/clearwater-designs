import { HomeHero } from "./modules/components/hero/HomeHero";
import Page from "./modules/layout/Page";
import SectionHeading from "./modules/components/cta/SectionHeading";
import SectionNumber from "./modules/components/cta/layout/SectionNumber";
import AnimatedParagraph from "./modules/components/cta/layout/AnimatedParagraph";
import BorderedCard from "./modules/components/cta/layout/BorderedCard";

export default function Home() {
  return (
  <Page>
    <HomeHero />  
    <SectionHeading title="Our Services" backgroundImg= "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg" />
    <SectionNumber text="IV" />
    <AnimatedParagraph 
  text="Main heading text"
  subparagraph={true}
  subText="Additional details in smaller text"
/>
<BorderedCard 
  showOuterBorder={true}
  showInnerBorder={true}
  backgroundImage="https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg"
  className="bg-black/20"
>
  <div className="text-white">Content over background</div>
</BorderedCard>
    <SectionHeading title="About Us" backgroundImg= "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg" />
  </Page>
  );
}
