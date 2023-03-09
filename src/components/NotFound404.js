import React, { useEffect, useState } from "react";
import { Typography, styled } from "@mui/material";
import "animate.css";

//Component styles//
const Styled404Root = styled("section")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  position: "fixed",
  backgroundColor: theme.palette.background.main,
}));
const Styled404Container = styled("div")(({ fadeOut }) => ({
  animation: fadeOut ? "fadeOutDown" : "fadeInDown",
  animationDuration: "1s",
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
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const reloadPageTimer = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    return () => clearTimeout(reloadPageTimer);
  }, []);

  return (
    <Styled404Root>
      <Styled404Container fadeOut={fadeOut}>
        <Styled404Text>404</Styled404Text>
        <Styled404SubText>Page Not Found</Styled404SubText>
      </Styled404Container>
    </Styled404Root>
  );
};

export default NotFound404;