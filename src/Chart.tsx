// src/Chart.tsx
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const ApexChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "line", // Make sure this matches the allowed types
      height: 350,
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "TEAM A",
        data: [30, 40, 35, 50, 49, 60, 70],
      },
      {
        name: "TEAM B",
        data: [40, 55, 45, 60, 70, 80, 90],
      },
    ],
    xaxis: {
      categories: ["Dec 06", "Dec 07", "Dec 08", "Dec 09", "Dec 10", "Dec 11"],
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#00E396", "#008FFB"],
        inverseColors: true,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
