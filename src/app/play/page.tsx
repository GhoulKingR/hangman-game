"use client";

import Background from "@/components/Background";
import React from "react";
import PickACategory from "@/assets/images/Pick a Category.svg";
import TitleBar from "@/components/TitleBar";
import Link from "next/link";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { categories } from "@/lib";

function page() {
  return (
    <div>
      <Background dim={true} />
      <TitleBar titleImg={PickACategory} />

      <TopRow className="md:w-[680px] xl:w-[1216px] mx-auto">
        {categories.map((v, i) => (
          <Col key={i} xs={12} md={6} xl={4}>
            <Button
              href={`play/${i}`}
              className="w-full flex justify-center items-center p-6 bg-[#2463FF] text-white no-underline rounded-[20px] leading-[120%] trailing-[5%] mb-4 overflow-hidden relative md:py-[63px] md:rounded-[40px] md:text-5xl"
            >
              {v.toUpperCase()}
            </Button>
          </Col>
        ))}
      </TopRow>
    </div>
  );
}

export default page;

const TopRow = styled(Row)`
  @media (min-width: 1400px) {
    margin-top: 91px;
  }
`;

const Button = styled(Link)`
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
