import React, { useContext } from "react";

// Context
import { AuthContext } from "@/common/contexts/AuthContext";
import { BudgetContext } from "@/pages/budget/contexts/BudgetContext";

// Mui
import Grid from "@mui/material/Grid";

// Components
import DashboardLayout from "@/common/layout/DashboardLayout";
import Typography from "@/common/components/Typography";
import BudgetForm from "./components/BudgetForm";
import ExpenseForm from "./components/ExpenseForm";
import ViewBudgetCard from "./components/ViewBudgetCard";
import NoDataBlock from '@/common/components/NoDataBlock'

const Dashboard = () => {
  const { formState } = useContext(AuthContext);
  const { budgetFormState } = useContext(BudgetContext);

  return (
    <DashboardLayout>
      <Typography variant="h4" mt mb>
        Welcome back, {formState.first_name}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <BudgetForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <ExpenseForm />
        </Grid>
      </Grid>

      <Typography variant="h4" mt mb>
        Existing Budgets
      </Typography>

      <Grid container spacing={2}>
        {
          budgetFormState.length > 0 ?
            budgetFormState.map((budget, index) => (
              <Grid key={index} item xs={12} md={6}>
                <ViewBudgetCard budget={budget} />
              </Grid>
            ))
            :
            <NoDataBlock message="No budget has been created" />
        }
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
