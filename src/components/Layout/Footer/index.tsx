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
    <footer className=" relative w-full p-4 tablet:p-12 bg-gradient-to-t from-[#28D2DC] to-black">
      <ImageBase.FooterImage className="hidden tablet:block absolute right-0 bottom-0" />
      <div className="w-full h-full flex flex-col tablet:justify-between">
        {/* Top */}
        <div className="w-full h-full flex flex-col gap-16 tablet:gap-20 justify-center tablet:justify-between items-start">
          {/* Shaping */}
          <div className="w-[343px] tablet:w-full fullscreen:w-[1274px] flex flex-col gap-6 fullscreen:gap-16 items-end tablet:items-center tablet:text-center">
            <h2 className="font-neueMed text-[48px] tablet:text-6xl tablet:text-[64px] fullscreen:text-[170px] fullscreen:leading-[192px] font-medium bg-gradient-to-r from-[#28D2DC] to-[#FFFFFF] bg-clip-text text-transparent tablet:text-end">
              Empowering Transformation—Fostering Innovation
            </h2>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdnx0Knyzusil9koJIXf_Ol0-Bdh91xKhbhjhVKbiD_uIGpuw/viewform"
              target="_blank"
              className="animated-text h-12 fullscreen:w-[410px] text-white fullscreen:h-[128px] flex justify-center items-center bg-[#ffffff26] px-6 py-4 font-neueMed fullscreen:text-[42px] text-center laptop:items-center hover:bg-white hover:text-black transition duration-500 fullscreen:px-16 fullscreen:py-8"
            >
              Partner with Us
            </Link>
          </div>
          {/* Menu */}
          <div className="flex w-full tablet:flex-col justify-between tablet:justify-center tablet:items-center gap-20 tablet:gap-6  ">
            {/* Nav Menu */}
            <div className="w-full flex flex-col tablet:flex-row tablet:justify-center gap-8 tablet:gap-10">
              {navs.map((nav, index) => (
                <div key={index}>
                  <Link
                    href={nav.href}
                    className="cursor-pointer"
                    onClick={() => setActiveTab(nav.href)}
                  >
                    <p
                      className={`font-neueMed text-base ${
                        activeTab === nav.href ? "text-white" : "opacity-50"
                      }`}
                    >
                      {nav.label}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
            {/* Social */}
            <div className="flex flex-col tablet:flex-row tablet:justify-center tablet:items-center gap-8 tablet:gap-10">
              {social.map((nav, index) => (
                <div key={index}>
                  <Link href={nav.href} className="cursor-pointer" target="_blank">
                    <p className="font-neueMed text-base opacity-50">
                      {nav.label}
                    </p>
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
        <div className="mb-5 fullscreen:mb-[127px] pt-10 tablet:mb-0 tablet:pt-[82px] fullscreen:pt-[407px] w-full h-full flex justify-center items-end">
          <p className="font-neueMed text-[32px] fullscreen:text-9xl tablet:text-5xl opacity-50 w-[297px] tablet:w-[1169px] fullscreen:w-[3117px] text-center">
            Vietnam Tech Impact Summit 2024 brings together visionary companies
            and professionals shaping the future of Vietnam technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
