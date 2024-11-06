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
        <div className="w-full h-full flex flex-col gap-6 tablet:flex-row justify-center tablet:justify-between items-start">
          {/* Logo */}
          <div className="flex flex-col gap-10">
            <Link
              href="/"
              className="w-full flex tablet:w-[300px] laptop:w-auto h-10"
            >
              <ImageBase.LandingLogo width={300} height={10} />
            </Link>
            {/* Menu */}
            <div className="hidden tablet:flex flex-col w-full tablet:w-auto justify-between gap-10  ">
              {/* Nav Menu */}
              <div className=" w-full tablet:flex gap-10">
                {navs.map((nav, index) => (
                  <div key={index}>
                    <Link
                      href={nav.href}
                      className="cursor-pointer"
                      onClick={() => setActiveTab(nav.href)}
                    >
                      <p
                        className={`font-neueMed text-base ${
                          activeTab === nav.href
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      >
                        {nav.label}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
              {/* Social */}
              <div className="flex gap-10">
                {social.map((nav, index) => (
                  <div key={index}>
                    <Link href={nav.href} className="cursor-pointer">
                      <p className="font-neueMed text-base text-gray-400">
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

          {/* Shaping */}
          <div className="tablet:w-[456px] w-[343px] flex flex-col gap-6 tablet:justify-end items-end tablet:text-center">
            <h2 className="font-neueMed text-[48px] tablet:text-6xl tablet:text-[64px] font-medium bg-gradient-to-r from-[#28D2DC] to-[#FFFFFF] bg-clip-text text-transparent tablet:text-end">
              Shaping the future, together
            </h2>
            <button className="font-neueMed w-full tablet:w-[162px] px-8 py-4 text-xl bg-[#28D2DC] text-black">
              Contact Us
            </button>
          </div>
          {/* Menu */}
          <div className="flex w-full tablet:hidden tablet:w-auto justify-between gap-20  ">
            {/* Nav Menu */}
            <div className="w-full flex flex-col gap-8">
              {navs.map((nav, index) => (
                <div key={index}>
                  <Link
                    href={nav.href}
                    className="cursor-pointer"
                    onClick={() => setActiveTab(nav.href)}
                  >
                    <p
                      className={`font-neueMed text-base ${
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
            <div className="flex flex-col gap-8 tablet:pl-10">
              {social.map((nav, index) => (
                <div key={index}>
                  <Link href={nav.href} className="cursor-pointer">
                    <p className="font-neueMed text-base text-gray-400">
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
        <div className="mb-5 pt-10 tablet:mb-0 tablet:pt-[140px] w-full h-full flex justify-center items-end">
          <p className="font-neueMed text-[32px] tablet:text-5xl opacity-50 w-[297px] tablet:w-[1200px] text-center">
            Asia Blockchain Summit brings together the companies and people
            shaping the blockchain industry.
          </p>
        </div>
      </div>
    </footer>
  );
}
