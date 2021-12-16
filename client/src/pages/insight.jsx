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

  if (!session) {
    return <Navigate to="/auth" />;
  }
  if (!isSupport) {
    return <Navigate to="/" />;
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
    "Oct",
    "Nov",
    "Dec",
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
    <Layout page="Insight">
      <div className="w-full p-5 rounded-2xl bg-white">
        <div className="w-full px-24 py-4 mt-2 mb-4">
          <Line
            data={{
              labels,
              datasets: [
                {
                  label: "Actual",
                  data: isData && data.amount.actual[2020],
                  borderColor: "#FD6584",
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
                {
                  label: "Predicted",
                  data: isData && data.amount.predicted[2020],
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
