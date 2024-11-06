import ImageBase from "@/components/Images/ImageBase";

const HomeSection5 = () => {
  return (
    <>
      <div className="w-full h-full bg-black">
        <div className=" pt-8 pb-[99px] tablet:pb-0 tablet:pt-[11px] w-full tablet:h-[500px] fullscreen:h-[1336px] gap-16 tablet:gap-0 bg-black bg-[url('/images/section5/section5-bg.png')] bg-cover bg-center text-white flex flex-col tablet:flex-row tablet:justify-between items-center tablet:border-b tablet:border-[#333]">
          {/* Left / Top */}
          <div className=" w-full tablet:h-full  flex flex-col tablet:justify-center gap-6 tablet:gap-10 fullscreen:gap-[106px] tablet:border-r border-[#333]">
            <h4 className="font-neueBold text-3xl text-[32px] tablet:text-6xl tablet:text-[56px] fullscreen:text-[149px] text-center">
              Host
            </h4>
            <div className="flex w-full justify-center items-center gap-16">
              <ImageBase.SSIDLogo className="w-[107px] h-[56px] tablet:w-[138px] fullscreen:w-[368px] tablet:h-[72px] fullscreen:h-[192px]" />
              <ImageBase.FPTLogo className="w-[91px] h-[56px] tablet:w-[117px] fullscreen:w-[321px] tablet:h-[72px] fullscreen:h-[192px]" />
            </div>
          </div>
          {/* Right / Bottom*/}
          <div className=" w-full tablet:h-full flex flex-col tablet:justify-center gap-6 fullscreen:gap-[106px] tablet:gap-10">
            <h4 className="font-neueBold text-3xl text-[32px tablet:text-6xl tablet:text-[56px] fullscreen:text-[149px] text-center">
              Organizer
            </h4>
            <div className="flex w-full justify-center items-center gap-16">
              <ImageBase.SSIDLogo className="w-[107px] h-[56px] tablet:w-[138px] fullscreen:w-[368px] tablet:h-[72px] fullscreen:h-[192px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] flex flex-col gap-[62px] tablet:gap-[72px] fullscreen:gap-[213px] px-4 tablet:px-8 py-[64px] tablet:py-[72px] fullscreen:py-[192px] tablet:border-b tablet:border-[#333]">
        {/* Header */}
        <div className="w-full flex flex-col justify-center items-center gap-6 fullscreen:gap-16">
          <ImageBase.SSIDLogo className="w-[92px] h-12 fullscreen:w-[245px] fullscreen:h-[128px]" />
          <p className="laptop:w-[1061px] fullscreen:w-[2829px] text-[32px] tablet:text-5xl fullscreen:text-9xl text-white text-center font-neueMed ">
            Founded in 2022, <span className="text-red-600 pr-2">SSID</span>
            specializes in researching and developing technological initiatives
            and applications in the fields of finance, stocks, and corporate
            digital transformation
          </p>
        </div>
        {/* Body */}
        <div className="w-full flex flex-col gap-8">
          {/* 01 */}
          <div className="w-full flex gap-3 tablet:gap-0 flex-wrap tablet:flex-nowrap justify-between pt-6 pb-[72px] fullscreen:pb-[192px] border-t border-[#333333]">
            <p className="text-white text-base fullscreen:text-[42px] font-neueMed">
              01
            </p>
            <p className="font-neueMed px-1 fullscreen:px-[10px] fullscreen:text-5xl fullscreen:text-[53px] border h-[28px] fullscreen:h-[75px] text-white text-xl flex items-center">
              Vision
            </p>
            <p className="w-[480px] fullscreen:w-[1280px] fullscreen:text-[53.33px] fullscreen:leading-[74.67px] font-neueMed text-white text-xl font-medium">
              SSI Digital is oriented to become a business with great influence,
              playing an important role in developing the digital economy,
              researching and developing leading science and technology in
              Vietnam and nearby regions.
            </p>
          </div>
          {/* 02 */}
          <div className="w-full flex gap-3 tablet:gap-0 flex-wrap tablet:flex-nowrap justify-between pt-6 pb-[72px] fullscreen:pb-[190px] border-y border-[#333333]">
            <p className="text-white text-base fullscreen:text-[42px] font-neueMed">
              02
            </p>
            <p className="font-neueMed px-1 fullscreen:px-[10px] fullscreen:text-5xl fullscreen:text-[53px] border h-[28px] fullscreen:h-[75px] text-white text-xl flex items-center">
              Mission
            </p>
            <p className="w-[480px] fullscreen:w-[1280px] fullscreen:text-[53.33px] fullscreen:leading-[74.67px] font-neueMed text-white text-xl font-medium">
              SSID is innovating to provide top-tier technological solutions,
              connecting businesses and customers, changing the market&apos;s
              future, and assisting Vietnamese organizations in their worldwide
              digital transformation.
            </p>
          </div>
        </div>
        {/* Footer */}
        <div className="w-full flex flex-col gap-6 fullscreen:gap-16 justify-center items-center">
          <ImageBase.FPTLogo
            width={87}
            className="w-[87px] fullscreen:w-[207px]"
          />
          <p className="laptop:w-[1061px] fullscreen:w-[2829px] text-white text-3xl tablet:text-5xl fullscreen:text-9xl font-neueMed text-center">
            <span className="text-[#51B748]">FPT</span>—Vietnam&apos;s largest
            IT services group and the worldwide&apos;s 7th largest group in tech
            sector by Fortune’s SEA 500
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeSection5;
