import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import navbarData from "../content/navbar.json";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  Box,
  List,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
  Slide,
  styled,
} from "@mui/material";
import { Link } from "react-scroll";

//Component Styles//
const StyledAppBarContainer = styled("div")(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  placeSelf: "center",
  justifyContent: "center",
  maxWidth: "1200px",
  width: "90vw !important",
  [theme.breakpoints.down("sm")]: {
    width: "100vw !important",
  },
}));
const StyledAppBar = styled(AppBar)(({ theme, isScrolled }) => ({
  transition:
    "all 0.4s cubic-bezier(0.645,0.045,0.355,1), background-color 0ms !important",
  transitionDelay: "0.1s",
  boxShadow: isScrolled
    ? "1px 0px 4px -1px rgb(0 0 0 / 20%), 0px 2px 20px 0px rgb(0 0 0 / 14%), 1px -1px 12px 0px rgb(0 0 0 / 12%) !important"
    : "none !important",
  backgroundColor: theme.palette.background.main + " !important",
  padding: isScrolled ? "0.5rem 5rem 0.5rem 5rem" : "2rem 5rem 2rem 5rem",
  [theme.breakpoints.down("sm")]: {
    padding: isScrolled ? "0.5rem 2rem 0.5rem 2rem" : "1rem 2rem 1rem 2rem",
  },
}));
const StyledAppBarLink = styled(Link)(({ theme }) => ({
  "& p": {
    color: theme.palette.textMain.main + " !important",
    transform: "none",
    transition: "transform 150ms ease-in-out 0s !important",
    cursor: "pointer",
    padding: "0.5rem",
    "&:hover": {
      color: theme.palette.textSecondary.main + " !important",
      transform: "translateY(-2px)",
    },
  },
}));
const StyledAppBarButton = styled(Button)(({ theme }) => ({
  padding: "0",
  color: theme.palette.textMain.main + " !important",
  transform: "none",
  transition: "transform 150ms ease-in-out 0s !important",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.textSecondary.main + " !important",
    transform: "translateY(-2px)",
  },
}));
const StyledAppBarDrawerLink = styled(Link)(({ theme }) => ({
  "& p": {
    animation: "fadeIn",
    animationDuration: "2s",
    color: theme.palette.textMain.main + " !important",
    cursor: "pointer",
    fontSize: "1.5rem",
    "&:hover": {
      color: theme.palette.textSecondary.main + " !important",
    },
  },
}));
const StyledResumeLink = styled("a")(({ theme }) => ({
  cursor: "pointer",
  textDecoration: "none",
  "& p": {
    borderRadius: "8px !important",
    padding: "0.25rem 0.5rem",
    backgroundColor: theme.palette.backgroundSecondary.main + " !important",
    color: "#FFFFFF",
    transition: "background-color 200ms ease-in-out 0s !important",
    "&:hover": {
      backgroundColor: theme.palette.buttonHover.main + " !important",
    },
  },
}));
const StyledDrawerIcon = styled(MenuIcon)(({ theme }) => ({
  color: theme.palette.textMain.main,
  fontSize: "2rem !important",
  zIndex: "3 !important",
}));
const StyledDrawerCloseIcon = styled(CloseIcon)(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "1s",
  position: "fixed",
  top: "32px",
  right: "32px",
  color: theme.palette.textMain.main,
  fontSize: "2rem !important",
  zIndex: "3 !important",
}));
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& div.MuiPaper-root": {
    background: "transparent",
    backdropFilter: "blur(10px)",
    height: "100vh !important",
    boxShadow: "none !important",
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.textMain.main,
    zIndex: "2 !important",
  },
}));
const StyledDrawerList = styled(List)(({ theme }) => ({
  display: "flex",
}));
//End component style//

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const MuiTheme = useTheme();
  const collapse = useMediaQuery(MuiTheme.breakpoints.down("sm"));

  //disable animations on appbar after they have animated once
  useEffect(() => {
    setTimeout(() => {
      setHasAnimated(true);
    }, 1000);
  }, []);

  //capture window scroll height for changing navbar styles
  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //save the user's selected color theme choice
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  //hide the AppBar when scrolling down
  const trigger = useScrollTrigger({
    target: window,
  });

  const toggleDrawer = (isOpen) => (event) => {
    event.preventDefault();
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(isOpen);
  };

  const drawer = (
    <>
      <Button
        onClick={toggleDrawer(true)}
        sx={{
          animation: !hasAnimated ? "fadeIn" : "",
          animationDuration: "2s",
        }}
      >
        <StyledDrawerIcon />
      </Button>

      <StyledDrawer
        anchor={"top"}
        variant="temporary"
        transitionDuration={1}
        disableScrollLock={true}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <Button onClick={toggleDrawer(false)}>
          <StyledDrawerCloseIcon />
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          role="presentation"
          onKeyDown={toggleDrawer(false)}
        >
          <StyledDrawerList>
            <StyledResumeLink
              href={
                process.env.PUBLIC_URL +
                "/Maximilian Oberholtzer Resume 2023.pdf"
              }
              target="_blank"
            >
              <Typography
                sx={{
                  padding: "0.5rem 1rem !important",
                  fontSize: "1.5rem",
                  transition:
                    "opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 200ms ease-in-out 0s !important",
                  animation: "fadeIn",
                  animationDuration: "2s",
                }}
              >
                Resume
              </Typography>
            </StyledResumeLink>
          </StyledDrawerList>
          {navbarData.map((data) => (
            <StyledDrawerList key={data.id}>
              <StyledAppBarDrawerLink
                onClick={toggleDrawer(false)}
                to={data.name}
                smooth={true}
                duration={1000}
              >
                <Typography
                  sx={{ animationDelay: data.transitionDelay + " !important" }}
                >
                  {data.name}
                </Typography>
              </StyledAppBarDrawerLink>
            </StyledDrawerList>
          ))}
          <List>
            <Button
              sx={{
                color: MuiTheme.palette.textMain.main,
                animation: "fadeIn",
                animationDuration: "2s",
                animationDelay: "0.60s",
              }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
            </Button>
          </List>
        </Box>
      </StyledDrawer>
    </>
  );

  const navbar = (
    <>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <StyledAppBarButton
          aria-label="Change theme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
        </StyledAppBarButton>
      </div>
      {navbarData.map((data) => (
        <div
          key={data.id}
          className={
            !hasAnimated ? "animate__animated animate__fadeInDown" : ""
          }
        >
          <StyledAppBarLink to={data.name} smooth={true} duration={1000}>
            <Typography>{data.name}</Typography>
          </StyledAppBarLink>
        </div>
      ))}
      <div
        style={{ paddingLeft: "4px" }}
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <StyledResumeLink
          href={
            process.env.PUBLIC_URL + "/Maximilian Oberholtzer Resume 2023.pdf"
          }
          target="_blank"
        >
          <Typography>Resume</Typography>
        </StyledResumeLink>
      </div>
    </>
  );

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <StyledAppBar position="fixed" isScrolled={isScrolled}>
        <StyledAppBarContainer>
          <Toolbar>
            <Typography
              variant="h6"
              style={{
                flexGrow: 1,
              }}
            >
              <svg
                viewBox="0 0 59 58"
                style={{
                  width: "44px",
                  animation: !hasAnimated
                    ? collapse
                      ? "fadeIn"
                      : "fadeInDown"
                    : "",
                  animationDuration: collapse ? "2s" : "1s",
                }}
              >
                <path
                  d="M 39.2975 22.825000000000003L 39.2975 22.825000000000003Q 38.864374999999995 29.321875 38.864374999999995 31.425625L 38.864374999999995 31.425625Q 38.864374999999995 37.736875 39.17375 39.655L 39.17375 39.655L 39.42125 41.325625L 47.34125 20.721249999999998Q 52.53875 23.753125 59.0975 25.052500000000002L 59.0975 25.052500000000002Q 58.85 30.559375 57.550625 37.427499999999995Q 56.25125 44.295625 55.075625 48.379375L 55.075625 48.379375L 53.9 52.463125Q 50.620625 54.62875 43.319375 55.680625L 43.319375 55.680625Q 44.680625 50.91625 45.5159375 46.523125Q 46.35125 42.13 46.536874999999995 40.15L 46.536874999999995 40.15L 46.660624999999996 38.108125Q 46.041875000000005 39.4075 45.0209375 41.449375Q 44 43.49125 41.246562499999996 47.7915625Q 38.493125 52.091875 36.3275 53.948125L 36.3275 53.948125Q 35.151875000000004 51.596875 34.285624999999996 47.636875Q 33.419375 43.676875 33.11 40.8925L 33.11 40.8925L 32.800625 38.108125Q 32.429375 38.850625 31.841562500000002 40.27375Q 31.25375 41.696875 30.294687500000002 47.018125Q 29.335625 52.339375 29.335625 58.58875L 29.335625 58.58875Q 28.593125 58.2175 27.3865625 57.536875Q 26.18 56.85625 23.82875 54.814375Q 21.4775 52.7725 20.673125 50.792500000000004L 20.673125 50.792500000000004Q 21.23 44.295625 22.529375 38.324687499999996Q 23.82875 32.353750000000005 24.880625000000002 29.63125L 24.880625000000002 29.63125L 25.870625 26.846875Q 28.345625 25.485625 32.2128125 24.279062500000002Q 36.08 23.0725 39.2975 22.825000000000003Z"
                  style={{ fill: MuiTheme.palette.textMain.main }}
                />
              </svg>
            </Typography>
            {collapse ? drawer : navbar}
          </Toolbar>
        </StyledAppBarContainer>
      </StyledAppBar>
    </Slide>
  );
};

export default Navbar;
