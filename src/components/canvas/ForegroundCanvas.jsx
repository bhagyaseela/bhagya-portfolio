import { Canvas } from "@react-three/fiber";
import ForegroundImage3D from "./ForegroundImage3D";

const ForegroundCanvas = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <ForegroundImage3D />
    </Canvas>
  );
};

export default ForegroundCanvas;
