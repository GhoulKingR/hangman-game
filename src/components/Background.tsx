import React from "react";
import Image from "next/image";
import MobileBg from "../assets/images/background-mobile.svg";
import TabletBg from "../assets/images/background-tablet.svg";
import DesktopBg from "../assets/images/background-desktop.svg";

type Props = {
  dim?: boolean;
};
function Background(props: Props) {
  const dim = props.dim ?? false;

  return (
    <>
      <Image
        src={MobileBg}
        alt="background"
        className="md:hidden fixed min-w-full min-h-full top-0 left-0 z-[-2]"
      />
      <Image
        src={TabletBg}
        alt="background"
        className="hidden md:block fixed min-w-full min-h-full top-0 left-0 z-[-2]"
      />
      <Image
        src={DesktopBg}
        alt="background"
        className="hidden lg:block fixed min-w-full min-h-full top-0 left-0 z-[-2]"
      />
      {dim && (
        <div className="z-[-1] fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-[#1A043A] via-[#151278] via-70% to-[#2B1677] opacity-75"></div>
      )}
    </>
  );
}

export default Background;
