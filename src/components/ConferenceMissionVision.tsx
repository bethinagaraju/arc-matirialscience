// // // // // import React from 'react';
// // // // // import { Target, Globe, Star, Users } from 'lucide-react';

// // // // // const ConferenceMissionVision: React.FC = () => {
// // // // //   return (
// // // // //     <section className="py-16 px-4 lg:px-28 bg-white">
// // // // //       <div className="container mx-auto max-w-6xl">
// // // // //         <div className="text-center mb-10">
// // // // //           <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}>
// // // // //             Our Mission & Vision
// // // // //           </h2>
// // // // //           <p className="text-gray-600 max-w-2xl mx-auto mt-3">
// // // // //             Advancing research and collaboration at the intersection of Artificial Intelligence, Machine Learning, and Robotics to build safer, fairer, and more impactful technologies for society.
// // // // //           </p>
// // // // //         </div>

// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // // // //           <div className="bg-indigo-50 rounded-2xl p-6 shadow-sm border border-indigo-100">
// // // // //             <div className="flex items-start gap-4">
// // // // //               <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center">
// // // // //                 <Target className="w-6 h-6" />
// // // // //               </div>
// // // // //               <div>
// // // // //                 <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
// // // // //                 <p className="text-gray-600 mt-2">
// // // // //                   Foster interdisciplinary exchange and promote ethical, reproducible research that accelerates real-world AI and robotics solutions across industries.
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="bg-indigo-50 rounded-2xl p-6 shadow-sm border border-indigo-100">
// // // // //             <div className="flex items-start gap-4">
// // // // //               <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center">
// // // // //                 <Globe className="w-6 h-6" />
// // // // //               </div>
// // // // //               <div>
// // // // //                 <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
// // // // //                 <p className="text-gray-600 mt-2">
// // // // //                   Build a global, inclusive community where human-centered AI and robotics research responsibly improves quality of life and drives sustainable innovation.
// // // // //                 </p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
// // // // //           <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
// // // // //             <div className="mx-auto w-12 h-12 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center mb-3">
// // // // //               <Star className="w-5 h-5" />
// // // // //             </div>
// // // // //             <h4 className="font-semibold">Excellence</h4>
// // // // //             <p className="text-sm text-gray-500 mt-1">High-quality, peer-reviewed research and reproducible methods.</p>
// // // // //           </div>

// // // // //           <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
// // // // //             <div className="mx-auto w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-3">
// // // // //               <Users className="w-5 h-5" />
// // // // //             </div>
// // // // //             <h4 className="font-semibold">Collaboration</h4>
// // // // //             <p className="text-sm text-gray-500 mt-1">Cross-disciplinary partnerships to translate ideas into impact.</p>
// // // // //           </div>

// // // // //           <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
// // // // //             <div className="mx-auto w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-3">
// // // // //               <Globe className="w-5 h-5" />
// // // // //             </div>
// // // // //             <h4 className="font-semibold">Global Reach</h4>
// // // // //             <p className="text-sm text-gray-500 mt-1">Inclusive participation from researchers and practitioners worldwide.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default ConferenceMissionVision;




// // // // import React from "react";
// // // // import { Target, Globe, Star, Users, Earth, CheckCircle2 } from "lucide-react";

// // // // const ConferenceMissionVision: React.FC = () => {

// // // // const items = [
// // // //   {
// // // //     title: "Mission",
// // // //     icon: Target,
// // // //     desc: "Our mission is to foster interdisciplinary collaboration and accelerate responsible innovation in AI and Robotics. We aim to empower researchers, practitioners, and learners by enabling open scientific exchange, supporting reproducible research, and advancing real-world applications that positively impact society.",
// // // //     tags: ["Research", "Ethics", "Innovation"],
// // // //   },
// // // //   {
// // // //     title: "Vision",
// // // //     icon: Globe,
// // // //     desc: "Our vision is to build a globally connected, inclusive AI and robotics community — one where knowledge flows openly, technology remains human-centric, and advancements contribute to safety, sustainability, and equitable global growth across borders and generations.",
// // // //     tags: ["Global Impact", "Inclusivity", "Future Tech"],
// // // //   },
// // // //   {
// // // //     title: "Excellence",
// // // //     icon: Star,
// // // //     desc: "We commit to the highest standards of scientific quality, research integrity, and impactful contributions. Excellence drives our review processes, presentations, and the advancements shared through this platform.",
// // // //     tags: ["Quality", "Integrity", "Impact"],
// // // //   },
// // // //   {
// // // //     title: "Collaboration",
// // // //     icon: Users,
// // // //     desc: "We believe true innovation happens when diverse minds connect. AIMLR brings together academia, industry, and research communities to foster interdisciplinary exchange, teamwork, and long-term partnerships.",
// // // //     tags: ["Teamwork", "Networking", "Community"],
// // // //   },
// // // //   {
// // // //     title: "Global Reach",
// // // //     icon: Earth,
// // // //     desc: "We encourage worldwide participation and promote equal access to knowledge. Our platform connects researchers, innovators, and organizations globally to ensure that breakthroughs benefit all, not just a select few.",
// // // //     tags: ["Accessibility", "Diversity", "Knowledge Sharing"],
// // // //   },
// // // // ];





// // // //   return (
// // // //     // <section className="py-20 bg-white">
// // // //       <div className="container mx-auto px-6 max-w-5xl">

// // // //         {/* Header */}
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
// // // //             Our Mission & Vision
// // // //           </h2>
// // // //           <div className="h-1 w-20 mx-auto bg-indigo-600 rounded-full"></div>
// // // //           <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
// // // //             Advancing the future of Artificial Intelligence, Machine Learning, and Robotics to create a safer, smarter, and more equitable world.
// // // //           </p>
// // // //         </div>

// // // //         {/* TIMELINE STYLE (Matching Key Topics UI) */}
// // // //         <div className="relative space-y-0 mb-20">
// // // //           {/* Central line */}
// // // //           <div className="absolute left-[30px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-slate-200 to-transparent hidden md:block"></div>

// // // //           {items.map((item, index) => {
// // // //             const Icon = item.icon;
// // // //             return (
// // // //               <div key={index} className="group relative flex flex-col md:flex-row gap-6 pb-14 last:pb-4">

// // // //                 {/* Icon Circle */}
// // // //                 <div className="flex-shrink-0 relative">
// // // //                   <div className="w-14 h-14 border-2 border-slate-100 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-110 transition-all duration-300">
// // // //                     <Icon className="w-7 h-7 text-indigo-600" />
// // // //                   </div>

// // // //                   {/* connector line for mobile */}
// // // //                   {index !== items.length - 1 && (
// // // //                     <div className="absolute left-[27px] top-14 bottom-0 w-[2px] bg-slate-200 md:hidden"></div>
// // // //                   )}
// // // //                 </div>

// // // //                 {/* Content */}
// // // //                 <div className="flex-1">
// // // //                   <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-2 group-hover:text-indigo-700 transition-colors">
// // // //                     {item.title}
// // // //                     <CheckCircle2 className="w-4 h-4 text-indigo-600 opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
// // // //                   </h3>

// // // //                   <div className="flex gap-2 flex-wrap mb-2">
// // // //                     {item.tags.map((tag, i) => (
// // // //                       <span key={i} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full border border-indigo-200">
// // // //                         {tag}
// // // //                       </span>
// // // //                     ))}
// // // //                   </div>

// // // //                   <p className="text-slate-600 leading-relaxed border-l-2 border-transparent pl-0 group-hover:border-indigo-100 group-hover:pl-4 transition-all">
// // // //                     {item.desc}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             );
// // // //           })}
// // // //         </div>



// // // //       </div>
// // // //     // </section>
// // // //   );
// // // // };

// // // // export default ConferenceMissionVision;



// // // import React from "react";
// // // import { Target, Globe, Star, Users, Earth } from "lucide-react";

// // // const ConferenceMissionVision: React.FC = () => {
// // //   const items = [
// // //     {
// // //       title: "Mission",
// // //       icon: Target,
// // //       desc:
// // //         "Our mission is to foster interdisciplinary collaboration and accelerate responsible innovation in AI and Robotics. We aim to empower researchers, practitioners, and learners by enabling open scientific exchange, supporting reproducible research, and advancing real-world applications that positively impact society.",
// // //       tags: ["Research", "Ethics", "Innovation"],
// // //     },
// // //     {
// // //       title: "Vision",
// // //       icon: Globe,
// // //       desc:
// // //         "Our vision is to build a globally connected, inclusive AI and robotics community — one where knowledge flows openly, technology remains human-centric, and advancements contribute to sustainability, safety, and equitable growth across borders and generations.",
// // //       tags: ["Global Impact", "Inclusivity", "Future Tech"],
// // //     },
// // //     {
// // //       title: "Excellence",
// // //       icon: Star,
// // //       desc:
// // //         "We commit to the highest standards of scientific rigor, research integrity, and impactful outcomes. Excellence drives our review processes, presentations, and platform values.",
// // //       tags: ["Quality", "Integrity", "Impact"],
// // //     },
// // //     {
// // //       title: "Collaboration",
// // //       icon: Users,
// // //       desc:
// // //         "We believe real innovation emerges through shared knowledge. AIMLR connects academia, industry, and research communities to foster interdisciplinary exchange, partnerships, and meaningful collaboration.",
// // //       tags: ["Teamwork", "Networking", "Community"],
// // //     },
// // //     {
// // //       title: "Global Reach",
// // //       icon: Earth,
// // //       desc:
// // //         "AIMLR welcomes participation from every region and encourages equal access to knowledge. Our platform ensures that groundbreaking discoveries are shared with the world, not limited by geography.",
// // //       tags: ["Accessibility", "Diversity", "Knowledge Sharing"],
// // //     },
// // //   ];

// // //   return (
// // //     <section className="py-20 bg-white">
// // //       <div className="container mx-auto px-6 max-w-5xl">
        
// // //         {/* Header */}
// // //         <div className="text-center mb-14">
// // //           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
// // //             Mission, Vision & Values
// // //           </h2>
// // //           <p className="text-slate-600 text-lg max-w-2xl mx-auto">
// // //             A commitment to advancing AI and Robotics with purpose, integrity, and global collaboration.
// // //           </p>
// // //         </div>

// // //         {/* List Layout */}
// // //         <div className="space-y-12">
// // //           {items.map((item, index) => {
// // //             const Icon = item.icon;
// // //             return (
// // //               <div key={index} className="flex items-start gap-6">
// // //                 {/* Icon */}
// // //                 <div className="mt-1">
// // //                   <Icon className="w-7 h-7 text-indigo-600" />
// // //                 </div>

// // //                 {/* Content */}
// // //                 <div>
// // //                   <h3 className="text-xl font-semibold text-slate-900 mb-2">
// // //                     {item.title}
// // //                   </h3>

// // //                   {/* Tags */}
// // //                   <div className="flex flex-wrap gap-2 mb-3">
// // //                     {item.tags.map((tag, i) => (
// // //                       <span
// // //                         key={i}
// // //                         className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full border border-indigo-200"
// // //                       >
// // //                         {tag}
// // //                       </span>
// // //                     ))}
// // //                   </div>

// // //                   {/* Description */}
// // //                   <p className="text-slate-600 leading-relaxed text-[17px]">
// // //                     {item.desc}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ConferenceMissionVision;



// // import React from "react";
// // import { Globe, Star, Users, Earth } from "lucide-react";

// // const ConferenceMissionVisionList: React.FC = () => {
// //   const items = [
// //     {
// //       title: "Vision",
// //       icon: Globe,
// //       desc:
// //         "Our vision is to build a globally connected, inclusive AI and robotics community — one where knowledge flows openly, technology remains human-centric, and advancements contribute to sustainability, safety, and equitable growth across borders and generations.",
// //       tags: ["Global Impact", "Inclusivity", "Future Tech"],
// //     },
// //     {
// //       title: "Excellence",
// //       icon: Star,
// //       desc:
// //         "We commit to the highest standards of scientific rigor, research integrity, and impactful outcomes. Excellence drives our review processes, presentations, and platform values.",
// //       tags: ["Quality", "Integrity", "Impact"],
// //     },
// //     {
// //       title: "Collaboration",
// //       icon: Users,
// //       desc:
// //         "We believe real innovation emerges through shared knowledge. AIMLR connects academia, industry, and research communities to foster interdisciplinary exchange, partnerships, and meaningful collaboration.",
// //       tags: ["Teamwork", "Networking", "Community"],
// //     },
// //     {
// //       title: "Global Reach",
// //       icon: Earth,
// //       desc:
// //         "AIMLR welcomes participation from every region and encourages equal access to knowledge. Our platform ensures that groundbreaking discoveries are shared with the world, not limited by geography.",
// //       tags: ["Accessibility", "Diversity", "Knowledge Sharing"],
// //     },
// //   ];

// //   return (
// //     <section className="py-12 bg-white">
// //       <div className="container mx-auto px-6 max-w-5xl">
// //         <ul className="list-disc list-inside space-y-6 text-slate-700 text-[17px]">
// //           {items.map((item, index) => (
// //             <li key={index}>
// //               <span className="font-semibold">{item.title}:</span> {item.desc}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ConferenceMissionVisionList;



// import React from "react";
// import { Target, Globe, Star, Users, Earth } from "lucide-react";

// const ConferenceMissionVisionList: React.FC = () => {
//   const items = [
//     {
//       title: "Vision",
//       icon: Globe,
//       desc:
//         "Our vision is to build a globally connected, inclusive AI and robotics community — one where knowledge flows openly, technology remains human-centric, and advancements contribute to sustainability, safety, and equitable growth across borders and generations.",
//     },
//     {
//       title: "Excellence",
//       icon: Star,
//       desc:
//         "We commit to the highest standards of scientific rigor, research integrity, and impactful outcomes. Excellence drives our review processes, presentations, and platform values.",
//     },
//     {
//       title: "Collaboration",
//       icon: Users,
//       desc:
//         "We believe real innovation emerges through shared knowledge. AIMLR connects academia, industry, and research communities to foster interdisciplinary exchange, partnerships, and meaningful collaboration.",
//     },
//     {
//       title: "Global Reach",
//       icon: Earth,
//       desc:
//         "AIMLR welcomes participation from every region and encourages equal access to knowledge. Our platform ensures that groundbreaking discoveries are shared with the world, not limited by geography.",
//     },
//   ];

//   return (
//     <section className="py-6 bg-white">
//       <div className="container mx-auto px-6 max-w-5xl">
        
//         {/* Heading with Icon */}
//         <div className="flex items-center mb-8">
//           <Target className="w-8 h-8 text-indigo-600 mr-3" />
//           <h2 className="text-3xl font-bold text-slate-900">
//             Mission, Vision & Values
//           </h2>
//         </div>

//         {/* List */}
//         <ul className="list-disc list-inside space-y-6 text-slate-700 text-[17px]">
//           {items.map((item, index) => (
//             <li key={index}>
//               <span className="font-semibold">{item.title}:</span> {item.desc}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default ConferenceMissionVisionList;











import React from "react";
import { Target, Globe, Star, Users, Earth } from "lucide-react";

const ConferenceMissionVisionList: React.FC = () => {
  const items = [
    {
      title: "Mission",
      icon: Target,
      desc:
        "To create a platform for sharing knowledge, research, and innovative ideas among researchers, academicians, and industry experts.",
    },
    {
      title: "Vision",
      icon: Globe,
      desc:
        "To be a trusted global conference that supports research excellence, innovation, and collaboration.",
    },
  ];

  const values = [
    "Quality and integrity in research",
    "Collaboration and knowledge sharing",
    "Innovation and practical impact",
    "Inclusivity and global participation",
  ];

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Heading */}
        <div className="flex items-center mb-8">
          <Target className="w-8 h-8 text-indigo-600 mr-3" />
          <h2 className="text-3xl font-bold text-slate-900">
            Mission, Vision & Values
          </h2>
        </div>

        {/* Mission & Vision */}
        <ul className="list-disc list-inside space-y-6 text-slate-700 text-[17px] mb-8">
          {items.map((item, index) => (
            <li key={index}>
              <span className="font-semibold">{item.title}:</span>{" "}
              {item.desc}
            </li>
          ))}
        </ul>

        {/* Values */}
        <div>
          <div className="flex items-center mb-4">
            <Star className="w-6 h-6 text-indigo-600 mr-2" />
            <h3 className="text-xl font-semibold text-slate-900">Values</h3>
          </div>

          <ul className="list-disc list-inside space-y-2 text-slate-700 text-[17px]">
            {values.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ConferenceMissionVisionList;
