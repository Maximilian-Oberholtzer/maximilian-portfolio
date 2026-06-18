import { React } from "react";
import { Container, styled, useTheme } from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";

const customDotsClass = "custom-dots-class";

const StyledCarouselContainer = styled(Container)(({ theme }) => ({
  marginTop: "3rem",
  alignItems: "center",
  width: "75% !important",
  boxSizing: "unset !important",
  maxWidth: "700px !important",
  textAlign: "center",
  overflowX: "hidden",
  paddingBottom: "2rem",
  marginBottom: "4rem",
  [theme.breakpoints.down("sm")]: {
    width: "85% !important",
  },
  [theme.breakpoints.down("xs")]: {
    width: "90% !important",
  },
}));

const StyledExpCard = styled("div")(({ theme }) => ({
  borderRadius: "1rem",
  padding: "2rem 2.5rem",
  background: `radial-gradient(ellipse at top left, ${theme.palette.backgroundSecondary.main}15, ${theme.palette.backgroundSecondary.main}35)`,
  border: `1px solid ${theme.palette.backgroundSecondary.main}60`,
  textAlign: "left",
  height: "100%",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem 1.5rem",
  },
}));

const StyledCompetenciesGrid = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
  justifyContent: "center",
  width: "75%",
  maxWidth: "700px",
  marginTop: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
  [theme.breakpoints.down("xs")]: {
    width: "90%",
  },
}));

const StyledCompCard = styled("div")(({ theme }) => ({
  flex: "1 1 140px",
  maxWidth: "160px",
  borderRadius: "1rem",
  padding: "1.25rem 1rem",
  border: `1px solid ${theme.palette.backgroundSecondary.main}60`,
  background: `radial-gradient(ellipse at top left, ${theme.palette.backgroundSecondary.main}15, transparent 70%)`,
  textAlign: "center",
  transition: "transform 150ms ease-in-out, box-shadow 150ms ease-in-out",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: `0 8px 24px ${theme.palette.backgroundSecondary.main}30`,
  },
}));

const StyledCompIcon = styled("div")(({ theme }) => ({
  color: theme.palette.textSecondary.main,
  marginBottom: "0.5rem",
  "& svg": { fontSize: "2rem !important" },
}));

const StyledCompTitle = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem !important",
  fontWeight: "600 !important",
  color: theme.palette.textMain.main,
  lineHeight: "1.3 !important",
}));

const StyledCompDesc = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem !important",
  color: theme.palette.textMain.main,
  opacity: 0.65,
  marginTop: "0.3rem !important",
  lineHeight: "1.4 !important",
}));

const StyledExpYearChip = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  fontSize: "0.85rem !important",
  color: theme.palette.textSecondary.main,
  border: `1px solid ${theme.palette.textSecondary.main}60`,
  borderRadius: "1.5rem",
  padding: "0.15rem 0.75rem",
  marginBottom: "0.5rem !important",
}));

const StyledExpCompany = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(22px, 3vw, 34px) !important",
  color: theme.palette.textSecondary.main,
  fontWeight: "700 !important",
}));

const StyledExpTitle = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(16px, 1.8vw, 22px) !important",
  color: theme.palette.textMain.main,
  fontWeight: "600 !important",
  marginBottom: "0.25rem !important",
}));

const StyledExpDescription = styled(Typography)(({ theme }) => ({
  fontSize: "clamp(14px, 1.4vw, 18px) !important",
  color: theme.palette.textMain.main,
  opacity: 0.85,
  marginTop: "0.75rem !important",
  lineHeight: "1.7 !important",
}));

const Experience = () => {
  const theme = useTheme();

  const [experienceContainer, experienceContainerInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [s1, s1InView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [competencies, competenciesInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const competencyItems = [
    {
      icon: <WebIcon />,
      title: "Frontend Development",
      desc: "Vue, React & TypeScript",
    },
    {
      icon: <PhoneIphoneIcon />,
      title: "Mobile Apps",
      desc: "iOS Apps with React Native & Capacitor",
    },
    {
      icon: <DesignServicesIcon />,
      title: "UI / UX Design",
      desc: "Clean, Intuitive User Interfaces",
    },
  ];

  const dotStyles = `
    .${customDotsClass} li button:before {
      font-size: 0.75rem;
      color: ${theme.palette.textMain.main} !important;
      margin-top: 1rem;
      opacity: 0.4;
    }
    .${customDotsClass} li .slick-active button:focus:before {
      opacity: 1 !important;
    }
    .${customDotsClass} li .slick-active button:before {
      opacity: 1 !important;
    }
    .slick-dots {
      bottom: -18px !important;
    }
    .slick-track {
      display: flex !important;
      align-items: stretch;
    }
    .slick-slide {
      height: inherit !important;
      display: flex !important;
      flex-direction: column;
      padding: 0.5rem;
    }
    .slick-slide > div {
      height: 100%;
      display: flex;
      flex-direction: column;
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
        <StyledGenericContainer
          sx={
            experienceContainerInView
              ? {
                  visibility: "visible",
                  animation: "fadeInUp",
                  animationDuration: "1s",
                }
              : { visibility: "hidden" }
          }
        >
          <StyledGenericTitle component="h1">
            Experience
            <StyledDivider />
          </StyledGenericTitle>
          <StyledGenericSubText component="h1">
            Since graduating from Ursinus College in 2018, I have worked as a
            full stack software engineer in the professional space.
          </StyledGenericSubText>
        </StyledGenericContainer>

        <StyledCompetenciesGrid
          ref={competencies}
          className={
            competenciesInView
              ? "animate__animated animate__fadeInUp"
              : ""
          }
          sx={
            competenciesInView
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          {competencyItems.map((item, index) => (
            <StyledCompCard key={index}>
              <StyledCompIcon>{item.icon}</StyledCompIcon>
              <StyledCompTitle>{item.title}</StyledCompTitle>
              <StyledCompDesc>{item.desc}</StyledCompDesc>
            </StyledCompCard>
          ))}
        </StyledCompetenciesGrid>

        <StyledCarouselContainer
          ref={s1}
          sx={
            s1InView
              ? {
                  visibility: "visible",
                  animation: "fadeInUp",
                  animationDuration: "1s",
                }
              : { visibility: "hidden" }
          }
        >
          <style>{dotStyles}</style>
          <Slider {...settings}>
            {data.map((item) => (
              <StyledExpCard key={item.id}>
                <StyledExpYearChip>{item.years}</StyledExpYearChip>
                <StyledExpCompany>{item.company}</StyledExpCompany>
                <StyledExpTitle>{item.jobTitle}</StyledExpTitle>
                <StyledExpDescription>{item.description}</StyledExpDescription>
              </StyledExpCard>
            ))}
          </Slider>
        </StyledCarouselContainer>
      </StyledGenericRoot>
    </Scroll.Element>
  );
};

export default Experience;
