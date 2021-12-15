import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import { Context } from "../context/main";

export default function Info() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    session,
    login,
    logout,
    focusNav,
    username,
  } = useContext(Context);

  if (!session) {
    return <Navigate to="/auth" />;
  }

  return (
    <Layout page="Information">
      <div className="flex w-full p-5 rounded-2xl bg-white">
        <div className="flex items-center flex-col w-96">
          <p>{username}</p>
        </div>
        <div className="flex flex-col flex-grow px-10">
          <h1 className="font-semibold">Store Information</h1>
          <hr className="my-3" />
          <div className="flex w-full space-x-10 mt-7">
            <div className="flex flex-col flex-grow space-y-6">
              <InfoBox title="Store Code" content={username} />
              <InfoBox title="Location" content="Unknown" />
              <InfoBox title="Sale Area" content="Unknown" />
            </div>
            <div className="flex flex-col flex-grow space-y-6">
              <InfoBox title="Store Name" content="Unknown" />
              <InfoBox title="Opened Date" content="Unknown" />
              <InfoBox title="Back Area" content="Unknown" />
            </div>
            <div className="flex flex-col flex-grow space-y-6">
              <InfoBox title="Manager" content="Unknown" />
              <InfoBox title="Store Type" content="Unknown" />
              <InfoBox title="All Area" content="Unknown" />
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
