import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/main";

export default function Home() {
  const { email, setEmail, password, setPassword, session, login, logout } =
    useContext(Context);

  if (!session) {
    return <Navigate to="/auth" />;
  }

  return (
    <>
      {`${session?.email}`.includes("branch") && (
        <div className="grid min-h-screen place-content-center">
          <h1 className="font-bold text-4xl text-gray-300 p-2 mb-4">
            Branch Screen
          </h1>
          <p className="m-2">{session?.email}</p>
          <div className="border-2 bg-gray-50 p-2 m-2 w-20 grid place-content-center hover:bg-gray-100 duration-200 cursor-pointer">
            <p onClick={logout}>Logout</p>
          </div>
        </div>
      )}
      {`${session?.email}`.includes("engineer") && (
        <div className="grid min-h-screen place-content-center">
          <h1 className="font-bold text-4xl text-gray-300 p-2 mb-4">
            Engineer Screen
          </h1>
          <p className="m-2">{session?.email}</p>
          <div className="border-2 bg-gray-50 p-2 m-2 w-20 grid place-content-center hover:bg-gray-100 duration-200 cursor-pointer">
            <p onClick={logout}>Logout</p>
          </div>
        </div>
      )}
    </>
  );
}
