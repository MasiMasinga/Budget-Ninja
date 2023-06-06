import React from "react";
import Image from "next/image";

// Mui
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

// Components
import Typography from "@/common/components/Typography";

const Error404 = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        p: 4,
        minHeight: '100vh'
      }}
    >
      <Image src="/logo.svg" width={100} height={100} alt='logo' />
      <Typography variant='h4' pt={6}>404 - Page Not Found!</Typography>
      <Typography variant='paragraph' mt={4} pb={6} sx={{ textAlign: 'center' }}>
        The page you are looking for no longer exists or has been moved.
      </Typography>
      <Link href="/">Go Back Home</Link>
    </Stack>
  )
};

export default Error404;
