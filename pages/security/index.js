import React from "react";

// Mui
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Components
import DashboardLayout from "@/common/layout/DashboardLayout";
import Typography from "@/common/components/Typography";
import Button from "@/common/components/Button";
import InputField from "@/common/components/InputField";

// Utils
import { Colors } from "@/common/utils/constants";

const Security = () => {
  return (
    <DashboardLayout>
      <Typography variant="h4" mt mb>
        Security
      </Typography>

      <Grid container spacing={5} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <Stack component="form" noValidate spacing={2}>
            <InputField label="Current Password" />
            <InputField label="New Password" />
            <Button type="submit">Update</Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack component="form" noValidate spacing={2}>
            <InputField label="Current Email" />
            <InputField label="New Email" />
            <Button type="submit">Update</Button>
          </Stack>
        </Grid>
      </Grid>

      <Stack alignItems="flex-end" sx={{ mt: 5 }}>
        <Button sx={{ bgcolor: Colors.red, border: `2px solid ${Colors.red}` }}>
          Delete
        </Button>
      </Stack>
    </DashboardLayout>
  );
};

export default Security;
