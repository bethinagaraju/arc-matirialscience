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
//     alt: "Prof. Yanda Li – Keynote Speaker at PharmaTech 2026 | Tsinghua University, China",
//     name: "Prof. Yanda Li",
//     title: "Tsinghua University, China",
//     company: "",
//     type: "Keynote",
//   },


//     {
//     image: "michael-cafarella.webp",
//     alt: "Prof. Michael Cafarella – Speaker at PharmaTech 2026 | Massachusetts Institute of Technology, USA",
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
//     alt: "Prof. Michael Goetjen – Keynote Speaker at PharmaTech 2026 | Yale University, USA",
//     name: "Prof. Michael Goetjen",
//     title:"Massachusetts Institute of Technology (MIT), USA",
//     company: "",
//     type: "Keynote",
//   },

  

//   {
//     image: "Felisa-Baynes-Ross.jpeg",
//     alt: "Dr. Felisa Baynes-Ross – Speaker at PharmaTech 2026 | Yale University, USA",
//     name: "Dr. Felisa Baynes-Ross",
//     title: "Yale University, USA",
//     company: "",
//     type: "Speaker",
//   },
//   {
//     image: "Athanasios-Paschalis.jpeg",
//     alt: "Dr. Athanasios Paschalis – Speaker at PharmaTech 2026 | Imperial College London, UK",
//     name: "Dr. Athanasios Paschalis",
//     title: "Imperial College London, UK",
//     company: "",
//     type: "Speaker",
//   },



//   {
//     image: "liu-yurong.jpeg",
//     alt: "Yurong Liu – Speaker at PharmaTech 2026 | Southeast University, China",
//     name: "LIU, Yurong",
//     title: "Southeast University, China",
//     company: "",
//     type: "Speaker",
//   },

//   {
//     image: "charles-romain.jpeg",
//     alt: "Dr. Charles Romain – Speaker at PharmaTech 2026 | Imperial College London, UK",
//     name: "Dr. Charles Romain",
//     title: "Imperial College London, UK",
//     company: "",
//     type: "Speaker",
//   },

//   {
//     image: "James-Berger.jpeg",
//     alt: "Dr. James Berger – Keynote Speaker at PharmaTech 2026 | Yale University, USA",
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
//             {/* ABOUT PharmaTech 2026  HYBRID EVENT */}
//             PharmaTech 2026 SPEAKERS
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
import { Link } from "react-router-dom";
import SpeakersBottomSection from "../components/SpeakersBottomSection";
import EndFooter from "../components/EndFooter";
import { Helmet } from "react-helmet-async";
import { useConference } from "../contexts/ConferenceContext";


const SpeakersPage: React.FC = () => {
  const { data } = useConference();

  const speakersList: any[] =
    data?.speakers?.map((s: any) => ({
      image: s.imagePath,
      alt: `${s.name} – ${s.speakerType} | ${s.university}`,
      name: s.name,
      title: s.university,
      company: "",
      type: s.speakerType,
      slug: s.slug,
    })) ?? [];

  const committeeList =
    data?.committee?.map((c: any) => ({ name: c.name, university: c.university })) ?? [];

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
            PharmaTech 2026 Speakers
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {speakersList.map((speaker: any, i: number) => (
            //   <Link
            //     key={speaker.slug || i}
            //     to={`/speakers/${speaker.slug}`}
            //     className="group relative overflow-hidden block"
            //   >

            //     {/* Image */}
            //     <img
            //       src={speaker.image}
            //       alt={speaker.alt}
            //       className="
            //         w-full aspect-square object-cover
            //         transition-all duration-500
            //         group-hover:scale-110
                    
            //       "
            //     />

    
            //     <div
            //       className="
            //         absolute bottom-0 left-0 right-0
            //         p-4
            //         translate-y-0 opacity-100
            //         transition-all duration-300
            //       "
            //     >


            //                   <div className="absolute bottom-0 left-0 p-4 text-white bg-black/30 w-full">
            //   <h3 className="text-xl font-semibold leading-tight">
            //     {speaker.name}
            //   </h3>
            //   <p className="text-sm opacity-90">
            //     {speaker.title}
            //   </p>

            //   <p className="text-sm opacity-90">
            //     {speaker.type}
            //   </p>

            // </div>
            //     </div>
            //   </Link>

            <Link
  key={speaker.slug || i}
  to={`/speakers/${speaker.slug}`}
  className="group relative overflow-hidden block cursor-pointer
             transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
>
  <img
    src={speaker.image}
    alt={speaker.alt}
    className="w-full aspect-square object-cover
               transition-all duration-500 group-hover:scale-110 group-hover:grayscale"
  />

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

  {/* View profile indicator */}
  <div className="absolute inset-0 flex items-center justify-center 
                  opacity-0 group-hover:opacity-100 transition duration-300">
    <span className="bg-white/90 text-[#c9ab63] px-4 py-2 text-sm font-semibold">
      View Profile →
    </span>
  </div>

  {/* Text */}
  <div className="absolute bottom-0 left-0 p-4 text-white w-full">
    <h3 className="text-xl font-semibold leading-tight">{speaker.name}</h3>
    <p className="text-sm opacity-90">{speaker.title}</p>
    <p className="text-sm opacity-90">{speaker.type}</p>
  </div>
</Link>


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
            {committeeList.map((member, i) => (
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
