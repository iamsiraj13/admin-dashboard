import React, { useState } from "react";

import ReactApexChart from "react-apexcharts";
// #3461FF
const SimpleDonut = () => {
  const [state, setState] = useState({
    series: [80, 20],
    options: {
      colors: ["#3461FF", "#ebf0ff"],
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
      },
      states: {
        hover: {
          filter: {
            type: "none",
            value: 1,
          },
        },
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              width: 400,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            stroke: {
              width: 5,
              //   colors: ["#1E252A"],
            },

            size: ["85"],
            labels: {
              show: true,
              total: {
                show: true,
                label: "85%",
                formatter: () => "Total Traffic",
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

export default SimpleDonut;
