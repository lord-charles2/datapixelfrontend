"use client";

// ** React Imports
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";

// ** Next Imports

import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// ** MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import MuiFormControlLabel from "@mui/material/FormControlLabel";

// ** Icons Imports
import Google from "mdi-material-ui/Google";
import Github from "mdi-material-ui/Github";
import Twitter from "mdi-material-ui/Twitter";
import Facebook from "mdi-material-ui/Facebook";
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";

// ** Configs
// import themeConfig from "src/configs/themeConfig";

// ** Layout Import
// import BlankLayout from "src/@core/layouts/BlankLayout";

// ** Demo Imports
import FooterIllustrationsV1 from "../../components/FooterIllustration";
import { CircularProgress } from "@mui/material";

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
}));

const LinkStyled = styled("a")(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  },
}));

const Login = () => {
  // ** State
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [disable, setDisable] = useState(false);
  const [loginError, setLoginError] = useState("");

  const user = {
    redirect: false,
    password: values.password,
    email,
  };

  // ** Hook

  const theme = useTheme();
  const router = useRouter();
  const notify = (error) => toast.error(error);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    // Email validation using regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(value);

    if (!isValid) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.length === 0 || values.password.length === 0) {
      return notify("Please fill all fields");
    }
    if (emailError.length > 0) {
      return notify(emailError);
    }

    const loginUser = async () => {
      try {
        setDisable(true);

        const response = await axios.post(
          "https://odd-lime-ox-robe.cyclic.app/user/login",
          user
        );
        if (response.status === 200) {
          const { token } = response.data;
          Cookies.set("token", token, { expires: 1 });
          setDisable(false);
          router.push("/account");
        }
      } catch (error) {
        console.log(error);
      }
    };
    loginUser();
  };

  return (
    <Box className="flex justify-center text-center p-3 text-black mt-[140px] mb-3 min-h-[70vh] bg-gray-100">
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{ padding: (theme) => `${theme.spacing(6, 9, 0)} !important` }}
        >
          <ToastContainer />
          <Box
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                lineHeight: 1,
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "1rem !important",
              }}
              className="text-center"
            >
              Welcome back to Classics
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2">
              Please sign-in to your account
            </Typography>
          </Box>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              sx={{ marginBottom: 4 }}
              value={email}
              onChange={handleEmailChange}
              error={Boolean(emailError)}
              helperText={emailError}
              color="success"
            />
            <FormControl fullWidth>
              <InputLabel htmlFor="auth-login-password">Password</InputLabel>
              <OutlinedInput
                label="Password"
                value={values.password}
                id="auth-login-password"
                onChange={handleChange("password")}
                type={values.showPassword ? "text" : "password"}
                color="success"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label="toggle password visibility"
                    >
                      {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              sx={{
                mb: 4,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
              <Link passHref href="/">
                <LinkStyled
                  onClick={(e) => e.preventDefault()}
                  className="text-purple-500"
                >
                  Forgot Password?
                </LinkStyled>
              </Link>
            </Box>
            <Button
              className="text-purple-500"
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ marginBottom: 4 }}
              type="submit"
              disabled={disable ? true : false}
            >
              {disable ? (
                <div className="flex items-center space-x-3 text-purple-600">
                  <CircularProgress color="inherit" size={17} />
                  <p>Please wait...</p>
                </div>
              ) : (
                "Login"
              )}
            </Button>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" sx={{ marginRight: 2 }}>
                New on our platform?
              </Typography>
              <Typography variant="body2">
                <Link passHref href="/register">
                  <LinkStyled className="text-purple-500">
                    Create an account
                  </LinkStyled>
                </Link>
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }}>or</Divider>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link href="/" passHref>
                <IconButton component="a" onClick={(e) => e.preventDefault()}>
                  <Facebook sx={{ color: "#497ce2" }} />
                </IconButton>
              </Link>
              <Link href="/" passHref>
                <IconButton component="a" onClick={(e) => e.preventDefault()}>
                  <Twitter sx={{ color: "#1da1f2" }} />
                </IconButton>
              </Link>
              <Link href="/" passHref>
                <IconButton component="a" onClick={(e) => e.preventDefault()}>
                  <Github
                    sx={{
                      color: (theme) =>
                        theme.palette.mode === "light"
                          ? "#272727"
                          : theme.palette.grey[300],
                    }}
                  />
                </IconButton>
              </Link>
              <Link href="/" passHref>
                <IconButton component="a" onClick={(e) => e.preventDefault()}>
                  <Google sx={{ color: "#db4437" }} />
                </IconButton>
              </Link>
            </Box>
          </form>
        </CardContent>
      </Card>
      <div className="absolute top-[190px] w-full h-[600px]">
        <FooterIllustrationsV1 />
      </div>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(Login), {
  ssr: false,
});
