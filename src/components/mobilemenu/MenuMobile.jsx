import * as React from "react";
import "./menumobile.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import logo from "../../assets/images/logocassreversed.png";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function MenuMobile() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ fontFamily: "Lato" }}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickOpen}
        sx={[{ "&:hover": { backgroundColor: "#E0DECA" } }, { minWidth: 0 }]}
      >
        <DehazeIcon
          sx={{ color: "#a6a29f", fontSize: "clamp(2rem, 2.5vw, 3.5rem)" }}
        />
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#9EB23B" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <img id="mobile-logo" src={logo} alt="logo" />
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText
              primary="Work With Us"
              sx={{ color: "#3e3e3e", fontSize: "rem" }}
            />
          </ListItem>
          <Divider sx={{ color: "#E0DECA" }} />
          <ListItem button>
            <ListItemText
              primary="Restaurant and Marketplace"
              sx={{ color: "#3e3e3e" }}
            />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Carreers" sx={{ color: "#3e3e3e" }} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="CassFood Card" sx={{ color: "#3e3e3e" }} />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Link
              id="login-mobile"
              to="/login"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                width: "100%",
                margin: "0 auto",
              }}
            >
              Login
            </Link>
          </ListItem>
          <ListItem>
            <Link
              id="register-mobile"
              to="/register"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                width: "100%",
                margin: "0 auto",
              }}
            >
              Register
            </Link>
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
