// // // import React from 'react';
// // // import Header from '../components/Header';
// // // import SpeakersSection from '../components/SpeakersSection';
// // // import SpeakersBanner from '../components/SpeakersBanner';
// // // import SpeakersBottomSection from '../components/SpeakersBottomSection';
// // // import { Link } from 'react-router-dom';

// // // const plenarySpeakers = [
// // //   {
// // //     image: 'speakerone.png',
// // //     name: 'Michael Cafarella',
// // //     title: 'Massachusetts Institute of Technology, USA',
// // //     company: 'EDF Renewables'
// // //   },
// // //   {
// // //     image: 'speakertwo.png',
// // //     name: 'Chris Atkenson',
// // //     title: 'Carnegie Mellon University, USA',
// // //     company: 'McKinsey'
// // //   },
// // //   {
// // //     image: 'speaker3.png',
// // //     name: 'Yanda Li',
// // //     title: 'Tsinghua University, China',
// // //     company: 'McKinsey'
// // //   }
// // // ];

// // // const keynoteSpeakers = [
// // //   {
// // //     image: 'speaker04.png',
// // //     name: 'Samuel Coogan',
// // //     title: 'Georgia institute of Technology, USA',
// // //     company: 'Deloitte'
// // //   },
// // //   {
// // //     image: 'Gemini_Generated_Image_v41z06v41z06v41z.png',
// // //     name: 'Leonidas Guibas',
// // //     title: 'Stanford University, USA',
// // //     company: 'KPMG'
// // //   },
// // //   {
// // //     image: 'Gemini_Generated_Image_19cov119cov119co.png',
// // //     name: 'Jeannette Bohg',
// // //     title: 'Stanford University, USA',
// // //     company: 'KPMG, UK'
// // //   }
// // // ];

// // // const invitedSpeakers = [
// // //   {
// // //     image: 'Gemini_Generated_Image_n1hse1n1hse1n1hs.png',
// // //     name: 'Gustavo Alonso',
// // //     title: 'ETH Zurich, Switzerland',
// // //     company: 'Ministry of Energy & Infrastructure, UAE'
// // //   },
// // //   {
// // //     image: 'Gemini_Generated_Image_cksm8zcksm8zcksm.png',
// // //     name: 'Weidong Chen',
// // //     title: 'Shanghai Jiao Tong University, China',
// // //     company: 'Shanghai Jiao Tong University, China'
// // //   }
// // // ];

// // // function SpeakersPage() {
// // //   return (
// // //     <div>
// // //       <Header />
// // //       <SpeakersBanner />
// // //       <SpeakersSection speakers={plenarySpeakers} title="Plenary Speakers" />
// // //       <SpeakersSection speakers={keynoteSpeakers} title="Keynote Speakers" />
// // //       <SpeakersSection speakers={invitedSpeakers} title="Invited Speakers" />
// // //       <SpeakersBottomSection />
// // //     </div>
// // //   );
// // // }

// // // export default SpeakersPage;


// // import React from "react";
// // import Header from "../components/Header";
// // import { Link } from "react-router-dom";
// // import SpeakersBanner from "../components/SpeakersBanner";
// // import SpeakersBottomSection from "../components/SpeakersBottomSection";

// // const speakers = [
// //   {
// //     image: "speakerone.png",
// //     name: "Michael Cafarella",
// //     title: "Massachusetts Institute of Technology, USA",
// //     company: "EDF Renewables",
// //   },
// //   {
// //     image: "speakertwo.png",
// //     name: "Chris Atkenson",
// //     title: "Carnegie Mellon University, USA",
// //     company: "McKinsey",
// //   },
// //   {
// //     image: "speaker3.png",
// //     name: "Yanda Li",
// //     title: "Tsinghua University, China",
// //     company: "McKinsey",
// //   },
// //   {
// //     image: "speaker04.png",
// //     name: "Samuel Coogan",
// //     title: "Georgia institute of Technology, USA",
// //     company: "Deloitte",
// //   },
// //   {
// //     image: "Gemini_Generated_Image_v41z06v41z06v41z.png",
// //     name: "Leonidas Guibas",
// //     title: "Stanford University, USA",
// //     company: "KPMG",
// //   },
// //   {
// //     image: "Gemini_Generated_Image_19cov119cov119co.png",
// //     name: "Jeannette Bohg",
// //     title: "Stanford University, USA",
// //     company: "KPMG, UK",
// //   },
// //   {
// //     image: "Gemini_Generated_Image_n1hse1n1hse1n1hs.png",
// //     name: "Gustavo Alonso",
// //     title: "ETH Zurich, Switzerland",
// //     company: "Ministry of Energy & Infrastructure, UAE",
// //   },
// //   {
// //     image: "Gemini_Generated_Image_cksm8zcksm8zcksm.png",
// //     name: "Weidong Chen",
// //     title: "Shanghai Jiao Tong University, China",
// //     company: "Shanghai Jiao Tong University, China",
// //   },
// // ];

// // const committee = [
// //   { image: "commit1.png", name: "Dr. Alan Turing", university: "Oxford University, UK" },
// //   { image: "commit2.png", name: "Dr. Ada Lovelace", university: "Cambridge University, UK" },
// //   { image: "commit3.png", name: "Dr. Grace Hopper", university: "Yale University, USA" },
// //   { image: "commit4.png", name: "Dr. Claude Shannon", university: "MIT, USA" },
// // ];

// // function SpeakersPage() {
// //   return (
// //     <div>
// //       <Header />

// //       {/* Hero Section */}
// //       <SpeakersBanner />

// //       {/* Speakers + Committee Grid */}
// //       <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

// //         {/* Left: Speakers (auto grid) */}
// //         <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-10">
// //           {speakers.map((speaker, i) => (
// //             <div key={i} className="text-center">
// //               <img
// //                 src={speaker.image}
// //                 className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
// //                 alt={speaker.name}
// //               />
// //               <h3 className="font-semibold">{speaker.name}</h3>
// //               <p className="text-sm text-gray-600">{speaker.title}</p>
// //               <p className="text-xs text-gray-500">{speaker.company}</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Right: Committee */}
// //         <div className="grid grid-cols-2 gap-6 border-l pl-6">
// //           {committee.map((member, i) => (
// //             <div
// //               key={i}
// //               className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition text-center"
// //             >
// //               <img
// //                 src={member.image}
// //                 className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
// //                 alt={member.name}
// //               />
// //               <h4 className="font-bold text-sm">{member.name}</h4>
// //               <p className="text-xs text-gray-600">{member.university}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* CTA Section */}
// //       <SpeakersBottomSection />
// //     </div>
// //   );
// // }

// // export default SpeakersPage;



// import React from "react";
// import Header from "../components/Header";
// import { Link } from "react-router-dom";
// import SpeakersBanner from "../components/SpeakersBanner";
// import SpeakersBottomSection from "../components/SpeakersBottomSection";
// import { User } from "lucide-react";
// import EndFooter from "../components/EndFooter";
// import { Helmet } from "react-helmet-async";


// const speakers = [

//   {
//     image: "yanda-li.jpg",
//     alt: "Prof. Yanda Li – Keynote Speaker at AIMLR 2026 | Tsinghua University, China",
//     name: "Prof. Yanda Li",
//     title: "Tsinghua University, China",
//     company: "",
//     type: "Keynote",
//   },


//     {
//     image: "michael-cafarella.webp",
//     alt: "Prof. Michael Cafarella – Speaker at AIMLR 2026 | Massachusetts Institute of Technology, USA",
//     name: "Prof. Michael Cafarella",
//     title: "Massachusetts Institute of Technology, USA",
//     company: "",
//     type: "Keynote",
//   },


//       {
//     image: "Shashank-V.Joshi.jpeg",
//     alt: "Shashank V. Joshi – Professor at Stanford University",
//     name: "Prof. Shashank V. Joshi",
//     title: "Stanford University",
//     company: "",
//     type: "Keynote",
//   },

//       {
//     image: "michael-goetjen.jpeg",
//     alt: "Prof. Michael Goetjen – Keynote Speaker at AIMLR 2026 | Yale University, USA",
//     name: "Prof. Michael Goetjen",
//     title:"Massachusetts Institute of Technology (MIT), USA",
//     company: "",
//     type: "Keynote",
//   },

  

//   {
//     image: "Felisa-Baynes-Ross.jpeg",
//     alt: "Dr. Felisa Baynes-Ross – Speaker at AIMLR 2026 | Yale University, USA",
//     name: "Dr. Felisa Baynes-Ross",
//     title: "Yale University, USA",
//     company: "",
//     type: "Speaker",
//   },
//   {
//     image: "Athanasios-Paschalis.jpeg",
//     alt: "Dr. Athanasios Paschalis – Speaker at AIMLR 2026 | Imperial College London, UK",
//     name: "Dr. Athanasios Paschalis",
//     title: "Imperial College London, UK",
//     company: "",
//     type: "Speaker",
//   },



//   {
//     image: "liu-yurong.jpeg",
//     alt: "Yurong Liu – Speaker at AIMLR 2026 | Southeast University, China",
//     name: "LIU, Yurong",
//     title: "Southeast University, China",
//     company: "",
//     type: "Speaker",
//   },

//   {
//     image: "charles-romain.jpeg",
//     alt: "Dr. Charles Romain – Speaker at AIMLR 2026 | Imperial College London, UK",
//     name: "Dr. Charles Romain",
//     title: "Imperial College London, UK",
//     company: "",
//     type: "Speaker",
//   },

//   {
//     image: "James-Berger.jpeg",
//     alt: "Dr. James Berger – Keynote Speaker at AIMLR 2026 | Yale University, USA",
//     name: "Dr. James Berger",
//     title: "Yale University, USA",
//     company: "",
//     type: "Speaker",
//   },

//   {
//     image: "Subini-Ancy-Annamma.jpeg",
//     alt: "Subini Ancy Annamma – Associate Professor at Stanford University",
//     name: "Dr. Subini Ancy Annamma",
//     title: "Associate Professor, Stanford University",
//     company: "",
//     type: "Speaker",
//   },

// ];



// const committee = [
//   { image: "commit1.png", name: "Prof. Yanda Li", university: "Tsinghua University, China" },
//   { image: "commit2.png", name: "Prof. Felisa Baynes-Ross", university: "Yale University, USA" },
//   { image: "commit3.png", name: "Prof. Athanasios Paschalis", university: "Imperial College London, UK" },
//   { image: "commit4.png", name: "Dr. Michael Cafarella", university: "Massachusetts Institute of Technology, USA" },
// ];

// function SpeakersPage() {
//   return (
//     <>

//   <Helmet>
//         <meta name="robots" content="noindex, follow" />
//   </Helmet>

//     <div>


//       <Header />



//       {/* Speakers + Committee */}
//       <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        

//         {/* Left: Speakers */}
//         <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-10 text-center">


//             <h2 className="text-3xl font-bold text-[#00488B] mb-6 col-span-full">
//             {/* ABOUT AIMLR 2026  HYBRID EVENT */}
//             AIMLR 2026 SPEAKERS
//           </h2>
//           {speakers.map((speaker, i) => (
//             <div key={i} className="text-center">
//               <img
//                 src={speaker.image}
//                 className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
//                 alt={speaker.alt}
//               />
//               <h3 className="font-semibold">{speaker.name}</h3>
//               <p className="text-sm text-gray-600">{speaker.title}</p>

//               <p className="text-sm text-[#292e63] font-semibold">{speaker.type}</p>
//             </div>
//           ))}
//           <p className="text-sm text-[#2F2C7C] mt-4 col-span-full text-center">Additional speakers and session details will be announced shortly</p>
//         </div>


//         <div className="border-l pl-6 flex flex-col gap-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-2 border-b pb-2">
//             Scientific Committee
//           </h2>

//           {committee.map((member, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-4 bg-[#2e2b7a] p-4 shadow-md hover:shadow-lg transition"
//             >
//               {/* <User className="w-10 h-10 text-white flex-shrink-0" /> */}
//               <div className=" gap-4 items-center">
//                 <h4 className="font-bold text-white">{member.name}</h4>
//                 <p className="text-sm text-white">{member.university}</p>
//               </div>
//             </div>
//           ))}
//         </div>


//       </div>

//       {/* CTA Section */}
//       <SpeakersBottomSection />
//       <EndFooter />
//     </div>
//     </>
//   );
// }

// export default SpeakersPage;











import React from "react";
import Header from "../components/Header";
import SpeakersBanner from "../components/SpeakersBanner";
import SpeakersBottomSection from "../components/SpeakersBottomSection";
import EndFooter from "../components/EndFooter";
import { Helmet } from "react-helmet-async";

/* ===================== DATA ===================== */

const speakers = [
  {
    image: "yanda-li.jpg",
    alt: "Prof. Yanda Li – Keynote Speaker at AIMLR 2026 | Tsinghua University, China",
    name: "Prof. Yanda Li",
    title: "Tsinghua University, China",
    company: "",
    type: "Keynote",
  },
  {
    image: "michael-cafarella.webp",
    alt: "Prof. Michael Cafarella – Speaker at AIMLR 2026 | MIT, USA",
    name: "Prof. Michael Cafarella",
    title: "Massachusetts Institute of Technology, USA",
    company: "",
    type: "Keynote",
  },
  {
    image: "Shashank-V.Joshi.jpeg",
    alt: "Prof. Shashank V. Joshi – Stanford University",
    name: "Prof. Shashank V. Joshi",
    title: "Stanford University",
    company: "",
    type: "Keynote",
  },
  {
    image: "michael-goetjen.jpeg",
    alt: "Prof. Michael Goetjen – MIT, USA",
    name: "Prof. Michael Goetjen",
    title: "Massachusetts Institute of Technology (MIT), USA",
    company: "",
    type: "Keynote",
  },
  {
    image: "Felisa-Baynes-Ross.jpeg",
    alt: "Dr. Felisa Baynes-Ross – Yale University, USA",
    name: "Dr. Felisa Baynes-Ross",
    title: "Yale University, USA",
    company: "",
    type: "Speaker",
  },
  {
    image: "Athanasios-Paschalis.jpeg",
    alt: "Dr. Athanasios Paschalis – Imperial College London, UK",
    name: "Dr. Athanasios Paschalis",
    title: "Imperial College London, UK",
    company: "",
    type: "Speaker",
  },
  {
    image: "liu-yurong.jpeg",
    alt: "LIU Yurong – Southeast University, China",
    name: "LIU, Yurong",
    title: "Southeast University, China",
    company: "",
    type: "Speaker",
  },
  {
    image: "charles-romain.jpeg",
    alt: "Dr. Charles Romain – Imperial College London, UK",
    name: "Dr. Charles Romain",
    title: "Imperial College London, UK",
    company: "",
    type: "Speaker",
  },
  {
    image: "James-Berger.jpeg",
    alt: "Dr. James Berger – Yale University, USA",
    name: "Dr. James Berger",
    title: "Yale University, USA",
    company: "",
    type: "Speaker",
  },
  {
    image: "Subini-Ancy-Annamma.jpeg",
    alt: "Dr. Subini Ancy Annamma – Stanford University",
    name: "Dr. Subini Ancy Annamma",
    title: "Associate Professor, Stanford University",
    company: "",
    type: "Speaker",
  },
];

const committee = [
  { name: "Prof. Yanda Li", university: "Tsinghua University, China" },
  { name: "Prof. Felisa Baynes-Ross", university: "Yale University, USA" },
  { name: "Prof. Athanasios Paschalis", university: "Imperial College London, UK" },
  { name: "Dr. Michael Cafarella", university: "MIT, USA" },
];

/* ===================== PAGE ===================== */

const SpeakersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />
      {/* <SpeakersBanner /> */}

      {/* ===================== CONTENT ===================== */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        {/* ===================== SPEAKERS ===================== */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-8">
            AIMLR 2026 Speakers
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {speakers.map((speaker, i) => (
              <div key={i} className="group relative overflow-hidden">

                {/* Image */}
                <img
                  src={speaker.image}
                  alt={speaker.alt}
                  className="
                    w-full aspect-square object-cover
                    transition-all duration-500
                    group-hover:scale-110
                    group-hover:grayscale
                  "
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Text */}
                <div
                  className="
                    absolute bottom-0 left-0 right-0
                    p-4
                    translate-y-6 opacity-0
                    group-hover:translate-y-0 group-hover:opacity-100
                    transition-all duration-300
                  "
                >
                  <div className="border-l-2 border-[#C9AB63] pl-3">
                    <h3 className="text-sm font-semibold text-white leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-xs text-white/90 mt-1">
                      {speaker.title}
                    </p>
                    <span className="inline-block mt-2 text-[11px] uppercase tracking-wide text-[#C9AB63]">
                      {speaker.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#4B5563] mt-6 text-center">
            Additional speakers and session details will be announced shortly.
          </p>
        </div>

        {/* ===================== COMMITTEE ===================== */}
        <aside className="border-l pl-6">
          <h3 className="text-xl font-semibold text-[#1F2937] mb-6 border-b pb-2">
            Scientific Committee
          </h3>

          <div className="space-y-5">
            {committee.map((member, i) => (
              <div key={i} className="pl-3 border-l-2 border-[#C9AB63]">
                <h4 className="font-medium text-[#1F2937]">
                  {member.name}
                </h4>
                <p className="text-sm text-[#4B5563]">
                  {member.university}
                </p>
              </div>
            ))}
          </div>
        </aside>

      </section>

      {/* ===================== CTA + FOOTER ===================== */}
      <SpeakersBottomSection />
      <EndFooter />
    </>
  );
};

export default SpeakersPage;
