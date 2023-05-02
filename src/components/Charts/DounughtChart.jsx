import React, { useState } from "react";

import ReactApexChart from "react-apexcharts";
// #3461FF
const DounughtChart = () => {
  const [state, setState] = useState({
    series: [44, 55, 30],
    options: {
      colors: ["#3461FF", "#8ea8fd", "#c1cfff"],
      chart: {
        width: 10,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80",
            labels: {
              show: true,
              total: {
                fontSize: 30,
                showAlways: true,
                show: true,
              },
            },
          },
        },
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        show: false,
      },
    },
  });
  return (
    <>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width={380}
      />
    </>
  );
};

export default DounughtChart;
