import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";
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
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;


const HeroInnerContainer = styled.div`
    // border: 1px solid blue;

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

  iframe, canvas {
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
// border: 1px solid green;
  width: 100%;
  order: 2;
//   overflow: visible;
  padding-right: 260px;
  position: relative;
  left:-200px;
  @media (max-width: 960px) {
  width: 100%;
    order: 1;
    padding-right: 0px;
    margin-bottom: 30px
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroLeftContainer = styled.div`
//   border: 1px solid red;
  width: 800px;
  order: 1;

  display: flex;
  justify-content: ; /* align content left */
  align-items: flex-start;

  overflow: visible; /* allow overflow */

  @media (max-width: 960px) {
    order: 2;
    flex-direction: column;
    align-items: center;
    height: 400px;
    margin-bottom: 30px;
  }
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
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
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
  padding: 16px 0;

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
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 
    color: white;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
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

const Hero = () => {
    return (
        <div id="About">
            <HeroContainer>
                <HeroBg>
                    {/* <StarCanvas /> */}
                    {/* <HeroBgAnimation /> */}
                </HeroBg>

                <motion.div {...headContainerAnimation}>
                    <HeroInnerContainer>

                        {/* MIDDLE – 3D ROBOT */}
                        <HeroLeftContainer>
                            {/* <motion.div {...headContentAnimation}> */}
                            <Spline scene="https://prod.spline.design/8d2cyAr-nDVm-pVc/scene.splinecode"
                                // onLoad={(spline) => {
                                //     spline.setPixelRatio(window.devicePixelRatio);
                                // }}
                                style={{
                                    width: "800px",
                                    height: "750px",
                                    // border: "1px solid green",
                                    // transform: "scale(2)",
                                }}
                            />
                            {/* </motion.div> */}
                        </HeroLeftContainer>

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

                            <ResumeButton href={Bio.resume} target="_blank">
                                Check Resume
                            </ResumeButton>
                        </HeroRightContainer>



                        {/* <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={HeroImg} alt="Rishav Chanda" />
                </Tilt>
              </motion.div>
            </HeroRightContainer> */}

                    </HeroInnerContainer>
                </motion.div>
            </HeroContainer>
        </div>
    );
};

export default Hero;
