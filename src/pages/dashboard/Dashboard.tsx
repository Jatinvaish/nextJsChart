import React from "react";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow";
import Grid from "@mui/material/Grid";
import Profile from "./profile/Profile";

const Dashboard = () => {
  return (
    <Grid sx={{ display: 'flex' }} container gap={1} >
      <Profile />
      <Grid sx={{width:'74%'}}>  <TransactionsPerDay />
        <TransactionBottomRow /></Grid>
    </Grid>
  );
};
export default Dashboard;
