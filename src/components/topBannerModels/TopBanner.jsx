import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { LateNightOffice } from "./LateNightOffice.jsx";
import TopBannerLights from "./TopBannerLight.jsx";

export const TopBanner = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <Canvas camera={{ position:isMobile? [0,0, 7] : [0, 0, 10], fov: 50 }}>
      
      <OrbitControls
        enablePan={true}
        enableZoom={false}
        maxDistance={10}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.5}
      />

      <TopBannerLights />
      <group scale={isMobile ? 1.2 : 1}>
        <LateNightOffice />
      </group>
    </Canvas>
  );
};
