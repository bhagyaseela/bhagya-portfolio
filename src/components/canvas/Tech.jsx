import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: 110%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
`;

const VantaNetBackground = ({ isDark }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    const loadThree = () =>
      new Promise((resolve) => {
        if (window.THREE) return resolve();
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
        script.onload = resolve;
        document.head.appendChild(script);
      });

    const loadVanta = () =>
      new Promise((resolve) => {
        if (window.VANTA) return resolve();
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
        script.onload = resolve;
        document.head.appendChild(script);
      });

    const initVanta = async () => {
      await loadThree();
      await loadVanta();

      // destroy old instance
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }

      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        THREE: window.THREE,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        // 🌗 THIS WORKS
        backgroundColor: isDark ? 0x000000 : 0xffffff,
        color: isDark ? 0x2e257a : 0x5a67ff,

        points: 8.0,
        maxDistance: 20.0,
        spacing: 20.0,
      });
    };

    initVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, [isDark]); // 👈 reacts instantly

  return <StyledCanvasWrapper ref={vantaRef} />;
};

export default VantaNetBackground;
