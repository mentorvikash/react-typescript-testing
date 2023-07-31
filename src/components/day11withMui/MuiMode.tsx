import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

function MuiMode() {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h4" component={"h1"}>
        mode {theme.palette.mode}
      </Typography>
    </Box>
  );
}

export default MuiMode;
