import { React } from "react";
import { Container, useMediaQuery, styled, useTheme } from "@mui/material";
import Hero from "./sections/Hero";
import SideAnchorLinks from "./SideAnchorLinks";
import About from "./sections/About";
import Hobbies from "./sections/Hobbies";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

const StyledMainContainer = styled(Container)({
  maxWidth: "1600px",
});

const Main = () => {
  const theme = useTheme();
  const showSideAnchor = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.main,
        overflow: "hidden",
      }}
    >
      {showSideAnchor ? <></> : <SideAnchorLinks />}

      <StyledMainContainer>
        <Hero />
        <About />
        <Experience />
        <Hobbies />
        <Projects />
      </StyledMainContainer>
    </div>
  );
};

export default Main;
