import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  divider: {
    height: "0.4rem",
    width: "2rem",
    borderRadius: "2rem",
    margin: "1rem",
    background: theme.palette.textSecondary.main,
  },
  ///////////////
  //Hero Styles//
  ///////////////
  heroRoot: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.main,
    minHeight: "100vh",
  },
  heroContainer: {
    display: "flex !important",
    flex: "1",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    ["@media (max-height: 730px)"]: {
      paddingTop: "102px",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "2rem",
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
    animationDuration: "2s",
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
    animation: "fadeInUp",
    animationDuration: "1s",
    marginBottom: "4rem",
    marginTop: "1rem",
    border: "3px solid " + theme.palette.textMain.main + " !important",
    "&::before": {
      backgroundColor: theme.palette.textMain.main + " !important",
    },
  },
  ////////////////
  //About Styles//
  ////////////////
  aboutRoot: {
    minHeight: "100vh",
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
    overflow: "hidden",
  },
  aboutTitle: {
    fontWeight: "bold !important",
    color: theme.palette.textMain.main,
    fontSize: "clamp(32px, 4vw, 56px) !important",
    textAlign: "-webkit-center",
    animation: "fadeInUp",
    animationDuration: "1s",
  },
  aboutSubText: {
    color: theme.palette.textMain.main,
    fontSize: "clamp(20px, 2vw, 26px) !important",
    textAlign: "center",
    animation: "fadeInUp",
    animationDuration: "1.25s",
  },
  scrollingContainer: {
    position: "relative",
    width: "inherit",
    animation: "fadeInUp",
    animationDuration: "1.25s",

    "&::before": {
      content: "''",
      position: "absolute",
      top: "45px",
      left: "-4px",
      display: "block",
      width: "100px",
      height: "75px",
      background: `linear-gradient(90deg,${theme.palette.background.main},hsla(0,0%,100%,0))`,
      backgroundSize: "contain",
      zIndex: "1000",
    },
    "&::after": {
      content: "''",
      position: "relative",
      top: "-71px",
      left: "883px",
      [theme.breakpoints.down("lg")]: {
        position: "absolute",
        left: "unset",
        right: "0",
        top: "45px",
      },
      display: "block",
      width: "100px",
      height: "75px",
      background: `linear-gradient(270deg,${theme.palette.background.main},hsla(0,0%,100%,0))`,
      backgroundSize: "contain",
      zIndex: "1000",
    },
  },
  scrollingBelt: {
    display: "flex",
    marginTop: "3rem",
    overflow: "hidden",
    width: "98%",
    marginLeft: "0.1rem",
  },
  "@keyframes moveLeft": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-1600%)",
    },
  },
  scrollingItem: {
    animation: "$moveLeft 22s linear infinite",
    background: theme.palette.backgroundSecondary.main,
    marginRight: "3rem",
    borderRadius: "1rem",
    padding: "1rem",
    minWidth: "8rem",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginRight: "2.2rem",
      padding: "0.9rem 0.6rem 0.75rem 0.9rem",
    },
  },
  scrollingItemText: {
    fontSize: "1.5rem !important",
    color: theme.palette.textMain.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem !important",
    },
  },
  //////////////////
  //Hobbies Styles//
  //////////////////
  hobbiesRoot: {
    minHeight: "100vh",
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
    textAlign: "-webkit-center",
    animation: "fadeInUp",
    animationDuration: "1s",
  },
  hobbiesSubText: {
    color: theme.palette.textMain.main,
    fontSize: "clamp(20px, 2vw, 26px) !important",
    textAlign: "center",
    animation: "fadeInUp",
    animationDuration: "1.25s",
  },
  hobbiesGrid: {
    padding: "2rem 0rem 2rem 0rem",
    justifyContent: "center",
    animation: "fadeInUp",
    animationDuration: "1.25s",
  },
  hobbiesGridTitle: {
    fontSize: "clamp(26px, 2vw, 30px) !important",
    color: theme.palette.textMain.main,
    textAlign: "center",
    marginTop: "1rem !important",
  },
  hobbiesGridSubtext: {
    fontSize: "clamp(16px, 1.5vw, 18px) !important",
    color: theme.palette.textSecondary.main,
    textAlign: "center",
  },
  hobbiesGridItem: {
    display: "flex",
    flexDirection: "column !important",
    alignItems: "center",
    padding: "4rem 4rem 4rem 4rem !important",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 4rem 2rem 4rem !important",
    },
    textAlign: "center",
    color: theme.palette.textMain.main,
    minWidth: "33%",
    flexGrow: "1",
  },

  /////////////////////
  //Experience Styles//
  /////////////////////
  experienceRoot: {
    minHeight: "100vh",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
  },
  experienceContainer: {
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
  },
  experienceTitle: {
    fontWeight: "bold !important",
    color: theme.palette.textMain.main,
    fontSize: "clamp(32px, 4vw, 56px) !important",
    textAlign: "-webkit-center",
    animation: "fadeInUp",
    animationDuration: "1s",
  },
  experienceSubText: {
    color: theme.palette.textMain.main,
    fontSize: "clamp(20px, 2vw, 26px) !important",
    textAlign: "center",
    animation: "fadeInUp",
    animationDuration: "1.25s",
  },
  carouselContainer: {
    marginTop: "3rem",
    alignItems: "center",
    width: "75% !important",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
    textAlign: "center",
    animation: "fadeInUp",
    animationDuration: "1.4s",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "4rem",
    },
  },
  carouselContainerCard: {
    borderRadius: "2rem !important",
    padding: "2rem 2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1.25rem 1.25rem",
    },
    maxWidth: "75%",
    border: "0.15rem solid " + theme.palette.backgroundSecondary.main,
  },
  dots: {
    "& li button:before": {
      fontSize: "0.75rem",
      color: theme.palette.textMain.main + " !important",
      marginTop: "1rem",
      opacity: 0.4 + " !important",
    },
    "& li.slick-active button:focus:before": {
      opacity: 1 + " !important",
      color: theme.palette.textMain.main,
    },
    "& li.slick-active button:before": {
      opacity: 1 + " !important",
    },
  },
  carouselTitle: {
    fontSize: "clamp(28px, 4vw, 44px) !important",
    color: theme.palette.textSecondary.main,
    //lineHeight: "1 !important",
  },
  carouselSubTitle: {
    fontSize: "clamp(16px, 2vw, 30px) !important",
    color: theme.palette.textMain.main,
  },
  carouselSubText: {
    marginTop: "1rem !important",
    fontSize: "clamp(14px, 1vw, 26px) !important",
    color: theme.palette.textMain.main,
  },
}));

export default useStyles;
