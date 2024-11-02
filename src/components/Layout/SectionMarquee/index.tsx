"use client";

import ImageBase from "@/components/Images/ImageBase";
import Marquee from "react-fast-marquee";

export function SectionMarquee() {
  return (
    <div className="fixed bottom-0 w-full h-[86px] flex items-center justify-between bg-[#FFFFFF] text-black z-50">
      <Marquee style={{ height: "100%" }}>
        <div className="flex flex-row gap-10 items-center text-[32px] font-neueMed">
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center"><ImageBase.Ticket width={40} /></div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center"><ImageBase.Ticket width={40} /></div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center"><ImageBase.Ticket width={40} /></div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center"><ImageBase.Ticket width={40} /></div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center"><ImageBase.Ticket width={40} /></div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center"><ImageBase.Ticket width={40} /></div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center"><ImageBase.Ticket width={40} /></div>
        </div>
      </Marquee>
    </div>
  );
}
