import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import profileImg from "../../images/myprofile.png";

export default function ForegroundImage3D() {
  const meshRef = useRef();
  const texture = useTexture(profileImg);
  const { viewport } = useThree();

  const [targetX, setTargetX] = useState(viewport.width / 2 + 0.8);

  useEffect(() => {
    const onScroll = () => {
      setTargetX(viewport.width / 2 + 0.8 + Math.min(window.scrollY * 0.003, 4));
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [viewport.width]);

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      targetX,
      0.08
    );
  });

  return (
    <mesh ref={meshRef} position={[viewport.width / 2 + 0.8, -0.6, 1]}>
      <planeGeometry args={[2.8, 4.6]} />
      <meshBasicMaterial map={texture} transparent />
      {/* <meshBasicMaterial color="hotpink" /> */}

    </mesh>
  );
}
