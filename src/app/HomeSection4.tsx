"use client";

import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import mask from "@/assets/images/mask.png";
import { useState } from "react";

const getSquareBGByIndex = (index: number) => {
  switch (index) {
    case 0:
    case 1:
    case 3:
    case 5:
    case 7:
      return "#ffffff";
    case 4:
    case 6:
      return "#000000";
    default:
      return "#28D2DC";
  }
};

const Column = ({
  items,
  className,
  colIndex,
}: {
  items: { name: string; title: string; companyName: string }[];
  className: string;
  colIndex: number;
}) => {
  return (
    <div
      className={`${className} flex flex-col w-[16.66%] box-border max-[768px]:w-[50%] max-[768px]:mt-[0px] max-[415px]:mt-[30px]`}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="w-[100%] border-solid border-[0.5px] border-[#D9D9D9] p-4 flex flex-col gap-1 items-start justify-start"
        >
          <div className="w-[100%] aspect-[1/1.05] relative">
            <Image
              src={`/images/persons/person-${colIndex * 4 + i + 1}.png`}
              fill
              className="object-cover object-center"
              alt="person-image"
            />
          </div>
          <div className="mt-3 font-neueMed text-[20px]">{item.name}</div>
          <div className="font-neueMed text-[16px]">{item.title}</div>
          <div className="font-neueMed text-[14px] border-solid border-[1px] border-black p-1 mt-1">
            {item.companyName}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function HomeSection4() {
  const isMobile = useIsMobile(768);
  const [isViewAll, setViewAll] = useState(false)

  return (
    <div className="w-full flex relative mb-24 max-[768px]:mb-[150px]">
      <div className="font-neueMed text-[64px] w-[80%] max-[768px]:w-[60%] max-[768px]:!text-[26px] max-[768px]:leading-[36px] px-14 max-[768px]:px-7 leading-[64px] absolute pt-8 max-[415px]:pt-0">
        {isMobile ? (
          <>Vietnam Tech Impact Summit Spekers</>
        ) : (
          <>
            Vietnam Tech <br /> Impact Summit <br /> Spekers
          </>
        )}
      </div>
      <div className="w-[30%] aspect-square bg-[red] flex flex-wrap max-[768px]:w-[33%] absolute right-0">
        {Array(9)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              style={{
                backgroundColor: getSquareBGByIndex(index),
              }}
              className="w-[33.33%] aspect-square"
            />
          ))}
      </div>
      <div className="w-full z-[5] px-14 pt-10 max-[768px]:px-0 relative">
        <div className="w-full flex justify-between flex-wrap mt-[1vh] max-[1500px]:mt-[3.5vh] max-[1300px]:mt-[5vh] max-[1180px]:mt-[6.5vh]">
          <Column
            colIndex={0}
            className="pt-[15%]"
            items={[
              {
                companyName: "SSI Digital",
                name: "Mr Mai Huy Tuan",
                title: "CEO",
              },
              {
                companyName: "SSI Digital",
                name: "Mr Mai Huy Tuan",
                title: "CEO",
              },
              {
                companyName: "SSI Digital",
                name: "Mr Mai Huy Tuan",
                title: "CEO",
              },
              {
                companyName: "SSI Digital",
                name: "Mr Mai Huy Tuan",
                title: "CEO",
              },
            ]}
          />
          <Column
            colIndex={1}
            className="pt-[22%]"
            items={[
              {
                companyName: "SSI Digital",
                name: "Mr Mai Huy Tuan",
                title: "CEO",
              },
              {
                companyName: "SSI Digital",
                name: "Mr Mai Huy Tuan",
                title: "CEO",
              },
              {
                companyName: "SSI Digital",
                name: "Mr Mai Huy Tuan",
                title: "CEO",
              },
              {
                companyName: "SSI Digital",
                name: "Mr Mai Huy Tuan",
                title: "CEO",
              },
            ]}
          />
          {!isMobile && (
            <>
              {" "}
              <Column
                colIndex={2}
                className="pt-[12%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                ]}
              />
              <Column
                colIndex={3}
                className="pt-[5%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                ]}
              />
              <Column
                colIndex={4}
                className="pt-[35%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                ]}
              />
              <Column
                colIndex={5}
                className="pt-[40%] "
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                ]}
              />
            </>
          )}
            {isMobile && (
              isViewAll? 
            <>
              {" "}
              <Column
                colIndex={2}
                className="!-mt-[7.1%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                ]}
              />
              <Column
                colIndex={3}
                className="!pt-[-1%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                ]}
              />
              <Column
                colIndex={4}
                className="!-mt-[7.2%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                ]}
              />
              <Column
                colIndex={5}
                className="!-mt-[0.1%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                  },
                ]}
              />
            </>
            :null
          )}
          {isMobile && (
            <div
              style={{
                height: "500px",
                backgroundImage: !isViewAll ? `url(${mask.src})` : 'none', 
                backgroundSize: "cover",
                backgroundPosition: "center",
                pointerEvents: "none",
              }}
              className="w-full flex items-end py-5 justify-center absolute -bottom-[150px]"
            >
              <button 
              onClick={() => setViewAll(!isViewAll)}
              className="pointer-events-auto font-neueMed text-[16px] py-[12px] px-[24px] border-solid border-[1px] border-black">
               {!isViewAll ? `View all` : `Hide`}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
