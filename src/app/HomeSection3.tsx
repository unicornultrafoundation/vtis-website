function Block({
  title,
  description,
  backgroundColor,
}: {
  title: string;
  description: string;
  backgroundColor: string;
}) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
      }}
      className="w-[50%] aspect-[720/500] flex flex-col p-10 gap-5 pr-24 max-[600px]:w-full"
    >
      <div className="w-full font-neueMed text-[40px]">{title}</div>
      <div className="w-full font-neueMed text-[24px]">{description}</div>
    </div>
  );
}

export default function HomeSection3() {
  return (
    <div className="w-full flex flex-row flex-wrap">
      <Block
        title="AI"
        description="Discover AI’s transformative power across gaming, blockchain, and beyond. Delving into AI’s potential in evolving business & daily life, offering valuable insights for both enthusiasts and newcomers into its limitless future."
        backgroundColor="#28D2DC"
      />
      <Block
        title="Fintech"
        description="Explore how tech advancements are driving disruption and fueling fintech growth. Gain insights into their impact on financial services, new business models, and regulations."
        backgroundColor="#fff"
      />
      <Block
        title="Blockchain"
        description="Uncover how blockchain is revolutionizing industries of finance, supply chain, gaming and decentralized applications. Learn from experts to unveil the boundless possibilities of blockchain technology"
        backgroundColor="#fff"
      />
      <Block
        title="Game"
        description="Uncover how blockchain is revolutionizing industries of finance, supply chain, gaming and decentralized applications. Learn from experts to unveil the boundless possibilities of blockchain technology"
        backgroundColor="#28D2DC"
      />
    </div>
  );
}
