import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ///////////////
  //Hero Styles//
  ///////////////
  heroRoot: {
    display: "flex",
    backgroundColor: theme.palette.mainBlue.main,
    minHeight: "100vh",
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },
  heroContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
  },
  heroGrid: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: "0",
    margin: "0rem !important",
    width: "auto",
  },
  heroText: {
    textAlign: "center",
    animation: "fadeIn",
    animationDuration: "2s",
    minWidth: "0",
    width: "50%",
    paddingLeft: "0 !important",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "2rem 4rem 2rem 4rem ",
    },
    margin: "2rem 4rem 2rem 4rem ",
  },
  heroTitle: {
    fontWeight: "bold",
    color: theme.palette.white.main,
    marginBottom: theme.spacing(0),
    fontSize: "clamp(32px, 4vw, 59px) !important",
  },
  heroSubText: {
    marginTop: theme.spacing(3),
    fontWeight: "bold",
    color: theme.palette.darkBlue.main,
    fontSize: "clamp(20px, 2vw, 28px) !important",
  },
  heroImageContainer: {
    paddingLeft: "0 !important",
  },
  heroImage: {
    animation: "fadeIn",
    animationDuration: "2s",
    width: "300px",
    borderRadius: "30px",
    backgroundColor: theme.palette.secondBlue.main,
    textAlign: "center",
    margin: "2rem 4rem 2rem 4rem ",
    [theme.breakpoints.down("md")]: {
      width: "230px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "180px",
    },
  },
}));

export default useStyles;
