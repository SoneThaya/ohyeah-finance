import React, { useState, useEffect } from "react";
import { fetchData, newsListOptions } from "../utils/fetchData";

import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { mockGetNewsListData } from "../utils/mockGetNewsListData";
import NewsListCard from "./NewsListCard";
import NewsListItem from "./NewsListItem";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    //     const fetchNewsData = async () => {
    //       let newsData = [];

    //       newsData = await fetchData(
    //         "https://yh-finance.p.rapidapi.com/news/v2/list",
    //         newsListOptions
    //       );
    //       console.log(newsData.data.main.stream);
    //       setNews(newsData.data.main.stream);
    //     };

    //     fetchNewsData();
    setNews(mockGetNewsListData);
  }, [news]);

  return (
    <>
      <h1>News!!!</h1>
      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {news.map((item, index) => (
          <Grid item xs={6} key={item.id}>
            <NewsListCard item={item} index={index} />
          </Grid>
        ))}
      </Grid> */}
      <div className="news__list__container">
        {mockGetNewsListData.map((item, index) => (
          <NewsListItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default NewsList;
