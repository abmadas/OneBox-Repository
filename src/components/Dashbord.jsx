import React, { useState } from "react";
import { Box, createTheme, ThemeProvider, CssBaseline, Typography, TextField } from "@mui/material";
import Sidebar from "../components/OneBoxPage/SideBar";
import Header from "../components/OneBoxPage/Header";
import InboxList from "./OneBoxPage/InboxList"; // Ensure this path is correct
import CenteredImage from "../utils/centerImg.png"; // Import the uploaded image

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState("home");

  const handleToggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleMenuClick = (key) => {
    setSelectedComponent(key);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  const renderComponent = () => {
    switch (selectedComponent) {
      case "inbox":
        return <InboxList isDarkMode={isDarkMode} />; // Pass isDarkMode as a prop
      case "home":
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              textAlign: "center",
            }}
          >
            <img src={CenteredImage} alt="Centered Icon" style={{ maxWidth: "100%", height: "auto" }} />
            <Typography variant="h6" sx={{ mt: 2 }}>
              It's the beginning of a legendary sales pipeline
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              When you have inbound E-mails you'll see them here
            </Typography>
          </Box>
        );
      // Add more cases for other components
      default:
        return <div>Home Component</div>;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar
          isDarkMode={isDarkMode}
          onToggleTheme={handleToggleTheme}
          onMenuClick={handleMenuClick}
        />
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Header onToggleTheme={handleToggleTheme} isDarkMode={isDarkMode} />
          <Box sx={{ flexGrow: 1, padding: 0, m: 0 }}>
            {renderComponent()}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
