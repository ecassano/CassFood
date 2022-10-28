import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import dataRests from "./assets/data/grests.json";

const Home = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/home/Home"));
  });
});
const Login = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/login/Login"));
  });
});
const Register = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/register/Register"));
  });
});
const Cart = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/cart/Cart"));
  });
});
const Checkout = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/checkout/Checkout"));
  });
});
const Restaurant = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/restaurant/Restaurant"));
  });
});
const NotFound = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/notfound/NotFound"));
  });
});

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <CircularProgress
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#9EB23B",
            }}
          />
        }
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="*" element={<NotFound />} />
          <Route
            exact
            path="/cassfoodwendys"
            element={<Restaurant data={dataRests[0]} />}
          />
          <Route
            exact
            path="/cassfoodthecapitalgrille"
            element={<Restaurant data={dataRests[1]} />}
          />
          <Route
            exact
            path="/cassfoodmortons"
            element={<Restaurant data={dataRests[2]} />}
          />
          <Route
            exact
            path="/cassfoodpalm"
            element={<Restaurant data={dataRests[3]} />}
          />
          <Route
            exact
            path="cassfoodmaggianos"
            element={<Restaurant data={dataRests[4]} />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
