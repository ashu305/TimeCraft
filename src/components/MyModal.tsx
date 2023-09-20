import { Box, Modal, Typography, styled } from "@mui/material";
import React from "react";
import ClassDetails from "./ClassDetails";
import { classesDetails } from "../Data/data";

interface Props {
  open: boolean;
  handleOpen(): void;
  setOpen(open: boolean): void;
  handleClose(): void;
  headerText: string;
}
const MyModal: React.FC<Props> = ({ handleClose, open, setOpen, handleOpen, headerText }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          border: "none",
          outline: "none",
          "&:focus": {
            outline: "none",
          },
          "&:click": {
            outline: "none",
          },
        }}
      >
        <Box
          sx={{
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "all 0.3s ease",
          }}
          onClick={handleOpen}
        >
          <WrapperHeader
            sx={{
              width: "15rem",
              height: "4rem",
              marginTop: "-1.3rem",
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
          <Wrapper>
            {classesDetails.map((classDetails) => (
              <ClassDetails classDetails={classDetails} />
            ))}
          </Wrapper>
        </Box>
      </Modal>
    </>
  );
};

export default MyModal;

const Wrapper = styled(Box)({
  backgroundColor: "#fff",
  width: "70rem",
  height: "45rem",
  borderRadius: "1.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s ease",
  gap: "1rem",
  overflow: "scroll",
  flexWrap: "wrap",
  "&::-webkit-scrollbar": {
    width: "0.4rem",
  },
});

const WrapperHeader = styled(Box)({
  position: "absolute",
  backgroundColor: "#5CB3A8",
  borderRadius: "1.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  zIndex: 10,
});
