import React, { useState, useEffect, useContext } from "react";
import { useTheme } from "@mui/material";
import { ThemeContext } from "../ThemeContext";
import useStyles from "./Styles";
import ResumePdf from "../assets/Maximilian Oberholtzer Resume 2023.pdf";
import { AppBar, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Drawer, Box, List } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button, useMediaQuery } from "@mui/material";

const resumeClick = () => {
  window.open(ResumePdf, "_blank");
};

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const classes = useStyles();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const MuiTheme = useTheme();
  const collapse = useMediaQuery(MuiTheme.breakpoints.down("sm"));

  useEffect(() => {
    setTimeout(() => {
      setHasAnimated(true);
    }, 1000);

    // const handleScroll = () => {
    //   setIsScrolled(window.scrollY > 0);
    // };
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  //save the user's selected color theme choice
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(isOpen);
  };

  const drawer = (
    <>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon className={classes.drawerButton} />
        </Button>
      </div>

      <Drawer
        className={classes.drawer}
        anchor={"right"}
        variant="temporary"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <Box role="presentation" onKeyDown={toggleDrawer(false)}>
          <List>
            <Button className={classes.resumeButton} onClick={resumeClick}>
              <Typography>Resume</Typography>
            </Button>
          </List>
          <List>
            <Button
              className={classes.appBarButton}
              onClick={toggleDrawer(false)}
            >
              <Typography>About</Typography>
            </Button>
          </List>
          <List>
            <Button
              className={classes.appBarButton}
              onClick={toggleDrawer(false)}
            >
              <Typography>Experience</Typography>
            </Button>
          </List>
          <List>
            <Button
              className={classes.appBarButton}
              onClick={toggleDrawer(false)}
            >
              <Typography>Hobbies</Typography>
            </Button>
          </List>
          <List>
            <Button
              className={classes.appBarButton}
              onClick={toggleDrawer(false)}
            >
              <Typography>Projects</Typography>
            </Button>
          </List>
          <List>
            <Button
              className={classes.appBarButton}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
            </Button>
          </List>
        </Box>
      </Drawer>
    </>
  );

  const navbar = (
    <>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button
          className={classes.appBarButton}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
        </Button>
      </div>

      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button className={classes.appBarButton}>
          <Typography>About</Typography>
        </Button>
      </div>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button className={classes.appBarButton}>
          <Typography>Experience</Typography>
        </Button>
      </div>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button className={classes.appBarButton}>
          <Typography>Hobbies</Typography>
        </Button>
      </div>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button className={classes.appBarButton}>
          <Typography>Projects</Typography>
        </Button>
      </div>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button className={classes.resumeButton} onClick={resumeClick}>
          <Typography> Resume</Typography>
        </Button>
      </div>
    </>
  );

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <div className={classes.appBarContainer}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Logo
          </Typography>
          {collapse ? drawer : navbar}
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Navbar;
