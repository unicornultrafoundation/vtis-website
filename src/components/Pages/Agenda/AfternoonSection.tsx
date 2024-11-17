"use client";

import Speaker from "@/assets/images/agenda/speaker.png";

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

export default function AfternoonSection({ activeTab }: Props) {
  const [hoveredImageAfternoon, setHoveredImageAfternoon] =
    useState<StaticImageData | null>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const listSpeakerAfternoon: Speaker[] = [
    {
      title: "",
      time: "13:30",
      description:
          "Speakers:\n" +
          "- Mr Don Lam - VinaCapital",
    },
    {
      title: "Panel on Blockchain and Its Applications in Daily Life",
      time: "14:00",
      description:
          "Speakers:\n" +
          "- Lynn Hoang - Country Director @Binance\n" +
          "- Queenie - Vietnam Country Manager @Tether\n" +
          "- Trung Banh - Co-Founder / Chief Product Officer @Holdstation\n" +
          "- Le Sy Nguyen - Vietnam Country Head @Bitget\n" +
          "Moderator: Chloe Phung, Co-founder & Co-CEO @U2U Network\n",
    },
    {
      title: "Keynote Speech on Event Theme - Tech Impact",
      time: "14:45",
      description:
          "Speakers:\n" +
          "- COO Kucoin",
    },
    {
      title: "Fintech Panel: The Future of Fintech in the Next 5 Years",
      time: "15:15",
      description:
          "Speakers:\n" +
          "- Giang Nguyen - Founder @DNSE\n" +
          "- Nghiem Xuan Huy - Founder @Finhay\n" +
          "- Lynn Hoang - Country Manager @Binance\n" +
          "Moderator: Le Thi Le Hang - CSO @SSI\n" ,
    },
    // {
    //   title: "Panel: Future Innovations and Security in Digital Asset",
    //   time: "15:00",
    //   description: "Speakers:  Bybit, Bitget, Bingx, KuCoin",
    // },
    {
      title:
        "Panel on AI: The Future of AI - Open Source and Decentralized or Closed Source and Centralized?",
      time: "16:00",
      description:
        "Speakers:\n" +
        "- Raghu Banda - Sr Director of AI @SAP\n" +
        "- Tuan Cao - CEO @Life AI\n" +
        "- Binh Tran - General Manager @AVV\n" +
        "- Binh Tran @AVV  \n" +
        "- Prof. Fabio Cuzzolin - Prof of AI, Director of AI labs @Oxford Brookes, Oxford University\n" +
        "Moderator: Ha Dao - CEO @AIxBlock\n",
    },
    {
      title: "Panel Discussion with Vietnamese Blockchain Startups",
      time: "16:45",
      description:
          "Panelist:\n" +
          "- Delegates from K300, ATX, Maxx, Holdstation. Moderator: VBU\n",
    },
    {
      title: "Keynote Speech on Event Theme - Tech Impact",
      time: "17:15",
      description: "",
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const listSpeakerAfternoon2: Speaker[] = [
    {
      title: "How Binance Support Innovation & Tech Impact",
      time: "13:30",
      description:
          "Speakers:\n" +
          "- Richard Teng - CEO @Binance\n",
    },
    {
      title: "DePIN for Life",
      time: "14:00",
      description:
          "Delegates from IDG, JDI, Chain Capital, Mod: Chloe Phung (U2U)\n",
    },
    {
      title: "Keynote of Platinum key partners",
      time: "14:30",
      description: "",
    },
    {
      title: "Panel on Future Innovations and Security in Digital Asset",
      time: "15:30",
      description:
          "Speakers:\n" +
          "-  Bybit, Bitget, Bingx, KuCoin, MEXC\n",
    },
    {
      title: "Gaming panel: Gaming's Contribution to Life and Economy",
      time: "16:15",
      description: "",
    },
    {
      title: "Closing ceremony",
      time: "16:00",
      description: "",
    },
  ];

  const listData = useMemo(() => {
    if (activeTab === "Day 1") {
      return listSpeakerAfternoon;
    }
    return listSpeakerAfternoon2;
  }, [activeTab, listSpeakerAfternoon, listSpeakerAfternoon2]);

  return (
    <div className="h-full w-full text-white flex flex-col tablet:flex-row tablet:justify-between py-8 tablet:py-0">
      <p className="font-neueMed text-[20px] tablet:text-[40px] fullscreen:text-[106px] tablet:max-w-[334px] fullscreen:max-w-[890px] leading-[28px] tablet:leading-[48px] fullscreen:leading-[128px] opacity-[0.4]">
        Afternoon Session: Blockchain Ecosystem & AI
      </p>
      <hr className="w-full h-[1px] block tablet:hidden border-[#333] mb-6 mt-5" />

      {/* Hovered Image - displayed only if hoveredImage is set */}
      {hoveredImageAfternoon && (
        <div className="hidden tablet:block absolute desktop:left-[400px] fullscreen:left-[650px] opacity-100 animate-fade-in">
          <Image
            src={hoveredImageAfternoon}
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
                ? setHoveredImageAfternoon(speaker.image)
                : setHoveredImageAfternoon(null)
            }
            onMouseLeave={() => setHoveredImageAfternoon(null)}
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
