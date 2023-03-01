import { React } from "react";
import { Typography, Container, Grid, Button, styled } from "@mui/material";
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
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
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
  [theme.breakpoints.down("sm")]: {
    width: "85% !important",
  },
}));
const StyledProjectsGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "space-around",
  width: "100%",
  marginLeft: "0 !important",
  marginTop: "0 !important",
  padding: "1rem",
}));
const StyledProjectsGridItem = styled(Grid)(({ theme }) => ({
  animation: "fadeInUp",
  animationDuration: "1s",
  position: "relative",
  display: "flex",
  height: "280px",
  marginBottom: "2.5rem",
  paddingTop: "0 !important",
  paddingLeft: "0 !important",
  overflow: "hidden",
  alignItems: "flex-end",
  transform: "none",
  transition: "transform 150ms ease-in-out 0s",
  "&:hover": {
    transform: "scale(1.02)",
    transition: "transform 150ms ease-in-out 0s",
    [theme.breakpoints.up("sm")]: {
      "& div": {
        opacity: "1",
        transform: "translateY(-10%)",
        transition:
          "opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s",
      },
    },
    "&::after": {
      opacity: "0.9 !important",
      content: "''",
      position: "absolute",
      inset: "0px",
      borderRadius: "1rem",
      background:
        "linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 70%)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "&::after": {
      opacity: "0.9 !important",
      content: "''",
      position: "absolute",
      inset: "0px",
      borderRadius: "1rem",
      background:
        "linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 70%)",
    },
    "& div": {
      opacity: "1",
    },
  },
  [theme.breakpoints.down("xs")]: {
    height: "250px !important",
  },
}));
const StyledProjectsImg = styled("img")(({ theme }) => ({
  height: "100%",
  width: "100%",
  position: "absolute",
  objectFit: "cover",
  borderRadius: "1rem",
}));
const StyledProjectsTextField = styled("div")(({ theme }) => ({
  zIndex: "1000 !important",
  transition: "opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s",
  transform: "none",
  opacity: "0",
  padding: "0rem 1rem",
  color: "white",
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 1rem",
  },
}));
const StyledProjectsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem !important",
  fontWeight: "600",
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.3rem !important",
  },
}));
const StyledProjectsSubText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem !important",
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.8rem !important",
  },
}));
const StyledProjectsSkillContainer = styled("div")(({ theme }) => ({
  marginTop: "0.5rem",
  display: "flex",
  flexWrap: "wrap",
}));
const StyledProjectsSkillText = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem !important",
  //border: "2px solid white",
  background: "white",
  marginRight: "0.5rem",
  padding: "0rem 0.2rem",
  borderRadius: "0.4rem",
  color: "black",
  fontWeight: "600",
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.7rem !important",
  },
}));

//End component styles

const Projects = () => {
  const [projectsContainer, projectsContainerInView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const mellowHeadSkills = ["React", "Material-UI", "Redux", "Polygon"];
  const mellowHeadsLink = "https://mellowheadsnft.com";
  const mellowHeadsGH =
    "https://github.com/Maximilian-Oberholtzer/mellow-heads-nft";

  const openLink = (link) => {
    window.open(link, "_blank");
  };

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
                <StyledProjectsGridItem item xs={12} sm={5.5}>
                  <StyledProjectsImg alt="" src={MellowHeads} />
                  <StyledProjectsTextField>
                    <StyledProjectsTitle>Mellow Heads NFT</StyledProjectsTitle>
                    <StyledProjectsSubText>
                      Collection of 5000 algorithmically generated marshmallow
                      characters on the Polygon Blockchain
                    </StyledProjectsSubText>
                    <StyledProjectsSkillContainer>
                      {mellowHeadSkills.map((skill, index) => (
                        <StyledProjectsSkillText key={index}>
                          {skill}
                        </StyledProjectsSkillText>
                      ))}
                    </StyledProjectsSkillContainer>
                    <Button
                      onClick={() => {
                        openLink(mellowHeadsLink);
                      }}
                      sx={{
                        padding: "0",
                        minWidth: "0",
                        marginTop: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      <LaunchIcon />
                    </Button>
                    <Button
                      sx={{
                        padding: "0",
                        minWidth: "0",
                        marginTop: "0.43rem",
                        transform: "scale(0.90)",
                      }}
                      onClick={() => {
                        openLink(mellowHeadsGH);
                      }}
                    >
                      <GitHubIcon />
                    </Button>
                  </StyledProjectsTextField>
                </StyledProjectsGridItem>
                <StyledProjectsGridItem item xs={12} sm={5.5}>
                  <StyledProjectsImg alt="" src={MellowHeads} />
                  <StyledProjectsTextField>
                    <StyledProjectsTitle>Mellow Heads NFT</StyledProjectsTitle>
                    <StyledProjectsSubText>
                      Collection of 5000 algorithmically generated marshmallow
                      characters on the Polygon Blockchain
                    </StyledProjectsSubText>
                    <StyledProjectsSkillContainer>
                      {mellowHeadSkills.map((skill, index) => (
                        <StyledProjectsSkillText key={index}>
                          {skill}
                        </StyledProjectsSkillText>
                      ))}
                    </StyledProjectsSkillContainer>
                    <Button
                      onClick={() => {
                        openLink(mellowHeadsLink);
                      }}
                      sx={{
                        padding: "0",
                        minWidth: "0",
                        marginTop: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      <LaunchIcon />
                    </Button>
                    <Button
                      sx={{
                        padding: "0",
                        minWidth: "0",
                        marginTop: "0.43rem",
                        transform: "scale(0.90)",
                      }}
                      onClick={() => {
                        openLink(mellowHeadsGH);
                      }}
                    >
                      <GitHubIcon />
                    </Button>
                  </StyledProjectsTextField>
                </StyledProjectsGridItem>
                <StyledProjectsGridItem item xs={12} sm={5.5}>
                  <StyledProjectsImg alt="" src={MellowHeads} />
                  <StyledProjectsTextField>
                    <StyledProjectsTitle>Mellow Heads NFT</StyledProjectsTitle>
                    <StyledProjectsSubText>
                      Collection of 5000 algorithmically generated marshmallow
                      characters on the Polygon Blockchain
                    </StyledProjectsSubText>
                    <StyledProjectsSkillContainer>
                      {mellowHeadSkills.map((skill, index) => (
                        <StyledProjectsSkillText key={index}>
                          {skill}
                        </StyledProjectsSkillText>
                      ))}
                    </StyledProjectsSkillContainer>
                    <Button
                      onClick={() => {
                        openLink(mellowHeadsLink);
                      }}
                      sx={{
                        padding: "0",
                        minWidth: "0",
                        marginTop: "0.5rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      <LaunchIcon />
                    </Button>
                    <Button
                      sx={{
                        padding: "0",
                        minWidth: "0",
                        marginTop: "0.43rem",
                        transform: "scale(0.90)",
                      }}
                      onClick={() => {
                        openLink(mellowHeadsGH);
                      }}
                    >
                      <GitHubIcon />
                    </Button>
                  </StyledProjectsTextField>
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
