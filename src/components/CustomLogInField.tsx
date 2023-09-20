import { Typography, styled } from "@mui/material";
import React from "react";
import { Box, TextField, Button } from "@mui/material";

interface Props {
  setLoggedIn(loggedIn: boolean): void;
  rollNumber: string;
  setRollNumber(rollNumber: string): void;
}

const CustomLogInField: React.FC<Props> = ({ setLoggedIn, rollNumber, setRollNumber }) => {
  const handleLogIN = () => {
    if (rollNumber.length === 8) setLoggedIn(true);
    else {
      alert("Invalid Roll Number");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <WrapperHeader
          sx={{
            marginLeft: "2.5rem",
            width: "15rem",
            height: "3rem",
            bottom: "28.3rem",
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
            Roll Number
          </Typography>
        </WrapperHeader>
        <Wrapper>
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
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </Wrapper>
      </Box>
      <ShowButton
        sx={{
          marginTop: "3rem",
        }}
        onClick={handleLogIN}
      >
        Show
      </ShowButton>
    </Box>
  );
};

export default CustomLogInField;

const Wrapper = styled(Box)({
  backgroundColor: "#fff",
  width: "20rem",
  height: "6rem",
  borderRadius: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
});

const WrapperHeader = styled(Box)({
  position: "absolute",
  backgroundColor: "#5CB3A8",
  borderRadius: "0.4rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ShowButton = styled(Button)({
  width: "10rem",
  height: "3rem",
  zIndex: 10,
  borderRadius: "1rem",
  backgroundColor: "#5CB3A8",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  fontSize: "1.5rem",
  transition: "all 0.3s ease",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#fff",
    color: "#5CB3A8",
    border: "0.15rem solid #5CB3A8",
  },
});
