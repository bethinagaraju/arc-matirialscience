// // // // import React from 'react';
// // // // import { Presentation, Mic2, FileText, Zap, Wrench, Users, Trophy } from 'lucide-react';

// // // // const SessionTypesSection: React.FC = () => {
// // // //   return (
// // // //     <div className="py-16 px-6 lg:px-8 bg-white border-t border-gray-100">
// // // //       <div className="max-w-5xl mx-auto">
// // // //         <div className="text-center mb-12">
// // // //           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-4">
// // // //             <Presentation className="w-4 h-4" />
// // // //             <span>Conference Format</span>
// // // //           </div>
// // // //           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // // //             Explore <span className="text-indigo-600">Session Types</span>
// // // //           </h2>
// // // //           <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
// // // //             A dynamic blend of formats designed to maximize knowledge transfer and networking.
// // // //           </p>
// // // //         </div>

// // // //         {/* List Layout Implementation */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
// // // //           {[
// // // //             { name: "Keynote Talks", desc: "Insights from world-leading experts in AI & Robotics.", icon: Mic2 },
// // // //             { name: "Technical Papers", desc: "Full research papers with in-depth technical contributions.", icon: FileText },
// // // //             { name: "Poster Sessions", desc: "Fast innovation pitches and visual research communication.", icon: Zap },
// // // //             { name: "Hands-on Workshops", desc: "Skill-based learning guided by expert mentors.", icon: Wrench },
// // // //             { name: "Panel Discussions", desc: "Engaging debates on ethics, policy, and future trends.", icon: Users },
// // // //             { name: "Student Challenges", desc: "Competitions and awards encouraging emerging researchers.", icon: Trophy },
// // // //           ].map((item, idx) => {
// // // //             const IconComponent = item.icon;
// // // //             return (
// // // //               <div key={idx} className="flex gap-4 items-start">
// // // //                 {/* Icon Column */}
// // // //                 <div className="flex-shrink-0 mt-1">
// // // //                   <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
// // // //                     <IconComponent className="w-5 h-5" />
// // // //                   </div>
// // // //                 </div>
// // // //                 {/* Text Column */}
// // // //                 <div>
// // // //                   <h3 className="text-lg font-bold text-slate-900 mb-1">
// // // //                     {item.name}
// // // //                   </h3>
// // // //                   <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
// // // //                     {item.desc}
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             );
// // // //           })}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SessionTypesSection;


// // // import React from 'react';
// // // import { Presentation, Mic2, FileText, Zap, Wrench, Users, Trophy, ArrowRight } from 'lucide-react';

// // // const SessionTypesSection: React.FC = () => {
// // //   const sessionTypes = [
// // //     { name: "Keynote Talks", desc: "Insights from world-leading experts in AI & Robotics.", icon: Mic2 },
// // //     { name: "Technical Papers", desc: "Full research papers with in-depth technical contributions.", icon: FileText },
// // //     { name: "Poster Sessions", desc: "Fast innovation pitches and visual research communication.", icon: Zap },
// // //     { name: "Hands-on Workshops", desc: "Skill-based learning guided by expert mentors.", icon: Wrench },
// // //     { name: "Panel Discussions", desc: "Engaging debates on ethics, policy, and future trends.", icon: Users },
// // //     { name: "Student Challenges", desc: "Competitions and awards encouraging emerging researchers.", icon: Trophy },
// // //   ];

// // //   return (
// // //     <div className="py-16 px-6 lg:px-8 bg-white border-t border-gray-100">
// // //       <div className="max-w-5xl mx-auto">
        
// // //         {/* Header */}
// // //         <div className="text-center mb-12">
// // //           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm mb-4">
// // //             <Presentation className="w-4 h-4" />
// // //             <span>Conference Format</span>
// // //           </div>

// // //           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
// // //             Explore <span className="text-indigo-600">Session Types</span>
// // //           </h2>

// // //           <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
// // //             A dynamic blend of formats designed to maximize knowledge transfer and networking.
// // //           </p>
// // //         </div>

// // //         {/* Single Column List */}
// // //         <div className="space-y-6">
// // //           {sessionTypes.map((item, index) => {
// // //             const IconComponent = item.icon;
// // //             return (
// // //               <div
// // //                 key={index}
// // //                 className="group flex items-start gap-4 p-5 border border-gray-200 rounded-xl hover:shadow-lg hover:border-indigo-300 transition-all duration-300 bg-white"
// // //               >
// // //                 {/* Icon */}
// // //                 <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
// // //                   <IconComponent className="w-6 h-6" />
// // //                 </div>

// // //                 {/* Text */}
// // //                 <div className="flex-1">
// // //                   <h3 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
// // //                     {item.name}
// // //                   </h3>
// // //                   <p className="text-slate-600 mt-1 leading-relaxed">
// // //                     {item.desc}
// // //                   </p>
// // //                 </div>

// // //                 {/* Hover Arrow */}
// // //                 <ArrowRight className="w-5 h-5 text-indigo-500 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SessionTypesSection;


// // import React from "react";
// // import { Presentation, Mic2, FileText, Zap, Wrench, Users, Trophy } from "lucide-react";

// // const SessionTypesSection: React.FC = () => {
// //   const sessionTypes = [
// //     {
// //       name: "Keynote Talks",
// //       desc: "Inspirational talks delivered by globally recognized leaders in Artificial Intelligence, Robotics, Ethics, and Innovation, showcasing research breakthroughs and future directions.",
// //       icon: Mic2,
// //     },
// //     {
// //       name: "Technical Papers",
// //       desc: "Peer-reviewed original research contributions demonstrating methodologies, experimental validation, and frameworks that advance theoretical and applied AI and robotics.",
// //       icon: FileText,
// //     },
// //     {
// //       name: "Poster Sessions",
// //       desc: "A platform for researchers to present emerging ideas, ongoing experiments, and innovative prototypes in a visually interactive format that encourages direct discussion.",
// //       icon: Zap,
// //     },
// //     {
// //       name: "Hands-on Workshops",
// //       desc: "Practical interactive workshops focused on tools, frameworks, datasets, robotic platforms, and AI development workflows led by industry and academic experts.",
// //       icon: Wrench,
// //     },
// //     {
// //       name: "Panel Discussions",
// //       desc: "Expert-moderated conversation formats addressing ethical concerns, global adoption policies, research challenges, and the evolving human-AI ecosystem.",
// //       icon: Users,
// //     },
// //     {
// //       name: "Student Challenges",
// //       desc: "Competitive events that encourage young researchers and developers to innovate, collaborate, and showcase pioneering ideas through live challenges and awards.",
// //       icon: Trophy,
// //     },
// //   ];

// //   return (
// //     <div className="py-20 pb-0 px-6 lg:px-10 bg-white">
// //       <div className="max-w-5xl mx-auto">

// //         {/* Heading */}
// //         <div className="text-center mb-16">
// //           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium">
// //             <Presentation className="w-4 h-4" />
// //             <span>Conference Format</span>
// //           </div>

// //           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 text-slate-900">
// //             Explore <span className="text-indigo-600">Session Types</span>
// //           </h2>

// //           <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
// //             Each session is designed to foster learning, exchange perspectives, encourage networking,
// //             and create a high-value experience for researchers, industry professionals, and students.
// //           </p>
// //         </div>

// //         {/* Minimal List UI */}
// //         <div className="space-y-12">
// //           {sessionTypes.map((item, index) => {
// //             const Icon = item.icon;
// //             return (
// //               <div
// //                 key={index}
// //                 className="group flex gap-6 transition-all duration-300"
// //               >
// //                 <div className="mt-1">
// //                   <Icon className="w-8 h-8 text-indigo-600 group-hover:text-indigo-800 transition-colors duration-300" />
// //                 </div>

// //                 <div>
// //                   <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
// //                     {item.name}
// //                   </h3>
// //                   <p className="mt-3 text-slate-600 text-base leading-relaxed">
// //                     {item.desc}
// //                   </p>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default SessionTypesSection;


// import React from "react";
// import { Mic2, FileText, Zap, Wrench, Users, Trophy } from "lucide-react";

// const SessionTypesSection: React.FC = () => {
//   const sessionTypes = [
//     {
//       name: "Keynote Talks",
//       desc: "Inspirational talks by globally recognized leaders in AI, Robotics, Ethics, and Innovation, showcasing research breakthroughs and future directions.",
//       icon: Mic2,
//     },
//     {
//       name: "Technical Papers",
//       desc: "Peer-reviewed research contributions demonstrating methodologies, experimental validation, and frameworks that advance theoretical and applied AI and robotics.",
//       icon: FileText,
//     },
//     {
//       name: "Poster Sessions",
//       desc: "A platform to present emerging ideas, ongoing experiments, and innovative prototypes in a visually interactive format.",
//       icon: Zap,
//     },
//     {
//       name: "Hands-on Workshops",
//       desc: "Practical workshops focused on tools, datasets, robotic platforms, and AI development workflows led by experts.",
//       icon: Wrench,
//     },
//     {
//       name: "Panel Discussions",
//       desc: "Moderated conversations addressing ethics, policies, research challenges, and the evolving human-AI ecosystem.",
//       icon: Users,
//     },
//     {
//       name: "Student Challenges",
//       desc: "Competitive events encouraging young researchers to innovate, collaborate, and showcase pioneering ideas.",
//       icon: Trophy,
//     },
//   ];

//   return (
//     <section className="py-16 px-6 lg:px-20 bg-white">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
//           Explore <span className="text-indigo-600">Session Types</span>
//         </h2>
//         <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
//           Each session is designed to foster learning, exchange perspectives, encourage networking, and create a high-value experience for researchers, industry professionals, and students.
//         </p>
//       </div>

//       {/* Traditional Points List */}
//       <ol className="list-decimal list-inside space-y-6 max-w-4xl mx-auto text-slate-800">
//         {sessionTypes.map((item, index) => {
//           const Icon = item.icon;
//           return (
//             <li key={index} className="space-y-1">
//               <div className="flex items-start gap-3">
//                 <Icon className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
//                 <div>
//                   <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
//                   <p className="text-slate-700">{item.desc}</p>
//                 </div>
//               </div>
//             </li>
//           );
//         })}
//       </ol>
//     </section>
//   );
// };

// export default SessionTypesSection;


import React from "react";
import { Mic2, FileText, Zap, Wrench, Users, Trophy } from "lucide-react";

const SessionTypesSection: React.FC = () => {
  const sessionTypes = [
    {
      name: "Keynote Talks",
      desc: "Inspirational talks by globally recognized leaders in AI, Robotics, Ethics, and Innovation, showcasing research breakthroughs and future directions.",
      icon: Mic2,
    },
    {
      name: "Technical Papers",
      desc: "Peer-reviewed research contributions demonstrating methodologies, experimental validation, and frameworks that advance theoretical and applied AI and robotics.",
      icon: FileText,
    },
    {
      name: "Poster Sessions",
      desc: "A platform to present emerging ideas, ongoing experiments, and innovative prototypes in a visually interactive format.",
      icon: Zap,
    },
    {
      name: "Hands-on Workshops",
      desc: "Practical workshops focused on tools, datasets, robotic platforms, and AI development workflows led by experts.",
      icon: Wrench,
    },
    {
      name: "Panel Discussions",
      desc: "Moderated conversations addressing ethics, policies, research challenges, and the evolving human-AI ecosystem.",
      icon: Users,
    },
    {
      name: "Student Challenges",
      desc: "Competitive events encouraging young researchers to innovate, collaborate, and showcase pioneering ideas.",
      icon: Trophy,
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Explore <span className="text-indigo-600">Session Types</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          Each session is designed to foster learning, exchange perspectives, encourage networking, and create a high-value experience for researchers, industry professionals, and students.
        </p>
      </div>

      {/* Bulleted List */}
      <ul className="space-y-6 max-w-4xl mx-auto text-slate-800">
        {sessionTypes.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index} className="space-y-1">
              <div className="flex items-start gap-3">
                <Icon className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                  {/* <p className="text-slate-700">{item.desc}</p> */}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SessionTypesSection;
