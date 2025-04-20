import { ParallaxHero } from "@/app/modules/components/hero/ui/RainbowParallax";
export default function Home() {
  return (
    <div className="h-[200vh] w-full">
      <ParallaxHero 
        title="Clearwater Luxury Designs" 
        showRainbowOpacity={false} 
      />
      
    </div>
  );
}
