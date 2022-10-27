import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import logo from "../../assets/images/logocass.png";
import MenuMobile from "../../components/mobilemenu/MenuMobile";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    border: `2px solid #9EB23B`,
    backgroundColor: "#9EB23B",
    color: "white",
  },
}));

export default function Header() {
  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, [dimensions]);

  let logged = window.localStorage.getItem("logged");

  return (
    <header>
      <div className="container">
        <div className="menu">
          <div className="menu-left">
            {dimensions > 992 ? (
              <>
                <img src={logo} alt="logo" />
                <ul>
                  <li>Work With Us</li>
                  <li>Restaurant and Marketplace</li>
                  <li>Carreers</li>
                  <li>CassFood Card</li>
                </ul>
              </>
            ) : (
              <>
                <MenuMobile />
                <img src={logo} alt="logo" />
              </>
            )}
          </div>
          {logged === "true" ? (
            <div className="menu-right">
              <h2>
                Hi, Mr.{" "}
                {window.localStorage
                  .getItem("name")
                  .substring(localStorage.getItem("name").lastIndexOf(" "))}
              </h2>
              <IconButton
                sx={[
                  { marginLeft: "5px", minWidth: 0, color: "transparent" },
                  {
                    "&:hover": { backgroundColor: "transparent" },
                  },
                ]}
              >
                <StyledBadge
                  badgeContent={
                    window.localStorage.getItem("cartItems")
                      ? parseInt(window.localStorage.getItem("cartItems"))
                      : 0
                  }
                >
                  <ShoppingCartIcon
                    sx={{
                      fontSize: "clamp(1.5rem, 2vw, 1.7rem)",
                      color: "#717171",
                    }}
                    onClick={() => {
                      window.location.href = "/cart";
                    }}
                  />
                </StyledBadge>
              </IconButton>
              <IconButton
                sx={[
                  { marginLeft: "5px", minWidth: 0, color: "transparent" },
                  { "&:hover": { backgroundColor: "transparent" } },
                ]}
                onClick={() => {
                  localStorage.setItem("logged", false);
                  window.location.reload();
                }}
              >
                <LogoutIcon
                  sx={{
                    fontSize: "clamp(1.5rem, 2vw, 1.7rem)",
                    color: "#717171",
                  }}
                />
              </IconButton>
            </div>
          ) : (
            <div className="menu-right">
              <ul>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <li id="register">Register</li>
                </Link>
                <Link
                  to="login"
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                >
                  <li id="login">Login</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
