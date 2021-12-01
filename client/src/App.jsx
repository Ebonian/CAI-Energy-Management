import { useContext } from "react";
import { Context } from "./context/main";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Auth from "./pages/auth";
import Home from "./pages/index";

export default function App() {
  const { session } = useContext(Context);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
