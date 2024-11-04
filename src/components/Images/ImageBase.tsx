import Image, { ImageProps } from "next/image";
import React from "react";

import arrowUpIcon from "@/assets/images/arrow-up-icon.png";
import closeIcon from "@/assets/images/close-icon.png";
import footerImg from "@/assets/images/footer-image.png";
import fptLogo from "@/assets/images/fpt-logo.png";
import getTicketImg from "@/assets/images/get-ticket-img.png";
import homeBanner from "@/assets/images/home-banner.png";
import landingLogo from "@/assets/images/landing-logo.png";
import sidebarMenuIcon from "@/assets/images/sidebar-menu-icon.png";
import ssidLogo from "@/assets/images/ssid-logo.png";
import ticket from "@/assets/images/ticket.png";
import section2Img from "@/assets/svg/section2-img.svg";
import aiImg from "@/assets/svg/section3-ai-img.svg";
import blockchainImg from "@/assets/svg/section3-blockchain-img.svg";
import fintechImg from "@/assets/svg/section3-fintech-img.svg";
import gameImg from "@/assets/svg/section3-game-img.svg";

export type IconProps = React.SVGProps<SVGSVGElement>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImageBase: any = () => null;

const imageComponents = [
  { name: "LandingLogo", src: landingLogo },
  { name: "GetTicketImg", src: getTicketImg },
  { name: "SSIDLogo", src: ssidLogo },
  { name: "FPTLogo", src: fptLogo },
  { name: "FooterImage", src: footerImg },
  { name: "SidebarMenuIcon", src: sidebarMenuIcon },
  { name: "CloseIcon", src: closeIcon },
  { name: "ArrowUpIcon", src: arrowUpIcon },
  { name: "Section2Img", src: section2Img },
  { name: "AIImg", src: aiImg },
  { name: "FintechImg", src: fintechImg },
  { name: "BlockchainImg", src: blockchainImg },
  { name: "GameImg", src: gameImg },
];

imageComponents.forEach(({ name, src }) => {
  const Component: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
    <Image alt="logo" src={src} {...props} />
  );
  Component.displayName = `ImageBase.${name}`;
  ImageBase[name] = Component;
});

export default ImageBase;

// Define LandingLogo as a typed React component to allow displayName
const LandingLogo: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
  <Image alt="logo" src={landingLogo} {...props} />
);

// Add displayName to LandingLogo
LandingLogo.displayName = "ImageBase.LandingLogo";

// Attach LandingLogo to ImageBase
ImageBase.LandingLogo = LandingLogo;

const GetTicketImg: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
  <Image alt="logo" src={getTicketImg} {...props} />
);
// Add displayName to LandingLogo
GetTicketImg.displayName = "ImageBase.GetTicketImg";
// Attach LandingLogo to ImageBase
ImageBase.GetTicketImg = GetTicketImg;

const FooterImage: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
  <Image alt="logo" src={footerImg} {...props} />
);
// Add displayName to LandingLogo
FooterImage.displayName = "ImageBase.FooterImage";
// Attach LandingLogo to ImageBase
ImageBase.FooterImage = FooterImage;

const Ticket: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
  <Image alt="logo" src={ticket} {...props} />
);
ImageBase.Ticket = Ticket;

const HomeBanner: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
  <Image alt="logo" src={homeBanner} {...props} />
);
ImageBase.HomeBanner = HomeBanner;

const SidebarMenuIcon: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
  <Image alt="logo" src={sidebarMenuIcon} {...props} />
);
ImageBase.SidebarMenuIcon = SidebarMenuIcon;

const CloseIcon: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
  <Image alt="logo" src={closeIcon} {...props} />
);
ImageBase.CloseIcon = CloseIcon;

const ArrowUpIcon: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
  <Image alt="logo" src={arrowUpIcon} {...props} />
);
ImageBase.ArrowUpIcon = ArrowUpIcon;

const Section2Img: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
  <Image alt="logo" src={section2Img} {...props} />
);
ImageBase.Section2Img = Section2Img;

const AIImg: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
  <Image alt="logo" src={aiImg} {...props} />
);
ImageBase.AIImg = AIImg;

const FintechImg: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
  <Image alt="logo" src={fintechImg} {...props} />
);
ImageBase.FintechImg = FintechImg;

const BlockchainImg: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
  <Image alt="logo" src={blockchainImg} {...props} />
);
ImageBase.BlockchainImg = BlockchainImg;

const GameImg: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
  <Image alt="logo" src={gameImg} {...props} />
);
ImageBase.GameImg = GameImg;
