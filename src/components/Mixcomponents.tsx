
// import React from "react";

// function Mixcomponents() {


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



//   return (
//     <section
//       id="speakers-section"
//       className="container mx-auto px-4 md:px-6 py-10"
//     >
//       {/* Heading */}
//       <h2 className="text-2xl md:text-3xl font-bold text-[#00488B] mb-8 text-center">
//         PharmaTech 2026 SPEAKERS
//       </h2>

//       {/* Speakers Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
//         {speakers.slice(0, 6).map((speaker, idx) => (
//           <div key={idx} className="text-center">
//             <img
//               src={speaker.image}
//               alt={speaker.alt}
//               className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-3"
//             />

//             <h3 className="font-semibold text-sm md:text-base">
//               {speaker.name}
//             </h3>

//             <p className="text-xs md:text-sm text-gray-600 leading-snug">
//               {speaker.title}
//             </p>

//             <p className="text-xs md:text-sm text-[#292e63] font-semibold mt-1">
//               {speaker.type}
//             </p>
//           </div>
//         ))}

//         {speakers.slice(6).map((speaker, idx) => (
//           <div key={`desktop-${idx}`} className="hidden md:block text-center">
//             <img
//               src={speaker.image}
//               alt={speaker.alt}
//               className="w-32 h-32 object-cover rounded-full mx-auto mb-3"
//             />

//             <h3 className="font-semibold">{speaker.name}</h3>

//             <p className="text-sm text-gray-600 leading-snug">
//               {speaker.title}
//             </p>

//             <p className="text-sm text-[#292e63] font-semibold mt-1">
//               {speaker.type}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* View All Button (especially useful on mobile) */}
//       <div className="text-center">
//         <a
//           href="/speakers"
//           className="inline-block bg-[#2e376c] hover:bg-[#1f254b] text-white font-bold py-3 px-8 transition-colors duration-300 rounded"
//           title="View all speakers at PharmaTech 2026 Conference"
//           aria-label="View all speakers at PharmaTech 2026 Conference"
//         >
//           View All Speakers
//         </a>
//       </div>
//     </section>
//   );
// }

// export default Mixcomponents;




import React from "react";
import { useConference } from "../contexts/ConferenceContext";
import { Link } from "react-router-dom";

function Mixcomponents() {
  const { data, loading, error } = useConference();

  if (loading) {
    return (
      <section className="max-w-[1400px] mx-auto px-6 py-16 pt-2">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#111]">
          PharmaTech 2026 SPEAKERS
        </h2>
        <div className="text-center">Loading speakers...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-[1400px] mx-auto px-6 py-16 pt-2">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#111]">
          PharmaTech 2026 SPEAKERS
        </h2>
        <div className="text-center text-red-500">Error loading speakers: {error}</div>
      </section>
    );
  }

  const speakers = data?.speakers?.map((speaker) => ({
    image: speaker.imagePath,
    alt: `${speaker.name} – ${speaker.speakerType} Speaker at PharmaTech 2026 | ${speaker.university}`,
    name: speaker.name,
    title: speaker.university,
    company: "",
    type: speaker.speakerType,
    slug: speaker.slug,
  })) || [];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16 pt-2">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center mb-12 text-[#111]">
        PharmaTech 2026 SPEAKERS
      </h2>

      {/* Speakers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {speakers.map((speaker, idx) => (


          <Link
  key={speaker.slug || idx}
  to={`/speakers/${speaker.slug}`}
  className="relative group overflow-hidden block cursor-pointer
             transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
>
  <img
    src={speaker.image}
    alt={speaker.alt}
    className="w-full h-[300px] object-cover
               transition-all duration-300 group-hover:scale-110 group-hover:grayscale"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

  {/* View profile indicator */}
  <div className="absolute inset-0 flex items-center justify-center 
                  opacity-0 group-hover:opacity-100 transition duration-300">
    <span className="bg-white/90 text-[#c9ab63] px-4 py-2 text-sm font-semibold">
      View Profile →
    </span>
  </div>

  <div className="absolute bottom-0 left-0 p-4 text-white">
    <h3 className="text-xl font-semibold leading-tight">{speaker.name}</h3>
    <p className="text-sm opacity-90">{speaker.title}</p>
    <p className="text-sm opacity-90">{speaker.type}</p>
  </div>
</Link>

        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-14">
        <a
          href="/speakers"
          className="inline-block text-white font-semibold tracking-wide px-8 py-4 text-sm  transition"
          style={{ backgroundImage: "linear-gradient(90deg, rgba(201, 170, 99, 0.99) 0%, rgba(201, 170, 99, 0.94) 39%, rgba(201, 170, 99, 0.77) 100%, rgba(201, 170, 99, 0.95) 65%)" }}
        >
          View All Speakers
        </a>


                  
      </div>

      
    </section>
  );
}

export default Mixcomponents;
