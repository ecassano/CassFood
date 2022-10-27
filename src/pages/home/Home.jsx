import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import {
  CarouselXBig,
  CarouselBig,
  CarouselMedium,
  CarouselSmall,
  CarouselXSmall,
} from "../../components/carousel/CustomCarousel";
import "./home.css";
import pizza from "../../assets/images/pizza.png";
import market from "../../assets/images/market.png";
import promo1 from "../../assets/images/promo1.png";
import promo2 from "../../assets/images/promo2.png";
import promo3 from "../../assets/images/promo3.png";
import ilustration1 from "../../assets/images/undraw_on_the_way_re_swjt.svg";
import ilustration2 from "../../assets/images/undraw_online_groceries_a02y.svg";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import Button from "@mui/material/Button";
import AlertDialog from "../../components/Dialog";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import dataRestaurants from "../../assets/data/grests.json";
import dataGrocery from "../../assets/data/ggrocerys.json";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, [dimensions]);

  return (
    <>
      <Header />
      <div className="container">
        <div className="first-section">
          <h1>If it's food we got it</h1>
          <p>What you want we have it. Order from where you are.</p>
          <span className="span-input">
            <button id="icon" style={{ padding: "0 .5rem" }} disabled>
              <LocationOnOutlined
                sx={{
                  color: "#9EB23B",
                  fontSize: "1.2rem",
                }}
              />
            </button>
            <input type="text" placeholder="Where are you?" />
            <Button
              sx={[
                {
                  padding: ".5rem",
                  marginLeft: "1rem",
                  backgroundColor: "#9EB23B",
                  color: "white",
                  width: "10%",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: "clamp(.8rem, 1.2vw, 1.2rem)",
                },
                {
                  "&:hover": {
                    backgroundColor: "#C7D36F",
                  },
                },
              ]}
            >
              Send
            </Button>
          </span>
          <div className="boxes">
            <div className="box">
              <h2>Restaurant</h2>
              <img src={pizza} alt="pizza" />
              <AlertDialog />
            </div>
            <div className="box">
              <h2>Grocery</h2>
              <img src={market} alt="veggies" />
              <AlertDialog />
            </div>
          </div>
        </div>
        <div className="second-section">
          <h3>Greatest restaurants</h3>
          {dimensions > 992 ? (
            <CarouselXBig data={dataRestaurants} />
          ) : dimensions > 767 ? (
            <CarouselBig data={dataRestaurants} />
          ) : dimensions > 582 ? (
            <CarouselMedium data={dataRestaurants} />
          ) : dimensions > 475 ? (
            <CarouselSmall data={dataRestaurants} />
          ) : (
            <CarouselXSmall data={dataRestaurants} />
          )}

          <div className="promo-banners">
            {dimensions > 992 ? (
              <>
                <div
                  className="promo-banner-single"
                  style={{ backgroundImage: `url(${promo1})` }}
                ></div>
                <div
                  className="promo-banner-single"
                  style={{ backgroundImage: `url(${promo2})` }}
                ></div>
                <div
                  className="promo-banner-single"
                  style={{ backgroundImage: `url(${promo3})` }}
                ></div>
              </>
            ) : (
              <Carousel
                centerMode={true}
                centerSlidePercentage={66}
                emulateTouch={true}
                renderIndicator={false}
                selectedItem={1}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
              >
                <div
                  className="promo-banner-single"
                  style={{ backgroundImage: `url(${promo1})` }}
                ></div>
                <div
                  className="promo-banner-single"
                  style={{ backgroundImage: `url(${promo2})` }}
                ></div>
                <div
                  className="promo-banner-single"
                  style={{ backgroundImage: `url(${promo3})` }}
                ></div>
              </Carousel>
            )}
          </div>
        </div>

        <div className="third-section">
          <h3>Greatest grocery stores</h3>
          {dimensions > 992 ? (
            <CarouselXBig data={dataGrocery} />
          ) : dimensions > 767 ? (
            <CarouselBig data={dataGrocery} />
          ) : dimensions > 582 ? (
            <CarouselMedium data={dataGrocery} />
          ) : dimensions > 475 ? (
            <CarouselSmall data={dataGrocery} />
          ) : (
            <CarouselXSmall data={dataGrocery} />
          )}
          <div className="work-ilustrations">
            <div className="work-ilustrations-single">
              <h3>Want to make deliveries with CassFood?</h3>
              <p>Register and start as soon as possible.</p>
              <img src={ilustration1} alt="Ilustration of delivery" />
              <Button
                variant="contained"
                sx={[
                  { backgroundColor: "#9EB23B" },
                  { "&:hover": { backgroundColor: "#C7D36F" } },
                ]}
              >
                More
              </Button>
            </div>
            <div className="work-ilustrations-single">
              <h3>Come grow your business with CassFood</h3>
              <p>Register your restaurant or grocery shop.</p>
              <img src={ilustration2} alt="Ilustration of Business making" />
              <Button
                variant="contained"
                sx={[
                  { backgroundColor: "#9EB23B" },
                  { "&:hover": { backgroundColor: "#C7D36F" } },
                ]}
              >
                More
              </Button>
            </div>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
