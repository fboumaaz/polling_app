// copied from  https://mui.com/components/drawers/#mini-variant-drawer

import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

interface AppDrawerProps {
  children: JSX.Element;
}

const AppDrawer = ({ children }: AppDrawerProps) => (
  <Box sx={{ display: "flex" }}>
    <CssBaseline />
    <AppBar position="fixed">
      <Toolbar>
        <Avatar sx={{ mr: 1 }} alt="Remy Sharp" src="/src/favicon.svg" />
        <Typography variant="h5" noWrap>
          Voting poll
        </Typography>
      </Toolbar>
    </AppBar>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 5
      }}
    >
      {children}
    </Box>
  </Box>
);
export default AppDrawer;
