"use client";

import React from "react";
import scss from "./TransactionsPerDay.module.scss";
import { Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Bar } from 'react-chartjs-2'
import { barData } from "@/components/mockData";
import Chart from 'chart.js/auto';
//use registery of chart js
import { CategoryScale } from 'chart.js';
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
            options={{
              tooltips: {
                mode: 'index',
                callbacks: {
                  label: function (toolTipItem: { value: string; }) {
                    return ("Revenue: $" + toolTipItem.value)
                  }
                }

              },
              scales: {
                //xAxes for bar chart
                //@ts-ignore
                xAxes: [
                  {
                    gridLines: {
                      color: 'cyan'
                    },
                    //describe the labels and there styles
                    scaleLabel: {
                      labelString: 'Months',
                      display: true,
                      fontColor: 'blue',
                      fontSize: 20
                    },
                    // stck colors
                    ticks: {
                      fontColor: 'green'
                    }
                  }
                ],
                //describes the line style
                //@ts-ignore
                yAxes: [
                  {
                    gridLines: {
                      color: 'cyan'
                    },
                    scaleLabel: {
                      labelString: 'Revenue',
                      display: true,
                      fontColor: 'blue',
                      fontSize: 20,
                    },
                    //we can decide limit of stcks, color of stick and position of stick 
                    ticks: {
                      beginAtZero: false,
                      fontColor: 'green',
                    }
                  }
                ]
              }
            }}
          >
          </Bar>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default TransactionsPerDay;
