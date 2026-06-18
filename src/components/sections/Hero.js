import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, styled } from "@mui/material";
import { Link } from "react-scroll";
import "animate.css";

const StyledHeroRoot = styled("section")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.background.main,
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: "''",
    position: "absolute",
    top: "-10%",
    right: "-5%",
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${theme.palette.textSecondary.main}15 0%, transparent 65%)`,
    pointerEvents: "none",
    zIndex: 0,
  },
  "&::after": {
    content: "''",
    position: "absolute",
    bottom: "0%",
    left: "-8%",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${theme.palette.backgroundSecondary.main}25 0%, transparent 65%)`,
    pointerEvents: "none",
    zIndex: 0,
  },
}));

const StyledHeroContainer = styled(Container)(({ theme, ismobile }) => ({
  display: "flex !important",
  flex: "1",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  width: "unset",
  position: "relative",
  zIndex: 1,
  ["@media (max-height: 804px)"]: {
    paddingTop: ismobile ? "0px" : "102px",
  },
  [theme.breakpoints.up("sm")]: {
    marginTop: "2rem",
  },
}));

const StyledHeroGrid = styled(Grid)(({ ismobile }) => ({
  alignItems: "center",
  justifyContent: "space-around",
  width: "auto",
  marginBottom: ismobile ? "3.5rem" : "0rem",
}));

const StyledHeroImage = styled("img")(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  width: "270px",
  borderRadius: "1.25rem",
  border: `0.25rem solid ${theme.palette.textSecondary.main}40`,
  backgroundColor: `${theme.palette.backgroundSecondary.main}70`,
  boxShadow: `0 8px 40px ${theme.palette.textSecondary.main}20`,
  textAlign: "center",
  margin: "2rem 4rem 2rem 4rem",
  [theme.breakpoints.down("lg")]: {
    width: "220px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "57vw",
  },
}));

const StyledHeroText = styled(Grid)(({ theme }) => ({
  textAlign: "center",
  animation: "fadeIn",
  animationDuration: "2s",
  width: "50%",
  paddingLeft: "0 !important",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
    margin: "0",
  },
  margin: "2rem 4rem 2rem 4rem",
}));

const StyledHeroEyebrow = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(13px, 1.2vw, 16px) !important",
  color: theme.palette.textSecondary.main + " !important",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  fontWeight: "600 !important",
  marginBottom: "0.4rem !important",
}));

const StyledHeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold !important",
  color: theme.palette.textMain.main,
  marginBottom: theme.spacing(0),
  fontSize: "clamp(34px, 4vw, 55px) !important",
  [theme.breakpoints.up("md")]: {
    whiteSpace: "nowrap",
  },
}));

const StyledHeroSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textSecondary.main + " !important",
  fontSize: "clamp(16px, 1.6vw, 22px) !important",
  marginTop: "0.5rem !important",
  lineHeight: "1.6 !important",
}));

const StyledCTARow = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "0.75rem",
  marginTop: "2rem",
  justifyContent: "center",
  flexWrap: "wrap",
}));

const StyledCTAPrimary = styled(Link)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.6rem 1.4rem",
  borderRadius: "0.4rem",
  backgroundColor: theme.palette.backgroundSecondary.main,
  color: "#FFFFFF !important",
  fontFamily: "'Jost', sans-serif",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  textDecoration: "none",
  transition:
    "background-color 200ms ease-in-out, transform 150ms ease-in-out, box-shadow 200ms ease-in-out",
  boxShadow: `0 2px 16px ${theme.palette.backgroundSecondary.main}50`,
  "&:hover": {
    backgroundColor: theme.palette.buttonHover.main,
    transform: "translateY(-2px)",
    boxShadow: `0 6px 24px ${theme.palette.backgroundSecondary.main}60`,
  },
}));

const StyledCTAOutline = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.6rem 1.4rem",
  borderRadius: "0.4rem",
  border: `2px solid ${theme.palette.backgroundSecondary.main}`,
  color: theme.palette.textMain.main + " !important",
  fontFamily: "'Jost', sans-serif",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  textDecoration: "none",
  transition:
    "border-color 200ms ease-in-out, transform 150ms ease-in-out, color 200ms ease-in-out",
  "&:hover": {
    borderColor: theme.palette.textSecondary.main,
    color: theme.palette.textSecondary.main + " !important",
    transform: "translateY(-2px)",
  },
}));

const StyledCTAGhost = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.6rem 1.4rem",
  borderRadius: "0.4rem",
  border: `2px solid ${theme.palette.textMain.main}30`,
  color: theme.palette.textMain.main + " !important",
  fontFamily: "'Jost', sans-serif",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  textDecoration: "none",
  transition: "border-color 200ms ease-in-out, transform 150ms ease-in-out",
  "&:hover": {
    borderColor: theme.palette.textMain.main,
    transform: "translateY(-2px)",
  },
}));

const ScrollerIcon = styled("div")(({ theme }) => ({
  "@keyframes wheel": {
    to: {
      opacity: 0,
      top: "2.4rem",
    },
  },
  width: "1.5rem",
  height: "3rem",
  borderRadius: "2rem",
  position: "relative",
  marginBottom: "4rem",
  marginTop: "1rem",
  border: "3px solid " + theme.palette.textMain.main + " !important",
  "&::before": {
    content: "''",
    width: "0.3rem",
    height: "0.3rem",
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "50%",
    opacity: "1",
    backgroundColor: theme.palette.textMain.main + " !important",
    WebkitAnimation: "wheel 2s infinite",
    animation: "wheel 1.6s infinite",
  },
}));

const Hero = ({ img }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /mobile|android|ios|iphone|ipad|ipod|windows phone/i.test(userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <StyledHeroRoot>
      <StyledHeroContainer ismobile={isMobile}>
        <StyledHeroGrid ismobile={isMobile} container spacing={0}>
          <Grid item style={{ paddingLeft: "0 !important" }}>
            <StyledHeroImage alt="Image of Maximilian Oberholtzer" src={img} />
          </Grid>
          <StyledHeroText item>
            <StyledHeroEyebrow component="p">
              Frontend Software Engineer
            </StyledHeroEyebrow>
            <StyledHeroTitle component="h1" variant="h2">
              Maximilian Oberholtzer
            </StyledHeroTitle>
            <StyledHeroSubText component="p">
              Building creative web & mobile experiences for 7+ years
            </StyledHeroSubText>
          </StyledHeroText>
        </StyledHeroGrid>
      </StyledHeroContainer>
      {isMobile ? (
        <></>
      ) : (
        <div
          style={{
            marginTop: "2rem",
            animation: "fadeInUp",
            animationDuration: "1s",
            position: "relative",
            zIndex: 1,
          }}
        >
          <ScrollerIcon />
        </div>
      )}
    </StyledHeroRoot>
  );
};

export default Hero;
