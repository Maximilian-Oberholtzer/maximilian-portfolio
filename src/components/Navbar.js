import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import useStyles from "./Styles";
import ResumePdf from "../assets/Maximilian Oberholtzer Resume 2023.pdf";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@mui/material";
import "animate.css";

const resumeClick = () => {
  window.open(ResumePdf, "_blank");
};

const Navbar = () => {
  const classes = useStyles();
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Logo
          </Typography>
          <div class="animate__animated animate__fadeInDown">
            <Button color="inherit">
              <Typography>About</Typography>
            </Button>
          </div>

          <div class="animate__animated animate__fadeInDown">
            <Button color="inherit">
              <Typography>Experience</Typography>
            </Button>
          </div>
          <div class="animate__animated animate__fadeInDown">
            <Button color="inherit">
              <Typography>Hobbies</Typography>
            </Button>
          </div>
          <div class="animate__animated animate__fadeInDown">
            <Button color="inherit">
              <Typography>Projects</Typography>
            </Button>
          </div>
          <div class="animate__animated animate__fadeInDown">
            <Button
              className={classes.resumeButton}
              color="inherit"
              onClick={resumeClick}
            >
              <Typography> Resume</Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
