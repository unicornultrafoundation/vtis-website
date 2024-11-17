"use client";

import Speaker2 from "@/assets/images/agenda/speaker.png";
import Speaker1 from "@/assets/images/speakers/1.png";

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
  const [hoveredImageMorning, setHoveredImageMorning] =
      useState<StaticImageData | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const listSpeakerMorning: Speaker[] = [
    {
      title: "Opening Performance",
      time: "9:00",
      description: "Opening Performance (Drum show)",
    },
    {
      title: "Program Opening",
      time: "9:20",
      description: "Opening Speech by Mr. Nguyen Duy Hung - Chairman of SSI",
      image: Speaker1,
    },
    {
      title: "Keynote Speech on Event Theme - Tech Impact",
      time: "9:40",
      description: "Speech by Mr. Truong Gia Binh - Chairman @FPT",
      image: Speaker2,
    },
    {
      title: "Keynote Speech of Management",
      time: "10:00",
      description: "",
    },
    {
      title:
          "Talkshow on AI: Generative AI - Business Impact and Future Potential",
      time: "10:20",
      description:
          "Speakers:\n" +
          "- Dr. Vinesh Sukumar - Sr Director, Head of AI/ML @Qualcomm\n" +
          "- Lan Tran - Chief Information Officer (CIO) @VietinBank\n" +
          // "- Gaurav Chawla - VP @JP Morgan Chase \n" +
          "- Hung Bui - CEO @VinAI\n" +
          "- Kavitha Prasad - General manager of AI @AWS\n" +
          "Moderator: Ha Dao - CEO @AIxBlock\n",
    },
    {
      title: "The Legal Frontier of Digital Assets: Benefits, Challenges, and Global Experiences",
      time: "11:10",
      description:
          " Speakers:\n" +
          "- Malcolm - Deputy Head of Compliance @OKX\n" +
          "- Robert Mcdonald - Chief Legal & Compliance Officer @Bybit \n" +
          "- Joy Lam - Head of Global Regulatory and APAC Legal @Binance\n" +
          "Moderator: Le Bao Nguyen - Deputy Director, SSI Digital\n"
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const listSpeakerMorning2: Speaker[] = [
    {
      title: "Panel on AI: AI in Enterprise: Accelerating Digital Transformation",
      time: "9:00",
      description:
          " Speakers:\n" +
          "- Raghu Banda - Sr Director of AI @SAP\n" +
          "- Tuan Cao - CEO @Life AI\n" +
          "- Binh Tran - General Manager @AVV \n" +
          "- Prof. Fabio Cuzzolin - Prof of AI, Director of AI labs @Oxford Brookes, Oxford University\n" +
          "Moderator: Ha Dao, CEO @AIxBlock\n",
    },
    {
      title: "Keynote: The Effect of Technology on Education and the Future",
      time: "9:45",
      description:
          " Speakers:\n" +
          "- Mr. Hoang Nam Tien - Vice President @FPT University\n"
    },
    {
      // title: "Vision & Venture: Web2 Giants on Vietnam’s Growth",
      title: "Panel Discussion with Web2 & Web3 Ventures",
      time: "10:30",
      description:
          " Speakers:\n" +
          "- Do Bui - Founder @Thinkzone\n" +
          "- Nguyen Phan Dung - Deputy CEO @SSIAM\n" +
          " Panelist:\n" +
          "- IDG, SSIAM, Thinkzone, Animoca Brand, Kucoin\n"
    },
    {
      // title: "Vision & Venture: Web2 Giants on Vietnam’s Growth",
      title: "How Bitget Support Innovation & Tech Impact",
      time: "11:20",
      description: "BITGET"
    },
    {
      // title: "Vision & Venture: Web2 Giants on Vietnam’s Growth",
      title: "How Bingx Supports Innovation & Tech Impact",
      time: "11:40",
      description: "BINGX"
    },
  ];

  const listData = useMemo(() => {
    if (activeTab === "Day 1") {
      return listSpeakerMorning;
    }
    return listSpeakerMorning2;
  }, [activeTab, listSpeakerMorning, listSpeakerMorning2]);

  return (
      <div className="h-full w-full text-white flex flex-col tablet:flex-row tablet:justify-between py-8 tablet:py-0">
        <p className="font-neueMed text-[20px] tablet:text-[40px] fullscreen:text-[106px] tablet:max-w-[250px] fullscreen:max-w-[666px] leading-[28px] tablet:leading-[48px] fullscreen:leading-[128px] opacity-[0.4]">
          Morning Session: Fintech & AI
        </p>
        <hr className="w-full h-[1px] block tablet:hidden border-[#333] mb-6 mt-5"/>

        {/* Hovered Image - displayed only if hoveredImage is set */}
        {hoveredImageMorning && (
            <div
                className="hidden tablet:block absolute desktop:left-[400px] fullscreen:left-[650px] opacity-100 animate-fade-in">
              <Image
                  src={hoveredImageMorning}
                  alt="Speaker"
                  width={200} // Default width
                  height={290} // Default height
                  className="object-left laptop:w-[240px] tablet:mt-[200px] desktop:mt-0 desktop:h-auto fullscreen:w-[640px] fullscreen:h-[874px]"
              />
            </div>
        )}

        {/* Timeline Items */}
        <div className="flex flex-col max-w-full tablet:max-w-[921px] fullscreen:max-w-[2456px] w-full">
          {listData.map((speaker, index) => (
              <div
                  key={index}
                  className="relative group h-full flex flex-col"
                  onMouseEnter={() =>
                      speaker.image
                          ? setHoveredImageMorning(speaker.image)
                          : setHoveredImageMorning(null)
                  }
                  onMouseLeave={() => setHoveredImageMorning(null)}
              >
                <div
                    className="flex tablet:group-hover:bg-white tablet:group-hover:text-black py-6 px-2 fullscreen:py-[64px]  text-[18px] fullscreen:text-[48px] font-neueMed">
                  <div className=" w-full tablet:max-w-[100px] fullscreen:max-w-[941px] max-w-[90px] ">
                    <p>{speaker.time}</p>
                  </div>
                  <p className="hidden tablet:flex w-full tablet:max-w-[300px] fullscreen:max-w-[400px]">
                    {speaker.title}
                  </p>
                  <div className='flex flex-col gap-2 '>
                    <p className='flex tablet:hidden'>{speaker.title}</p>
                    <p
                        className="tablet:pl-5 w-full"
                        dangerouslySetInnerHTML={{
                          __html: speaker.description.replaceAll("\n", "<br />"),
                        }}
                    />
                  </div>

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
