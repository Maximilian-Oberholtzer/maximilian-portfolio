import { React } from "react";
import {
  CubeSvgPath,
  emailSvgPath,
  githubSvgPath,
  linkedInSvgPath,
  rocketLeagueSvgPath,
  UTRSvgPath,
} from "./SvgHelper";
import { Button } from "@mui/material";
import { useTheme } from "@mui/styles";
import useStyles from "./Styles";

const openEmail = () => {
  window.location = "mailto:max.oberholtzer@yahoo.com";
};

const openLink = (link) => {
  window.open(link, "_blank");
};

const SideAnchorLinks = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <div className={classes.leftAnchor}>
        <Button
          onClick={() => {
            openLink("https://www.linkedin.com/in/max-oberholtzer/");
          }}
          className={classes.anchorButtonSvg}
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
        </Button>
        <Button
          onClick={() => {
            openLink("https://github.com/Maximilian-Oberholtzer");
          }}
          className={classes.anchorButtonSvg}
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
        </Button>
        <Button onClick={openEmail} className={classes.anchorButtonSvg}>
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
        </Button>
      </div>
      <div className={classes.rightAnchor}>
        <Button
          onClick={() => {
            openLink("https://app.universaltennis.com/profiles/51049");
          }}
          className={classes.anchorButtonSvg}
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
        </Button>
        <Button
          onClick={() => {
            openLink(
              "https://rocketleague.tracker.network/rocket-league/profile/steam/76561198262193029/overview"
            );
          }}
          className={classes.anchorButtonSvg}
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
        </Button>
        <Button
          onClick={() => {
            openLink("https://www.worldcubeassociation.org/persons/2022OBER04");
          }}
          className={classes.anchorButtonSvg}
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
        </Button>
      </div>
    </>
  );
};

export default SideAnchorLinks;
