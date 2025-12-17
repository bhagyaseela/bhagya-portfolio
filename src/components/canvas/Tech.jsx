// import React, { useRef, useState, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Preload } from "@react-three/drei";
// import * as THREE from "three";
// import styled from "styled-components";

// const StyledCanvasWrapper = styled.div`
//   width: 100%;
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 0;
//   pointer-events: none;
// `;

// // Glowing grid plane
// const NeonGrid = ({ scrollY }) => {
//   const meshRef = useRef();
//   const gridSize = 50;
  
//   const geometry = new THREE.PlaneGeometry(20, 30, gridSize, gridSize);
  
//   useFrame((state) => {
//     if (!meshRef.current) return;
    
//     const time = state.clock.getElapsedTime();
//     const positions = meshRef.current.geometry.attributes.position;
    
//     for (let i = 0; i < positions.count; i++) {
//       const x = positions.getX(i);
//       const y = positions.getY(i);
      
//       // Create flowing wave effect
//       const wave1 = Math.sin(x * 0.5 + time * 1.5) * 0.3;
//       const wave2 = Math.cos(y * 0.5 - time) * 0.3;
//       const ripple = Math.sin((x * x + y * y) * 0.05 + time * 2) * 0.2;
      
//       const z = wave1 + wave2 + ripple - scrollY * 0.02;
//       positions.setZ(i, z);
//     }
    
//     positions.needsUpdate = true;
//     meshRef.current.geometry.computeVertexNormals();
//     meshRef.current.position.y = scrollY * 0.5;
//   });
  
//   return (
//     <mesh 
//       ref={meshRef} 
//       rotation={[-Math.PI / 2.8, 0, 0]} 
//       position={[0, -3, -5]}
//       geometry={geometry}
//     >
//       <meshStandardMaterial
//         color="#00ffff"
//         emissive="#00ffff"
//         emissiveIntensity={0.5}
//         wireframe={true}
//         transparent={true}
//         opacity={0.8}
//         side={THREE.DoubleSide}
//       />
//     </mesh>
//   );
// };

// // Floating orbs with glow
// const GlowingOrbs = ({ scrollY }) => {
//   const groupRef = useRef();
  
//   const orbs = React.useMemo(() => {
//     return [...Array(12)].map(() => ({
//       position: [
//         (Math.random() - 0.5) * 15,
//         (Math.random() - 0.5) * 20,
//         (Math.random() - 0.5) * 10
//       ],
//       scale: 0.2 + Math.random() * 0.4,
//       speed: 0.5 + Math.random() * 1,
//       color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'][Math.floor(Math.random() * 4)]
//     }));
//   }, []);
  
//   useFrame((state) => {
//     if (!groupRef.current) return;
    
//     const time = state.clock.getElapsedTime();
//     groupRef.current.position.z = scrollY * 0.8;
    
//     groupRef.current.children.forEach((child, i) => {
//       const orb = orbs[i];
//       child.position.y += Math.sin(time * orb.speed + i) * 0.01;
//       child.position.x += Math.cos(time * orb.speed * 0.7 + i) * 0.005;
//     });
//   });
  
//   return (
//     <group ref={groupRef}>
//       {orbs.map((orb, i) => (
//         <mesh key={i} position={orb.position} scale={orb.scale}>
//           <sphereGeometry args={[1, 32, 32]} />
//           <meshStandardMaterial
//             color={orb.color}
//             emissive={orb.color}
//             emissiveIntensity={1.5}
//             transparent
//             opacity={0.7}
//           />
//         </mesh>
//       ))}
//     </group>
//   );
// };

// // Bright particle field
// const BrightParticles = ({ scrollY }) => {
//   const pointsRef = useRef();
//   const particleCount = 2000;
  
//   const [positions, colors] = React.useMemo(() => {
//     const pos = new Float32Array(particleCount * 3);
//     const col = new Float32Array(particleCount * 3);
    
//     const colorPalette = [
//       [0, 1, 1],      // Cyan
//       [1, 0, 1],      // Magenta
//       [1, 1, 0],      // Yellow
//       [0, 1, 0],      // Green
//       [1, 0.5, 0],    // Orange
//       [0.5, 0, 1]     // Purple
//     ];
    
//     for (let i = 0; i < particleCount; i++) {
//       pos[i * 3] = (Math.random() - 0.5) * 25;
//       pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
//       pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
//       const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
//       col[i * 3] = color[0];
//       col[i * 3 + 1] = color[1];
//       col[i * 3 + 2] = color[2];
//     }
    
//     return [pos, col];
//   }, []);
  
//   useFrame((state) => {
//     if (!pointsRef.current) return;
    
//     const time = state.clock.getElapsedTime();
//     pointsRef.current.rotation.y = time * 0.05;
//     pointsRef.current.position.z = -scrollY * 1.5;
//   });
  
//   return (
//     <points ref={pointsRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={particleCount}
//           array={positions}
//           itemSize={3}
//         />
//         <bufferAttribute
//           attach="attributes-color"
//           count={particleCount}
//           array={colors}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.08}
//         vertexColors
//         transparent
//         opacity={0.8}
//         sizeAttenuation={true}
//         blending={THREE.AdditiveBlending}
//       />
//     </points>
//   );
// };

// // Neon rings
// const NeonRings = ({ scrollY }) => {
//   const groupRef = useRef();
  
//   const rings = React.useMemo(() => {
//     return [...Array(6)].map((_, i) => ({
//       radius: 3 + i * 1.5,
//       color: ['#00ffff', '#ff00ff', '#ffff00'][i % 3],
//       rotation: Math.random() * Math.PI,
//       speed: 0.3 + Math.random() * 0.5
//     }));
//   }, []);
  
//   useFrame((state) => {
//     if (!groupRef.current) return;
    
//     const time = state.clock.getElapsedTime();
//     groupRef.current.position.y = -scrollY * 0.6;
    
//     groupRef.current.children.forEach((child, i) => {
//       child.rotation.z = time * rings[i].speed;
//     });
//   });
  
//   return (
//     <group ref={groupRef} position={[0, -5, -8]}>
//       {rings.map((ring, i) => (
//         <mesh key={i} rotation={[Math.PI / 2, 0, ring.rotation]}>
//           <torusGeometry args={[ring.radius, 0.05, 16, 100]} />
//           <meshStandardMaterial
//             color={ring.color}
//             emissive={ring.color}
//             emissiveIntensity={1.2}
//             transparent
//             opacity={0.6}
//           />
//         </mesh>
//       ))}
//     </group>
//   );
// };

// // Energy lines
// const EnergyLines = ({ scrollY }) => {
//   const groupRef = useRef();
  
//   const lines = React.useMemo(() => {
//     return [...Array(20)].map(() => ({
//       start: [
//         (Math.random() - 0.5) * 20,
//         (Math.random() - 0.5) * 25,
//         (Math.random() - 0.5) * 15
//       ],
//       end: [
//         (Math.random() - 0.5) * 20,
//         (Math.random() - 0.5) * 25,
//         (Math.random() - 0.5) * 15
//       ],
//       color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00'][Math.floor(Math.random() * 4)]
//     }));
//   }, []);
  
//   useFrame((state) => {
//     if (!groupRef.current) return;
//     groupRef.current.position.z = scrollY * 0.3;
//     groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
//   });
  
//   return (
//     <group ref={groupRef}>
//       {lines.map((line, i) => {
//         const points = [
//           new THREE.Vector3(...line.start),
//           new THREE.Vector3(...line.end)
//         ];
//         const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
//         return (
//           <line key={i} geometry={geometry}>
//             <lineBasicMaterial
//               color={line.color}
//               transparent
//               opacity={0.5}
//               linewidth={2}
//               blending={THREE.AdditiveBlending}
//             />
//           </line>
//         );
//       })}
//     </group>
//   );
// };

// const Scene = ({ scrollY }) => {
//   return (
//     <>
//       <ambientLight intensity={0.2} />
//       <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
//       <pointLight position={[-10, -10, 5]} intensity={1.5} color="#ff00ff" />
//       <pointLight position={[0, 15, 0]} intensity={1.2} color="#ffff00" />
      
//       <NeonGrid scrollY={scrollY} />
//       <GlowingOrbs scrollY={scrollY} />
//       <BrightParticles scrollY={scrollY} />
//       <NeonRings scrollY={scrollY} />
//       <EnergyLines scrollY={scrollY} />
//     </>
//   );
// };

// const NeonGridCanvas = () => {
//   const [scrollY, setScrollY] = useState(0);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY / 100);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   return (
//     <StyledCanvasWrapper>
//       <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
//         <Scene scrollY={scrollY} />
//         <Preload all />
//       </Canvas>
//     </StyledCanvasWrapper>
//   );
// };

// export default NeonGridCanvas;


import React, { useEffect, useRef, useState } from "react";
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

const VantaNetBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // Load THREE.js first
    const loadThree = () => {
      return new Promise((resolve, reject) => {
        if (window.THREE) {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load THREE.js'));
        document.head.appendChild(script);
      });
    };

    // Load Vanta.js NET after THREE.js
    const loadVanta = () => {
      return new Promise((resolve, reject) => {
        if (window.VANTA) {
          resolve();
          return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Vanta.js'));
        document.head.appendChild(script);
      });
    };

    // Initialize Vanta effect
    const initVanta = async () => {
      try {
        await loadThree();
        await loadVanta();

        if (!vantaEffect && vantaRef.current && window.VANTA) {
          const effect = window.VANTA.NET({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            // color: 0x3f51ff,        // Blue color (change this)
            color: 0x2e257a,
            backgroundColor: 0x0,    // Black background
            points: 8.00,           // Number of connection points
            maxDistance: 20.00,      // Max distance for connections
            spacing: 20.00           // Spacing between points
          });
          
          setVantaEffect(effect);
        }
      } catch (error) {
        console.error('Error loading Vanta:', error);
      }
    };

    initVanta();

    // Cleanup
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return <StyledCanvasWrapper ref={vantaRef} />;
};

export default VantaNetBackground;