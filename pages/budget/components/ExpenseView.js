import React, { useContext } from "react";

// Mui
import Grid from "@mui/material/Grid";

// Context
import { BudgetContext } from "@/pages/budget/contexts/BudgetContext";

// Components
import ExpenseViewRowHeadings from "./ExpenseViewRowHeadings";
import ExpenseBudgetRow from "./ExpenseBudgetRow";
import NoDataBlock from '@/common/components/NoDataBlock';

const ExpenseView = () => {
  const { expenseFormState } = useContext(BudgetContext);

  return (
    <Grid container textAlign="center" spacing={0.25}>
      {
        expenseFormState.length > 0 ?
          expenseFormState.map((expense, index) => (
            <Grid key={index} item xs={12} md={6}>
              <ExpenseViewRowHeadings />
              <ExpenseBudgetRow expense={expense} />
            </Grid>
          ))
          :
          <NoDataBlock message="No expense has been created" />
      }
    </Grid>
  );
};

export default ExpenseView;
