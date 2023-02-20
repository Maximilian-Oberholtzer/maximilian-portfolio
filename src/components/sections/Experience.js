import { React, useState } from "react";
import { useTheme, Container, Card } from "@mui/material";
import useStyles from "./Styles";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import data from "../../content/experience.json";
import Slider from "react-slick";
import "animate.css";

const Experience = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [isAutoPlay, setAutoPlay] = useState(true);

  const [experienceContainer, experienceContainerInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [experienceSlider, experienceSliderInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const stopAutoPlay = () => {
    setAutoPlay(false);
  };

  const settings = {
    dots: true,
    autoplay: isAutoPlay,
    autoplaySpeed: 3500,
    dotsClass: `slick-dots ${classes.dots}`,
    infinite: true,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(data);
  return (
    <Scroll.Element name="Experience">
      <section className={classes.experienceRoot}>
        <Container
          className={classes.experienceContainer}
          ref={experienceContainer}
        >
          {experienceContainerInView && (
            <>
              <Typography className={classes.experienceTitle} component="h1">
                Experience
                <div className={classes.divider} />
              </Typography>
              <Typography
                className={classes.experienceSubText}
                component="h1"
                ref={experienceSlider}
              >
                Since graduating from Ursinus College in 2018, I have worked as
                a full stack software engineer in the professional space.
              </Typography>
            </>
          )}
        </Container>
        {experienceSliderInView && (
          <>
            <Container className={classes.carouselContainer}>
              <Slider className={classes.carouselSlider} {...settings}>
                {data.map((item) => (
                  <div
                    key={item.id}
                    className={classes.carouselContainerCard}
                    onClick={() => {
                      stopAutoPlay();
                    }}
                  >
                    <Typography className={classes.carouselTitle}>
                      {item.company}
                    </Typography>
                    <Typography className={classes.carouselSubTitle}>
                      {item.jobTitle}
                    </Typography>
                    <Typography className={classes.carouselSubText}>
                      {item.description}
                    </Typography>
                  </div>
                ))}
              </Slider>
            </Container>
          </>
        )}
      </section>
    </Scroll.Element>
  );
};

export default Experience;
