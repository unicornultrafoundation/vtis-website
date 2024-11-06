import ImageBase from "@/components/Images/ImageBase";

// const getSquareBGByIndex = (index: number) => {
//   switch (index) {
//     case 0:
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//       return "#000000";
//     case 2:
//     case 4:
//     case 6:
//       return "#ffffff";
//     default:
//       return "#28D2DC";
//   }
// };

export default function HomeSection2() {
  return (
    <>
      <div className="relative w-full flex bg-[#000000] max-[768px]:flex-col pt-6 tablet:pt-14 tablet:pb-0 px-4 tablet:px-6 overflow-hidden ">
        <div className="w-[50%] max-[768px]:w-full max-[768px]:pb-8 flex flex-col items-start justify-start max-[768px]:px-0">
          <div className="px-1 fullscreen:px-[10px] text-[white] border-solid border border-[white] font-neueMed text-[20px] fullscreen:text-[53px] mb-[5px]">
            VTIS
          </div>
          <div className=" w-[249px] fullscreen:w-[943px] tablet:w-full text-[white] font-neueMed text-[28px] fullscreen:text-[74.6px] pb-4">
            Vietnam Tech Impact Summit
          </div>
          <div className="flex gap-2 tablet:gap-3">
            <button className=" h-12 fullscreen:w-[410px] text-white fullscreen:h-[128px] hidden laptop:flex bg-[#ffffff26] px-6 py-4 font-neueMed fullscreen:text-[42px] text-center laptop:items-center laptop:hover:bg-white laptop:hover:text-black transition duration-500 fullscreen:px-16 fullscreen:py-8">
              Partner with Us
            </button>
            <button className="relative group overflow-hidden bg-white hover:bg-[#2FD3DD] transition-all duration-500">
              <ImageBase.GetTicketImg
                fill-color="#000"
                className={`w-auto h-[48px] fullscreen:h-[128px]`}
              />
              <div className="absolute inset-y-0 left-4 tablet:left-5 text-black group-hover:-translate-y-[2.7rem] transition-all duration-500 ease-in-out flex flex-col items-center gap-5 top-2 tablet:top-3 fullscreen:top-8 fullscreen:text-[43px] font-neueMed fullscreen:group-hover:-translate-y-[6rem] fullscreen:left-12">
                <div>Get Ticket</div>
                <div>Get Ticket</div>
              </div>
            </button>
          </div>
        </div>
        <div className="w-[50%] max-[768px]:w-full fullscreen:w-[1504px]">
          <div className="fullscreen:max-w-full font-neueMed text-[28px] max-[768px]:text-[24px] fullscreen:text-[74.6px] fullscreen:leading-[96px] text-[white] pb-[156px] tablet:pb-[216px] pl-2 max-w-[564px] pr-10 max-[768px]:pl-0">
            <span className="text-[#28D2DC]">
              Vietnam Tech Impact Expo (VNTIE)
            </span>
            &nbsp; is an annual event that brings together leading innovators,
            experts, and enthusiasts in the field of digital asset and
            technology development. Hosted in Vietnam, VNTIE serves as a vibrant
            learning hub to foster collaboration, knowledge sharing, and
            networking in the aspect of shaping the future of technology.
          </div>
        </div>
        <div className="fullscreen:w-[586px] fullscreen:h-[583px] absolute right-0 bottom-[-10px] tablet:bottom-[-3px] bg-black tablet:w-[220px] tablet:h-[220px] ">
          <ImageBase.Section2Img className="w-full" />
        </div>
      </div>

      {/* <div className="w-full flex  justify-end">
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
      </div> */}
    </>
  );
}
