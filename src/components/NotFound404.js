import React, { useEffect } from "react";
import { Typography, styled, useTheme } from "@mui/material";
import "animate.css";

//Component styles//
const Styled404Root = styled("section")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.background.main,
  minHeight: "100vh",
  marginTop: "-2rem",
}));
const Styled404Container = styled("div")(({ theme }) => ({
  animation: "fadeInDown",
  animationDuration: "1.5s",
  textAlign: "center",
}));
const Styled404Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.textSecondary.main,
  fontSize: "clamp(100px, 25vw, 200px)",
  fontWeight: "600",
}));
const Styled404SubText = styled(Typography)(({ theme }) => ({
  color: theme.palette.textMain.main,
  fontSize: "clamp(20px, 3vw, 30px)",
  marginTop: "-2rem",
}));

//End component style//

const NotFound404 = () => {
  const theme = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Styled404Root>
      <Styled404Container>
        <Styled404Text>404</Styled404Text>
        <Styled404SubText>Page Not Found</Styled404SubText>
      </Styled404Container>
    </Styled404Root>
  );
};

export default NotFound404;
