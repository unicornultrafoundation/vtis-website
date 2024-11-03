"use client";
import ImageBase from "@/components/Images/ImageBase";
import { navs } from "@/config/nav";
import { social } from "@/config/social";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Footer() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(pathname);
  return (
    <footer className=" relative w-full p-8 tablet:mb-[80px] bg-gradient-to-t from-[#28D2DC] to-black">
      <ImageBase.FooterImage className="absolute right-0 bottom-0" />
      <div className="w-full h-full flex flex-col justify-between">
        {/* Top */}
        <div className="w-full h-full flex flex-col gap-6 tablet:flex-row justify-center tablet:justify-between items-start">
          <Link
            href="/"
            className="w-full flex justify-center tablet:w-[300px] laptop:w-auto h-10"
          >
            <ImageBase.LandingLogo width={300} height={10} />
          </Link>
          <div className="tablet:w-[456px] flex flex-col gap-4 justify-center items-center text-center">
            <h2 className="text-[40px] tablet:text-[64px] font-medium bg-gradient-to-r from-[#28D2DC] to-[#FFFFFF] bg-clip-text text-transparent">
              Shaping the future, together
            </h2>
            <button className=" px-8 py-4 text-xl bg-[#28D2DC] text-black">
              Contact Us
            </button>
          </div>
          <div className="flex w-full tablet:w-auto justify-between tablet:gap-10  ">
            {/* Nav Menu */}
            <div className="w-full flex flex-col gap-6">
              {navs.map((nav, index) => (
                <div key={index}>
                  <Link
                    href={nav.href}
                    className="cursor-pointer"
                    onClick={() => setActiveTab(nav.href)}
                  >
                    <p
                      className={`text-base ${
                        activeTab === nav.href ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {nav.label}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
            {/* Social */}
            <div className="flex flex-col gap-6 tablet:pl-10">
              {social.map((nav, index) => (
                <div key={index}>
                  <Link href={nav.href} className="cursor-pointer">
                    <p className="text-base text-gray-400">{nav.label}</p>
                  </Link>
                </div>
              ))}
            </div>
            <button
              className="tablet:hidden w-full flex justify-end"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ImageBase.ArrowUpIcon width={40} height={40} />
            </button>
          </div>
        </div>
        {/* Bottom */}
        <div className="mb-6 py-10 tablet:py-[100px] w-full h-full flex justify-center items-end">
          <p className="text-2xl tablet:text-5xl text-gray-300  tablet:w-[1200px] text-center">
            Asia Blockchain Summit brings together the companies and people
            shaping the blockchain industry.
          </p>
        </div>
      </div>
    </footer>
  );
}
