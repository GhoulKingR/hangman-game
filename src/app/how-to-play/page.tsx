"use client";

import Background from "@/components/Background";
import React from "react";
import HowToPlay from "@/assets/images/How to Play.svg";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import TitleBar from "@/components/TitleBar";

export default function CategoryPick() {
  type Texts = {
    num: string;
    head: string;
    text: string;
  }[];
  const texts: Texts = [
    {
      num: "01",
      head: "CHOOSE A CATEGORY",
      text: "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      num: "02",
      head: "GUESS LETTERS",
      text: "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
    },
    {
      num: "03",
      head: "WIN OR LOOSE",
      text: "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
    },
  ];

  return (
    <div>
      <Background dim={true} />
      <TitleBar titleImg={HowToPlay} />
      <Row className="flex justify-center">
        {texts.map((v, i) => (
          <TopLevelCol key={i} xs={12} xxl={3}>
            <div className="mx-6 mb-6 p-8 md:w-[680px] xl:w-full xl:h-[550px] md:mx-auto xl:md-0 bg-white rounded-[20px] leading-[120%] tracking-[5%] justify-center items-center xl:flex xl:rounded-[40px]">
              <Row>
                <Col
                  xs={2}
                  xxl={12}
                  className="md:flex justify-center items-center xl:mb-10"
                >
                  <div className="text-[#2463FF] text-2xl md:text-[88px] xl:h-[88px] xl:flex justify-center items-center">
                    {v.num}
                  </div>
                </Col>
                <Col xs={10} xxl={12}>
                  <Row>
                    <div className="text-[#261676] text-2xl md:text-[40px] xl:text-center xl:mb-10">
                      {v.head}
                    </div>
                  </Row>
                  <InnerP>
                    <p className="hidden md:block text-[#887DC0] xl:text-[26px] xl:text-center leading-[120%] tracking-[5%]">
                      {v.text}
                    </p>
                  </InnerP>
                </Col>
                <Col xxl={12}>
                  <p className="md:hidden text-[#887DC0] mt-3.5">{v.text}</p>
                </Col>
              </Row>
            </div>
          </TopLevelCol>
        ))}
      </Row>
    </div>
  );
}

const InnerP = styled(Row)`
  @media (min-width: 768px) {
    margin-top: "16px";
  }
`;

const TopLevelCol = styled(Col)`
  @media (min-width: 1400px) {
    &:first-of-type {
      margin-right: 32px;
    }
    &:last-of-type {
      margin-left: 32px;
    }
  }
`;
