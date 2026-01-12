

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



// const logos = [
//   { src: "purdue-university.png", alt: "Purdue University logo - Partner of AIMLR 2026" },
//   { src: "shanghai-jiao-tong-university.webp", alt: "Shanghai Jiao Tong University logo - Partner of AIMLR 2026" },
//   { src: "princeton-university.webp", alt: "Princeton University logo - Partner of AIMLR 2026" },
//   { src: "university-of-milan.webp", alt: "University of Milan logo - Partner of AIMLR 2026" },
//   { src: "university-of-electronic-science-technology-china.webp", alt: "University of Electronic Science and Technology of China logo - Partner of AIMLR 2026" },
//   { src: "copenhagen-university.webp", alt: "University of Copenhagen logo - Partner of AIMLR 2026" },
//   { src: "penn-state-university.webp", alt: "Pennsylvania State University logo - Partner of AIMLR 2026" },
//   { src: "san-jose-state-university.webp", alt: "San José State University logo - Partner of AIMLR 2026" },
//   { src: "hochschule-kempten-university-of-applied-sciences.webp", alt: "Kempten University of Applied Sciences logo" },
// ];


// const CompanyCarousel = () => {
//   const settings = {
//     infinite: true,
//     speed: 3000,
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     arrows: false,
//     pauseOnHover: false,
//     responsive: [
//       {
//         breakpoint: 1280, // Large screens
//         settings: {
//           slidesToShow: 5,
//         },
//       },
//       {
//         breakpoint: 1024, // Laptops
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 768, // Tablets
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 480, // Mobile
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="my-10 px-4 md:px-10 mb-0" aria-label="Partner Institutions">
//       <h2
//         className="text-center text-2xl md:text-3xl font-bold mb-2"
//         style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
//       >
//         PARTNER INSTITUTIONS & SPONSORS
//       </h2>

//       <Slider {...settings} className="partner-slider">
//         {logos.map((logo, index) => (
//           <div key={index} className="px-4 md:px-4 outline-none">
//             <div className="flex items-center justify-center h-36 w-48 mx-auto p-4 px-6">
//               <img
//                 src={logo.src}
//                 alt={logo.alt}
//                 className="object-contain w-full h-full"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default CompanyCarousel;


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { src: "purdue-university.png", alt: "Purdue University logo - Partner of AIMLR 2026" },
  { src: "shanghai-jiao-tong-university.webp", alt: "Shanghai Jiao Tong University logo - Partner of AIMLR 2026" },
  { src: "princeton-university.webp", alt: "Princeton University logo - Partner of AIMLR 2026" },
  { src: "university-of-milan.webp", alt: "University of Milan logo - Partner of AIMLR 2026" },
  { src: "university-of-electronic-science-technology-china.webp", alt: "University of Electronic Science and Technology of China logo - Partner of AIMLR 2026" },
  { src: "copenhagen-university.webp", alt: "University of Copenhagen logo - Partner of AIMLR 2026" },
  { src: "penn-state-university.webp", alt: "Pennsylvania State University logo - Partner of AIMLR 2026" },
  { src: "san-jose-state-university.webp", alt: "San José State University logo - Partner of AIMLR 2026" },
  { src: "hochschule-kempten-university-of-applied-sciences.webp", alt: "Kempten University of Applied Sciences logo" },
];

const Arrow = ({ onClick, direction }: any) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10
      ${direction === "left" ? "-left-12" : "-right-12"}
      bg-[#3f444a] w-10 h-10 flex items-center justify-center`}
  >
    <span className="text-white text-xl">
      {direction === "left" ? "←" : "→"}
    </span>
  </button>
);

const CompanyCarousel = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-[#f2f3f4] py-16 relative overflow-hidden">
      {/* Heading */}
      <p className="text-center text-[26px] mb-12 text-black">
        Join the hospitality revolution! Network with leaders, explore
        innovations - all in one place.
      </p>

      {/* Slider */}
      <div className="max-w-[1400px] mx-auto px-20 relative">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-6">
              <div className="bg-white h-[220px] flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-[90px] object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompanyCarousel;
