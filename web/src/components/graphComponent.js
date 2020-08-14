import React from "react";
import CanvasJSReact from "../lib/canvasjs.react";


export const GraphComponent = () => {
  const { CanvasJS } = CanvasJSReact;
  const { CanvasJSChart } = CanvasJSReact;

  const options = {
    theme: "light2",
    animationEnabled: true,
    title:{
      text: "Total Sales This Week"
    },
    subtitles: [{
      text: "congratulation you have made a great amount "
    }],
    axisX: {
      title: "Dates"
    },
    axisY: {
      title: "Number of items sold",
      titleFontColor: "#6D78AD",
      lineColor: "#6D78AD",
      labelFontColor: "#6D78AD",
      tickColor: "#6D78AD"
    },
    axisY2: {
      title: "Profit in USD",
      titleFontColor: "#51CDA0",
      lineColor: "#51CDA0",
      labelFontColor: "#51CDA0",
      tickColor: "#51CDA0"
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      itemclick: false
    },
    data: [{
      type: "spline",
      name: "Units Sold",
      showInLegend: true,
      dataPoints: [
        { x: new Date(2017, 0, 1), y: 120 },
        { x: new Date(2017, 0, 2), y: 135 },
        { x: new Date(2017, 0, 3), y: 144 },
        { x: new Date(2017, 0, 4), y: 103 },
        { x: new Date(2017, 0, 5), y: 93 },
        { x: new Date(2017, 0, 6), y: 129 },
        { x: new Date(2017, 0, 7), y: 143 },
      ]
    },
    {
      type: "spline",
      name: "Profit",
      axisYType: "secondary",
      showInLegend: true,
      dataPoints: [
        { x: new Date(2017, 0, 1), y: 19034.5 },
        { x: new Date(2017, 0, 2), y: 20015 },
        { x: new Date(2017, 0, 3), y: 27342 },
        { x: new Date(2017, 0, 4), y: 20088 },
        { x: new Date(2017, 0, 5), y: 20234 },
        { x: new Date(2017, 0, 6), y: 29034 },
        { x: new Date(2017, 0, 7), y: 30487 },

      ]
    }]
  };

  return (
    <div className='flex flex-grow p-7 m-12 shadow-lg '>
      <div className=' flex-auto '>
        <CanvasJSChart options={options}
                    />
      </div>
      {/* You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods */}
    </div>
  );

}
