import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { awards } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 12px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

/** 3D Stage */
const Stage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  perspective: 1400px;
  overflow: visible;
`;

const Track = styled.div`
  position: relative;
  width: min(98vw, 980px);
  height: 560px;
  transform-style: preserve-3d;
  overflow: visible;

  @media (max-width: 768px) {
    height: 540px;
  }
`;

const CardSlot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%);
  width: min(92vw, 420px);
  height: 560px;

  @media (max-width: 768px) {
    height: 540px;
  }
`;

/** Different pattern than your other cards */
const Shell = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 26px;
  padding: 1.6px;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 210, 0.35),
    rgba(135, 80, 255, 0.35),
    rgba(255, 80, 160, 0.35)
  );
`;

const Glow = styled.div`
  position: absolute;
  inset: -14px;
  border-radius: 30px;
  background: radial-gradient(
      circle at 20% 20%,
      rgba(0, 255, 210, 0.2),
      transparent 55%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(135, 80, 255, 0.18),
      transparent 55%
    );
  filter: blur(14px);
  pointer-events: none;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 24px;
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  position: relative;
`;

const Pattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.28;
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(135deg, rgba(255, 255, 255, 0.06), transparent 60%);
  background-size: 14px 14px, 100% 100%;
  pointer-events: none;
`;

const Media = styled.div`
  height: 240px;
  width: 100%;
  position: relative;
  background: rgba(255, 255, 255, 0.04);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MediaOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.6)
  );
`;

const Badge = styled.div`
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 900;
  font-size: 12px;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
`;

const Content = styled.div`
  padding: 16px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const H = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.25;
`;

const Sub = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
`;

const P = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.65;
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Chip = styled.span`
  font-size: 12px;
  font-weight: 800;
  padding: 6px 10px;
  border-radius: 999px;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 14px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Btn = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px 14px;
  border-radius: 14px;
  font-weight: 900;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: ${({ active }) =>
    active ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.15)"};
  cursor: pointer;
`;

function wrapOffset(offset, n) {
  // choose nearest direction (so carousel loops nicely)
  if (offset > n / 2) return offset - n;
  if (offset < -n / 2) return offset + n;
  return offset;
}

const AwardsCarousel3D = () => {
  const [index, setIndex] = useState(0);
  const drag = useRef({ down: false, x: 0 });

  const n = awards.length;

  const next = () => setIndex((i) => (i + 1) % n);
  const prev = () => setIndex((i) => (i - 1 + n) % n);

  const onPointerDown = (e) => {
    drag.current.down = true;
    drag.current.x = e.clientX;
  };
  const onPointerUp = () => {
    drag.current.down = false;
  };
  const onPointerMove = (e) => {
    if (!drag.current.down) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 45) {
      drag.current.x = e.clientX;
      dx > 0 ? prev() : next();
    }
  };

  const cards = useMemo(() => awards, []);

  return (
    <Container id="Awards">
      <Wrapper>
        <Title>Awards</Title>
        <Desc>3D carousel — drag or use arrows to browse.</Desc>

        <Stage>
          <Track
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onPointerMove={onPointerMove}
          >
            {cards.map((a, i) => {
              let offset = wrapOffset(i - index, n);
              const abs = Math.abs(offset);

              // ✅ Coverflow tuning (adjust if you want)
              const x = offset * 260; // left/right spacing
              const rotY = offset * -38; // tilt
              const z = -abs * 140; // push back
              const scale = Math.max(0.78, 1 - abs * 0.12);
              const opacity = abs > 3 ? 0 : 1 - abs * 0.22;
              const blur = abs === 0 ? 0 : Math.min(2.2, abs * 0.7);

              return (
                <CardSlot
                  key={a.id}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${rotY}deg) scale(${scale})`,
                    opacity,
                    zIndex: 100 - abs,
                    filter: `blur(${blur}px)`,
                    transition:
                      "transform 650ms cubic-bezier(0.2,0.8,0.2,1), opacity 350ms ease, filter 350ms ease",
                    cursor: abs === 0 ? "default" : "pointer",
                    pointerEvents: opacity === 0 ? "none" : "auto",
                  }}
                  onClick={() => setIndex(i)}
                >
                  <Shell>
                    <Glow />
                    <Card>
                      <Pattern />

                      <Media>
                        {a.image ? (
                          <Img src={a.image} alt={a.title} />
                        ) : (
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 900,
                              opacity: 0.6,
                            }}
                          >
                            Add award image
                          </div>
                        )}
                        <MediaOverlay />
                        <Badge>🏆 {a.year}</Badge>
                      </Media>

                      <Content>
                        <H>{a.title}</H>
                        <Sub>{a.org}</Sub>
                        <P>{a.desc}</P>

                        {Array.isArray(a.tags) && a.tags.length > 0 && (
                          <Chips>
                            {a.tags.map((t, idx) => (
                              <Chip key={idx}>{t}</Chip>
                            ))}
                          </Chips>
                        )}
                      </Content>
                    </Card>
                  </Shell>
                </CardSlot>
              );
            })}
          </Track>
        </Stage>

        <Controls>
          <Btn onClick={prev}>← Prev</Btn>
          <Btn onClick={next}>Next →</Btn>
        </Controls>

        <Dots>
          {cards.map((_, i) => (
            <Dot
              key={i}
              active={i === index}
              onClick={() => setIndex(i)}
              aria-label={`Go to award ${i + 1}`}
            />
          ))}
        </Dots>
      </Wrapper>
    </Container>
  );
};

export default AwardsCarousel3D;
