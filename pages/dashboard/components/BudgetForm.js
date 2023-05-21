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
import { Colors } from "@/common/utils/constants";

const BudgetForm = () => {
  return (
    <Stack alignItems="center">
      <Stack
        component="form"
        noValidate
        spacing={2}
        alignItems="flex-start"
        sx={{
          width: "100%",
          height: "250px",
          borderRadius: "10px",
          px: 5,
          border: "2px solid black",
          bgcolor: Colors.white,
        }}
      >
        <Typography variant="h5" mt mb>
          Create budget
        </Typography>
        <InputField label="Budget name" />
        <InputField label="Amount" />
        <Button type="submit" endIcon={<PaidIcon />}>
          Create Budget
        </Button>
      </Stack>
    </Stack>
  );
};

export default BudgetForm;
