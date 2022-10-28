import React from "react";
import "./cart.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import { verifyLogin } from "../../auth/auth";
import { useState, useEffect } from "react";
import { TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

function CartItem({ i, product, img, price, qtd, setUpdate }) {
  const [updateNumber, setUpdateNumber] = useState(0);
  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, [dimensions]);

  const [counter, setCounter] = useState(qtd);

  // if (counter > 0) {
  return (
    <TableRow className="table-rows" sx={{ overflowX: "auto" }}>
      <TableCell sx={{ minWidth: "200px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "clamp(.8rem ,1vw, 1rem)",
          }}
        >
          <img src={img} alt={product} />
          {dimensions > 794
            ? product.length > 34
              ? `${product.substring(0, 34)}...`
              : product
            : product.length > 20
            ? `${product.substring(0, 20)}...`
            : product}
        </div>
      </TableCell>
      <TableCell sx={{ fontSize: "clamp(.8rem, 1vw, 2rem)", minWidth: "50px" }}>
        $ {price}
      </TableCell>
      <TableCell sx={{ minWidth: "80px" }}>
        <Button
          disabled={counter < 2 ? true : false}
          sx={
            counter < 2
              ? {
                  minWidth: 0,
                  color: "transparent",
                  backgroundColor: "#C7D36F",
                  padding: "0 5px",
                  marginRight: "10px",
                  borderRadius: "50px",
                }
              : [
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
                ]
          }
          onClick={() => {
            setUpdateNumber(updateNumber - 1);
            setCounter(counter - 1);
            localStorage.setItem(
              "cartItems",
              parseInt(localStorage.getItem("cartItems")) - 1
            );
            let currentCart = JSON.parse(localStorage.getItem("currentCart"));
            currentCart[i].qtd--;
            localStorage.setItem("currentCart", JSON.stringify(currentCart));
            // window.location.reload();
            setUpdate(updateNumber);
          }}
        >
          <RemoveIcon
            sx={{ color: "white", fontSize: "clamp(1rem, 1.5vw, 2rem)" }}
          />
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
            setUpdateNumber(updateNumber + 1);
            setCounter(counter + 1);
            localStorage.setItem(
              "cartItems",
              parseInt(localStorage.getItem("cartItems")) + 1
            );
            let currentCart = JSON.parse(localStorage.getItem("currentCart"));
            currentCart[i].qtd++;
            localStorage.setItem("currentCart", JSON.stringify(currentCart));
            setUpdate(updateNumber);
          }}
        >
          <AddIcon
            sx={{ color: "white", fontSize: "clamp(1rem, 1.5vw, 2rem)" }}
          />
        </Button>
      </TableCell>
      <TableCell sx={{ fontSize: "clamp(.8rem, 1vw, 2rem)", minWidth: "50px" }}>
        $ {(price * counter).toFixed(2)}
      </TableCell>
      <TableCell>
        <Button
          sx={[
            { color: "transparent", minWidth: 0 },
            { "&:hover": { backgroundColor: "transparent" } },
            { "&:active": { backgroundColor: "transparent" } },
          ]}
          onClick={() => {
            setUpdateNumber(updateNumber * 2);
            let newCart = JSON.parse(localStorage.getItem("currentCart"));
            newCart.splice(i, 1);
            localStorage.setItem("currentCart", JSON.stringify(newCart));
            localStorage.setItem(
              "cartItems",
              parseInt(localStorage.getItem("cartItems") - qtd)
            );
            setUpdate(updateNumber * 2);
          }}
        >
          <ClearIcon
            sx={{ color: "#9EB23B", fontSize: "clamp(1rem, 1.5vw, 2rem)" }}
          />
        </Button>
      </TableCell>
    </TableRow>
  );
}
// }

export default function Cart() {
  let currentCart = JSON.parse(localStorage.getItem("currentCart"));

  const [update, setUpdate] = useState("");

  useEffect(() => {
    verifyLogin();
  }, []);

  return (
    <>
      <Header />
      <ul
        id="links-cart"
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
          sx={{
            fontSize: "clamp(.8rem ,1.2vw, 2rem)",
            color: "#717171",
            margin: "0 5px",
          }}
        />
        <Link
          to="/cart"
          style={{
            textDecoration: "none",
            color: "#3e3e3e",
            fontWeight: "bold",
          }}
        >
          <li className="header-links" style={{ listStyle: "none" }}>
            Review Cart
          </li>
        </Link>
        <ArrowForwardIosIcon
          sx={{
            fontSize: "clamp(.8rem ,1.2vw, 2rem)",
            color: "#717171",
            margin: "0 5px",
          }}
        />
        <Link
          to="/checkout"
          style={{
            textDecoration: "none",
            color: "#717171",
          }}
        >
          <li className="header-links" style={{ listStyle: "none" }}>
            Checkout
          </li>
        </Link>
      </ul>
      <div className="cart-container">
        <div className="products-table">
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: "#9EB23B" }}>
                <TableRow>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Product
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Price
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Quantity
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Total
                  </TableCell>
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
                      setUpdate={(update) => setUpdate(update)}
                    />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="order-section">
          <div className="order-summary">
            <h4>Order Summary</h4>
            <div className="order-info">
              <div className="order-info-single">
                <span style={{ color: "#717171" }}>Subtotal</span>
                <span>
                  <h4 style={{ display: "none" }}>{update}</h4>$
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
