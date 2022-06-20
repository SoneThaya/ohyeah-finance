import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import NewsList from "../components/NewsList";
import { fetchData, newsListOptions } from "../utils/fetchData";

const Home = () => {
  return (
    <>
      <NewsList />
    </>
  );
};

export default Home;
