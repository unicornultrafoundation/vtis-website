'use client';

import Speaker from '@/assets/images/agenda/speaker.png';

import Image, { StaticImageData } from "next/image";
import { useMemo, useState } from "react";


interface Props {
  activeTab?: string;
}


export default function AfternoonSection({activeTab} : Props) {
  const [hoveredImageAfternoon, setHoveredImageAfternoon] = useState<StaticImageData | null>(null);

  const listSpeakerAfternoon = [
    {
      time: '13:30 - 14:30',
      description: 'Panel Discussion: The Future of AI: Traditional vs. Blockchain Suggested Topic: "Traditional AI and Blockchain AI: Opportunities for Collaboration and Competition Content: Discuss how traditional AI and Blockchain AI can complement each other, opportunities for innovation, and competitive potential within the tech ecosystem.',
      image: Speaker,
    },
    {
      time: '14:30 - 15:00',
      description: 'Keynote: The Future of Blockchain and AI for the Economy',
      image: Speaker,
    },
    {
      time: '15:00 - 15:30',
      description: 'Keynote: Blockchain Ecosystem and Its Impact on the Financial Economy',
      image: Speaker,
    },
    {
      time: '15:30 - 16:10',
      description: 'Keynote: The State of Digital Assets in Vietnam',
      image: Speaker,
    },
    {
      time: '16:10 - 17:00',
      description: 'Panel Discussion: Legal Framework for Digital Assets in Vietnam Topic: Legal Framework and Opportunities for Collaboration in the Digital Asset Sector.',
      image: Speaker,
    }

  ];


  const listSpeakerAfternoon2 = [
    {
      time: '13:30 - 14:30',
      description: 'Panel Discussion: The Future of AI: Traditional vs. Blockchain Suggested Topic: "Traditional AI and Blockchain AI: Opportunities for Collaboration and Competition Content: Discuss how traditional AI and Blockchain AI can complement each other, opportunities for innovation, and competitive potential within the tech ecosystem.',
      image: Speaker,
    },
    {
      time: '14:30 - 15:00',
      description: 'Keynote: The Future of Blockchain and AI for the Economy',
      image: Speaker,
    },
    {
      time: '15:00 - 15:30',
      description: 'Keynote: Blockchain Ecosystem and Its Impact on the Financial Economy',
      image: Speaker,
    },
    {
      time: '15:30 - 16:10',
      description: 'Keynote: The State of Digital Assets in Vietnam',
      image: Speaker,
    },
    {
      time: '16:10 - 17:00',
      description: 'Panel Discussion: Legal Framework for Digital Assets in Vietnam Topic: Legal Framework and Opportunities for Collaboration in the Digital Asset Sector.',
      image: Speaker,
    }
  ];

  const listData = useMemo(() => {
    if (activeTab === 'Day 1'){
      return listSpeakerAfternoon;
    }
    return listSpeakerAfternoon2

  }, [activeTab, listSpeakerAfternoon, listSpeakerAfternoon2]);

  return (

      <div
          className='h-full w-full text-white flex flex-col tablet:flex-row tablet:justify-between py-8 tablet:py-0'>
        <p className='font-neueMed text-[20px] tablet:text-[40px] fullscreen:text-[106px] tablet:max-w-[334px] fullscreen:max-w-[890px] leading-[28px] tablet:leading-[48px] fullscreen:leading-[128px] opacity-[0.4]'>
          Afternoon Session: Blockchain Ecosystem & AI
        </p>
        <hr className='w-full h-[1px] block tablet:hidden border-[#333] mb-6 mt-5'/>

        {/* Hovered Image - displayed only if hoveredImage is set */}
        {hoveredImageAfternoon && (
            <div
                className="hidden tablet:block absolute left-[300px] fullscreen:left-[650px] opacity-100 transition-opacity duration-300">

              <Image
                  src={hoveredImageAfternoon}
                  alt="Speaker"
                  width={240}
                  height={328}
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
                  onMouseEnter={() => setHoveredImageAfternoon(speaker.image)}  // Set image on hover
                  onMouseLeave={() => setHoveredImageAfternoon(null)}           // Clear image on leave
              >
                <div
                    className="flex tablet:group-hover:bg-white tablet:group-hover:text-black py-6 px-2 fullscreen:py-[64px] fullscreen:text-[48px] font-neueMed">
                  <p className=" w-full tablet:max-w-[353px] fullscreen:max-w-[941px] max-w-[116px] ">{speaker.time}</p>
                  <p className=" w-full">{speaker.description}</p>
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
