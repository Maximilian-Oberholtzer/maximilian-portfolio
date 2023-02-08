import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import useStyles from "./Styles";
import ResumePdf from "../assets/Maximilian Oberholtzer Resume 2023.pdf";
import { AppBar, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer, Box, List } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button, useMediaQuery } from "@mui/material";

const resumeClick = () => {
  window.open(ResumePdf, "_blank");
};

const Navbar = () => {
  const classes = useStyles();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const collapse = useMediaQuery(theme.breakpoints.down("sm"));

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
            <Button
              className={classes.resumeButton}
              color="inherit"
              onClick={resumeClick}
            >
              <Typography>Resume</Typography>
            </Button>
          </List>
          <List>
            <Button onClick={toggleDrawer(false)} color="inherit">
              <Typography>About</Typography>
            </Button>
          </List>
          <List>
            <Button onClick={toggleDrawer(false)} color="inherit">
              <Typography>Experience</Typography>
            </Button>
          </List>
          <List>
            <Button onClick={toggleDrawer(false)} color="inherit">
              <Typography>Hobbies</Typography>
            </Button>
          </List>
          <List>
            <Button onClick={toggleDrawer(false)} color="inherit">
              <Typography>Projects</Typography>
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
        <Button>
          <Typography>About</Typography>
        </Button>
      </div>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button>
          <Typography>Experience</Typography>
        </Button>
      </div>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button>
          <Typography>Hobbies</Typography>
        </Button>
      </div>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button>
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
