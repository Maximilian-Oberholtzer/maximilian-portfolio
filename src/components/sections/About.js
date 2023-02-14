import React from "react";
import { useTheme, Container, Typography } from "@mui/material";
import useStyles from "./Styles";
import "animate.css";

const About = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <section className={classes.aboutRoot}>
      <Container className={classes.aboutContainer}>
        <Typography className={classes.aboutTitle} component="h1" variant="h5">
          About Me
        </Typography>
      </Container>
    </section>
  );
};

export default About;
