import "./register.css";
import logo from "../../assets/images/logocass.png";
import ilustrationRegister from "../../assets/images/undraw_eating_together_re_ux62.svg";
import { Link } from "react-router-dom";
import {
  Grid,
  TextField,
  Button,
  Stack,
  InputAdornment,
  OutlinedInput,
  IconButton,
  FormControl,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#9EB23B",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#9EB23B",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#9EB23B",
    },
  },
});

var userEmail;
var userPassword;
var userName;
var userPhone;

function setName(name) {
  userName = name;
}

function setEmail(email) {
  userEmail = email;
}

function setPhone(phone) {
  userPhone = phone;
}

function setPassword(password) {
  userPassword = password;
}

function register() {
  window.localStorage.setItem("name", userName);
  window.localStorage.setItem("e-mail", userEmail);
  window.localStorage.setItem("phone", userPhone);
  window.localStorage.setItem("password", userPassword);
  window.localStorage.setItem("logged", true);
  window.location.href = "/";
}

export default function Register() {
  const [visibility, setVisibility] = useState(false);

  const visibilityToggle = () => {
    setVisibility(!visibility);
  };

  const [name, setStateName] = useState("");
  const [email, setStateEmail] = useState("");
  const [phone, setStatePhone] = useState("");
  const [password, setStatePassword] = useState("");
  const [passwordConfirm, setStatePasswordConfirm] = useState("");

  return (
    <Grid container spacing={2} style={{ height: "100vh" }}>
      <Link
        to="/"
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "auto",
        }}
      >
        <img id="logo-register" src={logo} alt="Logo" />
      </Link>
      <Grid
        className="leftSide"
        item={true}
        xs={0}
        md={6}
        lg={7}
        sx={{ padding: "0 10px" }}
      >
        <Stack>
          <img
            id="ilustration-register"
            src={ilustrationRegister}
            alt="Ilustration"
          />
        </Stack>
      </Grid>
      <Grid item={true} xs={12} md={6} lg={5}>
        <Stack
          spacing={2}
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            padding: "0 30px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.1rem, 2vw, 4rem)",
              textAlign: "center",
              margin: "2.5% 0 0 0",
              color: "#414143",
            }}
          >
            Just one more step to satisfy your hunger!
          </h1>
          <h2
            style={{
              fontSize: "clamp(.8rem, 1.2vw, 1.5rem)",
              color: "#717171",
              margin: "10px 0 10px 0",
            }}
          >
            Register to continue
          </h2>
          <Grid container xs={12} rowSpacing={2}>
            <Grid item={true} xs={12}>
              <CssTextField
                fullWidth
                label="Full Name"
                type="text"
                variant="outlined"
                size="small"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setStateName(e.target.value);
                }}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <CssTextField
                fullWidth
                label="E-mail"
                type="email"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStateEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <CssTextField
                fullWidth
                label="Phone Number"
                type="tel"
                variant="outlined"
                size="small"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setStatePhone(e.target.value);
                }}
              />
            </Grid>
            <Grid item={true} xs={12}>
              <FormControl
                sx={[
                  { width: "100%" },
                  {
                    "& label.Mui-focused": {
                      color: "#9EB23B",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#9EB23B",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#9EB23B",
                      },
                    },
                  },
                ]}
                size="small"
              >
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  label="Password"
                  type={visibility ? "text" : "password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setStatePassword(e.target.value);
                  }}
                  value={password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Clique para exibir"
                        onClick={visibilityToggle}
                      >
                        {visibility ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid item={true} xs={12}>
              <CssTextField
                className="TextField"
                fullWidth
                label="Confirm Password"
                onChange={(e) => {
                  setStatePasswordConfirm(e.target.value);
                }}
                value={passwordConfirm}
                type={visibility ? "text" : "password"}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item={true} xs={12}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => {
                  register();
                  setStateName("");
                  setStateEmail("");
                  setStatePhone("");
                  setStatePassword("");
                  setStatePasswordConfirm("");
                }}
                sx={[
                  {
                    backgroundColor: "#9EB23B",
                    textTransform: "capitalize",
                    fontSize: "1rem",
                  },
                  { "&:hover": { backgroundColor: "#C7D36F" } },
                ]}
              >
                Register
              </Button>
            </Grid>
            <Link
              style={{
                textAlign: "center",
                display: "block",
                width: "100%",
                textDecoration: "none",
                color: "#9EB23B",
                fontSize: "1rem",
                marginTop: "5px",
              }}
              to="/login"
            >
              Already registered? Login
            </Link>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}
