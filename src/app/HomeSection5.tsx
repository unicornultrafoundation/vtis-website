import ImageBase from "@/components/Images/ImageBase";

const HomeSection5 = () => {
  return (
    <div className="bg-[#000000] flex flex-col gap-8 px-8 py-[72px]">
      {/* Header */}
      <div className="w-full flex flex-col justify-center items-center">
        <ImageBase.SSIDLogo />
        <p className="bg-white px-4 py-1 text-2xl tablet:text-[40px] mb-6">
          Host & Organizer
        </p>
        <p className="laptop:w-[1061px] text-[32px] tablet:text-5xl text-white text-center ">
          Founded in 2022, <span className="text-red-600 pr-2">SSID</span>
          specializes in researching and developing technological initiatives
          and applications in the fields of finance, stocks, and corporate
          digital transformation
        </p>
      </div>
      {/* Body */}
      <div className="w-full flex flex-col gap-8">
        {/* 01 */}
        <div className="w-full flex gap-3 tablet:gap-0 flex-wrap tablet:flex-nowrap justify-between items-center pt-4 border-t border-[#333333]">
          <p className="text-white text-base">01</p>
          <p className="p-1 border text-white text-xl">Vision</p>
          <p className="w-[480px] text-white text-xl font-medium">
            SSI Digital is oriented to become a business with great influence,
            playing an important role in developing the digital economy,
            researching and developing leading science and technology in Vietnam
            and nearby regions.
          </p>
        </div>
        {/* 02 */}
        <div className="w-full flex gap-3 tablet:gap-0 flex-wrap tablet:flex-nowrap justify-between items-center pt-4 pb-12 border-y border-[#333333]">
          <p className="text-white text-base">02</p>
          <p className="p-1 border text-white text-xl">Mission</p>
          <p className="w-[480px] text-white text-xl font-medium">
            SSID is innovating to provide top-tier technological solutions,
            connecting businesses and customers, changing the market&apos;s
            future, and assisting Vietnamese organizations in their worldwide
            digital transformation.
          </p>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full mt-12 flex flex-col gap-6 justify-center items-center">
        <ImageBase.FPTLogo width={80} />
        <p className="bg-white px-4 py-1 text-3xl">Host</p>
        <p className="laptop:w-[1061px] text-white text-3xl tablet:text-5xl text-center">
          <span className="text-[#51B748]">FPT</span>—Vietnam&apos;s largest IT
          services group and the worldwide&apos;s 7th largest group in tech
          sector by Fortune’s SEA 500
        </p>
      </div>
    </div>
  );
};

export default HomeSection5;
