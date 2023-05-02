import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChartOne = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Inflation",
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2],
      },
    ],
    grid: {
      show: false,

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
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
      ],
    },
    options: {
      chart: {
        background: "yellow",
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [" "],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        // crosshairs: {
        //   fill: {
        //     type: "gradient",
        //     gradient: {
        //       colorFrom: "#D8E3F0",
        //       colorTo: "#BED1E6",
        //       stops: [0, 100],
        //       opacityFrom: 0.4,
        //       opacityTo: 0.5,
        //     },
        //   },
        // },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
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
        />
      </div>
    </>
  );
};

export default BarChartOne;
