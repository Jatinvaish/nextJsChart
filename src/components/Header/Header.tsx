"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export type HeaderProps = {
  ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
};

const Header = (props: HeaderProps) => {
  //header with dark theme and light theme
  const { ColorModeContext } = props;
  const { data: session } = useSession();

  return (
    <AppBar position="static" sx={{ marginBottom: "20px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Chart JS
          </Typography>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Chart JS
          </Typography>
          <Box sx={{ paddingRight: 5, marginLeft: "auto" }}>
            {session && <Typography>Signed in as {session?.user?.email}</Typography>}
          </Box>
          <ThemeToggleButton ColorModeContext={ColorModeContext} />
          <Box sx={{ flexGrow: 0 }}>
            {session ?
              <IconButton onClick={() => (session ? signOut() : signIn())} >
                <ExitToAppIcon />
              </IconButton>
              : <></>}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
