import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
    boxShadow: "none",
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
        style={{ backgroundColor: theme.palette.blue.main }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Navbar
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
