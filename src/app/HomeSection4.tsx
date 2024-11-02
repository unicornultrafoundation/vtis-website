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
      className="w-[50%] aspect-[720/500] flex flex-col p-10 gap-5 pr-24"
    >
      <div className="w-full font-neueMed text-[40px]">{title}</div>
      <div className="w-full font-neueMed text-[24px]">{description}</div>
    </div>
  );
}

const getSquareBGByIndex = (index: number) => {
  switch (index) {
    case 0:
    case 1:
    case 3:
    case 5:
    case 7:
      return "#ffffff";
    case 4:
    case 6:
      return "#000000";
    default:
      return "#28D2DC";
  }
};

export default function HomeSection4() {
  return (
    <div className="w-full flex relative">
      <div className="font-neueMed text-[64px] px-14 leading-[64px] absolute">
        Vietnam Tech <br /> Impact Summit <br /> Spekers
      </div>
      <div className="w-[30%] aspect-square bg-[red] flex flex-wrap max-[768px]:w-[50%] absolute right-0">
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
      <div className="w-full bg-[yellow] z-[10]">
        <div className="grid grid-cols-6 gap-4">
          {Array(24).fill("").map((_, index) => (
            <div
              key={index}
              className="bg-[red] aspect-[1/1.4]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
