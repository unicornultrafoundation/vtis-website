"use client";

import ImageBase from "@/components/Images/ImageBase";
import useIsMobile from "@/hooks/useIsMobile";

function Block({
  title,
  description,
  backgroundColor,
  img,
}: {
  title: string;
  description: string;
  backgroundColor: string;
  img: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
      className="w-full tablet:w-[50%] tablet:h-[740px] fullscreen:h-[1610px] flex flex-col px-4 tablet:pl-10 tablet:py-10 max-[768px]:py-6 gap-5 fullscreen:gap-[42px] tablet:pr-24 justify-between "
    >
      <div className="animated-text w-full tablet:max-w-[600px] fullscreen:max-w-full font-neueMed text-[40px] max-[768px]:text-[32px] fullscreen:text-[106px]">
        {title}
        <div className="animated-text animated-text-delay-0.5s w-full font-neueMed text-[24px] max-[768px]:text-[20px] fullscreen:text-[64px] mt-4">
          {description}
        </div>
      </div>
      <div className="h-full flex items-end">{img}</div>
    </div>
  );
}

export default function HomeSection3() {
  const isMobile = useIsMobile(768);

  return (
    <div className="w-full flex flex-row flex-wrap">
      <Block
        title="AI"
        description="Discover AI’s transformative power across gaming, blockchain, and beyond. Delving into AI’s potential in evolving business & daily life, offering valuable insights for both enthusiasts and newcomers into its limitless future."
        backgroundColor="#28D2DC"
        img={
          <ImageBase.AIImg className="fullscreen:w-[533px] fullscreen:h-[518px]" />
        }
      />
      <Block
        title="Fintech"
        description="Explore how tech advancements are driving disruption and fueling fintech growth. Gain insights into their impact on financial services, new business models, and regulations."
        backgroundColor="#fff"
        img={
          <ImageBase.FintechImg className="fullscreen:w-[533px] fullscreen:h-[518px]" />
        }
      />
      <Block
        title="Blockchain"
        description="Uncover how blockchain is revolutionizing industries of finance, supply chain, gaming and decentralized applications. Learn from experts to unveil the boundless possibilities of blockchain technology"
        backgroundColor={isMobile ? "#28D2DC" : "#fff"}
        img={
          <ImageBase.BlockchainImg className="fullscreen:w-[533px] fullscreen:h-[518px]" />
        }
      />
      <Block
        title="Game"
        description="Uncover how blockchain is revolutionizing industries of finance, supply chain, gaming and decentralized applications. Learn from experts to unveil the boundless possibilities of blockchain technology"
        backgroundColor={isMobile ? "#fff" : "#28D2DC"}
        img={
          <ImageBase.GameImg className="fullscreen:w-[533px] fullscreen:h-[518px]" />
        }
      />
    </div>
  );
}
