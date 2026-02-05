import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RequestRepair from "./pages/RequestRepair";
import Navbar from "./components/Navbar";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<RequestRepair />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
