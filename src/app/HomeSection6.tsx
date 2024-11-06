import Image from "next/image";

type Partner = {
  name: string;
  logo: string;
};

const TierParners = ({
  tier,
  partners,
}: {
  tier?: string;
  partners: Partner[];
}) => {
  return (
    <div className="w-full flex flex-col">
      {tier && (
        <div className="w-full font-neueMed text-[32px] max-[768px]:text-[18px] fullscreen:text-[85px] text-[#fff] mt-8 fullscreen:mt-32 mb-4 fullscreen:mb-[42px]">
          {tier}
        </div>
      )}
      <div className="w-full flex flex-wrap">
        {partners.map((p, pIndex) => (
          <div
            key={pIndex}
            className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 aspect-video max-[768px]:aspect-[118/88] p-[2px] max-[768px]:p-[2px]"
          >
            <div className="bg-[rgba(255,255,255,0.05)] w-full h-full flex items-center justify-center">
              <div className="relative w-[50%] aspect-video max-[768px]:w-[65%]">
                <Image
                  src={`/images/${p.logo}`}
                  fill
                  alt="parner-logo"
                  // objectPosition="center"
                  // objectFit="contain"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HomeSection6 = () => {
  return (
    <div className="bg-[#000000] flex flex-col gap-8 px-12 max-[768px]:px-0 py-[80px] fullscreen:pt-[213px] fullscreen:pb-[407px] pb-50">
      {/* {partners} */}
      <div className="w-full flex flex-col px-5">
        <div className="w-full font-neueMed text-[48px] text-[#fff] mb-8 fullscreen:mb-[85px] max-[768px]:text-[24px] fullscreen:text-[128px]">
          Strategic partners
        </div>
        <div className="w-full flex flex-wrap gap-[5px] mb-20 fullscreen:mb-32">
          <TierParners
            partners={Array(4)
              .fill("")
              .map((_, i) => {
                return {
                  name: "Parner " + i,
                  logo: `stategic-partners/partner-${i}.png`,
                };
              })}
          />
        </div>
        <div className="w-full font-neueMed text-[48px] text-[#fff] mb-8 fullscreen:mb-[85px] max-[768px]:text-[24px] fullscreen:text-[128px]">
          Event partners
        </div>
        <div className="w-full flex flex-wrap gap-[5px] mb-20 fullscreen:mb-32">
          <TierParners
            partners={Array(5)
              .fill("")
              .map((_, i) => {
                return {
                  name: "Parner " + i,
                  logo: `event-partners/partner-${i}.png`,
                };
              })}
          />
        </div>
        <div className="w-full font-neueMed text-[48px] fullscreen:text-9xl text-[#fff] max-[768px]:text-[24px]">
          Key partners
        </div>
        <div className="w-full flex flex-col flex-wrap gap-10 mb-16 fullscreen:mb-[213px]">
          <TierParners
            tier="Title"
            partners={Array(3)
              .fill("")
              .map((_, i) => {
                return {
                  name: "Parner " + i,
                  logo: `title/partner-${i}.png`,
                };
              })}
          />
          <TierParners
            tier="Platinum"
            partners={Array(3)
              .fill("")
              .map((_, i) => {
                return {
                  name: "Parner " + i,
                  logo: `plat/partner-${i}.png`,
                };
              })}
          />
          <TierParners
            tier="Gold"
            partners={Array(4)
              .fill("")
              .map((_, i) => {
                return {
                  name: "Parner " + i,
                  logo: `gold/partner-${i}.png`,
                };
              })}
          />
          {/* <TierParners
            tier="Silver"
            partners={Array(5)
              .fill("")
              .map((_, i) => {
                return {
                  name: "Parner " + i,
                  logo: `silver/partner-${i}.png`,
                };
              })}
          /> */}
        </div>
        {/* <div className="w-full font-neueMed text-[48px] text-[#fff] mb-5 fullscreen:mb-[85px] max-[768px]:text-[24px] fullscreen:text-9xl">
          Government Partner
        </div> */}
        {/* <div className="w-full flex flex-wrap gap-[5px] mb-16">
          <TierParners
            partners={Array(5)
              .fill("")
              .map((_, i) => {
                return {
                  name: "Parner " + i,
                  logo: `gov/partner-${i}.png`,
                };
              })}
          />
        </div> */}
        {/* <div className="w-full font-neueMed text-[48px] text-[#fff] mb-5 max-[768px]:text-[24px]">
          Media
        </div>
        <div className="w-full flex flex-wrap gap-[5px] mb-16">
          <TierParners
            partners={Array(5)
              .fill("")
              .map((_, i) => {
                return {
                  name: "Parner " + i,
                  logo: "",
                };
              })}
          />
        </div>
        <div className="w-full font-neueMed text-[48px] text-[#fff] mb-5 max-[768px]:text-[24px]">
          Community Partners
        </div>
        <div className="w-full flex flex-wrap gap-[5px] mb-16">
          <TierParners
            partners={Array(5)
              .fill("")
              .map((_, i) => {
                return {
                  name: "Parner " + i,
                  logo: "",
                };
              })}
          />
        </div>
        <div className="w-full font-neueMed text-[48px] text-[#fff] mb-5 max-[768px]:text-[24px]">
          Participating Companies
        </div>
        <div className="w-full flex flex-wrap gap-[5px] mb-16">
          <TierParners
            partners={Array(25)
              .fill("")
              .map((_, i) => {
                return {
                  name: "Parner " + i,
                  logo: "",
                };
              })}
          />
        </div> */}
      </div>
    </div>
  );
};

export default HomeSection6;
