import { formatWithCommas } from "@/utils";

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

export default function HomeSection2() {
  const getSquareBGByIndex = (index: number) => {
    switch (index) {
      case 0:
      case 1:
      case 3:
      case 5:
      case 7:
        return "#000000";
      case 2:
      case 4:
      case 6:
        return "#ffffff";
      default:
        return "#28D2DC";
    }
  };

  return (
    <div className="w-full flex bg-[#000000] max-[768px]:flex-col">
      <div className="w-[50%] max-[768px]:w-full flex flex-col">
        <div className="w-full">
          VTIS
        </div>
      </div>
      <div className="w-[50%] max-[768px]:w-full">
        <div className="font-neueMed text-[28px] text-[white] pt-16 pb-24 pl-2 pr-52 flex flex-col max-[768px]:pr-10 max-[768px]:pl-10">
          Vietnam Tech Impact Expo (VNTIE) is an annual event that brings
          together leading innovators, experts, and enthusiasts in the field of
          digital asset and technology development. Hosted in Vietnam, VNTIE
          serves as a vibrant learning hub to foster collaboration, knowledge
          sharing, and networking in the aspect of shaping the future of
          technology.
        </div>
        <div className="w-full flex justify-end">
          <div className="w-[30%] aspect-square bg-[red] flex flex-wrap max-[768px]:w-[50%]">
            {Array(9)
              .fill("")
              .map((_, index) => (
                <div 
                  key={index}
                  style={{
                    backgroundColor: getSquareBGByIndex(index),
                  }}
                  className="w-[33.33%] aspect-square"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
