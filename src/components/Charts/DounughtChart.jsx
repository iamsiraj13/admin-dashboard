import React, { useState } from "react";

import ReactApexChart from "react-apexcharts";
// #3461FF
const DounughtChart = () => {
  const [state, setState] = useState({
    series: [44, 55, 30],
    options: {
      colors: ["#8ea8fd", "#3461FF", "#c1cfff"],
      chart: {
        width: 20,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      states: {
        hover: {
          filter: {
            type: "none",
            value: 1,
          },
        },
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            stroke: {
              width: 4,
              colors: ["#1E252A"],
            },

            size: ["85", "30", "60"],
            labels: {
              show: true,
              total: {
                show: true,
                label: "85%",
                formatter: () => "Total Visitors",
                fontSize: "28px",
                fontWeight: "bold",
                color: "#000",
              },
            },
          },
        },
      },

      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              width: 300,
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
      <div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
        />
      </div>
    </>
  );
};

export default DounughtChart;
