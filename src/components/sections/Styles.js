import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ///////////////
  //Hero Styles//
  ///////////////
  heroRoot: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.main,
    minHeight: "100vh",
  },
  heroContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    ["@media (max-height: 670px)"]: {
      paddingTop: "102px",
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
    animationDuration: "3s",
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
    color: theme.palette.textMain.main,
    marginBottom: theme.spacing(0),
    fontSize: "clamp(32px, 4vw, 56px) !important",
  },
  heroSubText: {
    marginTop: theme.spacing(3),
    color: theme.palette.textSecondary.main + " !important",
    fontSize: "clamp(20px, 2vw, 26px) !important",
  },
  heroImageContainer: {
    paddingLeft: "0 !important",
  },
  heroImage: {
    animation: "fadeIn",
    animationDuration: "3s",
    width: "280px",
    borderRadius: "30px",
    backgroundColor: theme.palette.backgroundSecondary.main,
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
    border: "3px solid " + theme.palette.textMain.main + " !important",
    "&::before": {
      backgroundColor: theme.palette.textMain.main + " !important",
    },
  },
  ////////////////
  //About Styles//
  ////////////////
  aboutRoot: {
    minHeight: "50vh",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
  },
  aboutContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
  },
  aboutTitle: {
    fontWeight: "bold !important",
    color: theme.palette.textMain.main,
    fontSize: "clamp(32px, 4vw, 56px) !important",
  },
  aboutSubText: {
    color: theme.palette.textMain.main,
    fontSize: "clamp(20px, 2vw, 26px) !important",
    textAlign: "center",
  },
  //////////////////
  //Hobbies Styles//
  //////////////////
  hobbiesRoot: {
    minHeight: "50vh",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
  },
  hobbiesContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
  },
  hobbiesTitle: {
    fontWeight: "bold !important",
    color: theme.palette.textMain.main,
    fontSize: "clamp(32px, 4vw, 56px) !important",
  },
  hobbiesSubText: {
    color: theme.palette.textMain.main,
    fontSize: "clamp(20px, 2vw, 26px) !important",
    textAlign: "center",
  },
  hobbiesGridTitle: {
    fontSize: "clamp(20px, 2vw, 26px) !important",
    textAlign: "center",
  },
  hobbiesGridItem: {
    display: "flex",
    flexDirection: "column !important",
    justifyContent: "space-between",
    padding: "4rem !important",
    height: "20rem",
    color: theme.palette.textMain.main,
    borderRadius: "1rem",
  },
}));

export default useStyles;
