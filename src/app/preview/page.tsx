"use client";

import React from "react";
import Background from "@/components/Background";
import Menu from "@/assets/images/icon-menu.svg";
import Heart from "@/assets/images/icon-heart.svg";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

function Page() {
  const category = "COUNTRY";
  const healthBar = 50;
  const picked = "UNIDO";
  const currentWord: string = "UNITED KINGDOM";

  return (
    <div>
      <Background dim={true} />

      <div className="flex items-center justify-between mt-[46px] mx-[25px] mb-[78px] md:mx-[32px] xxl:max-w-[1216px] xxl:mx-auto">
        <div className="flex items-center">
          <MenuButton className="w-10 h-10 flex justify-center items-center rounded-full border-black border-[1px] md:w-16 md:h-16 xxl:w-24 xxl:h-24">
            <Image
              src={Menu}
              alt="menu"
              className="w-[16.17px] h-[13.62px] md:w-[25.87px] md:h-[21.79px] xxl:w-[38px] xxl:h-8"
            />
          </MenuButton>
          <div className="ml-4 text-white text-[40px] leading-[120%] tracking-[-0.5%] md:text-5xl md:ml-8 xxl:text-[88px]">
            {category}
          </div>
        </div>
        <div className="flex items-center">
          <HealthBar className="rounded-full w-14 h-4 bg-white mr-4 md:w-40 md:h-8 xxl:w-60">
            <div
              style={{ width: `${healthBar}%` }}
              className="h-full rounded-full bg-[#261676]"
            ></div>
          </HealthBar>
          <Image
            src={Heart}
            alt="heart"
            className="w-[26.16px] h-6 md:w-[53.33px] md:h-[48.93px]"
          />
        </div>
      </div>

      <div className="text-white text-center mb-[104px] md:mb-[128px] xxl:mb-[104px]">
        {Array.from<string>(currentWord).map((c, i) =>
          c === " " ? (
            <br key={i} />
          ) : (
            <Tile
              key={i}
              className={`inline-flex items-start text-[40px] items-center leading-[120%] tracking-[5%] bg-[#2463ff] mx-[4px] w-[40px] h-[66px] justify-center items-center mb-[14px] rounded-[12px] md:w-[88px] md:h-[112px] md:rounded-[32px] md:mx-[6px] md:mb-[16px] md:text-[64px] xxl:w-[112px] xxl:h-[128px] xxl:text-[88px] ${
                picked.indexOf(c) === -1 ? "opacity-25 text-[#2463ff]" : ""
              }`}
            >
              {c}
            </Tile>
          )
        )}
      </div>

      <div className="text-[#261676] mx-[25px] xxl:max-w-[1216px] xxl:mx-auto">
        {Array.from<string>("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((c, i) => {
          const thisPicked = picked.indexOf(c) > -1;
          return (
            <KeyTile
              key={i}
              className={`inline-flex text-2xl leading-[120%] tracking-[5%] mx-[4px] w-[28.89px] h-[56px] justify-center items-center mb-[24px] rounded-[8px] md:w-[64px] md:h-[84px] md:rounded-[24px] md:mx-[8px] md:text-5xl xxl:w-[109px] cursor-pointer ${
                thisPicked ? "opacity-25" : "hoverable"
              }`}
            >
              {c}
            </KeyTile>
          );
        })}
      </div>

      <div className="sticky bottom-0 left-0 w-screen p-3 flex justify-center bg-red-400">
        This is a preview, if you want to play the game go to the{" "}
        <Link href="/" className="ml-1">
          main menu
        </Link>
        .
      </div>
    </div>
  );
}

export default Page;

const MenuButton = styled.button`
  background: linear-gradient(to bottom, #fe71fe, #7199ff);
  box-shadow: 0 -5px 0 -1px rgba(157, 45, 245, 0.25) inset;
  @media (min-width: 768px) {
    box-shadow: 0 -6px 0 7px rgba(157, 45, 245, 0.25) inset;
  }
`;

const Tile = styled.div`
  box-shadow: 0 -2px 0 3px #140e66 inset, 0 1px 0 6px #3c74ff inset;
`;

const HealthBar = styled.div`
  padding: 4px;
  @media (min-width: 768px) {
    padding: 10px;
  }
`;

const KeyTile = styled.div`
  background-color: white;
  &.hoverable:hover {
    background-color: #2463ff;
    color: white;
  }
`;
