

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { src: "purdue-university.png", alt: "University 1" },
  { src: "shanghai-jiao-tong-university.webp", alt: "University 2" },
  // { src: "uc-BurifC2T.webp", alt: "University 3" },
  { src: "princeton-university.webp", alt: "University 4" },

  
  { src: "university-of-milan.webp", alt: "University 5" },

  { src: "university-of-electronic-science-technology-china.webp", alt: "University 6" },




  { src: "sunway-university.webp", alt: "University 7" },
  // { src: "cas-BCQF-O7r.webp", alt: "University 8" },


  { src: "copenhagen-university.webp", alt: "University 9" },

  // { src: "buct-BSj0TvuT.webp", alt: "University 10" },

  { src: "penn-state-university.webp", alt: "University 11" },

  { src: "san-jose-state-university.webp", alt: "University 12" },

  { src: "hochschule-kempten-university-of-applied-sciences.webp", alt: "University 12" },
];

const CompanyCarousel = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1280, // Large screens
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // Laptops
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="my-10 px-4 md:px-10 mb-0">
      <h1
        className="text-center text-2xl md:text-3xl font-bold mb-2"
        style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
      >
        PARTNER INSTITUTIONS & SPONSORS
      </h1>

      <Slider {...settings} className="partner-slider">
        {logos.map((logo, index) => (
          <div key={index} className="px-4 md:px-4 outline-none">
            <div className="flex items-center justify-center h-36 w-48 mx-auto p-4 px-6">
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CompanyCarousel;