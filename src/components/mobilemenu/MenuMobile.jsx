import * as React from "react";
import "./menumobile.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/images/logocass.png";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";

export default function MenuMobile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ position: "relative" }}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={[{ "&:hover": { backgroundColor: "#E0DECA" } }, { minWidth: 0 }]}
      >
        <DehazeIcon
          // fontSize="large"
          sx={{ color: "#a6a29f", fontSize: "clamp(2rem, 2.5vw, 3.5rem)" }}
        />
      </Button>
      <Menu
        id="menu-mobile"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <img id="mobile-logo" src={logo} alt="logo" />
        <Button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "5%",
            right: "2.5%",
            color: "#9EB23B",
          }}
          sx={{ "&:hover": { backgroundColor: "#E0DECA" } }}
        >
          <CloseIcon fontSize="large" />
        </Button>

        <MenuItem
          onClick={handleClose}
          style={{ marginTop: "5%" }}
          sx={{ "&:hover": { backgroundColor: "#E0DECA" } }}
        >
          <Link className="mobile-link" style={{ width: "100%" }}>
            Work With Us
          </Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ "&:hover": { backgroundColor: "#E0DECA" } }}
        >
          <Link className="mobile-link">Restaurant and Marketplace</Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ "&:hover": { backgroundColor: "#E0DECA" } }}
        >
          <Link className="mobile-link">Carreers</Link>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ "&:hover": { backgroundColor: "#E0DECA" } }}
        >
          <Link className="mobile-link">CassFood Card</Link>
        </MenuItem>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            width: "80%",
            margin: ".5rem auto 0 auto",
          }}
        >
          <li id="login-mobile">Login</li>
        </Link>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <li id="register-mobile">Register</li>
        </Link>
      </Menu>
    </div>
  );
}
