import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useStyles from "./Styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import maxAvatar from "../../assets/max_avatar.svg";
import "animate.css";

const Hero = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={6} className={classes.heroGrid}>
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
          <Grid item style={{}}>
            <img alt="" src={maxAvatar} className={classes.heroImage} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
