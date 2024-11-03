import TicketImage from "@/assets/images/get-ticket-img.png";
import Image from "next/image";

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

export default function HomeSection2() {
  return (
    <div className="w-full flex bg-[#000000] max-[768px]:flex-col pt-16">
      <div className="w-[50%] max-[768px]:w-full max-[768px]:pb-10 flex flex-col items-start justify-start px-14 gap-2 max-[768px]:px-10">
        <div className="px-1 py-1 text-[white] border-solid border-[2px] border-[white] font-neueMed text-[20px]">
          VTIS
        </div>
        <div className="px-1 py-1 text-[white] font-neueMed text-[28px]">
          Vietnam Tech Impact Summit
        </div>
        <div className="flex gap-3 mt-1">
          <button className="bg-gray-800 p-5 text-white h-[48px] max-[768px]:w-[50%] flex items-center justify-center font-neueMed text-[16px] text-ellipsis overflow-hidden">
            Partner with Us
          </button>
          <button className="relative w-[157px] h-[48px] max-[768px]:w-[50%] min-w-[157px]">
            <Image src={TicketImage.src} fill className="object-cover object-center" alt='ticket-image'/>
          </button>
        </div>
      </div>
      <div className="w-[50%] max-[768px]:w-full">
        <div className="font-neueMed text-[28px] max-[768px]:text-[24px] text-[white] pb-24 pl-2 max-w-[650px] pr-10 max-[768px]:pl-10">
          <span className="text-[#28D2DC]">
            Vietnam Tech Impact Expo (VNTIE)
          </span>
          &nbsp; is an annual event that brings together leading innovators,
          experts, and enthusiasts in the field of digital asset and technology
          development. Hosted in Vietnam, VNTIE serves as a vibrant learning hub
          to foster collaboration, knowledge sharing, and networking in the
          aspect of shaping the future of technology.
        </div>
        <div className="w-full flex justify-end">
          <div className="w-[30%] aspect-square flex flex-wrap max-[768px]:w-[50%]">
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
