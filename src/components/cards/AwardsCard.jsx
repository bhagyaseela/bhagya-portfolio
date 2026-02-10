import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Shell = styled.div`
  position: relative;
  border-radius: 22px;
  padding: 1.5px;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 200, 0.35),
    rgba(120, 70, 255, 0.35),
    rgba(255, 80, 160, 0.35)
  );
`;

const Glow = styled.div`
  position: absolute;
  inset: -10px;
  border-radius: 26px;
  background: radial-gradient(
    circle at 20% 20%,
    rgba(0, 255, 200, 0.18),
    transparent 55%
  );
  filter: blur(14px);
  pointer-events: none;
`;

const Card = styled.div`
  position: relative;
  border-radius: 20px;
  padding: 18px 18px 16px;
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
`;

/* Subtle pattern */
const Pattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.35;
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.08) 1px,
      transparent 1px
    ),
    radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 14px 14px, 22px 22px;
  background-position: 0 0, 6px 8px;
  pointer-events: none;
`;

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.25;
`;

const Sub = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.4;
`;

const Year = styled.div`
  font-size: 12px;
  font-weight: 800;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text_primary};
  white-space: nowrap;
`;

const Desc = styled.div`
  margin-top: 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.65;
`;

const Chips = styled.div`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.span`
  font-size: 12px;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 999px;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const LinkRow = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Btn = styled.a`
  padding: 9px 12px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 800;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const AwardsCard = ({ item }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        padding: "0px",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.15)" }}
      iconStyle={{
        background: "rgba(255,255,255,0.08)",
        boxShadow: "0 0 0 4px rgba(255,255,255,0.08)",
        color: "#fff",
      }}
      icon={<div style={{ fontWeight: 900 }}>🏆</div>}
      date={item?.year}
    >
      <Shell>
        <Glow />
        <Card>
          <Pattern />

          <Top>
            <Left>
              <Title>{item?.title}</Title>
              {item?.org && <Sub>{item.org}</Sub>}
            </Left>
            {item?.year && <Year>{item.year}</Year>}
          </Top>

          {item?.desc && <Desc>{item.desc}</Desc>}

          {Array.isArray(item?.tags) && item.tags.length > 0 && (
            <Chips>
              {item.tags.map((t, idx) => (
                <Chip key={idx}>{t}</Chip>
              ))}
            </Chips>
          )}

          {(item?.link || item?.doc) && (
            <LinkRow>
              {item?.link && (
                <Btn href={item.link} target="_blank" rel="noreferrer">
                  View
                </Btn>
              )}
              {item?.doc && (
                <Btn href={item.doc} target="_blank" rel="noreferrer">
                  Document
                </Btn>
              )}
            </LinkRow>
          )}
        </Card>
      </Shell>
    </VerticalTimelineElement>
  );
};

export default AwardsCard;
