import React from "react";

// Mui
import Stack from "@mui/material/Stack";

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Mui Icons
import PaidIcon from "@mui/icons-material/Paid";

// Components
import Typography from "@/common/components/Typography";
import Button from "@/common/components/Button";
import InputField from "@/common/components/InputField";

// Utils
import { Colors, ValidationMessages } from "@/common/utils/constants";

const BudgetForm = () => {

  const { handleSubmit, control } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Stack alignItems="center">
      <Stack
        component="form"
        noValidate
        spacing={2}
        alignItems="flex-start"
        onSubmit={onSubmit}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          px: 5,
          border: "2px solid black",
          bgcolor: Colors.white,
        }}
      >
        <Typography variant="h5" mt mb>
          Create budget
        </Typography>
        <Controller
          name="budget_name"
          control={control}
          rules={{
            required: ValidationMessages.required,
          }}
          render={({ field, fieldState: { error } }) => (
            <InputField
              {...field}
              label="Budget name"
              error={error}
            />
          )}
        />
        <Controller
          name="amount"
          control={control}
          rules={{
            required: ValidationMessages.required,
          }}
          render={({ field, fieldState: { error } }) => (
            <InputField
              {...field}
              label="Amount"
              error={error}
            />
          )}
        />
        <Stack sx={{ pt: 1, pb: 2 }}>
          <Button type="submit" endIcon={<PaidIcon />}>
            Create Budget
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};


export default BudgetForm;
