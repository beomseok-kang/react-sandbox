import React, { useEffect, useState } from "react";
import Inner from "../Shared/Inner";
import SectionBlock from "../Shared/SectionBlock";
import CarouselWidget from "./Carousel/CarouselWidget";
import CarouselMd from "./Carousel/Carousel.md";

function UsefulWidgetsPage() {
  const [md1, setMd1] = useState("");

  useEffect(() => {
    fetch(CarouselMd)
      .then((data) => data.text())
      .then((text) => {
        setMd1(text);
      });
  });
  return (
    <Inner>
      <SectionBlock md={md1} ExampleComponent={CarouselWidget} />
    </Inner>
  );
}

export default UsefulWidgetsPage;
