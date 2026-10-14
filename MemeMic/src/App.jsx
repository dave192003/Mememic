import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "../src/pages/landingPage/landingPage";
import Home from "../src/pages/home/home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;