"use client";
import ImageBase from "@/components/Images/ImageBase";
import { navs } from "@/config/nav";
import Link from "next/link";
import { useState } from "react";
import SideBarMenu from "./SidebarMenu";

export default function Header() {
  //   const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("");
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  return (
    <>
      <header className="sticky top-0 mt-0 items-center justify-between w-full bg-[#000000] text-white z-50">
        <div className="w-full h-full p-2 tablet:p-1 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="pl-3 flex-1">
            <ImageBase.LandingLogo className="w-[117px] h-[21px] fullscreen:w-[355px] fullscreen:h-[56px]" />
          </Link>

          {/* Nav Menu */}
          <div className="hidden tablet:flex items-center gap-8">
            {navs.map((nav, index) => (
              <div key={index}>
                <Link
                  href={nav.href}
                  className="cursor-pointer font-neueMed text-sm text-[15px] fullscreen:text-4xl fullscreen:text-[40px]"
                  onClick={() => setActiveTab(nav.href)}
                >
                  <p
                    className={`hover:text-white transition-all ${
                      activeTab === nav.href ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {nav.label}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex flex-1 justify-end items-center gap-2 tablet:gap-1">
            <button className=" h-12 fullscreen:w-[410px] fullscreen:h-[128px] hidden laptop:flex bg-[#ffffff26] px-6 py-4 font-neueMed fullscreen:text-[42px] text-center laptop:items-center laptop:hover:bg-white laptop:hover:text-black transition duration-500 fullscreen:px-16 fullscreen:py-8">
              Partner with Us
            </button>
            <button className="relative group overflow-hidden bg-white hover:bg-[#2FD3DD] transition-all duration-500">
              <ImageBase.GetTicketImg
                fill-color="#000"
                className={`w-auto tablet:h-[48px] fullscreen:h-[128px]`}
              />
              <div className="absolute inset-y-0 left-4 tablet:left-5 text-black group-hover:-translate-y-[2.7rem] transition-all duration-500 ease-in-out flex flex-col items-center gap-5 top-3 tablet:top-3 fullscreen:top-8 fullscreen:text-[43px] font-neueMed fullscreen:group-hover:-translate-y-[6rem] fullscreen:left-12">
                <div>Get Ticket</div>
                <div>Get Ticket</div>
              </div>
            </button>
            {/* Menu Bar Mobile */}
            <div className="laptop:hidden z-50">
              {isOpenMobileMenu ? (
                <ImageBase.CloseIcon
                  className="size-8 z-20"
                  onClick={() => {
                    setIsOpenMobileMenu(false);
                  }}
                />
              ) : (
                <ImageBase.SidebarMenuIcon
                  className="z-20 size-8"
                  onClick={() => {
                    setIsOpenMobileMenu(true);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </header>
      <SideBarMenu isOpen={isOpenMobileMenu}  onClose={()=> setIsOpenMobileMenu(false)} />
    </>
  );
}
