import { Box, Typography, styled } from "@mui/material";
import React from "react";

interface Props {
  headerText: string;
  highlight: boolean;
  handleOpen(): void;
  setTargetDay(day: string): void;
}

const CustomTimeTableWrapper: React.FC<Props> = ({
  headerText,
  highlight,
  handleOpen,
  setTargetDay,
}) => {
  const handelDayClicked = () => {
    setTargetDay(headerText);
    handleOpen();
  };

  return (
    <>
      <Box
        sx={{
          margin: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
        onClick={handelDayClicked}
      >
        <WrapperHeader
          sx={{
            width: "15rem",
            height: "4rem",
            marginTop: "-1.3rem",
            border: highlight ? "0.1rem solid #000000" : "none",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontSize: "1.8rem",
              background: "transparent",
            }}
          >
            {headerText}
          </Typography>
        </WrapperHeader>
        <Wrapper
          sx={{
            border: highlight ? "0.25rem solid #5db8d6" : "none",
          }}
        >
          <input
            type="text"
            style={{
              width: "89%",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "0.15rem solid #a1a1a1",
              marginBottom: "1rem",
              outline: "none",
              fontSize: "1.5rem",
              height: "fit-content",
            }}
            placeholder="12DEC025"
          />
        </Wrapper>
      </Box>
    </>
  );
};

export default CustomTimeTableWrapper;

const Wrapper = styled(Box)({
  backgroundColor: "#fff",
  width: "20rem",
  height: "20rem",
  borderRadius: "1.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  cursor: "pointer",
  transition: "all 0.3s ease",
});

const WrapperHeader = styled(Box)({
  position: "absolute",
  backgroundColor: "#5CB3A8",
  borderRadius: "1.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
