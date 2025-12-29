// // // // CompanyCarousel.jsx
// // // import React from 'react';
// // // import Slider from 'react-slick';
// // // import 'slick-carousel/slick/slick.css';
// // // import 'slick-carousel/slick/slick-theme.css';

// // // const logos = [
// // //   { src: 'uni01.png', alt: 'Company 1' },
// // //   { src: 'uni2.png', alt: 'Company 2' },
// // //   { src: 'uni3.png', alt: 'Company 3' },
// // //   { src: 'uni4.png', alt: 'Company 4' },
// // //   { src: 'uni5.png', alt: 'Company 5' },
// // //   { src: 'uni6.png', alt: 'Company 6' },
// // //   { src: 'uni7.png', alt: 'Company 7' },
  
// // // ];



// // // const CompanyCarousel = () => {
// // //   const settings = {
// // //     infinite: true,
// // //     speed: 2000,
// // //     slidesToShow: 4,
// // //     slidesToScroll: 1,
// // //     autoplay: true,
// // //     autoplaySpeed: 2500,
// // //     cssEase: 'linear',
// // //     pauseOnHover: false,
// // //     responsive: [
// // //       {
// // //         breakpoint: 1024,
// // //         settings: { slidesToShow: 3 }
// // //       },
// // //       {
// // //         breakpoint: 768,
// // //         settings: { slidesToShow: 2 }
// // //       },
// // //       {
// // //         breakpoint: 480,
// // //         settings: { slidesToShow: 1 }
// // //       }
// // //     ]
// // //   };

// // //   return (
// // //     <div className="my-10 px-4">

// // //                   <h1
// // //         style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
// // //         className="text-center text-2xl md:text-3xl font-bold mb-4"
// // //       >
        
// // //         PARTNER INSTITUTIONS & SPONSORS
// // //       </h1>

// // //       <Slider {...settings}>
// // //         {logos.map((logo, index) => (
// // //           <div key={index} className="flex justify-center items-center p-1">
// // //             <div className="bg-white shadow-md p-2 w-40 h-40 flex items-center justify-center">
// // //               <img src={logo.src} alt={logo.alt} className="object-contain h-full w-full lazyload" />
            
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </Slider>
// // //     </div>
// // //   );
// // // };

// // // export default CompanyCarousel;




// // import React from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // const logos = [
// //   { src: "uni01.png", alt: "Company 1" },
// //   { src: "uni2.png", alt: "Company 2" },
// //   { src: "uni3.png", alt: "Company 3" },
// //   { src: "uni4.png", alt: "Company 4" },
// //   { src: "uni5.png", alt: "Company 5" },
// //   { src: "uni6.png", alt: "Company 6" },
// //   { src: "uni7.png", alt: "Company 7" },
// // ];

// // const CompanyCarousel = () => {
// //   const settings = {
// //     infinite: true,
// //     speed: 2000,
// //     slidesToShow: 4,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 2500,
// //     cssEase: "linear",
// //     pauseOnHover: false,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: { slidesToShow: 3 },
// //       },
// //       {
// //         breakpoint: 768,
// //         settings: { slidesToShow: 2 },
// //       },
// //       {
// //         breakpoint: 480,
// //         settings: { slidesToShow: 1 },
// //       },
// //     ],
// //   };

// //   return (
// //     <div className="my-10 px-4">
// //       <h1
// //         style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
// //         className="text-center text-2xl md:text-3xl font-bold mb-6"
// //       >
// //         PARTNER INSTITUTIONS & SPONSORS
// //       </h1>

// //       <Slider {...settings}>
// //         {logos.map((logo, index) => (
// //           <div key={index} className="flex justify-center items-center px-1">
// //             <div className="bg-white shadow-md p-2 w-32 h-32 flex items-center justify-center">
// //               <img
// //                 src={logo.src}
// //                 alt={logo.alt}
// //                 className="object-contain h-full w-full"
// //                 loading="lazy"
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </Slider>
// //     </div>
// //   );
// // };

// // export default CompanyCarousel;






// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const logos = [
//   { src: "uni01.png", alt: "University 1" },
//   { src: "uni2.png", alt: "University 2" },
//   { src: "uni3.png", alt: "University 3" },
//   { src: "uni4.png", alt: "University 4" },
//   { src: "uni5.png", alt: "University 5" },
//   { src: "uni6.png", alt: "University 6" },
//   { src: "uni7.png", alt: "University 7" },
// ];

// const CompanyCarousel = () => {
//   const settings = {
//     infinite: true,
//     speed: 3000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 0,
//     cssEase: "linear",
//     arrows: false,
//     pauseOnHover: false,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className="my-10 px-6">
//       <h1
//         className="text-center text-2xl md:text-3xl font-bold mb-6"
//         style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
//       >
//         PARTNER INSTITUTIONS & SPONSORS
//       </h1>

//       <Slider {...settings}>
//         {logos.map((logo, index) => (
//           <div key={index} className="flex justify-center">
//             <div className="bg-white shadow-sm w-28 h-28 flex items-center justify-center">
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
//     </div>
//   );
// };

// export default CompanyCarousel;




import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { src: "download1.png", alt: "University 1" },
  { src: "sjtu-DZ6k0I1j.webp", alt: "University 2" },
  // { src: "uc-BurifC2T.webp", alt: "University 3" },
  { src: "pcu-Buy9MB-q.webp", alt: "University 4" },
  { src: "udsm-CTPLInRA.webp", alt: "University 5" },
  { src: "uestc-C_MNhcAm.webp", alt: "University 6" },
  { src: "snu-Da7ZN0WT.webp", alt: "University 7" },
  // { src: "cas-BCQF-O7r.webp", alt: "University 8" },
  { src: "uoc-DUnziWwK.webp", alt: "University 9" },

  // { src: "buct-BSj0TvuT.webp", alt: "University 10" },

  { src: "psu-Bsq3CJWu.webp", alt: "University 11" },

  { src: "sjs-D0wtmL7M.webp", alt: "University 12" },

  { src: "hku-CKJEw1Hp.webp", alt: "University 12" },
];

const CompanyCarousel = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 6, // Increased from 4 to 6 to reduce gap on desktop
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
          <div key={index} className="px-2 outline-none"> {/* Added px-2 for minimal consistent gap */}
            <div className="flex items-center justify-center h-36 w-48 mx-auto p-4 ">
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