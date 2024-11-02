import ImageBase from "@/components/Images/ImageBase";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000000] w-full items-center justify-between h-[540px] text-black mb-[80px]">
      <Link href="/">
        <ImageBase.LandingLogo />
      </Link>
    </footer>
  );
}
