import React from "react";
import { useTheme, Container } from "@mui/material";
import useStyles from "./Styles";
import "animate.css";

const About = () => {
  const classes = useStyles();
  const theme = useTheme();

  return <section className={classes.aboutRoot}></section>;
};

export default About;
