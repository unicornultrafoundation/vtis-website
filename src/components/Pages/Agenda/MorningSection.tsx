'use client';

import Speaker1 from '@/assets/images/speakers/1.png';
import Speaker2 from '@/assets/images/agenda/speaker.png';



import Image, { StaticImageData } from "next/image";
import { useMemo, useState } from "react";


interface Props {
  activeTab?: string;
}

interface Speaker {
  title: string;
  time: string;
  description: string;
  image?: StaticImageData;
}

export default function MorningSection({ activeTab }: Props) {
  const [hoveredImageMorning, setHoveredImageMorning] = useState<StaticImageData | null>(null);


  const listSpeakerMorning : Speaker[] = [
    {
      title: 'Opening Ceremony',
      time: '9:00 - 9:30',
      description: 'Opening speech by Mr. Nguyen Duy Hung - Chairman of SSI',
      image: Speaker1,
    },
    {
      title: 'Keynote Speech on Event Theme - Tech Impact',
      time: '9:30 - 10:15',
      description: 'Speech by Mr. Truong Gia Binh - Chairman of FPT',
      image: Speaker2,
    },
    {
      title: 'Talkshow on AI: Generative AI - Business Impact and Future Potential',
      time: '10:15 - 11:00',
      description:
          'Speakers:\n' +
          '- Vinesh - Qualcomm (online)\n' +
          '- Lan Tran - Viettin Bank (offline)\n' +
          '- Gaurav - JP Morgan Chase (offline)\n' +
          '- Santhosh - Techcombank (offline)\n' +
          '- Kavitha - AWS (online)\n' +
          '- Moderator: Ha Dao\n',
    },
    {
      title: 'Panel Discussion on Legal Aspects in the Crypto Field',
      time: '11:00 - 12:00',
      description:
          'Moderator: Le Bao Nguyen - Deputy Director, SSI Digital\n' +
          ' Speakers:\n' +
          '- Malcolm - Deputy Director of Compliance, OKX\n' +
          '- Jonathan Cheung - Head of Legal, Bybit\n' +
          '- Legal team from Binance\n',
    }

  ];

  const listSpeakerMorning2 : Speaker[] = [
    {
      title: 'Panel on Fintech: The Future of Fintech in the Next 5 Years',
      time: '9:00 - 10:00',
      description: 'Panel on Fintech: The Future of Fintech in the Next 5 Years',
    },
    {
      title: 'Keynote by Mr. Hoang Nam Tien - FPT',
      time: '10:00 - 10:30',
      description: 'Topic: Technology\'s Impact on Education and the Future',

    },
    {
      title: 'Panel Discussion with Web 2 Investment Funds',
      time: '10:30 - 11:30',
      description: 'Discussion with representatives from SSIAM, Thinkzone, and Vina Capital on evaluating and investing in technology startup projects',
    },
  ];

  const listData = useMemo(() => {
    if (activeTab === 'Day 1') {
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
            <div
                className="hidden tablet:block absolute left-[400px] fullscreen:left-[650px] opacity-100 transition-opacity duration-300">
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
                  onMouseEnter={() => speaker.image ? setHoveredImageMorning(speaker.image) : setHoveredImageMorning(null)}
                  onMouseLeave={() => setHoveredImageMorning(null)}
              >
                <div
                    className="flex tablet:group-hover:bg-white tablet:group-hover:text-black py-6 px-2 fullscreen:py-[64px]  text-[18px] fullscreen:text-[48px] font-neueMed">
                  <div className=" w-full tablet:max-w-[353px] fullscreen:max-w-[941px] max-w-[116px] ">
                    <p>{speaker.time}</p>
                    <p className=''>{speaker.title}</p>
                  </div>
                  <p className='pl-5' dangerouslySetInnerHTML={{ __html: speaker.description.replaceAll('\n', '<br />') }}/>
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
