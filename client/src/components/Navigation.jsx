import { useContext } from "react";
import {
  FiBarChart2,
  FiChevronsLeft,
  FiGrid,
  FiInfo,
  FiPower,
  FiThumbsUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { Context } from "../context/main";

export default function Navigation({ active }) {
  const { isSupport, focusNav, focusNavHandler, logout } = useContext(Context);
  return (
    <div
      className={`flex h-screen fixed ${
        focusNav ? "w-60" : "w-20"
      } p-3 duration-300 select-none`}
    >
      <div className="flex flex-col items-center justify-between flex-grow bg-white rounded-2xl p-4">
        <div className="w-full">
          {/* header */}
          <div className="flex relative justify-end mr-1 overflow-clip overflow-hidden h-10">
            <div>
              {/* <img
                src={CAILogo}
                alt="CAI Logo"
                className={`${
                  focusNav
                    ? "absolute -translate-x-36"
                    : "absolute -translate-x-20"
                } h-10 duration-300`}
              /> */}
              <Link
                to="/"
                className={`${
                  focusNav
                    ? "absolute -translate-x-36"
                    : "absolute -translate-x-20"
                } h-10 duration-300 text-3xl font-bold text-secondary-400`}
              >
                ECEP
              </Link>
            </div>
            <div
              className={`p-2 w-8 h-8 rounded-full bg-gray-100 text-gray-400 cursor-pointer ${
                focusNav ? "rotate-0" : "rotate-180"
              }`}
              onClick={focusNavHandler}
            >
              <FiChevronsLeft />
            </div>
          </div>
          {/* nav list */}
          <div className="flex flex-col mt-8 space-y-1.5">
            <NavList
              active={active}
              focusNav={focusNav}
              route="/"
              name="Dashboards"
            />
            {isSupport && (
              <NavList
                active={active}
                focusNav={focusNav}
                route="/rank"
                name="Ranking"
              />
            )}
            {isSupport && (
              <NavList
                active={active}
                focusNav={focusNav}
                route="/insight"
                name="Insight"
              />
            )}
            <NavList
              active={active}
              focusNav={focusNav}
              route="/info"
              name="Information"
            />
          </div>
        </div>
        {/* logout button */}
        <div
          className="w-full overflow-hidden overflow-clip relative"
          onClick={logout}
        >
          <div
            className={` flex items-center space-x-4 cursor-pointer relative overflow-clip overflow-hidden p-3 rounded-lg duration-300 hover:bg-red-400 text-gray-400 hover:text-white`}
          >
            <FiPower className="text-lg" />
            <p
              className={`text-sm ${
                focusNav ? "absolute translate-x-4" : "absolute translate-x-4"
              }`}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavList({ active, focusNav, route, name }) {
  const IconStyle = `text-lg ${
    active === name ? "text-white" : "text-gray-400"
  }`;
  return (
    <Link
      to={route}
      className={`${
        active === name
          ? "bg-secondary-400 hover:opacity-95"
          : "hover:bg-secondary-400 hover:bg-opacity-10"
      } flex items-center space-x-4 cursor-pointer relative overflow-clip overflow-hidden p-3 rounded-lg duration-300`}
    >
      {name === "Dashboards" && <FiGrid className={IconStyle} />}
      {name === "Ranking" && <FiThumbsUp className={IconStyle} />}
      {name === "Insight" && <FiBarChart2 className={IconStyle} />}
      {name === "Information" && <FiInfo className={IconStyle} />}
      {name === "Logout" && <FiPower className={IconStyle} />}
      <p
        className={`text-sm duration-300 ${
          focusNav ? "absolute translate-x-4" : "absolute translate-x-8"
        } ${active === name ? "text-white" : "text-gray-800"}`}
      >
        {name}
      </p>
    </Link>
  );
}
