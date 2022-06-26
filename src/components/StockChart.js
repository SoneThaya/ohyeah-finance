import React, { useState, useEffect } from "react";
import { mockTeslaGetChartData } from "../utils/mockTeslaGetChartData";
import {
  YAxis,
  XAxis,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StockChart = () => {
  const [chartData, setChartData] = useState([]);
  const [timestampArr, setTimestampArr] = useState([]);
  const [highQuote, setHighQuote] = useState([]);
  const [openQuote, setOpenQuote] = useState([]);
  const [closeQuote, setCloseQuote] = useState([]);
  const [lowQuote, setLowQuote] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setChartData(mockTeslaGetChartData);
    setTimestampArr(chartData.timestamp);
    setHighQuote(mockTeslaGetChartData.indicators.quote[0].high);
    setLowQuote(mockTeslaGetChartData.indicators.quote[0].low);
    setCloseQuote(mockTeslaGetChartData.indicators.quote[0].close);
    setOpenQuote(mockTeslaGetChartData.indicators.quote[0].open);

    console.log("high", highQuote);
    convertTimeStamp(mockTeslaGetChartData.timestamp);

    createGraphData(convertedArr, highQuote, lowQuote, closeQuote, openQuote);
    setData(graphData.slice(50, 61));
    console.log(data);
  }, [highQuote]);

  let convertedArr = [];
  let graphData = [];

  const createGraphData = (arr1, arr2, arr3, arr4, arr5) => {
    for (let i = 0; i < arr1.length; i++) {
      graphData.push({
        date: arr1[i],
        high: arr2[i],
        low: arr3[i],
        close: arr4[i],
        open: arr5[i],
      });
    }

    console.log("graphData", graphData);
  };

  const convertTimeStamp = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let theDate = new Date(arr[i] * 1000).toLocaleDateString("en-US");
      convertedArr.push(theDate);
    }
    console.log("convertedArr", convertedArr);
  };

  return (
    <LineChart
      width={1000}
      height={800}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="high"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="low" stroke="#FF0000" />
      <Line type="monotone" dataKey="close" stroke="#0000FF" />
      <Line type="monotone" dataKey="open" stroke="#82ca9d" />
    </LineChart>
  );
};

export default StockChart;
