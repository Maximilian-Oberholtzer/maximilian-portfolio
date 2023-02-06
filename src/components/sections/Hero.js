import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import maxAvatar from "../../assets/max_avatar.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    padding: "6rem",
    height: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  text: {
    color: theme.palette.common.white,
    marginTop: theme.spacing(4),
  },
  title: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
            <Typography className={classes.text} component="h1" variant="h4">
              <div className={classes.title}>Maximilian Oberholtzer</div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              felis in lacus blandit facilisis.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
            <img
              alt=""
              src={maxAvatar}
              style={{
                width: "300px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
