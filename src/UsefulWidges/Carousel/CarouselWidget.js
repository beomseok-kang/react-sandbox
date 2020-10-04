import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imgs = [
  {
    url:
      "http://www.landmarkmlp.com/js-plugin/owl.carousel/demos/assets/owl1.jpg",
    legend: "Owl 1",
  },
  {
    url:
      "http://www.landmarkmlp.com/js-plugin/owl.carousel/demos/assets/owl2.jpg",
    legend: "Owl 2",
  },
  {
    url:
      "http://www.landmarkmlp.com/js-plugin/owl.carousel/demos/assets/owl3.jpg",
    legend: "Owl 3",
  },
];

function CarouselWidget() {
  return (
    <Carousel>
      {imgs.map((item) => (
        <div>
          <img src={item.url} alt={item.legend} />
          <p className="legend">{item.legend}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselWidget;
