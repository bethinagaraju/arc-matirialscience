// import React from 'react';
// import Header from '../components/Header';
// import { Link } from 'react-router-dom';
// import { 
//   ShieldCheck, 
//   Users, 
//   Search, 
//   RefreshCw, 
//   XCircle, 
//   AlertTriangle, 
//   Scale, 
//   BookOpen,
//   CheckCircle2
// } from 'lucide-react';

// function ReviewProcessPage() {
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="font-sans bg-[#F8FAFC] min-h-screen text-slate-800">
//       <Header />
      
//       {/* --- HERO SECTION --- */}
//       <div className="bg-[#312e81] bg-[url('https://www.transparenttextures.com/patterns/dark-circles.png')] pt-12 pb-8 border-b border-gray-200">
//         <div className="container mx-auto px-6 max-w-6xl">
//            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
//               <ShieldCheck className="w-4 h-4" />
//               Scientific Integrity
//            </div>
//            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
//              Review Process & Policies
//            </h1>
//            <p className="text-xl text-white max-w-3xl font-light leading-relaxed">
//              We adhere to rigorous peer-review standards to ensure the validity, quality, and originality of every published paper.
//            </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-6 max-w-6xl py-12">
//         <div className="grid lg:grid-cols-12 gap-12">
          
//           {/* --- MAIN CONTENT (Left - Span 8) --- */}
//           <div className="lg:col-span-8 space-y-12">
            
//             {/* 1. KEY METRICS DASHBOARD (Mandatory Requirements) */}
//             <section id="standards" className="scroll-mt-24">
//                <h2 className="text-xl font-bold text-slate-900 mb-4">Key Standards</h2>
//                <div className="grid sm:grid-cols-3 gap-4">
//                   {/* Reviewers */}
//                   <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start">
//                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mb-3">
//                         <Users className="w-5 h-5" />
//                      </div>
//                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Reviewers per Paper</span>
//                      <span className="text-2xl font-bold text-slate-900 mt-1">2–3 Experts</span>
//                   </div>

//                   {/* Tool */}
//                   <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start">
//                      <div className="p-2 bg-orange-50 text-orange-600 rounded-lg mb-3">
//                         <Search className="w-5 h-5" />
//                      </div>
//                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Plagiarism Tool</span>
//                      <span className="text-2xl font-bold text-slate-900 mt-1">iThenticate</span>
//                   </div>

//                   {/* Similarity */}
//                   <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start">
//                      <div className="p-2 bg-red-50 text-red-600 rounded-lg mb-3">
//                         <AlertTriangle className="w-5 h-5" />
//                      </div>
//                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Max Similarity</span>
//                      <span className="text-2xl font-bold text-slate-900 mt-1">15% Limit</span>
//                   </div>
//                </div>
//             </section>

//             {/* 2. PLAGIARISM DETAILS */}
//             <section id="plagiarism" className="scroll-mt-24">
//                <h2 className="text-2xl font-bold text-slate-900 mb-4">Plagiarism Policy</h2>
//                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
//                   <p className="text-slate-600 leading-relaxed mb-4">
//                      ICAMLR has a zero-tolerance policy for plagiarism. All submissions are automatically screened using <strong>iThenticate</strong> upon receipt. 
//                   </p>
//                   <ul className="space-y-3">
//                      <li className="flex items-start gap-3 text-sm text-slate-600">
//                         <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
//                         <span>Papers exceeding <strong>15% similarity</strong> (excluding references) are immediately rejected.</span>
//                      </li>
//                      <li className="flex items-start gap-3 text-sm text-slate-600">
//                         <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
//                         <span>Self-plagiarism (recycling one's own work without citation) is also penalized.</span>
//                      </li>
//                   </ul>
//                </div>
//             </section>

//             {/* 3. CONFLICT OF INTEREST */}
//             <section id="conflict" className="scroll-mt-24">
//                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//                   <Scale className="w-6 h-6 text-indigo-600" /> Conflict of Interest
//                </h2>
//                <div className="prose prose-slate max-w-none text-slate-600">
//                   <p>
//                      To maintain impartiality, strict policies regarding conflicts of interest are enforced. 
//                      Reviewers must recuse themselves if they:
//                   </p>
//                   <div className="grid sm:grid-cols-2 gap-4 not-prose mt-4">
//                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm font-medium">
//                         Have a recent collaboration with authors (last 3 years).
//                      </div>
//                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm font-medium">
//                         Share an institutional affiliation.
//                      </div>
//                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm font-medium">
//                         Have a direct financial interest in the work.
//                      </div>
//                   </div>
//                </div>
//             </section>

//             {/* 4. RE-REVIEW POLICY */}
//             <section id="rereview" className="scroll-mt-24">
//                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//                   <RefreshCw className="w-6 h-6 text-blue-600" /> Re-review Policy
//                </h2>
//                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
//                   <p className="text-slate-600 mb-4">
//                      Authors of papers marked as "Borderline" or "Major Revisions" have one opportunity to address reviewer concerns.
//                   </p>
//                   <div className="pl-4 border-l-2 border-blue-200 space-y-4">
//                      <div>
//                         <h4 className="font-bold text-slate-900 text-sm">Feedback Loop</h4>
//                         <p className="text-sm text-slate-500">Authors receive detailed line-by-line feedback.</p>
//                      </div>
//                      <div>
//                         <h4 className="font-bold text-slate-900 text-sm">Verification</h4>
//                         <p className="text-sm text-slate-500">The revised paper is sent back to the <span className="font-semibold text-slate-700">original reviewers</span> (whenever possible) to verify that concerns were addressed.</p>
//                      </div>
//                   </div>
//                </div>
//             </section>

//             {/* 5. REJECTION CRITERIA */}
//             <section id="rejection" className="scroll-mt-24">
//                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//                   <XCircle className="w-6 h-6 text-red-600" /> Rejection Criteria
//                </h2>
//                <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
//                   <div className="grid md:grid-cols-2 gap-8">
//                      <div>
//                         <h3 className="font-bold text-red-900 mb-3 border-b border-red-200 pb-2">Technical Grounds</h3>
//                         <ul className="space-y-2">
//                            <li className="text-sm text-red-800">• Lack of original contribution</li>
//                            <li className="text-sm text-red-800">• Major methodological flaws</li>
//                            <li className="text-sm text-red-800">• Insufficient data validation</li>
//                            <li className="text-sm text-red-800">• Results cannot be reproduced</li>
//                         </ul>
//                      </div>
//                      <div>
//                         <h3 className="font-bold text-red-900 mb-3 border-b border-red-200 pb-2">Presentation Grounds</h3>
//                         <ul className="space-y-2">
//                            <li className="text-sm text-red-800">• Poor writing quality</li>
//                            <li className="text-sm text-red-800">• Incomplete bibliography</li>
//                            <li className="text-sm text-red-800">• Violation of formatting rules</li>
//                         </ul>
//                      </div>
//                   </div>
//                </div>
//             </section>

//             {/* 6. RETRACTION POLICY */}
//             <section id="retraction" className="scroll-mt-24">
//                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//                   <AlertTriangle className="w-6 h-6 text-orange-600" /> Retraction Policy
//                </h2>
//                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
//                   <p className="text-slate-600 mb-4">
//                      We adhere to COPE guidelines for retractions. A paper will be retracted post-publication if:
//                   </p>
//                   <ul className="space-y-3">
//                      <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg">
//                         <span className="font-bold text-slate-400">01</span>
//                         <span className="text-sm text-slate-700">There is clear evidence of scientific misconduct (data fabrication).</span>
//                      </li>
//                      <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg">
//                         <span className="font-bold text-slate-400">02</span>
//                         <span className="text-sm text-slate-700">It is found to have been published elsewhere (redundant publication).</span>
//                      </li>
//                      <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg">
//                         <span className="font-bold text-slate-400">03</span>
//                         <span className="text-sm text-slate-700">Serious errors invalidate the results/conclusions.</span>
//                      </li>
//                   </ul>
//                   <p className="mt-4 text-xs text-slate-400 italic">
//                      *Retracted papers remain indexed but are watermarked "RETRACTED".
//                   </p>
//                </div>
//             </section>

//           </div>

//           {/* --- RIGHT SIDEBAR (Sticky Navigation) --- */}
//           <div className="lg:col-span-4">
//             <div className="sticky top-44 space-y-6">
               
//                {/* Table of Contents */}
//                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
//                   <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
//                      <BookOpen className="w-4 h-4" /> Quick Navigation
//                   </h3>
//                   <nav className="space-y-1">
//                      <SidebarLink onClick={() => scrollToSection('standards')} label="Key Standards & Metrics" active />
//                      <SidebarLink onClick={() => scrollToSection('plagiarism')} label="Plagiarism Policy" />
//                      <SidebarLink onClick={() => scrollToSection('conflict')} label="Conflict of Interest" />
//                      <SidebarLink onClick={() => scrollToSection('rereview')} label="Re-review Policy" />
//                      <SidebarLink onClick={() => scrollToSection('rejection')} label="Rejection Criteria" />
//                      <SidebarLink onClick={() => scrollToSection('retraction')} label="Retraction Policy" />
//                   </nav>
//                </div>

//                {/* Help Box */}
//                <div className="bg-indigo-900 text-white rounded-2xl p-6 shadow-xl">
//                   <h3 className="font-bold text-lg mb-2">Need clarification?</h3>
//                   <p className="text-indigo-200 text-sm mb-6">
//                      Our Ethics Committee handles inquiries regarding specific policy applications.
//                   </p>
//                   <Link to="/contact">
//                     <button className="w-full bg-white text-indigo-900 font-bold py-3 px-4 rounded-xl hover:bg-indigo-50 transition-colors text-sm">
//                       Contact Ethics Committee
//                     </button>
//                   </Link>
//                </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// // Helper Component for Sidebar Links
// function SidebarLink({ label, onClick, active }) {
//    return (
//       <button 
//          onClick={onClick}
//          className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
//             active 
//             ? 'text-indigo-700 bg-indigo-50 font-semibold' 
//             : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
//          }`}
//       >
//          {label}
//       </button>
//    )
// }

// export default ReviewProcessPage;


import React from 'react';
import Header from '../components/Header';
import { 
  ShieldCheck, 
  Users, 
  Search, 
  RefreshCw, 
  XCircle, 
  AlertTriangle, 
  Scale, 
  BookOpen,
  CheckCircle2,
  Gavel, // Added for Appeal Policy
  Mail   // Added for Contact section
} from 'lucide-react';
import EndFooter from '../components/EndFooter';

function ReviewProcessPage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans bg-[#F8FAFC] min-h-screen text-slate-800">
      <Header />
      
      {/* --- HERO SECTION --- */}
      <div className="bg-[#312e81] bg-[url('https://www.transparenttextures.com/patterns/dark-circles.png')] pt-12 pb-8 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              Scientific Integrity
           </div>
           <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
             Review Process & Policies
           </h1>
           <p className="text-xl text-white max-w-3xl font-light leading-relaxed">
             We adhere to rigorous peer-review standards to ensure the validity, quality, and originality of every published paper.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* --- MAIN CONTENT (Left - Span 8) --- */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. KEY METRICS DASHBOARD */}
            <section id="standards" className="scroll-mt-24">
               {/* <h2 className="text-xl font-bold text-slate-900 mb-4">Review Standards</h2> */}
               <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600" /> Review Standards
               </h2>
               <div className="grid sm:grid-cols-3 gap-4">
                  {/* Reviewers */}
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start">
                     <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mb-3">
                        <Users className="w-5 h-5" />
                     </div>
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Reviewers per Paper</span>
                     <span className="text-xl font-bold text-slate-900 mt-1">2–3 Subject Experts</span>
                  </div>

                  {/* Tool */}
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start">
                     <div className="p-2 bg-orange-50 text-orange-600 rounded-lg mb-3">
                        <Search className="w-5 h-5" />
                     </div>
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Plagiarism Screening</span>
                     <span className="text-xl font-bold text-slate-900 mt-1">Professional Tool</span>
                  </div>

                  {/* Similarity */}
                  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start">
                     <div className="p-2 bg-red-50 text-red-600 rounded-lg mb-3">
                        <AlertTriangle className="w-5 h-5" />
                     </div>
                     <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Max Similarity</span>
                     <span className="text-xl font-bold text-slate-900 mt-1">15% Limit</span>
                  </div>
               </div>
            </section>

            {/* 2. PLAGIARISM DETAILS */}
            {/* <section id="plagiarism" className="scroll-mt-24">
               <h2 className="text-2xl font-bold text-slate-900 mb-4">Plagiarism Policy</h2>
               <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <p className="text-slate-600 leading-relaxed mb-4">
                     The conference maintains a zero-tolerance policy for plagiarism and unethical academic practices. All submissions undergo an initial plagiarism check using a professional similarity detection tool.
                  </p>
                  <ul className="space-y-3">
                     <li className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Papers exceeding <strong>15% similarity</strong> (excluding references, common terminology, and methodological descriptions) will be rejected without review.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Self-plagiarism, duplicate submission, or recycling previously published work is not permitted.</span>
                     </li>
                     <li className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span>Final acceptance is conditional upon clearing plagiarism screening.</span>
                     </li>
                  </ul>
               </div>
            </section> */}

            <section id="plagiarism" className="scroll-mt-24">
 
  <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" /> Plagiarism Screening
               </h2>
  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
    <p className="text-slate-600 leading-relaxed mb-4">
      The conference maintains a zero-tolerance policy for plagiarism and unethical academic practices. All submissions undergo an initial plagiarism check using a professional similarity detection tool.
    </p>
    <ul className="space-y-3">
      <li className="flex items-start gap-3 text-sm text-slate-600">
        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
        <span>Papers exceeding <strong>15% similarity</strong> (excluding references, common terminology, and methodological descriptions) will be rejected without review.</span>
      </li>
      <li className="flex items-start gap-3 text-sm text-slate-600">
        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
        <span>Self-plagiarism, duplicate submission, or recycling previously published work is not permitted.</span>
      </li>
      <li className="flex items-start gap-3 text-sm text-slate-600">
        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
        <span>Final acceptance is conditional upon clearing plagiarism screening.</span>
      </li>
    </ul>
  </div>
</section>



            {/* 3. CONFLICT OF INTEREST */}
            <section id="conflict" className="scroll-mt-24">
               <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-indigo-600" /> Conflict of Interest Policy
               </h2>
               <div className="prose prose-slate max-w-none text-slate-600">
                  <p>
                     To ensure fair evaluation, reviewers must decline assignments if they fall under any of the following categories. Assignments are redistributed accordingly in such cases.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 not-prose mt-4">
                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm font-medium">
                        Have collaborated with any author within the last 3 years.
                     </div>
                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm font-medium">
                        Share the same institutional affiliation.
                     </div>
                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm font-medium">
                        Have a direct personal or financial interest in the work.
                     </div>
                     <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm font-medium">
                        Supervise or are supervised by any of the authors.
                     </div>
                  </div>
               </div>
            </section>

            {/* 4. RE-REVIEW POLICY */}
            <section id="rereview" className="scroll-mt-24">
               <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <RefreshCw className="w-6 h-6 text-blue-600" /> Re-review Policy
               </h2>
               <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <p className="text-slate-600 mb-4">
                     Authors receiving a decision of <strong>“Borderline Review”</strong> or <strong>“Major Revision”</strong> may submit a revised version addressing reviewer comments.
                  </p>
                  <div className="pl-4 border-l-2 border-blue-200 space-y-4">
                     <div>
                        <h4 className="font-bold text-slate-900 text-sm">Feedback Loop</h4>
                        <p className="text-sm text-slate-500">Authors receive structured review feedback highlighting required corrections.</p>
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-sm">Verification</h4>
                        <p className="text-sm text-slate-500">Revised manuscripts are evaluated by the original reviewers whenever possible. <span className="font-semibold text-slate-700">Only one cycle of re-review is permitted.</span></p>
                     </div>
                  </div>
               </div>
            </section>

            {/* 5. REJECTION CRITERIA */}
            <section id="rejection" className="scroll-mt-24">
               <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-600" /> Rejection Criteria
               </h2>
               <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                  <div className="grid md:grid-cols-2 gap-8">
                     <div>
                        <h3 className="font-bold text-red-900 mb-3 border-b border-red-200 pb-2">Technical Reasons</h3>
                        <ul className="space-y-2">
                           <li className="text-sm text-red-800">• Lack of original contribution</li>
                           <li className="text-sm text-red-800">• Serious methodological flaws</li>
                           <li className="text-sm text-red-800">• Weak data support or unverifiable results</li>
                           <li className="text-sm text-red-800">• Inadequate novelty</li>
                        </ul>
                     </div>
                     <div>
                        <h3 className="font-bold text-red-900 mb-3 border-b border-red-200 pb-2">Presentation Reasons</h3>
                        <ul className="space-y-2">
                           <li className="text-sm text-red-800">• Poor writing quality</li>
                           <li className="text-sm text-red-800">• Missing references or incomplete bibliography</li>
                           <li className="text-sm text-red-800">• Formatting violations</li>
                           <li className="text-sm text-red-800">• Lack of clarity in objectives or conclusions</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </section>

            {/* 6. RETRACTION POLICY */}
            <section id="retraction" className="scroll-mt-24">
               <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-orange-600" /> Retraction Guidelines
               </h2>
               <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <p className="text-slate-600 mb-4">
                     The conference follows the principles of COPE (Committee on Publication Ethics) where applicable. A published paper may be retracted if:
                  </p>
                  <ul className="space-y-3">
                     <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg">
                        <span className="font-bold text-slate-400">01</span>
                        <span className="text-sm text-slate-700">There is verified scientific misconduct (e.g., data fabrication).</span>
                     </li>
                     <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg">
                        <span className="font-bold text-slate-400">02</span>
                        <span className="text-sm text-slate-700">The work is found to be previously published elsewhere.</span>
                     </li>
                     <li className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg">
                        <span className="font-bold text-slate-400">03</span>
                        <span className="text-sm text-slate-700">Major errors invalidate the findings.</span>
                     </li>
                  </ul>
                  <p className="mt-4 text-xs text-slate-400 italic">
                     *In case of retraction, the publishing partner will update the public record according to its policies.
                  </p>
               </div>
            </section>

            {/* 7. APPEAL POLICY (NEW) */}
            <section id="appeal" className="scroll-mt-24">
               <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Gavel className="w-6 h-6 text-purple-600" /> Appeal Policy
               </h2>
               <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                  <p className="text-slate-600 mb-4">
                     Authors may request an appeal only under specific circumstances. Appeals are evaluated by the Ethics Committee, and the decision of the committee is final.
                  </p>
                  <div className="bg-purple-50 p-5 rounded-xl border border-purple-100">
                     <h4 className="text-sm font-bold text-purple-900 uppercase tracking-wide mb-3">Valid Grounds for Appeal</h4>
                     <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-purple-900">
                           <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                           There is evidence of factual error in the review.
                        </li>
                        <li className="flex items-center gap-2 text-sm text-purple-900">
                           <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                           A conflict of interest was not properly handled.
                        </li>
                        <li className="flex items-center gap-2 text-sm text-purple-900">
                           <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                           Reviewer comments contradict each other significantly.
                        </li>
                     </ul>
                  </div>
               </div>
            </section>

          </div>

          {/* --- RIGHT SIDEBAR (Sticky Navigation) --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-44 space-y-6">
               
               {/* Table of Contents */}
               <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                     <BookOpen className="w-4 h-4" /> Quick Navigation
                  </h3>
                  <nav className="space-y-1">
                     <SidebarLink onClick={() => scrollToSection('standards')} label="Key Standards & Metrics" active />
                     <SidebarLink onClick={() => scrollToSection('plagiarism')} label="Plagiarism Policy" />
                     <SidebarLink onClick={() => scrollToSection('conflict')} label="Conflict of Interest" />
                     <SidebarLink onClick={() => scrollToSection('rereview')} label="Re-review Policy" />
                     <SidebarLink onClick={() => scrollToSection('rejection')} label="Rejection Criteria" />
                     <SidebarLink onClick={() => scrollToSection('retraction')} label="Retraction Policy" />
                     <SidebarLink onClick={() => scrollToSection('appeal')} label="Appeal Policy" />
                  </nav>
               </div>

               {/* Help Box */}
               <div className="bg-indigo-900 text-white rounded-2xl p-6 shadow-xl">
                  <h3 className="font-bold text-lg mb-2">Need clarification?</h3>
                  <p className="text-indigo-200 text-sm mb-4">
                     Our Ethics Committee handles inquiries regarding specific policy applications.
                  </p>
                  
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-3 mb-1">
                      <Mail className="w-4 h-4 text-indigo-200" />
                      <span className="text-xs font-bold text-indigo-200 uppercase">For Policy Queries</span>
                    </div>
                    <a href="mailto:ethics@icamlr2026.org" className="text-white font-semibold hover:text-indigo-200 transition-colors break-all">
                      ethics@icamlr2026.org
                    </a>
                  </div>
               </div>

            </div>
          </div>

        </div>
      </div>
      <EndFooter />
    </div>
  );
}

// Helper Component for Sidebar Links
function SidebarLink({ label, onClick, active }) {
   return (
      <button 
         onClick={onClick}
         className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
            active 
            ? 'text-indigo-700 bg-indigo-50 font-semibold' 
            : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
         }`}
      >
         {label}
      </button>
   )
}

export default ReviewProcessPage;