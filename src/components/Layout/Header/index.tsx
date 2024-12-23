"use client";
import ImageBase from "@/components/Images/ImageBase";
import { navs } from "@/config/nav";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import SideBarMenu from "./SidebarMenu";

export default function Header() {
  //   const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<string>("/");
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const handleScrollOrNavigate = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      router.push("/");
      setActiveTab(href);
    } else if (href.startsWith("#")) {
      const element = document.querySelector(href) as HTMLElement | null;
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveTab(href);
      }
    } else {
      // Điều hướng sang trang khác
      setActiveTab(href);
      router.push(href);
    }
  };

  return (
    <>
      <header className="sticky top-0 mt-0 items-center justify-between w-full bg-[#000000] text-white z-50 scroll-smooth ">
        <div className="w-full h-full p-2 tablet:p-1 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="pl-3 flex-1">
            <ImageBase.LandingLogo className="w-[117px] h-[21px] fullscreen:w-[355px] fullscreen:h-[56px]" />
          </Link>

          {/* Nav Menu */}
          <div className="hidden tablet:flex items-center gap-8">
            {navs.map((nav, index) => (
              <div key={index}>
                <button
                  className="cursor-pointer font-neueMed text-sm text-[15px] fullscreen:text-4xl fullscreen:text-[40px] scroll-smooth"
                  onClick={(e) => {
                    if (pathName !== "/" && nav.href.startsWith("#")) {
                      router.push("/" + nav.href);
                      return;
                    }
                    e.preventDefault();
                    window.history.replaceState({}, "", "/" + nav.href !== "/" ? nav.href : "" );
                    handleScrollOrNavigate(nav.href);
                  }}
                >
                  <p
                    className={`hover:text-white transition-all ${
                      activeTab === nav.href ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {nav.label}
                  </p>
                </button>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex flex-1 justify-end items-center gap-2 tablet:gap-1">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdnx0Knyzusil9koJIXf_Ol0-Bdh91xKhbhjhVKbiD_uIGpuw/viewform"
              target="_blank"
              className="h-12 fullscreen:w-[410px] fullscreen:h-[128px] hidden laptop:flex bg-[#ffffff26] px-6 py-4 font-neueMed fullscreen:text-[42px] text-center laptop:items-center laptop:hover:bg-white laptop:hover:text-black transition duration-500 fullscreen:px-16 fullscreen:py-8"
            >
              Partner with Us
            </Link>
            <Link
              href="https://lu.ma/lf6fuot2"
              target="_blank"
              className="relative group overflow-hidden bg-white hover:bg-[#2FD3DD] transition-all duration-500"
            >
              <ImageBase.GetTicketImg
                fill-color="#000"
                className={`w-auto tablet:h-[48px] fullscreen:h-[128px]`}
              />
              <div className="absolute inset-y-0 left-4 tablet:left-5 text-black group-hover:-translate-y-[2.7rem] transition-all duration-500 ease-in-out flex flex-col items-center gap-5 top-3 tablet:top-3 fullscreen:top-8 fullscreen:text-[43px] font-neueMed fullscreen:group-hover:-translate-y-[6rem] fullscreen:left-12">
                <div>Get Ticket</div>
                <div>Get Ticket</div>
              </div>
            </Link>
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
      <SideBarMenu
        isOpen={isOpenMobileMenu}
        onClose={() => setIsOpenMobileMenu(false)}
      />
    </>
  );
}
