"use client";
import Image from "next/image";
import Link from "next/link";
import Text from "../assets/images/logo.svg";
import TextBigger from "../assets/images/logo-bigger.png";
import Play from "../assets/images/icon-play.svg";
import styled from "styled-components";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main>
      <Background />
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-gradient-to-b from-[#344ABA] to-[rgba(0,20,121,.8)] rounded-[48px] md:rounded-[72px] shadow-[0_-8px_0_4px_#140E66_inset,_0_6px_0_8px_#2463FF_inset] w-[324px] md:w-[592px] relative">
          <div className="absolute top-[-50px] md:top-[-110px]">
            <Image
              src={Text}
              alt="logo"
              className="md:hidden w-[263px] h-[130.2px] ml-[30px]"
            />
            <Image
              src={TextBigger}
              alt="logo"
              className="hidden md:block w-[373.69px] h-auto ml-[111px]"
            />
          </div>
          <div className="mt-[138px]">
            <Button
              href="/play"
              className="relative cursor-pointer overflow-hidden  border-[1px] border-black w-40 h-40 md:w-[200px] md:h-[200px] flex justify-center items-center mx-auto rounded-full"
            >
              <Image
                src={Play}
                alt="play"
                className="w-[52.83px] h-[49.81px] md:w-[66.04px] md:h-[62.26px]"
              />
            </Button>
          </div>
          <div className="flex w-full justify-center mt-[57px]">
            <Button2
              href="/how-to-play"
              className="flex justify-center items-center text-[32px] tracking-[5%] mb-[64px] leading-[120%] rounded-full w-[260px] h-[62px] bg-[#2463FF] relative overflow-hidden no-underline text-white"
            >
              HOW TO PLAY
            </Button2>
          </div>
        </div>
      </div>
    </main>
  );
}

const Button = styled(Link)`
  background: linear-gradient(to bottom, #fe71fe, #7199ff);
  box-shadow: 0 -4px 0 5px #243041 inset, 0 -12px 0 11px #9d2df5 inset;
  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.25); /* White with 50% transparency */
    pointer-events: none; /* Ensure the overlay doesn't interfere with interaction */
  }
`;

const Button2 = styled(Link)`
  box-shadow: 0 -2px 0 3px #140e66 inset, 0 1px 0 6px #3c74ff inset;
  &:hover::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.25); /* White with 50% transparency */
    pointer-events: none; /* Ensure the overlay doesn't interfere with interaction */
  }
`;
