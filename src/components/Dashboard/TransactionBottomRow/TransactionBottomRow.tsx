"use client";

import Grid from "@mui/material/Grid";
import React from "react";
import Paper from "@mui/material/Paper";
import { doughnutChartData, pieChartData } from "@/components/mockData";
import scss from "./TransactionsBottomRow.module.scss";
import { Pie, Doughnut } from 'react-chartjs-2'


// for piechart and doughnut component


const TransactionBottomRow = () => {
  return (
    <Grid container className={scss.bottomRow}>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type with pie</p>
          <Pie data={pieChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type with doughnut</p>
          <Doughnut data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow;
