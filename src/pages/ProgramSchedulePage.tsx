// // // import React from 'react';
// // // import Header from '../components/Header';
// // // import Agenda from '../components/Agenda';
// // // import { Calendar, Clock, MapPin } from 'lucide-react';
// // // import EndFooter from '../components/EndFooter';

// // // function ProgramSchedulePage() {
// // //   return (
// // //     <div>
// // //       <Header />
// // //       <div className="bg-[#312e81] bg-[url('https://www.transparenttextures.com/patterns/fake-brick.png')] py-12">
// // //         <div className="container mx-auto px-4 text-center">
// // //           <h1 className="text-4xl font-bold mb-4 text-white">Program Schedule</h1>
// // //           <p className="text-xl mb-8 text-white">Explore the comprehensive agenda for AIMLR 2026</p>
// // //           <div className="flex text-white flex-col sm:flex-row justify-center gap-6 text-sm">
// // //             <div className="flex items-center gap-2">
// // //               <Calendar className="w-5 h-5" />
// // //               <span>July 28-30, 2026</span>
// // //             </div>
// // //             <div className="flex items-center gap-2">
// // //               <MapPin className="w-5 h-5" />
// // //               <span>Crowne Plaza - St. Peter's Rome, Italy</span>
// // //             </div>
// // //             <div className="flex items-center gap-2">
// // //               <Clock className="w-5 h-5" />
// // //               <span>3 Days of Innovation</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <Agenda />
// // //       <EndFooter />
// // //     </div>
// // //   );
// // // }

// // // export default ProgramSchedulePage;


// // import React from 'react';
// // import Header from '../components/Header';
// // import { Calendar, Clock, MapPin, FileText, Globe, MonitorPlay, Users, BookOpen, Presentation } from 'lucide-react';
// // import EndFooter from '../components/EndFooter';
// // import Agenda from '../components/Agenda';

// // function ProgramSchedulePage() {
// //   return (
// //     <div>
// //       <Header />

// //       {/* Hero Section */}
// //       <div className="bg-[#312e81] bg-[url('https://www.transparenttextures.com/patterns/fake-brick.png')] py-12">
// //         <div className="container mx-auto px-4 text-center">
// //           <h1 className="text-4xl font-bold mb-4 text-white">Program Schedule</h1>
// //           <p className="text-xl mb-8 text-white">Explore the comprehensive agenda for AIMLR 2026</p>
// //           <div className="flex text-white flex-col sm:flex-row justify-center gap-6 text-sm">
// //             <div className="flex items-center gap-2">
// //               <Calendar className="w-5 h-5" />
// //               <span>July 28-30, 2026</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <MapPin className="w-5 h-5" />
// //               <span>Crowne Plaza - St. Peter's Rome, Italy</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <Clock className="w-5 h-5" />
// //               <span>3 Days of Innovation</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Content Sections */}
// //       <div className="container mx-auto px-6 py-12 space-y-12">

// //         {/* 1. Program Overview */}
// //         <section id="overview" className="scroll-mt-24">
// //           <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
// //             <MonitorPlay className="w-6 h-6 text-indigo-600" /> Program Overview
// //           </h2>
// //           <p className="text-gray-600 leading-relaxed">
// //             The AIMLR 2026 program covers keynote sessions, research presentations, workshops,
// //             tutorials, and interactive panel discussions, providing a comprehensive learning
// //             experience for all attendees.
// //           </p>
// //         </section>

// //         {/* 2. Agenda (Day 1, 2, 3) */}
// //         <section id="agenda" className="scroll-mt-24">
// //           <Agenda />
// //         </section>

// //         {/* 3. Workshops */}
// //         <section id="workshops" className="scroll-mt-24">
// //           <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
// //             <BookOpen className="w-6 h-6 text-indigo-600" /> Workshops
// //           </h2>
// //           <p className="text-gray-600">
// //             Hands-on workshops will be conducted by industry experts and researchers covering
// //             applied methodologies, tools, and frameworks.
// //           </p>
// //         </section>

// //         {/* 4. Tutorials */}
// //         <section id="tutorials" className="scroll-mt-24">
// //           <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
// //             <MonitorPlay className="w-6 h-6 text-indigo-600" /> Tutorials
// //           </h2>
// //           <p className="text-gray-600">
// //             Tutorials provide deep-dive training on emerging technologies and methodologies.
// //           </p>
// //         </section>

// //         {/* 5. Panel Discussions */}
// //         <section id="panels" className="scroll-mt-24">
// //           <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
// //             <Users className="w-6 h-6 text-indigo-600" /> Panel Discussions
// //           </h2>
// //           <p className="text-gray-600">
// //             Experts from academia, government, and industry will debate key challenges and
// //             advancements shaping the future.
// //           </p>
// //         </section>

// //         {/* 6. Poster Sessions */}
// //         <section id="posters" className="scroll-mt-24">
// //           <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
// //             <Presentation className="w-6 h-6 text-indigo-600" /> Poster Sessions
// //           </h2>
// //           <p className="text-gray-600">
// //             Researchers will showcase innovative findings and engage in interactive discussions with attendees.
// //           </p>
// //         </section>

// //         {/* 7. Program at a Glance */}
// //         <section id="program-pdf" className="scroll-mt-24">
// //           <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
// //             <FileText className="w-6 h-6 text-indigo-600" /> Program at a Glance (PDF)
// //           </h2>
// //           <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition">
// //             Download Schedule PDF
// //           </button>
// //         </section>

// //         {/* 8. Time Zone Info */}
// //         <section id="timezone" className="scroll-mt-24">
// //           <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
// //             <Globe className="w-6 h-6 text-indigo-600" /> Time Zone Information
// //           </h2>
// //           <p className="text-gray-600">
// //             All times are displayed in Central European Time (CET). International participants are encouraged to verify local time conversions.
// //           </p>
// //         </section>
// //       </div>

// //       <EndFooter />
// //     </div>
// //   );
// // }

// // export default ProgramSchedulePage;









// import React from 'react';
// import Header from '../components/Header';
// import { 
//   Calendar, Clock, MapPin, FileText, Globe, MonitorPlay, 
//   Users, BookOpen, Presentation, CheckCircle2, ArrowRight, Download 
// } from 'lucide-react';
// import EndFooter from '../components/EndFooter';
// import Agenda from '../components/Agenda';

// function ProgramSchedulePage() {
//   return (
//     <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
//       {/* <Header /> */}

//       {/* Hero Section */}
//       <div className="relative bg-[#312e81] py-4 overflow-hidden">
//         {/* Decorative Background Pattern Overlay */}
//         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
//         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
        
//         <div className="relative container mx-auto px-4 text-center z-10">
//           <span className="inline-block py-1 px-3 rounded-full bg-indigo-700 text-indigo-100 text-xs font-semibold tracking-wider mb-4 border border-indigo-600">
//             CONFERENCE AGENDA
//           </span>
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
//             Program Schedule
//           </h1>
//           <p className="text-xl md:text-2xl mb-10 text-indigo-100 max-w-2xl mx-auto font-light">
//             A comprehensive three-day journey into the future of Applied Machine Learning and Research.
//           </p>
          
//           <div className="inline-flex flex-wrap justify-center gap-4 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20">
//             <div className="flex items-center gap-2 text-white px-4 py-2 border-r border-white/20 last:border-0">
//               <Calendar className="w-5 h-5 text-indigo-300" />
//               <span className="font-medium">July 28-30, 2026</span>
//             </div>
//             <div className="flex items-center gap-2 text-white px-4 py-2 border-r border-white/20 last:border-0">
//               <MapPin className="w-5 h-5 text-indigo-300" />
//               <span className="font-medium">Crowne Plaza, Rome</span>
//             </div>
//             <div className="flex items-center gap-2 text-white px-4 py-2">
//               <Clock className="w-5 h-5 text-indigo-300" />
//               <span className="font-medium">CET (UTC+1)</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Sections */}
//       <div className="container mx-auto px-4 md:px-6 py-16 space-y-16 max-w-6xl">

//         {/* 1. Program Overview */}
//         <section id="overview" className="scroll-mt-28 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
//           <div className="flex items-start gap-4">
//             <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600 shrink-0">
//               <MonitorPlay className="w-8 h-8" />
//             </div>
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Overview</h2>
//               <p className="text-gray-600 leading-relaxed text-lg mb-6">
//                 AIMLR 2026 offers a multidisciplinary platform connecting global innovators from academia, industry, and government. 
//                 Our curated program is designed to facilitate knowledge exchange through a blend of 
//                 formal presentations, interactive workshops, and networking opportunities. 
//                 Join us for three days of cutting-edge discussions on the latest advancements in applied machine learning and research.
//               </p>
//               <div className="grid md:grid-cols-3 gap-4">
//                 {['Keynote Sessions', 'Research Tracks', 'Networking Galas'].map((item) => (
//                   <div key={item} className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-50 px-4 py-3 rounded-lg border border-gray-100">
//                     <CheckCircle2 className="w-4 h-4 text-indigo-600" />
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* 2. Agenda (Day 1, 2, 3) */}
//         <section id="agenda" className="scroll-mt-28">
//           {/* <div className="flex items-center justify-between mb-8">
//             <h2 className="text-3xl font-bold text-gray-900">Detailed Agenda</h2>
            
//           </div> */}
//           {/* Wrapped in a clean container */}
         
//              <Agenda />
        
//         </section>

//         {/* Grid Layout for Workshops & Tutorials */}
//         <div className="grid md:grid-cols-2 gap-8">
            
//           {/* 3. Workshops */}
//           <section id="workshops" className="scroll-mt-28 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
//                 <BookOpen className="w-6 h-6" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900">Workshops</h2>
//             </div>
//             <p className="text-gray-600 mb-6 flex-grow">
//               Participate in intensive, hands-on sessions led by industry pioneers. 
//               Bring your laptops for code-along modules.
//             </p>
//             <div className="space-y-3">
//               <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Featured Tracks</h4>
//               {['Applied NLP in Healthcare', 'Edge AI Deployment', 'Ethical AI Frameworks'].map(track => (
//                 <div key={track} className="flex items-center justify-between group p-3 rounded-lg hover:bg-purple-50 transition cursor-default">
//                   <span className="text-gray-700 font-medium group-hover:text-purple-700">{track}</span>
//                   <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-purple-500 opacity-0 group-hover:opacity-100 transition" />
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* 4. Tutorials */}
//           <section id="tutorials" className="scroll-mt-28 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
//                 <MonitorPlay className="w-6 h-6" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900">Tutorials</h2>
//             </div>
//             <p className="text-gray-600 mb-6 flex-grow">
//               Deep-dive educational sessions catering to beginner and advanced practitioners.
//               Focus on methodology and theory.
//             </p>
//             <div className="space-y-3">
//               <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Upcoming Topics</h4>
//               {['Intro to Large Language Models', 'Reinforcement Learning', 'Computer Vision Architectures'].map(track => (
//                 <div key={track} className="flex items-center justify-between group p-3 rounded-lg hover:bg-blue-50 transition cursor-default">
//                   <span className="text-gray-700 font-medium group-hover:text-blue-700">{track}</span>
//                   <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition" />
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>

//         {/* 5. Panel Discussions */}
//         <section id="panels" className="scroll-mt-28">
//            <div className="bg-gradient-to-r from-slate-800 to-indigo-900 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
//               <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-4 text-indigo-300">
//                     <Users className="w-6 h-6" />
//                     <span className="font-semibold tracking-wide uppercase">Interactive Sessions</span>
//                   </div>
//                   <h2 className="text-3xl font-bold mb-4">Panel Discussions</h2>
//                   <p className="text-indigo-100 leading-relaxed mb-6">
//                     Join the debate. Experts from academia, government, and industry discuss 
//                     the "black box" problem, regulatory challenges, and the future of human-AI collaboration.
//                   </p>
//                   <button className="text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg transition">
//                     View Panelist Bios
//                   </button>
//                 </div>
//                 <div className="md:w-1/3 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
//                    <h3 className="font-semibold text-lg mb-3">Key Topics</h3>
//                    <ul className="space-y-2 text-sm text-indigo-200">
//                       <li className="flex gap-2"><span className="text-indigo-400">•</span> AI in Governance</li>
//                       <li className="flex gap-2"><span className="text-indigo-400">•</span> Sustainable Computing</li>
//                       <li className="flex gap-2"><span className="text-indigo-400">•</span> The Future of Work</li>
//                    </ul>
//                 </div>
//               </div>
//            </div>
//         </section>

//         {/* 6. Poster Sessions */}
//         <section id="posters" className="scroll-mt-28">
//           <div className="flex flex-col md:flex-row gap-6 items-center bg-white border-l-4 border-indigo-500 shadow-sm rounded-r-xl p-8">
//             <div className="p-4 bg-indigo-50 rounded-full shrink-0">
//                <Presentation className="w-10 h-10 text-indigo-600" />
//             </div>
//             <div className="flex-grow">
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">Poster Sessions</h2>
//               <p className="text-gray-600">
//                 A casual environment to browse innovative findings. Researchers will stand by their 
//                 work for interactive Q&A. This is a prime opportunity for early-career researchers 
//                 to network.
//               </p>
//             </div>
//             <div className="shrink-0 text-right">
//                <span className="block text-3xl font-bold text-gray-900">50+</span>
//                <span className="text-sm text-gray-500 uppercase font-medium">Projects on Display</span>
//             </div>
//           </div>
//         </section>

//         {/* 7 & 8. PDF Download & Timezone (Grouped) */}
//         <div className="grid md:grid-cols-2 gap-8">
//           <section id="program-pdf" className="scroll-mt-28 bg-indigo-600 rounded-2xl p-8 text-white shadow-lg shadow-indigo-200 flex flex-col justify-between">
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <FileText className="w-6 h-6 text-indigo-200" />
//                 <h2 className="text-xl font-bold">Program at a Glance</h2>
//               </div>
//               <p className="text-indigo-100 mb-6">
//                 Prefer a hard copy? Download the condensed version of the schedule, including floor maps and contact info.
//               </p>
//             </div>
//             <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition shadow-sm">
//               <Download className="w-4 h-4" />
//               Download Schedule PDF
//             </button>
//           </section>

//           <section id="timezone" className="scroll-mt-28 bg-slate-800 rounded-2xl p-8 text-white shadow-lg flex flex-col justify-between">
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <Globe className="w-6 h-6 text-blue-400" />
//                 <h2 className="text-xl font-bold">Time Zone Information</h2>
//               </div>
//               <p className="text-slate-300 mb-6">
//                 All times are displayed in <strong>Central European Time (CET)</strong>. 
//                 For virtual attendees, please ensure you convert these slots to your local time.
//               </p>
//             </div>
//             <div className="px-4 py-3 bg-slate-700/50 rounded-lg text-center text-sm text-slate-300 border border-slate-600">
//               Current Conference Time: <span className="text-white font-mono font-bold">14:00 CET</span>
//             </div>
//           </section>
//         </div>

//       </div>

//       <EndFooter />
//     </div>
//   );
// }

// export default ProgramSchedulePage;




import React from 'react';
import { 
  Calendar, Clock, MapPin, FileText, Globe, MonitorPlay, 
  CheckCircle2, ArrowRight, Download, BookOpen, Users, Presentation 
} from 'lucide-react';
import Agenda from '../components/Agenda';
import ConferenceActivities from '../components/ConferenceActivities';

// Removed Header and EndFooter imports because this is now an inner component
// If you need the Agenda component, ensure the path '../components/Agenda' is correct

const ProgramSchedulePage: React.FC = () => {
  return (
    // CHANGED: Removed 'min-h-screen', 'bg-gray-50', and 'text-gray-800' (inherited from parent)
    // CHANGED: Added 'w-full' to ensure it fills the parent column
    <div className="w-full font-sans text-gray-800">

      {/* Hero Section */}
      {/* CHANGED: Removed global container classes. Adjusted padding to fit the box better. */}


      {/* Content Sections */}
      {/* CHANGED: Removed 'container mx-auto'. Reduced py-16 to py-4. */}
      <div className="w-full space-y-8">

        {/* 1. Program Overview */}


        {/* 2. Agenda Component */}
        <section id="agenda">
             <Agenda />
        </section>

        {/* Grid Layout for Workshops & Tutorials */}
 


        <ConferenceActivities />

        {/* 7 & 8. PDF Download & Timezone */}
        {/* <div className="grid lg:grid-cols-2 gap-6">
          <section className="bg-indigo-600 rounded-xl p-6 text-white shadow-lg shadow-indigo-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-indigo-200" />
                <h2 className="text-lg font-bold">Program at a Glance</h2>
              </div>
              <p className="text-indigo-100 text-sm mb-4">
                Download the condensed version of the schedule with floor maps.
              </p>
            </div>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition text-sm">
              <Download className="w-4 h-4" />
              Download Schedule PDF
            </button>
          </section>

          <section className="bg-slate-800 rounded-xl p-6 text-white shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <h2 className="text-lg font-bold">Time Zone</h2>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                All times are in <strong>Central European Time (CET)</strong>.
              </p>
            </div>
            <div className="px-3 py-2 bg-slate-700/50 rounded text-center text-sm text-slate-300 border border-slate-600">
              Current Time: <span className="text-white font-mono font-bold">14:00 CET</span>
            </div>
          </section>
        </div> */}

      </div>
    </div>
  );
}

export default ProgramSchedulePage;