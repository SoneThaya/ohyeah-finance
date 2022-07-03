import React, { useState, useEffect } from "react";
import { mockTeslaGetProfileData } from "../utils/mockTeslaGetProfileData";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StockProfile = () => {
  const [companyOfficers, setCompanyOfficers] = useState([]);

  //   useEffect(() => {
  //     setCompanyOfficers(mockTeslaGetProfileData.assetProfile.companyOfficers);
  //     console.log(companyOfficers);
  //   }, [companyOfficers]);

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>{mockTeslaGetProfileData.assetProfile.address1}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Sector(s): {mockTeslaGetProfileData.assetProfile.sector}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            {mockTeslaGetProfileData.assetProfile.city}{" "}
            {mockTeslaGetProfileData.assetProfile.state}{" "}
            {mockTeslaGetProfileData.assetProfile.zip}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>Industry: {mockTeslaGetProfileData.assetProfile.industry}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{mockTeslaGetProfileData.assetProfile.country}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            Full Time Employees:{" "}
            {mockTeslaGetProfileData.assetProfile.fullTimeEmployees}
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{mockTeslaGetProfileData.assetProfile.phone}</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>{mockTeslaGetProfileData.assetProfile.website}</Item>
        </Grid>
      </Grid>
      <h1>Key Executives</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Pay</TableCell>
              <TableCell align="right">Exercised</TableCell>
              <TableCell align="right">Year Born</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockTeslaGetProfileData.assetProfile.companyOfficers.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">
                  {/* {row.totalPay.fmt ? row.totalPay.fmt : "N/A"} */}
                  N/A
                </TableCell>
                <TableCell align="right">
                  {row.exercisedValue.fmt ? row.exercisedValue.fmt : "N/A"}
                </TableCell>
                <TableCell align="right">
                  {row.yearBorn ? row.yearBorn : "N/A"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StockProfile;
