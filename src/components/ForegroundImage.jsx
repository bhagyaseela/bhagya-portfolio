import { useEffect, useState } from "react";
import styled from "styled-components";
import ForegroundImg from "../images/myprofile.png";

/* ✅ Baseline resolution */
const BASE_W = 1920;
const BASE_H = 1080;

/* ✅ Baseline values (your current working values at 1920×1080) */
const RIGHT_DEFAULT_PCT = -150 / BASE_W;     // % of screen width
const IMAGE_SIZE_PCT = 1050 / BASE_H;         // % of screen height
const DESKTOP_SHIFT_PCT = 600 / BASE_W;      // % of screen width

/* Mobile baseline values (kept as px, but you can also convert to pct if you want) */
const MOBILE_RIGHT_DEFAULT_PX = -40;
const MOBILE_IMAGE_SIZE_PX = clamp(320, 240, 420);
const MOBILE_MAX_SHIFT_PX = 300;

const SPEED = 0.5;

/* helpers */
function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function getResponsiveParams() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const isMobile = w <= 768;

  if (isMobile) {
    return {
      isMobile,
      rightDefault: MOBILE_RIGHT_DEFAULT_PX,
      imgSize: MOBILE_IMAGE_SIZE_PX,
      maxShift: MOBILE_MAX_SHIFT_PX,
    };
  }

  // ✅ percentage based on 1920×1080
  const rightDefault = RIGHT_DEFAULT_PCT * w;     // px
  const imgSize = IMAGE_SIZE_PCT * h;             // px
  const maxShift = DESKTOP_SHIFT_PCT * w;         // px

  return {
    isMobile,
    rightDefault: Math.round(rightDefault),
    imgSize: Math.round(clamp(imgSize, 500, 1100)),     // safety clamp
    maxShift: Math.round(clamp(maxShift, 300, 900)),    // safety clamp
  };
}

const FloatingImage = styled.img`
  position: fixed;
  bottom: 0px;
  right: ${({ offset }) => offset}px;
  height: ${({ imgSize }) => imgSize}px;
  object-fit: cover;
  pointer-events: none;
  transition: right ${SPEED}s ease-out;

  z-index: ${({ isMobile }) => (isMobile ? 5 : 9999)};

  @media (max-width: 768px) {
    margin-right: -70px; /* optional */
  }
`;

const ForegroundImage = () => {
  const [params, setParams] = useState(() => getResponsiveParams());
  const [offset, setOffset] = useState(params.rightDefault);

  // update on resize
  useEffect(() => {
    const onResize = () => setParams(getResponsiveParams());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // update on scroll + when params change
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || 0;
      const shift = Math.min(scrollY, params.maxShift);
      setOffset(params.rightDefault - shift);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [params.rightDefault, params.maxShift]);

  return (
    <FloatingImage
      src={ForegroundImg}
      offset={offset}
      imgSize={params.imgSize}
      isMobile={params.isMobile}
      alt=""
    />
  );
};

export default ForegroundImage;
