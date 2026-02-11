import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 100%;
  min-height: 320px;
  border-radius: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: rgba(0, 0, 0, 0.10) 0px 12px 30px;
  padding: 18px;
  text-align: center;
`;

const Title = styled.div`
  font-weight: 900;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
`;

const Sub = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  line-height: 1.5;
`;

const Tip = styled.div`
  margin-top: 6px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
  opacity: 0.9;
`;

export default function WebGLFallback() {
  return (
    <Box>
      <Title>3D view unavailable</Title>
      <Sub>
        Your browser/device is blocking WebGL, so the 3D model can’t be rendered.
      </Sub>
      <Tip>
        Try enabling Hardware Acceleration or use Chrome/Edge on a device with WebGL support.
      </Tip>
    </Box>
  );
}
