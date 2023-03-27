import { React, useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material";
import { motion } from "framer-motion";
import "animate.css";

//Component styles
const StyledLoaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  position: "fixed",
  backgroundColor: theme.palette.background.main,
}));

//End Component styles

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
};

const Loader = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 1800);
  }, []);

  return (
    <StyledLoaderContainer>
      <div className={hasLoaded ? "animate__animated animate__fadeOut" : ""}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 140 130"
          width="8rem"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M 861,970 C 799,805 745,659 742,645 c -2,-14 -8,-25 -12,-25 -15,0 -23,175 -17,383 l 6,207 -22,-4 c -12,-3 -39,-8 -61,-11 -67,-11 -209,-55 -277,-86 l -65,-30 -32,-97 C 206,808 165,616 140,407 c -10,-86 -10,-90 14,-132 14,-24 47,-62 73,-85 50,-45 160,-120 175,-120 4,0 8,42 8,93 0,151 46,419 88,517 l 19,45 7,-70 c 16,-159 84,-435 107,-435 29,0 198,249 284,417 24,48 44,84 44,78 1,-5 -6,-55 -14,-110 -21,-151 -52,-294 -92,-429 -4,-16 -1,-17 38,-11 67,10 218,54 259,75 29,15 40,28 48,57 45,171 63,244 85,353 32,155 54,300 63,408 6,70 5,82 -8,82 -35,0 -196,53 -274,90 -45,22 -84,40 -86,40 -2,0 -54,-135 -117,-300 z m 360,165 c 104,-32 103,-29 83,-189 -27,-223 -116,-623 -146,-663 -19,-24 -249,-95 -263,-81 -2,2 8,48 21,103 58,237 77,401 51,424 -19,15 -46,-16 -87,-99 C 818,507 661,270 641,270 c -18,0 -69,217 -86,365 -8,67 -28,107 -49,99 -49,-19 -125,-354 -126,-551 0,-35 -4,-63 -9,-63 -12,0 -96,63 -144,109 -65,61 -70,78 -57,189 14,124 64,374 95,477 42,139 48,155 69,168 41,27 247,92 322,102 l 30,5 -4,-218 c -5,-279 10,-374 56,-346 10,6 66,138 134,315 65,167 117,305 118,306 0,1 33,-13 73,-31 39,-19 111,-46 158,-61 z"
            transform="translate(0.000000,136.000000) scale(0.100000,-0.100000)"
            fill="none"
            stroke={theme.palette.textMain.main}
            strokeWidth="50"
            variants={pathVariants}
          />
        </motion.svg>
      </div>
    </StyledLoaderContainer>
  );
};

export default Loader;
