import { Route, HashRouter, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import { Home } from "./pages/home.jsx";
import { Error } from "./pages/error.jsx";
import "katex/dist/katex.min.css";

import { BouncingBall } from "./pages/simulations/BouncingBall.jsx";
import { VectorsOperations } from "./pages/simulations/VectorsOperations.jsx";
import { BallAcceleration } from "./pages/simulations/BallAcceleration.jsx";
import { BallGravity } from "./pages/simulations/BallGravity.jsx";
import { SpringConnection } from "./pages/simulations/SpringConnection.jsx";
import { SimplePendulum } from "./pages/simulations/SimplePendulum.jsx";
import Contribute from "./pages/contribute.jsx";
import About from "./pages/about.jsx";
import Simulations from "./pages/simulations.jsx";

export default function App() {
  return (
    <HashRouter>
      <Layout showStars={true} showGradient={true}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/simulations" element={<Simulations />} />
          <Route path="/about" element={<About />} />
          <Route path="/BouncingBall" element={<BouncingBall />} />
          <Route path="/VectorsOperations" element={<VectorsOperations />} />
          <Route path="/BallAcceleration" element={<BallAcceleration />} />
          <Route path="/BallGravity" element={<BallGravity />} />
          <Route path="/SpringConnection" element={<SpringConnection />} />
          <Route path="/SimplePendulum" element={<SimplePendulum />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
