import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./utils/Layout";
import NoPage from "./views/NoPage";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Français from "./views/Français";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home name="Jack" />} />
          <Route path="projects" element={<Projects />} />
          <Route path="français" element={<Français />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
