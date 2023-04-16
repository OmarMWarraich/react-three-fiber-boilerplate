import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./styles.css";


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Canvas camera={{ position: [0, 0, 2] }}>
            <mesh>
                <boxGeometry />
                <meshBasicMaterial color="hotpink" wireframe/>
            </mesh>
        </Canvas>
    </StrictMode>
);
