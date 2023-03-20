import { React } from "react";
import {
  CubeSvgPath,
  emailSvgPath,
  githubSvgPath,
  linkedInSvgPath,
  rocketLeagueSvgPath,
  UTRSvgPath,
} from "./SvgHelper";
import { styled } from "@mui/material";
import { useTheme } from "@mui/material";

//Component Styles//
const StyledAnchorLink = styled("a")(({ theme }) => ({
  "& svg": {
    width: "2.2rem",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
    transform: "none",
  },
  "&:hover": {
    "& svg": {
      fill: theme.palette.textSecondary.main + " !important",
      transform: "scale(1.2)",
    },
  },
}));

const StyledLeftAnchor = styled("div")({
  width: "40px",
  position: "fixed",
  bottom: "16vh",
  left: "50px",
  right: "auto",
  Zndex: "10",
  animation: "fadeInLeft",
  animationDuration: "1s",
});

const StyledRightAnchor = styled("div")({
  width: "40px",
  position: "fixed",
  bottom: "16vh",
  left: "auto",
  right: "50px",
  Zndex: "10",
  animation: "fadeInRight",
  animationDuration: "1s",
});
//End component styles//

const SideAnchorLinks = () => {
  const theme = useTheme();

  return (
    <>
      <StyledLeftAnchor>
        <StyledAnchorLink
          href="https://www.linkedin.com/in/max-oberholtzer/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <svg
            fill={theme.palette.textMain.main}
            width="44px"
            height="44px"
            viewBox="-5.5 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn</title>
            <path d={linkedInSvgPath} />
          </svg>
        </StyledAnchorLink>
        <StyledAnchorLink
          href="https://github.com/Maximilian-Oberholtzer"
          target="_blank"
          aria-label="Github"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="44px"
            height="44px"
            fillRule="evenodd"
            fill={theme.palette.textMain.main}
          >
            <title>Github</title>
            <path fillRule="evenodd" d={githubSvgPath} />
          </svg>
        </StyledAnchorLink>
        <StyledAnchorLink
          href="mailto:max.oberholtzer@yahoo.com"
          sx={{ transform: "scale(0.90)" }}
        >
          <svg
            fill={theme.palette.textMain.main}
            height="44px"
            width="44px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 75.294 75.294"
            xmlSpace="preserve"
          >
            <title>Email</title>
            <g>
              <path d={emailSvgPath} />
            </g>
          </svg>
        </StyledAnchorLink>
      </StyledLeftAnchor>
      <StyledRightAnchor>
        <StyledAnchorLink
          href="https://app.universaltennis.com/profiles/51049"
          target="_blank"
          aria-label="Tennis"
        >
          <svg
            fill={theme.palette.textMain.main}
            width="44px"
            height="44px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Universal Tennis Rating</title>
            <UTRSvgPath />
          </svg>
        </StyledAnchorLink>
        <StyledAnchorLink
          href="https://rocketleague.tracker.network/rocket-league/profile/steam/76561198262193029/overview"
          target="_blank"
          aria-label="Rocket League"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="44px"
            height="44px"
            fill={theme.palette.textMain.main}
          >
            <title>Rocket League Tracker</title>
            <path d={rocketLeagueSvgPath} />
          </svg>
        </StyledAnchorLink>
        <StyledAnchorLink
          href="https://www.worldcubeassociation.org/persons/2022OBER04"
          target="_blank"
          aria-label="Cube"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="44px"
            height="44px"
            viewBox="0 0 1250.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet"
            fill={theme.palette.textMain.main}
          >
            <title>WCA Profile</title>
            <metadata>
              Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g
              transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <CubeSvgPath />
            </g>
          </svg>
        </StyledAnchorLink>
      </StyledRightAnchor>
    </>
  );
};

export default SideAnchorLinks;
