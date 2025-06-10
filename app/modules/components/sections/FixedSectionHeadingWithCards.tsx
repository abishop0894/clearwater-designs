import { sectionOneCarousel } from "@/lib/constants";
import Carousel from "../cta/Carousel";
import SectionHeading from "../cta/SectionHeading";
//test
const FixedSectionHeadingWithCards = () => {
  return (
    <div className="relative h-screen w-full" >
      <SectionHeading title="Fixed Section Heading With Cards" backgroundImg={"https://jrdisplays.s3.us-east-1.amazonaws.com/portfolio/interior/IMG-20240410-WA0001.jpg"} />
         <div className="absolute top-[10vh]  z-[70] overflow-hidden left-0 w-full h-[90vh]">
    <Carousel vertical={true} cards={sectionOneCarousel} />
    </div>
    </div>
  );
};

export default FixedSectionHeadingWithCards;