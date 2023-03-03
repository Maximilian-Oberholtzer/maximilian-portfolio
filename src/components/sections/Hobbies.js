import React from "react";
import {
  useTheme,
  Typography,
  Grid,
  styled,
  useMediaQuery,
} from "@mui/material";
import {
  StyledDivider,
  StyledGenericContainer,
  StyledGenericRoot,
  StyledGenericSubText,
  StyledGenericTitle,
} from "./Styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import { TennisSvgPath, RubiksCubePath, RocketLeaguePath } from "../SvgHelper";
import "animate.css";

//Component styles
const StyledHobbiesGrid = styled(Grid)({
  padding: "2rem 0rem 2rem 0rem",
  justifyContent: "center",
  animation: "fadeInUp",
  animationDuration: "1.5s",
});
const StyledHobbiesGridTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(26px, 2vw, 30px) !important",
  color: theme.palette.textMain.main,
  textAlign: "center",
  marginTop: "1rem !important",
}));
const StyledHobbiesGridSubText = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(16px, 1.5vw, 18px) !important",
  color: theme.palette.textSecondary.main,
  textAlign: "center",
}));
const StyledHobbiesGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column !important",
  alignItems: "center",
  padding: "4rem 4rem 4rem 4rem !important",
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 4rem 2rem 4rem !important",
  },
  textAlign: "center",
  color: theme.palette.textMain.main,
  minWidth: "33%",
  flexGrow: "1",
}));

//End component styles

const pathVariants = {
  hidden: {
    opactiy: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 18,
      ease: "easeIn",
    },
  },
};

const pathVariantsRL = {
  hidden: {
    opactiy: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 14,
      ease: "easeIn",
    },
  },
};

const Hobbies = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("md"));

  const [hobbiesContainer, hobbiesContainerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [h1, h1InView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  const [h2, h2InView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  const [h3, h3InView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <Scroll.Element name="Hobbies">
      <StyledGenericRoot ref={hobbiesContainer}>
        <StyledGenericContainer>
          <div
            style={
              hobbiesContainerInView
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
            className={
              hobbiesContainerInView
                ? "animate__animated animate__fadeInUp"
                : ""
            }
          >
            <StyledGenericTitle component="h1">
              Hobbies
              <StyledDivider />
            </StyledGenericTitle>
            <StyledGenericSubText component="h1">
              Aside from making applications, these are the things I that enjoy
              to do for fun! Under each of them I have included my favorite
              achievement.
            </StyledGenericSubText>
          </div>

          <StyledHobbiesGrid container spacing={1}>
            <StyledHobbiesGridItem item xs={12} sm={4} ref={h1}>
              <div
                style={
                  h1InView
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                className={
                  h1InView ? "animate__animated animate__fadeInUp" : ""
                }
              >
                <motion.svg
                  viewBox="0 0 512 512"
                  width={sm ? "6rem" : "8rem"}
                  initial="hidden"
                  animate={h1InView ? "visible" : ""}
                >
                  <motion.path
                    d={TennisSvgPath}
                    fill="none"
                    variants={pathVariants}
                    stroke={theme.palette.textMain.main}
                    strokeWidth="7"
                  ></motion.path>
                </motion.svg>
                <StyledHobbiesGridTitle>Tennis</StyledHobbiesGridTitle>
                <StyledHobbiesGridSubText>
                  Peak ranking of 12 UTR in singles & 3-star college recruit
                </StyledHobbiesGridSubText>
              </div>
            </StyledHobbiesGridItem>
            <StyledHobbiesGridItem item xs={12} sm={4} ref={h2}>
              <div
                style={
                  h2InView
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                className={
                  h2InView ? "animate__animated animate__fadeInUp" : ""
                }
              >
                <motion.svg
                  viewBox="0 0 512 512"
                  width={sm ? "6rem" : "8rem"}
                  initial="hidden"
                  animate={h2InView ? "visible" : ""}
                >
                  <motion.path
                    d={RubiksCubePath}
                    fill="none"
                    variants={pathVariants}
                    stroke={theme.palette.textMain.main}
                    strokeWidth="7"
                  ></motion.path>
                </motion.svg>{" "}
                <StyledHobbiesGridTitle>Speed Cubing</StyledHobbiesGridTitle>
                <StyledHobbiesGridSubText>
                  Fastest recorded 3x3 solve time is currently 10.51 seconds
                </StyledHobbiesGridSubText>
              </div>
            </StyledHobbiesGridItem>
            <StyledHobbiesGridItem item xs={12} sm={4} ref={h3}>
              <div
                style={
                  h3InView
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                className={
                  h3InView ? "animate__animated animate__fadeInUp" : ""
                }
              >
                <motion.svg
                  viewBox="0 0 300.000000 179.000000"
                  width={sm ? "10rem" : "12rem"}
                  height={sm ? "6rem" : "8rem"}
                  initial="hidden"
                  animate={h3InView ? "visible" : ""}
                >
                  <motion.path
                    d={RocketLeaguePath}
                    fill="none"
                    transform="translate(0.000000,179.000000) scale(0.100000,-0.100000)"
                    variants={pathVariantsRL}
                    stroke={theme.palette.textMain.main}
                    strokeWidth="18"
                  ></motion.path>
                </motion.svg>
                <StyledHobbiesGridTitle>Rocket League</StyledHobbiesGridTitle>
                <StyledHobbiesGridSubText>
                  Top 100 on global leaderboard in Solo Duel game mode
                </StyledHobbiesGridSubText>
              </div>
            </StyledHobbiesGridItem>
          </StyledHobbiesGrid>
        </StyledGenericContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  );
};

export default Hobbies;
