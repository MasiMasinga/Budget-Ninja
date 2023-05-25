import React, { useState, createContext } from "react";

export const SecurityContext = createContext();

export const SecurityProvider = ({ children }) => {
  const [passwordFormState, setPasswordFormState] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [emailFormState, setEmailFormState] = useState({
    currentEmail: "",
    newEmail: "",
  });

  const handleUpdatePassword = async (data) => {};

  const handleUpdateEmail = async (data) => {};

  let value = {
    passwordFormState,
    setPasswordFormState,
    emailFormState,
    setEmailFormState,
    handleUpdatePassword,
    handleUpdateEmail,
  };

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};
