

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
//           Each session is designed to poster learning, exchange perspectives, encourage networking, and create a high-value experience for researchers, industry professionals, and students.
//         </p>
//       </div>

//       {/* Bulleted List */}
//       <ul className="space-y-6 max-w-4xl text-slate-800">
//         {sessionTypes.map((item, index) => {
//           const Icon = item.icon;
//           return (
            
//               <div className="flex items-start gap-3">
//                 <Icon className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
//                 <div>
//                   <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
//                   {/* <p className="text-slate-700">{item.desc}</p> */}
//                 </div>
//               </div>
            
//           );
//         })}
//       </ul>
//     </section>
//   );
// };

// export default SessionTypesSection;



import React from "react";
import { Mic2, FileText, Zap, Wrench, Users, Trophy } from "lucide-react";

const SessionTypesSection: React.FC = () => {
  const sessionTypes = [
    { name: "Keynote Talks", icon: Mic2 },
    { name: "Technical Papers", icon: FileText },
    { name: "Poster Sessions", icon: Zap },
    { name: "Hands-on Workshops", icon: Wrench },
    { name: "Panel Discussions", icon: Users },
    { name: "Student Challenges", icon: Trophy },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Explore <span className="text-indigo-600">Session Types</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          Each session is designed to foster learning, exchange perspectives,
          and create a high-value conference experience.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessionTypes.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 text-indigo-600">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                {item.name}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SessionTypesSection;
