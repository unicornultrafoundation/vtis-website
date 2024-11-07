import ssiLogo from "@/assets/images/SSI.png";
import ImageBase from "@/components/Images/ImageBase";
import Image from "next/image";

const HomeSection5 = () => {
  return (
    <div className=" pt-8 pb-[99px] tablet:pb-0 tablet:pt-[11px] w-full tablet:h-[549px] fullscreen:h-[1336px] gap-12 tablet:gap-16 bg-black bg-[url('/images/section5/section5-bg.png')] bg-cover bg-center text-white flex flex-col tablet:justify-between items-center">
      <div className="flex flex-col tablet:flex-row w-full h-full gap-20 tablet:gap-0">
        {/* Left / Top */}
        <div className=" w-full tablet:h-full flex flex-col tablet:justify-end gap-6 tablet:gap-10 fullscreen:gap-[106px] tablet:border-r border-[#262626]">
          <h4 className="animated-text font-neueBold text-3xl text-[32px] tablet:text-6xl tablet:text-[56px] fullscreen:text-[149px] text-center">
            Hosts
          </h4>
          <div className="animated-text animated-text-delay-0.25s flex w-full justify-center items-center gap-16">
            <Image src={ssiLogo.src} alt="ssi-logo" width={111} height={72} />
            <ImageBase.FPTLogo className="w-[117px] h-[72px]" />
          </div>
        </div>
        {/* Right / Bottom*/}
        <div className=" w-full tablet:h-full flex flex-col tablet:justify-end gap-6 fullscreen:gap-[106px] tablet:gap-16">
          <h4 className="animated-text animated-text-delay-0.5s font-neueBold text-3xl text-[32px tablet:text-6xl tablet:text-[56px] fullscreen:text-[149px] text-center">
            Organizer
          </h4>
          <div className="animated-text animated-text-delay-0.75s flex w-full justify-center items-center gap-16 ">
            <ImageBase.SSIDLogo className="w-[92px] h-[48px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center text-center w-full font-neueMed text-3xl text-[32px] leading-10 text-white opacity-50 pb-[30px]">
        <p className="w-[376px] tablet:w-[784px]">
          VTIS 2024 is hosted by giants in technology, traditional finance and
          decentralized finance, setting the stage for unparalleled potentials.
        </p>
      </div>
    </div>
  );
};

export default HomeSection5;
