import { Canvas } from "@react-three/fiber";
import { Controls } from "react-three-gui";
import "./App.css";

import Scene from "./Components/Scene";

function App() {
  return (
    <>
      <Controls.Provider>
        <Controls.Canvas
          style={{ position: "fixed", top: 0, left: 0, height: "100vh" }}
        >
          <Scene />
        </Controls.Canvas>
        <Controls />
      </Controls.Provider>
    </>
  );
}

export default App;
