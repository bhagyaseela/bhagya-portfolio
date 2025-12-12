import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

const FlowingWave = () => {
  const meshRef = useRef();
  const gridSize = 60;
  const amplitude = 0.5;
  
  const geometry = new THREE.PlaneGeometry(12, 12, gridSize, gridSize);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position;
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      
      // Multiple overlapping sine waves
      const wave1 = Math.sin(x * 1.5 + time * 1.2) * amplitude;
      const wave2 = Math.sin(y * 1.8 + time * 0.8) * amplitude * 0.7;
      const wave3 = Math.sin((x + y) * 1.2 + time * 1.5) * amplitude * 0.5;
      const wave4 = Math.cos((x - y) * 0.8 - time) * amplitude * 0.3;
      
      const z = wave1 + wave2 + wave3 + wave4;
      positions.setZ(i, z);
    }
    
    positions.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
    
    // Slow rotation
    meshRef.current.rotation.z = Math.sin(time * 0.15) * 0.15;
  });
  
  return (
    <mesh 
      ref={meshRef} 
      rotation={[-Math.PI / 3.5, 0, 0]} 
      position={[0, -1.5, 0]} 
      geometry={geometry}
    >
      <meshStandardMaterial
        color="#ff6b9d"
        wireframe={true}
        transparent={true}
        opacity={0.7}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const SecondaryWave = () => {
  const meshRef = useRef();
  const gridSize = 45;
  const amplitude = 0.6;
  
  const geometry = new THREE.PlaneGeometry(14, 14, gridSize, gridSize);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position;
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      
      const wave = Math.sin(x * 1.2 - time * 1.5) * amplitude +
                   Math.cos(y * 1.5 - time) * amplitude * 0.6 +
                   Math.sin((x * y) * 0.1 + time * 0.5) * amplitude * 0.4;
      
      positions.setZ(i, wave);
    }
    
    positions.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });
  
  return (
    <mesh 
      ref={meshRef} 
      rotation={[-Math.PI / 3.5, 0, 0]} 
      position={[0, -1, -3]} 
      geometry={geometry}
    >
      <meshStandardMaterial
        color="#c084fc"
        wireframe={true}
        transparent={true}
        opacity={0.4}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const BackgroundWave = () => {
  const meshRef = useRef();
  const gridSize = 35;
  const amplitude = 0.8;
  
  const geometry = new THREE.PlaneGeometry(16, 16, gridSize, gridSize);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position;
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      
      const wave = Math.cos(x * 0.8 + time * 0.7) * amplitude +
                   Math.sin(y * 0.8 + time * 0.5) * amplitude * 0.8;
      
      positions.setZ(i, wave);
    }
    
    positions.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();
  });
  
  return (
    <mesh 
      ref={meshRef} 
      rotation={[-Math.PI / 3.5, 0, 0]} 
      position={[0, -0.5, -6]} 
      geometry={geometry}
    >
      <meshStandardMaterial
        color="#60a5fa"
        wireframe={true}
        transparent={true}
        opacity={0.25}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const FlowingWaveCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 3, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#ff6b9d" />
        <FlowingWave />
        <SecondaryWave />
        <BackgroundWave />
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default FlowingWaveCanvas;