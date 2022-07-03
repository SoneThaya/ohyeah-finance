import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import NewsList from "../components/NewsList";
import StockChart from "../components/StockChart";
import StockProfile from "../components/StockProfile";
import Summary from "../components/Summary";
import { fetchData, newsListOptions } from "../utils/fetchData";

const Home = () => {
  return (
    <>
      <NewsList />
      <StockChart />
      <Summary />
      <StockProfile />
    </>
  );
};

export default Home;
