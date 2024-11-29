"use client";

import { listSideEvent } from "@/config/DummyData";
import Image from "next/image";

import bgImg from "@/assets/images/agenda/bg-side-event.png";
import bgImg2 from "@/assets/images/agenda/bg-side-event-2.png";

import Link from "next/link";


export default function SideEvent() {
  // const [activeTab, setActiveTab] = useState("day1");
  // const [filterCategory, setFilterCategory] = useState("generalStage");
  // const [day1, setDay1] = useState<Agenda[]>([]);
  // const [day2, setDay2] = useState<Agenda[]>([]);
  // const [loading, setLoading] = useState(false);
  //
  // const classTabActive = useCallback(
  //     (tabActive: string) => {
  //       if (activeTab === tabActive) {
  //         return " text-[#FFFFFF] border-b border-b-[#FFFFFF] tablet:border  tablet:bg-[#FFF] tablet:text-[#000]";
  //       }
  //       return "text-gray-500";
  //     },
  //     [activeTab]
  // );

  // const classFilter = useCallback(
  //     (filter: string) => {
  //       if (filterCategory === filter) {
  //         return " text-[#000] bg-[#FFF] ";
  //       }
  //       return "text-[#FFF] border border-[#FFF]";
  //     },
  //     [filterCategory]
  // );
  //
  // const handleScroll = (href: string) => {
  //   const element = document.getElementById(href) as HTMLElement | null;
  //   if (element) {
  //     window.scrollTo({ behavior: "smooth", top: element.offsetTop });
  //   }
  //   setActiveTab(href);
  // };
  //
  // const handleScrollTop = (category: string) => {
  //   setFilterCategory(category);
  //   setActiveTab("day1");
  //   setTimeout(() => {
  //     window.scrollTo({ behavior: "smooth", top: 0 });
  //   }, 50);
  // };


  // const listFilter = [
  //   {
  //     label: "Main Stage",
  //     category: "generalStage",
  //   },
  //   {
  //     label: "AI",
  //     category: "ai",
  //   }
  //   , {
  //     label: "DePIN",
  //     category: "dePin",
  //   }
  //   , {
  //     label: "Blockchain",
  //     category: "blockChain",
  //   }
  // ]
  //
  // const listDay = [
  //   {
  //     id: 1,
  //     label: "Day 1",
  //     category: "day1",
  //   },
  //   {
  //     id: 2,
  //     label: "Day 2",
  //     category: "day2",
  //   }
  // ]
  //
  // useEffect(() => {
  //   setLoading(true); // Start loading
  //   setTimeout(() => {
  //     if (filterCategory === "generalStage") {
  //       setDay1(listAgendaGeneral);
  //       setDay2(listAgendaGeneral2);
  //     } else if (filterCategory === "ai") {
  //       setDay1(listAgendaAI);
  //       setDay2(listAgendaAI2);
  //     }
  //     setLoading(false); // End loading
  //   }, 100);
  // }, [filterCategory]);
  // const [isVisible, setIsVisible] = useState(false);
  //
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setIsVisible(false);
  //     } else {
  //       setIsVisible(true);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  //

  return (
      <div className="min-h-screen bg-[#000] w-full top-14 mb-20 z-0 px-4 tablet:px-0  pb-20 tablet:pb-[292px]">
        <div
            className="sticky top-14 mt-0 fullscreen:p-[21px] z-20 bg-[#FFF] text-black font-neueMed w-full items-center justify-center hidden text-2xl tablet:flex tablet:text-[16px] fullscreen:text-[42px]">
          3-4 DECEMBER, 2024 - NATIONAL CONVENTION CENTER, HANOI, VIETNAM
        </div>
        <div className=" tablet:text-center pl-4 tablet:pl-0 fullscreen:h-[235px] tablet:mb-8 flex justify-between">
          <Image src={bgImg2} alt="" width={225} height={223} className='hidden tablet:block'/>
          <div className=' fullscreen:text-[234px] font-neueMed tablet:mt-[72px] fullscreen:pt-[170px] text-white flex flex-col gap-2 tablet:gap-4'>
            <p className=" text-[56px] tablet:text-[88px]  leading-[88px]">
              Side Event
            </p>
            <p className='text-2xl tablet:text-[32px]'>Official Partner event</p>
          </div>
          <div className='tablet:w-[225px] flex justify-end'>
            <Image src={bgImg} alt="" width={153} height={144} className='tablet:mt-[72px] hidden tablet:block'/>
          </div>
        </div>

        <div className='w-full flex flex-col tablet:flex-row items-center justify-center gap-2 mt-4 tablet:mt-6 font-neueMed'>
          <Link href="https://forms.gle/fqCVGdxSkkCFqx9N9" target="_blank" className="px-6 py-3  w-full tablet:w-auto text-center text-[#FFF] bg-[rgba(255,255,255,0.15)] hover:bg-white hover:text-[#000]">
            Submit your event
          </Link>
          <button className="px-6 py-3 w-full tablet:w-auto text-center bg-[rgba(255,255,255,0.15)] text-[#FFF] hover:bg-white hover:text-[#000]">
            Check out the Side Event list
          </button>

        </div>

        <div className='w-full h-full flex flex-col items-center justify-center mt-6 tablet:mt-12 gap-4 tablet:p-6'>
          {listSideEvent.map((item, index) => (
              <div key={index} className='w-full h-full text-white flex items-center justify-center font-neueMed tablet:gap-4'>
                <div className="relative">
                  <div
                      className="px-2 pb-2 pt-4 w-full max-w-[170px] hidden tablet:flex tablet:flex-col gap-2 justify-center items-center border rounded-2xl border-[rgba(255,255,255,0.10)]">
                    <p className="opacity-[0.5] text-base">{item.month} </p>
                    <p className="font-neueMed text-[48px] text-[#FFF]">{item.day}</p>
                    <p className="px-[26px] py-2 bg-[rgba(255,255,255,0.10)] rounded-lg">{item.time}</p>
                  </div>
                  {/* Connecting Dot-Line */}
                  {/*{index !== listSideEvent.length - 1 && (*/}
                  {/*    <div*/}
                  {/*        className="hidden tablet:flex absolute top-full left-[50%] transform -translate-x-1/2  flex-col items-center pt-4">*/}
                  {/*      <div className="w-1 h-1 bg-[#474747] rounded-full"/>*/}
                  {/*      <div className="w-[0.5px] h-16 border-l-2 border-dashed border-[#474747]"/>*/}
                  {/*      <div className="w-1 h-1 bg-[#474747] rounded-full"/>*/}
                  {/*    </div>*/}
                  {/*)}*/}
                </div>

                <div
                    className=' h-full tablet:max-h-full tablet:max-w-[500px]  laptop:max-w-[1253px] bg-[rgba(255,255,255,0.10)] w-full flex flex-col laptop:flex-row items-center tablet:p-6 p-2 gap-8 rounded-lg'>
                  <div className='w-full tablet:max-w-[280px] max-w-full h-full flex  items-center justify-center'>
                    <Image src={item.image || ''} alt='' className='rounded-xl w-full h-full '/>
                  </div>
                  <div className='w-full h-full flex-wrap flex flex-col gap-4 tablet:gap-0 justify-between tablet:py-0 tablet:px-0 p-2'>
                    <div className='w-full flex flex-col gap-4 tablet:gap-2'>
                      <p className='opacity-[0.5] text-xl'>{item.month} {item.day}, {item.year} | {item.location}</p>
                      <p className='tablet:text-[28px] text-2xl'>{item.event}</p>
                      <p
                          className="tablet:text-xl text-base"
                          dangerouslySetInnerHTML={{
                            __html: item.description.replaceAll("\n", "<br />"),
                          }}
                      />

                    </div>
                    <div className='w-full flex flex-col gap-4 tablet:mt-4'>
                      <div className='flex items-center gap-2 text-[24px]'>
                        <p className='opacity-[0.5]'>Host: </p>
                        <p className=''>{item.host} </p>

                      </div>
                      <p className={`rounded-[90px] max-w-[100px] text-base text-center border px-3 py-1 ${item.type === "Free" ? "text-[#28D2DC] border-[#28D2DC]" : ""}`}>{item.type}</p>
                    </div>
                  </div>
                  <Link
                      href={item.registerLink}
                      target="_blank"
                      className="w-full laptop:max-w-[130px] text-center bg-[#28D2DC] text-white py-2 rounded-lg"
                  >
                    Register now
                  </Link>
                </div>
              </div>
          ))}


        </div>

      </div>
  );
}
