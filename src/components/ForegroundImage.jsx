import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ForegroundImg from "../images/myprofile.png";

/* 🔧 TUNABLE VALUES */
const RIGHT_DEFAULT = -150;   // normal position (more negative = further right)
const RIGHT_SCROLL_DOWN = -600; // scrolling DOWN → move more right
const IMAGE_SIZE = 920;      // image height (px)
const SPEED = 0.5;          // movement smoothness (lower = slower)

/* ================= */

const FloatingImage = styled.img`
  position: fixed;
  bottom: 0px;                /* anchor to bottom-right */
  right: ${({ offset }) => offset}px;
  height: ${IMAGE_SIZE}px;

  object-fit: cover;

  z-index: 9999;
  pointer-events: none;

  transition: right ${SPEED}s ease-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ForegroundImage = () => {
    const lastScrollY = useRef(0);
    const [offset, setOffset] = useState(RIGHT_DEFAULT);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // move further right as user scrolls down
            const dynamicOffset = RIGHT_DEFAULT - Math.min(scrollY * 1.0, 600);

            setOffset(dynamicOffset);
        };


        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <FloatingImage src={ForegroundImg} offset={offset} />;
};

export default ForegroundImage;
