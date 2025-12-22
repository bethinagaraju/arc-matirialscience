// // // import React from 'react';

// // // const ScientificSession: React.FC = () => {
// // //   const sessions = [
// // //     "Nursing Research",
// // //     "Nursing Informatics",
// // //     "Oncology Nursing",
// // //     "Clinical Nursing",
// // //     "Pediatric Nursing",
// // //     "Public Health Nursing",
// // //     "Cardiac Nursing",
// // //     "Geriatric Nursing",
// // //     "Midwifery and Womens Health",
// // //     "Nursing and Healthcare",
// // //     "Occupational Health Nursing",
// // //     "Psychiatric and Mental Health Nursing",
// // //     "Gynecology and Obstetrics Nursing",
// // //     "Community and Home Health Nursing",
// // //     "Emergency and Ambulatory Care Nursing",
// // //     "Evidence-Based Nursing"
// // //   ];

// // //   return (
// // //     <div className="w-full">
// // //       {/* Grid Layout: 1 column on mobile, 2 columns on medium screens and up */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //         {sessions.map((session, index) => (
// // //           <div 
// // //             key={index}
// // //             className="
// // //               bg-[#0091b5] 
// // //               text-white 
// // //               text-lg 
// // //               font-medium 
// // //               px-6 
// // //               py-4 
// // //               rounded-md 
// // //               shadow-sm 
// // //               cursor-pointer 
// // //               transition-all 
// // //               duration-300 
// // //               hover:bg-[#007a99] 
// // //               hover:shadow-md
// // //               flex items-center
// // //             "
// // //           >
// // //             {/* Display Index + 1 to match the numbered list style */}
// // //             <span>
// // //               {index + 1}. {session}
// // //             </span>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ScientificSession;


// // import React from 'react';

// // const ScientificSession: React.FC = () => {
// //   // Updated list with AI, ML, and Robotics topics
// //   const sessions = [
// //     "Artificial Intelligence & Machine Learning",
// //     "Robotics & Process Automation",
// //     "Deep Learning & Neural Networks",
// //     "Natural Language Processing (NLP)",
// //     "Computer Vision & Image Processing",
// //     "Human-Robot Interaction (HRI)",
// //     "AI in Healthcare & Medicine",
// //     "Autonomous Vehicles & Drones",
// //     "Reinforcement Learning",
// //     "Generative AI & LLMs",
// //     "AI Ethics, Policy & Governance",
// //     "Industrial Robotics (Industry 4.0)",
// //     "Edge AI & IoT Integration",
// //     "Cognitive Computing",
// //     "Swarm Intelligence & Robotics",
// //     "Big Data Analytics & Data Science",
// //     "Soft Robotics & Bio-inspired Systems",
// //     "AI for Cybersecurity",
// //     "Cloud Robotics",
// //     "Explainable AI (XAI)",
// //     "Quantum Artificial Intelligence",     // New
// //     "Federated Learning & Privacy",        // New
// //     "Neuromorphic Computing",              // New
// //     "Digital Twins & Simulation",          // New
// //     "Brain-Computer Interfaces (BCI)",     // New
// //     "Agricultural & Service Robotics",     // New
// //     "Affective Computing (Emotion AI)",    // New
// //     "Knowledge Graphs & Semantic Web",     // New
// //     "AI for Sustainability (Green AI)",    // New
// //     "SLAM & Navigation Systems"
// //   ];

// //   return (
// //     <div className="w-full">
// //       {/* Grid Layout: 1 column on mobile, 2 columns on medium screens and up */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //         {sessions.map((session, index) => (
// //           <div 
// //             key={index}
// //             className="
// //               bg-[#3a4c83] 
// //               text-white 
// //               text-sm
// //               font-medium 
// //               px-6 
// //               py-4 
// //               rounded-md 
// //               shadow-sm 
// //               cursor-pointer 
// //               transition-all 
// //               duration-300 
// //               hover:bg-[#2e376c] 
// //               hover:shadow-md
// //               flex items-center
// //             "
// //           >
// //             {/* Display Index + 1 to match the numbered list style */}
// //             <span>
// //               {index + 1}. {session}
// //             </span>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ScientificSession;



// import React from 'react';

// const ScientificSession: React.FC = () => {
//   const sessions = [
//     "Artificial Intelligence & Machine Learning",
//     "Robotics & Process Automation",
//     "Deep Learning & Neural Networks",
//     "Natural Language Processing (NLP)",
//     "Computer Vision & Image Processing",
//     "Human-Robot Interaction (HRI)",
//     "AI in Healthcare & Medicine",
//     "Autonomous Vehicles & Drones",
//     "Reinforcement Learning",
//     "Generative AI & LLMs",
//     "AI Ethics, Policy & Governance",
//     "Industrial Robotics (Industry 4.0)",
//     "Edge AI & IoT Integration",
//     "Cognitive Computing",
//     "Swarm Intelligence & Robotics",
//     "Big Data Analytics & Data Science",
//     "Soft Robotics & Bio-inspired Systems",
//     "AI for Cybersecurity",
//     "Cloud Robotics",
//     "Explainable AI (XAI)",
//     "Quantum Artificial Intelligence",
//     "Federated Learning & Privacy",
//     "Neuromorphic Computing",
//     "Digital Twins & Simulation",
//     "Brain-Computer Interfaces (BCI)",
//     "Agricultural & Service Robotics",
//     "Affective Computing (Emotion AI)",
//     "Knowledge Graphs & Semantic Web",
//     "AI for Sustainability (Green AI)",
//     "SLAM & Navigation Systems"
//   ];

//   return (
//     <div className="w-full">
      
//       {/* SESSION GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
//         {sessions.map((session, index) => (
//           <div 
//             key={index}
//             className="
//               bg-[#3a4c83] 
//               text-white 
//               text-sm
//               font-medium 
//               px-6 
//               py-4 
//               rounded-md 
//               shadow-sm 
//               cursor-pointer 
//               transition-all 
//               duration-300 
//               hover:bg-[#2e376c] 
//               hover:shadow-md
//               flex items-center
//             "
//           >
//             <span>{index + 1}. {session}</span>
//           </div>
//         ))}
//       </div>

//       {/* BUTTON SECTION */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        
//         <button
//           className="
//             bg-[#3a4c83] 
//             text-white 
//             font-semibold 
//             px-8 
//             py-4 
//             rounded-md 
//             shadow-sm 
//             text-center
//             transition-all 
//             duration-300 
//             hover:bg-[#2e376c] 
//             hover:shadow-md
//             w-full md:w-auto
//           "
//         >
//           Registration
//         </button>

//         <button
//           className="
//             bg-[#3a4c83] 
//             text-white 
//             font-semibold 
//             px-8 
//             py-4 
//             rounded-md 
//             shadow-sm 
//             text-center
//             transition-all 
//             duration-300 
//             hover:bg-[#2e376c] 
//             hover:shadow-md
//             w-full md:w-auto
//           "
//         >
//           Abstract Submission
//         </button>
//       </div>

//     </div>
//   );
// };

// export default ScientificSession;



import React from 'react';
import { Link } from 'react-router-dom';

const ScientificSession: React.FC = () => {
  const sessions = [
    "Artificial Intelligence & Machine Learning",
    "Robotics & Process Automation",
    "Deep Learning & Neural Networks",
    "Natural Language Processing (NLP)",
    "Computer Vision & Image Processing",
    "Human-Robot Interaction (HRI)",
    "AI in Healthcare & Medicine",
    "Autonomous Vehicles & Drones",
    "Reinforcement Learning",
    "Generative AI & LLMs",
    "AI Ethics, Policy & Governance",
    "Industrial Robotics (Industry 4.0)",
    "Edge AI & IoT Integration",
    "Cognitive Computing",
    "Swarm Intelligence & Robotics",
    "Big Data Analytics & Data Science",
    "Soft Robotics & Bio-inspired Systems",
    "AI for Cybersecurity",
    "Cloud Robotics",
    "Explainable AI (XAI)",
    "Quantum Artificial Intelligence",
    "Federated Learning & Privacy",
    "Neuromorphic Computing",
    "Digital Twins & Simulation",
    "Brain-Computer Interfaces (BCI)",
    "Agricultural & Service Robotics",
    "Affective Computing (Emotion AI)",
    "Knowledge Graphs & Semantic Web",
    "AI for Sustainability (Green AI)",
    "SLAM & Navigation Systems"
  ];

  return (
    <div className="w-full">

      <h1 className='text-center text-4xl font-semibold mb-8 text-[#2e376c]'>SESSIONS & TRACKS</h1>

      {/* SESSION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="
              bg-[#3a4c83]
              text-white
              text-sm
              font-medium
              px-6
              py-4
              
              shadow-sm
              cursor-pointer
              transition-all
              duration-300
              hover:bg-[#2e376c]
              hover:shadow-md
              flex items-center
              w-full
            "
          >
            <span>{index + 1}. {session}</span>
          </div>
        ))}
      </div>

      {/* BUTTON SECTION - MATCHING CARD SIZE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <Link to="/register"
          className="
            bg-[#3a4c83]
            text-white
            text-sm
            font-semibold
            px-6
            py-4
            rounded-md
            shadow-sm
            cursor-pointer
            transition-all
            duration-300
            hover:bg-[#2e376c]
            hover:shadow-md
            w-full
          "
        >
          Registration
        </Link>
        <Link to="/AbstractSubmission"
          className="
            bg-[#3a4c83]
            text-white
            text-sm
            font-semibold
            px-6
            py-4
            rounded-md
            shadow-sm
            cursor-pointer
            transition-all
            duration-300
            hover:bg-[#2e376c]
            hover:shadow-md
            w-full
          "
        >
          Abstract Submission
        </Link>

      </div>

    </div>
  );
};

export default ScientificSession;
