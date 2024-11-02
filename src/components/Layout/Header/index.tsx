"use client";
import ImageBase from "@/components/Images/ImageBase";
import { navs } from "@/config/nav";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  //   const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("");
  return (
    <header className="sticky top-0 mt-0 items-center justify-between w-full h-14 bg-[#000000] text-white z-50">
      <div className="w-full h-full p-1 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="pl-5">
          <ImageBase.LandingLogo width={135} height={21} />
        </Link>

        {/* Nav Menu */}
        <div className="flex gap-6">
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
        <div className="flex gap-1">
          <button className="bg-gray-800 p-4">Partner with Us</button>
          <button>
            <ImageBase.GetTicketImg />
          </button>
        </div>
      </div>
    </header>
  );
}
