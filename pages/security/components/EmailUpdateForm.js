import React, { useContext } from 'react'

// Context
import { SecurityContext } from "@/pages/security/contexts/SecurityContext";

// Mui
import Stack from "@mui/material/Stack";

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Components
import Button from "@/common/components/Button";
import InputField from "@/common/components/InputField";

// Utils
import { ValidationMessages } from "@/common/utils/constants";

const EmailUpdateForm = () => {

  const { handleUpdateEmail } = useContext(SecurityContext)

  const { handleSubmit, control } = useForm({
    defaultValues: {
      current_email: '',
      new_email: '',
    }
  });

  const onSubmit = handleSubmit((data) => {
    handleUpdateEmail(data);
  })

  return (
    <Stack component="form" noValidate onSubmit={onSubmit} spacing={2}>
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
  )
}

export default EmailUpdateForm