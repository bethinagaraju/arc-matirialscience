// // import React from 'react';
// // import HighletOne from './HighletOne';
// // import HighletTwo from './HighletTwo';
// // import HighletThree from './HighletThree';

// // const Highletsec: React.FC = () => {
// //   return (
// //     <div className="w-full overflow-hidden relative">

// //                   <h1
// //         style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
// //         className="text-center text-2xl md:text-3xl font-bold m-2 mt-6"
// //       >
        
// //         AIMLR 2025 EDITION
// //       </h1>

// //       <div className="flex gap-0 animate-scroll">
// //         <HighletOne />
// //         <HighletTwo />
// //         <HighletThree />
// //         {/* Duplicate for infinite scroll */}
// //         <HighletOne />
// //         <HighletTwo />
// //         <HighletThree />
// //         {/* Duplicate for infinite scroll */}
// //         <HighletOne />
// //         <HighletTwo />
// //         <HighletThree />
// //         {/* Duplicate for infinite scroll */}
// //         <HighletOne />
// //         <HighletTwo />
// //         <HighletThree />
// //         {/* Duplicate for infinite scroll */}
// //         <HighletOne />
// //         <HighletTwo />
// //         <HighletThree />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Highletsec;



// import React from "react";
// import HighletOne from "./HighletOne";
// import HighletTwo from "./HighletTwo";
// import HighletThree from "./HighletThree";

// const Highletsec: React.FC = () => {
//   return (
//     <section className="w-full overflow-hidden relative py-6">

//       {/* TITLE */}
//       <h1
//         style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
//         className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-4"
//       >
//         AIMLR 2025 EDITION
//       </h1>

//       {/* SCROLL WRAPPER */}
//       <div className="relative w-full overflow-hidden">

//       {/* SCROLLING ROW */}
//         <div
//           className="
//             flex
//             flex-col
//             md:flex-row
//             gap-4
//             md:whitespace-nowrap
//             md:animate-scroll
//             will-change-transform
//           "
//         >
//           {/* Each item must NOT shrink */}
//           <div className="flex-shrink-0">
//             <HighletOne />
//           </div>
//           <div className="flex-shrink-0 hidden md:block">
//             <HighletTwo />
//           </div>


//           {/* DUPLICATES FOR INFINITE SCROLL */}
//           <div className="flex-shrink-0 hidden md:block">
//             <HighletOne />
//           </div>
//           <div className="flex-shrink-0 hidden md:block">
//             <HighletTwo />
//           </div>


//           <div className="flex-shrink-0 hidden md:block">
//             <HighletOne />
//           </div>
//           <div className="flex-shrink-0 hidden md:block">
//             <HighletTwo />
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Highletsec;









import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HighletOne from "./HighletOne";
import HighletTwo from "./HighletTwo";
import HighletThree from "./HighletThree";

const mobileSlides = [
  <HighletOne />,
  <HighletTwo />,
  // <HighletThree />,
];

const Highletsec: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? mobileSlides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === mobileSlides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full overflow-hidden relative py-6">

      {/* TITLE */}
      <h1
        style={{ fontFamily: "'Manrope', sans-serif", color: "#2e376c" }}
        className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-4"
      >
        AIMLR 2025 EDITION
      </h1>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden relative flex items-center justify-center">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-2 z-10 bg-white shadow-md rounded-full p-2"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>

        {/* ACTIVE MOBILE SLIDE */}
        <div className="w-full flex justify-center">
          {mobileSlides[currentIndex]}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-2 z-10 bg-white shadow-md rounded-full p-2"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block">
        <div
          className="
            flex
            flex-row
            gap-4
            whitespace-nowrap
            animate-scroll
            will-change-transform
          "
        >
          <div className="flex-shrink-0">
            <HighletOne />
          </div>
          <div className="flex-shrink-0">
            <HighletTwo />
          </div>


          {/* DUPLICATES FOR INFINITE SCROLL */}
          <div className="flex-shrink-0">
            <HighletOne />
          </div>
          <div className="flex-shrink-0">
            <HighletTwo />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Highletsec;
