import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { useRef, useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import profileImg from "../../images/myprofile.png";

export default function ForegroundImage3D() {
  const meshRef = useRef();
  const texture = useTexture(profileImg);
  const { viewport, size } = useThree();

  // ✅ only affects mobile/tablet (desktop stays identical)
  const isMobile = size.width <= 640;     // change breakpoint if you want
  const scale = isMobile ? 0.6 : 1;       // smaller only on mobile

  // keep your desktop base exactly, tweak only on mobile if needed
  const baseX = useMemo(() => {
    const desktopBase = viewport.width / 2 + 0.8; // your original
    const mobileBase = viewport.width / 2 + 0.4;  // a bit less push on mobile
    return isMobile ? mobileBase : desktopBase;
  }, [viewport.width, isMobile]);

  const [targetX, setTargetX] = useState(baseX);

  useEffect(() => {
    setTargetX(baseX); // reset when resize/orientation changes
  }, [baseX]);

  useEffect(() => {
    const onScroll = () => {
      const maxShift = isMobile ? 2 : 4; // less travel on mobile
      setTargetX(baseX + Math.min(window.scrollY * 0.003, maxShift));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [baseX, isMobile]);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      targetX,
      0.08
    );
  });

  return (
    <mesh
      ref={meshRef}
      position={[baseX, -0.6, 1]}      // desktop same feel
      scale={[scale, scale, 1]}        // ✅ size smaller only on mobile
    >
      <planeGeometry args={[2.8, 4.6]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}
