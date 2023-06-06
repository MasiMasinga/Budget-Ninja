import React, { useContext } from 'react'

// Mui
import Stack from "@mui/material/Stack";

// Context
import { BudgetContext } from '@/pages/budget/contexts/BudgetContext';

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Mui Icons
import AddIcon from "@mui/icons-material/Add";

// Components
import Typography from '@/common/components/Typography';
import Button from '@/common/components/Button';
import InputField from '@/common/components/InputField';

// Utils
import { Colors, ValidationMessages } from "@/common/utils/constants";

const AddExpenseForm = () => {

  const { handleCreateExpense } = useContext(BudgetContext);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      expense_name: '',
      expense_amount: '',
    }
  });

  const onSubmit = handleSubmit((data) => {
    handleCreateExpense(data)
  })

  return (
    <Stack alignItems="center">
      <Stack
        component="form"
        noValidate
        spacing={2}
        onSubmit={onSubmit}
        alignItems="flex-start"
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          px: 5,
          border: `2px solid ${Colors.black}`,
          bgcolor: Colors.white,
        }}
      >
        <Typography variant="h5" mt mb>
          Add New Groceries Expense
        </Typography>
        <Controller
          name="expense_name"
          control={control}
          rules={{
            required: ValidationMessages.required,
          }}
          render={({ field, fieldState: { error } }) => (
            <InputField
              {...field}
              label="Expense name"
              error={error}
            />
          )}
        />
        <Controller
          name="expense_amount"
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
          <Button type="submit" endIcon={<AddIcon />}>
            Add Expense
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AddExpenseForm