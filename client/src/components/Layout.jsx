import { useState, useContext } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Context } from "../context/main";
import Navigation from "./Navigation";

export default function Layout({ children, page }) {
  const { session, logout, focusNav } = useContext(Context);

  const [userMenu, setUserMenu] = useState(false);

  const userMenuHandler = () => {
    setUserMenu(!userMenu);
  };

  return (
    <div className="flex min-h-screen w-full">
      <Navigation active={page} />
      <div
        className={`w-full py-6 ${
          focusNav ? "pl-60" : "pl-24"
        } bg-gray-200 duration-300`}
      >
        <div className="px-24 space-y-10 relative">
          <div className="w-full flex justify-between items-center text-gray-700">
            <h1 className="text-2xl font-bold">{page}</h1>
            <div
              className="flex items-center space-x-2 select-none cursor-pointer"
              onClick={userMenuHandler}
            >
              <p>{`${session?.email}`.slice(0, -4)}</p>
              <FiChevronDown className={userMenu ? "rotate-180" : "rotate-0"} />
            </div>
          </div>
          {userMenu && (
            <div className="absolute right-24 top-6 bg-white rounded-xl w-48 h-60 shadow-xl px-3 py-2">
              <p className="cursor-pointer" onClick={logout}>
                Logout
              </p>
            </div>
          )}
          <div className="space-y-12" onClick={() => setUserMenu(false)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
