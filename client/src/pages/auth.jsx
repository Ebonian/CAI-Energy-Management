import { useContext } from "react";
import { Context } from "../context/main";
import { Navigate } from "react-router-dom";

import SevenLogo from "../images/7logo.svg";

export default function Auth() {
  const { email, setEmail, password, setPassword, session, login, errMessage } =
    useContext(Context);

  if (session) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-grow flex-col items-start justify-center bg-secondary-500 p-40 text-white">
        <img src={SevenLogo} alt="7-11 Logo" className="mb-6" />
        <h1 className="text-4xl font-bold leading-normal">
          Energy Consumption
          <br /> Evaluator and Predictor (ECEP)
        </h1>
        <h3 className="text-lg mt-6">Let's save energy!</h3>
      </div>
      <div className="grid place-content-center w-5/12">
        <h1 className="font-bold text-3xl text-gray-700">Hello Again!</h1>
        <h4 className="mt-1 text-gray-400">Welcome Back</h4>
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
          className="rounded-full grid place-content-center bg-secondary-400 p-4 text-sm text-white cursor-pointer hover:opacity-95 duration-300 mt-4 select-none font-medium"
          onClick={login}
        >
          Login
        </div>
        {errMessage && (
          <div className="p-3 mt-2">
            <p className="text-sm text-red-500">
              Incorrect username or password
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
