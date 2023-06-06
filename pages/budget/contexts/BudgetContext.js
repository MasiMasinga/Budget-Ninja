import React, { useState, useEffect, useContext, createContext } from "react";

// Api
import api from "@/services/api";

// Context
import { StateContext } from "@/common/contexts/StateContext";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {

  const { setNotificationMessage } = useContext(StateContext);
  const [loading, setLoading] = useState(false);

  const [budgetFormState, setBudgetFormState] = useState([]);
  const [expenseFormState, setExpenseFormState] = useState([]);

  const [spentBudget, setSpentBudget] = useState(0);
  const [remainingBudget, setRemainingBudget] = useState(0);

  const handleCreateBudget = async (data) => {
    setLoading(true);
    setBudgetFormState([...budgetFormState, data]);
    setNotificationMessage({
      message: "Budget successfully created.",
      type: "success"
    });
    setLoading(false);
    // let postData = {
    //   budget_name: data.budget_name,
    //   budget_amount: data.budget_amount,
    // }

    // const response = await api.post("api/budget", postData)

    // if (response.data === 200) {
    //   setBudgetFormState([...budgetFormState, data]);
    //   setNotificationMessage({
    //     message: "Budget successfully created.",
    //     type: "success"
    //   });
    //   setLoading(false);
    // } else {
    //   setNotificationMessage({
    //     message: "An error occurred trying to create a budget.",
    //     type: "error"
    //   });
    //   setLoading(false);
    // }
  };

  const handleDeleteBudget = async (data) => {
    setLoading(true);
  };

  const handleCreateExpense = async (data) => {
    setLoading(true);
    setExpenseFormState([...expenseFormState, data]);
    setNotificationMessage({
      message: "Expense successfully added to budget.",
      type: "success"
    });
    setLoading(false);
    // let postData = {
    //   budget_name: data.expense_name,
    //   budget_amount: data.expense_amount,
    // }

    // const response = await api.post("api/expense", postData)

    // if (response.data === 200) {
    //   setExpenseFormState([...expenseFormState, data]);
    //   setNotificationMessage({
    //     message: "Expense successfully added to budget.",
    //     type: "success"
    //   });
    //   setLoading(false);
    // } else {
    //   setNotificationMessage({
    //     message: "An error occurred trying to create a expense.",
    //     type: "error"
    //   });
    //   setLoading(false);
    // }
  };

  const handleDeleteExpense = async (data) => {
    setLoading(true);
  };

  const handleCalculateSpentBudget = async (data) => { };

  const handleCalculateRemainingBudget = async (data) => { };

  let value = {
    loading,
    remainingBudget,
    spentBudget,
    budgetFormState,
    setBudgetFormState,
    expenseFormState,
    setExpenseFormState,
    handleCreateBudget,
    handleDeleteBudget,
    handleCreateExpense,
    handleDeleteExpense,
    handleCalculateSpentBudget,
    handleCalculateRemainingBudget,
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};
