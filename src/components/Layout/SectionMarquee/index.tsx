"use client";

import Marquee from "react-fast-marquee";

export function SectionMarquee() {
  return (
    <div className="fixed bottom-0 w-full h-[80px] flex items-center justify-between bg-[#FFFFFF] text-black">
      <Marquee style={{ height: "100%" }}>
        <div className="flex flex-row gap-10 items-center text-[32px]">
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center">Get Ticket</div>
          <div className="h-full flex items-center">Get Ticket</div>
          &nbsp;
        </div>
      </Marquee>
    </div>
  );
}
