import { useState, useContext } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Context } from "../context/main";
import Navigation from "./Navigation";

export default function Layout({ children, page }) {
  const { session, logout, focusNav, isData, username } = useContext(Context);

  // const [userMenu, setUserMenu] = useState(false);

  // const userMenuHandler = () => {
  //   setUserMenu(!userMenu);
  // };

  return (
    <div className="flex min-h-screen w-full bg-gray-200">
      <Navigation active={page} />
      {isData ? (
        <>
          <div
            className={`w-full py-6 ${
              focusNav ? "pl-60" : "pl-24"
            } bg-gray-200 duration-300`}
          >
            <div className="px-24 space-y-10 relative">
              <div className="w-full flex justify-between items-center text-gray-700">
                <h1 className="text-2xl font-bold text-gray-700">{page}</h1>
                <Link
                  to="/info"
                  className="flex items-center space-x-2 select-none cursor-pointer"
                  // onClick={userMenuHandler}
                >
                  {/* <div className="grid place-content-center w-[2.75rem] h-[2.75rem] rounded-full bg-gray-100">
                    <p className="font-semibold text-xs text-gray-400">
                      {username}
                    </p>
                  </div> */}
                  <p>{`${session?.email}`.slice(0, -4)}</p>
                  {/* <FiChevronDown
                    className={userMenu ? "rotate-180" : "rotate-0"}
                  /> */}
                </Link>
              </div>
              {/* {userMenu && (
                <div className="absolute right-20 mr-2 top-0 bg-white rounded-xl w-48 h-20 shadow-xl px-3 py-2 z-50">
                  <p className="cursor-pointer" onClick={logout}>
                    Logout
                  </p>
                </div>
              )} */}
              <div className="space-y-12">{children}</div>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full h-screen grid place-content-center">
          <h1 className="text-2xl font-bold text-gray-300 select-none">
            fetching data...
          </h1>
        </div>
      )}
    </div>
  );
}
