import { Box, Toolbar, useMediaQuery } from "@mui/material";
import { NavBar, SideBar } from "../components";
import { useState } from "react";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:599px)');

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box
      sx={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar
        isDrawerOpen={isDrawerOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <SideBar
        isSmallScreen={isSmallScreen}
        isDrawerOpen={isDrawerOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
