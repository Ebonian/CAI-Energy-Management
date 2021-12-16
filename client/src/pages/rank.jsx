import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Context } from "../context/main";

export default function Rank() {
  const {
    session,
    isSupport,
    branchRank,
    isData,
    focusNav,
    data,
    allData,
    username,
  } = useContext(Context);

  if (session) {
    if (!isSupport) {
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/auth" />;
  }

  const rankedData = allData.sort(
    (a, b) => parseFloat(b.score.slice(-1)) - parseFloat(a.score.slice(-1))
  );

  return (
    <Layout page="Ranking">
      <div className="flex items-start space-x-20">
        <div className="flex-grow rounded-2xl bg-white p-5">
          <div className="flex justify-between items-start w-full">
            <div>
              <h3 className="font-bold text-xl text-gray-700">Ranking</h3>
              <p className="text-gray-400 text-sm">Updated --/--/2021</p>
            </div>
            <div className="flex items-center bg-gray-100 py-2 px-3 space-x-3 rounded-xl">
              <FiSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="outline-none bg-gray-100 select-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 mt-6 text-gray-600">
            <p>Rank</p>
            <p>Store Name</p>
            <p>Score</p>
            <p>Streak</p>
          </div>
          <hr className="my-3" />
          <div className="space-y-4">
            {rankedData.map((data, idx) => (
              <div
                className={`grid grid-cols-4 font-medium p-2 ${
                  "0000".substring(0, "0000".length - ("" + data._id).length) +
                    ("" + data._id) ===
                  username
                    ? "bg-gray-100 rounded-xl"
                    : ""
                }`}
                key={idx}
              >
                <h4 className="px-2">{idx + 1}</h4>
                <div>
                  <h4>
                    {"0000".substring(
                      0,
                      "0000".length - ("" + data._id).length
                    ) +
                      ("" + data._id)}
                  </h4>
                  <p className="font-normal text-sm text-gray-400">
                    {!data.name && "unknown name"}
                  </p>
                </div>
                <h4>{Math.round(data.score.slice(-1) * 100) / 100}</h4>
                <div className="flex">
                  <h4>-</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`flex justify-start items-center flex-col ${
            focusNav ? "w-[17rem]" : "w-80"
          } duration-300 bg-white rounded-2xl p-6 space-y-3`}
        >
          <h1 className="font-bold text-6xl text-gray-700">
            {isData && branchRank}
          </h1>
          <h4>Current Rank</h4>
        </div>
      </div>
    </Layout>
  );
}
