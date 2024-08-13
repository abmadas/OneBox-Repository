import React from "react";
import { Box, List, ListItem, ListItemIcon, Avatar, Switch } from "@mui/material";
import {
  AccountCircle as AccountCircleIcon,
  Email,
  FormatListBulletedRounded,
  Home,
  InboxRounded,
  Leaderboard,
  PersonSearch,
  Telegram,
} from "@mui/icons-material";
import logo from "../../utils/M logo.png"; // Ensure the correct path to your logo

const Sidebar = ({ isDarkMode, onToggleTheme, onMenuClick }) => {
  const menuItems = [
    { icon: <Home />, key: "home" },
    { icon: <PersonSearch />, key: "search" },
    { icon: <Email />, key: "email" },
    { icon: <Telegram />, key: "telegram" },
    { icon: <FormatListBulletedRounded />, key: "list" },
    { icon: <InboxRounded />, key: "inbox" },
    { icon: <Leaderboard />, key: "leaderboard" },
  ];

  return (
    <Box
      sx={{
        width: 80,
        height: "100vh",
        backgroundColor: isDarkMode ? "#111" : "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 2,
      }}
    >
      <Avatar
        sx={{ bgcolor: "black", mb: 2 }}
        variant="square"
        src={logo}
        alt="Logo"
      />

      <List sx={{ color: isDarkMode ? "#fff" : "#000", width: "100%", mt: 2 }}>
        {menuItems.map(({ icon, key }) => (
          <ListItem key={key} button sx={{ justifyContent: "center", mb: 3 }} onClick={() => onMenuClick(key)}>
            <ListItemIcon sx={{ justifyContent: "center" }}>
              {React.cloneElement(icon, { sx: { color: isDarkMode ? "#fff" : "#000" } })}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: "auto", mb: 2, textAlign: "center" }}>
        <AccountCircleIcon sx={{ color: isDarkMode ? "#fff" : "#000" }} />
      </Box>
    </Box>
  );
};

export default Sidebar;
