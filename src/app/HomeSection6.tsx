import PartnerSampleLogo from "@/assets/images/parner-sample-logo.png";
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
        <div className="w-full font-neueMed text-[32px] max-[768px]:text-[18px] text-[#fff] mt-10 mb-5">
          {tier}
        </div>
      )}
      <div className="w-full flex flex-wrap">
        {partners.map((_, pIndex) => (
          <div
            key={pIndex}
            className="w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 aspect-video max-[768px]:aspect-[118/88] p-[5px] max-[768px]:p-[2px]"
          >
            <div className="bg-[rgba(255,255,255,0.05)] w-full h-full flex items-center justify-center">
            <div className="relative w-[50%] aspect-video max-[768px]:w-[65%]">
              <Image
                src={PartnerSampleLogo.src}
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
    <div className="bg-[#000000] flex flex-col gap-8 px-12 max-[768px]:px-0 py-[72px] pb-96">
      {/* {partners} */}
      <div className="w-full flex flex-col px-5">
        <div className="w-full font-neueMed text-[48px] text-[#fff] mb-5 max-[768px]:text-[24px]">
          Strategic partners
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
                  logo: "",
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
                  logo: "",
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
                  logo: "",
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
                  logo: "",
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
                  logo: "",
                };
              })}
          />
        </div>
        <div className="w-full font-neueMed text-[48px] text-[#fff] mb-5 max-[768px]:text-[24px]">
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
        </div>
      </div>
    </div>
  );
};

export default HomeSection6;
