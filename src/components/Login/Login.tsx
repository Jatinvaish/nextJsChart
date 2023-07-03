"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import Dashboard from "@/pages/dashboard/Dashboard";

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
      <Button variant={"contained"} color={"success"} onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};

export default Login;
