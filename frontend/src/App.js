import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RequestRepair from "./pages/RequestRepair";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<RequestRepair />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
