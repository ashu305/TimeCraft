import styled from "@emotion/styled";
import "./App.css";
import CustomLogInField from "./components/CustomLogInField";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import TimeTable from "./components/TimeTable";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [rollNumber, setRollNumber] = useState("");
  return (
    <Wrapper>
      <div>
        <Header>
          <Heading variant="h1">{!loggedIn ? "Stay-UP" : "This Week's Time Table"}</Heading>
        </Header>
        <MyDivider />
      </div>
      <BodyWrapper>
        {!loggedIn ? (
          <CustomLogInField
            setLoggedIn={setLoggedIn}
            rollNumber={rollNumber}
            setRollNumber={setRollNumber}
          />
        ) : (
          <TimeTable />
        )}
      </BodyWrapper>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  width: "100vw",
  zIndex: 1,
  backgroundColor: "#474657",
});
const Header = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "4rem",
});
const Heading = styled(Typography)({
  fontSize: "2rem",
  color: "#fff",
});
const MyDivider = styled(Box)({
  width: "100%",
  height: "0.1rem",
  backgroundColor: "#a1a1a1",
});

const BodyWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});
