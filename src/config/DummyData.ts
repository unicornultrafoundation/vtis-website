import { StaticImageData } from "next/image";
import NguyenDuyHung from "@/assets/images/agenda/NguyenDuyHung.png";
import EventLogo from "@/assets/images/agenda/default-image.png";
import BinhTran from "@/assets/images/agenda/Binh Tran.png";
import ChloePhung from "@/assets/images/agenda/Chloe Phung.png";
import DonLam from "@/assets/images/agenda/Don Lam.png";
import VinneshSukumar from "@/assets/images/agenda/Dr. Vinesh Sukumar _  Senior Director - Head of AI_ML Product Management, Qualcomm.png";
import HaDao from "@/assets/images/agenda/Ha Dao.png";
import HoangNamTien from "@/assets/images/agenda/Hoang Nam Tien.png";
import HunngBui from "@/assets/images/agenda/Hung Bui.png";
import KavithaPrasad from "@/assets/images/agenda/Kavitha Prasad _ General Manager of AI, AWS.png";
import LynnHoang from "@/assets/images/agenda/Lynn Hoang.png";
import NestorCamilo from "@/assets/images/agenda/Nestor Camilo.png";
import ProfessorFabioCuzzolin from "@/assets/images/agenda/Professor Fabio Cuzzolin.png";
import Queenie from "@/assets/images/agenda/Queenie.png";
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


import SofM from "@/assets/images/agenda/Le Quang Duy (SofM).png";
import MarkChu from "@/assets/images/agenda/Mark Chu.png";
import GiangNguyen from "@/assets/images/agenda/Giang Nguyen.png";
import LeSyNguyen from "@/assets/images/agenda/Le Sy Nguyen.png";
import JoyLam from "@/assets/images/agenda/Joy Lam.png";
import Malcolm from "@/assets/images/agenda/Malcolm Wright.png";
// import LeBaoNguyen from "@/assets/images/agenda/LeBao";
import NghiemXuanHuy from "@/assets/images/agenda/Nghiem Xuan Huy.png";
import DoBui from "@/assets/images/agenda/Do Bui.png";
import DoVietHung from "@/assets/images/agenda/Do Viet Hung .png";
import HoangVietAnh from "@/assets/images/agenda/Hoang Viet Anh.png";
import LeThiLeHang from "@/assets/images/agenda/Le Thi Le Hang.png";
// import NamTran from "@/assets/images/agenda/Nam Tran.png";
import NguyenPhanDung from "@/assets/images/agenda/Nguyen Phan Dung .png";


export interface Speaker {
  name?: string;
  company?: string;
  image?: StaticImageData;
}

export interface Agenda {
  timeStart: string;
  timeEnd: string;
  speaker: Speaker[];
  type?: string;
  description: string;
}


export const listAgendaGeneral: Agenda[] = [
  {
    timeStart: "9:00",
    timeEnd: "9:20",
    speaker: [{ name: "Opening Performance ",image: EventLogo }],
    type: "",
    description: "Opening Performance",

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
    speaker: [{ name: "Keynote Speech of Management", image: EventLogo }],
    type: "Keynote",
    description: "Opening Performance",
  },
  {
    timeStart: "10:30",
    timeEnd: "11:15",
    speaker: [
      { name: "Dr. Vinesh Sukumar", company: "Qualcomm", image: VinneshSukumar },
      { name: "Lan Tran", company: "Vietinbank", image: TranCongQuynhLan },
      { name: "Hung Bui", company: "VinAI", image: HunngBui },
      { name: "Kavitha Prasad", company: "AWS", image: KavithaPrasad },
      { name: "Ha Dao (Mod)", company: "AIxBlock", image: HaDao },
    ],
    type: "Panel Discussion",
    description: "Generative AI - Business Impact and Future Potential",
  },
  {
    timeStart: "11:15",
    timeEnd: "11:55",
    speaker: [
      { name: "Malcolm", company: "OKX", image: Malcolm },
      { name: "Robert Mcdonald", company: "Bybit", image: RobertMcDonald },
      { name: "Joy Lam", company: "Binance", image: JoyLam },
      { name: "Le Bao Nguyen (Mod)", company: "SSI Digital", image: EventLogo },
    ],
    type: "Panel Discussion",
    description: "The Legal Frontier of Digital Assets: Benefits, Challenges, and Global Experiences",
  },

  {
    timeStart: "11:55",
    timeEnd: "12:05",
    speaker: [
      { name: "Don Lam", company: "CEO, Vinacapital", image: DonLam },
    ],
    type: "Keynote",
    description: "Technology Investment From Vinacapital's View",
  },



  {
    timeStart: "13:30",
    timeEnd: "14:00",
    speaker: [{ name: "COO Kucoin", image: EventLogo }],
    type: "Keynote",
    description: "Tech Impact",
  },
  {
    timeStart: "14:05",
    timeEnd: "14:50",
    speaker: [
      { name: "Nguyen Trung Trang", company: "Co-Founder & CPO @SSID", image: EventLogo },
      { name: "Queenie", company: "Tether", image: Queenie },
      { name: "Trung Banh", company: "Holdstation", image: TrungBanh },
      { name: "Le Sy Nguyen", company: "Bitget", image: LeSyNguyen },
      { name: "Chloe Phung (Mod)", company: "U2U Network", image: ChloePhung },
    ],
    type: "Panel Discussion",
    description: "Blockchain and Its Applications in Daily Life",
  },
  {
    timeStart: "14:50",
    timeEnd: "15:10",
    speaker: [{ name: "Rep. Bitget", image: EventLogo }],
    type: "Keynote",
    description: "How Bitget Supports Innovation & Tech Impact",
  },
  {
    timeStart: "15:15",
    timeEnd: "15:45",
    speaker: [
      { name: "Giang Nguyen", company: "DNSE", image: GiangNguyen },
      { name: "Nghiem Xuan Huy", company: "Finhay", image: NghiemXuanHuy },
      { name: "Lynn Hoang", company: "Binance", image: LynnHoang },
      { name: "Hang Le (Mod)", company: "SSI", image: LeThiLeHang },
    ],
    type: "Panel Discussion",
    description: "The Future of Fintech in the Next 5 Years",
  },
  {
    timeStart: "15:45",
    timeEnd: "16:00",
    speaker: [{ name: "Rep. Hyratek", image: EventLogo }],
    type: "Keynote",
    description: "Tech Impact",
  },
  {
    timeStart: "16:05",
    timeEnd: "16:50",
    speaker: [
      { name: "Raghu Banda", company: "SAP", image: RaghuBanda },
      { name: "Tuan Cao", company: "Life AI", image: TuanCao },
      { name: "Binh Tran", company: "AVV", image: BinhTran },
      { name: "Prof. Fabio Cuzzolin", company: "Oxford University", image: ProfessorFabioCuzzolin },
      { name: "Rep. Hyratek", image: EventLogo },
      { name: "Ha Dao (Mod)", company: "AIxBlock", image: HaDao },

    ],
    type: "Panel Discussion",
    description: "The Future of AI - Open Source and Decentralized or Closed Source and Centralized?",
  },
  {
    timeStart: "16:55",
    timeEnd: "17:30",
    speaker: [
      { name: "Rep. IDG", image: EventLogo },
      { name: "Rep. JDI", image: EventLogo },
      { name: "Rep. Aethir", image: EventLogo },
      { name: "U2U (Mod)", image: EventLogo },
    ],
    type: "Panel Discussion",
    description: "Panel Discussion with Vietnamese Blockchain Startups",
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
      { name: "Shirsha Chaudhuri ", company: "Thomson Reuters", image: ShirshaRay },
      { name: "Raghu Banda", company: "SAP", image: RaghuBanda },
      { name: "Nestor Camilo", company: "Oracle", image: NestorCamilo },
      { name: "Tran Manh Nam", company: "VNPay", image: EventLogo },
      { name: "CEO", company: "Strant", image: EventLogo },
      { name: "Ha Dao (Mod)", company: "AIxBlock", image: HaDao },
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
      { name: "Rep. Bitget", image: EventLogo },
      { name: "Rep. Bingx", image: EventLogo },
      { name: "Rep. KuCoin", image: EventLogo },
      { name: "Rep. MEXC (Mod)", image: EventLogo },

    ],
    type: "Panel Discussion",
    description: "Future Innovations and Security in Digital Asset",
  },
  {
    timeStart: "10:50",
    timeEnd: "11:20",
    speaker: [
      { name: "Rep. Binance",image: EventLogo },
    ],
    type: "Keynote",
    description: "How Binance Supports Innovation & Tech Impact",
  },
  {
    timeStart: "11:25",
    timeEnd: "12:00",
    speaker: [
      { name: "Rep. K300", image: EventLogo },
      { name: "Rep. ATX", image: EventLogo },
      { name: "Rep. Maxx Capital", image: EventLogo },
      { name: "Rep. Holdstation", image: EventLogo },
      { name: "Rep. VBU (Mod)", image: EventLogo },
    ],
    type: "Panel Discussion",
    description: "Panel Discussion with Vietnamese Blockchain Startups",
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
      { name: "Do Bui", company: "Thinkzone", image: DoBui },
      { name: "Nguyen Phan Dung", company: "SSIAM", image: NguyenPhanDung },
      { name: "Rep. Kucoin", image: EventLogo },
      { name: "Rep. EVG", image: EventLogo },
      { name: "Loi Luu (Mod)", company: "Kyber Network", image: EventLogo },

    ],
    type: "Panel Discussion",
    description: "Panel Discussion with Web2 & Web3 Ventures",
  },
  {
    timeStart: "14:35",
    timeEnd: "14:55",
    speaker: [{ name: "Rep. Bingx", image: EventLogo }],
    type: "Keynote",
    description: "How Bingx Supports Innovation & Tech Impact",
  },
  {
    timeStart: "15:00",
    timeEnd: "15:40",
    speaker: [
      { name: "", image: EventLogo },
    ],
    type: "Panel Discussion",
    description: "DApps, Wallets, and Blockchain Ecosystems",
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
      { name: "Do Viet Hung", company: "Viresa", image: DoVietHung },
      { name: "Hoang Viet Anh", company: "CEO, FPT Telecom", image: HoangVietAnh },
      { name: "Le Quang Duy (SofM)", company: "LoL World Championship Runner-Up", image: SofM },
      { name: "Mark Chu", company: "The Flash ", image: MarkChu },
    ],
    type: "Panel Discussion",
    description: "Gaming's Contribution to Life and Economy",
  },
  {
    timeStart: "16:40",
    timeEnd: "17:10",
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
    speaker: [{ name: "Rep. VNPAY", image: EventLogo }],
    type: "Keynote",
    description: "",
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
    speaker: [{ name: "Tuan Cao",company:"CEO/Founder @Life AI " ,image: TuanCao }],
    type: "Keynote",
    description: "AI-Agents Economy, the “magic ingredient” nurturing a herd of AI-unicorns in Asia",
  },
  {
    timeStart: "10:30",
    timeEnd: "11:10",
    speaker: [
      { name: "Raghu Banda", company: "Sr Director of AI @SAP  ", image: RaghuBanda },
    ],
    type: "Keynote",
    description: "AI-Driven Societies: How Emerging Technologies are Shaping the Next Decade",

  },
  {
    timeStart: "11:15",
    timeEnd: "11:50",
    speaker: [{ name: "Roman Snytsar",company:"Former AI Engineer Manager @Microsoft " ,image: RomanSnysar }],
    type: "Keynote",
    description: "AI on Commodity Hardware: a Case for CPU",
  },
];