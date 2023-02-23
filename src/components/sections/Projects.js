import { React } from "react";
import { Typography, styled } from "@mui/material";
import {
  StyledDivider,
  StyledGenericContainer,
  StyledGenericRoot,
  StyledGenericSubText,
  StyledGenericTitle,
} from "./Styles";
import "animate.css";
import { useInView } from "react-intersection-observer";
import * as Scroll from "react-scroll";

//Component styles//

//End component styles

const Projects = () => {
  const [projectsContainer, projectsContainerInView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  return (
    <Scroll.Element name="Projects">
      <StyledGenericRoot ref={projectsContainer}>
        {projectsContainerInView && (
          <StyledGenericContainer>
            <StyledGenericTitle component="h1">
              Projects
              <StyledDivider />
            </StyledGenericTitle>
            <StyledGenericSubText component="h1">
              Here are a few projects that I have built over the past few years!
            </StyledGenericSubText>
          </StyledGenericContainer>
        )}
      </StyledGenericRoot>
    </Scroll.Element>
  );
};

export default Projects;
