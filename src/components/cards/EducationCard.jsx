import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 18px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  margin-top: 4px;
  object-fit: cover;
  flex-shrink: 0;

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const ImageFallback = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  margin-top: 4px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.primary + "22"};
  border: 1px solid ${({ theme }) => theme.primary + "55"};

  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const School = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding-top: 10px;
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const DateTxt = styled.div`
  font-size: 12px;
  font-weight: 500;
  padding-top: 10px;
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  padding-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  line-height: 1.6;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const InnerCard = styled.div`
  padding: 0px;
  border-radius: 12px;

  /* ✅ Dark + Light mode friendly */
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(0, 0, 0, 0.1);

  /* subtle shadow for both modes */
  box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 30px;

  /* nice glass feel if your theme background supports it */
  backdrop-filter: blur(10px);
`;

const ShineCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;

  /* same visual as your contentStyle background */
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary + "22"};
  box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 30px;
  backdrop-filter: blur(10px);

  padding: 30px;

  /* Shine layer */
  &::before {
    content: "";
    position: absolute;
    top: -40%;
    left: -60%;
    width: 60%;
    height: 180%;
    background: linear-gradient(
      120deg,
      transparent 0%,
      rgba(255, 255, 255, 0.18) 45%,
      rgba(255, 255, 255, 0.35) 50%,
      rgba(255, 255, 255, 0.18) 55%,
      transparent 100%
    );
    transform: rotate(12deg);
    opacity: 0;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
    animation: shineSweep 900ms ease forwards;
  }

  @keyframes shineSweep {
    0% {
      transform: translateX(0) rotate(12deg);
    }
    100% {
      transform: translateX(320%) rotate(12deg);
    }
  }
`;


const EducationCard = ({ education }) => {
    const fallbackLetter = education?.school
        ? education.school.trim().charAt(0).toUpperCase()
        : "E";

    return (
        <VerticalTimelineElement
            icon={
                education?.img ? (
                    <img
                        width="100%"
                        height="100%"
                        alt={education?.school}
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                        src={education.img}
                    />
                ) : (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 900,
                            color: "inherit",
                        }}
                    >
                        {fallbackLetter}
                    </div>
                )
            }
            contentStyle={{
                background: "transparent",
                boxShadow: "none",
                padding: "0px",
            }}
            contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.22)",
            }}
            date={education?.date}
        >

            <InnerCard>
                <ShineCard>
                    <Top>
                        {education?.img ? (
                            <Image src={education.img} alt={education?.school} />
                        ) : (
                            <ImageFallback>{fallbackLetter}</ImageFallback>
                        )}

                        <Body>
                            <School>{education?.school}</School>
                            <Degree>{education?.degree}</Degree>
                            <DateTxt>{education?.date}</DateTxt>
                        </Body>
                    </Top>

                    {education?.grade && (
                        <Grade>
                            <b>Grade : </b>
                            {education.grade}
                        </Grade>
                    )}

                    {education?.desc && (
                        <Description>
                            <Span>{education.desc}</Span>
                        </Description>
                    )}
                </ShineCard>
            </InnerCard>

        </VerticalTimelineElement>
    );
};

export default EducationCard;
