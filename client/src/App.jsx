import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Auth from "./pages/auth";
import Insight from "./pages/insight";
import Home from "./pages/index";
import Info from "./pages/info";
import Rank from "./pages/rank";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/info" element={<Info />} />
        <Route path="/insight" element={<Insight />} />
      </Routes>
    </BrowserRouter>
  );
}
