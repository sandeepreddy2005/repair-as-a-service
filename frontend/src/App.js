import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RequestRepair from "./pages/RequestRepair";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<RequestRepair />} />
      </Routes>
    </Router>
  );
}

export default App;
