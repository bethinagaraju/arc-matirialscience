// // // // import React from 'react';
// // // // import { Calendar, Layers, Wrench, Presentation, Users, Lightbulb, Trophy, MapPin } from 'lucide-react';

// // // // const ConferenceHighlights: React.FC = () => {
// // // //   const highlights = [
// // // //     {
// // // //       icon: <Calendar className="w-8 h-8" />,
// // // //       title: "3 Days of Keynotes & Technical Sessions",
// // // //       description: "Immerse yourself in inspiring keynotes and in-depth technical sessions over three full days.",
// // // //       bgColor: "bg-blue-100",
// // // //       textColor: "text-blue-600"
// // // //     },
// // // //     {
// // // //       icon: <Layers className="w-8 h-8" />,
// // // //       title: "8+ Technical Tracks",
// // // //       description: "Explore diverse tracks covering the latest advancements in AI, ML, and Robotics.",
// // // //       bgColor: "bg-green-100",
// // // //       textColor: "text-green-600"
// // // //     },
// // // //     {
// // // //       icon: <Wrench className="w-8 h-8" />,
// // // //       title: "Hands-on Industry Workshops",
// // // //       description: "Participate in practical workshops led by industry experts and practitioners.",
// // // //       bgColor: "bg-purple-100",
// // // //       textColor: "text-purple-600"
// // // //     },
// // // //     {
// // // //       icon: <Presentation className="w-8 h-8" />,
// // // //       title: "International Paper Presentations",
// // // //       description: "Witness cutting-edge research presentations from global contributors.",
// // // //       bgColor: "bg-orange-100",
// // // //       textColor: "text-orange-600"
// // // //     },
// // // //     {
// // // //       icon: <Users className="w-8 h-8" />,
// // // //       title: "Dedicated Networking Sessions",
// // // //       description: "Connect with peers, mentors, and industry leaders in structured networking events.",
// // // //       bgColor: "bg-red-100",
// // // //       textColor: "text-red-600"
// // // //     },
// // // //     {
// // // //       icon: <Lightbulb className="w-8 h-8" />,
// // // //       title: "Innovation & Research Showcase",
// // // //       description: "Discover groundbreaking innovations and research projects from leading institutions.",
// // // //       bgColor: "bg-teal-100",
// // // //       textColor: "text-teal-600"
// // // //     },
// // // //     {
// // // //       icon: <Trophy className="w-8 h-8" />,
// // // //       title: "Awards for Best Paper / Best Presentation",
// // // //       description: "Celebrate excellence with awards recognizing outstanding contributions.",
// // // //       bgColor: "bg-indigo-100",
// // // //       textColor: "text-indigo-600"
// // // //     },
// // // //     {
// // // //       icon: <MapPin className="w-8 h-8" />,
// // // //       title: "Exhibition & Demonstration Area",
// // // //       description: "Experience live demos and exhibitions showcasing the latest technologies.",
// // // //       bgColor: "bg-pink-100",
// // // //       textColor: "text-pink-600"
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div className="py-20 bg-white">
// // // //       <div className="container mx-auto px-6">
// // // //         <div className="text-center max-w-3xl mx-auto mb-16">
// // // //           <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Highlights</h2>
// // // //           <p className="text-gray-600 text-lg">
// // // //             Discover what makes PharmaTech 2026 an unparalleled experience in AI, Machine Learning, and Robotics.
// // // //           </p>
// // // //         </div>

// // // //         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
// // // //           {highlights.map((highlight, index) => (
// // // //             <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
// // // //               <div className={`w-16 h-16 ${highlight.bgColor} ${highlight.textColor} rounded-xl flex items-center justify-center mb-6`}>
// // // //                 {highlight.icon}
// // // //               </div>
// // // //               <h3 className="text-lg font-bold mb-3 text-gray-900">{highlight.title}</h3>
// // // //               <p className="text-gray-600 leading-relaxed text-sm">
// // // //                 {highlight.description}
// // // //               </p>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ConferenceHighlights;


// // // import React from 'react';
// // // import { Calendar, Layers, Wrench, Presentation, Users, Lightbulb, Trophy, MapPin } from 'lucide-react';

// // // const ConferenceHighlights: React.FC = () => {
// // //   const highlights = [
// // //     {
// // //       icon: Calendar,
// // //       title: "3 Days of Keynotes & Technical Sessions",
// // //       description: "Immerse yourself in inspiring keynotes and in-depth technical sessions over three full days."
// // //     },
// // //     {
// // //       icon: Layers,
// // //       title: "8+ Technical Tracks",
// // //       description: "Explore diverse tracks covering the latest advancements in AI, ML, and Robotics."
// // //     },
// // //     {
// // //       icon: Wrench,
// // //       title: "Hands-on Industry Workshops",
// // //       description: "Participate in practical workshops led by industry experts and practitioners."
// // //     },
// // //     {
// // //       icon: Presentation,
// // //       title: "International Paper Presentations",
// // //       description: "Witness cutting-edge research presentations from global contributors."
// // //     },
// // //     {
// // //       icon: Users,
// // //       title: "Dedicated Networking Sessions",
// // //       description: "Connect with peers, mentors, and industry leaders in structured networking events."
// // //     },
// // //     {
// // //       icon: Lightbulb,
// // //       title: "Innovation & Research Showcase",
// // //       description: "Discover groundbreaking innovations and research projects from leading institutions."
// // //     },
// // //     {
// // //       icon: Trophy,
// // //       title: "Awards for Best Paper / Best Presentation",
// // //       description: "Celebrate excellence with awards recognizing outstanding contributions."
// // //     },
// // //     {
// // //       icon: MapPin,
// // //       title: "Exhibition & Demonstration Area",
// // //       description: "Experience live demos and exhibitions showcasing the latest technologies."
// // //     }
// // //   ];

// // //   return (
// // //     <section className="py-24 bg-white">
// // //       <div className="container mx-auto px-6">
        
// // //         <div className="text-center max-w-3xl mx-auto mb-16">
// // //           <h2 className="text-5xl font-bold text-gray-900 mb-6">Conference Highlights</h2>
// // //           <p className="text-gray-600 text-xl leading-relaxed">
// // //             Experience the most anticipated global gathering in AI, Machine Learning, and Robotics.
// // //           </p>
// // //         </div>

// // //         <div className="space-y-14 max-w-5xl mx-auto">
// // //           {highlights.map((item, index) => {
// // //             const Icon = item.icon;
// // //             return (
// // //               <div
// // //                 key={index}
// // //                 className="flex gap-8 items-start hover:translate-x-2 transition-all duration-300"
// // //               >
// // //                 <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 text-indigo-600 shadow-sm">
// // //                   <Icon className="w-7 h-7" />
// // //                 </div>

// // //                 <div>
// // //                   <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">
// // //                     {item.title}
// // //                   </h3>
// // //                   <p className="text-gray-600 text-lg leading-relaxed">
// // //                     {item.description}
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

// // // export default ConferenceHighlights;



// // import React from 'react';
// // import { Calendar, Layers, Wrench, Presentation, Users, Lightbulb, Trophy, MapPin } from 'lucide-react';

// // const ConferenceHighlights: React.FC = () => {
// //   // const highlights = [
// //   //   {
// //   //     icon: Calendar,
// //   //     title: "3 Days of Keynotes & Technical Sessions",
// //   //     description: "Immerse yourself in inspiring keynotes and in-depth technical sessions over three full days."
// //   //   },
// //   //   {
// //   //     icon: Layers,
// //   //     title: "8+ Technical Tracks",
// //   //     description: "Explore diverse tracks covering the latest advancements in AI, ML, and Robotics."
// //   //   },
// //   //   {
// //   //     icon: Wrench,
// //   //     title: "Hands-on Industry Workshops",
// //   //     description: "Participate in practical workshops led by industry experts and practitioners."
// //   //   },
// //   //   {
// //   //     icon: Presentation,
// //   //     title: "International Paper Presentations",
// //   //     description: "Witness cutting-edge research presentations from global contributors."
// //   //   },
// //   //   {
// //   //     icon: Users,
// //   //     title: "Dedicated Networking Sessions",
// //   //     description: "Connect with peers, mentors, and industry leaders in structured networking events."
// //   //   },
// //   //   {
// //   //     icon: Lightbulb,
// //   //     title: "Innovation & Research Showcase",
// //   //     description: "Discover groundbreaking innovations and research projects from leading institutions."
// //   //   },
// //   //   {
// //   //     icon: Trophy,
// //   //     title: "Awards for Best Paper / Best Presentation",
// //   //     description: "Celebrate excellence with awards recognizing outstanding contributions."
// //   //   },
// //   //   {
// //   //     icon: MapPin,
// //   //     title: "Exhibition & Demonstration Area",
// //   //     description: "Experience live demos and exhibitions showcasing the latest technologies."
// //   //   }
// //   // ];

// // const highlights = [
// //   {
// //     icon: Calendar,
// //     title: "3 Days of Keynotes & Technical Sessions",
// //     description:
// //       "Experience an immersive three-day journey featuring keynote speeches from globally recognized pioneers, expert-led sessions, and deep technical discussions designed to broaden your knowledge and spark innovation."
// //   },
// //   {
// //     icon: Layers,
// //     title: "8+ Technical Tracks",
// //     description:
// //       "Delve into multiple specialized domains with structured tracks covering AI, Machine Learning, Robotics, Computer Vision, Natural Language Processing, Automation, and Industry 4.0 technologies."
// //   },
// //   {
// //     icon: Wrench,
// //     title: "Hands-on Industry Workshops",
// //     description:
// //       "Engage in practical, instructor-guided workshops designed to help participants experiment with tools, frameworks, and real-world case studies used across the AI and robotics ecosystem."
// //   },
// //   {
// //     icon: Presentation,
// //     title: "International Paper Presentations",
// //     description:
// //       "Explore cutting-edge research contributed by scientists, PhD scholars, innovators, and technologists from leading institutions across the world, presented in an organized and peer-reviewed format."
// //   },
// //   {
// //     icon: Users,
// //     title: "Dedicated Networking Sessions",
// //     description:
// //       "Build valuable professional connections through structured networking hours, meet-and-greet sessions, panel interactions, and community engagement activities curated to foster collaboration."
// //   },
// //   {
// //     icon: Lightbulb,
// //     title: "Innovation & Research Showcase",
// //     description:
// //       "Discover breakthrough projects, prototypes, and technology demonstrations that highlight emerging trends, transformative research, and next-generation solutions in intelligent systems."
// //   },
// //   {
// //     icon: Trophy,
// //     title: "Awards for Best Paper / Best Presentation",
// //     description:
// //       "Recognize and celebrate outstanding contributions through prestigious awards honoring exceptional research excellence, impactful presentation delivery, and visionary technological advancements."
// //   },
// //   {
// //     icon: MapPin,
// //     title: "Exhibition & Demonstration Area",
// //     description:
// //       "Explore an interactive exhibition zone featuring live demos, product previews, startup innovations, research displays, and hands-on experiences showcasing the future of automation and AI."
// //   }
// // ];


// //   return (
// //     <section className="py-24 bg-white">
// //       <div className="container mx-auto px-6">
        
// //         <div className="text-center max-w-3xl mx-auto mb-16">
// //           <h2 className="text-5xl font-bold text-gray-900 mb-6">Conference Highlights</h2>
// //           <p className="text-gray-600 text-xl leading-relaxed">
// //             Experience the most anticipated global gathering in AI, Machine Learning, and Robotics.
// //           </p>
// //         </div>

// //         <div className="space-y-14 max-w-5xl mx-auto">
// //           {highlights.map((item, index) => {
// //             const Icon = item.icon;
// //             return (
// //               <div
// //                 key={index}
// //                 className="flex gap-8 items-start hover:translate-x-2 transition-all duration-300"
// //               >
// //                 <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-100 text-indigo-600 shadow-sm">
// //                   <Icon className="w-7 h-7" />
// //                 </div>

// //                 <div>
// //                   <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
// //                     {item.title}
// //                   </h3>
// //                   <p className="text-gray-700 text-base leading-relaxed">
// //                     {item.description}
// //                   </p>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default ConferenceHighlights;

// import React from 'react';
// import { 
//   Calendar, Layers, Wrench, Presentation, 
//   Users, Lightbulb, Trophy, MapPin, CheckCircle2 
// } from 'lucide-react';

// const ConferenceHighlights: React.FC = () => {
//   const highlights = [
//     {
//       icon: Calendar,
//       title: "3 Days of Keynotes & Technical Sessions",
//       description: "Experience an immersive three-day journey featuring keynote speeches from globally recognized pioneers, expert-led sessions, and deep technical discussions."
//     },
//     {
//       icon: Layers,
//       title: "8+ Technical Tracks",
//       description: "Delve into multiple specialized domains with structured tracks covering AI, Machine Learning, Robotics, Computer Vision, and Industry 4.0 technologies."
//     },
//     {
//       icon: Wrench,
//       title: "Hands-on Industry Workshops",
//       description: "Engage in practical, instructor-guided workshops designed to help participants experiment with tools, frameworks, and real-world case studies."
//     },
//     {
//       icon: Presentation,
//       title: "International Paper Presentations",
//       description: "Explore cutting-edge research contributed by scientists, PhD scholars, and innovators from leading institutions, presented in a peer-reviewed format."
//     },
//     {
//       icon: Users,
//       title: "Dedicated Networking Sessions",
//       description: "Build valuable professional connections through structured networking hours, meet-and-greet sessions, and community engagement activities."
//     },
//     {
//       icon: Lightbulb,
//       title: "Innovation & Research Showcase",
//       description: "Discover breakthrough projects, prototypes, and technology demonstrations that highlight emerging trends and transformative research."
//     },
//     {
//       icon: Trophy,
//       title: "Awards for Excellence",
//       description: "Celebrate outstanding contributions through prestigious awards honoring exceptional research excellence and visionary technological advancements."
//     },
//     {
//       icon: MapPin,
//       title: "Exhibition & Demonstration Area",
//       description: "Explore an interactive exhibition zone featuring live demos, product previews, startup innovations, and hands-on experiences."
//     }
//   ];

//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-6 max-w-4xl">
        
//         {/* Section Header */}
//         <div className="mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//             Why Attend?
//           </h2>
//           <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
//         </div>

//         {/* The List Container */}
//         <div className="relative space-y-0">
          
//           {/* The Vertical Connecting Line (The Thread) */}
//           {/* We position it absolutely to sit behind the items */}
//           <div className="absolute left-[28px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-slate-200 via-slate-200 to-transparent hidden md:block"></div>

//           {highlights.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <div 
//                 key={index} 
//                 className="group relative flex flex-col md:flex-row gap-6 md:gap-10 pb-12 last:pb-0"
//               >
                
//                 {/* Icon Column */}
//                 <div className="flex-shrink-0 relative">
//                   {/* The Icon Bubble */}
//                   <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-100 group-hover:border-indigo-100 shadow-sm flex items-center justify-center relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
//                     <Icon className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 transition-colors duration-300" />
//                   </div>
                  
//                   {/* Mobile Connector Line (Only visible on small screens) */}
//                   {index !== highlights.length - 1 && (
//                      <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-slate-200 md:hidden"></div>
//                   )}
//                 </div>

//                 {/* Text Content Column */}
//                 <div className="flex-1 pt-1 md:pt-2">
//                   <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2 group-hover:text-indigo-700 transition-colors duration-300">
//                     {item.title}
//                     {/* Subtle checkmark appearing on hover */}
//                     <CheckCircle2 className="w-4 h-4 text-indigo-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//                   </h3>
//                   <p className="text-slate-600 text-base md:text-lg leading-relaxed border-l-2 border-transparent pl-0 group-hover:border-indigo-100 group-hover:pl-4 transition-all duration-300 ease-out">
//                     {item.description}
//                   </p>
//                 </div>

//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConferenceHighlights;










import React from 'react';
import {
  Calendar,
  Wrench,
  Presentation,
  Users,
  MapPin,
  Lightbulb,
  Trophy,
  CheckCircle2
} from 'lucide-react';

const ConferenceHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "3 Days of Robotics & AI Sessions",
      description: "A focused, three‑day program featuring technical talks, system-level discussions, and practical insights from engineers, researchers, and robotics practitioners."
    },
    {
      icon: Wrench,
      title: "Hands‑On Engineering Workshops",
      description: "Learn and experiment with robotics toolchains, control systems, simulation tools, ML pipelines, and embedded AI platforms in instructor‑guided workshops."
    },
    {
      icon: Presentation,
      title: "Peer‑Reviewed Research Presentations",
      description: "Explore current advancements in manipulation, autonomy, perception, reinforcement learning, and robotic intelligence presented by researchers and academic groups."
    },
    {
      icon: Users,
      title: "Technical Networking Opportunities",
      description: "Connect with robotics engineers, AI researchers, industry professionals, academia, and startups working on automation, AI systems, and next‑gen robotics."
    },
    {
      icon: MapPin,
      title: "Career & Collaboration Opportunities",
      description: "Find research partnerships, open roles, internships, and industry programs designed for students, researchers, and early‑stage engineers."
    },
    {
      icon: Trophy,
      title: "Recognition & Contribution",
      description: "Selected contributors, research teams, and project leads will be acknowledged for impactful work that advances robotics, AI, and applied automation."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Attend?
          </h2>
          <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
        </div>

        {/* Highlights List */}
        <div className="relative space-y-0">

          {/* Vertical Line */}
          <div className="absolute left-[28px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-slate-200 to-transparent hidden md:block"></div>

          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col md:flex-row gap-6 md:gap-10 pb-12 last:pb-0"
              >
                
                {/* Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-100 group-hover:border-indigo-200 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:scale-110">
                    <Icon className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 transition-colors duration-300" />
                  </div>

                  {/* Mobile Connector */}
                  {index !== highlights.length - 1 && (
                    <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-slate-200 md:hidden"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 md:pt-2">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2 transition-colors duration-300 group-hover:text-indigo-700">
                    {item.title}
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed border-l-2 border-transparent pl-0 group-hover:border-indigo-100 group-hover:pl-4 transition-all duration-300">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConferenceHighlights;
