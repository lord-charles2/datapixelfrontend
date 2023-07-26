"use client";

// ** React Imports
import { useState, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";

// ** Next Imports

import Link from "next/link";
import dynamic from "next/dynamic";

// ** MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
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

// ** Layout Import

// ** Demo Imports
import FooterIllustrationsV1 from "@/components/FooterIllustration";

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
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  },
}));

const RegisterPage = () => {
  const router = useRouter();

  // ** Hook
  const theme = useTheme();

  // ** States

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [disable, setDisable] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const user = {
    firstname,
    lastname,
    mobile,
    password: values.password,
    email,
    isAdmin: true,
  };
  const notify = (error) => toast.error(error);

  const handlefirstnameChange = (event) => {
    setfirstname(event.target.value);
  };

  const handlelastnameChange = (event) => {
    setlastname(event.target.value);
  };

  const handlemobileChange = (event) => {
    const value = event.target.value;
    setMobile(value);

    // regular expression to match 10-digit mobile number starting with 0

    const regex = /^0[0-9]{9}$/;

    const isValid = regex.test(value);

    if (!isValid) {
      setMobileError(
        "Invalid mobile number. Please enter a 10-digit number starting with 0."
      );
    } else {
      setMobileError("");
    }
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      firstname.length === 0 ||
      lastname.length === 0 ||
      mobile.length === 0 ||
      email.length === 0 ||
      firstname.length === 0
    ) {
      return notify("Please fill all fields");
    }
    if (emailError.length > 0) {
      return notify(emailError);
    }
    if (mobileError.length > 0) {
      return notify(mobileError);
    }

    const registerUser = async () => {
      try {
        setDisable(true);

        const myPromise = new Promise(async (resolve, reject) => {
          try {
            const response = await axios.post(
              "https://odd-lime-ox-robe.cyclic.app/user/register",
              user
            );
            if (response.status === 200) {
              resolve();

              setDisable(false);
              router.push("/login");
            }
          } catch (error) {
            if (error?.response?.status) {
              setRegisterError("A user with this account already exists🤯");
              reject();
            } else {
              reject();
              setRegisterError("network connection has failed!");
            }
            setDisable(false);
          }
        });
        toast.promise(myPromise, {
          pending: "User registration in progress...",
          success: "Registration completed successfully 👌",
          error: registerError,
        });
      } catch (error) {
        notify(error);
      }
    };
    registerUser();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box className="flex justify-center text-black mt-[140px] bg-gray-100  min-h-[70vh]">
      <Card sx={{ zIndex: 1 }} className="mt-[10px]">
        <CardContent
          sx={{ padding: (theme) => `${theme.spacing(0, 9, 0)} !important` }}
        >
          <Box
            sx={{
              mb: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ToastContainer />
          </Box>
          <Box sx={{ mb: 0 }} className="relative top-[-40px] text-center">
            <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: 2 }}>
              WELCOME TO CLASSICS
            </Typography>
            <Typography variant="body2">Join us today!</Typography>
          </Box>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              autoFocus
              fullWidth
              id="Username"
              label="Username"
              sx={{ marginBottom: 4 }}
              value={firstname}
              onChange={handlefirstnameChange}
              color="success"
            />

            <TextField
              autoFocus
              fullWidth
              type="number"
              id="mobile"
              label="mobile"
              sx={{ marginBottom: 4 }}
              value={mobile}
              onChange={handlemobileChange}
              error={Boolean(mobileError)}
              helperText={mobileError}
              color="success"
            />

            <FormControl fullWidth>
              <InputLabel htmlFor="auth-register-password">Password</InputLabel>
              <OutlinedInput
                label="Password"
                value={values.password}
                id="auth-register-password"
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
                      {values.showPassword ? (
                        <EyeOutline fontSize="small" />
                      ) : (
                        <EyeOffOutline fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Fragment>
                  <span className="text-purple-500">I agree to </span>
                  <Link href="/" passHref>
                    <LinkStyled
                      onClick={(e) => e.preventDefault()}
                      className="text-purple-500"
                    >
                      privacy policy & terms
                    </LinkStyled>
                  </Link>
                </Fragment>
              }
            />
            <Button
              className="text-purple-500"
              color="inherit"
              fullWidth
              size="large"
              type="submit"
              variant="outlined"
              sx={{ marginBottom: 5 }}
              disabled={disable ? true : false}
            >
              Sign up
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
                Already have an account?
              </Typography>
              <Typography variant="body2">
                <Link passHref href="/login">
                  <LinkStyled className="text-purple-500">
                    Sign in instead
                  </LinkStyled>
                </Link>
              </Typography>
            </Box>
            <Divider sx={{ my: 3 }}>or</Divider>
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
      <div className="absolute top-[200px] w-full h-[600px]">
        <FooterIllustrationsV1 />
      </div>
    </Box>
  );
};

export default dynamic(() => Promise.resolve(RegisterPage), {
  ssr: false,
});
