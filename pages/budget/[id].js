import React, { useContext } from "react";

// Mui
import Grid from "@mui/material/Grid";

// Context
import { BudgetContext } from "@/pages/budget/contexts/BudgetContext";

// Layout
import DashboardLayout from "@/common/layout/DashboardLayout";

// Components
import Typography from "@/common/components/Typography";
import AddExpenseForm from "./components/AddExpenseForm";
import DeleteBudgetCard from "./components/DeleteBudgetCard";
import ExpenseView from "./components/ExpenseView";

const BudgetDetails = () => {

  const { budgetFormState} = useContext(BudgetContext);

  return (
    <DashboardLayout>
      <Typography variant="h4" mt mb>
        Groceries Overview
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <DeleteBudgetCard  budget={budgetFormState} />
        </Grid>
        <Grid item xs={12} md={7}>
          <AddExpenseForm />
        </Grid>
      </Grid>

      <Typography variant="h4" mt mb>
        Groceries Expenses
      </Typography>

      <ExpenseView />

    </DashboardLayout>
  );
};

export default BudgetDetails;
