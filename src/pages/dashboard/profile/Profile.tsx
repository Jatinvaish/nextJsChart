"use client";
import React from "react";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Grid,
  Typography,
  Paper
} from "@mui/material";


interface SessionData {
  name: string;
  email: string;
  image: string;
}
const Profile = () => {
  const { data: session } = useSession();
  const formData: SessionData = {
    name: session?.user?.name as string,
    email: session?.user?.email as string,
    image: session?.user?.image as string
  };

  return (
    <>
      <Paper elevation={1} sx={{ width: '25%' }}>

        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar
            sx={{
              height: 70,
              width: 70,
              marginTop: 2,
            }}
            src={session?.user?.image as string}
          />
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>

          <h3 >
            {formData.name}
          </h3>
        </Grid>
        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography>
            {formData.email}
          </Typography>
        </Grid>
      </Paper >
    </>
  );
};

export default Profile;
