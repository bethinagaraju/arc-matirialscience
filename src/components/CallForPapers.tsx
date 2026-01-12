// // import React from "react";
// // import { 
// //   FileText, 
// //   Users, 
// //   Upload, 
// //   Target, 
// //   Presentation, 
// //   CheckCircle, 
// //   Award, 
// //   ChevronRight,
// //   ArrowRight
// // } from "lucide-react";
// // import { Link } from "react-router-dom";

// // const CallForPapers: React.FC = () => {
// //   return (
// //     <div className="max-w-5xl mx-auto px-6 py-12 font-sans text-gray-800">

// //       {/* Page Header */}
// //       <div className="mb-12 border-b-2 border-[#304278] pb-4">
// //         <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
// //           CALL FOR PAPERS – AIMLR 2026
// //         </h1>
// //         <p className="mt-2 text-gray-500 text-lg">
// //           Submit your research and join the global conversation on AI, ML and Robotics.
// //         </p>
// //       </div>

// //       {/* About the Call */}
// //       <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
// //         <div className="flex items-center gap-3 mb-4">
// //           <FileText className="w-6 h-6 text-blue-900" />
// //           <h3 className="text-2xl font-bold text-gray-900">About the Call</h3>
// //         </div>
// //         <p className="text-gray-700 leading-relaxed">
// //           AI, ML & Robotics Conference 2026 invites full-length research papers that present original research contributions, innovative methodologies, or significant applications in the fields of Artificial Intelligence, Machine Learning, and Robotics.
// //         </p>
// //       </div>

// //       <div className="grid gap-4">

// //         {/* Who Should Submit? */}
// //         <section>
// //           <div className="flex items-center gap-3">
// //             <div className="p-2 rounded-lg text-blue-900">
// //               <Users className="w-6 h-6" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900">Who Should Submit?</h3>
// //           </div>
// //           <ul className="space-y-1 ml-2 md:ml-12">
// //             {[
// //               "Professors & Senior Researchers",
// //               "Research Scientists",
// //               "Industry Researchers",
// //               "Academicians with completed research work"
// //             ].map((item, idx) => (
// //               <li key={idx} className="flex items-start gap-3">
// //                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// //                 <span className="leading-relaxed text-gray-700">{item}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </section>

// //         <hr className="border-gray-100" />

// //         {/* Paper Guidelines */}
// //         <section>
// //           <div className="flex items-center gap-3">
// //             <div className="p-2 rounded-lg text-blue-900">
// //               <Upload className="w-6 h-6" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900">Paper Guidelines</h3>
// //           </div>
// //           <ul className="space-y-1 ml-2 md:ml-12">
// //             {[
// //               "Length: 6–10 pages",
// //               "Original, unpublished work",
// //               "Clear methodology and results"
// //             ].map((item, idx) => (
// //               <li key={idx} className="flex items-start gap-3">
// //                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// //                 <span className="leading-relaxed text-gray-700">{item}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </section>

// //         <hr className="border-gray-100" />

// //         {/* Topics Covered */}
// //         {/* <section>
// //           <div className="flex items-center gap-3">
// //             <div className="p-2 rounded-lg text-blue-900">
// //               <Target className="w-6 h-6" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900">Topics Covered</h3>
// //           </div>
// //           <p className="text-gray-600 mb-4 ml-2 md:ml-12">(All topics listed under Call for Abstracts apply)</p>
// //         </section> */}

// //                 <section>
// //           <div className="flex items-center gap-3">
// //             <div className="p-2 rounded-lg text-blue-900">
// //               <Target className="w-6 h-6" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900">Topics of Interest</h3>
// //           </div>
          
// //           <ul className="space-y-1 ml-2 md:ml-12">
// //             {[
// //               "Artificial Intelligence",
// //               "Machine Learning & Deep Learning",
// //               "Robotics & Autonomous Systems",
// //               "Generative AI",
// //               "AI in Healthcare",
// //               "Computer Vision & NLP",
// //               "Human–Robot Interaction",
// //               "Smart Systems & IoT"
// //             ].map((item, idx) => (
// //               <li key={idx} className="flex items-start gap-3">
// //                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// //                 <span className="leading-relaxed text-gray-700">{item}</span>
// //               </li>
// //             ))}
// //             <li className="flex items-start gap-3">
// //               <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// //               <Link
// //                 to="/sessions"
// //                 className="leading-relaxed text-blue-600 hover:text-blue-800 underline"
// //                 title="View more topics for AIMLR 2026 Conference"
// //                 aria-label="View more topics for AIMLR 2026 Conference"
// //               >
// //                 more topics
// //               </Link>
// //             </li>
// //           </ul>



          
          
// //         </section>

// //         <hr className="border-gray-100" />

// //         {/* Review Process */}
// //         <section>
// //           <div className="flex items-center gap-3">
// //             <div className="p-2 rounded-lg text-blue-900">
// //               <CheckCircle className="w-6 h-6" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900">Review Process</h3>
// //           </div>
// //           <p className="leading-relaxed text-gray-700 ml-2 md:ml-12">
// //             Submitted papers will undergo a peer-review process to ensure academic quality and relevance.
// //           </p>
// //         </section>

// //         <hr className="border-gray-100" />

// //         {/* Presentation Options */}
// //         <section>
// //           <div className="flex items-center gap-3">
// //             <div className="p-2 rounded-lg text-blue-900">
// //               <Presentation className="w-6 h-6" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900">Presentation Options</h3>
// //           </div>
// //           <ul className="space-y-1 ml-2 md:ml-12">
// //             {[
// //               "Oral Presentation (In-Person or Virtual)"
// //             ].map((item, idx) => (
// //               <li key={idx} className="flex items-start gap-3">
// //                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// //                 <span className="leading-relaxed text-gray-700">{item}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </section>

// //         <hr className="border-gray-100" />

// //         {/* Benefits */}
// //         <section>
// //           <div className="flex items-center gap-3">
// //             <div className="p-2 rounded-lg text-blue-900">
// //               <Award className="w-6 h-6" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900">Benefits</h3>
// //           </div>
// //           <ul className="space-y-1 ml-2 md:ml-12">
// //             {[
// //               "Publication in conference proceedings",
// //               "Certificate of Presentation",
// //               "Global academic visibility",
// //               "Professional networking"
// //             ].map((item, idx) => (
// //               <li key={idx} className="flex items-start gap-3">
// //                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// //                 <span className="leading-relaxed text-gray-700">{item}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </section>

// //       </div>

// //       {/* Buttons */}
// //       <div className="flex flex-col sm:flex-row gap-4 mt-16 border-t pt-8">
        
// //         <Link
// //           to="/register"
// //           className="flex items-center justify-center gap-2 px-8 py-3 bg-[#304278] text-white font-semibold rounded hover:bg-[#304278] transition-colors"
// //           title="Register for the AIMLR 2026 Conference in Rome"
// //           aria-label="Register for the AIMLR 2026 Conference in Rome"
// //         >
// //           Register Now <ArrowRight className="w-4 h-4" />
// //         </Link>

// //         <Link
// //           to="/AbstractSubmission"
// //           className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded hover:border-[#0091b5] hover:text-[#0091b5] transition-colors"
// //           title="Submit your full paper for AIMLR 2026 Conference"
// //           aria-label="Submit your full paper for AIMLR 2026 Conference"
// //         >
// //           Submit Full Paper
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CallForPapers;


// import React from "react";
// import {
//   FileText,
//   Users,
//   Upload,
//   Target,
//   Presentation,
//   CheckCircle,
//   Award,
//   ChevronRight,
//   ArrowRight,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Section = ({
//   icon,
//   title,
//   children,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   children: React.ReactNode;
// }) => (
//   <section className="relative pl-10 py-6">
//     {/* Vertical Accent */}
//     <span className="absolute left-0 top-6 h-full w-[2px] bg-[#304278]/30" />

//     <div className="flex items-center gap-4 mb-3">
//       <div className="w-10 h-10 flex items-center justify-center border border-[#E5E7EB] bg-white">
//         {icon}
//       </div>
//       <h3 className="text-2xl font-semibold text-[#1F2937]">
//         {title}
//       </h3>
//     </div>

//     <div className="ml-2">{children}</div>
//   </section>
// );

// const List = ({ items }: { items: string[] }) => (
//   <ul className="space-y-2 mt-3">
//     {items.map((item, idx) => (
//       <li
//         key={idx}
//         className="flex items-start gap-3 text-gray-700 leading-relaxed"
//       >
//         <ChevronRight className="w-4 h-4 text-[#304278] mt-1 shrink-0" />
//         {item}
//       </li>
//     ))}
//   </ul>
// );

// const CallForPapers: React.FC = () => {
//   return (
//     <section className="bg-[#FAFAFA] py-20">
//       <div className="max-w-5xl mx-auto px-6 text-gray-800">

//         {/* Header */}
//         <header className="mb-16">
//           <h1 className="text-4xl font-bold text-[#1E3A8A]">
//             Call for Papers – AIMLR 2026
//           </h1>
//           <p className="mt-4 text-lg text-gray-600 max-w-3xl">
//             Submit your research and contribute to the global advancement of
//             Artificial Intelligence, Machine Learning, and Robotics.
//           </p>
//           <div className="mt-6 h-[1px] bg-gray-200" />
//         </header>

//         {/* About */}
//         <div className="mb-14 bg-white border border-gray-200 p-8">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="w-10 h-10 flex items-center justify-center border border-gray-200 bg-white">
//               <FileText className="w-5 h-5 text-[#304278]" />
//             </div>
//             <h2 className="text-2xl font-semibold text-gray-900">
//               About the Call
//             </h2>
//           </div>
//           <p className="text-gray-700 leading-relaxed max-w-4xl">
//             AIMLR 2026 invites full-length research papers presenting original
//             contributions, innovative methodologies, and impactful applications
//             across AI, ML, and Robotics.
//           </p>
//         </div>

//         {/* Sections */}
//         <div className="space-y-10">

//           <Section
//             icon={<Users className="w-5 h-5 text-[#304278]" />}
//             title="Who Should Submit?"
//           >
//             <List
//               items={[
//                 "Professors & Senior Researchers",
//                 "Research Scientists",
//                 "Industry Researchers",
//                 "Academicians with completed research work",
//               ]}
//             />
//           </Section>

//           <Section
//             icon={<Upload className="w-5 h-5 text-[#304278]" />}
//             title="Paper Guidelines"
//           >
//             <List
//               items={[
//                 "Length: 6–10 pages",
//                 "Original, unpublished work",
//                 "Clear methodology and validated results",
//               ]}
//             />
//           </Section>

//           <Section
//             icon={<Target className="w-5 h-5 text-[#304278]" />}
//             title="Topics of Interest"
//           >
//             <List
//               items={[
//                 "Artificial Intelligence",
//                 "Machine Learning & Deep Learning",
//                 "Robotics & Autonomous Systems",
//                 "Generative AI",
//                 "AI in Healthcare",
//                 "Computer Vision & NLP",
//                 "Human–Robot Interaction",
//                 "Smart Systems & IoT",
//               ]}
//             />
//             <div className="ml-7 mt-2">
//               <Link
//                 to="/sessions"
//                 className="text-[#304278] underline hover:text-[#1E40AF]"
//               >
//                 View all topics
//               </Link>
//             </div>
//           </Section>

//           <Section
//             icon={<CheckCircle className="w-5 h-5 text-[#304278]" />}
//             title="Review Process"
//           >
//             <p className="text-gray-700 max-w-3xl leading-relaxed mt-2">
//               All submitted papers undergo a rigorous peer-review process to
//               ensure academic quality, originality, and relevance.
//             </p>
//           </Section>

//           <Section
//             icon={<Presentation className="w-5 h-5 text-[#304278]" />}
//             title="Presentation Options"
//           >
//             <List
//               items={[
//                 "Oral Presentation (In-Person or Virtual)",
//               ]}
//             />
//           </Section>

//           <Section
//             icon={<Award className="w-5 h-5 text-[#304278]" />}
//             title="Benefits"
//           >
//             <List
//               items={[
//                 "Publication in conference proceedings",
//                 "Certificate of Presentation",
//                 "Global academic visibility",
//                 "Professional networking opportunities",
//               ]}
//             />
//           </Section>
//         </div>

//         {/* CTA */}
//         <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
//           <Link
//             to="/register"
//             className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#304278] text-white font-semibold hover:bg-[#1E3A8A] transition"
//           >
//             Register Now <ArrowRight className="w-4 h-4" />
//           </Link>

//           <Link
//             to="/AbstractSubmission"
//             className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-gray-300 text-gray-800 font-semibold hover:bg-gray-900 hover:text-white transition"
//           >
//             Submit Full Paper
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallForPapers;












import React from "react";
import {
  FileText,
  Users,
  Upload,
  Target,
  Presentation,
  CheckCircle,
  Award,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Section = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="relative pl-10 py-6">
    {/* Vertical Accent */}
    <span className="absolute left-0 top-6 h-full w-[2px] bg-[#C9AB63]/50" />

    <div className="flex items-center gap-4 mb-3">
      <div className="w-10 h-10 flex items-center justify-center border border-[#E5E7EB] bg-white">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-[#1C1F23]">
        {title}
      </h3>
    </div>

    <div className="ml-2">{children}</div>
  </section>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-2 mt-3">
    {items.map((item, idx) => (
      <li
        key={idx}
        className="flex items-start gap-3 text-[#3A3F45] leading-relaxed"
      >
        <ChevronRight className="w-4 h-4 text-[#C9AB63] mt-1 shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

const CallForPapers: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] py-8">
      <div className="max-w-5xl mx-auto px-6 text-[#2A2E33]">

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-[#1C1F23]">
            Call for Papers – AIMLR 2026
          </h1>
          <p className="mt-4 text-lg text-[#6B7280] max-w-3xl">
            Submit your research and contribute to the global advancement of
            Artificial Intelligence, Machine Learning, and Robotics.
          </p>
          <div className="mt-6 h-[1px] bg-[#E5E7EB]" />
        </header>

        {/* About */}
        <div className="mb-14 bg-white border border-[#E5E7EB] p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 flex items-center justify-center border border-[#E5E7EB] bg-white">
              <FileText className="w-5 h-5 text-[#C9AB63]" />
            </div>
            <h2 className="text-2xl font-semibold text-[#1C1F23]">
              About the Call
            </h2>
          </div>
          <p className="text-[#3A3F45] leading-relaxed max-w-4xl">
            AIMLR 2026 invites full-length research papers presenting original
            contributions, innovative methodologies, and impactful applications
            across AI, ML, and Robotics.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">

          <Section
            icon={<Users className="w-5 h-5 text-[#C9AB63]" />}
            title="Who Should Submit?"
          >
            <List
              items={[
                "Professors & Senior Researchers",
                "Research Scientists",
                "Industry Researchers",
                "Academicians with completed research work",
              ]}
            />
          </Section>

          <Section
            icon={<Upload className="w-5 h-5 text-[#C9AB63]" />}
            title="Paper Guidelines"
          >
            <List
              items={[
                "Length: 6–10 pages",
                "Original, unpublished work",
                "Clear methodology and validated results",
              ]}
            />
          </Section>

          <Section
            icon={<Target className="w-5 h-5 text-[#C9AB63]" />}
            title="Topics of Interest"
          >
            <List
              items={[
                "Artificial Intelligence",
                "Machine Learning & Deep Learning",
                "Robotics & Autonomous Systems",
                "Generative AI",
                "AI in Healthcare",
                "Computer Vision & NLP",
                "Human–Robot Interaction",
                "Smart Systems & IoT",
              ]}
            />
            <div className="ml-7 mt-2">
              <Link
                to="/sessions"
                className="text-[#C9AB63] underline hover:text-[#D6BC7A]"
              >
                View all topics
              </Link>
            </div>
          </Section>

          <Section
            icon={<CheckCircle className="w-5 h-5 text-[#C9AB63]" />}
            title="Review Process"
          >
            <p className="text-[#3A3F45] max-w-3xl leading-relaxed mt-2">
              All submitted papers undergo a rigorous peer-review process to
              ensure academic quality, originality, and relevance.
            </p>
          </Section>

          <Section
            icon={<Presentation className="w-5 h-5 text-[#C9AB63]" />}
            title="Presentation Options"
          >
            <List items={["Oral Presentation (In-Person or Virtual)"]} />
          </Section>

          <Section
            icon={<Award className="w-5 h-5 text-[#C9AB63]" />}
            title="Benefits"
          >
            <List
              items={[
                "Publication in conference proceedings",
                "Certificate of Presentation",
                "Global academic visibility",
                "Professional networking opportunities",
              ]}
            />
          </Section>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-10 border-t border-[#E5E7EB] flex flex-col sm:flex-row gap-4">
          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#1C1F23] text-white font-semibold hover:bg-[#2A2E33] transition"
          >
            Register Now <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/AbstractSubmission"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#C9AB63] text-[#1C1F23] font-semibold hover:bg-[#C9AB63] hover:text-black transition"
          >
            Submit Full Paper
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
