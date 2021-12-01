import { useContext } from "react";
import { Context } from "../context/main";
import { Navigate } from "react-router-dom";

export default function Auth() {
  const { email, setEmail, password, setPassword, session, login, logout } =
    useContext(Context);

  if (session) {
    return <Navigate to="/" />;
  }

  const inputStyle =
    "outline-none bg-gray-50 p-2 border-2 m-2 focus:bg-gray-100";

  return (
    <div className="grid min-h-screen place-content-center">
      {/* text */}
      <h1 className="font-bold text-4xl text-gray-300 p-2 mb-4">Login</h1>
      {/* email input */}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={inputStyle}
      />
      {/* password input */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className={inputStyle}
      />
      {/* login button */}
      <div className="border-2 bg-gray-50 p-2 m-2 w-20 grid place-content-center hover:bg-gray-100 duration-200 cursor-pointer">
        <p onClick={login}>Login</p>
      </div>
    </div>
  );
}
