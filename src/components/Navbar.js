import React, { useState, useEffect, useContext } from "react";
import { useTheme } from "@mui/material";
import { ThemeContext } from "../ThemeContext";
import useStyles from "./Styles";
import ResumePdf from "../assets/Maximilian Oberholtzer Resume 2023.pdf";
import { AppBar, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Drawer, Box, List } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button, useMediaQuery, useScrollTrigger, Slide } from "@mui/material";
import * as Scroll from "react-scroll";

const resumeClick = () => {
  window.open(ResumePdf, "_blank");
};

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const classes = useStyles();
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
      if (scrollY > 100) {
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
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(isOpen);
  };

  //scroll to section based on navbar links
  const scrollToSection = (element) => {
    setIsOpen(false);

    Scroll.scroller.scrollTo(element, {
      duration: 1000,
      delay: 0,
      smooth: true,
    });
  };

  const drawer = (
    <>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon className={classes.drawerButton} />
        </Button>
      </div>

      <Drawer
        className={classes.drawer}
        anchor={"right"}
        variant="temporary"
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <Box role="presentation" onKeyDown={toggleDrawer(false)}>
          <List>
            <Button className={classes.resumeButton} onClick={resumeClick}>
              <Typography>Resume</Typography>
            </Button>
          </List>
          <List>
            <Button
              className={classes.appBarButton}
              onClick={() => {
                scrollToSection("About");
              }}
            >
              <Typography>About</Typography>
            </Button>
          </List>
          <List>
            <Button
              className={classes.appBarButton}
              onClick={() => {
                scrollToSection("Experience");
              }}
            >
              <Typography>Experience</Typography>
            </Button>
          </List>
          <List>
            <Button
              className={classes.appBarButton}
              onClick={() => {
                scrollToSection("Hobbies");
              }}
            >
              <Typography>Hobbies</Typography>
            </Button>
          </List>
          <List>
            <Button
              className={classes.appBarButton}
              onClick={() => {
                scrollToSection("Hobbies");
              }}
            >
              <Typography>Projects</Typography>
            </Button>
          </List>
          <List>
            <Button
              className={classes.appBarButton}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
            </Button>
          </List>
        </Box>
      </Drawer>
    </>
  );

  const navbar = (
    <>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button
          className={classes.appBarButton}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <WbSunnyIcon /> : <DarkModeIcon />}
        </Button>
      </div>

      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button
          onClick={() => {
            scrollToSection("About");
          }}
          className={classes.appBarButton}
        >
          <Typography>About</Typography>
        </Button>
      </div>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button
          onClick={() => {
            scrollToSection("Experience");
          }}
          className={classes.appBarButton}
        >
          <Typography>Experience</Typography>
        </Button>
      </div>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button
          onClick={() => {
            scrollToSection("Hobbies");
          }}
          className={classes.appBarButton}
        >
          <Typography>Hobbies</Typography>
        </Button>
      </div>
      <div
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button
          onClick={() => {
            scrollToSection("About");
          }}
          className={classes.appBarButton}
        >
          <Typography>Projects</Typography>
        </Button>
      </div>
      <div
        style={{ paddingLeft: "4px" }}
        className={!hasAnimated ? "animate__animated animate__fadeInDown" : ""}
      >
        <Button className={classes.resumeButton} onClick={resumeClick}>
          <Typography> Resume</Typography>
        </Button>
      </div>
    </>
  );

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="fixed"
        className={isScrolled ? classes.appBarScrolled : classes.appBar}
      >
        <div className={classes.appBarContainer}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Button
                onClick={() => {
                  window.location.reload();
                }}
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlnssketchjs="https://sketch.io/dtd/"
                  sketchjsmetadata="eyJuYW1lIjoiMDdjenpkLnNrZXRjaHBhZCIsInN1cmZhY2UiOnsibWV0aG9kIjoiZmlsbCIsImJsZW5kIjoibm9ybWFsIiwiZW5hYmxlZCI6dHJ1ZSwib3BhY2l0eSI6MSwidHlwZSI6ImNvbG9yIiwiY29sb3IiOiIjZmZmZmZmIn0sImNsaXBQYXRoIjp7ImVuYWJsZWQiOnRydWV9LCJkZXNjcmlwdGlvbiI6Im1hZGUgd2l0aCBodHRwOi8vbG9nb21ha3IuY29tIiwibWV0YWRhdGEiOnsiZ3JpZE92ZXJsYXlJZCI6ImdyaWRPdmVybGF5In0sImV4cG9ydERQSSI6NzIsImV4cG9ydEZvcm1hdCI6InBuZyIsImV4cG9ydFF1YWxpdHkiOjAuOTUsInVuaXRzIjoicHgiLCJ3aWR0aCI6NTksImhlaWdodCI6NTgsInBhZ2VzIjpbeyJ3aWR0aCI6NTksImhlaWdodCI6NTh9XSwidXVpZCI6ImZiNGYwYjA0LTA4ZjgtNDI1Ni1iMjZlLTBlMmVhODgzN2JmZiJ9"
                  width="59"
                  height="58"
                  viewBox="0 0 59 58"
                  style={{
                    width: "44px",
                    animation: "fadeInDown",
                    animationDuration: "1s",
                  }}
                >
                  <defs>
                    <pattern
                      id="dna_4146799760"
                      patternUnits="userSpaceOnUse"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAOklEQVQ4T2O8fv36AQYGBhCmCmC8fv16g6amZgNVTGNgYBg1kPKQHA3D0TAkIwRGkw0ZgYamZQSGIQApY1AaL/I1PgAAAABJRU5ErkJggg=="
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    ></pattern>
                  </defs>
                  <path
                    style={{
                      fill: "url(#dna_4146799760)",
                      mixBlendMode: "source-over",
                      fillOpacity: 1,
                      vectorEffect: "non-scaling-stroke",
                    }}
                    sketchjstool="rectangle"
                    d="M0 0 L59 0 59 58 0 58 z"
                  />
                  <g
                    style={{ mixBlendMode: "source-over" }}
                    sketchjstool="fancyText"
                    transform="matrix(1,1.7763568394002505e-15,-1.7763568394002505e-15,1,-10.000000000000796,-10.579685592288456)"
                  >
                    <g sketchjsuid="1">
                      <g
                        sketchjsuid="2"
                        style={{ paintOrder: "stroke fill markers" }}
                      >
                        <path
                          d="M 39.2975 22.825000000000003L 39.2975 22.825000000000003Q 38.864374999999995 29.321875 38.864374999999995 31.425625L 38.864374999999995 31.425625Q 38.864374999999995 37.736875 39.17375 39.655L 39.17375 39.655L 39.42125 41.325625L 47.34125 20.721249999999998Q 52.53875 23.753125 59.0975 25.052500000000002L 59.0975 25.052500000000002Q 58.85 30.559375 57.550625 37.427499999999995Q 56.25125 44.295625 55.075625 48.379375L 55.075625 48.379375L 53.9 52.463125Q 50.620625 54.62875 43.319375 55.680625L 43.319375 55.680625Q 44.680625 50.91625 45.5159375 46.523125Q 46.35125 42.13 46.536874999999995 40.15L 46.536874999999995 40.15L 46.660624999999996 38.108125Q 46.041875000000005 39.4075 45.0209375 41.449375Q 44 43.49125 41.246562499999996 47.7915625Q 38.493125 52.091875 36.3275 53.948125L 36.3275 53.948125Q 35.151875000000004 51.596875 34.285624999999996 47.636875Q 33.419375 43.676875 33.11 40.8925L 33.11 40.8925L 32.800625 38.108125Q 32.429375 38.850625 31.841562500000002 40.27375Q 31.25375 41.696875 30.294687500000002 47.018125Q 29.335625 52.339375 29.335625 58.58875L 29.335625 58.58875Q 28.593125 58.2175 27.3865625 57.536875Q 26.18 56.85625 23.82875 54.814375Q 21.4775 52.7725 20.673125 50.792500000000004L 20.673125 50.792500000000004Q 21.23 44.295625 22.529375 38.324687499999996Q 23.82875 32.353750000000005 24.880625000000002 29.63125L 24.880625000000002 29.63125L 25.870625 26.846875Q 28.345625 25.485625 32.2128125 24.279062500000002Q 36.08 23.0725 39.2975 22.825000000000003Z"
                          sketchjsuid="3"
                          style={{ fill: MuiTheme.palette.textMain.main }}
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </Button>
            </Typography>
            {collapse ? drawer : navbar}
          </Toolbar>
        </div>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
