import React from "react";
import "./cart.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import { verifyLogin } from "../../auth/auth";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CartItem({ i, product, img, price, qtd }) {
  const [counter, setCounter] = useState(qtd);

  if (counter > 0) {
    return (
      <TableRow className="table-rows">
        <TableCell>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={img}
              alt={product}
              style={{ marginRight: "10px", height: "50px", width: "70px" }}
            />
            {product}
          </div>
        </TableCell>
        <TableCell>$ {price}</TableCell>
        <TableCell>
          <Button
            sx={[
              {
                minWidth: 0,
                color: "transparent",
                backgroundColor: "#9EB23B",
                padding: "0 5px",
                marginRight: "10px",
                borderRadius: "50px",
              },
              {
                "&:hover": {
                  backgroundColor: "#C7D36F",
                },
              },
              { "&:active": { backgroundColor: "#C7D36F" } },
            ]}
            onClick={() => {
              setCounter(counter - 1);
              localStorage.setItem(
                "cartItems",
                parseInt(localStorage.getItem("cartItems")) - 1
              );
              let currentCart = JSON.parse(localStorage.getItem("currentCart"));
              currentCart[i].qtd--;
              localStorage.setItem("currentCart", JSON.stringify(currentCart));
              window.location.reload();
            }}
          >
            <RemoveIcon sx={{ color: "white" }} />
          </Button>
          {counter}
          <Button
            sx={[
              {
                minWidth: 0,
                color: "transparent",
                backgroundColor: "#9EB23B",
                padding: "0 5px",
                marginLeft: "10px",
                borderRadius: "50px",
              },
              {
                "&:hover": {
                  backgroundColor: "#C7D36F",
                },
              },
              { "&:active": { backgroundColor: "#C7D36F" } },
            ]}
            onClick={() => {
              setCounter(counter + 1);
              localStorage.setItem(
                "cartItems",
                parseInt(localStorage.getItem("cartItems")) + 1
              );
              let currentCart = JSON.parse(localStorage.getItem("currentCart"));
              currentCart[i].qtd++;
              localStorage.setItem("currentCart", JSON.stringify(currentCart));
              window.location.reload();
            }}
          >
            <AddIcon sx={{ color: "white" }} />
          </Button>
        </TableCell>
        <TableCell>$ {price * counter}</TableCell>
        <TableCell>
          <Button
            sx={[
              { color: "transparent", minWidth: 0 },
              { "&:hover": { backgroundColor: "transparent" } },
              { "&:active": { backgroundColor: "transparent" } },
            ]}
            onClick={() => {
              let newCart = JSON.parse(localStorage.getItem("currentCart"));
              newCart.splice(i, 1);
              localStorage.setItem("currentCart", JSON.stringify(newCart));
              localStorage.setItem(
                "cartItems",
                parseInt(localStorage.getItem("cartItems") - qtd)
              );
              window.location.reload();
            }}
          >
            <ClearIcon sx={{ color: "#9EB23B" }} />
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default function Cart() {
  let currentCart = JSON.parse(localStorage.getItem("currentCart"));

  useEffect(() => {
    verifyLogin();
  }, []);

  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="products-table">
          <Table sx={{ margin: "10rem 0 5rem 0" }}>
            <TableHead sx={{ backgroundColor: "#9EB23B" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Product</TableCell>
                <TableCell sx={{ color: "white" }}>Price</TableCell>
                <TableCell sx={{ color: "white" }}>Quantity</TableCell>
                <TableCell sx={{ color: "white" }}>Total</TableCell>
                <TableCell>
                  <Button
                    sx={[
                      { color: "transparent", minWidth: 0 },
                      { "&:hover": { backgroundColor: "transparent" } },
                      { "&:active": { backgroundColor: "transparent" } },
                    ]}
                    onClick={() => {
                      localStorage.setItem("cartItems", 0);
                      let newCart = JSON.parse(
                        localStorage.getItem("currentCart")
                      );
                      newCart.splice(0, newCart.length);
                      localStorage.setItem(
                        "currentCart",
                        JSON.stringify(newCart)
                      );
                      window.location.reload();
                    }}
                  >
                    <ClearIcon sx={{ color: "white" }} />
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentCart.map((product, key) => {
                return (
                  <CartItem
                    key={key}
                    i={key}
                    product={product.product}
                    img={product.img}
                    price={
                      product.promo
                        ? parseFloat(product.promo).toFixed(2)
                        : parseFloat(product.price).toFixed(2)
                    }
                    qtd={parseFloat(product.qtd)}
                  />
                );
              })}
            </TableBody>
          </Table>
        </div>
        <div className="order-section">
          <div className="order-summary">
            <h4>Order Summary</h4>
            <div className="order-info">
              <div className="order-info-single">
                <span style={{ color: "#717171" }}>Subtotal</span>
                <span>
                  $
                  {currentCart
                    .reduce((subtotal, value) => {
                      return subtotal + parseFloat(value.price * value.qtd);
                    }, 0)
                    .toFixed(2)}
                </span>
              </div>
              <div className="order-info-single">
                <span style={{ color: "#717171" }}>Descount</span>
                <span style={{ textDecoration: "line-through" }}>
                  $
                  {currentCart
                    .reduce((descount, value) => {
                      if (value.promo) {
                        return (
                          descount + (value.price - value.promo) * value.qtd
                        );
                      } else {
                        return descount + 0;
                      }
                    }, 0)
                    .toFixed(2)}
                </span>
              </div>
              <div className="order-info-single">
                <span style={{ color: "#717171" }}>Delivery</span>
                <span>Free</span>
              </div>
            </div>
            <div className="order-total">
              <span style={{ color: "#3e3e3e" }}>Total</span>
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
            onClick={() => {
              window.location.href = "/checkout";
            }}
          >
            Checkout
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}
