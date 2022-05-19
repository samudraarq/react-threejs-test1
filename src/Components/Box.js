import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useControl } from "react-three-gui";
import { ComputedAttribute, useTexture } from "@react-three/drei";
import { gsap } from "gsap";
import { standardMaterial } from "../Material/materials";
import * as THREE from "three";

import doorBaseColor from "../Assets/Door_Wood_001_SD/Door_Wood_001_basecolor.jpg";
import doorAO from "../Assets/Door_Wood_001_SD/Door_Wood_001_ambientOcclusion.jpg";
import doorHeight from "../Assets/Door_Wood_001_SD/Door_Wood_001_height.png";
import doorMetallic from "../Assets/Door_Wood_001_SD/Door_Wood_001_metallic.jpg";
import doorNormal from "../Assets/Door_Wood_001_SD/Door_Wood_001_normal.jpg";
import doorOpacity from "../Assets/Door_Wood_001_SD/Door_Wood_001_opacity.jpg";
import doorRoughness from "../Assets/Door_Wood_001_SD/Door_Wood_001_roughness.jpg";

const Box = (props) => {
  // const scale = useControl("scale", {
  //   type: "number",
  //   min: 0,
  //   max: 3,
  //   value: 1,
  // });

  const texture = useTexture({
    map: doorBaseColor,
    metalnessMap: doorMetallic,
    roughnessMap: doorRoughness,
    displacementMap: doorHeight,
    normalMap: doorNormal,
    alphaMap: doorOpacity,
    aoMap: doorAO,
  });

  const mesh = useRef();

  // useEffect(() => {
  //   gsap.to(mesh.current.position, { duration: 1, delay: 1, x: 2 });
  // });

  // useFrame((state, delta) => {
  //   mesh.current.position.x = Math.cos(state.clock.elapsedTime);
  //   mesh.current.position.y = Math.sin(state.clock.elapsedTime);
  // });

  return (
    <mesh {...props} ref={mesh} material={standardMaterial}>
      <boxGeometry args={[1, 1, 1, 100, 100, 100]}>
        <ComputedAttribute
          name="uv2"
          compute={(geometry) => {
            return new THREE.BufferAttribute(geometry.attributes.uv.array, 2);
          }}
        />
      </boxGeometry>
      <meshStandardMaterial
        {...texture}
        aoMapIntensity={1}
        displacementScale={0.05}
        transparent
        normalScale={[0.5, 0.5]}
      />
    </mesh>
  );
};

export default Box;
