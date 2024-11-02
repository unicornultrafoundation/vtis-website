import Image, { ImageProps } from "next/image";
import React from "react";

import footerImg from "@/assets/images/footer-image.png";
import fptLogo from "@/assets/images/fpt-logo.png";
import getTicketImg from "@/assets/images/get-ticket-img.png";
import landingLogo from "@/assets/images/landing-logo.png";
import ssidLogo from "@/assets/images/ssid-logo.png";

export type IconProps = React.SVGProps<SVGSVGElement>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImageBase: any = () => null;

const imageComponents = [
  { name: "LandingLogo", src: landingLogo },
  { name: "GetTicketImg", src: getTicketImg },
  { name: "SSIDLogo", src: ssidLogo },
  { name: "FPTLogo", src: fptLogo },
  { name: "FooterImage", src: footerImg },
];

imageComponents.forEach(({ name, src }) => {
  const Component: React.FC<Omit<ImageProps, "src" | "alt">> = (props) => (
    <Image alt="logo" src={src} {...props} />
  );
  Component.displayName = `ImageBase.${name}`;
  ImageBase[name] = Component;
});

export default ImageBase;
