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
import OurTeam from './pages/7-ourteam/OurTeam.jsx';
import WhitePapers from './pages/5-whitePapers/WhitePapers.jsx';
import Consulting from './pages/6-consulting/Consulting.jsx';

function App() {
  return (
    <div className="w-screen h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route
            exact
            path="/brightsandcanada"
            element={<BrightSandCanada />}
          />
          <Route
            exact
            path="/brightsandinc"
            element={<BrightSandInc />}
          />
          <Route
            exact
            path="/brightsandindustriesinc"
            element={<BrightSandIndustriesInc />}
          />
          <Route exact path="/ourteam" element={<OurTeam />} />
          <Route
            exact
            path="/whitepapers"
            element={<WhitePapers />}
          />
          <Route exact path="/consulting" element={<Consulting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
