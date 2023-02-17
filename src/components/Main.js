import { Container, useMediaQuery } from "@mui/material";
import { React } from "react";
import { useTheme } from "@mui/styles";
import useStyles from "./Styles";
import Hero from "./sections/Hero";
import SideAnchorLinks from "./SideAnchorLinks";
import About from "./sections/About";
import Hobbies from "./sections/Hobbies";

const Main = () => {
  const classes = useStyles();
  const theme = useTheme();
  const showSideAnchor = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.main,
        overflowY: "hidden",
      }}
    >
      {showSideAnchor ? <></> : <SideAnchorLinks />}

      <Container className={classes.mainContainer}>
        <Hero />
        <About />
        <Hobbies />
      </Container>
    </div>
  );
};

export default Main;
