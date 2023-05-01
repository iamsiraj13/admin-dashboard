import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChartSM = () => {
  const [state, setState] = useState({
    series: [
      {
        data: [10, 20, 15, 16, 10],
      },
    ],
    options: {
      chart: {
        type: "line",
        toolbar: {
          show: false,
        },
      },

      tooltip: {
        backgroundColor: "#000",
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: true,
        intersect: false,
        custom: undefined,
        fillSeriesColor: "black",
        theme: false,
        style: {
          fontSize: "12px",
          fontFamily: undefined,
        },
        onDatasetHover: {
          highlightDataSeries: true,
        },
        x: {
          show: true,
          format: "dd MMM",
          formatter: undefined,
        },
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName) => seriesName,
          },
        },
        z: {
          formatter: undefined,
          title: "<Size:10></Size:10> ",
        },
        marker: {
          show: false,
        },

        fixed: {
          enabled: true,
          position: "topRight",
        },
      },
      markers: {
        size: 0,
        colors: undefined,
        strokeColors: "#fff",
        hover: {
          size: 5,
          sizeOffset: 3,
        },
      },

      stroke: {
        width: 2,
        curve: "smooth",
      },
      yaxis: {
        labels: {
          show: false,
        },
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
    },
  });
  return (
    <>
      {" "}
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={100}
        width={150}
      />
    </>
  );
};

export default LineChartSM;
