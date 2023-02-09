import { Container } from "@mui/material";
import { React } from "react";
import { useTheme } from "@mui/styles";
import useStyles from "./Styles";
import Hero from "./sections/Hero";

const Main = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.palette.mainBlue.main }}>
      <Container className={classes.mainContainer}>
        <Hero />
      </Container>
    </div>
  );
};

export default Main;
