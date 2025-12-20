import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ForegroundImg from "../images/myprofile.png"; // <-- your image

const FloatingImage = styled.img`
  position: fixed;
  top: 50%;
  right: ${({ offset }) => offset}px;
  transform: translateY(-50%);
  height: 420px;
  z-index: 9999;
  pointer-events: none;
  transition: right 0.4s ease-out;
  opacity: 0.9;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ForegroundImage = () => {
  const lastScrollY = useRef(0);
  const [offset, setOffset] = useState(20);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current) {
        // scrolling DOWN → move image RIGHT
        setOffset(0);
      } else {
        // scrolling UP → move image LEFT
        setOffset(40);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <FloatingImage src={ForegroundImg} offset={offset} alt="Foreground" />;
};

export default ForegroundImage;
