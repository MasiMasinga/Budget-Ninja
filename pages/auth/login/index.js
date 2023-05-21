import React, { useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// Context
import { AuthContext } from "@/common/contexts/AuthContext";

// Mui
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

// Mui Icons
import GoogleIcon from "@mui/icons-material/Google";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Components
import Typography from "@/common/components/Typography";
import Button from "@/common/components/Button";
import InputField from "@/common/components/InputField";

// Utils
import { Colors, ValidationMessages } from "@/common/utils/constants";

const Login = () => {
  const router = useRouter();
  const { formState } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      formState,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    router.push('/dashboard');
  });

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Stack
          sx={{
            bgcolor: Colors.primary,
            width: { xs: "100vw", sm: "50vw" },
            height: "100vh",
          }}
        >
          <Stack>
            <Image src="/logo.svg" alt="logo" width={200} height={120} />
            <Stack
              component="form"
              noValidate
              spacing={3}
              sx={{ px: { xs: 2, sm: 5, md: 10, lg: 20 } }}
              onSubmit={onSubmit}
            >
              <Typography variant="h5" align="center">
                Welcome Back
              </Typography>
              <Typography variant="h6" mb align="center">
                Login your account now
              </Typography>
              <Controller
                name="emailAddress"
                control={control}
                rules={{
                  required: ValidationMessages.required,
                  validate: (value) =>
                    value.includes("@") || ValidationMessages.isValidEmail,
                }}
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    label="Email Address"
                    size="medium"
                    error={error}
                    {...field}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{
                  required: ValidationMessages.required,
                  validate: (value) =>
                    value.length >= 6 || ValidationMessages.passwordTooShort,
                }}
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    label="Password"
                    size="medium"
                    error={error}
                    {...field}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword((show) => !show)}
                            onMouseDown={(event) => event.preventDefault()}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Button type="submit" variant="contained">
                Login
              </Button>
              <Button type="submit" startIcon={<GoogleIcon />}>
                Sign In with Google
              </Button>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                sx={{ mt: 2 }}
              >
                <Typography align="center">Don't have an account?</Typography>
                <Link underline="none" href="/auth/register">
                  Create Account
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            bgcolor: Colors.secondary,
            width: "50vw",
            height: "100vh",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Image
            src="/finance-file.png"
            alt="finance-file"
            width={350}
            height={350}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Login;
