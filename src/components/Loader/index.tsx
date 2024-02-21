import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
        zIndex: 10
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
