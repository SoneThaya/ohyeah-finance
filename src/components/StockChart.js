import React, { useState, useEffect } from "react";
import { mockTeslaGetChartData } from "../utils/mockTeslaGetChartData";

const StockChart = () => {
  const [chartData, setChartData] = useState([]);
  const [timestampArr, setTimestampArr] = useState([]);

  useEffect(() => {
    setChartData(mockTeslaGetChartData);
    setTimestampArr(chartData.timestamp);
    console.log(timestampArr);
    convertTimeStamp(timestampArr);
  }, []);

  let convertedArr = [];

  const convertTimeStamp = (arr) => {
    //console.log(new Date(1655496004 * 1000).toLocaleDateString("en-US"));
    for (let i = 0; i < arr.length; i++) {
      let theDate = new Date(arr[i] * 1000).toLocaleDateString("en-US");
      convertedArr.push(theDate);
    }
    console.log("convertedArr", convertedArr);
  };

  return <div>StockChart</div>;
};

export default StockChart;
