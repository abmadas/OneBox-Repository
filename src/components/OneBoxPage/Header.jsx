import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Avatar, Box, Switch } from "@mui/material";
import logo from '../../utils/M logo.png'; // Assuming you have the logo in this path.

const Header = ({ onToggleTheme, isDarkMode }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: isDarkMode ? "#333" : "#fff", color: isDarkMode ? "#fff" : "#000" }}>
      <Toolbar>
        {/* Logo and Title */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          
          <Typography variant="h6" noWrap component="div">
            Onebox
          </Typography>
        </Box>

        {/* Theme Toggle Switch */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" sx={{ marginRight: 1 }}>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </Typography>
          <Switch checked={isDarkMode} onChange={onToggleTheme} />
          <Avatar sx={{ bgcolor: "green", marginLeft: 2 }}>AS</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
