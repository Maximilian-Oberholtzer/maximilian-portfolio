import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ///////////////
  //Hero Styles//
  ///////////////
  heroRoot: {
    display: "flex",
    backgroundColor: theme.palette.mainBlue.main,
    minHeight: "100vh",
    [theme.breakpoints.down("md")]: {
      padding: "6rem 0rem 2rem 0rem",
      minHeight: "80vh",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0rem 2rem 0rem",
    },
  },
  container: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    maxWidth: "80vw !important",
  },
  heroGrid: {
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 2rem 2rem 2rem",
    flexGrow: "0",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      margin: "0rem !important",
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
      paddingLeft: "0 !important",
    },
    margin: "2rem 4rem 2rem 4rem ",
  },
  heroTitle: {
    fontWeight: "bold",
    color: theme.palette.white.main,
    marginBottom: theme.spacing(0),
    fontSize: "clamp(45px, 4.5vw, 64px) !important",
  },
  heroSubText: {
    marginTop: theme.spacing(3),
    fontWeight: "bold",
    color: theme.palette.darkBlue.main,
    fontSize: "clamp(20px, 2vw, 30px) !important",
  },
  heroImageContainer: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0 !important",
    },
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
