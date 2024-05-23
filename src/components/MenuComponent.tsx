import React from "react";
import styled from "styled-components";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  image: StaticImageData;
  continue: () => void;
};
function MenuComponent(props: Props) {
  const router = useRouter();

  return (
    <div>
      <Container className="w-screen h-screen flex justify-center items-center fixed top-0 left-0">
        <div className="bg-gradient-to-b from-[#344ABA] to-[rgba(0,20,121,.8)] rounded-[48px] md:rounded-[72px] shadow-[0_-8px_0_4px_#140E66_inset,_0_6px_0_8px_#2463FF_inset] w-[324px] md:w-[592px] relative">
          <div className="absolute top-[-30px] md:top-[-50px]">
            <Image
              src={props.image}
              alt="logo"
              className="w-[186px] ml-[69px] md:w-[265px] md:ml-[163px]"
            />
          </div>
          <div className="mt-[104px] mb-[87px]">
            <Button2
              onClick={props.continue}
              className="flex justify-center items-center text-[32px] tracking-[5%] mb-[34px] leading-[120%] rounded-full w-fit px-[64px] h-[62px] bg-[#2463FF] relative overflow-hidden no-underline text-white mx-auto"
            >
              CONTINUE
            </Button2>
            <Button2
              onClick={() => router.push("/play")}
              className="flex justify-center items-center text-[32px] tracking-[5%] mb-[34px] leading-[120%] rounded-full w-fit px-[64px] h-[62px] bg-[#2463FF] relative overflow-hidden no-underline text-white mx-auto"
            >
              NEW CATEGORY
            </Button2>
            <Button
              onClick={() => router.push("/")}
              className="flex justify-center items-center text-[32px] tracking-[5%] leading-[120%] rounded-full w-fit px-[64px] h-[62px] relative overflow-hidden no-underline text-white mx-auto"
            >
              QUIT GAME
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MenuComponent;

const Button2 = styled.button`
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

const Button = styled(Button2)`
  background: linear-gradient(to bottom, #fe71fe, #7199ff);
  box-shadow: 0 -2px 0 3px #140e66 inset, 0 1px 0 6px #c642fb inset;
`;

const Container = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(26, 4, 58, 0.75),
    rgba(21, 18, 120, 0.75) 70%,
    rgba(43, 22, 119, 0.75)
  );
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`;
