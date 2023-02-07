import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ///////////////
  //Hero Styles//
  ///////////////
  heroRoot: {
    display: "flex",
    backgroundColor: theme.palette.mainBlue.main,
    padding: "12rem 12rem 12rem 12rem",
    minHeight: "100vh",
    [theme.breakpoints.down("md")]: {
      padding: "10rem 0rem 2rem 0rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "4rem 0rem 2rem 0rem",
    },
  },
  container: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
  },
  heroGrid: {
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 2rem 2rem 2rem",
    flexGrow: "1",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem !important",
    },
  },
  heroText: {
    textAlign: "center",
    animation: "fadeIn",
    animationDuration: "2s",
    minWidth: "0",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "2rem 4rem 2rem 4rem ",
      //padding: "0",
    },
    margin: "2rem 4rem 2rem 4rem ",
  },
  heroTitle: {
    fontWeight: "bold",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(0),
    fontSize: "clamp(36px, 6vw, 80px)",
  },
  heroSubText: {
    marginTop: theme.spacing(3),
    fontWeight: "bold",
    fontSize: "clamp(18px, 3vw, 30px)",
  },
  heroImage: {
    animation: "fadeIn",
    animationDuration: "2s",
    width: "300px",
    minWidth: "300px",
    borderRadius: "30px",
    backgroundColor: theme.palette.secondBlue.main,
    textAlign: "center",
    margin: "2rem 4rem 2rem 4rem ",
    [theme.breakpoints.down("sm")]: {
      width: "30vw",
      minWidth: "30vh",
      margin: "-0.5rem",
    },
  },
}));

export default useStyles;
