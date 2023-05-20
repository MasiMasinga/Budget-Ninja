import React, { createContext } from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const handleCreateBudget = async (data) => {};

  const handleUpdateBudget = async (data) => {};

  const handleDeleteBudget = async (data) => {};

  const getBudgets = async () => {};

  const getBudget = async () => {};

  const handleCreateExpense = async (data) => {};

  const handleUpdateExpense = async (data) => {};

  const handleDeleteExpense = async (data) => {};

  const getExpenses = async () => {};

  const getExpense = async () => {};

  let value = {
    handleCreateBudget,
    handleUpdateBudget,
    handleDeleteBudget,
    getBudgets,
    getBudget,
    handleCreateExpense,
    handleUpdateExpense,
    handleDeleteExpense,
    getExpenses,
    getExpense,
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};
