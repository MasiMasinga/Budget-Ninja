import React from "react";

// Mui
import Grid from "@mui/material/Grid";

// Components
import ExpenseViewRowHeadings from "./ExpenseViewRowHeadings";
import ExpenseBudgetRow from "./ExpenseBudgetRow";

const ExpenseView = () => {
  return (
    <Grid container textAlign="center"spacing={0.25}>
      <ExpenseViewRowHeadings />
      <ExpenseBudgetRow />      
    </Grid>
  );
};

export default ExpenseView;
