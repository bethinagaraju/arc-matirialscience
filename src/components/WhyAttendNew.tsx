// // // import React from 'react';

// // // // Interface for the FeatureCard props
// // // interface FeatureCardProps {
// // //   icon: React.ReactNode;
// // //   title: string;
// // //   description: string;
// // // }

// // // // Reusable FeatureCard component
// // // const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
// // //   return (
// // //     <div className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-10 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-300">
// // //       <div className="mb-6 relative">
// // //         <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.7)]">
// // //           {icon}
// // //         </div>
// // //       </div>
// // //       <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
// // //       <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
// // //     </div>
// // //   );
// // // };

// // // // Main WhyAttend component
// // // const WhyAttendNew: React.FC = () => {
// // //   // SVG icons as React components for glow effect
// // //   const ChipIcon = () => (
// // //     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
// // //       <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
// // //       <rect x="9" y="9" width="6" height="6" />
// // //       <line x1="9" y1="1" x2="9" y2="4" />
// // //       <line x1="15" y1="1" x2="15" y2="4" />
// // //       <line x1="9" y1="20" x2="9" y2="23" />
// // //       <line x1="15" y1="20" x2="15" y2="23" />
// // //       <line x1="20" y1="9" x2="23" y2="9" />
// // //       <line x1="20" y1="14" x2="23" y2="14" />
// // //       <line x1="1" y1="9" x2="4" y2="9" />
// // //       <line x1="1" y1="14" x2="4" y2="14" />
// // //     </svg>
// // //   );

// // //   const GlobeIcon = () => (
// // //     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
// // //       <circle cx="12" cy="12" r="10" />
// // //       <line x1="2" y1="12" x2="22" y2="12" />
// // //       <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
// // //     </svg>
// // //   );

// // //   const SpeakerIcon = () => (
// // //     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
// // //       <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
// // //       <circle cx="12" cy="7" r="4" />
// // //     </svg>
// // //   );

// // //   const PublicationIcon = () => (
// // //     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
// // //       <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
// // //       <polyline points="14 2 14 8 20 8" />
// // //       <line x1="16" y1="13" x2="8" y2="13" />
// // //       <line x1="16" y1="17" x2="8" y2="17" />
// // //       <polyline points="10 9 9 9 8 9" />
// // //     </svg>
// // //   );

// // //   const IndustryIcon = () => (
// // //     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
// // //       <circle cx="12" cy="12" r="2" />
// // //       <path d="M12 2v4" />
// // //       <path d="M12 18v4" />
// // //       <path d="M4.93 4.93l2.83 2.83" />
// // //       <path d="M16.24 16.24l2.83 2.83" />
// // //       <path d="M2 12h4" />
// // //       <path d="M18 12h4" />
// // //       <path d="M4.93 19.07l2.83-2.83" />
// // //       <path d="M16.24 7.76l2.83-2.83" />
// // //       <path d="M14 12l6-6" />
// // //       <path d="M14 12l6 6" />
// // //       <path d="M10 12l-6 6" />
// // //       <path d="M10 12l-6-6" />
// // //     </svg>
// // //   );

// // //   const CareerIcon = () => (
// // //     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
// // //       <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
// // //       <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
// // //       <path d="M12 11l4-4 4 4" />
// // //       <path d="M16 7v8" />
// // //     </svg>
// // //   );

// // //   return (
// // //     <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#050a18] bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: 'url("https://your-image-url.com/bg-image.png")' /* Replace with actual background image URL */ }}>
// // //       {/* Background overlay for subtle circuit pattern */}
// // //       <div className="absolute inset-0 bg-[#050a18] opacity-90 mix-blend-multiply"></div>
      
// // //       <div className="max-w-7xl mx-auto relative z-10">
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Attend AIMLR 2026?</h2>
// // //           <p className="text-lg text-gray-300 max-w-2xl mx-auto">A global platform advancing Artificial Intelligence, Machine Learning & Robotics.</p>
// // //         </div>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //           <FeatureCard
// // //             icon={<ChipIcon />}
// // //             title="Cutting-Edge Research"
// // //             description="Explore the latest breakthroughs in AI, ML, and intelligent systems."
// // //           />
// // //           <FeatureCard
// // //             icon={<GlobeIcon />}
// // //             title="Global Networking"
// // //             description="Connect with professors, researchers, and industry experts worldwide."
// // //           />
// // //           <FeatureCard
// // //             icon={<SpeakerIcon />}
// // //             title="World-Class Speakers"
// // //             description="Learn from internationally recognized leaders and keynote speakers."
// // //           />
// // //           <FeatureCard
// // //             icon={<PublicationIcon />}
// // //             title="Publication Opportunities"
// // //             description="Present your work with indexed proceedings and global visibility."
// // //           />
// // //           <FeatureCard
// // //             icon={<IndustryIcon />}
// // //             title="Industry & Innovation"
// // //             description="Engage with applied AI, robotics, and real-world case studies."
// // //           />
// // //           <FeatureCard
// // //             icon={<CareerIcon />}
// // //             title="Career & Academic Growth"
// // //             description="Enhance citations, collaborations, and professional recognition."
// // //           />
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default WhyAttendNew;



// // import React from 'react';
// // import { 
// //   Cpu, 
// //   Globe, 
// //   Mic2, 
// //   FileText, 
// //   Bot, 
// //   Briefcase 
// // } from 'lucide-react';

// // // Interface for the FeatureCard props
// // interface FeatureCardProps {
// //   icon: React.ReactNode;
// //   title: string;
// //   description: string;
// // }

// // // Reusable FeatureCard component
// // const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
// //   return (
// //     <div className="group relative bg-[#0f172a]/40 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300 overflow-hidden">
      
// //       {/* Top subtle glow line for glass effect */}
// //       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      
// //       {/* Icon Container with Gradient Border/Glow */}
// //       <div className="mb-6 relative inline-block">
// //         <div className="absolute inset-0 bg-blue-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
// //         <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#1e40af] to-[#7e22ce] flex items-center justify-center border border-white/10 shadow-inner shadow-black/20 group-hover:scale-110 transition-transform duration-300">
// //           {/* Cloning the icon to apply common classes */}
// //           {React.cloneElement(icon as React.ReactElement, { size: 28, className: "text-white drop-shadow-md" })}
// //         </div>
// //       </div>
      
// //       <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-blue-200 transition-colors">
// //         {title}
// //       </h3>
      
// //       <p className="text-blue-100/70 text-sm leading-relaxed font-light">
// //         {description}
// //       </p>
// //     </div>
// //   );
// // };

// // // Main WhyAttend component
// // const WhyAttendNew: React.FC = () => {
  
// //   const features = [
// //     {
// //       icon: <Cpu />,
// //       title: "Cutting-Edge Research",
// //       description: "Explore the latest breakthroughs in AI, ML, and intelligent systems."
// //     },
// //     {
// //       icon: <Globe />,
// //       title: "Global Networking",
// //       description: "Connect with professors, researchers, and industry experts worldwide."
// //     },
// //     {
// //       icon: <Mic2 />, // Represents Speakers
// //       title: "World-Class Speakers",
// //       description: "Learn from internationally recognized leaders and keynote speakers."
// //     },
// //     {
// //       icon: <FileText />,
// //       title: "Publication Opportunities",
// //       description: "Present your work with indexed proceedings and global visibility."
// //     },
// //     {
// //       icon: <Bot />, // Represents Robotics/Industry
// //       title: "Industry & Innovation",
// //       description: "Engage with applied AI, robotics, and real-world case studies."
// //     },
// //     {
// //       icon: <Briefcase />, // Represents Career
// //       title: "Career & Academic Growth",
// //       description: "Enhance citations, collaborations, and professional recognition."
// //     }
// //   ];

// //   return (
// //     <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#020617] overflow-hidden">
      
// //       {/* --- BACKGROUND LIGHTING EFFECTS --- */}
      
// //       {/* 1. Main Dark Background Gradient */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] z-0"></div>

// //       {/* 2. Central Blue Glow (Spotlight effect behind title) */}
// //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
// //       {/* 3. Subtle Circuit/Star Pattern Overlay */}
// //       <div className="absolute inset-0 opacity-20 z-0" 
// //            style={{ 
// //              backgroundImage: 'radial-gradient(circle at 50% 50%, #3b82f6 1px, transparent 1px)', 
// //              backgroundSize: '40px 40px' 
// //            }}>
// //       </div>

// //       {/* --- CONTENT --- */}
// //       <div className="max-w-7xl mx-auto relative z-10">
        
// //         {/* Header Section */}
// //         <div className="text-center mb-20">
// //           <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-300 mb-6 drop-shadow-lg">
// //             Why Attend AIMLR 2026?
// //           </h2>
// //           <p className="text-lg md:text-xl text-blue-200/80 max-w-3xl mx-auto font-light">
// //             A global platform advancing Artificial Intelligence, Machine Learning & Robotics.
// //           </p>
// //         </div>

// //         {/* Grid Section */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {features.map((feature, index) => (
// //             <FeatureCard
// //               key={index}
// //               icon={feature.icon}
// //               title={feature.title}
// //               description={feature.description}
// //             />
// //           ))}
// //         </div>
        
// //       </div>
// //     </section>
// //   );
// // };

// // export default WhyAttendNew;




// import React from 'react';
// import { 
//   Cpu, 
//   Globe, 
//   Mic2, 
//   FileText, 
//   Bot, 
//   Briefcase 
// } from 'lucide-react';

// // Interface for the FeatureCard props
// interface FeatureCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// }

// // Reusable FeatureCard component
// const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
//   return (
//     <div className="group relative bg-[#0f172a]/30 backdrop-blur-md rounded-2xl p-8 border border-white/5 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:border-blue-400/30 hover:bg-[#0f172a]/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300 overflow-hidden">
      
//       {/* Top subtle glow line for glass effect */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-50" />
      
//       {/* Icon Container with Gradient Border/Glow */}
//       <div className="mb-6 relative inline-block">
//         {/* Glow behind the icon */}
//         <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
        
//         {/* Icon Circle */}
//         <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#581c87] flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-105 transition-transform duration-300">
//           {React.cloneElement(icon as React.ReactElement, { size: 26, className: "text-blue-100 drop-shadow-md" })}
//         </div>
//       </div>
      
//       <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-blue-200 transition-colors">
//         {title}
//       </h3>
      
//       <p className="text-blue-100/60 text-sm leading-relaxed font-light">
//         {description}
//       </p>
//     </div>
//   );
// };

// // Main WhyAttend component
// const WhyAttendNew: React.FC = () => {
  
//   const features = [
//     {
//       icon: <Cpu />,
//       title: "Cutting-Edge Research",
//       description: "Explore the latest breakthroughs in AI, ML, and intelligent systems."
//     },
//     {
//       icon: <Globe />,
//       title: "Global Networking",
//       description: "Connect with professors, researchers, and industry experts worldwide."
//     },
//     {
//       icon: <Mic2 />,
//       title: "World-Class Speakers",
//       description: "Learn from internationally recognized leaders and keynote speakers."
//     },
//     {
//       icon: <FileText />,
//       title: "Publication Opportunities",
//       description: "Present your work with indexed proceedings and global visibility."
//     },
//     {
//       icon: <Bot />,
//       title: "Industry & Innovation",
//       description: "Engage with applied AI, robotics, and real-world case studies."
//     },
//     {
//       icon: <Briefcase />,
//       title: "Career & Academic Growth",
//       description: "Enhance citations, collaborations, and professional recognition."
//     }
//   ];

//   return (
//     <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#020617] overflow-hidden flex flex-col justify-center">
      
//       {/* --- BACKGROUND LIGHTING EFFECTS --- */}
      
//       {/* 1. Base Dark Background */}
//       <div className="absolute inset-0 bg-[#020617] z-0"></div>

//       {/* 2. Top-Left: Bright Blue/Cyan Light Source (Simulating the image) */}
//       <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none z-0 mix-blend-screen"></div>
//       <div className="absolute top-[0%] left-[0%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>

//       {/* 3. Bottom-Right: Purple/Magenta Light Source (Simulating the image) */}
//       <div className="absolute -bottom-[10%] -right-[5%] w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[130px] pointer-events-none z-0 mix-blend-screen"></div>
//       <div className="absolute bottom-[0%] right-[0%] w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>
      
//       {/* 4. Tech/Star Grid Pattern */}
//       <div className="absolute inset-0 opacity-[0.15] z-0" 
//            style={{ 
//              backgroundImage: 'radial-gradient(circle at center, #60a5fa 0.5px, transparent 0.5px)', 
//              backgroundSize: '30px 30px' 
//            }}>
//       </div>
      
//       {/* 5. Subtle horizontal circuit lines (Optional aesthetic detail) */}
//       <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
//       <div className="absolute bottom-1/3 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>


//       {/* --- CONTENT --- */}
//       <div className="max-w-7xl mx-auto relative z-10 w-full">
        
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
//             Why Attend AIMLR 2026?
//           </h2>
//           <p className="text-lg text-blue-200/70 max-w-2xl mx-auto font-light">
//             A global platform advancing Artificial Intelligence, Machine Learning & Robotics.
//           </p>
//         </div>

//         {/* Grid Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 px-16">
//           {features.map((feature, index) => (
//             <FeatureCard
//               key={index}
//               icon={feature.icon}
//               title={feature.title}
//               description={feature.description}
//             />
//           ))}
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default WhyAttendNew;




import React from 'react';
import { 
  Cpu, 
  Globe, 
  Mic2, 
  FileText, 
  Bot, 
  Briefcase 
} from 'lucide-react';

// Interface for the FeatureCard props
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Reusable FeatureCard component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative bg-[#0f172a]/30 backdrop-blur-md rounded-2xl p-8 border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:border-blue-400/50 hover:bg-[#0f172a]/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-all duration-300 overflow-hidden">
      
      {/* Top subtle glow line for glass effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-70" />
      
      {/* Icon Container with Gradient Border/Glow */}
      <div className="mb-6 relative inline-block">
        {/* Permanent Glow behind the icon */}
        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 rounded-full"></div>
        
        {/* Icon Circle with permanent glowing border */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#581c87] flex items-center justify-center border-2 border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform duration-300">
          {React.cloneElement(icon as React.ReactElement, { size: 26, className: "text-blue-50 drop-shadow-lg" })}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-blue-200 transition-colors">
        {title}
      </h3>
      
      <p className="text-white text-sm leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
};

// Main WhyAttend component
const WhyAttendNew: React.FC = () => {
  
  const features = [
    {
      icon: <Cpu />,
      title: "Cutting-Edge Research",
      description: "Explore recent advances, emerging ideas, and practical innovations across AI, Machine Learning, and Robotics through peer-reviewed presentations."
    },
    {
      icon: <Globe />,
      title: "Global Networking",
      description: "Connect with researchers, faculty members, students, and industry professionals from around the world in a collaborative academic environment."
    },
    {
      icon: <Mic2 />,
      title: "World-Class Speakers",
      description: "Gain insights from experienced researchers, technical speakers, and industry practitioners sharing real-world applications and research perspectives."
    },
    {
      icon: <FileText />,
      title: "Publication Opportunities",
      description: "Present your research, case study, or academic work through oral or poster presentations and receive official conference recognition."
    },
    {
      icon: <Bot />,
      title: "Industry & Innovation",
      description: "Engage with applied research, emerging technologies, and real-world use cases in AI, robotics, and intelligent systems."
    },
    {
      icon: <Briefcase />,
      title: "Career & Academic Growth",
      description: "Strengthen your academic profile, improve presentation skills, receive peer feedback, and expand professional connections."
    }
  ];

  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#020617] overflow-hidden flex flex-col justify-center">
      
      {/* --- BACKGROUND LIGHTING EFFECTS --- */}
      
      {/* 1. Base Dark Background */}
      <div className="absolute inset-0 bg-[#020617] z-0"></div>

      {/* 2. Top-Left: Bright Blue/Cyan Light Source */}
      <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[130px] pointer-events-none z-0 mix-blend-screen"></div>
      <div className="absolute top-[0%] left-[0%] w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>

      {/* 3. Bottom-Right: Purple/Magenta Light Source */}
      <div className="absolute -bottom-[10%] -right-[5%] w-[600px] h-[600px] bg-purple-700/20 rounded-full blur-[130px] pointer-events-none z-0 mix-blend-screen"></div>
      <div className="absolute bottom-[0%] right-[0%] w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen"></div>
      
      {/* 4. Tech/Star Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.15] z-0" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at center, #60a5fa 0.5px, transparent 0.5px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>
      
      {/* 5. Subtle horizontal circuit lines */}
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-1/3 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>


      {/* --- CONTENT --- */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
            Why Attend AIMLR 2026?
          </h2>
          <p className="text-lg text-blue-200/70 max-w-2xl mx-auto font-light">
            A global platform advancing Artificial Intelligence, Machine Learning & Robotics.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-12 px-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyAttendNew;