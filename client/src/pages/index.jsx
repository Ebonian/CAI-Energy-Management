import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { FiChevronDown, FiChevronsLeft } from "react-icons/fi";
import { Context } from "../context/main";
import Navigation from "../components/Navigation";
import Layout from "../components/Layout";

export default function Home() {
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
    <Layout page="Dashboards">
      <div className="grid w-full grid-cols-3 gap-24">
        <div className="rounded-2xl bg-white h-48 p-3">
          <h1 className="font-bold text-xl text-gray-700">Effiency Score</h1>
        </div>
        <div className="rounded-2xl bg-white h-48 p-3">
          <h1 className="font-bold text-xl text-gray-700">Current Ranking</h1>
        </div>
        <div className="rounded-2xl bg-white h-48 p-3"></div>
      </div>
      <div className="w-full h-60 rounded-2xl bg-white"></div>
    </Layout>
  );
}
