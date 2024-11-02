import Image, { ImageProps } from "next/image";
import React from "react";

import footerImg from "@/assets/images/footer-image.png";
import getTicketImg from "@/assets/images/get-ticket-img.png";
import landingLogo from "@/assets/images/landing-logo.png";

export type IconProps = React.SVGProps<SVGSVGElement>;

const ImageBase = () => {
  return null;
};

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
