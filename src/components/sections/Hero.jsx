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

const HeroContainer = styled.div`
  //   border: 1px solid white;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 10px;
  z-index: 1;

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
    /* mobile-only: avoid clipped look on small screens */
    clip-path: none;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  // border: 1px solid blue

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

const HeroMiddleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  iframe,
  canvas {
    width: 100%;
    max-width: 380px;
    height: 420px;
  }

  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 40px;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  padding-right: 260px;
  position: relative;
  left: -200px;

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
  //   border: 1px solid red;
  width: 800px;
  order: 1;

  display: flex;
  justify-content: flex-start; /* (was invalid before; same as default) */
  align-items: flex-start;

  overflow: visible; /* allow overflow */

  @media (max-width: 960px) {
    /* mobile/tablet-only overrides */
    width: 100%;
    order: 2;
    align-items: center;
    justify-content: center;
    height: auto; /* was 200px (caused clipping) */
    margin-bottom: 30px;
    overflow: hidden; /* prevent horizontal scroll from Spline canvas */
  }

    @media (max-width: 640px) {
    width: 100%;
    height: auto;
    margin-left: -150px;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 55px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 1200px) {
    text-align: center;
  }

  @media (max-width: 1200px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }

  /* mobile-only: slightly smaller to fit nicely */
  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 30px;
  display: flex;
  gap: 6px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* MOBILE: split into 2 lines */
  @media (max-width: 640px) {
    flex-direction: column;     /* "I am a" on line 1, typewriter on line 2 */
    align-items: center;
    gap: 4px;
    line-height: 1.2;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};

  /* MOBILE: keep typewriter in one line (no multi-line jump) */
  @media (max-width: 640px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;   /* optional: prevent overflow */
    max-width: 90vw;           /* adjust if needed */
  }
`;


const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
    width: 100%;
    max-width: 520px;
    font-size: 16px;
    line-height: 28px;
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
  margin-top: 50px;
  margin-left: 150px;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  /* tablet/mobile-only: remove desktop offset so it centers properly */
  @media (max-width: 960px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    max-width: 320px;
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
    margin: 0 auto;
    text-align: center;
  }

  color: white;
`;

const HeroBg = styled.div`
  //   border: 1px solid white;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

const SplineWrapper = styled.div`
  width: 800px;
  height: 750px;

  @media (max-width: 960px) {
    /* mobile/tablet-only: center + resize (no desktop change) */
    width: 520px;
    height: 520px;
    position: relative;
    left: 0;        /* was -80px (caused side cut / overflow) */
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
        <HeroBg>{/* <StarCanvas /> */}</HeroBg>

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
