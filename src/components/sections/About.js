import React from "react";
import { useTheme, Container, Typography } from "@mui/material";
import useStyles from "./Styles";
import "animate.css";
import * as Scroll from "react-scroll";

const About = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Scroll.Element name="About">
      <section className={classes.aboutRoot}>
        <Container className={classes.aboutContainer}>
          <Typography className={classes.aboutTitle} component="h1">
            About Me
          </Typography>
          <Typography className={classes.aboutSubText} component="h1">
            Hey there! My name is Maximilian and I have been building different
            types of web and mobile applications for 7+ years.
          </Typography>
        </Container>
      </section>
    </Scroll.Element>
  );
};

export default About;
