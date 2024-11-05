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
        <p className='font-neueMed text-[20px] tablet:text-[40px] tablet:max-w-[250px] leading-[28px] tablet:leading-[48px] opacity-[0.4]'>
          Morning Session: Fintech & AI
        </p>
        <hr className='w-full h-[1px] block tablet:hidden border-[#333] mb-6 mt-5'/>

        {/* Hovered Image - displayed only if hoveredImage is set */}
        {hoveredImageMorning && (
            <div className="hidden tablet:block absolute left-[250px] opacity-100 transition-opacity duration-300">
              <Image
                  src={hoveredImageMorning}
                  alt="Speaker"
                  width={240}
                  height={328}
                  className="object-left"
              />
            </div>
        )}

        {/* Timeline Items */}
        <div className="flex flex-col max-w-full tablet:max-w-[921px] w-full">
          {listData.map((speaker, index) => (
              <div
                  key={index}
                  className="relative group h-full flex flex-col"
                  onMouseEnter={() => setHoveredImageMorning(speaker.image)}  // Set image on hover
                  onMouseLeave={() => setHoveredImageMorning(null)}           // Clear image on leave
              >
                <div className="flex tablet:group-hover:bg-white tablet:group-hover:text-black py-6 px-2">
                  <p className="tablet:max-w-[50%] max-w-[116px] w-full">{speaker.time}</p>
                  <p className="tablet:w-[50%] w-full">{speaker.description}</p>
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
