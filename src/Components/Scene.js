import Box from "./Box";
import Sphere from "./Sphere";

const Home = () => {
  return (
    <>
      <ambientLight />
      <directionalLight position={[0, 0, 5]} color="white" />
      <Box position-x={-1} />
      <Sphere position-x={1} />
    </>
  );
};

export default Home;
