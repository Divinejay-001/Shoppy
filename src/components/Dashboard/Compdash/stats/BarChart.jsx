import React from 'react'
import Chart from 'react-apexcharts'
const BarChart = ({darkMode}) => {
    const chartConfig = {
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 240,
      toolbar: {
        show: false,
      },
    },
    title: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#D22DC9"],
    plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
          colors: {
            backgroundBarColors: darkMode ? ["#333"] : ["#eee"], // Background bars
            backgroundBarOpacity: 0.2,
          },
        },
      },
      colors: ["#D22DC9"], // Ensures the bars have the desired color
      
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#D22DC9",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 500,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#D22DC9",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 500,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#a0a0a0",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

  return (
    <div className='px-2 pb-0'>
        <Chart
   options={chartConfig.options}
   series={chartConfig.series}
    type="bar"
    height={240}
   />
    </div>
  )
}

export default BarChart