import React from "react";

// Mui
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

// Components
import Typography from "./Typography";

// Colors
import { Colors } from "../utils/constants";

const Footer = () => {
  return (
    <Stack
      justifyContent="flex-end"
      sx={{height: "15vh", bgcolor: Colors.secondary }}
    >
      <Typography variant="subtitle" color={Colors.primary} sx={{ p: 1 }}>
        &copy; 2023 Budget Ninja. All rights reserved.
      </Typography>
    </Stack>
  );
};

export default Footer;
