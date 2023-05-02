import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BgColorLineChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "series1",
        data: [300, 470, 170, 700, 42, 170, 460, 260, 30],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0.6,
          stops: [20, 100, 100, 100],
        },
      },
      xaxis: {
        // type: "datetime",
        categories: [
          "jan",
          "feb",
          "mar",
          "apr",
          "may",
          "jun",
          "jul",
          "aug",
          "sep",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center px-4">
        <p className="capitalize ">revenue</p>
        <p className="text-[30px]">...</p>
      </div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default BgColorLineChart;
