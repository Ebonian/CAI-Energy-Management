import { useContext } from "react";
import { Context } from "../context/main";
import { Navigate } from "react-router-dom";

export default function Auth() {
  const { email, setEmail, password, setPassword, session, login, logout } =
    useContext(Context);

  if (session) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-grow flex-col items-start justify-center bg-secondary-400 p-40 text-white">
        <h1 className="text-4xl font-bold leading-normal">
          Energy Consumption
          <br /> Evaluator and Predictor (ECEP)
        </h1>
        <h3 className="text-lg mt-6">Let's save energy!</h3>
      </div>
      <div className="grid place-content-center w-5/12">
        <h1 className="font-bold text-3xl text-gray-800">Hello Again!</h1>
        <h4 className="mt-1 text-gray-600">Welcome Back</h4>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
          className="outline-none p-3 rounded-full border w-64 mt-7 select-none"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="outline-none p-3 rounded-full border w-64 mt-4 select-none"
        />
        <div
          className="rounded-full grid place-content-center bg-secondary-400 p-4 text-sm text-white cursor-pointer hover:opacity-95 duration-300 mt-4 select-none"
          onClick={login}
        >
          Login
        </div>
      </div>
    </div>
  );
}
