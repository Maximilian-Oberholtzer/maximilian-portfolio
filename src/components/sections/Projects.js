import { React } from "react";
import { Typography, Container, Grid, Card, styled } from "@mui/material";
import {
  StyledDivider,
  StyledGenericContainer,
  StyledGenericRoot,
  StyledGenericSubText,
  StyledGenericTitle,
} from "./Styles";
import "animate.css";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import MellowHeads from "../../assets/mellowHeadsNFT.png";

//Component styles//
const StyledProjectsContainer = styled(Container)(({ theme }) => ({
  marginTop: "3rem",
  display: "flex",
  flexDirection: "column",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  textAlign: "center",
  overflow: "hidden",
  justifyContent: "center",
  // borderRadius: "1rem",
  // paddingLeft: "0 !important",
  // paddingRight: "0 !important",
  [theme.breakpoints.down("sm")]: {
    width: "80% !important",
  },
}));
const StyledProjectsGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "space-around",
  width: "100%",
  marginLeft: "0 !important",
  marginTop: "0 !important",
}));
const StyledProjectsGridItem = styled(Grid)(({ theme }) => ({
  animation: "fadeInUp",
  animationDuration: "1s",
  position: "relative",
  display: "flex",
  height: "280px",
  marginBottom: "4rem",
  paddingTop: "0 !important",
  paddingLeft: "0 !important",
  overflow: "hidden",
  "&:hover": {
    "&::after": {
      opacity: "0.5 !important",
      content: "''",
      position: "absolute",
      inset: "0px",
      borderRadius: "1rem",
      background:
        "linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 60%)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "&::after": {
      opacity: "0.5 !important",
      content: "''",
      position: "absolute",
      inset: "0px",
      borderRadius: "1rem",
      background:
        "linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 60%)",
    },
  },
}));
const StyledProjectsImg = styled("img")(({ theme }) => ({
  height: "100%",
  width: "100%",
  position: "absolute",
  objectFit: "cover",
  borderRadius: "1rem",
  left: "0px",
  right: "0px",
}));

//End component styles

const Projects = () => {
  const [projectsContainer, projectsContainerInView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <Scroll.Element name="Projects">
      <StyledGenericRoot ref={projectsContainer}>
        {projectsContainerInView && (
          <>
            <StyledGenericContainer>
              <StyledGenericTitle component="h1">
                Projects
                <StyledDivider />
              </StyledGenericTitle>
              <StyledGenericSubText component="h1">
                Here are a few projects that I have built over the past few
                years!
              </StyledGenericSubText>
            </StyledGenericContainer>
            <StyledProjectsContainer>
              <StyledProjectsGrid container rowSpacing={6} columnSpacing={12}>
                <StyledProjectsGridItem item xs={12} sm={5}>
                  <StyledProjectsImg alt="" src={MellowHeads} />
                </StyledProjectsGridItem>
                <StyledProjectsGridItem item xs={12} sm={5}>
                  <StyledProjectsImg alt="" src={MellowHeads} />
                </StyledProjectsGridItem>
                <StyledProjectsGridItem item xs={12} sm={5}>
                  <StyledProjectsImg alt="" src={MellowHeads} />
                </StyledProjectsGridItem>
              </StyledProjectsGrid>
            </StyledProjectsContainer>
          </>
        )}
      </StyledGenericRoot>
    </Scroll.Element>
  );
};

export default Projects;
