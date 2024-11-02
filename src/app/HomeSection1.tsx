import { formatWithCommas } from "@/utils";
import HomeBanner from "@/assets/images/home-banner.png";
import Image from "next/image";

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
      className="py-[16px] px-[24px] rounded-[90px] font-neueMed border-solid border-[1px] border-black uppercase text-[16px]"
    >
      {name}
    </div>
  );
}

function SectionStatItem({ title, amount }: { title: string; amount: number }) {
  return (
    <div className="w-[25%] max-[768px]:w-[50%] py-[40px] flex flex-col items-center justify-center">
      <div className="font-neueMed text-[56px]">{formatWithCommas(amount)}</div>
      <div className="font-neueMed text-[24px]">{title}</div>
    </div>
  );
}

export default function HomeSection1() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex px-8 items-end max-[768px]:flex-col max-[768px]:gap-8">
        <div className="w-[60%] h-full flex flex-col gap-4 pt-10 max-[768px]:w-full">
          <div className="w-full font-neueMed text-[20px]">
            3-4 DECEMBER, 2024 - NATIONAL CONVENTION CENTER, HANOI, VIETNAM{" "}
          </div>
          <div className="w-full font-medium font-neueMed text-[88px] leading-[88px]">
            Vietnam Tech
            <br />
            Impact Summit 2024
          </div>
        </div>
        <div className="flex-1 flex gap-3 justify-end px-5 max-[768px]:w-full max-[768px]:justify-start max-[768px]:px-0">
          <CategoryTag backgroundColor="#28D2DC" name="AI" />
          <CategoryTag backgroundColor="#7DC846" name="Blockchain" />
          <CategoryTag backgroundColor="#AA82FF" name="Fintech" />
          <CategoryTag backgroundColor="#fff" name="Game" />
        </div>
      </div>
      <div className="w-full aspect-[3] max-[768px]:aspect-square mt-8 relative">
        <Image
          src={HomeBanner.src}
          fill
          alt="home-banner"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="w-full flex flex-wrap">
        <SectionStatItem amount={15000} title="Attendees" />
        <SectionStatItem amount={500} title="Companies" />
        <SectionStatItem amount={350} title="Speakers" />
        <SectionStatItem amount={65} title="Countries" />
      </div>
    </div>
  );
}
