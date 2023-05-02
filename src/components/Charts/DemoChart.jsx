import React from "react";
import Chart from "react-apexcharts";
const DemoChart = () => {
  return (
    <div className="ml-[-33px]">
      <Chart
        type="bar"
        width={150}
        height={100}
        series={[
          {
            name: "Company1",
            data: [100, 200, 300, 400, 250, 450],
            color: "#3461ff",
          },
        ]}
        options={{
          chart: {
            type: "bar",
            toolbar: {
              show: false,
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

          plotOptions: {
            bar: {
              borderRadius: 2,
              columnWidth: "5",
            },
          },
          colors: ["#000"],
          grid: {
            show: false,
          },
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
            offsetY: -20,
          },
        }}
      />
    </div>
  );
};

export default DemoChart;
