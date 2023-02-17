import React from "react";
import { useTheme, Container, Typography, Grid } from "@mui/material";
import useStyles from "./Styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import { TennisSvgPath, RubiksCubePath, RocketLeaguePath } from "../SvgHelper";
import "animate.css";

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
  const classes = useStyles();
  const theme = useTheme();
  const [hobbiesContainer, hobbiesContainerInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [tennis, inViewTennis] = useInView({ threshold: 0, triggerOnce: true });
  const [cube, inViewCube] = useInView({ threshold: 0, triggerOnce: true });
  const [rl, inViewRl] = useInView({ threshold: 0, triggerOnce: true });

  return (
    <Scroll.Element name="Hobbies">
      <section className={classes.hobbiesRoot}>
        <Container className={classes.hobbiesContainer} ref={hobbiesContainer}>
          {hobbiesContainerInView && (
            <>
              <Typography className={classes.hobbiesTitle} component="h1">
                Hobbies
                <div className={classes.divider} />
              </Typography>
              <Typography className={classes.hobbiesSubText} component="h1">
                Aside from making applications, these are the things I that
                enjoy to do for fun! Under each of them I have included my
                favorite achievement.
              </Typography>
            </>
          )}

          <Grid
            ref={tennis}
            container
            spacing={1}
            className={classes.hobbiesGrid}
          >
            <Grid item xs={12} sm={4} className={classes.hobbiesGridItem}>
              {inViewTennis && (
                <div style={{ animation: "fadeInUp", animationDuration: "2s" }}>
                  <motion.svg
                    viewBox="0 0 512 512"
                    width="8rem"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      d={TennisSvgPath}
                      fill="none"
                      variants={pathVariants}
                      stroke={theme.palette.textMain.main}
                      strokeWidth="7"
                    ></motion.path>
                  </motion.svg>
                  <Typography className={classes.hobbiesGridTitle}>
                    Tennis
                  </Typography>
                  <Typography ref={cube} className={classes.hobbiesGridSubtext}>
                    Peak ranking of 12 UTR in singles
                  </Typography>
                </div>
              )}
            </Grid>
            <Grid item xs={12} sm={4} className={classes.hobbiesGridItem}>
              {inViewCube && (
                <div style={{ animation: "fadeInUp", animationDuration: "2s" }}>
                  <motion.svg
                    viewBox="0 0 512 512"
                    width="8rem"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      d={RubiksCubePath}
                      fill="none"
                      variants={pathVariants}
                      stroke={theme.palette.textMain.main}
                      strokeWidth="7"
                    ></motion.path>
                  </motion.svg>{" "}
                  <Typography className={classes.hobbiesGridTitle}>
                    Speed Cubing
                  </Typography>
                  <Typography ref={rl} className={classes.hobbiesGridSubtext}>
                    My fastest 3x3 solve time is currently 10.51 seconds
                  </Typography>
                </div>
              )}
            </Grid>
            <Grid item xs={12} sm={4} className={classes.hobbiesGridItem}>
              {inViewRl && (
                <div style={{ animation: "fadeInUp", animationDuration: "2s" }}>
                  <motion.svg
                    viewBox="0 0 300.000000 179.000000"
                    width="12rem"
                    height="8rem"
                    initial="hidden"
                    animate="visible"
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
                  <Typography className={classes.hobbiesGridTitle}>
                    Rocket League
                  </Typography>
                  <Typography className={classes.hobbiesGridSubtext}>
                    Top 100 global Solo Duel player
                  </Typography>
                </div>
              )}
            </Grid>
          </Grid>
        </Container>
      </section>
    </Scroll.Element>
  );
};

export default Hobbies;
