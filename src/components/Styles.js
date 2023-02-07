import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  /////////////////
  //Navbar Styles//
  /////////////////
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none !important",
    backgroundColor: theme.palette.mainBlue.main + " !important",
    padding: "1rem 3rem 1rem 3rem",
  },
  resumeButton: {
    border: `2px solid ${theme.palette.darkBlue.main} !important`,
    borderRadius: "8px !important",
    backgroundColor: theme.palette.secondBlue.main + " !important",
  },
}));

export default useStyles;
