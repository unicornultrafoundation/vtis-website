"use client";

import AgendaBanner from "@/assets/images/agenda/agenda-bg.png";

import AfternoonSection from "@/components/Pages/Agenda/AfternoonSection";
import MorningSection from "@/components/Pages/Agenda/MorningSection";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Day 1");

  const classTabActive = useCallback(
    (tabActive: string) => {
      if (activeTab === tabActive) {
        return " text-[#FFFFFF] border-b border-b-[#FFFFFF] ";
      }
      return "text-gray-500";
    },
    [activeTab]
  );

  return (
    <div className="min-h-screen bg-[#000] top-14">
      <div className="sticky top-14 mt-0 p-2 z-50 fullscreen:p-[21px] bg-[#FFF] text-black font-neueMed w-full items-center justify-center hidden text-2xl tablet:flex tablet:text-[16px] fullscreen:text-[42px]">
        3-4 DECEMBER, 2024 - NATIONAL CONVENTION CENTER, HANOI, VIETNAM
      </div>

      <div className="h-full tablet:relative w-full tablet:min-h-[504px] fullscreen:min-h-[1344px]">
        <Image
          src={AgendaBanner}
          className="hidden tablet:block"
          alt=""
          layout="fill"
          objectFit="cover"
        />
        <div className="tablet:absolute w-full h-full">
          <div className="flex flex-col gap-6 tablet:gap-0 tablet:justify-between h-full  tablet:pb-[84px]  fullscreen:pb-[223px]">
            <div className="text-white tablet:text-center pl-4 tablet:pl-0 fullscreen:h-[235px]">
              <h1 className="text-4xl tablet:text-[88px] fullscreen:text-[234px] font-neueMed pt-6 tablet:pt-[64px] fullscreen:pt-[170px]">
                Agenda
              </h1>
            </div>
            <div className="flex border-b border-b-gray-500 font-neueMed fullscreen:text-[53px]">
              <button
                className={`px-4 py-3 fullscreen:p-8 w-[50%] text-center ${classTabActive(
                  "Day 1"
                )}`}
                onClick={() => setActiveTab("Day 1")}
              >
                Day 1
              </button>

              <button
                onClick={() => setActiveTab("Day 2")}
                className={`px-4 py-3 fullscreen:p-8 w-[50%] text-center ${classTabActive(
                  "Day 2"
                )}`}
              >
                Day 2
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 fullscreen:px-16 py-6 tablet:py-0 tablet:pb-[126px] fullscreen:pb-[328px] tablet:px-6 flex flex-col">
        <p className="text-2xl tablet:text-5xl fullscreen:text-[128px] font-neueMed text-white">
          Fintech & Blockchain Ecosystem
        </p>
        <hr className="w-full hidden tablet:block h-[1px] border-[#333] my-6 fullscreen:my-[64px]" />
        <MorningSection activeTab={activeTab} />
        <hr className="w-full hidden tablet:block h-[1px] border-[#333] my-6 fullscreen:my-[64px]" />
        <AfternoonSection activeTab={activeTab} />
      </div>
    </div>
  );
}
