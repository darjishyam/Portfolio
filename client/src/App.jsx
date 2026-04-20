import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import useAnalytics from "./hooks/useAnalytics";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetails from "./components/Portfolio/ProjectDetails";

import "./App.css";

function AppContent() {
  const location = useLocation();
  const { trackHit } = useAnalytics();
  const isPortfolio = location.pathname === "/" || location.pathname === "/portfolio-demo" || location.pathname.startsWith("/project");

  useEffect(() => {
    trackHit(location.pathname);
  }, [location.pathname, trackHit]);

  return (
    <div className="App">

      {!isPortfolio && <Navbar />}
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/old-home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio-demo" element={<PortfolioPage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
