import { React } from "react";
import { Typography, styled } from "@mui/material";
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

const StyledScrollingContainer = styled("div")(({ theme }) => ({
  position: "relative",
  width: "inherit",
  animation: "fadeInUp",
  animationDuration: "1s",
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
}));

const StyledScrollingBelt = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "3rem",
  overflow: "hidden",
  width: "98%",
  marginLeft: "0.1rem",
}));

const StyledScrollingItem = styled("div")(({ theme }) => ({
  "@keyframes moveLeft": {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-1600%)" },
  },
  animation: "moveLeft 22s linear infinite",
  background: theme.palette.backgroundSecondary.main,
  marginRight: "3rem",
  borderRadius: "0.75rem",
  padding: "1rem",
  minWidth: "8rem",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    marginRight: "2.2rem",
    padding: "0.9rem 0.6rem 0.75rem 0.9rem",
  },
  [theme.breakpoints.down("xs")]: {
    marginRight: "1.6rem",
    padding: "0.7rem 0.5rem 0.7rem 0.5rem",
    minWidth: "5rem",
  },
}));

const StyledScrollingText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem !important",
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem !important",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.9rem !important",
  },
}));

const StyledStatGrid = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "center",
  marginTop: "2rem",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    marginTop: "4rem",
    marginBottom: "4rem",
  },
  [theme.breakpoints.down("xs")]: {
    marginTop: "4rem",
    marginBottom: "4rem",
  },
}));

const StyledStatCard = styled("div")(({ theme }) => ({
  borderRadius: "0.75rem",
  padding: "1.5rem 1.75rem",
  border: `1px solid ${theme.palette.backgroundSecondary.main}60`,
  background: `radial-gradient(ellipse at top left, ${theme.palette.backgroundSecondary.main}20, transparent 70%)`,
  textAlign: "center",
  flex: "1",
  minWidth: "140px",
  maxWidth: "200px",
  transition: "transform 150ms ease-in-out, box-shadow 150ms ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: `0 8px 24px ${theme.palette.backgroundSecondary.main}30`,
  },
}));

const StyledStatNumber = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(24px, 2.5vw, 34px) !important",
  fontWeight: "bold !important",
  color: theme.palette.textSecondary.main,
  lineHeight: "1.1 !important",
}));

const StyledStatLabel = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(12px, 1vw, 14px) !important",
  color: theme.palette.textMain.main,
  marginTop: "0.25rem !important",
  opacity: 0.8,
}));

const About = () => {
  const [aboutContainer, aboutContainerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const technologiesArr = [
    "Java",
    "Swift",
    "Node",
    "Vuetify",
    "Material-UI",
    "MetaMask",
    "Ethereum",
    "Javascript",
    "Codex",
    "PostgresSQL",
    "Solidity",
    "React",
    "Vue",
    "Git",
    "Express",
    "Java",
    "Swift",
    "Claude",
  ];

  const stats = [
    { number: "7+", label: "Years of Experience" },
    { number: "2M+", label: "End Users Served" },
    { number: "20k+", label: "App Downloads" },
  ];

  return (
    <Scroll.Element name="About">
      <StyledGenericRoot>
        <StyledGenericContainer
          style={{ overflow: "hidden" }}
          ref={aboutContainer}
          sx={
            aboutContainerInView
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
          className={
            aboutContainerInView
              ? "animate__animated animate__fadeInUp"
              : ""
          }
        >
          <StyledGenericTitle component="h1">
            About Me
            <StyledDivider />
          </StyledGenericTitle>
          <StyledGenericSubText component="h1">
            Hey there! My name is Maximilian and I have been building different
            types of web and mobile applications for 7+ years. After publishing
            a few games to the iOS App Store, I became more interested in
            developing responsive web designs with React. Listed below are some
            of the languages and technologies that I have experience using.
          </StyledGenericSubText>
          <StyledScrollingContainer>
            <StyledScrollingBelt>
              {technologiesArr.map((item, index) => (
                <StyledScrollingItem key={index}>
                  <StyledScrollingText component="h1">
                    {item}
                  </StyledScrollingText>
                </StyledScrollingItem>
              ))}
            </StyledScrollingBelt>
          </StyledScrollingContainer>
          <StyledStatGrid>
            {stats.map((stat, index) => (
              <StyledStatCard key={index}>
                <StyledStatNumber>{stat.number}</StyledStatNumber>
                <StyledStatLabel>{stat.label}</StyledStatLabel>
              </StyledStatCard>
            ))}
          </StyledStatGrid>
        </StyledGenericContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  );
};

export default About;
