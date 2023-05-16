import React from "react";
import Image from "next/image";

// Mui
import Stack from "@mui/material/Stack";

// Utils
import { Colors } from "../utils/constants";

const Navbar = () => {
  return (
    <Stack sx={{ bgcolor: Colors.primary }}>
      <Image src="/logo.svg" alt="logo" width={200} height={120} />
    </Stack>
  );
};

export default Navbar;
