"use client";

import { signIn, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import Dashboard from "@/pages/dashboard/Dashboard";
import { Box } from "@mui/material";
import scss from "./SignIN.module.scss";

const Login = () => {
  const { data: session } = useSession();
  //login page that render first in application
  if (session) {
    return (
      <>
        <Dashboard />
      </>
    );
  }
  return (
    <>
      <Box className={scss.center}>
        <Button variant={"contained"} color={"success"} onClick={() => signIn()}>
          Sign in
        </Button>
      </Box>
    </>
  );
};

export default Login;
