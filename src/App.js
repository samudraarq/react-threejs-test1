import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Controls } from "react-three-gui";
import "./App.css";

import Scene from "./Components/Scene";

function App() {
  return (
    <div id="canvas-container">
      {/* <Controls.Provider>
        <Controls.Canvas>
          <Scene />
        </Controls.Canvas>
        <Controls />
      </Controls.Provider> */}
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
