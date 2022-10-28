import * as React from "react";
import "./checkout.css";
import logo from "../../assets/images/logocass.png";
import cvv from "../../assets/images/cvvexplained.png";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Stack,
  InputAdornment,
  OutlinedInput,
  IconButton,
  FormControl,
  InputLabel,
  Popover,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    border: `2px solid #9EB23B`,
    backgroundColor: "#9EB23B",
    color: "white",
  },
}));

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

export default function Checkout() {
  let currentCart = JSON.parse(localStorage.getItem("currentCart"));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>
          <img src={cvv} alt="CVV Explained" style={{ width: "40px" }} />
        </Typography>
      </Popover>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <section className="checkout-header">
          <div className="checkout-header-single">
            <p>Delivering to US</p>
            <p>Store Location: Orlando, FL</p>
          </div>
          <div
            className="checkout-header-single"
            style={{ textAlign: "center" }}
          >
            <div style={{ margin: "0 auto" }}>
              <img src={logo} alt="CassFood Logo" />
            </div>
            <ul
              style={{
                padding: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#717171" }}>
                <li className="header-links" style={{ listStyle: "none" }}>
                  Back to shop
                </li>
              </Link>
              <ArrowForwardIosIcon
                sx={{ fontSize: "1rem", color: "#717171", margin: "0 5px" }}
              />
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "#717171" }}
              >
                <li className="header-links" style={{ listStyle: "none" }}>
                  Review Cart
                </li>
              </Link>
              <ArrowForwardIosIcon
                sx={{ fontSize: "1rem", color: "#717171", margin: "0 5px" }}
              />
              <Link
                to="/checkout"
                style={{
                  textDecoration: "none",
                  color: "#3e3e3e",
                  fontWeight: "bold",
                }}
              >
                <li className="header-links" style={{ listStyle: "none" }}>
                  Checkout
                </li>
              </Link>
            </ul>
          </div>
          <div
            className="checkout-header-single"
            style={{ textAlign: "right" }}
          >
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
          </div>
        </section>
        <section className="checkout-order">
          <div className="checkout-payment-info">
            <h1>Checkout</h1>
            <div className="delivery-details">
              <h3>Delivery details</h3>
              <ul>
                <li>{localStorage.getItem("name")}</li>
                <li>{localStorage.getItem("e-mail")}</li>
                <li>{localStorage.getItem("phone")}</li>
                <li>8800 Vistana Centre Dr, Orlando, FL 32821, US</li>
              </ul>
            </div>
            <div className="payment-details">
              <h3>Payment Details</h3>
              <Stack spacing={2}>
                <CssTextField
                  fullWidth
                  label="Name on card"
                  type="text"
                  variant="outlined"
                  size="small"
                />
                <CssTextField
                  fullWidth
                  label="Card number"
                  type="text"
                  variant="outlined"
                  size="small"
                />
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 2, sm: 1 }}
                >
                  <CssTextField
                    fullWidth
                    label="Valid through"
                    type="text"
                    variant="outlined"
                    size="small"
                  />
                  <FormControl
                    size="small"
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
                  >
                    <InputLabel>CVV code</InputLabel>
                    <OutlinedInput
                      fullWidth
                      label="CVC code"
                      type="text"
                      endAdornment={
                        <InputAdornment position="end">
                          <InfoIcon
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                          />
                        </InputAdornment>
                      }
                      variant="outlined"
                    />
                  </FormControl>
                </Stack>
                <Button
                  sx={[
                    {
                      color: "white",
                      backgroundColor: "#9EB23B",
                      width: "100%",
                      margin: "5px auto",
                    },
                    { "&:hover": { backgroundColor: "#C7D36F" } },
                  ]}
                  id="button-checkout-desktop"
                >
                  order
                </Button>
              </Stack>
            </div>
          </div>
          <div className="checkout-order-info">
            <h1>Checkout</h1>
            <h3>Your Order</h3>
            <Table sx={{ marginBottom: "30px" }}>
              <TableBody>
                {currentCart.map((cartItem, key) => {
                  return (
                    <TableRow key={key}>
                      <TableCell sx={{ padding: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src={cartItem.img}
                            alt={cartItem.product}
                            style={{
                              marginRight: "10px",
                              height: "clamp(40px, 9vh, 60px)",
                              width: "clamp(50px, 5vw, 80px)",
                            }}
                          />
                          <h4
                            style={{
                              fontWeight: "normal",
                              color: "#3e3e3e",
                              fontSize: "clamp(.8rem ,1vw, 1.2rem)",
                            }}
                          >
                            {cartItem.product}
                          </h4>
                        </div>
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#3e3e3e",
                          fontSize: "clamp(.9rem ,1.1vw, 1.5rem)",
                          padding: "10px",
                        }}
                      >
                        {cartItem.qtd}
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "right",
                          padding: "10px",
                        }}
                      >
                        {cartItem.promo ? (
                          <div className="product-price">
                            <h4
                              id="promo-price"
                              style={{
                                fontSize: "clamp(.9rem ,1.1vw, 1.5rem)",
                              }}
                            >
                              ${cartItem.promo}
                            </h4>
                            <h5 id="scratched-price">${cartItem.price}</h5>
                          </div>
                        ) : (
                          <h4
                            style={{
                              color: "#3e3e3e",
                              fontSize: "clamp(.9rem ,1.1vw, 1.5rem)",
                            }}
                          >
                            ${cartItem.price}
                          </h4>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <div className="checkout-order-info-total">
              <div
                className="checkout-order-info-total-single"
                style={{ fontSize: "clamp(.9rem, 1.1vw, 1.5rem)" }}
              >
                <span>Subtotal</span>
                <span style={{ textDecoration: "line-through" }}>
                  $
                  {currentCart
                    .reduce((subtotal, value) => {
                      return subtotal + parseFloat(value.price * value.qtd);
                    }, 0)
                    .toFixed(2)}
                </span>
              </div>
              <div
                className="checkout-order-info-total-single"
                style={{ fontSize: "clamp(.9rem, 1.1vw, 1.5rem)" }}
              >
                <span>Delivery</span>
                <span>Free</span>
              </div>
              <div
                className="checkout-order-info-total-single"
                style={{ fontSize: "clamp(1rem, 1.2vw, 1.6rem)" }}
              >
                <span>Total</span>
                <span>
                  $
                  {currentCart
                    .reduce((total, value) => {
                      if (value.promo) {
                        return total + parseFloat(value.promo * value.qtd);
                      } else {
                        return total + parseFloat(value.price * value.qtd);
                      }
                    }, 0)
                    .toFixed(2)}
                </span>
              </div>
            </div>
            <Button
              sx={[
                {
                  color: "white",
                  backgroundColor: "#9EB23B",
                  width: "100%",
                  margin: "5px auto",
                },
                { "&:hover": { backgroundColor: "#C7D36F" } },
              ]}
              id="button-checkout-mobile"
            >
              order
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
