import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Atom from "./Atom";

export default function WebDesign() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.5}>
        <Atom />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
