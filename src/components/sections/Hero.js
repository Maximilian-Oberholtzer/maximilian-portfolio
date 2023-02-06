import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import maxAvatar from "../../assets/max_avatar.svg";
import "animate.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.mainBlue.main,
    padding: "12rem 12rem 12rem 12rem",
    height: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    color: theme.palette.common.white,
    marginTop: theme.spacing(4),
    fontSize: "46px",
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
}));

const Hero = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              textAlign: "center",
              animation: "fadeIn",
              animationDuration: "2s",
            }}
          >
            <Typography className={classes.text} component="h1" variant="h4">
              <div className={classes.title}>Maximilian Oberholtzer</div>
              Full stack software engineer that enjoys creative coding and UI/UX
              designs
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
            <img
              alt=""
              src={maxAvatar}
              style={{
                animation: "fadeIn",
                animationDuration: "2s",
                width: "300px",
                minWidth: "300px",
                borderRadius: "30px",
                //border: `4px solid ${theme.palette.secondBlue.main}`,
                backgroundColor: theme.palette.secondBlue.main,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
