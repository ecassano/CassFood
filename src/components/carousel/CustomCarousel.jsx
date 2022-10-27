import "./carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SlideSingle from "./SlideSingle";

function CarouselXBig({ data }) {
  let slideNumber = [];
  for (let i = 0; i < data.length / 5; i++) {
    slideNumber.push("item");
  }
  return (
    <Carousel
      autoFocus={false}
      emulateTouch={true}
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      centerMode={true}
      centerSlidePercentage={100}
      showThumbs={false}
      selectedItem={0}
    >
      {slideNumber.map((item, index) => {
        return (
          <SlideSingle
            key={index}
            data={data}
            index={index}
            number={5}
            margin={0.5}
          />
        );
      })}
    </Carousel>
  );
}

function CarouselBig({ data }) {
  let slideNumber = [];
  for (let i = 0; i < data.length / 5; i++) {
    slideNumber.push("item");
  }
  return (
    <Carousel
      autoFocus={false}
      emulateTouch={true}
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      centerMode={true}
      centerSlidePercentage={100}
      showThumbs={false}
      selectedItem={0}
    >
      {slideNumber.map((item, index) => {
        return (
          <SlideSingle
            key={index}
            data={data}
            index={index}
            number={4}
            margin={0.5}
          />
        );
      })}
    </Carousel>
  );
}

function CarouselMedium({ data }) {
  let slideNumber = [];
  for (let i = 0; i < data.length / 3; i++) {
    slideNumber.push("item");
  }
  return (
    <Carousel
      autoFocus={false}
      emulateTouch={true}
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      centerMode={true}
      centerSlidePercentage={100}
      showThumbs={false}
      selectedItem={0}
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
    >
      {slideNumber.map((item, index) => {
        return (
          <SlideSingle
            key={index}
            data={data}
            index={index}
            number={3}
            margin={0.6}
          />
        );
      })}
    </Carousel>
  );
}

function CarouselSmall({ data }) {
  let slideNumber = [];
  for (let i = 0; i < data.length / 2; i++) {
    slideNumber.push("item");
  }
  return (
    <Carousel
      autoFocus={false}
      emulateTouch={true}
      showArrows={true}
      showIndicators={false}
      showStatus={false}
      centerMode={true}
      centerSlidePercentage={100}
      showThumbs={false}
      selectedItem={1}
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
    >
      {slideNumber.map((item, index) => {
        return (
          <SlideSingle
            key={index}
            data={data}
            index={index}
            number={2}
            margin={0.3}
          />
        );
      })}
    </Carousel>
  );
}

function CarouselXSmall({ data }) {
  let slideNumber = [];
  for (let i = 0; i < data.length / 1; i++) {
    slideNumber.push("item");
  }
  return (
    <Carousel
      autoFocus={false}
      emulateTouch={true}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      centerMode={true}
      centerSlidePercentage={66}
      showThumbs={false}
      selectedItem={2}
      autoPlay={true}
      interval={5000}
    >
      {slideNumber.map((item, index) => {
        return (
          <SlideSingle
            key={index}
            data={data}
            index={index}
            number={1}
            margin={0}
          />
        );
      })}
    </Carousel>
  );
}

export {
  CarouselXBig,
  CarouselBig,
  CarouselMedium,
  CarouselSmall,
  CarouselXSmall,
};
