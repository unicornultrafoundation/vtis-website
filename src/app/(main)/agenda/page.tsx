'use client';

import AgendaBanner from '@/assets/images/agenda/agenda-bg.png';

import Image from "next/image";
import { useCallback, useState } from "react";
import AfternoonSection from "@/components/Pages/Agenda/AfternoonSection";
import MorningSection from "@/components/Pages/Agenda/MorningSection";


export default function Home() {
  const [activeTab, setActiveTab] = useState('Day 1');

  const classTabActive = useCallback(
      (tabActive: string) => {
        if (activeTab === tabActive) {
          return ' text-[#FFFFFF] border-b border-b-[#FFFFFF] ';
        }
        return 'text-gray-500';
      },
      [activeTab],
  );

  return (
      <div className="min-h-screen bg-[#000] text-black top-14">
        <div className='p-2 font-neueMed w-full items-center justify-center hidden tablet:flex'>
          3-4 DECEMBER, 2024 - NATIONAL CONVENTION CENTER, HANOI, VIETNAM
        </div>

        <div className="h-full tablet:relative w-full tablet:min-h-[504px]">
          <Image src={AgendaBanner} className='hidden tablet:block' alt='' layout='fill' objectFit='cover'/>
          <div className="tablet:absolute w-full h-full">
            <div
                className='flex flex-col gap-6 tablet:gap-0 tablet:justify-between h-full pt-6 tablet:pt-[64px] tablet:pb-[84px]'>
              <div className="text-white tablet:text-center pl-4 tablet:pl-0">
                <h1 className="text-4xl tablet:text-[88px] font-neueMed">Agenda</h1>
              </div>
              <div className='flex border-b border-b-gray-500 font-neueMed'>
                <button className={`px-4 py-3 w-[50%] text-center ${classTabActive('Day 1')}`}
                        onClick={() => setActiveTab('Day 1')}
                >
                  Day 1
                </button>

                <button
                    onClick={() => setActiveTab('Day 2')}
                    className={`px-4 py-3 w-[50%] text-center ${classTabActive('Day 2')}`}
                >
                  Day 2
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='px-4 py-6 tablet:py-0 tablet:px-6 flex flex-col'>
          <p className='text-2xl tablet:text-5xl font-neueMed text-white'>Fintech & Blockchain Ecosystem</p>
          <hr className='w-full hidden tablet:block h-[1px] border-[#333] my-6'/>
          <MorningSection activeTab={activeTab}/>
          <hr className='w-full hidden tablet:block h-[1px] border-[#333] my-6'/>
          <AfternoonSection activeTab={activeTab}/>
        </div>
      </div>
  );
}
