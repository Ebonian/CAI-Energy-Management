import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import { Context } from "../context/main";

export default function Info() {
  const { session, username, data, isData, logout } = useContext(Context);

  if (!session) {
    return <Navigate to="/auth" />;
  }

  return (
    <Layout page="Information">
      <div className="flex w-full p-5 rounded-2xl bg-white">
        <div className="flex items-center mt-10 space-y-5 flex-col w-96 select-none">
          <div className="grid place-content-center w-20 h-20 rounded-full bg-gray-100">
            <p className="font-semibold text-lg text-gray-400">{username}</p>
          </div>
          <p
            className="text-gray-700 hover:text-red-500 cursor-pointer duration-300"
            onClick={logout}
          >
            Logout
          </p>
        </div>
        <div className="flex flex-col flex-grow px-10">
          <h1 className="font-semibold">Store Information</h1>
          <hr className="my-3" />
          <div className="flex w-full space-x-10 mt-7">
            <div className="flex flex-col flex-grow space-y-6">
              <InfoBox title="Store Code" content={username} />
              <InfoBox
                title="Location"
                content={data.location ? data.location : "Unknown"}
              />
              <InfoBox
                title="Sale Area"
                content={data.saleArea ? data.saleArea : "Unknown"}
              />
            </div>
            <div className="flex flex-col flex-grow space-y-6">
              <InfoBox
                title="Store Name"
                content={data.name ? data.name : "Unknown"}
              />
              <InfoBox
                title="Opened Date"
                content={data.openedDate ? data.openedDate : "Unknown"}
              />
              <InfoBox
                title="Back Area"
                content={data.backArea ? data.backArea : "Unknown"}
              />
            </div>
            <div className="flex flex-col flex-grow space-y-6">
              <InfoBox
                title="Manager"
                content={data.manager ? data.manager : "Unknown"}
              />
              <InfoBox
                title="Store Type"
                content={data.type ? data.type : "Unknown"}
              />
              <InfoBox
                title="All Area"
                content={data.allArea ? data.allArea : "Unknown"}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function InfoBox({ title, content }) {
  return (
    <div className="relative p-3 w-full rounded-xl border-2">
      <div className="absolute -top-3 left-2 bg-white px-2 text-gray-500 text-sm select-none">
        {title}
      </div>
      <p>{content}</p>
    </div>
  );
}
