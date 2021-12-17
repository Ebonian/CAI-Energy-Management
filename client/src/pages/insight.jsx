import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Context } from "../context/main";

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

export default function Insight() {
  const { session, isSupport, data, isData } = useContext(Context);

  if (session) {
    if (!isSupport) {
      return <Navigate to="/" />;
    }
  } else {
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
    // 2017
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    // 2018
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    // 2019
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    // 2020
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    // 2021
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

  const allAmount = [].concat.apply([], Object.values(data.amount.actual));

  const allPredicted = [].concat.apply(
    [],
    Object.values(data.amount.predicted)
  );

  console.log(data.kudsan);

  return (
    <Layout page="Insight">
      <Tile
        title="Electricity Usage"
        legend={
          <>
            <Legend val="Actual" color="bg-secondary-400" />
            <Legend val="Predicted" color="bg-gray-200" />
          </>
        }
      >
        <Line
          data={{
            labels,
            datasets: [
              {
                label: "Actual",
                data: isData && allAmount,
                borderColor: "#01a550",
                backgroundColor: "#01a550",
              },
              {
                label: "Predicted",
                data: isData && allPredicted,
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
      </Tile>
      <Tile
        title="Efficiency Score"
        legend={<Legend val="Score" color="bg-secondary-400" />}
      >
        <Line
          data={{
            labels,
            datasets: [
              {
                label: "Score",
                data: isData && data.score,
                borderColor: "#01a550",
                backgroundColor: "#01a550",
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
      </Tile>
      {data.kudsan || data.allcafe || !data.inverter ? (
        <div className="p-5 rounded-2xl bg-white space-y-5">
          <h3 className="font-bold text-xl text-gray-700">Suggestion</h3>
          <div className="flex justify-start items-center w-full space-x-5">
            {data.kudsan && (
              <div className="py-2 px-4 bg-gray-100 rounded-xl">Kudsan</div>
            )}
            {data.allcafe && (
              <div className="py-2 px-4 bg-gray-100 rounded-xl">All Cafe</div>
            )}
            {!data.inverter && (
              <div className="py-2 px-4 bg-gray-100 rounded-xl">
                Fix-Speed A/C Type
              </div>
            )}
            <p>are effect on branch's energy consumption</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </Layout>
  );
}

function Tile({ title, children, legend }) {
  return (
    <div className="w-full p-5 rounded-2xl bg-white">
      <h3 className="font-bold text-xl text-gray-700">{title}</h3>
      <div className="flex justify-between items-center w-full pl-32 pr-24 mt-10">
        <div className="flex items-center space-x-8">{legend}</div>
      </div>
      <div className="w-full px-24 py-4 mt-2 mb-4">{children}</div>
    </div>
  );
}

function Legend({ val, color }) {
  return (
    <div className="flex items-center space-x-3">
      <div className={`w-8 h-4 rounded-full ${color}`} />
      <p className="text-gray-600">{val}</p>
    </div>
  );
}
