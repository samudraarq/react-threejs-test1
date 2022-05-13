import Box from "./Box";

const Home = () => {
  return (
    <>
      <ambientLight />
      <directionalLight position={[0, 0, 5]} color="red" />
      <Box position={[-1, 0, 0]} />
      <Box position={[1, 0, 0]} />
    </>
  );
};

export default Home;
