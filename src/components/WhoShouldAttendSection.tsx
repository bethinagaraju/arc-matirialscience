// // // import React from 'react';
// // // import { Users, Bot, BrainCircuit, ShieldCheck, HeartPulse, TrendingUp } from 'lucide-react';

// // // const WhoShouldAttendSection: React.FC = () => {
// // //   return (
// // //     <div className="py-20 bg-white">
// // //       <div className="container mx-auto px-6">
// // //         <div className="text-center max-w-3xl mx-auto mb-16">
// // //           <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Attend?</h2>
// // //           <p className="text-gray-600">This conference brings together professionals from diverse backgrounds united by their passion for AI and robotics innovation.</p>
// // //         </div>

// // //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //           {/* Attendee Type 1 */}
// // //           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
// // //             <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
// // //               <Users className="w-6 h-6" />
// // //             </div>
// // //             <h3 className="text-xl font-bold mb-3 text-gray-900">Researchers & Academics</h3>
// // //             <p className="text-gray-600 leading-relaxed">
// // //               Professors, research scientists, and PhD candidates working on cutting-edge AI and robotics research projects.
// // //             </p>
// // //           </div>

// // //           {/* Attendee Type 2 */}
// // //           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
// // //             <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
// // //               <Bot className="w-6 h-6" />
// // //             </div>
// // //             <h3 className="text-xl font-bold mb-3 text-gray-900">Industry Professionals</h3>
// // //             <p className="text-gray-600 leading-relaxed">
// // //               Engineers, developers, product managers, and executives from tech companies driving AI and robotics innovation.
// // //             </p>
// // //           </div>

// // //           {/* Attendee Type 3 */}
// // //           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
// // //             <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
// // //               <BrainCircuit className="w-6 h-6" />
// // //             </div>
// // //             <h3 className="text-xl font-bold mb-3 text-gray-900">Students & Startups</h3>
// // //             <p className="text-gray-600 leading-relaxed">
// // //               Undergraduate and graduate students, as well as entrepreneurs building the next generation of AI startups.
// // //             </p>
// // //           </div>

// // //           {/* Attendee Type 4 */}
// // //           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
// // //             <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
// // //               <ShieldCheck className="w-6 h-6" />
// // //             </div>
// // //             <h3 className="text-xl font-bold mb-3 text-gray-900">Policy Makers & Regulators</h3>
// // //             <p className="text-gray-600 leading-relaxed">
// // //               Government officials, policy advisors, and regulatory experts shaping the future of AI governance and ethics.
// // //             </p>
// // //           </div>

// // //           {/* Attendee Type 5 */}
// // //           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
// // //             <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
// // //               <HeartPulse className="w-6 h-6" />
// // //             </div>
// // //             <h3 className="text-xl font-bold mb-3 text-gray-900">Healthcare Innovators</h3>
// // //             <p className="text-gray-600 leading-relaxed">
// // //               Medical professionals, healthcare administrators, and biotech entrepreneurs exploring AI applications in healthcare.
// // //             </p>
// // //           </div>

// // //           {/* Attendee Type 6 */}
// // //           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
// // //             <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4">
// // //               <TrendingUp className="w-6 h-6" />
// // //             </div>
// // //             <h3 className="text-xl font-bold mb-3 text-gray-900">Investors & Venture Capitalists</h3>
// // //             <p className="text-gray-600 leading-relaxed">
// // //               Angel investors, VCs, and financial experts seeking the next breakthrough opportunities in AI and robotics.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default WhoShouldAttendSection;


// // import React from 'react';
// // import { 
// //   GraduationCap, 
// //   School, 
// //   Bot, 
// //   BrainCircuit, 
// //   Briefcase, 
// //   Rocket 
// // } from 'lucide-react';

// // const WhoShouldAttendSection = () => {
// //   const attendees = [
// //     {
// //       title: "Faculty & Professors",
// //       description: "Academic leaders and educators shaping the curriculum and guiding future research in intelligence systems.",
// //       icon: GraduationCap,
// //       color: "bg-blue-100 text-blue-600"
// //     },
// //     {
// //       title: "PhD, Master’s & Bachelor’s",
// //       description: "Scholars and students at all levels looking to present their work, network, and learn from global experts.",
// //       icon: School,
// //       color: "bg-indigo-100 text-indigo-600"
// //     },
// //     {
// //       title: "Robotics Engineers",
// //       description: "Hardware and software engineers building the physical infrastructure of the next generation of automation.",
// //       icon: Bot,
// //       color: "bg-orange-100 text-orange-600"
// //     },
// //     {
// //       title: "AI Researchers & Data Scientists",
// //       description: "Innovators working on algorithms, machine learning models, and data-driven decision systems.",
// //       icon: BrainCircuit,
// //       color: "bg-purple-100 text-purple-600"
// //     },
// //     {
// //       title: "CTOs & CIOs",
// //       description: "Technical executives responsible for high-level strategy and implementing AI solutions in enterprise.",
// //       icon: Briefcase,
// //       color: "bg-red-100 text-red-600"
// //     },
// //     {
// //       title: "Founders & Practitioners",
// //       description: "Startup founders and industry professionals applying AI and robotics to solve real-world problems.",
// //       icon: Rocket,
// //       color: "bg-teal-100 text-teal-600"
// //     }
// //   ];

// //   return (
// //     <div className="py-20 bg-white">
// //       <div className="container mx-auto px-6">
// //         <div className="text-center max-w-3xl mx-auto mb-16">
// //           <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Attend?</h2>
// //           <p className="text-gray-600">
// //             Whether you are in academia, industry, or leadership, this conference offers value for every stage of your career.
// //           </p>
// //         </div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {attendees.map((item, index) => (
// //             <div 
// //               key={index} 
// //               className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
// //             >
// //               <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
// //                 <item.icon className="w-6 h-6" />
// //               </div>
// //               <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
// //               <p className="text-gray-600 leading-relaxed text-sm">
// //                 {item.description}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default WhoShouldAttendSection;



// import React from "react";
// import {
//   GraduationCap,
//   School,
//   Bot,
//   BrainCircuit,
//   Briefcase,
//   Rocket,
//   CheckCircle2,
// } from "lucide-react";

// const WhoShouldAttendSection: React.FC = () => {
//   const attendees = [
//     {
//       title: "Faculty & Professors",
//       description:
//         "Educators and academic leaders guiding future research directions, shaping course development, and driving innovation in artificial intelligence, machine learning, and robotics.",
//       icon: GraduationCap,
//     },
//     {
//       title: "PhD, Master’s & Bachelor’s Students",
//       description:
//         "Learners and emerging researchers looking to strengthen their knowledge, present their work, publish research papers, and engage with the global scientific community.",
//       icon: School,
//     },
//     {
//       title: "Robotics Engineers",
//       description:
//         "Professionals designing, building, and optimizing robotic systems, simulation-based testing, autonomous systems, and robotics-based infrastructure.",
//       icon: Bot,
//     },
//     {
//       title: "AI Researchers & Data Scientists",
//       description:
//         "Experts working on algorithms, neural networks, generative models, reinforcement learning, and applied intelligent systems for various use cases.",
//       icon: BrainCircuit,
//     },
//     {
//       title: "CTOs, CIOs & Industry Leaders",
//       description:
//         "Decision makers shaping enterprise AI strategy, driving transformation, evaluating solutions, and unlocking real-world impact through intelligent automation.",
//       icon: Briefcase,
//     },
//     {
//       title: "Founders & Industry Practitioners",
//       description:
//         "Innovators, startups, and hands-on professionals applying AI and robotics to solve industry, societal, and global-scale challenges.",
//       icon: Rocket,
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-6 max-w-4xl">
//         {/* Section Header */}
//         <div className="mb-16 text-left">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//             Who Should Attend?
//           </h2>
//           <div className="h-1 w-20 bg-indigo-600 rounded-full"></div>
//         </div>

//         {/* Vertical Layout */}
//         <div className="relative space-y-0">
//           {/* Vertical line */}
//           <div className="absolute left-[28px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-slate-200 to-transparent hidden md:block"></div>

//           {attendees.map((item, index) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative flex flex-col md:flex-row gap-6 md:gap-10 pb-12 last:pb-0"
//               >
//                 {/* Icon */}
//                 <div className="flex-shrink-0 relative">
//                   <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-100 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:border-indigo-300 group-hover:shadow-lg group-hover:scale-110">
//                     <Icon className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 transition-colors duration-300" />
//                   </div>

//                   {/* mobile line connector */}
//                   {index !== attendees.length - 1 && (
//                     <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-slate-200 md:hidden"></div>
//                   )}
//                 </div>

//                 {/* Text Content */}
//                 <div className="flex-1 pt-1 md:pt-2">
//                   <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2 group-hover:text-indigo-700 transition-colors duration-300">
//                     {item.title}
//                     <CheckCircle2 className="w-4 h-4 text-indigo-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//                   </h3>

//                   <p className="text-slate-600 text-base md:text-lg leading-relaxed border-l-2 border-transparent pl-0 group-hover:border-indigo-100 group-hover:pl-4 transition-all duration-300">
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

// export default WhoShouldAttendSection;



import React from "react";
import {
  GraduationCap,
  School,
  Bot,
  BrainCircuit,
  Briefcase,
  Rocket,
} from "lucide-react";

const WhoShouldAttendSection: React.FC = () => {
  const attendees = [
    {
      title: "Faculty & Professors",
      description:
        "Educators and academic leaders guiding future research directions, shaping course development, and driving innovation in artificial intelligence, machine learning, and robotics.",
      icon: GraduationCap,
    },
    {
      title: "PhD, Master’s & Bachelor’s Students",
      description:
        "Learners strengthening their knowledge, presenting work, publishing papers, and connecting with the global research community.",
      icon: School,
    },
    {
      title: "Robotics Engineers",
      description:
        "Professionals designing and developing autonomous systems, robotic platforms, simulation systems, and infrastructure.",
      icon: Bot,
    },
    {
      title: "AI Researchers & Data Scientists",
      description:
        "Researchers working on neural networks, LLMs, reinforcement learning, generative models, and applied intelligent systems.",
      icon: BrainCircuit,
    },
    {
      title: "CTOs, CIOs & Industry Leaders",
      description:
        "Executives driving technology strategy, evaluating AI solutions, enabling enterprise transformation, and scaling innovation.",
      icon: Briefcase,
    },
    {
      title: "Founders & Industry Practitioners",
      description:
        "Innovators applying AI and robotics to solve industrial, social, and global challenges through real-world solutions.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Who Should Attend?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl">
            Designed for professionals, researchers, leaders, and innovators shaping the future of AI and robotics.
          </p>
        </div>

        {/* List Layout */}
        <div className="space-y-10">
          {attendees.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-5">
                
                {/* Icon */}
                <div className="mt-1">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base">
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

export default WhoShouldAttendSection;
