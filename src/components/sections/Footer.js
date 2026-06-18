import { React } from "react";
import "animate.css";
import { useInView } from "react-intersection-observer";
import {
  Typography,
  List,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { GitHub } from "@mui/icons-material";
import {
  CubeSvgPath,
  emailSvgPath,
  githubSvgPath,
  linkedInSvgPath,
  rocketLeagueSvgPath,
  UTRSvgPath,
} from "../SvgHelper";
import * as Scroll from "react-scroll";

const StyledFooterRoot = styled("section")(({ theme }) => ({
  minHeight: "30vh",
  justifyContent: "center",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  alignContent: "center",
  textAlign: "center",
  paddingTop: "2rem",
  paddingBottom: "2rem",
}));

const StyledContactHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold !important",
  color: theme.palette.textMain.main,
  fontSize: "clamp(28px, 3.5vw, 44px) !important",
  marginBottom: "0.5rem !important",
}));

const StyledContactSubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textMain.main,
  opacity: 0.75,
  fontSize: "clamp(15px, 1.4vw, 18px) !important",
  marginBottom: "1.5rem !important",
  maxWidth: "500px",
}));

const StyledEmailButton = styled("a")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.75rem 2rem",
  borderRadius: "0.4rem",
  backgroundColor: theme.palette.backgroundSecondary.main,
  color: "#FFFFFF !important",
  fontFamily: "'Jost', sans-serif",
  fontSize: "1.1rem",
  fontWeight: "600",
  textDecoration: "none",
  marginBottom: "2rem",
  transition:
    "background-color 200ms ease-in-out, transform 150ms ease-in-out, box-shadow 200ms ease-in-out",
  boxShadow: `0 2px 16px ${theme.palette.backgroundSecondary.main}50`,
  "&:hover": {
    backgroundColor: theme.palette.buttonHover.main,
    transform: "translateY(-2px)",
    boxShadow: `0 6px 24px ${theme.palette.backgroundSecondary.main}60`,
  },
}));

const StyledDividerLine = styled("div")(({ theme }) => ({
  width: "80px",
  height: "1px",
  background: `${theme.palette.backgroundSecondary.main}60`,
  margin: "0 auto 1.5rem",
}));

const StyledFooterText = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  color: theme.palette.textMain.main,
  opacity: 0.6,
}));

const StyledFooterList = styled(List)({
  display: "block",
});

const StyledListItemLink = styled("a")(({ theme }) => ({
  justifyContent: "center",
  padding: "0.4rem",
  width: "0",
}));

const StyledViewCodeLink = styled("a")(({ theme }) => ({
  textDecoration: "unset",
  color: theme.palette.textMain.main,
  opacity: 0.6,
  "&:hover": {
    opacity: 1,
    color: theme.palette.textSecondary.main,
  },
}));

const Footer = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const [footer, footerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Scroll.Element name="Contact">
      <StyledFooterRoot ref={footer}>
        <div
          style={
            footerInView ? { visibility: "visible" } : { visibility: "hidden" }
          }
          className={
            footerInView
              ? "animate__animated animate__fadeInUp animate__faster"
              : ""
          }
        >
          <StyledContactHeading>Get In Touch</StyledContactHeading>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StyledContactSubText>
              If you have a question or just want to connect, my inbox is always
              open.
            </StyledContactSubText>
          </div>
          <StyledEmailButton
            href="https://www.linkedin.com/in/max-oberholtzer/"
            target="_blank"
          >
            Connect
          </StyledEmailButton>
          {lg && (
            <>
              <StyledDividerLine />
              <StyledFooterList>
                <StyledListItemLink
                  sx={{ marginRight: "-0.3rem" }}
                  href="https://www.linkedin.com/in/max-oberholtzer/"
                  target="_blank"
                >
                  <svg
                    fill={theme.palette.textMain.main}
                    width="28px"
                    height="28px"
                    viewBox="-5.5 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d={linkedInSvgPath} />
                  </svg>
                </StyledListItemLink>
                <StyledListItemLink
                  href="https://github.com/Maximilian-Oberholtzer"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="28px"
                    height="28px"
                    fillRule="evenodd"
                    fill={theme.palette.textMain.main}
                  >
                    <title>Github</title>
                    <path fillRule="evenodd" d={githubSvgPath} />
                  </svg>
                </StyledListItemLink>
                <StyledListItemLink
                  href="mailto:max.oberholtzer@yahoo.com"
                  sx={{ transform: "scale(0.9)" }}
                >
                  <svg
                    fill={theme.palette.textMain.main}
                    height="28px"
                    width="28px"
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
                </StyledListItemLink>
                <StyledListItemLink
                  href="https://app.universaltennis.com/profiles/51049"
                  target="_blank"
                >
                  <svg
                    fill={theme.palette.textMain.main}
                    width="28px"
                    height="28px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Universal Tennis Rating</title>
                    <UTRSvgPath />
                  </svg>
                </StyledListItemLink>
                <StyledListItemLink
                  href="https://rocketleague.tracker.network/rocket-league/profile/steam/76561198262193029/overview"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="28px"
                    height="28px"
                    fill={theme.palette.textMain.main}
                  >
                    <title>Rocket League Tracker</title>
                    <path d={rocketLeagueSvgPath} />
                  </svg>
                </StyledListItemLink>
                <StyledListItemLink
                  href="https://www.worldcubeassociation.org/persons/2022OBER04"
                  target="_blank"
                >
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28px"
                    height="28px"
                    viewBox="0 0 1250.000000 1280.000000"
                    preserveAspectRatio="xMidYMid meet"
                    fill={theme.palette.textMain.main}
                  >
                    <title>WCA Profile</title>
                    <metadata>
                      Created by potrace 1.15, written by Peter Selinger
                      2001-2017
                    </metadata>
                    <g
                      transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <CubeSvgPath />
                    </g>
                  </svg>
                </StyledListItemLink>
              </StyledFooterList>
            </>
          )}
          <StyledFooterText>© 2026 Maximilian Oberholtzer</StyledFooterText>
          <StyledFooterText sx={{ marginBottom: "1rem" }}>
            <StyledViewCodeLink href="https://github.com/Maximilian-Oberholtzer/maximilian-portfolio">
              View the code{" "}
              <GitHub
                sx={{ marginBottom: "-0.2rem", fontSize: "1rem !important" }}
              />
            </StyledViewCodeLink>
          </StyledFooterText>
        </div>
      </StyledFooterRoot>
    </Scroll.Element>
  );
};

export default Footer;
