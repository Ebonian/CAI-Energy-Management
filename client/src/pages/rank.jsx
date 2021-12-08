import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import { Context } from "../context/main";

export default function Rank() {
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

  return (
    <Layout page="Ranking">
      <div className="flex items-start space-x-20">
        <div className="flex-grow h-96 rounded-2xl bg-white">d</div>
        <div className="w-80 h-96 bg-white rounded-2xl"></div>
      </div>
    </Layout>
  );
}
