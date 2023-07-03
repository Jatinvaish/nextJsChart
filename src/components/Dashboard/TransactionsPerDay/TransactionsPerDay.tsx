"use client";

import React from "react";
import scss from "./TransactionsPerDay.module.scss";
import { Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Bar } from 'react-chartjs-2'
import { barData, barOption } from "@/components/mockData";
import Chart from 'chart.js/auto';
//use registery of chart js
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);
import { useSession } from "next-auth/react";

const TransactionsPerDay = () => {
  //get session data   
  const { data: session } = useSession();

  return (
    <Grid container gap={2} >
      <Paper className={scss.transactions}>
        <Grid className={scss.chart}>
          <Typography sx={{ paddingBottom: 4 }}>
            Hey {session ? session?.user?.name : "User"}, let's take a quick look of dashboard.
            👋
          </Typography>
          <Bar
            data={barData}
            options={barOption}
          >
          </Bar>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default TransactionsPerDay;
