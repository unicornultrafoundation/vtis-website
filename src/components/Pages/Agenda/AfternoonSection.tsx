"use client";

import Speaker from "@/assets/images/agenda/speaker.png";
import Speaker4 from "@/assets/images/speakers/4.png";

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
      title: "Sponsor Keynote: Tech Impact",
      time: "13:30",
      description: "Speaker: Richard Teng - CEO of Binance",
      image: Speaker4,
    },
    {
      title: "Panel on Blockchain and Its Applications in Daily Life",
      time: "13:50",
      description:
        "Speakers: Delegates from Tether, Avax, Binance, Holdstation, and U2U",
    },
    {
      title: "Keynote: Tech Impact",
      time: "14:30",
      description: "Speaker: COO of KuCoin (20mins)",
    },
    {
      title: "10 mins",
      time: "",
      description: "Break",
    },
    {
      title: "Panel on Future Innovations and Security in Digital Asset",
      time: "15:00",
      description: "Speakers: Bybit, Bitget, Bingx, KuCoin",
    },
    {
      title:
        "Panel on AI: The Future of AI - Open Source and Decentralized or Closed Source and Centralized?",
      time: "16:00",
      description:
        "Speakers:\n" +
        "- Phong Nguyen - FPT\n" +
        "- Raghu - SAP \n" +
        "- Tuan Cao - Genetica \n" +
        "- Binh Tran - AVV \n" +
        "- Prof. Fabio - Oxford Brookes, Oxford University \n" +
        "- Moderator: Ha Dao\n",
    },
    {
      title: "Panel Discussion with Vietnamese Blockchain Startups",
      time: "17:00",
      description: "Speakers: Delegates from Onus, ATX, and Icetea Labs",
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const listSpeakerAfternoon2: Speaker[] = [
    {
      title: "Panel by Web3 Ventures",
      time: "13:30",
      description: "Speakers: Delegates from IDG, JDL, Chain Capital",
    },
    {
      title: "Keynote from Bitget Delegate",
      time: "14:30",
      description: "",
    },
    {
      title: "Gaming panel: Gaming's Contribution to Life and Economy",
      time: "15:00",
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
            <div className="flex tablet:group-hover:bg-white tablet:group-hover:text-black py-6 px-2 fullscreen:py-[64px]  text-[18px] fullscreen:text-[48px] font-neueMed">
              <div className=" w-full tablet:max-w-[100px] fullscreen:max-w-[941px] max-w-[116px] ">
                <p>{speaker.time}</p>
              </div>
              <p className="hidden tablet:flex tablet:flex-col tablet:w-[300px] desktop:w-[400px]">
                {speaker.title}
              </p>
              <p
                className="pl-5 w-full"
                dangerouslySetInnerHTML={{
                  __html: speaker.description.replaceAll("\n", "<br />"),
                }}
              />
            </div>
            {index !== listData.length - 1 && (
              <hr className="w-full h-[1px] border-[#333]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
