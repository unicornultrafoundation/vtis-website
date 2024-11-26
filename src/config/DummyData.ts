import { StaticImageData } from "next/image";
import NguyenDuyHung from "@/assets/images/agenda/NguyenDuyHung.png";
import EventLogo from "@/assets/images/agenda/default-image.png";
import BinhTran from "@/assets/images/agenda/Binh Tran.png";
import ChloePhung from "@/assets/images/agenda/Chloe Phung.png";
import DonLam from "@/assets/images/agenda/Don Lam.png";
import VinneshSukumar from "@/assets/images/agenda/VineshSukumar.png";
import HaDao from "@/assets/images/agenda/Ha Dao.png";
import HoangNamTien from "@/assets/images/agenda/Hoang Nam Tien.png";
import HunngBui from "@/assets/images/agenda/Hung Bui.png";
// import KavithaPrasad from "@/assets/images/agenda/KavithaPrasad.png";
import LynnHoang from "@/assets/images/agenda/Lynn Hoang.png";
import NestorCamilo from "@/assets/images/agenda/Nestor Camilo.png";
import ProfessorFabioCuzzolin from "@/assets/images/agenda/Professor Fabio Cuzzolin.png";
// import Queenie from "@/assets/images/agenda/Queenie.png";
import RaghuBanda from "@/assets/images/agenda/Raghu Banda.png";
// import RichardTeng from "@/assets/images/agenda/Richard Teng - CEO Binance.png";
import RobertMcDonald from "@/assets/images/agenda/Robert McDonald.png";
import ShirshaRay from "@/assets/images/agenda/Shirsha Ray Chaudhuri.png";
import TranCongQuynhLan from "@/assets/images/agenda/Tran Cong Quynh Lan.png";
import TrungBanh from "@/assets/images/agenda/Trung Banh.png";
import TruongGiaBinh from "@/assets/images/agenda/TruongGiaBinh.png";
import TuanCao from "@/assets/images/agenda/Tuan Cao.png";
import PhongNguyen from "@/assets/images/agenda/Phong Nguyen.png";
import AliArsanjani from "@/assets/images/agenda/Dr. Ali Arsanjani.png";
import RomanSnysar from "@/assets/images/agenda/Roman Snytsar.png";

import MarkRydon from "@/assets/images/agenda/Mark Rydon.png";
import EmilyNguyen from "@/assets/images/agenda/Emily Nguyen.png";

import SofM from "@/assets/images/agenda/Le Quang Duy (SofM).png";
import MarkChu from "@/assets/images/agenda/Mark Chu.png";
import GiangNguyen from "@/assets/images/agenda/Giang Nguyen.png";
import LeSyNguyen from "@/assets/images/agenda/Le Sy Nguyen.png";
import JoyLam from "@/assets/images/agenda/Joy Lam.png";
import Malcolm from "@/assets/images/agenda/Malcolm Wright.png";
import LeBaoNguyen from "@/assets/images/agenda/Le Bao Nguyen.png";
import NghiemXuanHuy from "@/assets/images/agenda/Nghiem Xuan Huy.png";
import DoBui from "@/assets/images/agenda/Do Bui.png";
import DoVietHung from "@/assets/images/agenda/Do Viet Hung .png";
// import HoangVietAnh from "@/assets/images/agenda/Hoang Viet Anh.png";
import LeThiLeHang from "@/assets/images/agenda/Le Thi Le Hang.png";
// import NamTran from "@/assets/images/agenda/Nam Tran.png";
import NguyenPhanDung from "@/assets/images/agenda/Nguyen Phan Dung .png";
import NguyenTrungTrang from "@/assets/images/agenda/Nguyen Trung Trang.png";
import TranManhNam from "@/assets/images/agenda/Tran Manh Nam.png";

import KietLe from "@/assets/images/agenda/Kiet Le.jpg";
import MoniqueBekker from "@/assets/images/agenda/Monique Bekker.png";
import Tony from "@/assets/images/agenda/Tony.png";

import RyanBui from "@/assets/images/agenda/Ryan Bui.png";

import Garlan from "@/assets/images/agenda/GarlanWearfit.jpg";

import HarryChan from "@/assets/images/agenda/Harry Chan.png";
import AlexNguyen from "@/assets/images/agenda/Mr. Alex Nguyen.png";
// import AvantLe from "@/assets/images/agenda/Mr. Avant Le.png";
import LeLanChi from "@/assets/images/agenda/Ms. Le Lan Chi.png";
import MyHuyen from "@/assets/images/agenda/My Huyen.png";
import Quinn from "@/assets/images/agenda/Quinn Quinn.png";
import RyanSunghoKim from "@/assets/images/agenda/Ryan Sungho Kim.png";
import SonHo from "@/assets/images/agenda/Son Ho.png";
import TakeshiChino from "@/assets/images/agenda/Takeshi Chino.png";
// import VictorJ from "@/assets/images/agenda/Victor J.png";
import QuynhLe from "@/assets/images/agenda/Quynh Le.png";
import Marine from "@/assets/images/agenda/Marine.png";

import AIxBlock from "@/assets/images/agenda/side-event.png";
import U2U from "@/assets/images/agenda/U2U NETWORK.png";
import Hanoise from "@/assets/images/agenda/Hanoise-Holdstation.jpg";

import CathyZhu from "@/assets/images/agenda/Cathy Zhu.png";
import LinhPham from "@/assets/images/agenda/Linh Pham.png";
import Peter from "@/assets/images/agenda/Peter Hoang Nguyen.png";
import TonyLbank from "@/assets/images/agenda/Tony-lbank.jpg";


import Xenofon from "@/assets/images/agenda/Xenofon.png";
import VictoryDangThang from "@/assets/images/agenda/Victor Dang Thang.png";
import VictoryManta from "@/assets/images/agenda/Victor - Manta.jpg";
import SashaAsheghi from "@/assets/images/agenda/Sasha Asheghi.png";
import NghiemXuanBach from "@/assets/images/agenda/Nghiem Xuan Bach.png";
import Eric from "@/assets/images/agenda/Eric Alexander.png";
import KhangPham from "@/assets/images/agenda/Khang Pham.png";
import Andy from "@/assets/images/agenda/Andy.png";
import DangDo from "@/assets/images/agenda/Dang Do.png";
import GracyChen from "@/assets/images/agenda/Gracy Chenpng.png";
import LoiLuu from "@/assets/images/agenda/Loi Luu.png";
import Cathal from "@/assets/images/agenda/Cathal.png";


export interface Speaker {
  name?: string;
  company?: string;
  image?: StaticImageData;
}

export interface Agenda {
  timeStart?: string;
  timeEnd?: string;
  speaker?: Speaker[];
  type?: string;
  description?: string;
}


export interface SideEvent {
  time: string;
  day: string;
  month: string;
  year: string;
  host: string;
  type: string;
  event: string;
  description: string;
  registerLink: string;
  image?: StaticImageData;

}

export const listAgendaGeneral: Agenda[] = [
  {
    timeStart: "9:00",
    timeEnd: "9:20",
    speaker: [{ name: "Opening Performance ", image: EventLogo }],
    type: "",
    description: " Drum Show",

  },
  {
    timeStart: "9:20",
    timeEnd: "9:40",
    speaker: [{ name: "Mr. Nguyen Duy Hung", company: "Chairman @SSI", image: NguyenDuyHung }],
    type: "Program Opening",
    description: "Opening Performance",
  },
  {
    timeStart: "9:40",
    timeEnd: "10:00",
    speaker: [{ name: "Mr. Truong Gia Binh", company: "Chairman @FPT", image: TruongGiaBinh }],
    type: "Keynote",
    description: "Keynote Speech on Event Theme - Tech Impact",
  },
  {
    timeStart: "10:00",
    timeEnd: "10:30",
    speaker: [{ name: "", image: EventLogo }],
    type: "Keynote",
    description: "Keynote Speech of Management.",
  },
  {
    timeStart: "10:30",
    timeEnd: "11:15",
    speaker: [
      { name: "Dr. Vinesh Sukumar", company: "Sr Director, Head of AI/ML @Qualcomm ", image: VinneshSukumar },
      { name: "Mr. Lan Tran", company: "Chief Information Officier (CIO) @Vietinbank", image: TranCongQuynhLan },
      { name: "Mr. Hung Bui", company: "CEO @VinAI", image: HunngBui },
      // { name: "Ms. Kavitha Prasad", company: "General Manager of AI @AWS", image: KavithaPrasad },
      { name: "Mr. Dang Do", company: "CTO @Strant", image: DangDo },
      { name: "Moderator: Ms. Ha Dao", company: "CEO @AIxBlock", image: HaDao },
    ],
    type: "Panel Discussion",
    description: "Generative AI - Business Impact and Future Potential",
  },
  {
    timeStart: "11:15",
    timeEnd: "11:55",
    speaker: [
      { name: "Mr. Malcolm Wright", company: "Deputy Head of Compliance @OKX", image: Malcolm },
      { name: "Mr. Robert Mcdonald", company: "Chief Legal of Compliance Officer @Bybit", image: RobertMcDonald },
      { name: "Ms. Joy Lam", company: "Head of Global Regulatory and APAC Legal @Binance", image: JoyLam },
      { name: "Ms. Hang Le", company: "CSO @SSI", image: LeThiLeHang },
      { name: "Moderator: Mr. Le Bao Nguyen", company: "Deputy Director @SSI Digital", image: LeBaoNguyen },
    ],
    type: "Panel Discussion",
    description: "The Legal Frontier of Digital Assets: Benefits, Challenges, and Global Experiences",
  },

  {
    timeStart: "11:55",
    timeEnd: "12:05",
    speaker: [
      { name: "Mr. Don Lam", company: "CEO and Founding Partner @Vinacapital Group", image: DonLam },
    ],
    type: "Keynote",
    description: "Technology Investment From Vinacapital's View",
  },


  {
    timeStart: "13:30",
    timeEnd: "14:00",
    speaker: [
      { name: "Mr. Harry Chan", company: "Head of BD & Partnership, Kucoin", image: HarryChan },
    ],

    type: "Keynote",
    description: "Tech Impact",
  },
  {
    timeStart: "14:05",
    timeEnd: "14:40",
    speaker: [
      { name: "Mr. Nguyen Trung Trang", company: "Co-Founder & CPO @SSID", image: NguyenTrungTrang },
      { name: "Ms. Quynh Le", company: "Vietnam Country Manager @Tether", image: QuynhLe },
      { name: "Mr. Trung Banh", company: "Co-Founder / Chief Product Officer @Holdstation", image: TrungBanh },
      { name: "Mr. Le Sy Nguyen", company: "Vietnam Country Head @Bitget", image: LeSyNguyen },
      { name: "Moderator: Ms. My Huyen",company: "BDM @Bingx", image: MyHuyen },
    ],
    type: "Panel Discussion",
    description: "Blockchain and Its Applications",
  },
  {
    timeStart: "14:45",
    timeEnd: "15:15",
    speaker: [{ name: "Ms. Gracy Chen",company:"CEO, Bitget", image: GracyChen }],
    type: "Keynote",
    description: "How Bitget Supports Innovation & Tech Impact",
  },
  {
    timeStart: "15:15",
    timeEnd: "15:55",
    speaker: [
      { name: "Mr. Giang Nguyen", company: "Founder @DNSE", image: GiangNguyen },
      { name: "Mr. Nghiem Xuan Huy", company: "Founder @Finhay", image: NghiemXuanHuy },
      { name: "Ms. Lynn Hoang", company: "Country Manager @Binance", image: LynnHoang },
      { name: "Ms. Le Lan Chi", company: "CEO @Zalopay", image: LeLanChi },
      { name: "Moderator: Ms. Hang Le", company: "CSO @SSI", image: LeThiLeHang },
    ],
    type: "Panel Discussion",
    description: "The Future of Fintech in the Next 5 - 10 Years",
  },
  // {
  //   timeStart: "15:45",
  //   timeEnd: "16:00",
  //   speaker: [{ name: "Rep. Hyratek", image: EventLogo }],
  //   type: "Keynote",
  //   description: "Tech Impact",
  // },
  {
    timeStart: "16:05",
    timeEnd: "16:50",
    speaker: [
      { name: "Mr. Raghu Banda", company: "Sr Director of AI @SAP", image: RaghuBanda },
      { name: "Mr. Tuan Cao", company: "CEO @Life AI", image: TuanCao },
      { name: "Mr. Binh Tran", company: "General Manager @AVV", image: BinhTran },
      {
        name: "Prof. Fabio Cuzzolin",
        company: "Prof of AI, Director of AI Labs @Oxford Brookes, Oxford University",
        image: ProfessorFabioCuzzolin
      },
      // { name: "Rep. Hyratek", image: EventLogo },
      { name: "Moderator:  Ms. Ha Dao", company: "CEO @AIxBlock", image: HaDao },

    ],
    type: "Panel Discussion",
    description: "The Future of AI - Open Source and Decentralized or Closed Source and Centralized?",
  },
  {
    timeStart: "16:55",
    timeEnd: "17:30",
    speaker: [
      { name: "Rep. JDI", image: EventLogo },
      { name: "Mr. Mark Rydon", company: "Co-Founder & CSO @Aethir", image: MarkRydon },
      { name: "Mr. Tran Hoang Giang ", company: "CEO, Aura Network", image: EventLogo },
      { name: "Mr. Harry Chan", company: "Head of BD & Partnership, Kucoin", image: HarryChan },
      { name: "Moderator: Ms. Chloe Phung", company: "Co-founder & Co-CEO @U2U", image: ChloePhung },
    ],
    type: "Panel Discussion",
    description: "DePIN for Life",
  },
  // {
  //   timeStart: "17:15",
  //   timeEnd: "17:30",
  //   speaker: [{ name: "Rep. Strant", image: EventLogo }],
  //   type: "Keynote",
  //   description: "How Strant Supports Innovation & Tech Impact",
  // },
];


export const listAgendaGeneral2: Agenda[] = [
  {
    timeStart: "9:00",
    timeEnd: "9:40",
    speaker: [
      { name: "Ms. Shirsha Chaudhuri", company: "Director of Eng @Thomson Reuters", image: ShirshaRay },
      { name: "Mr. Raghu Banda", company: "Sr Director of AI @SAP", image: RaghuBanda },
      { name: "Mr. Nestor Camilo", company: " Cloud Adoption Director, AI @Oracle", image: NestorCamilo },
      { name: "Mr. Tran Manh Nam", company: "Director of Corporate Division @VNPay", image: TranManhNam },
      // { name: "CEO", company: "Strant", image: EventLogo },
      { name: "Mr. Phong Nguyen", company: "Chief AI Officer @FPT AI", image: PhongNguyen },
      { name: "Moderator: Ms. Ha Dao", company: "CEO @AIxBlock ", image: HaDao },
    ],
    type: "Panel Discussion",
    description: "Ai In Enterprise - Accelerating Digital Transformation",

  },
  {
    timeStart: "9:40",
    timeEnd: "10:10",
    speaker: [{ name: "Mr. Hoang Nam Tien", company: "Vice President @FPT University", image: HoangNamTien }],
    type: "Keynote",
    description: "The Effect of Technology on Education and the Future",
  },
  {
    timeStart: "10:15",
    timeEnd: "10:50",
    speaker: [
      // { name: "Mr. Avant Le",company:"Country Manager, Bitget", image: AvantLe },
      { name: "Rexy Ali",company:"VP South East Asia", image: EventLogo },
      { name: "Mr. Alex Nguyen",company:"Spokesperson Vietnam, BingX", image: AlexNguyen },
      { name: "Mr. Harry Chan",company:"Head of BD & Partnership, Kucoin", image: HarryChan },
      { name: "Moderator: Rep. MEXC", image: EventLogo },

    ],
    type: "Panel Discussion",
    description: "Future Innovations and Security in Digital Asset",
  },
  {
    timeStart: "10:50",
    timeEnd: "11:20",
    speaker: [
      { name: "Mr. Takeshi Chino",company:"GM for Japan, Binance", image: TakeshiChino },
    ],
    type: "Keynote",
    description: "How Binance Supports Innovation & Tech Impact",
  },
  {
    timeStart: "11:25",
    timeEnd: "12:00",
    speaker: [
      { name: "Mr. Son Ho",company:"Managing Partner, K300 Ventures", image: SonHo },
      { name: "Mr. Nghiem Xuan Bach",company:"Chief Growth Officer, ATX", image: NghiemXuanBach },
      { name: "Mr. Victor Dang Thang",company: " CEO, Maxx Capital", image: VictoryDangThang },
      { name: "Rep. Holdstation", image: EventLogo },
      { name: "Moderator: Rep. VBU", image: EventLogo },
    ],
    type: "Panel Discussion",
    description: " The Rise Of Blockchain In Vietnam",
  },

  //
  // {
  //   timeStart: "13:30",
  //   timeEnd: "13:50",
  //   speaker: [{ name: "Richard Teng", company: "CEO @Binance", image: RichardTeng }],
  //   type: "Keynote",
  //   description: "How Binance Support Innovation & Tech Impact",
  // },
  {
    timeStart: "13:30",
    timeEnd: "13:50",
    speaker: [
      { name: "Rep. Strant", image: EventLogo },
    ],
    type: "Keynote",
    description: "How Strant Supports Innovation & Tech Impact",
  },
  {
    timeStart: "13:55",
    timeEnd: "14:35",
    speaker: [
      { name: "Mr. Do Bui", company: "Founder Thinkzone", image: DoBui },
      { name: "Mr. Nguyen Phan Dung", company: "Deputy CEO, SSIAM", image: NguyenPhanDung },
      { name: "Mr. Ryan Sungho Kim",company:"Cofounder & Partner, Hashed", image: RyanSunghoKim },
      { name: "Rep. EVG", image: EventLogo },
      { name: "Moderator: Mr. Loi Luu", company: "Kyber Network", image: LoiLuu },

    ],
    type: "Panel Discussion",
    description: "Panel Discussion with Web2 & Web3 Ventures",
  },
  {
    timeStart: "14:35",
    timeEnd: "14:55",
    speaker: [{ name: "Mr. Alex Nguyen",company:"Spokesperson Vietnam, BingX", image: AlexNguyen }],
    type: "Keynote",
    description: "How Bingx Supports Innovation & Tech Impact",
  },
  {
    timeStart: "15:00",
    timeEnd: "15:40",
    speaker: [
      { name: "Mr. Victor J", company: "Founder @Manta Network", image: VictoryManta },
      { name: "Ms. Marine", company: "Head of Partnership @Optimism", image: Marine },
      { name: "Mr. Eric Alexander", company: "Founding member, Access Singapore", image:Eric },
      // { name: "Rep. EVG", image: EventLogo },
      { name: "Moderator: Ms. Quinn Quinn", company: "Founder @Suci Blockchain Hub", image: Quinn },
    ],
    type: "Panel Discussion",
    description: "Decentralizing Economic Opportunity",
  },
  {
    timeStart: "15:40",
    timeEnd: "16:00",
    speaker: [{ name: "Rep. MEXC", image: EventLogo }],
    type: "Keynote",
    description: "How MEXC Support Innovation & Tech Impact",
  },
  {
    timeStart: "16:05",
    timeEnd: "16:40",
    speaker: [
      { name: "Mr. Xenofon", company: "Founder of ZuCasa, INATBA", image: Xenofon },
      { name: "Dung Ngoc Nguyen", company: " NIC", image: EventLogo },
      { name: "Mr. Sasha Asheghi", company: " Founder, Arcanum Ventures", image: SashaAsheghi },
      { name: "Mr. Cathal", company: " NexStox", image: Cathal },
      { name: "Moderator: Mr. Ganesg R", company: "Founder, FireBond", image: EventLogo },
    ],
    type: "Panel Discussion",
    description: "Gaming's Contribution to Life and Economy",
  },
  {
    timeStart: "16:45",
    timeEnd: "17:20",
    speaker: [
      { name: "Mr. Do Viet Hung", company: "President @Viresa", image: DoVietHung },
      { name: "Mr. Andy", company: "CTO Axie", image: Andy },
      { name: "Mr. Le Quang Duy (SofM)", company: "LoL World Championship Runner-Up", image: SofM },
      { name: "Moderator: Mr. Mark Chu", company: "CEO @The Flash  ", image: MarkChu },
    ],
    type: "Panel Discussion",
    description: "Gaming's Contribution to Life and Economy",
  },
  {
    timeStart: "17:20",
    timeEnd: "17:30",
    speaker: [
      { name: "Organizer", image: EventLogo },
    ],
    type: "",
    description: "Closing Ceremony",
  },
];


export const listAgendaAI: Agenda[] = [
  {
    timeStart: "10:30",
    timeEnd: "11:05",
    speaker: [
      { name: "Mr. Phong Nguyen", company: "Chief AI Officer @FPT AI", image: PhongNguyen },
    ],
    type: "Keynote",
    description: "Agentic AI",

  },
  {
    timeStart: "11:10",
    timeEnd: "11:40",
    speaker: [{ name: "Mr. Khang Pham",company:"Senior Advisor to BOD @VNPAY", image: KhangPham }],
    type: "Keynote",
    description: "Beyond the Algorithm: Establishing Trust in AI through Verification",
  },
];

export const listAgendaAI2: Agenda[] = [
  {
    timeStart: "9:00",
    timeEnd: "9:40",
    speaker: [
      { name: "Dr. Ali Arsanjani", company: "Director/ Applied AI Engineering @Google ", image: AliArsanjani },
    ],
    type: "Keynote",
    description: "Essential Technical Capabilities to Realize Business Value with GenAI",

  },
  {
    timeStart: "9:40",
    timeEnd: "10:25",
    speaker: [
      { name: "Mr. Tuan Cao", company: "CEO @Life AI", image: TuanCao },
    ],
    type: "Keynote",
    description: "AI-Agents Economy, the “magic ingredient” nurturing a herd of AI-unicorns in Asia",
  },
  {
    timeStart: "10:30",
    timeEnd: "11:10",
    speaker: [
      { name: "Mr. Raghu Banda", company: "Sr Director of AI @SAP", image: RaghuBanda },

    ],
    type: "Keynote",
    description: "AI-Driven Societies: How Emerging Technologies are Shaping the Next Decade",

  },
  {
    timeStart: "11:15",
    timeEnd: "11:50",
    speaker: [{ name: "Mr. Roman Snytsar", company: "Former AI Engineer Manager @Microsoft ", image: RomanSnysar }],
    type: "Keynote",
    description: "AI on Commodity Hardware: a Case for CPU",
  },
];


//DePIN
export const listDePIN: Agenda[] = [
  {
    timeStart: "13:00",
    timeEnd: "13:30",
    speaker: [
      { name: "Organizer", image: EventLogo },
    ],
    type: "",
    description: "Check in guest ",
  },
  {
    timeStart: "13:30",
    timeEnd: "13:35",
    speaker: [
      { name: "Rep. U2U", image: EventLogo },
    ],
    type: "",
    description: "Opening speech ",
  },
  {
    timeStart: "13:35",
    timeEnd: "13:50",
    speaker: [
      { name: "Ms. Chloe Phung", company: "Co-founder & Co-CEO @U2U", image: ChloePhung },
    ],
    type: "Keynote",
    description: "Welcoming guest & U2U keynote , What Lies Ahead for DePIN?",
  },
  {
    timeStart: "13:50",
    timeEnd: "14:05",
    speaker: [
      { name: "Ms. Emily Nguyen", company: "Country Manager @DIN", image: EmilyNguyen },
    ],
    type: "Keynote",
    description: "Data Intelligence Network for AI",
  },
  {
    timeStart: "14:05",
    timeEnd: "14:20",
    speaker: [
      { name: "Mr. Mark Rydon", company: "Co-Founder & CSO @Aethir", image: MarkRydon },
    ],
    type: "Keynote",
    description: "AI & Gaming Infrastructure of the Future",
  },
  {
    timeStart: "14:20",
    timeEnd: "14:55",
    speaker: [
      { name: "Ms. Linh Pham", company: "Regional Head of Growth (SEA), CoinEx", image: LinhPham },
      { name: "Ms. Monique Bekker", company: "Head of Marketing @Blocx", image: MoniqueBekker },
      { name: "Mr. Tony", company: "Vietnam General Manager, Lbank", image: TonyLbank },
      // { name: " Rep. @Lbank", image: EventLogo },
    ],
    type: "Panel Discussion",
    description: "Decentralization: Why It Matters and How DePIN Leads the Way",
  },
  {
    timeStart: "14:55",
    timeEnd: "15:45",
    speaker: [
      { name: "Organizer", image: EventLogo },
    ],
    type: "",
    description: "Startup Showcase",
  },
  {
    timeStart: "15:45",
    timeEnd: "15:55",
    speaker: [
      { name: "Mr. Ryan Bui", company: "Ecosystem Director @U2U", image: RyanBui },
    ],
    type: "Keynote",
    description: "How U2U Empowers DePIN Startups for Success",
  },
  {
    timeStart: "15:55",
    timeEnd: "16:30",
    speaker: [
      { name: "Ms. Cathy Zhu", company: "Venture Partner @RockTree Capital", image: CathyZhu },
      { name: "Mr. Peter Hoang Nguyen", company: "CEO & Founder @Medoo", image: Peter },
      { name: "Mr. Tony", company: "CEO, Ermis Network", image: Tony },
      { name: "Mr. Kiet Le", company: "Investment Director @IDG Capital Vietnam", image: KietLe },

    ],
    type: "Panel Discussion",
    description: "When AI meets RWA and DePIN: What's next?",
  },
  {
    timeStart: "16:30",
    timeEnd: "16:40",
    type: "",
    description: "Break time",
  },
  {
    timeStart: "16:40",
    timeEnd: "16:50",
    speaker: [
      { name: "Mr. Garlan", company: "CMO @WearFit AI", image: Garlan },
    ],
    type: "Keynote",
    description: "Revolutionize wearables and the mass adoption for blockchain",
  },
  {
    timeStart: "16:50",
    timeEnd: "17:05",
    speaker: [
      { name: "Organizer", image: EventLogo },
    ],
    type: "",
    description: "Q&A Questions & Giveaway",
  },
  {
    timeStart: "17:05",
    timeEnd: "17:15",
    speaker: [
      { name: "Organizer", image: EventLogo },
    ],
    type: "",
    description: "Thank you note ",
  },
  {
    timeStart: "17:15",
    timeEnd: "17:25",
    speaker: [
      { name: "Organizer", image: EventLogo },
    ],
    type: "",
    description: "Announce winners & Certificate (Top 5)",
  },
  {
    timeStart: "17:25",
    timeEnd: "17:30",
    speaker: [
      { name: "Organizer", image: EventLogo },
    ],
    type: "Closing",
    description: "",
  },
];
export const listDePIN2: Agenda[] = [
  {}
];


//Side Event

export const listSideEvent: SideEvent[] = [
  {
    time: "9:00 - 12:00",
    day: "3-4",
    month: "December",
    year: "2024",
    host: "AIxBlock",
    type: "Free",
    event: "Next-Gen Tech: AI Meets Blockchain",
    description: "Join AIxBlock at VTIS 2024 to explore how AI and blockchain are reshaping tech. Connect with top leaders from Google, SAP, Oracle, FPT AI, VNPAY, and more in this groundbreaking discussion.",
    registerLink: "https://lu.ma/ig63h51e",
    image: AIxBlock
  },
  {
    time: "13:00 - 17:30",
    day: "3",
    month: "December",
    year: "2024",
    host: "U2U",
    type: "Free",
    event: "DePIN Alliance: Pioneering DePIN - Powering Impact",
    description: "​DePIN Alliance: Pioneering DePIN - Powering Impact, continuing the DePIN Alliance event series, will gather visionaries and leaders focused on reshaping infrastructure through decentralized technology, hosted by U2U Network as part of the four stages of the Vietnam Tech Impact Summit (VTIS) 2024.",
    registerLink: "https://lu.ma/uuwzdyql",
    image: U2U
  },
  {
    time: "9:00 - 14:00",
    day: "4",
    month: "December",
    year: "2024",
    host: "Holdstation",
    type: "Invite-only",
    event: "Hanoise",
    description: "For the first time ever, Technology, Finance, Blockchain, and AI join forces for a night you’ll never forget in Hanoi.\n" +
        "\n" +
        "​Get ready for an electrifying experience brought to you by Holdstation, FPT, and SSI! Join us at HANOISE, the after-party that blends Hanoi’s vibrant culture with a cutting-edge nightlife vibe.",
    registerLink: "https://lu.ma/hanoise",
    image: Hanoise
  },


]