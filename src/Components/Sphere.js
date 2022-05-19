import React, { useRef } from "react";
import { standardMaterial } from "../Material/materials";

const Sphere = (props) => {
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh} material={standardMaterial}>
      <sphereGeometry args={[1, 32, 32]} />
      {/* <meshStandardMaterial color="#a2d2ff" /> */}
    </mesh>
  );
};

export default Sphere;
