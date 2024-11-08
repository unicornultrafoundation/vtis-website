"use client";

// import HomeBanner from "@/assets/images/home-banner.png";
import { formatWithCommas } from "@/utils";
import Image from "next/image";
import { useCountUp } from "use-count-up";

function CategoryTag({
  name,
  backgroundColor,
}: {
  name: string;
  backgroundColor: string;
}) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
      className="py-3 tablet:py-4 fullscreen:py-[42.67px] px-[24px] fullscreen:px-16 rounded-[90px] font-neueMed border-solid border-[1px] border-black uppercase text-[16px] fullscreen:text-[42.6px]"
    >
      {name}
    </div>
  );
}

function SectionStatItem({
  title,
  amount,
  plus,
}: {
  title: string;
  amount: number;
  plus?: string;
}) {
  const { value } = useCountUp({
    isCounting: true,
    end: amount,
    duration: 5,
  });
  return (
    <div className="w-[25%] max-[768px]:w-[50%] py-6 tablet:py-10 flex flex-col items-center justify-center max-[768px]:items-start px-4">
      <div className="font-neueMed text-[56px] tracking-[-2.56px] max-[768px]:text-[40px] fullscreen:text-[149px]">
        {formatWithCommas(Number(value?.toString()))} {plus}
      </div>
      <div className="font-neueMed text-[24px] max-[768px]:text-[20px] fullscreen:text-6xl fullscreen:text-[64px]">
        {title}
      </div>
    </div>
  );
}

export default function HomeSection1() {
  const dateText =
    "3-4 DECEMBER, 2024 - NATIONAL CONVENTION CENTER, HANOI, VIETNAM";
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex px-4 py-6 tablet:py-5 items-end max-[768px]:flex-col max-[768px]:gap-4">
        <div
          className={`w-[60%] h-full flex flex-col gap-2 max-[768px]:w-full transition-all duration-500`}
        >
          <div className="w-full min-h-[24px] tablet:min-h-[30px] font-neueMed text-[20px] max-[768px]:text-[16px] fullscreen:text-[53px] fullscreen:text-nowrap">
            {dateText.split("").map((char, i) => (
              <span
                key={i}
                className={`inline-block opacity-0 animate-[fade-in-up-blur_0.5s_ease_forwards]`}
                style={{
                  animationDelay: `${i * 0.02}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <div className="w-full h-full min-h-[80px] tablet:min-h-[176px] font-medium font-neueMed text-[88px] max-[768px]:text-[40px] fullscreen:text-[234px] fullscreen:leading-[234px] max-[768px]:leading-[40px] leading-[88px]">
            {/* {title1.split('').map((char, i) => (
              <span
                key={i}
                className="inline-block opacity-0 animate-[fade-in-up-blur_0.5s_ease_forwards]"
                style={{ animationDelay: `${1.5 + i * 0.1}s` }}
              >
                {char === " " ? '\u00A0' : char}
              </span>
            ))}
            <br /> */}
            {/* {title2.split('').map((char, i) => (
              <span
                key={i}
                className="inline-block opacity-0  animate-[fade-in-up-blur_0.5s_ease_forwards]"
                style={{ animationDelay: `${3 + i * 0.1}s` }}
              >
                {char === " " ? '\u00A0' : char}
              </span>
            ))} */}
            <Image
              src="/images/title.png"
              width={479}
              height={262}
              className="inline-block opacity-0 animate-[fade-in-up-blur_0.5s_ease_forwards]"
              alt="title"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-wrap gap-1 tablet:gap-2 fullscreen:gap-[21px] justify-end px-5 max-[768px]:w-full max-[768px]:justify-start max-[768px]:px-0">
          <CategoryTag backgroundColor="#28D2DC" name="AI" />
          <CategoryTag backgroundColor="#7DC846" name="Blockchain" />
          <CategoryTag backgroundColor="#AA82FF" name="Fintech" />
          <CategoryTag backgroundColor="#fff" name="Game" />
        </div>
      </div>
      <div className="w-full aspect-[3] max-[768px]:aspect-[375/240] relative">
        <video
          src={"/video/trailer.mp4"}
          controls
          width={"100%"}
          autoPlay={true}
          muted
          loop
        />
      </div>
      <div className="w-full flex flex-wrap">
        <SectionStatItem amount={20000} title="Attendees" />
        <SectionStatItem plus="+" amount={100} title="Speakers" />
        <SectionStatItem plus="+" amount={50} title="Side events" />
        <SectionStatItem plus="+" amount={500} title="Companies" />
      </div>
    </div>
  );
}
