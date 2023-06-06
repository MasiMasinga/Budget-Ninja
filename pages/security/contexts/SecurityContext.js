import React, { useState, useContext, createContext } from "react";
import { useRouter } from "next/router";

// Api
import api from "@/services/api";

// Context
import { StateContext } from "@/common/contexts/StateContext";

export const SecurityContext = createContext();

export const SecurityProvider = ({ children }) => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const { setNotificationMessage } = useContext(StateContext);

  const [passwordFormState, setPasswordFormState] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [emailFormState, setEmailFormState] = useState({
    currentEmail: "",
    newEmail: "",
  });

  const [deleteAccountFormState, setDeleteAccountFormState] = useState({
    currentPassword: "",
  })

  const handleUpdatePassword = async (data) => {
    setLoading(true);

    let postData = {
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    };

    const response = await api.put(`api/users/updatePassword/${id}`, postData);

    if (response.data === 200) {
      setPasswordFormState(response.data);
      setNotificationMessage({
        message: "Password successfully updated.",
        type: "success"
      });
      setLoading(false);
    } else {
      setNotificationMessage({
        message: "An error occurred trying to update your password.",
        type: "error"
      });
      setLoading(false);
    }
  };

  const handleUpdateEmail = async (data) => {
    setLoading(true);

    let postData = {
      currentEmail: data.currentEmail,
      newEmail: data.newEmail,
    };

    const response = await api.put(`api/users/updateEmail/${id}`, postData);

    if (response.data === 200) {
      setEmailFormState(response.data);
      setNotificationMessage({
        message: "Email successfully updated.",
        type: "success"
      });
      setLoading(false);
    } else {
      setNotificationMessage({
        message: "An error occurred trying to update your email.",
        type: "error"
      });
      setLoading(false);
    }
  };

  const handleDeleteAccount = async (data) => {
    setLoading(true);

    let postData = {
      currentPassword: data.currentPassword,
    };

    const response = await api.delete(`api/users/deleteAccount/${id}`, postData);

    if (response.data === 200) {
      setDeleteAccountFormState(response.data);
      setNotificationMessage({
        message: "Account successfully deleted.",
        type: "success"
      });
      router.push('/');
      setLoading(false);
    } else {
      setNotificationMessage({
        message: "An error occurred trying to delete your account.",
        type: "error"
      });
      setLoading(false);
    }
  }

  let value = {
    loading,
    passwordFormState,
    emailFormState,
    deleteAccountFormState,
    handleUpdatePassword,
    handleUpdateEmail,
    handleDeleteAccount
  };

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};
