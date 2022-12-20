import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NoPage from "./views/NoPage";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Français from "./views/Français";
import Cinema from "./views/Cinema";
import Resume from "./views/Resume";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home name="Home" />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
        <Route path="français" element={<Français />} />
        <Route path="cinema" element={<Cinema />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
