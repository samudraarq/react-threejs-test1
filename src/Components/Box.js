import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useControl } from "react-three-gui";

const Box = (props) => {
  const scale = useControl("scale", {
    type: "number",
    min: 0,
    max: 3,
    value: 1,
  });

  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta;
  });

  return (
    <mesh {...props} ref={mesh} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Box;
