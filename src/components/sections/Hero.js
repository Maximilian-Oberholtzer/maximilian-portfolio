import React, { useEffect, useState } from "react";
import { Container, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import maxAvatar from "../../assets/max_avatar.svg";
import "animate.css";

//Component styles//
const StyledHeroRoot = styled("section")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.background.main,
  minHeight: "100vh",
}));

const StyledHeroContainer = styled(Container)(({ theme, ismobile }) => ({
  display: "flex !important",
  flex: "1",
  alignItems: "center",
  alignSelf: "center",
  boxSizing: "unset !important",
  width: "unset",
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
  marginBottom: ismobile ? "4rem" : "0rem",
}));

const StyledHeroImage = styled("img")(({ theme }) => ({
  animation: "fadeIn",
  animationDuration: "2s",
  width: "280px",
  borderRadius: "2rem",
  backgroundColor: theme.palette.backgroundSecondary.main,
  textAlign: "center",
  margin: "2rem 4rem 2rem 4rem ",
  [theme.breakpoints.down("lg")]: {
    width: "230px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "180px",
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
  margin: "2rem 4rem 2rem 4rem ",
}));

const StyledHeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold !important",
  color: theme.palette.textMain.main,
  marginBottom: theme.spacing(0),
  fontSize: "clamp(32px, 4vw, 55px) !important",
}));

const StyledHeroSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textSecondary.main + " !important",
  fontSize: "clamp(20px, 2vw, 26px) !important",
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

//End component style//

const Hero = () => {
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
            <StyledHeroImage alt="" src={maxAvatar} />
          </Grid>
          <StyledHeroText item>
            <StyledHeroTitle component="h1" variant="h2">
              Maximilian Oberholtzer
            </StyledHeroTitle>
            <StyledHeroSubText component="h1" variant="h5">
              Full stack software engineer who enjoys creative coding and UI/UX
              designs
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
          }}
        >
          <ScrollerIcon />
        </div>
      )}
    </StyledHeroRoot>
  );
};

export default Hero;
