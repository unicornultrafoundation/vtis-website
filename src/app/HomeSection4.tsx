"use client";

import mask from "@/assets/images/mask.png";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import { useState } from "react";

const speakersData = [
  {
    Name: "Nguyen Duy Hung",
    Title: "Chairman - SSI",
    image: "\bĐã update web",
    Status: "",
  },
  {
    Name: "Truong Gia Binh",
    Title: "Chairman - FPT",
    image: "\bĐã update web",
    Status: "",
  },
  {
    Name: "Paolo Ardoino",
    Title: "CEO - Tether",
    image:
      "https://drive.google.com/file/d/11SutzcL2JGbFejrPXlIYtiB8hiznjZO-/view?usp=drive_link",
    Status: "",
  },
  // {
  //   Name: "Richard Teng",
  //   Title: "CEO - Binance",
  //   image:
  //     "https://drive.google.com/file/d/18yjncrgz_ACK7TcCJe-8nBjEfbEbVz3a/view?usp=drive_link",
  //   Status: "",
  // },
  {
    Name: "Joy Lam",
    Title: "Head of Global Regulatory and APAC Legal - Binance",
    image:
      "https://drive.google.com/file/d/18yjncrgz_ACK7TcCJe-8nBjEfbEbVz3a/view?usp=drive_link",
    Status: "",
  },
  {
    Name: "Malcolm Wright",
    Title: "Deputy Head of Compliance - OKX",
    image: "",
    Status: "",
  },
  {
    Name: "Dr Olinga Taeed",
    Title: "Blockchain Profesor, Advisor - China Gov",
    image:
      "https://drive.google.com/file/d/1vR7-ei3TMLS22y-nNntBh41v45eYEeII/view?usp=drive_link",
    Status: "",
  },
  {
    Name: "Loi Luu",
    Title: "Founder - Kyber",
    image:
      "https://drive.google.com/file/d/1FNfr0jw31czMXrGF-Fwkb_ckgi38jp1s/view?usp=drive_link",
    Status: "",
  },
  {
    Name: "Hung Bui",
    Title: "CEO - VINAI",
    image:
      "https://drive.google.com/file/d/1Npe-uZ8ckBRGH4Y40bvq0fyxHoHxkHXu/view?usp=drive_link",
    Status: "",
  },
  {
    Name: "Raghu Banda",
    Title: "Sr Director of AI - SAP",
    image: "\bĐã update web",
    Status: "",
  },
  {
    Name: "Nguyen Trung Trang",
    Title: "CPO - SSI Digital",
    image: "",
    Status: "",
  },
  {
    Name: "Dr. Vinesh Sukumar",
    Title: "Senior Director, Head of Gen AI/ML - Qualcomm",
    image: "\bĐã update web",
    Status: "",
  },
  {
    Name: "Kavitha Prasad",
    Title: "General Manager of AI - AWS",
    image: "\bĐã update web",
    Status: "",
  },
  {
    Name: "Shirsha Ray Chaudhuri",
    Title: "Director of Engineering - Thomson Reuters",
    image: "\bĐã update web",
    Status: "",
  },
  {
    Name: "Nestor Camilo",
    Title: "Sr Director Cloud public sector - Oracle",
    image: "\bĐã update web",
    Status: "",
  },
  {
    Name: "Gaurav Chawla",
    Title: "Vice president - JP Morgan Chase",
    image: "\bĐã update web",
    Status: "",
  },
  {
    Name: "Roman Snytsar",
    Title: "Ex AI engineer manager - Microsoft",
    image: "\bĐã update web",
    Status: "",
  },
  {
    Name: "Tuan Cao",
    Title: "CEO, Founder - Life AI",
    image:
      "https://drive.google.com/file/d/1wNuQcrWxrD3pXL2eCTPxl8pKk2ir1_e3/view?usp=drive_link",
    Status: "",
  },
  {
    Name: "Dr Ali Asanjani",
    Title: "Director, Applied AI Engineering - Google",
    image:
      "https://drive.google.com/file/d/1qGIHBje3CEopbHwFfzo33sq0ZVyYiCd2/view?usp=drive_link",
    Status: "",
  },
  {
    Name: "Phong Nguyen",
    Title: "Chief AI officer - FPT AI",
    image:
      "https://drive.google.com/file/d/1bcnD7EidEnF5w8VywDhU5wAnFadZi7fI/view?usp=drive_link",
    Status: "",
  },
  {
    Name: "Tran Cong Quynh Lan ",
    Title: "VP of Tech - VietinBank",
    image:
      "https://drive.google.com/file/d/1tyGdPZGPhkHmsGlIOx2guqFCVHxNQPJu/view?usp=drive_link",
    Status: "",
  },
  {
    Name: "Binh Tran",
    Title: "Partner - AVV ventures",
    image:
      "https://drive.google.com/file/d/1YYTmZsHcfWyv8rZ0nlG36BFn5pva83BE/view?usp=drive_link",
    Status: "",
  },
  {
    Name: "Mai Huy Tuan",
    Title: "CEO - SSI Digital",
    image: "\bĐã update web",
    Status: "",
  },
  {
    Name: "Professor Fabio",
    Title:
      "Prof of AI, Director of AI labs, Oxford Brookes - Oxford University",
    image:
      "https://drive.google.com/file/d/1UVMLQppp7o_TaeA6hvlFUA4P51y8-GXe/view?usp=drive_link",
    Status: "",
  },
  {
    Name: "Jonathan Cheung",
    Title: " - Bybit ",
    image: "",
    Status: "",
  },
  {
    Name: "Don Lam ",
    Title: "CEO - VinaCapital",
    image: "",
    Status: "",
  },
  {
    Name: "Lynn Hoang",
    Title: "Vietnam Country Manager - Binance",
    image: "",
    Status: "",
  },
  {
    Name: "Queenie",
    Title: "Vietnam Country Manager - Tether",
    image: "",
    Status: "",
  },
  {
    Name: "Laura Nguyen",
    Title: "Vietnam Country Manager - Ava Labs",
    image: "",
    Status: "",
  },
  {
    Name: "Trung Banh",
    Title: "COO - Holdstation",
    image: "",
    Status: "",
  },
  {
    Name: "Chloe Phung",
    Title: "Co CEO - U2U Network",
    image: "",
    Status: "",
  },
  {
    Name: "Hoang Nam Tien",
    Title: "Vice President - FPT University",
    image: "",
    Status: "",
  },
  {
    Name: "Robert McDonald",
    Title: "Chief Legal & Compliance Officer - Bybit",
    image: "",
    Status: "",
  },
  {
    Name: "Ha Dao",
    Title: "CEO, Co founder - AIxBlock",
    image: "",
    Status: "",
  },
  {
    Name: "Le Bao Nguyen",
    Title: "Deputy Director - SSID",
    image: "",
    Status: "",
  },
  {
    Name: "Le Sy Nguyen",
    Title: "Vietnam Country Head - Bitget",
    image: "",
    Status: "",
  },
  {
    Name: "Giang Nguyen",
    Title: "Founder - DNSE",
    image: "",
    Status: "",
  },
  {
    Name: "Nghiem Xuan Huy",
    Title: "Founder - Finhay",
    image: "",
    Status: "",
  },
  {
    Name: "Le Thi Le Hang",
    Title: "CSO - SSI",
    image: "",
    Status: "",
  },
  {
    Name: "Do Bui ",
    Title: "Founder - Thinkzone",
    image: "",
    Status: "",
  },
  {
    Name: "Nguyen Phan Dung",
    Title: "Deputy CEO - SSIAM",
    image: "",
    Status: "",
  },
  {
    Name: "Do Viet Hung",
    Title: "President - Viresa",
    image: "",
    Status: "",
  },
  {
    Name: "Le Quang Duy (SofM)",
    Title: "LoL World Championship Runner Up",
    image: "",
    Status: "",
  },
  {
    Name: "Mark Chu",
    Title: "CEO - The Flash",
    image: "",
    Status: "",
  },
  {
    Name: "Nam Tran",
    Title: "Director Corporate Division - VNPAY",
    image: "",
    Status: "",
  },
  {
    Name: "Khang Pham",
    Title: "Senior Advisor to BOD - VNPAY",
    image: "",
    Status: "",
  },
  {
    Name: "Hieu Do",
    Title: "Head of Business Developement - Holdstation",
    image: "",
    Status: "",
  },
  {
    Name: "Victor Dang Thang",
    Title: "CEO - Maxx Capital",
    image: "",
    Status: "",
  },
];

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

const placeHolderImgIndexes: number[] = [];

const Column = ({
  items,
  className,
}: {
  items: { name: string; title: string; companyName: string; index: number }[];
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
          className="w-[100%] border-solid border-[0.5px] border-[#D9D9D9] p-4 fullscreen:p-[26px] flex flex-col gap-1 fullscreen:gap-[10px] items-start justify-start"
        >
          <div className="w-[100%] aspect-[1/1.05] relative flex justify-center">
            <div className="w-full aspect-[210/237] overflow-hidden relative">
              <Image
                src={`/images/speakers/${
                  item.index >= 3
                    ? !placeHolderImgIndexes.includes(item.index + 1)
                      ? item.index + 1
                      : "title"
                    : item.index
                }.png`}
                fill
                style={{
                  objectFit:
                    item.index >= 3
                      ? !placeHolderImgIndexes.includes(item.index + 1)
                        ? "cover"
                        : "contain"
                      : "cover",
                }}
                className="object-center animated-card-image absolute left-0 top-0"
                alt="person-image"
              />
            </div>
          </div>
          <div className="animated-text mt-3 font-neueMed text-[20px] fullscreen:text-5xl fullscreen:text-[53px]">
            {
              speakersData[
                item.index >= 3 ? item.index + 1 - 1 : item.index - 1
              ].Name
            }
          </div>
          <div className="animated-text animated-text-delay-0.2s font-neueMed text-[16px] fullscreen:text-4xl fullscreen:text-[42px]">
            {
              speakersData[
                item.index >= 3 ? item.index + 1 - 1 : item.index - 1
              ].Title.split("-")[0]
            }
          </div>
          {speakersData[
            item.index >= 3 ? item.index + 1 - 1 : item.index - 1
          ].Title.split("-").length > 1 && (
            <div className="animated-text animated-text-delay-0.4s font-neueMed text-[14px] fullscreen:text-[37px] border-solid border-[1px] border-black px-1 fullscreen:px-[10px] mt-1 fullscreen:mb-[37px]">
              {
                speakersData[
                  item.index >= 3 ? item.index + 1 - 1 : item.index - 1
                ].Title.split("-")[1]
              }
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function HomeSection4() {
  const isMobile = useIsMobile(768);
  const [isViewAll, setViewAll] = useState(false);

  return (
    <div
      id="speakers"
      className="w-full flex relative mb-[73px] max-[768px]:mb-20"
    >
      <div className="animated-text z-30 font-neueMed text-[64px] fullscreen:text-[170px] fullscreen:leading-[192px] tablet:w-[80%] w-full h-[72px] max-[768px]:!text-[28px] max-[768px]:leading-[36px] px-14 max-[768px]:px-4 py-6 leading-[64px] absolute pt-8 fullscreen:pt-[85px] max-[415px]:pt-6">
        {isMobile ? (
          <>
            Vietnam Tech Impact <br />
            Summit Speakers
          </>
        ) : (
          <>
            Vietnam Tech <br /> Impact Summit <br /> Speakers
          </>
        )}
      </div>
      <div className="w-[25%] aspect-square flex flex-wrap max-[768px]:w-[33%] absolute right-0 z-10">
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
      <div className="w-full z-[5] px-6 py-8 max-[768px]:px-0 relative fullscreen:mt-[260px]">
        <div className="w-full flex justify-between flex-wrap mt-[1vh] max-[1500px]:mt-[3.5vh] max-[1300px]:mt-[5vh] max-[1180px]:mt-[6.5vh]">
          {!isMobile && (
            <>
              <Column
                colIndex={0}
                className="pt-[15%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 3,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 13,
                  },
                  // {
                  //   companyName: "SSI Digital",
                  //   name: "Mr Mai Huy Tuan",
                  //   title: "CEO",
                  //   index: 14,
                  // },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 22,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 23,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 29,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 35,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 41,
                  },
                ]}
              />
              <Column
                colIndex={1}
                className="pt-[50%] tablet:pt-[22%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 4,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 12,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 15,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 24,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 30,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 36,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 42,
                  },
                ]}
              />
              <Column
                colIndex={2}
                className="pt-[12%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 2,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 21,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 11,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 16,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 25,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 31,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 37,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 43,
                  },
                ]}
              />
              <Column
                colIndex={3}
                className="pt-[5%] fullscreen:pt-0"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 1,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 6,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 10,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 17,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 26,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 32,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 38,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 44,
                  },
                ]}
              />
              <Column
                colIndex={4}
                className="pt-[35%] tablet:pt-[26%] fullscreen:pt-[20%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 7,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 9,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 18,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 27,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 33,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 39,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 45,
                  },
                ]}
              />
              <Column
                colIndex={5}
                className="pt-[40%] tablet:pt-[34%] fullscreen:pt-[26%] "
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 8,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 19,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 20,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 28,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 34,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 40,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 46,
                  },
                ]}
              />
            </>
          )}
          {isMobile && (
            <>
              <Column
                colIndex={0}
                className="pt-[15%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 1,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 3,
                  },
                  // {
                  //   companyName: "SSI Digital",
                  //   name: "Mr Mai Huy Tuan",
                  //   title: "CEO",
                  //   index: 5,
                  // },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 21,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 7,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 9,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 11,
                  },
                ]}
              />
              <Column
                colIndex={1}
                className="pt-[50%] tablet:pt-[22%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 2,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 4,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 6,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 8,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 10,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 12,
                  },
                ]}
              />
              {/*<Column*/}
              {/*  colIndex={2}*/}
              {/*  className="!-mt-[35%]"*/}
              {/*  items={[*/}
              {/*    {*/}
              {/*      companyName: "SSI Digital",*/}
              {/*      name: "Mr Mai Huy Tuan",*/}
              {/*      title: "CEO",*/}
              {/*      index: 9,*/}
              {/*    },*/}
              {/*    {*/}
              {/*      companyName: "SSI Digital",*/}
              {/*      name: "Mr Mai Huy Tuan",*/}
              {/*      title: "CEO",*/}
              {/*      index: 11,*/}
              {/*    },*/}
              {/*  ]}*/}
              {/*/>*/}
              {/*<Column*/}
              {/*  colIndex={3}*/}
              {/*  className="!-mt-[0.2%]"*/}
              {/*  items={[*/}
              {/*    {*/}
              {/*      companyName: "SSI Digital",*/}
              {/*      name: "Mr Mai Huy Tuan",*/}
              {/*      title: "CEO",*/}
              {/*      index: 10,*/}
              {/*    },*/}
              {/*    {*/}
              {/*      companyName: "SSI Digital",*/}
              {/*      name: "Mr Mai Huy Tuan",*/}
              {/*      title: "CEO",*/}
              {/*      index: 12,*/}
              {/*    },*/}

              {/*  ]}*/}
              {/*/>*/}
            </>
          )}
          {isMobile && isViewAll && (
            <>
              <Column
                colIndex={4}
                className="!-mt-[33.3%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 17,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 19,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 13,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 15,
                  },
                  // {
                  //   companyName: "SSI Digital",
                  //   name: "Mr Mai Huy Tuan",
                  //   title: "CEO",
                  //   index: 23,
                  // },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 16,
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
                    index: 18,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 20,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 22,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 23,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 24,
                  },
                ]}
              />
              <Column
                colIndex={6}
                className="!-mt-[20%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 25,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 27,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 29,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 31,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 33,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 35,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 37,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 39,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 41,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 43,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 45,
                  },
                ]}
              />
              <Column
                colIndex={7}
                className="!-mt-[0%]"
                items={[
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 26,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 28,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 30,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 32,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 34,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 36,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 38,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 40,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 42,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 44,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 46,
                  },
                ]}
              />
            </>
          )}
          {isMobile && (
            <div
              style={{
                height: "500px",
                backgroundImage: !isViewAll ? `url(${mask.src})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                pointerEvents: "none",
              }}
              className="w-full flex items-end py-5 justify-center absolute -bottom-[60px]"
            >
              <button
                onClick={() => setViewAll(!isViewAll)}
                className="pointer-events-auto font-neueMed text-[16px] py-[12px] px-[24px] border-solid border-[1px] border-black"
              >
                {!isViewAll ? `View all` : `Hide`}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
