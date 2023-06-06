import React, { useContext } from "react";

// Mui
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Context
import { SecurityContext } from "@/pages/security/contexts/SecurityContext";

// Components
import DashboardLayout from "@/common/layout/DashboardLayout";
import Typography from "@/common/components/Typography";
import Button from "@/common/components/Button";
import PasswordUpdateForm from "./components/PasswordUpdateForm";
import EmailUpdateForm from "./components/EmailUpdateForm";

// Utils
import { Colors } from "@/common/utils/constants";

const Security = () => {

  const { handleDeleteAccount } = useContext(SecurityContext)

  return (
    <DashboardLayout>
      <Typography variant="h4" mt mb>
        Security
      </Typography>

      <Grid container spacing={5} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <PasswordUpdateForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <EmailUpdateForm />
        </Grid>
      </Grid>

      <Stack alignItems="flex-end" sx={{ mt: 5 }}>
        <Button onClick={handleDeleteAccount} sx={{ bgcolor: Colors.red, border: `2px solid ${Colors.red}` }}>
          Delete
        </Button>
      </Stack>
    </DashboardLayout>
  );
};

export default Security;
