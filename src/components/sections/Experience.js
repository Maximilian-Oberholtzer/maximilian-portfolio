import { React, useState } from "react";
import { Container, styled, useTheme } from "@mui/material";
import {
  StyledDivider,
  StyledGenericContainer,
  StyledGenericRoot,
  StyledGenericSubText,
  StyledGenericTitle,
} from "./Styles";
import Typography from "@mui/material/Typography";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";
import data from "../../content/experience.json";
import Slider from "react-slick";
import "animate.css";

//Component styles
const StyledCarouselContainer = styled(Container)(({ theme }) => ({
  marginTop: "3rem",
  alignItems: "center",
  width: "75% !important",
  boxSizing: "unset !important",
  maxWidth: "1000px !important",
  textAlign: "center",
  animation: "fadeInUp",
  animationDuration: "1.25s",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "4rem",
  },
}));
const StyledCarouselCard = styled("div")(({ theme }) => ({
  borderRadius: "2rem !important",
  padding: "2rem 2rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1.25rem 1.25rem",
  },
  maxWidth: "75%",
  border: "0.15rem solid " + theme.palette.backgroundSecondary.main,
}));
const StyledCarouselTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(28px, 4vw, 44px) !important",
  color: theme.palette.textSecondary.main,
}));
const StyledCarouselSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(18px, 2vw, 30px) !important",
  color: theme.palette.textMain.main,
}));
const StyledCarouselSubText = styled(Typography)(({ theme }) => ({
  marginTop: "1rem !important",
  fontSize: "clamp(16px, 1.8vw, 26px) !important",
  color: theme.palette.textMain.main,
}));

const customDotsClass = "custom-dots-class";

const Experience = () => {
  const theme = useTheme();

  const [experienceContainer, experienceContainerInView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const dotStyles = `
    .${customDotsClass} li button:before {
      font-size: 0.75rem;
      color: ${theme.palette.textMain.main} !important;
      margin-top: 1rem;
      opacity: 0.4;
    }

    .${customDotsClass} li .slick-active button:focus:before  {
      opacity: 1 !important;
    }

    .${customDotsClass} li .slick-active button:before  {
      opacity: 1 !important;
    }
  `;

  const settings = {
    dots: true,
    autoplay: false,
    dotsClass: `slick-dots ${customDotsClass}`,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Scroll.Element name="Experience">
      <StyledGenericRoot ref={experienceContainer}>
        {experienceContainerInView && (
          <>
            <StyledGenericContainer>
              <StyledGenericTitle component="h1">
                Experience
                <StyledDivider />
              </StyledGenericTitle>
              <StyledGenericSubText component="h1">
                Since graduating from Ursinus College in 2018, I have worked as
                a full stack software engineer in the professional space.
              </StyledGenericSubText>
            </StyledGenericContainer>

            <StyledCarouselContainer>
              <style>{dotStyles}</style>
              <Slider {...settings}>
                {data.map((item) => (
                  <StyledCarouselCard key={item.id}>
                    <StyledCarouselTitle>{item.company}</StyledCarouselTitle>
                    <StyledCarouselSubTitle>
                      {item.jobTitle}
                    </StyledCarouselSubTitle>
                    <StyledCarouselSubText>
                      {item.description}
                    </StyledCarouselSubText>
                  </StyledCarouselCard>
                ))}
              </Slider>
            </StyledCarouselContainer>
          </>
        )}
      </StyledGenericRoot>
    </Scroll.Element>
  );
};

export default Experience;
