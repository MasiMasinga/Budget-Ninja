import React, { useState, useContext, createContext } from "react";
import { useRouter } from "next/router";

// Api
import api from "@/services/api";

// Context
import { StateContext } from "@/common/contexts/StateContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setNotificationMessage } = useContext(StateContext);
  const [formState, setFormState] = useState({
    firstName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  });

  const handleCreateAccount = async (data) => {
    setLoading(true);

    let postData = {
      firstName: data.firstName,
      emailAddress: data.emailAddress,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    const response = await api.put("api/auth/register", postData);

    if (response.data === 200) {
      setFormState(response.data);
      setNotificationMessage({
        message: "Account Created successfully updated.",
        type: "success"
      });
      router.push("/auth/login");
      setLoading(false);
    } else {
      setNotificationMessage({
        message: "An error occurred trying to create your account.",
        type: "error"
      });
      setLoading(false);
    }
  };

  const handleSignUpWithGoogle = async () => { };

  const handleSignInWithGoogle = async () => { };

  const handleLogin = async (data) => {
    setLoading(true);

    let postData = {
      emailAddress: data.emailAddress,
      password: data.password,
    };

    const response = await api.put("api/auth/login", postData);

    if (response.data === 200) {
      setFormState(response.data);
      setNotificationMessage({
        message: "Login successful.",
        type: "success"
      });
      router.push("/dashboard");
      setLoading(false);
    } else {
      setNotificationMessage({
        message: "An error occurred trying to login into your account.",
        type: "error"
      });
      setLoading(false);
    }
  };

  const handleLogout = async () => { };

  let value = {
    loading,
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
