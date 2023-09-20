import { Box, styled, Typography } from "@mui/material";
import React from "react";
interface Props {
  classDetails: any;
}

const ClassDetails: React.FC<Props> = ({ classDetails }) => {
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
      >
        <WrapperHeader
          sx={{
            width: "11rem",
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
            {classDetails.name}
          </Typography>
        </WrapperHeader>
        <Wrapper>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1rem",
              marginTop: "2rem",
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
              {classDetails.start_time} - {classDetails.end_time}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontSize: "1.8rem",
                background: "transparent",
              }}
            >
              {classDetails.teacher}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontSize: "1.8rem",
                background: "transparent",
              }}
            >
              {classDetails.venue}
            </Typography>
          </Box>
        </Wrapper>
      </Box>
    </>
  );
};

export default ClassDetails;

const Wrapper = styled(Box)({
  backgroundColor: "#92D8FF",
  width: "18rem",
  height: "15rem",
  borderRadius: "1.5rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  cursor: "pointer",
  transition: "all 0.3s ease",
  gap: "1rem",
});

const WrapperHeader = styled(Box)({
  backgroundColor: "#5CB3A8",
  borderRadius: "1.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  marginBottom: "-1.9rem",
  zIndex: 1,
});
