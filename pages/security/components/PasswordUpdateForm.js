import React, { useContext } from 'react'

// Context
import { SecurityContext } from "@/pages/security/contexts/SecurityContext";

// Mui
import Stack from "@mui/material/Stack";

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Components
import Button from "@/common/components/Button";
import InputField from "@/common/components/InputField";

// Utils
import { ValidationMessages } from "@/common/utils/constants";

const PasswordUpdateForm = () => {

    const { handleUpdatePassword } = useContext(SecurityContext)

    const { handleSubmit, control } = useForm({
        defaultValues: {
            current_password: '',
            new_password: '',
        }
    });

    const onSubmit = handleSubmit((data) => {
        handleUpdatePassword(data);
    })

    return (
        <Stack component="form" noValidate onSubmit={onSubmit} spacing={2}>
            <Controller
                name="current_password"
                control={control}
                rules={{
                    required: ValidationMessages.required,
                }}
                render={({ field, fieldState: { error } }) => (
                    <InputField
                        {...field}
                        label="Current Password"
                        error={error}
                    />
                )}
            />
            <Controller
                name="new_password"
                control={control}
                rules={{
                    required: ValidationMessages.required,
                }}
                render={({ field, fieldState: { error } }) => (
                    <InputField
                        {...field}
                        label="New Password"
                        error={error}
                    />
                )}
            />
            <Button type="submit">Update</Button>
        </Stack>
    )
}

export default PasswordUpdateForm