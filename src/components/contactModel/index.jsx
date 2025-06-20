import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { EmailModel } from "../contactModel/EmailModel";

export function ContactModel() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1, 3], fov: 35 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <Float speed={4.5}>
        <group scale={0.2}>
          <EmailModel />
        </group>
      </Float>
    </Canvas>
  );
}
