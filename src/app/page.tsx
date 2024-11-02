import Image from "next/image";
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";

export default function Home() {
  return (
    <div className="min-h-screen h-[10000px] bg-[white] text-black top-14">
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
    </div>
  );
}
