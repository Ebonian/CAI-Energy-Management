import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import { Context } from "../context/main";

export default function Info() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    session,
    login,
    logout,
    focusNav,
  } = useContext(Context);

  if (!session) {
    return <Navigate to="/auth" />;
  }

  return <Layout page="Information"></Layout>;
}
