import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ForegroundImg from "../images/myprofile.png";

/* 🔧 TUNABLE VALUES */
const RIGHT_DEFAULT = -150;      // desktop default
const IMAGE_SIZE = 920;         // desktop height
const SPEED = 0.5;

/* Mobile tuning */
const RIGHT_DEFAULT_MOBILE = -40; // less negative so it stays visible
const IMAGE_SIZE_MOBILE = 480;    // smaller height on mobile
const MOBILE_MAX_SHIFT = 300;     // limit how far it moves on mobile
const DESKTOP_MAX_SHIFT = 600;    // your current max shift

const FloatingImage = styled.img`
  position: fixed;
  bottom: 0px;
  right: ${({ offset }) => offset}px;
  height: ${IMAGE_SIZE}px;
  object-fit: cover;
  z-index: 9999;
  pointer-events: none;
  transition: right ${SPEED}s ease-out;

  /* ✅ Mobile: show, but smaller */
  @media (max-width: 768px) {
    height: ${IMAGE_SIZE_MOBILE}px;
    margin-right: -70px; /* optional: shift left a bit to keep more visible on small screens */
    // opacity: 0.9;
    /* optional: slightly behind content so it won't feel too strong */
    z-index: 5;
  }
`;

const ForegroundImage = () => {
  const [offset, setOffset] = useState(RIGHT_DEFAULT);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      const base = isMobile ? RIGHT_DEFAULT_MOBILE : RIGHT_DEFAULT;
      const maxShift = isMobile ? MOBILE_MAX_SHIFT : DESKTOP_MAX_SHIFT;

      // move further right as user scrolls down (same logic)
      const dynamicOffset = base - Math.min(scrollY * 1.0, maxShift);
      setOffset(dynamicOffset);
    };

    handleScroll(); // set initial correct state
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll); // update on rotate/responsive changes

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return <FloatingImage src={ForegroundImg} offset={offset} alt="" />;
};

export default ForegroundImage;
