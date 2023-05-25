import React, { useContext } from "react";

// Context
import { AuthContext } from "@/common/contexts/AuthContext";
import { BudgetContext } from "@/common/contexts/BudgetContext";

// Mui
import Grid from "@mui/material/Grid";

// Components
import DashboardLayout from "@/common/layout/DashboardLayout";
import Typography from "@/common/components/Typography";
import BudgetForm from "./components/BudgetForm";
import ExpenseForm from "./components/ExpenseForm";
import ViewBudgetCard from "./components/ViewBudgetCard";

const Dashboard = () => {
  const { } = useContext(AuthContext);

  const { } = useContext(BudgetContext);

  return (
    <DashboardLayout>
      <Typography variant="h4" mt mb>
        Welcome back, Masibonge
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
        {[0, 1].map((index) => (
          <Grid item xs={12} md={6} key={index}>
            <ViewBudgetCard />
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
