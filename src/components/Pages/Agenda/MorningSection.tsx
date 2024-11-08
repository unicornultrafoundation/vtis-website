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
      description: "",
    },
    {
      title: "Opening Performance",
      time: "9:15",
      description: "Opening speech by Mr. Nguyen Duy Hung - Chairman of SSI",
      image: Speaker1,
    },
    {
      title: "Keynote Speech on Event Theme - Tech Impact",
      time: "9:30",
      description: "Speaker: Mr. Truong Gia Binh - Chairman of FPT",
      image: Speaker2,
    },
    {
      title: "",
      time: "10 mins",
      description: "Break",
    },
    {
      title:
        "Talkshow on AI: Generative AI - Business Impact and Future Potential",
      time: "10:30",
      description:
        "Speakers:\n" +
        "- Vinesh - Qualcomm \n" +
        "- Lan Tran - Viettin Bank \n" +
        "- Gaurav - JP Morgan Chase \n" +
        "- Hung Bui (VinAI)\n" +
        "- Kavitha - AWS (online)\n" +
        "- Moderator: Ha Dao\n",
    },
    {
      title: "Panel Discussion on Legal Matters in the Crypto Industry",
      time: "11:15",
      description:
        "Moderator: Le Bao Nguyen - Deputy Director, SSI Digital\n" +
        " Speakers:\n" +
        "- Malcolm - OKX\n" +
        "- Jonathan Cheung - Bybit\n" +
        "- Legal team from Binance\n",
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const listSpeakerMorning2: Speaker[] = [
    {
      title: "Fintech Panel: The Future of Fintech in the Next 5 Years",
      time: "9:00",
      description: "Speakers: CEO DNSE, CEO Finhay, Zalo Pay CEO",
    },
    {
      title: "Keynote: The Effect of Technology on Education and the Future",
      time: "10:00",
      description: "Speaker: Mr. Hoang Nam Tien - FPT",
    },
    {
      title: "Panel by Web2 Ventures",
      time: "10:30",
      description:
        "Speakers: Delegates from SSIAM, Thinkzone, Vina Capital, Vin Ventures",
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
      <hr className="w-full h-[1px] block tablet:hidden border-[#333] mb-6 mt-5" />

      {/* Hovered Image - displayed only if hoveredImage is set */}
      {hoveredImageMorning && (
        <div className="hidden tablet:block absolute desktop:left-[400px] fullscreen:left-[650px] opacity-100 animate-fade-in">
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
            <div className="flex tablet:group-hover:bg-white tablet:group-hover:text-black py-6 px-2 fullscreen:py-[64px]  text-[18px] fullscreen:text-[48px] font-neueMed">
              <div className=" w-full tablet:max-w-[353px] fullscreen:max-w-[941px] max-w-[116px] ">
                <p>{speaker.time}</p>
                <p className="">{speaker.title}</p>
              </div>
              <p
                className="pl-5"
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
