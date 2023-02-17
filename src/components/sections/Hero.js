import React from "react";
import { useTheme, Container, styled } from "@mui/material";
import useStyles from "./Styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import maxAvatar from "../../assets/max_avatar.svg";
import "animate.css";

const ScrollerIcon = styled("div")({
  "@keyframes wheel": {
    to: {
      opacity: 0,
      top: "3rem",
    },
  },
  width: "2rem",
  height: "4rem",
  borderRadius: "2rem",
  position: "relative",
  "&::before": {
    content: "''",
    width: "0.5rem",
    height: "0.5rem",
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "50%",
    opacity: "1",
    "-webkit-animation": "wheel 2s infinite",
    animation: "wheel 2s infinite",
  },
});

const Hero = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <section className={classes.heroRoot}>
      <Container className={classes.heroContainer}>
        <Grid container spacing={0} className={classes.heroGrid}>
          <Grid item className={classes.heroImageContainer}>
            <img alt="" src={maxAvatar} className={classes.heroImage} />
          </Grid>
          <Grid item className={classes.heroText}>
            <Typography
              className={classes.heroTitle}
              component="h1"
              variant="h2"
            >
              Maximilian Oberholtzer
            </Typography>
            <Typography
              className={classes.heroSubText}
              component="h1"
              variant="h5"
            >
              Full stack software engineer who enjoys creative coding and UI/UX
              designs
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <div
        style={{
          marginTop: "2rem",
          animation: "fadeIn",
          animationDuration: "5s",
        }}
      >
        <ScrollerIcon className={classes.scrollerIcon} />
      </div>
    </section>
  );
};

export default Hero;
