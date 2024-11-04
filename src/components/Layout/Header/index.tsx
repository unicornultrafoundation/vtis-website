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
          <Link href="/" className="pl-3">
            <ImageBase.LandingLogo
              width={135}
              height={21}
              className="object-cover object-center"
            />
          </Link>

          {/* Nav Menu */}
          <div className="hidden tablet:flex gap-8">
            {navs.map((nav, index) => (
              <div key={index}>
                <Link
                  href={nav.href}
                  className="cursor-pointer"
                  onClick={() => setActiveTab(nav.href)}
                >
                  <p
                    className={`${
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
          <div className="flex items-center gap-2 tablet:gap-1">
            <button className=" hidden laptop:inline-block bg-gray-800 px-6 py-4">
              Partner with Us
            </button>
            <button className="">
              <ImageBase.GetTicketImg className="w-[160px] h-[56px]" />
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
      <SideBarMenu isOpen={isOpenMobileMenu} />
    </>
  );
}
