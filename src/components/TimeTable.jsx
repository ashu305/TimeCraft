import React, { useState } from "react";
import { styled, Box, Typography, Modal } from "@mui/material";
import CustomTimeTableWrapper from "./CustomTimeTableWrapper";
import MyModal from "./MyModal";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const TimeTable = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [targetDay, setTargetDay] = useState("");

  const getWeeksDetails = (index) => {
    console.log("index:", index);
    const today = new Date().getDay();
    let arr = [];
    for (let i = index; i < index + 3; i++) {
      arr.push(
        <CustomTimeTableWrapper
          key={i}
          headerText={days[i]}
          highlight={today === i + 1}
          handleOpen={handleOpen}
          setTargetDay={setTargetDay}
        />
      );
    }
    return arr;
  };

  return (
    <Wrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        {getWeeksDetails(0)}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        {getWeeksDetails(3)}
      </Box>
      <MyModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        setOpen={setOpen}
        headerText={targetDay}
      />
    </Wrapper>
  );
};

export default TimeTable;

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  flexWrap: "wrap",
  gap: "1rem",
});
