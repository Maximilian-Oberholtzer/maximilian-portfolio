import { Container } from "@mui/material";
import { React, useEffect, useState } from "react";
import useStyles from "./Styles";
import Hero from "./sections/Hero";

const Main = () => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <Hero />
    </Container>
  );
};

export default Main;
