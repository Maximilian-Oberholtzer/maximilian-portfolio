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
      top: "60px",
    },
  },
  width: "50px",
  height: "90px",
  border: "2px solid white",
  borderRadius: "60px",
  position: "relative",
  "&::before": {
    content: "''",
    width: "12px",
    height: "12px",
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "white",
    borderRadius: "50%",
    opacity: "1",
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
        <div
          className="animate__animated animate__fadeInUp"
          style={{ marginTop: "2rem" }}
        >
          <ScrollerIcon />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
