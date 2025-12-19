// // // // import React from "react";
// // // // import { Link } from "react-router-dom";

// // // // const ScrollbarPage: React.FC = () => {
// // // //   // Data for the scrolling ticker
// // // //   const conferences = [
// // // //     "Nursing Conferences 2026",
// // // //     "Nursing World Conference",
// // // //     "Nursing Conferences",
// // // //     "Nursing Conference",
// // // //     "Nursing Conference 2026",
// // // //     "Nursing Congress",
// // // //     "Healthcare Summit 2026", // Added for length
// // // //     "Global Nursing Meet"     // Added for length
// // // //   ];

// // // //   return (
// // // //     <div className="font-sans bg-white min-h-screen">
      
// // // //       {/* --------------------------------------------------
// // // //         SECTION 1: INFINITE SCROLLING TICKER (Marquee)
// // // //         Matches the "Upcoming Conferences" image
// // // //         --------------------------------------------------
// // // //       */}
// // // //       <div className="bg-gray-50 border-b border-gray-200 py-3 overflow-hidden relative flex items-center">
        
// // // //         {/* Static Label */}
// // // //         <div className="bg-gray-50 z-10 px-4 sm:px-8 lg:px-28 py-1 whitespace-nowrap shadow-[10px_0_20px_white]">
// // // //           <span className="text-black font-semibold text-lg">Upcoming Conferences:</span>
// // // //         </div>

// // // //         {/* Scrolling Content Wrapper */}
// // // //         <div className="flex overflow-hidden w-full mask-linear-gradient">
// // // //           <div className="flex animate-marquee whitespace-nowrap">
// // // //             {/* We render the list twice to create a seamless loop */}
// // // //             {[...conferences, ...conferences].map((item, index) => (
// // // //               <React.Fragment key={index}>
// // // //                 <Link 
// // // //                   to="#" 
// // // //                   className="text-[#0091b5] hover:text-[#00488B] text-lg mx-2 hover:underline transition-colors"
// // // //                 >
// // // //                   {item}
// // // //                 </Link>
// // // //                 <span className="text-gray-400 mx-2 text-lg">|</span>
// // // //               </React.Fragment>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* --------------------------------------------------
// // // //         SECTION 2: CONTENT LAYOUT (Float Strategy)
// // // //         Matches the Sketch (Red Lines & Box)
// // // //         --------------------------------------------------
// // // //       */}
// // // //       <section className="py-12 px-4 sm:px-8 lg:px-28">
// // // //         <div className="max-w-7xl mx-auto block">
          
// // // //           {/* FLOAT ELEMENT:
// // // //              This div comes BEFORE the text in HTML, but floats Right.
// // // //              The text will wrap around its bottom-left corner.
// // // //           */}
// // // //           <div className="w-full md:w-[45%] lg:w-[40%] float-none md:float-right md:ml-8 mb-6 md:mb-2 mt-2">
// // // //             <div className="border-4 border-[#8B0000] p-1 bg-white shadow-lg">
// // // //               {/* This represents the inner rectangle in your sketch */}
// // // //               <div className="aspect-video bg-gray-100 flex items-center justify-center relative overflow-hidden group">
// // // //                  <img 
// // // //                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000" 
// // // //                    alt="Conference" 
// // // //                    className="w-full h-full object-cover"
// // // //                  />
// // // //                  {/* Play Button Overlay */}
// // // //                  <div className="absolute inset-0 flex items-center justify-center">
// // // //                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg opacity-90 group-hover:scale-110 transition-transform">
// // // //                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
// // // //                    </div>
// // // //                  </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* TEXT CONTENT:
// // // //              This fills the remaining space.
// // // //           */}
// // // //           <div className="text-gray-800 text-[16px] leading-relaxed text-justify">
// // // //             <h1 className="text-3xl font-bold text-[#8B0000] mb-4 border-b-2 border-[#8B0000] inline-block pb-1">
// // // //               About The Conference
// // // //             </h1>
            
// // // //             <p className="mb-4">
// // // //               <span className="font-bold text-[#8B0000]">Welcome!</span> This layout is designed specifically to match your requirements where the video sits on the right, and the text flows naturally around it. This technique allows for a highly professional magazine-style editorial look.
// // // //             </p>

// // // //             <p className="mb-4">
// // // //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
// // // //             </p>

// // // //             <p className="mb-4">
// // // //               <strong>Why Layout Matters:</strong> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
// // // //             </p>

// // // //             <p className="mb-4">
// // // //               By using CSS floats, we ensure that as soon as the text exceeds the height of the video container, it wraps underneath it, utilizing the full width of the page. This is exactly what was depicted in the sketch with the straight lines extending fully at the bottom.
// // // //             </p>

// // // //             <p>
// // // //               Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
// // // //             </p>

// // // //             <div className="mt-8 flex gap-4">
// // // //                <button className="px-6 py-2 bg-[#8B0000] text-white font-semibold hover:bg-red-800 transition">
// // // //                  Read Full Brochure
// // // //                </button>
// // // //                <button className="px-6 py-2 border-2 border-[#8B0000] text-[#8B0000] font-semibold hover:bg-red-50 transition">
// // // //                  Contact Us
// // // //                </button>
// // // //             </div>
// // // //           </div>

// // // //         </div>
// // // //       </section>

// // // //       {/* Add the Animation Styles */}
// // // //       <style>{`
// // // //         @keyframes marquee {
// // // //           0% { transform: translateX(0); }
// // // //           100% { transform: translateX(-50%); }
// // // //         }
// // // //         .animate-marquee {
// // // //           animation: marquee 30s linear infinite;
// // // //         }
// // // //         /* Hover to pause effect */
// // // //         .animate-marquee:hover {
// // // //           animation-play-state: paused;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ScrollbarPage;


// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import MobileSidebarMenu from "../components/MobileSidebarMenu";
// // // import ProgramSchedulePage from "./ProgramSchedulePage";

// // // const ScrollbarPage: React.FC = () => {
// // //   // Data for the scrolling ticker
// // //   const conferences = [
// // //     "Nursing Conferences 2026",
// // //     "Nursing World Conference",
// // //     "Nursing Conferences",
// // //     "Nursing Conference",
// // //     "Nursing Conference 2026",
// // //     "Nursing Congress",
// // //     "Healthcare Summit 2026",
// // //     "Global Nursing Meet"
// // //   ];

// // //   return (
// // //     <div className="font-sans bg-white min-h-screen">
      
// // //       {/* --------------------------------------------------
// // //         SECTION 1: INFINITE SCROLLING TICKER
// // //         --------------------------------------------------
// // //       */}
// // //       <div className="bg-gray-50 border-b border-gray-200 py-3 overflow-hidden relative flex items-center">
// // //         {/* Static Label */}
// // //         <div className="bg-gray-50 z-10 px-4 sm:px-8 lg:px-28 py-1 whitespace-nowrap shadow-[10px_0_20px_white]">
// // //           <span className="text-black font-semibold text-lg">Upcoming Conferences:</span>
// // //         </div>

// // //         {/* Scrolling Content Wrapper */}
// // //         <div className="flex overflow-hidden w-full mask-linear-gradient">
// // //           <div className="flex animate-marquee whitespace-nowrap">
// // //             {[...conferences, ...conferences].map((item, index) => (
// // //               <React.Fragment key={index}>
// // //                 <Link 
// // //                   to="#" 
// // //                   className="text-[#0091b5] hover:text-[#00488B] text-lg mx-2 hover:underline transition-colors"
// // //                 >
// // //                   {item}
// // //                 </Link>
// // //                 <span className="text-gray-400 mx-2 text-lg">|</span>
// // //               </React.Fragment>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* --------------------------------------------------
// // //         SECTION 2: CONTENT LAYOUT (FLEX GRID)
// // //         Matches the Red Box Layout Image
// // //         --------------------------------------------------
// // //       */}
// // //       <section className="py-12 px-4 sm:px-8 lg:px-28">
        
// // //         {/* OUTER CONTAINER (The large surrounding rectangle) */}
// // //         <div className="max-w-7xl mx-auto border-2 border-[#8B0000] p-4 flex flex-col lg:flex-row gap-6 items-stretch">
          
// // //           {/* LEFT COLUMN (Sidebar Menu) */}
// // //           <div className="w-full lg:w-[20%] border-2 border-[#8B0000] p-2">
// // //             <MobileSidebarMenu />
// // //           </div>

// // //           {/* RIGHT COLUMN (The wide rectangle) 
// // //             Contains the Text Content
// // //           */}
// // //           <div className="w-full lg:w-[65%] border-2 border-[#8B0000] p-6 text-gray-800 text-[16px] leading-relaxed text-justify">
            
// // //             <ProgramSchedulePage/>
        

// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* Animation Styles */}
// // //       <style>{`
// // //         @keyframes marquee {
// // //           0% { transform: translateX(0); }
// // //           100% { transform: translateX(-50%); }
// // //         }
// // //         .animate-marquee {
// // //           animation: marquee 30s linear infinite;
// // //         }
// // //         .animate-marquee:hover {
// // //           animation-play-state: paused;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default ScrollbarPage;


// // import React from "react";
// // import { Link } from "react-router-dom";
// // // Ensure these paths are correct in your project structure
// // import MobileSidebarMenu from "../components/MobileSidebarMenu";
// // import ProgramSchedulePage from "./ProgramSchedulePage";
// // import Header from "../components/Header";

// // const ScrollbarPage: React.FC = () => {
// //   // Data for the scrolling ticker


// //   return (
// //     <div className="font-sans bg-white min-h-screen">

// //         <Header/>
      

// //       <section className="py-6 px-4 sm:px-8">
        
// //         {/* OUTER CONTAINER - The Red outlined "Page" Wrapper */}
// //         <div className="max-w-7xl mx-auto border-2 border-[#8B0000] p-4 flex flex-col lg:flex-row gap-6 items-stretch min-h-[600px]">
          
// //           {/* LEFT COLUMN (Sidebar Menu) 
// //               Fixed width (approx 20-25%) 
// //           */}
// //           <div className="w-full lg:w-[25%] border-2 border-[#8B0000] p-2">
// //             <MobileSidebarMenu />
// //           </div>

// //           {/* RIGHT COLUMN (Main Content)
// //               flex-1 ensures this fills the rest of the available space
// //               (Previously this was 65%, leaving a gap. Now it fills 100%)
// //           */}
// //           <div className="w-full flex-1 border-2 border-[#8B0000] p-6 text-gray-800 text-[16px] leading-relaxed">
// //             <ProgramSchedulePage />
// //           </div>

// //         </div>
// //       </section>

// //       {/* Animation Styles */}
// //       <style>{`
// //         @keyframes marquee {
// //           0% { transform: translateX(0); }
// //           100% { transform: translateX(-50%); }
// //         }
// //         .animate-marquee {
// //           animation: marquee 30s linear infinite;
// //         }
// //         .animate-marquee:hover {
// //           animation-play-state: paused;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default ScrollbarPage;


// import React from "react";
// import { Link } from "react-router-dom";
// import MobileSidebarMenu from "../components/MobileSidebarMenu";
// import ProgramSchedulePage from "./ProgramSchedulePage";
// import Header from "../components/Header";
// import BiotechAgenda from "../components/BiotechAgenda";
// import EndFooter from "../components/EndFooter";

// const ScrollbarPage: React.FC = () => {
//   // Data for the scrolling ticker (Restored this for you)


//   return (
//     <div className="font-sans bg-white min-h-screen">
      
//       <Header />
      
//       {/* --------------------------------------------------
//         SECTION 1: INFINITE SCROLLING TICKER
//         --------------------------------------------------
//       */}


//       {/* --------------------------------------------------
//         SECTION 2: PAGE CONTENT LAYOUT
//         --------------------------------------------------
//       */}
//       <section className="py-6 px-18 sm:px-36">
        
//         {/* OUTER CONTAINER - The Red outlined "Page" Wrapper */}
//         <div className="  p-4 flex flex-col lg:flex-row gap-2 items-stretch min-h-[600px]">
          
//           {/* LEFT COLUMN (Sidebar Menu) */}
//           <div className="w-full lg:w-[20%]  p-2">
//             <MobileSidebarMenu />
//           </div>

//           {/* RIGHT COLUMN (Main Content) */}
//           <div className="w-full flex-1 p-6 pl-12">
//             {/* <ProgramSchedulePage /> */}
//             <BiotechAgenda/>
//           </div>

//         </div>
//       </section>

//       {/* Animation Styles */}
//       <style>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 30s linear infinite;
//         }
//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       <EndFooter/>
//     </div>
//   );
// };

// export default ScrollbarPage;



import React from "react";
import Header from "../components/Header";
import MobileSidebarMenu from "../components/MobileSidebarMenu";
import BiotechAgenda from "../components/BiotechAgenda";
import EndFooter from "../components/EndFooter";

const ScrollbarPage: React.FC = () => {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      
      {/* Header */}
      <Header />

      {/* Main Section Layout */}
      <section className="flex-grow py-6 px-4 sm:px-8 lg:px-16">
        
        <div className="flex flex-col lg:flex-row gap-8 items-start min-h-[600px]">

          {/* LEFT SIDEBAR (Sticky on Desktop) */}
          {/* <div className="w-full lg:w-[20%] lg:sticky lg:top-28 lg:self-start p-2">
            <MobileSidebarMenu />
          </div> */}
           {/* <div className="hidden lg:block w-full lg:w-[20%] p-2 relative">
            <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-120px)]">
              <MobileSidebarMenu />
            </div>
          </div> */}

          {/* RIGHT CONTENT (Scrollable Area) */}
          <div className="w-full flex-1 p-2 lg:pl-8 max-h-full overflow-y-auto">
            {/* Switchable Pages (only one active) */}
            <BiotechAgenda />
            {/* <ProgramSchedulePage /> */}
            {/* Add any other page here like Venue, FAQ etc */}
          </div>
        </div>
      </section>

      {/* Optional Scrolling Animation Support */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Footer */}
      <EndFooter />
    </div>
  );
};

export default ScrollbarPage;
