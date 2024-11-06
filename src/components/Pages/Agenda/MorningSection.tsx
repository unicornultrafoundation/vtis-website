'use client';

import Speaker from '@/assets/images/agenda/speaker.png';

import Image, { StaticImageData } from "next/image";
import { useMemo, useState } from "react";


interface Props {
  activeTab?: string;
}

export default function MorningSection({activeTab}:Props) {
  const [hoveredImageMorning, setHoveredImageMorning] = useState<StaticImageData | null>(null);



  const listSpeakerMorning = [
    {
      time: '08:30 - 09:00',
      description: 'Guest Reception and Registration',
      image: Speaker,
    },
    {
      time: '09:00 - 09:10',
      description: 'Opening Speech. Nguyễn Duy Hưng, Chairman of SSI & SSID',
      image: Speaker,
    },
    {
      time: '09:10 - 09:40',
      description: 'Keynote: The Power of Technology for Vietnams Economy Trương Gia Bình, Chairman of FPT',
      image: Speaker,
    },
    {
      time: '09:40 - 10:10',
      description: 'Keynote: AI in Finance: From Vision to Practice',
      image: Speaker,
    },
    {
      time: '10:10 - 10:40',
      description: 'Guest Reception and Registration',
      image: Speaker,
    },
    {
      time: '10:40 - 11:10',
      description: 'Keynote: AI in Finance: From Vision to Practice',
      image: Speaker,
    },
    {
      time: '11:10 - 11:40',
      description: 'Q&A with the Speakers',
      image: Speaker,
    },
    {
      time: '11:40 - 13:30',
      description: 'Lunch Break',
      image: Speaker,
    },

  ];

  const listSpeakerMorning2 = [
    {
      time: '08:30 - 09:00',
      description: 'Guest Reception and Registration',
      image: Speaker,
    },
    {
      time: '09:00 - 09:10',
      description: 'Opening Speech. Nguyễn Duy Hưng, Chairman of SSI & SSID',
      image: Speaker,
    },
    {
      time: '09:10 - 09:40',
      description: 'Keynote: The Power of Technology for Vietnams Economy Trương Gia Bình, Chairman of FPT',
      image: Speaker,
    },
    {
      time: '09:40 - 10:10',
      description: 'Keynote: AI in Finance: From Vision to Practice',
      image: Speaker,
    },
    {
      time: '08:30 - 09:00',
      description: 'Guest Reception and Registration',
      image: Speaker,
    },
    {
      time: '09:00 - 09:10',
      description: 'Opening Speech. Nguyễn Duy Hưng, Chairman of SSI & SSID',
      image: Speaker,
    },
    {
      time: '09:10 - 09:40',
      description: 'Keynote: The Power of Technology for Vietnams Economy Trương Gia Bình, Chairman of FPT',
      image: Speaker,
    },
    {
      time: '09:40 - 10:10',
      description: 'Keynote: AI in Finance: From Vision to Practice',
      image: Speaker,
    },
  ];

  const listData = useMemo(() => {
    if (activeTab === 'Day 1'){
      return listSpeakerMorning;
    }
    return listSpeakerMorning2;

  }, [activeTab, listSpeakerMorning, listSpeakerMorning2]);



  return (

      <div
          className='h-full w-full text-white flex flex-col tablet:flex-row tablet:justify-between py-8 tablet:py-0'>
        <p className='font-neueMed text-[20px] tablet:text-[40px] fullscreen:text-[106px] tablet:max-w-[250px] fullscreen:max-w-[666px] leading-[28px] tablet:leading-[48px] fullscreen:leading-[128px] opacity-[0.4]'>
          Morning Session: Fintech & AI
        </p>
        <hr className='w-full h-[1px] block tablet:hidden border-[#333] mb-6 mt-5'/>

        {/* Hovered Image - displayed only if hoveredImage is set */}
        {hoveredImageMorning && (
            <div className="hidden tablet:block absolute left-[300px] fullscreen:left-[650px] opacity-100 transition-opacity duration-300">
              <Image
                  src={hoveredImageMorning}
                  alt="Speaker"
                  width={240} // Default width
                  height={328} // Default height
                  className="object-left fullscreen:w-[640px] fullscreen:h-[874px]"
              />
            </div>
        )}

        {/* Timeline Items */}
        <div className="flex flex-col max-w-full tablet:max-w-[921px] fullscreen:max-w-[2456px] w-full">
          {listData.map((speaker, index) => (
              <div
                  key={index}
                  className="relative group h-full flex flex-col"
                  onMouseEnter={() => setHoveredImageMorning(speaker.image)}  // Set image on hover
                  onMouseLeave={() => setHoveredImageMorning(null)}           // Clear image on leave
              >
                <div className="flex tablet:group-hover:bg-white tablet:group-hover:text-black py-6 px-2 fullscreen:py-[64px] fullscreen:text-[48px] font-neueMed">
                  <p className=" w-full tablet:max-w-[353px] fullscreen:max-w-[941px] max-w-[116px] ">{speaker.time}</p>
                  <p className="w-full">{speaker.description}</p>
                </div>
                {index !== listData.length - 1 && (
                    <hr className="w-full h-[1px] border-[#333]"/>
                )}
              </div>
          ))}
        </div>
      </div>

  );
}
