import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Back from "@/assets/images/icon-back.svg";

type Props = {
  titleImg: string;
};
function TitleBar(props: Props) {
  return (
    <div className="mt-8 xl:mt-20 mx-6 mb-20 md:mb-[100px] xl:mb-16 md:mx-auto md:w-[680px] xl:w-[1212px] flex justify-between">
      <Button
        href="/"
        className="rounded-full w-10 h-10 md:w-16 md:h-16 flex justify-center items-center border-[1px] border-black overflow-hidden relative xl:w-[94px] xl:h-[94px]"
      >
        <Image
          src={Back}
          alt="back"
          className="w-[17.45px] h-[16.17px] md:w-[27.91px] md:h-[25.87px] xl:w-[41px] xl:h-[38px]"
        />
      </Button>
      <div className="md:flex-grow md:pl-[104.5px] xl:pl-[288px]">
        <Image
          src={props.titleImg}
          alt="how to play"
          className="md:w-[343px] xl:w-[448px]"
        />
      </div>
    </div>
  );
}

export default TitleBar;

const Button = styled(Link)`
  background: linear-gradient(to bottom, #fe71fe, #7199ff);
  box-shadow: 0 -5px 0 -1px rgba(157, 45, 245, 0.25) inset;
  @media (min-width: 768px) {
    box-shadow: 0 -6px 0 7px rgba(157, 45, 245, 0.25) inset;
  }
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
