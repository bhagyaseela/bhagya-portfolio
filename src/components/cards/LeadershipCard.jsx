import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Card = styled.div`
  padding: 18px 18px 16px 18px;
  border-radius: 18px;
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Logo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LogoFallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.text_primary};
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
`;

const Org = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
`;

const DateTxt = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  opacity: 0.85;
`;

const Body = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Desc = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const Points = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  li {
    font-size: 14px;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.6;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 999px;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 6px;
`;

const Btn = styled.a`
  padding: 9px 12px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 700;
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

const LeadershipCard = ({ item }) => {
  const fallbackText = item?.company ? item.company[0].toUpperCase() : "★";

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
        overflow: "hidden",
      }}
      // ✅ SWAPPED: timeline circle uses IMAGE (or icon if no image)
      icon={
        item?.img ? (
          <img
            src={item.img}
            alt={item.company || "logo"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ fontWeight: 900, fontSize: 14 }}>
            {item?.icon || "★"}
          </div>
        )
      }
      date={item?.date}
    >
      <Card>
        <Top>
          <Logo>
            {/* ✅ SWAPPED: card logo box uses ICON (or image if no icon) */}
            {item?.icon ? (
              <LogoFallback style={{ fontSize: 20 }}>{item.icon}</LogoFallback>
            ) : item?.img ? (
              <img src={item.img} alt={item.company || "logo"} />
            ) : (
              <LogoFallback>{fallbackText}</LogoFallback>
            )}
          </Logo>

          <HeaderText>
            <Role>{item?.role}</Role>
            <Org>{item?.company}</Org>
            {item?.location && <Org>{item.location}</Org>}
          </HeaderText>
        </Top>

        {item?.date && <DateTxt>{item.date}</DateTxt>}

        <Body>
          {item?.desc && <Desc>{item.desc}</Desc>}

          {Array.isArray(item?.points) && item.points.length > 0 && (
            <Points>
              {item.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </Points>
          )}

          {Array.isArray(item?.tags) && item.tags.length > 0 && (
            <Tags>
              {item.tags.map((t, idx) => (
                <Tag key={idx}>{t}</Tag>
              ))}
            </Tags>
          )}

          {(item?.link || item?.doc) && (
            <Actions>
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
            </Actions>
          )}
        </Body>
      </Card>
    </VerticalTimelineElement>
  );
};

export default LeadershipCard;
