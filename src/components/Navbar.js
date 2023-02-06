import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@mui/material";
import "animate.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none !important",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.shadows[3],
    },
  },
}));

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
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{
          backgroundColor: theme.palette.mainBlue.main,
          padding: "1rem 3rem 1rem 3rem",
        }}
      >
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
            <Button
              color="inherit"
              style={{
                border: `2px solid ${theme.palette.darkBlue.main}`,
                borderRadius: "8px",
                backgroundColor: theme.palette.secondBlue.main,
              }}
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
