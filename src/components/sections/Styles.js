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
  },
  heroContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    // [theme.breakpoints.down("sm")]: {
    //   paddingTop: "88px",
    // },
    ["@media (max-height: 690px)"]: {
      paddingTop: "96px",
    },
  },
  heroGrid: {
    alignItems: "center",
    justifyContent: "space-around",
    margin: "0rem !important",
    width: "auto",
  },
  heroText: {
    textAlign: "center",
    animation: "fadeIn",
    animationDuration: "2s",
    width: "50%",
    paddingLeft: "0 !important",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      margin: "2rem 4rem 2rem 4rem ",
    },
    margin: "2rem 4rem 2rem 4rem ",
  },
  heroTitle: {
    fontWeight: "bold !important",
    color: theme.palette.white.main,
    marginBottom: theme.spacing(0),
    fontSize: "clamp(32px, 4vw, 56px) !important",
  },
  heroSubText: {
    marginTop: theme.spacing(3),
    color: theme.palette.darkBlue.main + " !important",
    fontSize: "clamp(20px, 2vw, 26px) !important",
  },
  heroImageContainer: {
    paddingLeft: "0 !important",
  },
  heroImage: {
    animation: "fadeIn",
    animationDuration: "2s",
    width: "280px",
    borderRadius: "30px",
    backgroundColor: theme.palette.secondBlue.main,
    textAlign: "center",
    margin: "2rem 4rem 2rem 4rem ",
    [theme.breakpoints.down("lg")]: {
      width: "230px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "180px",
    },
  },
  scrollerIcon: {
    border: "2px solid " + theme.palette.white.main + " !important",
    "&::before": {
      backgroundColor: theme.palette.white.main + " !important",
    },
  },
}));

export default useStyles;
