import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import NewsList from "../components/NewsList";
import StockChart from "../components/StockChart";
import { fetchData, newsListOptions } from "../utils/fetchData";

const Home = () => {
  return (
    <>
      <NewsList />
      <StockChart />
    </>
  );
};

export default Home;
