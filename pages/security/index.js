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
import { Colors, ValidationMessages } from "@/common/utils/constants";

const Security = () => {

  const { handleSubmit, control } = useForm();

  const onPasswordSubmit = handleSubmit((data) => {
    console.log(data)
  })

  const onEmailSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <DashboardLayout>
      <Typography variant="h4" mt mb>
        Security
      </Typography>

      <Grid container spacing={5} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <Stack component="form" noValidate onSubmit={onPasswordSubmit} spacing={2}>
            <Controller
              name="current_password"
              control={control}
              rules={{
                required: ValidationMessages.required,
              }}
              render={({ field, fieldState: { error } }) => (
                <InputField
                  {...field}
                  label="Current Password"
                  error={error}
                />
              )}
            />
            <Controller
              name="new_password"
              control={control}
              rules={{
                required: ValidationMessages.required,
              }}
              render={({ field, fieldState: { error } }) => (
                <InputField
                  {...field}
                  label="New Password"
                  error={error}
                />
              )}
            />
            <Button type="submit">Update</Button>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack component="form" noValidate onSubmit={onEmailSubmit} spacing={2}>
            <Controller
              name="current_email"
              control={control}
              rules={{
                required: ValidationMessages.required,
              }}
              render={({ field, fieldState: { error } }) => (
                <InputField
                  {...field}
                  label="Current Email"
                  error={error}
                />
              )}
            />
            <Controller
              name="new_email"
              control={control}
              rules={{
                required: ValidationMessages.required,
              }}
              render={({ field, fieldState: { error } }) => (
                <InputField
                  {...field}
                  label="New Email"
                  error={error}
                />
              )}
            />
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
