import { React } from "react";
import "animate.css";
import { useInView } from "react-intersection-observer";
import {
  Typography,
  List,
  ListItemButton,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  CubeSvgPath,
  emailSvgPath,
  githubSvgPath,
  linkedInSvgPath,
  rocketLeagueSvgPath,
  UTRSvgPath,
} from "../SvgHelper";

//Component styles//
const StyledFooterRoot = styled("section")(({ theme }) => ({
  minHeight: "10vh",
  [theme.breakpoints.down("lg")]: {
    minHeight: "20vh",
  },
  justifyContent: "center",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  alignContent: "center",
  textAlign: "center",
}));
const StyledFooterText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.textMain.main,
}));
const StyledFooterList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}));
const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  justifyContent: "center",
  padding: "0",
  width: "0",
}));

//End component styles

const openEmail = () => {
  window.location = "mailto:max.oberholtzer@yahoo.com";
};

const openLink = (link) => {
  window.open(link, "_blank");
};

const Footer = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const currentYear = new Date().getFullYear();
  const [footer, footerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <StyledFooterRoot ref={footer}>
      <div
        style={
          footerInView ? { visibility: "visible" } : { visibility: "hidden" }
        }
        className={footerInView ? "animate__animated animate__fadeInUp" : ""}
      >
        {lg && (
          <StyledFooterList>
            <StyledListItemButton
              sx={{ marginRight: "-0.3rem" }}
              onClick={() => {
                openLink("https://www.linkedin.com/in/max-oberholtzer/");
              }}
            >
              <svg
                fill={theme.palette.textMain.main}
                width="32px"
                height="32px"
                viewBox="-5.5 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d={linkedInSvgPath} />
              </svg>
            </StyledListItemButton>
            <StyledListItemButton
              onClick={() => {
                openLink("https://github.com/Maximilian-Oberholtzer");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32px"
                height="32px"
                fillRule="evenodd"
                fill={theme.palette.textMain.main}
              >
                <title>Github</title>
                <path fillRule="evenodd" d={githubSvgPath} />
              </svg>
            </StyledListItemButton>
            <StyledListItemButton onClick={openEmail}>
              <svg
                fill={theme.palette.textMain.main}
                height="32px"
                width="32px"
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
            </StyledListItemButton>
            <StyledListItemButton
              onClick={() => {
                openLink("https://app.universaltennis.com/profiles/51049");
              }}
            >
              <svg
                fill={theme.palette.textMain.main}
                width="32px"
                height="32px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Universal Tennis Rating</title>
                <UTRSvgPath />
              </svg>
            </StyledListItemButton>
            <StyledListItemButton
              onClick={() => {
                openLink(
                  "https://rocketleague.tracker.network/rocket-league/profile/steam/76561198262193029/overview"
                );
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="32px"
                height="32px"
                fill={theme.palette.textMain.main}
              >
                <title>Rocket League Tracker</title>
                <path d={rocketLeagueSvgPath} />
              </svg>
            </StyledListItemButton>
            <StyledListItemButton
              onClick={() => {
                openLink(
                  "https://www.worldcubeassociation.org/persons/2022OBER04"
                );
              }}
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
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
            </StyledListItemButton>
          </StyledFooterList>
        )}
        <StyledFooterText>
          Designed & Built by Maximilian Oberholtzer
        </StyledFooterText>
        <StyledFooterText sx={{ marginLeft: "-0.75rem" }}>
          &copy; {currentYear}
        </StyledFooterText>
      </div>
    </StyledFooterRoot>
  );
};

export default Footer;
