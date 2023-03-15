import { React, useState, useEffect } from "react";
import { Container, useMediaQuery, styled, useTheme } from "@mui/material";
import maxAvatar from "../assets/max.png";
import Hero from "./sections/Hero";
import SideAnchorLinks from "./SideAnchorLinks";
import About from "./sections/About";
import Hobbies from "./sections/Hobbies";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Navbar from "./Navbar";
import Footer from "./sections/Footer";
import Loader from "./Loader";

const StyledMainPage = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  overflow: "hidden",
}));
const StyledMainContainer = styled(Container)({
  maxWidth: "1600px",
});

const Main = () => {
  const theme = useTheme();
  const showSideAnchor = useMediaQuery(theme.breakpoints.up("lg"));
  const [isLoading, setIsloading] = useState(true);

  //Loader animation before rest of the page gets rendered
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2400);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <StyledMainPage>
            {showSideAnchor && <SideAnchorLinks />}
            <StyledMainContainer>
              <Hero img={maxAvatar} />
              <About />
              <Experience />
              <Projects />
              <Hobbies />
              <Footer />
            </StyledMainContainer>
          </StyledMainPage>
        </>
      )}
    </>
  );
};

export default Main;
