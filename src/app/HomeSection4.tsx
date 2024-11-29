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
  //     "https://drive.google.com/file/d/1-2BnhCA1xqr_Tt52PhVzljfBd13RiMg0/view?usp=drive_link",
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
    Title: " CEO and Founding Partner - VinaCapital",
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
    Name: "Quynh Le",
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
    Title: "Co founder - Holdstation",
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
  {
    Name: "Takeshi Chino",
    Title: "General Manager for Japan - Binance",
    image: "",
    Status: "",
  },
  {
    Name: "Brian Miller",
    Title: "Business Development - WearFitAI",
    image: "",
    Status: "",
  },
  {
    Name: "Mark Rydon",
    Title: "Co founder & CSO - Aethir",
    image: "",
    Status: "",
  },
  {
    Name: "Dang Do",
    Title: "CEO - Strant",
    image: "",
    Status: "",
  },
  {
    Name: "Quinn Quinn",
    Title: "Founder - Suci Blockchain Hub",
    image: "",
    Status: "",
  },
  {
    Name: "Victor J. ",
    Title: "Founder - Manta Network",
    image: "",
    Status: "",
  },
  {
    Name: "Marine",
    Title: "Head of Partnership - Optimism",
    image: "",
    Status: "",
  },
  {
    Name: "Eric Alexander",
    Title: "Founding member - Access Singapore",
    image: "",
    Status: "",
  },
  {
    Name: "Tony",
    Title: "CEO - Ermis Network",
    image: "",
    Status: "",
  },
  {
    Name: "Peter Hoang Nguyen",
    Title: "CEO & Founder - Medoo",
    image: "",
    Status: "",
  },
  {
    Name: "Cathy Zhu",
    Title: "Partner - RockTree Capital Venture",
    image: "",
    Status: "",
  },
  {
    Name: "Garlan",
    Title: "CMO - WearFit AI",
    image: "",
    Status: "",
  },
  {
    Name: "Ryan Bui",
    Title: "Ecosystem Director - U2U",
    image: "",
    Status: "",
  },
  {
    Name: "Monique Bekker",
    Title: "Head of Marketing - Blocx",
    image: "",
    Status: "",
  },
  {
    Name: "Kiet Le",
    Title: "Investment Director - IDG Capital Vietnam",
    image: "",
    Status: "",
  },
  {
    Name: "Harry Chan",
    Title: "Head of BD & Partnership - Kucoin",
    image: "",
    Status: "",
  },
  {
    Name: "Gracy Chen",
    Title: "CEO - Bitget",
    image: "",
    Status: "",
  },
  {
    Name: "Avant Le",
    Title: "Country Manager - Bitget",
    image: "",
    Status: "",
  },
  {
    Name: "Alex Nguyen",
    Title: "Spokesperson Vietnam - BingX",
    image: "",
    Status: "",
  },
  {
    Name: "Son Ho",
    Title: "Managing Partner - K300 Ventures",
    image: "",
    Status: "",
  },
  {
    Name: "Ryan Sungho Kim",
    Title: "Co founder & Partner - Hashed",
    image: "",
    Status: "",
  },
  {
    Name: "Nghiem Xuan Bach",
    Title: "Chief Growth Officer - ATX",
    image: "",
    Status: "",
  },
  {
    Name: "Xenofon",
    Title: "Founder of ZuCasa - INATBA",
    image: "",
    Status: "",
  },
  {
    Name: "Sasha Asheghi",
    Title: "Founder - Arcanum Ventures",
    image: "",
    Status: "",
  },
  {
    Name: "Cathal",
    Title: "NexStox - NexStox",
    image: "",
    Status: "",
  },
  {
    Name: "Linh Pham",
    Title: "Regional Head of Growth (SEA) - CoinEx",
    image: "",
    Status: "",
  },
  {
    Name: "Andy",
    Title: "CTO - Axie",
    image: "",
    Status: "",
  },
  {
    Name: "Trung Huynh",
    Title: "Head of Product - Holdstation",
    image: "",
    Status: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Kay",
    Title: "CEO - Hashkey",
    Hình: "https://drive.google.com/file/d/1APZmLypvLEPTue3BNSYtDdFMhGb5ErrG/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Leow",
    Title: "Core Contributor, Partnership - Zetachain",
    Hình: "https://drive.google.com/file/d/1s5B9fFT7TbeBozR4Q9UsQwMfTZJHOIZC/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Jinnie Lee",
    Title: "Sales Director, APAC Institutional Business - Fireblocks",
    Hình: "https://drive.google.com/file/d/1lyYCJeddBcf_CPPLcJA6VnEAQfQWolCL/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Daryl Lim",
    Title: "General Partner - Trive Digital",
    Hình: "https://drive.google.com/file/d/19pzLBlTGipbTkcFv4BHZD1hiV-13g2B4/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Larry",
    Title: "Managing Partner - SNZ",
    Hình: "",
    Status: "Thiếu ảnh",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Ethan",
    Title: "CEO - Hippocrat",
    Hình: "https://drive.google.com/file/d/11kEnj_E8E3aArS0uqIXnjgAVhyjpEsQo/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Asher Looi",
    Title: "Co founder & CEO - BitDoctor.AI",
    Hình: "https://drive.google.com/file/d/19Y-V6J0nPnGM6PXfVmFhiyPp0ge1tJ7T/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Vi Pham",
    Title: "Partnership Manager - Holdstation",
    Hình: "https://drive.google.com/file/d/1xTqoL-wr13NiJ3nSgBdyQSUncwXUC_pU/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Tom Ngo",
    Title: "CEO - Metis",
    Hình: "",
    Status: "Thiếu ảnh",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Booga",
    Title: "Head of Ecosystem - Zerion & ZERO",
    Hình: "https://drive.google.com/file/d/1XaWKKO_U3NWMQKFOqpgiYgAAwf77ODVL/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Su Nguyen",
    Title: "Chief Communication Officer - Sightsea Labs",
    Hình: "https://drive.google.com/file/d/1CzrP56vEw-WFKWPvqeQNObzrN_PQr--w/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Damien Kim",
    Title: "Head of business operation - Flipster",
    Hình: "https://drive.google.com/file/d/1fojQ2hTUIPzoDT0t0Cutv-0pMv_-yG27/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Ken Le",
    Title: "Head of Growth- Holdstation",
    Hình: "https://drive.google.com/file/d/1c5us-PpBz1oQ2fDFwOw3P7_gchL2PFin/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Orest Pokhylevych",
    Title: "Director of Growth - Cointelegraph",
    Hình: "https://drive.google.com/file/d/1knCi_RvhcIbJPmHXjcJ6o2FVVSMx8J-a/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Tonny",
    Title: "Community Lead - HC Capital",
    Hình: "https://drive.google.com/file/d/1fwm5E9aeZBKEV5aPCr91aDdrCpuDbX-8/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Basilla",
    Title: "Community Lead - UB Ventures",
    Hình: "https://drive.google.com/file/d/12cSeaQavklZxonLB-Esayv8-9a5t-9Sy/view?usp=drive_link",
    Status: "Cần Update lên web",
    PIC: "",
  },
  {
    "https://drive.google.com/file/d/1dqkE3EDYgnGy_QBdsb_NlwXY7hlEZ_BO/view?usp=drive_link":
      "",
    Name: "Leonardo",
    Title: "CMO - Holdstation",
    Hình: "",
    Status: "Thiếu ảnh",
    PIC: "",
  },
  {
    Name: "Emily Nguyen ",
    Title: "Country Manager - DIN",
    image: "",
    Status: "",
  },
  {
    Name: "Gaurav Chawla",
    Title: "VP - JP Morgan Chase",
    image: "",
    Status: "",
  },
  {
    Name: "Dung Ngoc Nguyen",
    Title: "NIC - NIC",
    image: "",
    Status: "",
  },
  {
    Name: "Alicia Kao",
    Title: "Manager Director - Kucoin",
    image: "",
    Status: "",
  },
  {
    Name: "YY",
    Title: "Head Of BD - MEXC",
    image: "",
    Status: "",
  },
  {
    Name: "Nguyen Viet Hoa",
    Title: "Head of Community Information - VBU",
    image: "",
    Status: "",
  },
  {
    Name: "Alex",
    Title: "Head of Partnership - OtterSec",
    image: "",
    Status: "",
  },
  {
    Name: "Zane N",
    Title: "Core Contributor - Ancient8",
    image: "",
    Status: "",
  },
  {
    Name: "Richard Teng",
    Title: "CEO - Binance",
    image:
    "https://drive.google.com/file/d/1-2BnhCA1xqr_Tt52PhVzljfBd13RiMg0/view?usp=drive_link",
    Status: "",
  },
  {
    Name: "Tracy",
    Title: "VP - MEXC",
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

const placeHolderImgIndexes: number[] = [80, 84];

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
                      ? `speaker-${item.index + 1}`
                      : "title"
                    : `speaker-${item.index}`
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
                    index: 100,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 63,
                  },
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
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 99,
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
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 47,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 49,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 55,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 69,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 75,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 81,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 87,
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
                    index: 62,
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
                    index: 93,
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
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 50,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 56,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 61,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 70,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 76,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 82,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 88,
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
                    index: 101,
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
                    index: 16,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 94,
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
                    index: 51,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 57,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 67,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 71,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 77,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 83,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 89,
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
                    index: 95,
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
                    index: 45,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 52,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 58,
                  },
                  // {
                  //   companyName: "SSI Digital",
                  //   name: "Mr Mai Huy Tuan",
                  //   title: "CEO",
                  //   index: 64,
                  // },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 65,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 72,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 78,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 84,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 90,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 96,
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
                    index: 46,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 53,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 59,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 66,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 73,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 79,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 85,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 91,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 97,
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
                    index: 48,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 54,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 60,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 68,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 74,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 80,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 86,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 92,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 98,
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
                    index: 100,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 63,
                  },
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
                    index: 7,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 93,
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
                    index: 95,
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
                    index: 9,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 101,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 62,
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
                    index: 15,
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
                    index: 17,
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
                    index: 23,
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
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 47,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 49,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 51,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 53,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 55,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 57,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 59,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 61,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 65,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 67,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 69,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 71,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 73,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 75,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 77,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 79,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 81,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 83,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 85,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 87,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 89,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 91,
                  },
                  // {
                  //   companyName: "SSI Digital",
                  //   name: "Mr Mai Huy Tuan",
                  //   title: "CEO",
                  //   index: 93,
                  // },

                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 97,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 99,
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
                    index: 12,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 14,
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
                    index: 24,
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
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 48,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 50,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 52,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 54,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 56,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 58,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 60,
                  },
                  // {
                  //   companyName: "SSI Digital",
                  //   name: "Mr Mai Huy Tuan",
                  //   title: "CEO",
                  //   index: 64,
                  // },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 66,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 68,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 70,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 72,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 74,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 76,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 78,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 80,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 82,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 84,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 86,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 88,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 90,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 92,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 94,
                  },
                  {
                    companyName: "SSI Digital",
                    name: "Mr Mai Huy Tuan",
                    title: "CEO",
                    index: 98,
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
