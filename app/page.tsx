import { HomeHero } from "./modules/components/hero/HomeHero";
import Page from "./modules/layout/Page";
import SectionHeading from "./modules/components/cta/SectionHeading";
export default function Home() {
  return (
  <Page>
    <HomeHero />
    <SectionHeading title="Our Services" backgroundImg= "https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg" />
  </Page>
  );
}
