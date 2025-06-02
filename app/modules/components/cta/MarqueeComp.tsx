"use client"

import { Marquee } from "./layout/Maquee"


export const MarqueeComp = ({title}: {title: string}) => {
    return (
<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:100s]">
      <div className="flex items-center justify-center">
        <h1 className="text-[89px] md:m-[6vw] opacity-50 font-bold">{title}</h1>
      </div>
      </Marquee>
    </div>
    )
}