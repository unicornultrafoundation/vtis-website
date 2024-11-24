"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  Agenda,
  listAgendaAI,
  listAgendaAI2,
  listAgendaGeneral,
  listAgendaGeneral2, listDePIN, listDePIN2,
} from "@/config/DummyData";
import ImageBase from "@/components/Images/ImageBase";
import { useRouter, useSearchParams } from "next/navigation";


export default function AgendaPage() {
  const searchParams = useSearchParams();
  const router = useRouter();


  const [activeTab, setActiveTab] = useState("day1");
  const [day1, setDay1] = useState<Agenda[]>([]);
  const [day2, setDay2] = useState<Agenda[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterCategory, setFilterCategory] = useState(
      searchParams.get("filter") || "mainStage"
  );
  const classTabActive = useCallback(
      (tabActive: string) => {
        if (activeTab === tabActive) {
          return " text-[#FFFFFF] border-b border-b-[#FFFFFF] tablet:border  tablet:bg-[#FFF] tablet:text-[#000]";
        }
        return "text-gray-500";
      },
      [activeTab]
  );

  const classFilter = useCallback(
      (filter: string) => {
        if (filterCategory === filter) {
          return " text-[#000] bg-[#FFF] ";
        }
        return "text-[#FFF] border border-[#FFF]";
      },
      [filterCategory]
  );

  const handleScroll = (href: string) => {
    const element = document.getElementById(href) as HTMLElement | null;
    if (element) {
      window.scrollTo({ behavior: "smooth", top: element.offsetTop });
    }
    setActiveTab(href);
  };

  const handleScrollTop = (category: string) => {
    setFilterCategory(category);
    setActiveTab("day1");
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("filter", category);
    router.push(`?${newSearchParams.toString()}`);

    setTimeout(() => {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }, 50);
  };

  const listFilter = [
    {
      label: "Main Stage",
      category: "mainStage",
    },
    {
      label: "AI",
      category: "ai",
    },
    {
      label: "DePIN",
      category: "dePin",
    },
    {
      label: "Blockchain",
      category: "blockChain",
    },
  ];

  const listDay = [
    {
      id: 1,
      label: "Day 1",
      category: "day1",
    },
    {
      id: 2,
      label: "Day 2",
      category: "day2",
    },
  ];

  useEffect(() => {
    setLoading(true); // Start loading
    setTimeout(() => {
      if (filterCategory === "mainStage") {
        setDay1(listAgendaGeneral);
        setDay2(listAgendaGeneral2);
      } else if (filterCategory === "ai") {
        setDay1(listAgendaAI);
        setDay2(listAgendaAI2);
      } else if (filterCategory === "dePin") {
        setDay1(listDePIN);
        setDay2(listDePIN2);
      }
      setLoading(false); // End loading
    }, 100);
  }, [filterCategory]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"></div>
    );
  }

  return (
      <div className="min-h-screen bg-[#000] w-full top-14 mb-20 z-0">
        <div
            className="sticky top-14 mt-0 fullscreen:p-[21px] z-20 bg-[#FFF] text-black font-neueMed w-full items-center justify-center hidden text-2xl tablet:flex tablet:text-[16px] fullscreen:text-[42px]">
          3-4 DECEMBER, 2024 - NATIONAL CONVENTION CENTER, HANOI, VIETNAM
        </div>
        <div className=" tablet:text-center pl-4 tablet:pl-0 fullscreen:h-[235px] tablet:mb-8">
          <p className="text-white text-4xl tablet:text-[88px] fullscreen:text-[234px] font-neueMed  tablet:mt-[72px] fullscreen:pt-[170px] leading-[88px]">
            Agenda
          </p>
        </div>
        <div className={`sticky z-50  ${isVisible ? "hidden" : "block"}`}>
          <button
              className="fixed top-[90%] right-4 tablet:right-10  shadow-lg bg-[#000] hover:bg-gray-400 transition duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{ zIndex: 1000 }}
          >
            <ImageBase.ArrowUpIcon width={40} height={40}/>
          </button>
        </div>
        <div className=" sticky top-60 mt-0 z-0 w-full">
          <div
              className="flex font-neueMed text-[20px] fullscreen:text-[53px] gap-2 justify-start tablet:justify-center tablet:mb-8 sticky bg-[#000] w-full tablet:w-auto tablet:top-[88px] top-[58px] tablet:py-10 py-5 overflow-x-auto whitespace-nowrap px-4 overflow-y-hidden tablet:overflow-x-hidden hiddenScrollBar">
            {listFilter.map((item, index) => (
                <button
                    key={index}
                    className={`text-center rounded-[90px] px-6 py-[10px] flex-shrink-0 ${classFilter(
                        item.category
                    )}`}
                    onClick={() => handleScrollTop(item.category)}
                >
                  {item.label}
                </button>
            ))}
          </div>

          <div className="flex flex-col tablet:flex-row justify-center tablet:gap-[100px] laptop:gap-[100px]">
            {/* Sidebar for Tablets/Desktop */}
            <div className="hidden tablet:flex flex-col gap-2 font-neueMed">
              {day1.length &&
                  day2.length &&
                  listDay.length &&
                  listDay.map((item, index) => (
                      <button
                          key={index}
                          className={`text-center rounded-[90px] px-6 py-[10px] scroll-smooth w-[100px] ${classTabActive(
                              item.category
                          )}`}
                          onClick={() => handleScroll(item.category)}
                      >
                        {item.label}
                      </button>
                  ))}
            </div>

            {/* Sticky Header for Mobile */}
            <div className="pb-4 tablet:hidden block z-50 sticky top-[150px] bg-[#000]">
              <div className=" flex border-b border-b-gray-500 font-neueMed fullscreen:text-[53px] ">
                {listDay.map((item, index) => (
                    <button
                        key={index}
                        className={`px-4 py-3 fullscreen:p-8 w-[50%] text-center ${classTabActive(
                            item.category
                        )}`}
                        onClick={() => handleScroll(item.category)}
                    >
                      {item.label}
                    </button>
                ))}
              </div>
            </div>

            {day1.length || day2.length ? (
                <div className="flex flex-col">
                  <div
                      className="px-4 max-w-[947px] h-full w-full fullscreen:px-0 py-6 tablet:py-0 tablet:pb-[126px] fullscreen:pb-[328px] tablet:px-0 flex flex-col gap-2 items-center justify-center ">
                    <p className="text-center w-full text-white font-neueMed uppercase">
                      Day 1
                    </p>

                    {day1.map((speaker, index) => (
                        <div
                            className="flex tablet:gap-10 flex-col tablet:flex-row justify-between items-center  w-full bg-[rgb(255,255,255,0.05)] rounded-2xl h-full tablet:p-6 "
                            id={index === 0 ? "day1" : ""}
                            key={index}
                        >
                          <div
                              className="flex w-full tablet:w-auto justify-between items-center h-full py-4 px-5 tablet:p-0">
                            <div
                                className="flex tablet:flex-col h-full w-full max-w-[167px] tablet:max-w-full gap-3 tablet:gap-4 tablet:w-11 items-center justify-between  text-[#474747]">
                              <p>{speaker.timeStart}</p>
                              <div className="flex h-full tablet:flex-col w-full justify-center items-center">
                                {/* First Dot */}
                                <div className="tablet:w-2 tablet:h-2 w-1 h-1 rounded-full bg-[#474747] tablet:mb-1"/>
                                {/* Dashed Line */}
                                <div className="flex tablet:h-full tablet:w-[1px]  w-full  items-center">
                                  <div
                                      className="tablet:w-[1px] tablet:h-full h-[1px] w-full  tablet:border-l-2 border-t-2  border-dashed border-[#474747]"/>
                                </div>
                                {/* Second Dot */}
                                <div className="tablet:w-2 tablet:h-2 w-1 h-1 rounded-full bg-[#474747] tablet:mt-1"/>
                              </div>
                              <p>{speaker.timeEnd}</p>
                            </div>
                            <div className="tablet:min-w-[120px] block tablet:hidden">
                              <p
                                  className={`tablet:px-3 tablet:py-2 px-2 py-1 text-center rounded-lg border-[rgba(255,255,255,0.30)] text-[#FFF] tablet:text-xs ${
                                      speaker.type ? "border" : ""
                                  }`}
                              >
                                {speaker.type}
                              </p>
                            </div>
                          </div>

                          <hr className="w-full border-[#FFFFFF] opacity-[0.05] block tablet:hidden"/>

                          <div className="flex flex-col tablet:gap-10 w-full h-full justify-between">
                            <div className="flex w-full gap-3 justify-between p-5 tablet:p-0 ">
                              <p className="h-full tablet:text-2xl font-neueMed text-[#FFF]">
                                {speaker.description}
                              </p>
                              <div className="tablet:min-w-[120px] hidden tablet:block">
                                <p
                                    className={`tablet:px-3 tablet:py-2 text-center rounded-lg border-[rgba(255,255,255,0.30)] text-[#FFF] tablet:text-xs ${
                                        speaker.type ? "border" : ""
                                    }`}
                                >
                                  {speaker.type}
                                </p>
                              </div>
                            </div>
                            <hr className="w-full border-[#FFFFFF] opacity-[0.05] block tablet:hidden"/>

                            <div
                                className="flex flex-col tablet:flex-row tablet:flex-wrap tablet:gap-10 gap-5 h-full tablet:py-2 tablet:px-0 p-5 font-neueMed">
                              {speaker?.speaker?.map((item, index) => (
                                  <div
                                      key={index}
                                      className="flex gap-2 rounded-full text-white font-neueMed"
                                  >
                                    <Image
                                        src={item.image || ""}
                                        alt="Speaker"
                                        width={48}
                                        height={48}
                                        className="object-fit h-[48px] w-[48px] rounded-full"
                                    />
                                    <div className="">
                                      <p className="text-lg">{item.name}</p>
                                      <p className="text-[#28D2DC]">{item.company}</p>
                                    </div>
                                  </div>
                              ))}
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>

                  <hr className="w-full border-[#FFFFFF] opacity-[0.05] "/>

                  <div
                      id="day2"
                      className="px-4 max-w-[947px] h-full w-full fullscreen:px-0 py-6 tablet:py-10 tablet:pb-[126px] fullscreen:pb-[328px] tablet:px-0 flex flex-col gap-2 items-center justify-center "
                  >
                    <p className="text-center w-full text-white font-neueMed uppercase">
                      Day 2
                    </p>

                    {day2.map((speaker2, index2) => (
                        <div
                            className="flex tablet:gap-10 flex-col tablet:flex-row justify-between items-center  w-full bg-[rgb(255,255,255,0.05)] rounded-2xl h-full tablet:p-6 "
                            id={index2 === 0 ? "day1" : ""}
                            key={index2}
                        >
                          {day2.length > 1 && (

                              <div
                                  className="flex w-full tablet:w-auto justify-between items-center h-full py-4 px-5 tablet:p-0">
                                <div
                                    className="flex tablet:flex-col h-full w-full max-w-[167px] tablet:max-w-full gap-3 tablet:gap-4 tablet:w-11 items-center justify-between  text-[#474747]">
                                  <p>{speaker2.timeStart}</p>
                                  <div className="flex h-full tablet:flex-col w-full justify-center items-center">
                                    {/* First Dot */}
                                    <div
                                        className="tablet:w-2 tablet:h-2 w-1 h-1 rounded-full bg-[#474747] tablet:mb-1"/>
                                    {/* Dashed Line */}
                                    <div className="flex tablet:h-full tablet:w-[1px]  w-full  items-center">
                                      <div
                                          className="tablet:w-[1px] tablet:h-full h-[1px] w-full  tablet:border-l-2 border-t-2  border-dashed border-[#474747]"/>
                                    </div>
                                    {/* Second Dot */}
                                    <div
                                        className="tablet:w-2 tablet:h-2 w-1 h-1 rounded-full bg-[#474747] tablet:mt-1"/>
                                  </div>
                                  <p>{speaker2.timeEnd}</p>
                                </div>
                                <div className="tablet:min-w-[120px] block tablet:hidden">
                                  <p
                                      className={`tablet:px-3 tablet:py-2 px-2 py-1 text-center rounded-lg border-[rgba(255,255,255,0.30)] text-[#FFF] tablet:text-xs ${
                                          speaker2.type ? "border" : ""
                                      }`}
                                  >
                                    {speaker2.type}
                                  </p>
                                </div>
                              </div>
                          )}


                          <hr className="w-full border-[#FFFFFF] opacity-[0.05] block tablet:hidden"/>

                          <div className="flex flex-col tablet:gap-10 w-full h-full justify-between">
                            <div className="flex w-full gap-3 justify-between p-5 tablet:p-0 ">
                              <p className="h-full tablet:text-2xl text-xl font-neueMed  text-[#FFF]">
                                {speaker2.description}
                              </p>
                              <div className="tablet:min-w-[120px] hidden tablet:block">
                                <p
                                    className={`tablet:px-3 tablet:py-2 text-center rounded-lg border-[rgba(255,255,255,0.30)] text-[#FFF] tablet:text-xs ${
                                        speaker2.type ? "border" : ""
                                    }`}
                                >
                                  {speaker2.type}
                                </p>
                              </div>
                            </div>

                            <hr className="w-full border-[#FFFFFF] opacity-[0.05] block tablet:hidden"/>

                            <div
                                className="flex flex-col tablet:flex-row  tablet:flex-wrap gap-10 h-full tablet:py-2 tablet:px-0 p-5">
                              {speaker2?.speaker?.map((item, index) => (
                                  <div
                                      key={index}
                                      className="flex gap-2 rounded-full text-white font-neueMed"
                                  >
                                    <Image
                                        src={item.image || ""}
                                        alt="Speaker"
                                        width={48}
                                        height={48}
                                        className="object-fit h-[48px] w-[48px] rounded-full"
                                    />
                                    <div className="">
                                      <p className="text-lg">{item.name}</p>
                                      <p className="text-[#28D2DC]">{item.company}</p>
                                    </div>
                                  </div>
                              ))}
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
            ) : (
                <div className="w-full flex items-center justify-center">
                  <div
                      className="w-full tablet:max-w-[947px] max-w-[360px] h-56 flex justify-center items-center rounded-2xl border border-disabled border-dashed mx-4">
                    <p className="text-white ">Nothing to show</p>
                  </div>
                </div>
            )}
          </div>
        </div>
      </div>
  );
}
