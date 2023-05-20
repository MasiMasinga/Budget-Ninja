import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [formState, setFormState] = useState({
    firstName: '',
    emailAddress: '',
    password: '',
    confirmPassword: ''
  })

  const handleCreateAccount = async (data) => {};

  const handleSignUpWithGoogle = async () => {};

  const handleSignInWithGoogle = async () => {};

  const handleLogin = async (data) => {};

  const handleLogout = async () => {};

  let value = {
    formState,
    setFormState,
    handleCreateAccount,
    handleSignUpWithGoogle,
    handleSignInWithGoogle,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
