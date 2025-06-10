import React from "react";
import Slider from "react-slick";
import "./CarrouselSection.css";

import carousel1 from "./assets/images/carousel1.jpg";
import carousel2 from "./assets/images/carousel2.jpg";
import carousel3 from "./assets/images/carousel3.jpg";

const slides = [
  { id: 1, src: carousel1, alt: "Imagem 1" },
  { id: 2, src: carousel2, alt: "Imagem 2" },
  { id: 3, src: carousel3, alt: "Imagem 3" },
];

const CarrouselSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    customPaging: i => (
      <img
        src={slides[i].src}
        alt={`Thumbnail ${i + 1}`}
        style={{ borderRadius: "10px", width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
  };

  return (
    <section className="carrousel-section">
      <Slider {...settings}>
        {slides.map(({ id, src, alt }) => (
          <div key={id}>
            <img src={src} alt={alt} className="main-slide" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CarrouselSection;
