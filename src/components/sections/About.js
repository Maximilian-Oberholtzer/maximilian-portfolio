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
  const [leftPosition, setLeftPosition] = useState(0);
  const technologiesArr = [
    "Javascript",
    "Swift",
    "NodeJS",
    "AWS",
    "Material-UI",
    "MetaMask",
    "Java",
    "PostgresSQL",
    "Solidity",
    "ReactJS",
    "Kubernetes",
    "Git",
    "Express",

    "Javascript",
    "Swift",
    "NodeJS",
    "AWS",
    "Material-UI",
    "MetaMask",
    "Java",
    "PostgresSQL",
    "Solidity",
    "ReactJS",
    "Kubernetes",
    "Git",
    "Express",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(leftPosition);
      if (leftPosition > -890) {
        setLeftPosition((prevPosition) => prevPosition - 1);
      } else {
        setLeftPosition(200);
      }
    }, 8);
    return () => clearInterval(intervalId);
  }, [leftPosition]);

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
              <div
                style={{
                  display: "flex",
                  marginTop: "3rem",
                  position: "relative",
                  left: `${leftPosition}px`,
                }}
              >
                {technologiesArr.map((item, index) => (
                  <div key={index} className={classes.scrollingItem}>
                    <Typography
                      style={{
                        fontSize: "1.5rem",
                        color: theme.palette.textMain.main,
                      }}
                      component="h1"
                    >
                      {item}
                    </Typography>
                  </div>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>
    </Scroll.Element>
  );
};

export default About;
