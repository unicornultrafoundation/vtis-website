import { StaticImageData } from "next/image";
import NguyenDuyHung from "@/assets/images/agenda/NguyenDuyHung.png";
import EventLogo from "@/assets/images/agenda/default-image.png";
import BinhTran from "@/assets/images/agenda/Binh Tran.png";
// import ChloePhung from "@/assets/images/agenda/Chloe Phung.png";
import DonLam from "@/assets/images/agenda/Don Lam.png";
// import VinneshSukumar from "@/assets/images/agenda/VineshSukumar.png";
import HaDao from "@/assets/images/agenda/Ha Dao.png";
import HoangNamTien from "@/assets/images/agenda/Hoang Nam Tien.png";
import HunngBui from "@/assets/images/agenda/Hung Bui.png";
import KavithaPrasad from "@/assets/images/agenda/KavithaPrasad.png";
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
import LeBaoNguyen from "@/assets/images/agenda/Le Bao Nguyen.png";
import NghiemXuanHuy from "@/assets/images/agenda/Nghiem Xuan Huy.png";
import DoBui from "@/assets/images/agenda/Do Bui.png";
import DoVietHung from "@/assets/images/agenda/Do Viet Hung .png";
import HoangVietAnh from "@/assets/images/agenda/Hoang Viet Anh.png";
import LeThiLeHang from "@/assets/images/agenda/Le Thi Le Hang.png";
// import NamTran from "@/assets/images/agenda/Nam Tran.png";
import NguyenPhanDung from "@/assets/images/agenda/Nguyen Phan Dung .png";
import NguyenTrungTrang from "@/assets/images/agenda/Nguyen Trung Trang.png";
import TranManhNam from "@/assets/images/agenda/Tran Manh Nam.png";

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


export interface SideEvent {
  time: string;
  day: string;
  month: string;
  year: string;
  host: string;
  type: string;
  event: string;
}

export const listAgendaGeneral: Agenda[] = [
  {
    timeStart: "9:00",
    timeEnd: "9:20",
    speaker: [{ name: "Opening Performance ",image: EventLogo }],
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
      { name: "Ms. Kavitha Prasad", company: "General Manager of AI @AWS", image: KavithaPrasad },
      { name: "Mr. Dang Do", company: "CTO @Strant", image: EventLogo },
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
      { name: "Moderator: Mr. Le Bao Nguyen", company: "Deputy Director @SSI Digital", image: LeBaoNguyen },
    ],
    type: "Panel Discussion",
    description: "The Legal Frontier of Digital Assets: Benefits, Challenges, and Global Experiences",
  },

  {
    timeStart: "11:55",
    timeEnd: "12:05",
    speaker: [
      { name: "Mr. Don Lam", company: "CEO, Vinacapital", image: DonLam },
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
      { name: "Mr. Nguyen Trung Trang", company: "Co-Founder & CPO @SSID", image: NguyenTrungTrang },
      { name: "Ms. Queenie", company: "Vietnam Country Manager @Tether", image: Queenie },
      { name: "Mr. Trung Banh", company: "Co-Founder / Chief Product Officer @Holdstation", image: TrungBanh },
      { name: "Mr. Le Sy Nguyen", company: "Vietnam Country Head @Bitget", image: LeSyNguyen },
      { name: "Moderator: ", image: EventLogo },
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
      { name: "Mr. Giang Nguyen", company: "Founder @DNSE", image: GiangNguyen },
      { name: "Mr. Nghiem Xuan Huy", company: "Founder @Finhay", image: NghiemXuanHuy },
      { name: "Ms. Lynn Hoang", company: "Country Manager @Binance", image: LynnHoang },
      { name: "Ms. Le Lan Chi", company: "CEO @Zalopay", image: EventLogo },
      { name: "Moderator: Hang Le", company: "CSO @SSI", image: LeThiLeHang },
    ],
    type: "Panel Discussion",
    description: "The Future of Fintech in the Next 5 Years",
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
      { name: "Prof. Fabio Cuzzolin", company: "Prof of AI, Director of AI Labs @Oxford Brookes, Oxford University", image: ProfessorFabioCuzzolin },
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
      { name: "Rep. IDG", image: EventLogo },
      { name: "Rep. JDI", image: EventLogo },
      { name: "Rep. Aethir", image: EventLogo },
      { name: "Moderator: Rep.U2U", image: EventLogo },
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
      { name: "Ms. Shirsha Chaudhuri", company: "Director of Eng @Thomson Reuters", image: ShirshaRay },
      { name: "Mr. Raghu Banda", company: "Sr Director of AI @SAP", image: RaghuBanda },
      { name: "Mr. Nestor Camilo", company: " Cloud Adoption Director, AI @Oracle", image: NestorCamilo },
      { name: "Mr. Tran Manh Nam", company: "Director of Corporate Division @VNPay", image: TranManhNam },
      { name: "CEO", company: "Strant", image: EventLogo },
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
      { name: "Rep. Bitget", image: EventLogo },
      { name: "Rep. Bingx", image: EventLogo },
      { name: "Rep. KuCoin", image: EventLogo },
      { name: "Moderator: Rep. MEXC", image: EventLogo },

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
      { name: "Moderator: Rep. VBU", image: EventLogo },
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
      { name: "Do Bui", company: "Founder Thinkzone", image: DoBui },
      { name: "Nguyen Phan Dung", company: "Deputy CEO, SSIAM", image: NguyenPhanDung },
      { name: "Rep. Kucoin", image: EventLogo },
      { name: "Rep. EVG", image: EventLogo },
      { name: "Moderator: Loi Luu", company: "Kyber Network", image: EventLogo },

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
      { name: "Mr. Victor J", company: "Founder @Manta Network", image: EventLogo },
      { name: "Mr. Marine", company: "Head of Partnership @Optimism", image: EventLogo },
      { name: "Mr. Eric Alexander",company:"Founding member @Access Singapore", image: EventLogo },
      { name: "Rep. EVG", image: EventLogo },
      { name: "Moderator: Ms. Quinn Quinn", company: "Founder @Suci Blockchain Hub", image: EventLogo },
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
      { name: "Do Viet Hung", company: "President @Viresa", image: DoVietHung },
      { name: "Hoang Viet Anh", company: " CEO @FPT Telecom", image: HoangVietAnh },
      { name: "Le Quang Duy (SofM)", company: "LoL World Championship Runner-Up", image: SofM },
      { name: "Moderator: Mr. Mark Chu", company: "CEO @The Flash  ", image: MarkChu },
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
    speaker: [{ name: "Mr. Roman Snytsar",company:"Former AI Engineer Manager @Microsoft " ,image: RomanSnysar }],
    type: "Keynote",
    description: "AI on Commodity Hardware: a Case for CPU",
  },
];






//Side Event

export const listSideEvent: SideEvent[] = [
  {
    time: "13:00 - 17:00",
    day: "11",
    month: "November",
    year: "2021",
    host: "SSI",
    type: "Free",
    event: "SSI Techday",
  },
  {
    time: "13:00 - 17:00",
    day: "11",
    month: "November",
    year: "2021",
    host: "FPT",
    type: "Invite Only",
    event: "FPT Techday",
  },
  {
    time: "13:00 - 17:00",
    day: "11",
    month: "November",
    year: "2021",
    host: "U2U",
    type: "Free",
    event: "U2U Techday",
  },
  {
    time: "13:00 - 17:00",
    day: "11",
    month: "November",
    year: "2021",
    host: "Binance",
    type: "Invite Only",
    event: "Binance Techday",
  },
  {
    time: "13:00 - 17:00",
    day: "11",
    month: "November",
    year: "2021",
    host: "Kucoin",
    type: "Free",
    event: "Kucoin Techday",
  },
  {
    time: "13:00 - 17:00",
    day: "11",
    month: "November",
    year: "2021",
    host: "Bitget",
    type: "Invite Only",
    event: "Bitget Techday",
  },
  {
    time: "13:00 - 17:00",
    day: "11",
    month: "November",
    year: "2021",
    host: "AWS",
    type: "Side Event",
    event: "AWS Techday",
  },
  {
    time: "13:00 - 17:00",
    day: "11",
    month: "November",
    year: "2021",
    host: "VinAI",
    type: "Free",
    event: "VinAI Techday",
  },
]