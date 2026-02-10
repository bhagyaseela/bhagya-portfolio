import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled, { useTheme } from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  object-fit: cover;
  flex-shrink: 0;

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

const Role = styled.div`
  font-size: 18px;
  font-weight: 600; /* ✅ fixed */
  color: ${({ theme }) => theme.text_primary};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500; /* ✅ fixed */
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const DateTxt = styled.div`
  font-size: 12px;
  font-weight: 400; /* ✅ fixed */
  color: ${({ theme }) => theme.text_secondary};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
  line-height: 1.6;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const SkillsBlock = styled.div`
  width: 100%;
  margin-top: 10px; /* ✅ removed negative margin */
`;

const SkillsTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 6px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
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

  padding: 16px;

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


const ExperienceCard = ({ experience }) => {
    const theme = useTheme();

    const hasImg = Boolean(experience?.img);
    const fallbackLetter = experience?.company
        ? experience.company.trim().charAt(0).toUpperCase()
        : "E";

    return (

        <VerticalTimelineElement
            icon={
                hasImg ? (
                    <img
                        width="100%"
                        height="100%"
                        alt={experience?.company}
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                        src={experience.img}
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
                            color: theme.text_primary,
                            background: theme.primary + "22",
                        }}
                    >
                        {fallbackLetter}
                    </div>
                )
            }
            contentStyle={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",

                /* ✅ light + dark mode */
                background: theme.card,
                color: theme.text_primary,

                /* ✅ fixes “timeline gap/line showing outside card” */
                padding: "0px",
                borderRadius: "12px",
                overflow: "hidden",

                border: `1px solid ${theme.primary + "22"}`,
                boxShadow: "rgba(0, 0, 0, 0.12) 0px 10px 30px",
                backdropFilter: "blur(10px)",
            }}
            contentArrowStyle={{
                borderRight: `7px solid ${theme.primary + "33"}`,
            }}
            date={experience?.date}
        >
            <ShineCard>
                <Top>
                    {hasImg ? (
                        <Image src={experience.img} alt={experience?.company} />
                    ) : (
                        <div
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 10,
                                marginTop: 4,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 900,
                                background: theme.primary + "22",
                                border: `1px solid ${theme.primary + "55"}`,
                                color: theme.text_primary,
                                flexShrink: 0,
                            }}
                        >
                            {fallbackLetter}
                        </div>
                    )}

                    <Body>
                        <Role>{experience?.role}</Role>
                        <Company>{experience?.company}</Company>
                        <DateTxt>{experience?.date}</DateTxt>
                    </Body>
                </Top>

                <Description>{experience?.desc}</Description>

                {Array.isArray(experience?.skills) && experience.skills.length > 0 && (
                    <SkillsBlock>
                        <SkillsTitle>Skills</SkillsTitle>
                        <ItemWrapper>
                            {experience.skills.map((skill, index) => (
                                <Skill key={`${skill}-${index}`}>• {skill}</Skill>
                            ))}
                        </ItemWrapper>
                    </SkillsBlock>
                )}
            </ShineCard>
        </VerticalTimelineElement>
        
    );
};

export default ExperienceCard;
