import React from "react";
import Image from "next/image";

// Mui
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

// Components
import Typography from "./Typography";
import Button from "./Button";

// Colors
import { Colors } from "../utils/constants";

const Hero = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ height: "70vh", bgcolor: Colors.primary }}
    >
      <Stack sx={{ px: 20, py: 5 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Stack>
              <Typography variant="h2" mb color={Colors.secondary}>
                Take Control of Your Money
              </Typography>
              <Typography variant="h5" mb>
                Personal budgeting is the secret to financial freedom. Start
                your journey today.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button href="/auth/register">Create Account</Button>
                <Button href="/auth/login">Login</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack alignItems="center">
              <Image
                src="/finance-report-research.png"
                alt="logo"
                width={350}
                height={350}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Hero;
