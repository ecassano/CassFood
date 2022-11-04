import "./login.css";
import logo from "../../assets/images/logocass.png";
import ilustrationLogin from "../../assets/images/undraw_login_re_4vu2.svg";
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

function setEmail(email) {
  userEmail = email;
}

function setPassword(password) {
  userPassword = password;
}

function log() {
  if (
    window.localStorage.getItem("e-mail") === userEmail &&
    window.localStorage.getItem("password") === userPassword
  ) {
    window.localStorage.setItem("logged", true);
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  }
}

export default function Login() {
  const [visibility, setVisibility] = useState(false);

  const visibilityToggle = () => {
    setVisibility(!visibility);
  };

  const [email, setStateEmail] = useState("");
  const [password, setStatePassword] = useState("");

  return (
    <Grid
      className="grid-responsive-login"
      container
      spacing={2}
      style={{
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Link id="logo-link" to="/">
        <img id="logo-login" src={logo} alt="Logo" />
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
            src={ilustrationLogin}
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
            Thank you for you trust
          </h1>
          <h2
            style={{
              fontSize: "clamp(.8rem, 1.2vw, 1.5rem)",
              color: "#717171",
              margin: "10px 0 0 0",
            }}
          >
            Log in to continue
          </h2>
          <Grid container xs={12} rowSpacing={2}>
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setStatePassword(e.target.value);
                  }}
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
              <Button
                fullWidth
                variant="contained"
                sx={[
                  {
                    backgroundColor: "#9EB23B",
                    textTransform: "capitalize",
                    fontSize: "1rem",
                    marginBottom: "10px",
                  },
                  { "&:hover": { backgroundColor: "#C7D36F" } },
                ]}
                onClick={() => {
                  log();
                  setStateEmail("");
                  setStatePassword("");
                }}
              >
                Login
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
              }}
              to="/register"
            >
              Not registered yet? Register
            </Link>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}
