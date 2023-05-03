import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BgLineChartSmall = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "series1",
        data: [0, 470, 170, 600, 802, 170, 860, 260, 30],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: false,
      },
      grid: {
        show: false,
        borderColor: "#90A4AE",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          gradientToColors: undefined,
          opacityFrom: 0.7,
          opacityTo: 0.6,
          stops: [20, 100, 100, 100],
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      xaxis: {
        // type: "datetime",
        categories: [],
        show: false,
        labels: {
          show: false,
        },
      },

      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={90}
      />
    </div>
  );
};

export default BgLineChartSmall;
