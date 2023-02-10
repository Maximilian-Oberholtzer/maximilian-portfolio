import { Container, useMediaQuery } from "@mui/material";
import { React } from "react";
import { useTheme } from "@mui/styles";
import useStyles from "./Styles";
import Hero from "./sections/Hero";
import SideAnchorLinks from "./SideAnchorLinks";

const Main = () => {
  const classes = useStyles();
  const theme = useTheme();
  const showSideAnchor = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <div style={{ backgroundColor: theme.palette.mainBlue.main }}>
      {showSideAnchor ? <></> : <SideAnchorLinks />}

      <Container className={classes.mainContainer}>
        <Hero />
      </Container>
    </div>
  );
};

export default Main;
