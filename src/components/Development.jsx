import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Atom from "./Atom";
import Mac from "./Mac";

export default function Development() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.5}>
        <Mac />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
