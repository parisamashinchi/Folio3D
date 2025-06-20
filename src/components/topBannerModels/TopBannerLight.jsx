import * as THREE from "three";

const TopBannerLights = () => (
<>
  {/* Adjusted to light new front of the model */}
  <pointLight
    position={[-0.8, 1.3, -1.5]} 
    intensity={3}
    distance={0.5}
    color="white"
  />

  <primitive
    object={new THREE.RectAreaLight("lightBlue", 5, 5, 4)}
    position={[-1, 7, -4]} 
    rotation={[-Math.PI / 4, -Math.PI / 4, 0]} 
    intensity={20}
  />

  <pointLight position={[-3, 0, 1]} intensity={10} color="white" />
  <pointLight position={[-3, -1, 5]} intensity={10} color="white" />
</>

);

export default TopBannerLights;
