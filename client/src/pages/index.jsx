import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../context/main";
import Layout from "../components/Layout";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { FiAward, FiChevronDown, FiChevronUp, FiMinus } from "react-icons/fi";

export default function Home() {
  const { session, data, isData, branchRank, isSupport, positionChange } =
    useContext(Context);

  if (!session) {
    return <Navigate to="/auth" />;
  }

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
  );

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    // "Oct",
    // "Nov",
    // "Dec",
  ];

  return (
    <Layout page="Dashboards">
      <div className="grid w-full grid-cols-3 gap-24">
        <div className="flex justify-center items-center flex-col rounded-2xl bg-white h-48 p-3 space-y-4 pb-8 text-gray-700">
          <h3 className="font-bold text-xl">Effiency Score</h3>
          <div className="flex space-x-5">
            <FiAward className="text-5xl" />
            <h1 className="font-bold text-5xl">
              {isData && Math.round(data.score.slice(-1) * 100) / 100}
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col rounded-2xl bg-white h-48 p-3 space-y-4 pb-8 text-gray-700">
          <h3 className="font-bold text-xl">Current Rank</h3>
          <div className="flex items-center space-x-3">
            <p
              className={`flex items-center select-none font-bold text-xl ${
                positionChange == 0
                  ? "text-yellow-400"
                  : positionChange > 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              <span>{Math.abs(positionChange)}</span>
              <span className="text-3xl">
                {positionChange == 0 ? (
                  <div className="rounded-full h-1 w-4 bg-yellow-400 mx-2" />
                ) : positionChange > 0 ? (
                  <FiChevronUp />
                ) : (
                  <FiChevronDown />
                )}
              </span>
            </p>
            <h1 className="font-bold text-5xl pr-12">{isData && branchRank}</h1>
          </div>
        </div>
        <div className="rounded-2xl bg-white h-48 p-3"></div>
      </div>
      <div className="w-full p-5 rounded-2xl bg-white">
        <h3 className="font-bold text-xl text-gray-700">Electricity Usage</h3>
        <div className="flex justify-between items-center w-full pl-32 pr-24 mt-10">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-4 rounded-full bg-secondary-400" />
              <p className="text-gray-600">Actual</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-4 rounded-full bg-gray-200" />
              <p className="text-gray-600">Predicted</p>
            </div>
          </div>
          {isSupport && (
            <div className="flex items-center select-none">
              <Link
                to="/insight"
                className="text-gray-400 bg-gray-200 px-3 py-1.5 rounded-full bg-opacity-0 hover:bg-opacity-50 duration-300"
              >
                More Detail
              </Link>
            </div>
          )}
        </div>
        <div className="w-full px-24 py-4 mt-2 mb-4">
          <Line
            data={{
              labels,
              datasets: [
                {
                  label: "Actual",
                  data: isData && data.amount.actual[2021],
                  borderColor: "#FD6584",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                {
                  label: "Predicted",
                  data: isData && data.amount.predicted[2021],
                  // borderColor: "rgb(53, 162, 235)",
                  // backgroundColor: "rgba(53, 162, 235, 0.5)",
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              elements: {
                line: {
                  tension: 0.35,
                },
              },
              scales: {
                xAxes: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
            height={300}
          />
        </div>
      </div>
    </Layout>
  );
}

// selected data
// 0, 16, 34, 54
