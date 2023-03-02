import { React } from "react";
import {
  Typography,
  Container,
  Grid,
  Button,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
import MellowHeads from "../../assets/mellowHeadsCollection.png";
import RocketLeague from "../../assets/rocketLeague.png";
import iosGames from "../../assets/iosGames.jpg";

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
  [theme.breakpoints.down("xs")]: {
    width: "90% !important",
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
  position: "relative",
  display: "flex",
  height: "280px",
  marginBottom: "2.5rem",
  borderRadius: "1rem",
  border: `0.3rem solid ${theme.palette.backgroundSecondary.main}`,
  paddingTop: "0 !important",
  paddingLeft: "0 !important",
  overflow: "hidden",
  alignItems: "flex-end",
  transform: "none",
  transition: "transform 150ms ease-in-out 0s",
  "&:hover": {
    transform: "scale(1.02)",
    transition: "transform 150ms ease-in-out 0s",
    [theme.breakpoints.up("md")]: {
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

      background:
        "linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 70%)",
    },
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "500px",
    "&::after": {
      opacity: "0.9 !important",
      content: "''",
      position: "absolute",
      inset: "0px",

      background:
        "linear-gradient(rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.78) 70%)",
    },
    "& div": {
      opacity: "1",
    },
  },
  [theme.breakpoints.down("sm")]: {
    height: "260px !important",
  },
}));
const StyledProjectsImg = styled("img")(({ theme }) => ({
  transform: "scale(1.00)",
  height: "100%",
  width: "100%",
  position: "absolute",
  objectFit: "cover",
}));
const StyledProjectsTextField = styled("div")(({ theme }) => ({
  zIndex: "1000 !important",
  transition: "opacity 300ms ease-in-out 0s, transform 300ms ease-in-out 0s",
  transform: "none",
  opacity: "0",
  padding: "0rem 1rem",
  color: "white",
  textAlign: "left",
  [theme.breakpoints.down("lg")]: {
    transform: "none",
    padding: "1rem 1rem",
  },
}));
const StyledProjectsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem !important",
  fontWeight: "600",
}));
const StyledProjectsSubText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem !important",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem !important",
  },
}));
const StyledProjectsSkillContainer = styled("div")(({ theme }) => ({
  marginTop: "0.5rem",
  display: "flex",
  flexWrap: "wrap",
  rowGap: "0.4rem",
}));
const StyledProjectsSkillText = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem !important",
  background: "white",
  marginRight: "0.5rem",
  padding: "0.1rem 0.4rem",
  borderRadius: "0.5rem",
  color: "black",
  fontWeight: "600",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem !important",
  },
}));

//End component styles

const Projects = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  //triggers for animations
  const [projectsContainer, projectsContainerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [p1, p1InView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  const [p2, p2InView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  const [p3, p3InView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  //Content for project cards
  const mellowHeadSkills = [
    "React",
    "Material-UI",
    "Redux",
    "Polygon",
    "MetaMask",
  ];
  const mellowHeadsLink = "https://mellowheadsnft.com";
  const mellowHeadsGH =
    "https://github.com/Maximilian-Oberholtzer/mellow-heads-nft";
  const rocketLeagueSkills = ["React", "Bootstrap", "Node", "Express"];
  const rocketLeagueLink = "http://www.feedsanalysistool.com/";
  const rocketLeagueGH =
    "https://github.com/Maximilian-Oberholtzer/replay-analysis-tool";
  const iosGamesSkills = ["Swift", "SpriteKit", "Xcode", "Game Center"];

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Scroll.Element name="Projects">
      <StyledGenericRoot ref={projectsContainer}>
        <StyledGenericContainer
          sx={
            projectsContainerInView
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
          className={
            projectsContainerInView ? "animate__animated animate__fadeInUp" : ""
          }
        >
          <StyledGenericTitle component="h1">
            Projects
            <StyledDivider />
          </StyledGenericTitle>
          <StyledGenericSubText component="h1">
            Here are a few of my favorite projects that I have built over the
            past few years!
          </StyledGenericSubText>
        </StyledGenericContainer>
        <StyledProjectsContainer>
          <StyledProjectsGrid container rowSpacing={6} columnSpacing={12}>
            <StyledProjectsGridItem
              ref={p1}
              item
              xs={12}
              sm={5.5}
              sx={
                p1InView
                  ? {
                      visibility: "visible",
                      animation: "fadeInUp",
                      animationDuration: "1s",
                    }
                  : { visibility: "hidden" }
              }
            >
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
            <StyledProjectsGridItem
              ref={p2}
              item
              xs={12}
              sm={5.5}
              sx={
                p2InView
                  ? {
                      visibility: "visible",
                      animation: "fadeInUp",
                      animationDuration: "1s",
                    }
                  : { visibility: "hidden" }
              }
            >
              <StyledProjectsImg alt="" src={RocketLeague} />
              <StyledProjectsTextField>
                <StyledProjectsTitle>Replay Analysis Tool</StyledProjectsTitle>
                <StyledProjectsSubText>
                  A tool to review and analyze Rocket League solo duel replays
                </StyledProjectsSubText>
                <StyledProjectsSkillContainer>
                  {rocketLeagueSkills.map((skill, index) => (
                    <StyledProjectsSkillText key={index}>
                      {skill}
                    </StyledProjectsSkillText>
                  ))}
                </StyledProjectsSkillContainer>
                <Button
                  onClick={() => {
                    openLink(rocketLeagueLink);
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
                    openLink(rocketLeagueGH);
                  }}
                >
                  <GitHubIcon />
                </Button>
              </StyledProjectsTextField>
            </StyledProjectsGridItem>
            <StyledProjectsGridItem
              ref={p3}
              item
              xs={12}
              sm={5.5}
              sx={
                p3InView
                  ? {
                      visibility: "visible",
                      animation: "fadeInUp",
                      animationDuration: "1s",
                    }
                  : { visibility: "hidden" }
              }
            >
              <StyledProjectsImg
                alt=""
                src={iosGames}
                sx={
                  sm
                    ? { transform: "scale(1.12)" }
                    : { transform: "scale(1.08)" }
                }
              />
              <StyledProjectsTextField>
                <StyledProjectsTitle>iOS Games</StyledProjectsTitle>
                <StyledProjectsSubText>
                  Bottle-Flip, Hibachi-Toss & Fruit-Fall collectively received
                  4.5+ star reviews and had over 20k downloads internationally
                </StyledProjectsSubText>
                <StyledProjectsSkillContainer>
                  {iosGamesSkills.map((skill, index) => (
                    <StyledProjectsSkillText key={index}>
                      {skill}
                    </StyledProjectsSkillText>
                  ))}
                </StyledProjectsSkillContainer>
              </StyledProjectsTextField>
            </StyledProjectsGridItem>
          </StyledProjectsGrid>
        </StyledProjectsContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  );
};

export default Projects;
