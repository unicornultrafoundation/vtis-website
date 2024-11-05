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
        <div className="w-full font-neueMed text-[32px] max-[768px]:text-[18px] text-[#fff] mt-12 mb-4">
          {tier}
        </div>
      )}
      <div className="w-full flex flex-wrap">
        {partners.map((p, pIndex) => (
          <div
            key={pIndex}
            className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 aspect-video max-[768px]:aspect-[118/88] p-[5px] max-[768px]:p-[2px]"
          >
            <div className="bg-[rgba(255,255,255,0.05)] w-full h-full flex items-center justify-center">
              <div className="relative w-[50%] aspect-video max-[768px]:w-[65%]">
                <Image
                  src={`/images/${p.logo}`}
                  fill
                  alt="parner-logo"
                  objectPosition="center"
                  objectFit="contain"
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
    <div className="bg-[#000000] flex flex-col gap-8 px-12 max-[768px]:px-0 py-[80px] pb-50">
      {/* {partners} */}
      <div className="w-full flex flex-col px-5">
        <div className="w-full font-neueMed text-[48px] text-[#fff] mb-8 max-[768px]:text-[24px]">
          Strategic partners
        </div>
        <div className="w-full flex flex-wrap gap-[5px] mb-20">
          <TierParners
            partners={Array(5)
              .fill("")
              .map((_, i) => {
                return {
                  name: "Parner " + i,
                  logo: `stategic-partners/partner-${i}.png`,
                };
              })}
          />
        </div>
        <div className="w-full font-neueMed text-[48px] text-[#fff] max-[768px]:text-[24px]">
          Key partners
        </div>
        <div className="w-full flex flex-col flex-wrap gap-10 mb-16">
          <TierParners
            tier="Title"
            partners={Array(5)
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
            partners={Array(5)
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
            partners={Array(5)
              .fill("")
              .map((_, i) => {
                return {
                  name: "Parner " + i,
                  logo: `gold/partner-${i}.png`,
                };
              })}
          />
          <TierParners
            tier="Silver"
            partners={Array(5)
              .fill("")
              .map((_, i) => {
                return {
                  name: "Parner " + i,
                  logo: `silver/partner-${i}.png`,
                };
              })}
          />
        </div>
        <div className="w-full font-neueMed text-[48px] text-[#fff] mb-5 max-[768px]:text-[24px]">
          Government Partner
        </div>
        <div className="w-full flex flex-wrap gap-[5px] mb-16">
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
        </div>
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
