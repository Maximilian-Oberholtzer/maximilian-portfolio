import { React, useState, useEffect } from "react";
import { useTheme, Container, Typography } from "@mui/material";
import useStyles from "./Styles";
import "animate.css";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [aboutContainer, aboutContainerInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const technologiesArr = [
    "Java",
    "Swift",
    "Node",
    "AWS",
    "Material-UI",
    "MetaMask",
    "Ethereum",
    "Javascript",
    "PostgresSQL",
    "Solidity",
    "React",
    "Kubernetes",
    "Angular",
    "Git",
    "Express",
    "Java",
    "Swift",
  ];

  return (
    <Scroll.Element name="About">
      <section className={classes.aboutRoot}>
        <Container className={classes.aboutContainer} ref={aboutContainer}>
          {aboutContainerInView && (
            <>
              <Typography className={classes.aboutTitle} component="h1">
                About Me
                <div className={classes.divider} />
              </Typography>
              <Typography className={classes.aboutSubText} component="h1">
                Hey there! My name is Maximilian and I have been building
                different types of web and mobile applications for 7+ years.
                Below are some of the languages and technologies that I have
                experience using.
              </Typography>
              <div className={classes.scrollingContainer}>
                <div className={classes.scrollingBelt}>
                  {technologiesArr.map((item, index) => (
                    <div key={index} className={classes.scrollingItem}>
                      <Typography
                        className={classes.scrollingItemText}
                        component="h1"
                      >
                        {item}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </Container>
      </section>
    </Scroll.Element>
  );
};

export default About;
