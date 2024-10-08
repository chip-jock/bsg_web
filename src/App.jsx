import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/0-home/Home.jsx';
import Company from './pages/1-company/Company.jsx';
import BrightSandCanada from './pages/2-brightSandCanada/BrightSandCanada.jsx';
import BrightSandInc from './pages/3-brightSandInc/BrightSandInc.jsx';
import BrightSandIndustriesInc from './pages/4-brightSandIndustriesInc/BrightSandIndustriesInc.jsx';
import WhitePapers from './pages/5-whitePapers/WhitePapers.jsx';
import Consulting from './pages/6-consulting/Consulting.jsx';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route
            path="/brightsandcanada"
            element={<BrightSandCanada />}
          />
          <Route path="/brightsandinc" element={<BrightSandInc />} />
          <Route
            path="/brightsandindustriesinc"
            element={<BrightSandIndustriesInc />}
          />
          <Route path="/whitepapers" element={<WhitePapers />} />
          <Route path="/consulting" element={<Consulting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
