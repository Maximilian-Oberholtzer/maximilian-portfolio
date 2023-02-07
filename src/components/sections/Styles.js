import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ///////////////
  //Hero Styles//
  ///////////////
  root: {
    backgroundColor: theme.palette.mainBlue.main,
    padding: "12rem 12rem 12rem 12rem",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heroGrid: {
    alignItems: "center",
    justifyContent: "center",
  },
  heroText: {
    textAlign: "center",
    animation: "fadeIn",
    animationDuration: "2s",
    width: "60%",
    minWidth: "0",
  },
  heroTitle: {
    fontWeight: "bold",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2),
  },
  heroSubText: {
    marginTop: theme.spacing(4),
    fontWeight: "bold",
  },
  heroImage: {
    animation: "fadeIn",
    animationDuration: "2s",
    width: "300px",
    minWidth: "300px",
    borderRadius: "30px",
    backgroundColor: theme.palette.secondBlue.main,
    textAlign: "center",
  },
}));

export default useStyles;
