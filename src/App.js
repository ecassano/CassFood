import "./App.css";
import { lazy, Suspense, useEffect, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import dataRests from "./assets/data/grests.json";

const Home = lazy(() => {
  return new Promise((resolve) => {
    resolve(import("./pages/home/Home"));
  });
});
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
// const Catalog = lazy(() => import("./pages/"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Restaurant = lazy(() => import("./pages/restaurant/Restaurant"));
// const NotFound = lazy(() => import("./pages/login"));

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
            }}
            color="success"
          />
        }
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
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
            path="cassfoodmaggianos"
            element={<Restaurant data={dataRests[4]} />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
