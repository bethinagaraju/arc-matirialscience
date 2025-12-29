// // import React from "react";
// // import { BookOpen, MonitorPlay, ArrowRight, Users, Presentation } from "lucide-react";

// // const ConferenceActivities = () => {
// //   return (
// //     <section id="activities" className="space-y-8">

// //       {/* Main Heading */}
// //       <h2 className="text-3xl font-bold text-gray-900 mb-4">Conference Sessions & Activities</h2>

// //       {/* Workshops */}
// //       <div id="workshops" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
// //         <div className="flex items-center gap-3 mb-4">
// //           <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
// //             <BookOpen className="w-5 h-5" />
// //           </div>
// //           <h3 className="text-lg font-bold text-gray-900">Workshops</h3>
// //         </div>

// //         <p className="text-gray-600 mb-4 text-sm flex-grow">
// //           Participate in intensive, hands-on sessions led by industry pioneers.
// //         </p>

// //         <div className="space-y-2">
// //           {["NLP in Healthcare", "Edge AI Deployment", "Ethical AI"].map((track) => (
// //             <div
// //               key={track}
// //               className="flex items-center justify-between group p-2 rounded hover:bg-purple-50 transition cursor-default"
// //             >
// //               <span className="text-sm text-gray-700 font-medium group-hover:text-purple-700">
// //                 {track}
// //               </span>
// //               <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-purple-500 opacity-0 group-hover:opacity-100 transition" />
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Tutorials */}
// //       <div id="tutorials" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
// //         <div className="flex items-center gap-3 mb-4">
// //           <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
// //             <MonitorPlay className="w-5 h-5" />
// //           </div>
// //           <h3 className="text-lg font-bold text-gray-900">Tutorials</h3>
// //         </div>

// //         <p className="text-gray-600 mb-4 text-sm flex-grow">
// //           Deep-dive educational sessions for beginner and advanced practitioners.
// //         </p>

// //         <div className="space-y-2">
// //           {["Large Language Models", "Reinforcement Learning", "Computer Vision"].map((track) => (
// //             <div
// //               key={track}
// //               className="flex items-center justify-between group p-2 rounded hover:bg-blue-50 transition cursor-default"
// //             >
// //               <span className="text-sm text-gray-700 font-medium group-hover:text-blue-700">
// //                 {track}
// //               </span>
// //               <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition" />
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Panel Discussions */}
// //       <div id="panels" className="bg-gradient-to-r from-slate-800 to-indigo-900 rounded-xl p-6 text-white relative overflow-hidden">
// //         <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
// //           <div className="flex-1">
// //             <div className="flex items-center gap-2 mb-2 text-indigo-300">
// //               <Users className="w-5 h-5" />
// //               <span className="font-semibold text-sm uppercase">Interactive Sessions</span>
// //             </div>

// //             <h3 className="text-2xl font-bold mb-3">Panel Discussions</h3>
// //             <p className="text-indigo-100 text-sm leading-relaxed mb-4">
// //               Join the debate on the "black box" problem, regulatory challenges, and the future of human-AI collaboration.
// //             </p>
// //           </div>

// //           <div className="md:w-1/3 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
// //             <h4 className="font-semibold text-sm mb-2">Key Topics</h4>
// //             <ul className="space-y-1 text-xs text-indigo-200">
// //               <li>• AI in Governance</li>
// //               <li>• Sustainable Computing</li>
// //               <li>• The Future of Work</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Poster Sessions */}
// //       <div id="posters" className="flex flex-col md:flex-row gap-4 items-center bg-white border-l-4 border-indigo-500 shadow-sm rounded-r-xl p-6">
// //         <div className="p-3 bg-indigo-50 rounded-full shrink-0">
// //           <Presentation className="w-8 h-8 text-indigo-600" />
// //         </div>

// //         <div className="flex-grow">
// //           <h3 className="text-xl font-bold text-gray-900 mb-1">Poster Sessions</h3>
// //           <p className="text-gray-600 text-sm">
// //             A casual environment to browse innovative findings. Researchers will stand by their work for interactive Q&A.
// //           </p>
// //         </div>

// //         <div className="shrink-0 text-right">
// //           <span className="block text-2xl font-bold text-gray-900">50+</span>
// //           <span className="text-xs text-gray-500 uppercase font-medium">Projects</span>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ConferenceActivities;





// import React from "react";
// import { BookOpen, MonitorPlay, Users, Presentation } from "lucide-react";

// const ConferenceActivities = () => {
//   const workshops = ["NLP in Healthcare", "Edge AI Deployment", "Ethical AI"];
//   const tutorials = ["Large Language Models", "Reinforcement Learning", "Computer Vision"];

//   return (
//     <section id="activities" className="space-y-8">

//       {/* Single Main Heading */}
//       <h2 className="text-3xl font-bold text-gray-900">
//         Conference Sessions & Activities
//       </h2>

//       {/* All Activities Wrapper */}
//       <div className="border border-gray-300 rounded-lg p-6 bg-white space-y-10">

//         {/* Workshops */}
//         <div>
//           <div className="flex items-center gap-2 mb-3">
//             <BookOpen className="w-5 h-5 text-gray-700" />
//             <h3 className="text-lg font-semibold text-gray-800">Workshops</h3>
//           </div>

//           <p className="text-sm text-gray-600 mb-2">
//             Participate in hands-on sessions led by industry pioneers.
//           </p>

//           <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
//             {workshops.map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Tutorials */}
//         <div>
//           <div className="flex items-center gap-2 mb-3">
//             <MonitorPlay className="w-5 h-5 text-gray-700" />
//             <h3 className="text-lg font-semibold text-gray-800">Tutorials</h3>
//           </div>

//           <p className="text-sm text-gray-600 mb-2">
//             Deep-dive educational sessions for all skill levels.
//           </p>

//           <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
//             {tutorials.map((item) => (
//               <li key={item}>{item}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Panel Discussions */}
//         <div>
//           <div className="flex items-center gap-2 mb-3">
//             <Users className="w-5 h-5 text-gray-700" />
//             <h3 className="text-lg font-semibold text-gray-800">Panel Discussions</h3>
//           </div>

//           <p className="text-sm text-gray-600 mb-2">
//             Discussions on key challenges and the future of human-AI collaboration.
//           </p>

//           <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
//             <li>AI in Governance</li>
//             <li>Sustainable Computing</li>
//             <li>The Future of Work</li>
//           </ul>
//         </div>

//         {/* Poster Sessions */}
//         <div className="flex items-center gap-4">
//           <Presentation className="w-10 h-10 text-gray-700" />

//           <div className="flex-grow">
//             <h3 className="text-lg font-semibold text-gray-800">Poster Sessions</h3>
//             <p className="text-sm text-gray-600">
//               Browse innovative findings and interact with researchers.
//             </p>
//           </div>

//           <div className="text-right">
//             <span className="block text-2xl font-bold text-gray-900">50+</span>
//             <span className="text-xs text-gray-500">Projects</span>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ConferenceActivities;





import React from "react";
import { 
  BookOpen, 
  Users, 
  Presentation, 
  Brain, 
  MessageSquare, 
  Handshake, 
  Info 
} from "lucide-react";

const ConferenceActivities = () => {
  const activities = [
    {
      title: "Technical Sessions",
      icon: Brain,
      description: "Peer-reviewed oral presentations covering theoretical advances, applied research, and emerging innovations in AI, ML, and Robotics."
    },
    {
      title: "Poster Sessions",
      icon: Presentation,
      description: "Dedicated poster sessions showcasing ongoing research, early-stage studies, and practical implementations, with interactive discussions between authors and attendees."
    },
    {
      title: "Workshops",
      icon: Users,
      description: "Interactive sessions focused on emerging tools, methodologies, and real-world applications, led by academic and industry professionals."
    },
    {
      title: "Tutorials",
      icon: BookOpen,
      description: "Educational sessions designed to provide structured overviews of core and advanced topics for participants from diverse technical backgrounds."
    },
    {
      title: "Panel Discussions",
      icon: MessageSquare,
      description: "Expert-led discussions addressing current challenges, future directions, and interdisciplinary perspectives in intelligent systems and robotics."
    },
    {
      title: "Networking & Social Activities",
      icon: Handshake,
      description: "Opportunities for informal interaction, collaboration, and professional networking among researchers, students, and industry participants."
    }
  ];

  return (
    <section id="activities" className="space-y-6">
      
      {/* Header Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Conference Sessions & Activities 
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The conference will feature a diverse range of technical sessions and interactive activities designed to encourage knowledge exchange, discussion, and collaboration across Artificial Intelligence, Machine Learning, and Robotics.
        </p>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activities.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 p-6 bg-white hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg shrink-0">
                <item.icon className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Important Note */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg flex gap-3 items-start">
        <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-amber-800 text-sm">IMPORTANT</h4>
          <p className="text-sm text-amber-700 mt-1">
            Session topics, formats, and schedules will be updated as submissions are reviewed and the program develops.
          </p>
        </div>
      </div>

    </section>
  );
};

export default ConferenceActivities;