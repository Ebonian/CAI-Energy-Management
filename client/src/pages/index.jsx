import { useContext } from "react";
import { Navigate } from "react-router-dom";
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
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

export default function Home() {
  const { session, data } = useContext(Context);

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
    // Legend
  );

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: "top",
  //     },
  //     title: {
  //       display: true,
  //       text: "Chart.js Line Chart",
  //     },
  //   },
  // };

  // console.log(data[0].amount.actual[2021]);
  // console.log(data[0].score.slice(-1));
  // console.log(data[1].score.slice(-1));
  // console.log(data[2].score.slice(-1));
  // console.log(data[3].score.slice(-1));

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
  ];

  return (
    <Layout page="Dashboards">
      <div className="grid w-full grid-cols-3 gap-24">
        <div className="rounded-2xl bg-white h-48 p-3">
          <h3 className="font-bold text-xl text-gray-700">Effiency Score</h3>
          <h1 className="font-bold text-5xl text-gray-700">8.345</h1>
        </div>
        <div className="rounded-2xl bg-white h-48 p-3">
          <h3 className="font-bold text-xl text-gray-700">Current Ranking</h3>
        </div>
        <div className="rounded-2xl bg-white h-48 p-3"></div>
      </div>
      <div className="w-full p-5 rounded-2xl bg-white">
        <Line
          data={{
            labels,
            datasets: [
              {
                label: "Actual",
                // data: data[0].amount.actual[2021],
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
              {
                label: "Predicted",
                // data: data[0].amount.predicted[2021],
                // borderColor: "rgb(53, 162, 235)",
                // backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
            ],
          }}
          options={{ responsive: true, maintainAspectRatio: true }}
          height={80}
        />
      </div>
    </Layout>
  );
}

// selected data
// 0, 16, 34, 54
