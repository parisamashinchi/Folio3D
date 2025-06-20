import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";

export const SkillModel = ({ model }) => {
  //It loads a 3D model from the given path
  const modelScene = useGLTF(model.modelPath);
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <OrbitControls enableZoom={false} />
      <Environment preset="city" />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={modelScene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};
