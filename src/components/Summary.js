import React, { useState, useEffect } from "react";
import { mockTeslaGetSummaryData } from "../utils/mockTeslaGetSummaryData";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Summary = () => {
  const [summaryData, setSummaryData] = useState([]);
  const [previousClose, setPreviousClose] = useState([]);
  const [marketCap, setMarketCap] = useState([]);

  useEffect(() => {
    setSummaryData(mockTeslaGetSummaryData);
    setPreviousClose(mockTeslaGetSummaryData.summaryDetail.previousClose.fmt);
    setMarketCap(mockTeslaGetSummaryData.price.marketCap.fmt);
  }, [summaryData]);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Item>
          Previous Close{" "}
          {mockTeslaGetSummaryData.summaryDetail.previousClose.fmt}
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>Market Cap {mockTeslaGetSummaryData.price.marketCap.fmt}</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>Open {mockTeslaGetSummaryData.price.regularMarketOpen.fmt}</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>Beta {mockTeslaGetSummaryData.summaryDetail.beta.fmt}</Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          Bid {mockTeslaGetSummaryData.summaryDetail.bid.fmt} x{" "}
          {mockTeslaGetSummaryData.summaryDetail.bidSize.raw}
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          PE Ratio {mockTeslaGetSummaryData.summaryDetail.trailingPE.fmt}
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          Ask {mockTeslaGetSummaryData.summaryDetail.ask.fmt} x{" "}
          {mockTeslaGetSummaryData.summaryDetail.askSize.raw}
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          EPS {mockTeslaGetSummaryData.defaultKeyStatistics.trailingEps.fmt}
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          Day's Range {mockTeslaGetSummaryData.price.regularMarketDayLow.fmt} -{" "}
          {mockTeslaGetSummaryData.price.regularMarketDayHigh.fmt}
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          Earnings Date{" "}
          {mockTeslaGetSummaryData.earnings.earningsChart.earningsDate[0].fmt} -{" "}
          {mockTeslaGetSummaryData.earnings.earningsChart.earningsDate[1].fmt}
        </Item>
      </Grid>
    </Grid>
  );
};

export default Summary;
