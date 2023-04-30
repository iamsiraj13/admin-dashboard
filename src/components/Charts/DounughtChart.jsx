import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Screen 1", "Screen 2", "Screen 3", "Screen 4", "Screen 5"],
  datasets: [
    {
      data: [25.6, 32.0, 23.8, 9.9, 8.7],
      backgroundColor: ["#0D6EFD", "#212529", "#17A00E", "#F41127", "#FFC107"],
      borderColor: ["#fff"],
      borderWidth: 1,
      cutout: "60%",
    },
  ],
};
const DounughtChart = () => {
  return (
    <>
      <div>
        <Doughnut data={data} className="flex" />
      </div>
    </>
  );
};

export default DounughtChart;
