import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChartBig = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "PRODUCT A",
        data: [650, 500, 900, 600, 700, 650, 600],
      },
      {
        name: "PRODUCT B",
        data: [200, 500, 600, 450, 700, 650, 600],
      },
    ],
    options: {
      chart: {
        type: "bar",
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
        offsetY: -20,
      },
      colors: ["#5279ff", "#cad6ff"],
      //   responsive: [
      //     {
      //       breakpoint: 480,
      //       options: {
      //         legend: {
      //           position: "bottom",
      //           offsetX: -10,
      //           offsetY: 0,
      //         },
      //       },
      //     },
      //   ],
      plotOptions: {
        bar: {
          columnWidth: 23,
          horizontal: false,
          borderRadius: 0,
          dataLabels: {
            total: {
              enabled: false,
            },
          },
        },
      },
      xaxis: {
        // type: "datetime",
        categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    },
  });

  return (
    <>
      <div className="w-full">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={295}
        />
      </div>
    </>
  );
};

export default BarChartBig;
