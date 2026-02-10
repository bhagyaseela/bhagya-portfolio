import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import Spline from "@splinetool/react-spline";

/* 1920x1080 baseline scaling helpers (CSS) */
const vw = (px) => `calc(${px} * (100vw / 1920))`;
const vh = (px) => `calc(${px} * (100vh / 1080))`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  /* baseline 100px vertical padding at 1080p, scales with height */
  padding: clamp(48px, ${vh(100)}, 120px) clamp(10px, ${vw(16)}, 24px);
  z-index: 1;

  @media (max-width: 640px) {
    clip-path: none;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1900px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;

  /* baseline: padding-right 260px & left -200px at 1920w */
  padding-right: clamp(0px, ${vw(260)}, 260px);
  left: clamp(-220px, ${vw(-200)}, 0px);
  position: relative;

  @media (max-width: 960px) {
    padding-right: 0;
    left: 0;
    order: 1;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const HeroLeftContainer = styled.div`
  width: clamp(340px, ${vw(800)}, 900px);
  order: 1;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  overflow: visible;

  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    align-items: center;
    justify-content: center;
    height: auto;
    margin-bottom: 30px;
    overflow: hidden;
  }

  @media (max-width: 640px) {
    width: 100%;
    height: auto;

    /* baseline -100px at 1920w, scales */
    margin-left: clamp(-120px, ${vw(-100)}, 0px);

    /* baseline -50px at 1080h, scales */
    margin-top: clamp(-80px, ${vh(-50)}, 0px);
  }
`;

const Title = styled.div`
  font-weight: 800;
  font-size: clamp(32px, ${vw(55)}, 55px);
  line-height: clamp(40px, ${vw(68)}, 68px);
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: clamp(18px, ${vw(30)}, 30px);
  display: flex;
  gap: 6px;
  color: ${({ theme }) => theme.text_primary};
  line-height: clamp(30px, ${vw(68)}, 68px);

  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    gap: 4px;
    line-height: 1.2;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 90vw;
  }
`;

const SubTitle = styled.div`
  font-size: clamp(16px, ${vw(20)}, 20px);
  line-height: clamp(26px, ${vw(32)}, 32px);
  margin-bottom: clamp(26px, ${vh(42)}, 42px);
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
    width: 100%;
    max-width: 520px;
    margin: 0 auto 32px auto;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;

  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0px;
  margin-top: clamp(24px, ${vh(50)}, 50px);

  /* baseline 150px at 1920w, scales down on smaller screens */
  margin-left: clamp(0px, ${vw(150)}, 150px);

  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );

  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: clamp(18px, ${vw(20)}, 20px);
  color: white;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 960px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    max-width: 320px;
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    margin: 0 auto;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

const SplineWrapper = styled.div`
  /* baseline 800x750 at 1920x1080 */
  width: clamp(320px, ${vw(800)}, 900px);
  height: clamp(320px, ${vh(750)}, 820px);

  @media (max-width: 960px) {
    width: clamp(300px, ${vw(520)}, 520px);
    height: clamp(300px, ${vw(520)}, 520px);
    position: relative;
    left: 0;
    margin: 0 auto;
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 340px;
    height: 340px;
  }
`;

const Hero = () => {
  return (
    <div id="About">
      <HeroContainer>
        <HeroBg />

        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            {/* LEFT – 3D ROBOT */}
            <HeroLeftContainer>
              <motion.div {...headContentAnimation}>
                <SplineWrapper>
                  <Spline
                    scene="https://prod.spline.design/8d2cyAr-nDVm-pVc/scene.splinecode"
                    style={{ width: "100%", height: "100%" }}
                  />
                </SplineWrapper>
              </motion.div>
            </HeroLeftContainer>

            {/* RIGHT – TEXT */}
            <HeroRightContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I am <br /> {Bio.name}
                </Title>

                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ResumeButton href={Bio.resume} target="_blank" rel="noreferrer">
                Check Resume
              </ResumeButton>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
