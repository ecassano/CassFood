import * as React from "react";
import "./restaurant.css";
import logo from "../../assets/images/logocass.png";
import { useEffect, useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import MenuMobile from "../../components/mobilemenu/MenuMobile";
import VerifiedIcon from "@mui/icons-material/Verified";
import MonetizationOn from "@mui/icons-material/MonetizationOn";
import Star from "@mui/icons-material/Star";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Restaurant({ data }) {
  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, [dimensions]);

  const [open, setOpen] = useState(false);
  const [dishPageTitle, setDishPageTitle] = useState();
  const [dishPageDescription, setDishPageDescription] = useState();
  const [dishPageImg, setDishPageImg] = useState();
  const [dishPagePrice, setDishPagePrice] = useState();
  const [dishPagePromo, setDishPagePromo] = useState();
  const [qtd, setQtd] = useState(1);
  const [cartItems, setCartItems] = useState(
    window.localStorage.getItem("cartItems")
      ? parseInt(window.localStorage.getItem("cartItems"))
      : 0
  );
  window.localStorage.setItem("cartItems", cartItems);
  const [currentCart, setCurrentCart] = useState(
    window.localStorage.getItem("currentCart")
      ? JSON.parse(window.localStorage.getItem("currentCart"))
      : []
  );
  window.localStorage.setItem("currentCart", JSON.stringify(currentCart));

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  let logged = window.localStorage.getItem("logged");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuOptions = Object.entries(data.menu);

  return (
    <>
      {/* DishPage */}
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle
            id="responsive-dialog-title"
            sx={{
              backgroundColor: "#9EB23B",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {dishPageTitle}
          </DialogTitle>
          <DialogContent className="dialog-content-dish">
            <img
              className="dishPage-img"
              src={dishPageImg}
              alt={dishPageTitle}
            />
            <div className="dishPage-content">
              <DialogContentText sx={{ color: "#717171", textAlign: "center" }}>
                {dishPageDescription}
              </DialogContentText>
              <div className="dish-product-price">
                <h4>${dishPagePromo ? dishPagePromo : dishPagePrice}</h4>
              </div>
              <div className="product-buttons">
                <Button
                  onClick={() => {
                    setQtd(qtd > 1 ? qtd - 1 : qtd);
                  }}
                  sx={[
                    { color: "#9EB23B" },
                    { "&:hover": { backgroundColor: "transparent" } },
                  ]}
                >
                  <RemoveIcon />
                </Button>
                <h3>{qtd}</h3>
                <Button
                  onClick={() => setQtd(qtd + 1)}
                  sx={[
                    { color: "#9EB23B" },
                    { "&:hover": { backgroundColor: "transparent" } },
                  ]}
                >
                  <AddIcon />
                </Button>
                <Button
                  sx={[
                    {
                      color: "white",
                      backgroundColor: "#9EB23B",
                      minWidth: 0,
                      padding: "10px 10px",
                      textTransform: "capitalize",
                    },
                    { "&:hover": { backgroundColor: "#C7D36F" } },
                  ]}
                  onClick={() => {
                    setCartItems(cartItems + qtd);
                    setCurrentCart([
                      ...currentCart,
                      {
                        product: dishPageTitle,
                        img: dishPageImg,
                        price: dishPagePrice,
                        promo: dishPagePromo,
                        qtd: qtd,
                      },
                    ]);
                    handleClose();
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}
              sx={[
                { color: "#9EB23B", textTransform: "capitalize" },
                { "&:hover": { backgroundColor: "transparent" } },
              ]}
            >
              Leave
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      {/* Restaurant Page */}
      <Header
        menuLeft={
          dimensions > 992 ? (
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
          )
        }
      />
      <div
        className="restaurant-single-banner"
        style={{
          backgroundImage: `url(${data.bannerImage})`,
        }}
      ></div>
      <div className="container">
        <div className="restaurant-single-info">
          <div className="upper">
            <div className="upper-left">
              <div
                className="restaurant-avatar"
                style={{ backgroundImage: `url(${data.logo})` }}
              ></div>
              <h1>{data.name}</h1>
              <VerifiedIcon
                sx={{
                  color: "#9EB23B",
                  marginLeft: "10px",
                  fontSize: "clamp(1.4rem, 2.5vw, 3rem)",
                }}
              />
            </div>
            <div className="upper-right">
              <span>
                <h3>{data.grade}</h3>
                <Star
                  sx={{
                    color: "#e7a74e",
                    fontSize: "clamp(.8rem, 1.5vw, 1.2rem)",
                  }}
                />
              </span>
              |
              <p>
                <MonetizationOn
                  sx={{
                    color: "#a6a6a5",
                    marginRight: "5px",
                    fontSize: "clamp(.8rem, 1.5vw, 1.2rem)",
                  }}
                />{" "}
                Minimum order $ {data.minimumOrder}
              </p>
            </div>
          </div>
          {menuOptions.map((menuOption, key) => {
            let dishes = Object.entries(menuOption[1]);
            return (
              <section className="restaurant-single-menu-category" key={key}>
                <h2 key={key}>{menuOption[0]}</h2>
                <Grid2 container spacing={2} sx={{ marginBottom: "50px" }}>
                  {dishes.map((dish, key) => {
                    let dishInfo = dish[1];
                    return (
                      <Grid2 sm={12} md={6} key={key} flexGrow={1}>
                        <Button
                          key={key}
                          className="button-dishes"
                          sx={[
                            {
                              lineHeight: "normal",
                              textTransform: "none",
                              letterSpacing: "normal",
                              textAlign: "left",
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              border: "1px solid #f2f2f2",
                              boxShadow: "0px 1px 4px rgb(0 0 0 / 5%)",
                              borderRadius: "5px",
                              padding: "15px",
                              color: "transparent",
                            },
                            {
                              "&:hover": {
                                backgroundColor: "transparent",
                                transition: ".3s all",
                                border: "1px solid #bababa",
                              },
                            },
                          ]}
                          onClick={() => {
                            if (logged === "true") {
                              handleClickOpen();
                              setDishPageTitle(dish[0]);
                              setDishPageDescription(dishInfo.description);
                              setDishPageImg(dishInfo.img);
                              setDishPagePrice(dishInfo.price);
                              setDishPagePromo(dishInfo.promoPrice);
                              setQtd(1);
                            } else {
                              alert("To access that you need to be logged in!");
                              window.location.href = "/login";
                            }
                          }}
                        >
                          <div className="item-box-description">
                            <h3>{dish[0]}</h3>
                            <p>
                              {dishInfo.description.length > 50
                                ? `${dishInfo.description.substring(0, 50)}...`
                                : dishInfo.description}
                            </p>
                            <h5>For {dishInfo.serves}</h5>
                            {dishInfo.promoPrice ? (
                              <div className="product-price">
                                <h4 id="promo-price">${dishInfo.promoPrice}</h4>
                                <h5 id="scratched-price">${dishInfo.price}</h5>
                              </div>
                            ) : (
                              <h4>${dishInfo.price}</h4>
                            )}
                          </div>
                          <img
                            className="menu-item-box-img"
                            src={dishInfo.img}
                            alt={dish[0]}
                          />
                        </Button>
                      </Grid2>
                    );
                  })}
                </Grid2>
              </section>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
