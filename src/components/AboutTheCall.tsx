// // import React from "react";
// // import { 
// //   FileText, 
// //   Users, 
// //   Upload, 
// //   Target, 
// //   Presentation, 
// //   Calendar, 
// //   CheckCircle, 
// //   Award, 
// //   ChevronRight,
// //   ArrowRight
// // } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import { Helmet } from "react-helmet-async";

// // const AboutTheCall: React.FC = () => {
// //   return (
// //     <>

// //     <Helmet>
// //   {/* ✅ 1. TITLE: Specific to "Call for Papers" + High Traffic Keywords */}
// //   <title>Call for Papers | AI, ML & Robotics Conference 2026 Rome</title>

// //   {/* ✅ 2. DESCRIPTION: Focuses on "Full Papers" and "Proceedings" */}
// //   <meta 
// //     name="description" 
// //     content="Submit your full research paper for the AI, ML & Robotics Conference (AIMLR 2026) in Rome. Peer-reviewed publication opportunities in conference proceedings. Deadline: July 2026." 
// //   />

// //   {/* ✅ 3. KEYWORDS: Targeted for academic publishing */}
// //   <meta 
// //     name="keywords" 
// //     content="Call for Papers AI, AI ML Robotics Conference, Research Paper Submission, Conference Proceedings, IEEE Format, Peer Review, Artificial Intelligence Journal" 
// //   />

// //   {/* ✅ 4. CANONICAL: Points to the correct page (Not /call-for-abstract) */}
// //   <link rel="canonical" href="https://roboticsaisummit.com/call-for-papers" />

// //   {/* 5. Open Graph / Facebook */}
// //   <meta property="og:type" content="website" />
// //   <meta property="og:url" content="https://roboticsaisummit.com/call-for-papers" />
// //   <meta property="og:title" content="Call for Papers - AI, ML & Robotics Conference 2026" />
// //   <meta property="og:description" content="Submit your full paper for AIMLR 2026. Join global researchers in Rome for peer-reviewed presentation and publication." />
// //   <meta property="og:image" content="https://roboticsaisummit.com/aimllogo.jpg" />
// //   <meta property="og:site_name" content="AIMLR 2026" />

// //   {/* 6. Twitter Cards */}
// //   <meta name="twitter:card" content="summary_large_image" />
// //   <meta name="twitter:title" content="Call for Papers | AIMLR 2026 Rome" />
// //   <meta name="twitter:description" content="Submit your full research paper for the premier AI, ML & Robotics conference." />
// //   <meta name="twitter:image" content="https://roboticsaisummit.com/aimllogo.jpg" />
// // </Helmet>

// //     <div className="max-w-5xl mx-auto px-6 py-12 font-sans text-gray-800">

// //       {/* Page Header */}
// //       <div className="mb-12 border-b-2 border-[#304278] pb-4">
// //         {/* <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
// //           CALL FOR ABSTRACTS 
// //         </h2> */}
// //         <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
// //           CALL FOR ABSTRACTS – AIMLR 2026
// //         </h2>
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
// //           We cordially invite researchers, academicians, industry professionals, and students to submit research abstracts for presentation at the International Conference on Artificial Intelligence, Machine Learning & Robotics (AIMLR 2026), scheduled to be held in Rome, Italy, with in-person and virtual participation options.
// //         </p>
// //         <p className="text-gray-700 leading-relaxed mt-4">
// //           This conference provides a global platform to present innovative ideas, ongoing research, and practical applications in AI, ML and Robotics.
// //         </p>
// //       </div>

// //       <div className="grid gap-4">

// //         {/* Who Can Submit? */}
// //         <section>
// //           <div className="flex items-center gap-3">
// //             <div className="p-2 rounded-lg text-blue-900">
// //               <Users className="w-6 h-6" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900">Who Can Submit?</h3>
// //           </div>
// //           <ul className="space-y-1 ml-2 md:ml-12">
// //             {[
// //               "Professors & Academicians",
// //               "Researchers & Scientists",
// //               "PhD Scholars & Postdoctoral Researchers",
// //               "Postgraduate & Undergraduate Students",
// //               "Industry Professionals"
// //             ].map((item, idx) => (
// //               <li key={idx} className="flex items-start gap-3">
// //                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// //                 <span className="leading-relaxed text-gray-700">{item}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </section>

// //         <hr className="border-gray-100" />

// //         {/* What Can Be Submitted? */}
// //         <section>
// //           <div className="flex items-center gap-3">
// //             <div className="p-2 rounded-lg text-blue-900">
// //               <Upload className="w-6 h-6" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900">What Can Be Submitted?</h3>
// //           </div>
// //           <ul className="space-y-1 ml-2 md:ml-12">
// //             {[
// //               "Research Abstract (150–300 words)",
// //               "Original or ongoing research work",
// //               "Theoretical, experimental, or applied research",
// //               "Related and interdisciplinary topics are also welcome."
// //             ].map((item, idx) => (
// //               <li key={idx} className="flex items-start gap-3">
// //                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// //                 <span className="leading-relaxed text-gray-700">{item}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </section>

// //         <hr className="border-gray-100" />

// //         {/* Topics of Interest */}
// //         <section>
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

// //         {/* Presentation Types */}
// //         <section>
// //           <div className="flex items-center gap-3">
// //             <div className="p-2 rounded-lg text-blue-900">
// //               <Presentation className="w-6 h-6" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900">Presentation Types</h3>
// //           </div>
// //           <ul className="space-y-1 ml-2 md:ml-12">
// //             {[
// //               "Oral Presentation",
// //               "Poster Presentation",
// //               "Virtual Presentation"
// //             ].map((item, idx) => (
// //               <li key={idx} className="flex items-start gap-3">
// //                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
// //                 <span className="leading-relaxed text-gray-700">{item}</span>
// //               </li>
// //             ))}
// //           </ul>
// //         </section>

// //         <hr className="border-gray-100" />



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
// //             All submitted abstracts will be reviewed by the conference review committee for relevance, originality, and clarity.
// //           </p>
// //         </section>

// //         <hr className="border-gray-100" />

// //         {/* Benefits of Participation */}
// //         <section>
// //           <div className="flex items-center gap-3">
// //             <div className="p-2 rounded-lg text-blue-900">
// //               <Award className="w-6 h-6" />
// //             </div>
// //             <h3 className="text-2xl font-bold text-gray-900">Benefits of Participation</h3>
// //           </div>
// //           <ul className="space-y-1 ml-2 md:ml-12">
// //             {[
// //               "International presentation opportunity",
// //               "Certificate of Presentation",
// //               "Inclusion in conference proceedings",
// //               "Networking with global experts",
// //               "Visa support letter (for eligible participants)"
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
// //           title="Submit your abstract for AIMLR 2026 Conference"
// //           aria-label="Submit your abstract for AIMLR 2026 Conference"
// //         >
// //           Abstract Submission
// //         </Link>
// //       </div>
// //     </div>
// //     </>
// //   );
// // };

// // export default AboutTheCall;












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
//   ArrowRight
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const AboutTheCall: React.FC = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Call for Papers | AI, ML & Robotics Conference 2026 Rome</title>
//         <meta
//           name="description"
//           content="Submit your research paper for AIMLR 2026 in Rome. Peer-reviewed conference proceedings and global academic exposure."
//         />
//         <link rel="canonical" href="https://roboticsaisummit.com/call-for-papers" />
//       </Helmet>

//       <div className="max-w-5xl mx-auto px-6 py-16 text-[#2F3439]">

//         {/* Header */}
//         <div className="mb-14 border-b border-[#E5E7EB] pb-6">
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1F2327]">
//             Call for Abstracts – AIMLR 2026
//           </h2>
//           <p className="mt-3 text-[#4B5563] text-lg">
//             Submit your research and join the global conversation on AI, ML and Robotics.
//           </p>
//         </div>

//         {/* About */}
//         <div className="mb-10 p-8 bg-[#F3F4F6] rounded border border-[#E5E7EB]">
//           <div className="flex items-center gap-3 mb-4">
//             <FileText className="w-6 h-6 text-[#C9AB63]" />
//             <h3 className="text-2xl font-semibold text-[#1F2327]">
//               About the Call
//             </h3>
//           </div>
//           <p className="text-[#4B5563] leading-relaxed">
//             We invite researchers, academicians, industry professionals, and students
//             to submit abstracts for AIMLR 2026 in Rome, Italy, with in-person and
//             virtual participation options.
//           </p>
//         </div>

//         <div className="space-y-10">

//           {[
//             {
//               icon: <Users />,
//               title: "Who Can Submit?",
//               items: [
//                 "Professors & Academicians",
//                 "Researchers & Scientists",
//                 "PhD Scholars & Postdoctoral Researchers",
//                 "Postgraduate & Undergraduate Students",
//                 "Industry Professionals"
//               ]
//             },
//             {
//               icon: <Upload />,
//               title: "What Can Be Submitted?",
//               items: [
//                 "Research Abstract (150–300 words)",
//                 "Original or ongoing research work",
//                 "Theoretical, experimental, or applied research",
//                 "Interdisciplinary topics"
//               ]
//             },
//             {
//               icon: <Target />,
//               title: "Topics of Interest",
//               items: [
//                 "Artificial Intelligence",
//                 "Machine Learning & Deep Learning",
//                 "Robotics & Autonomous Systems",
//                 "Generative AI",
//                 "AI in Healthcare",
//                 "Computer Vision & NLP",
//                 "Human–Robot Interaction",
//                 "Smart Systems & IoT"
//               ]
//             },
//             {
//               icon: <Presentation />,
//               title: "Presentation Types",
//               items: [
//                 "Oral Presentation",
//                 "Poster Presentation",
//                 "Virtual Presentation"
//               ]
//             },
//             {
//               icon: <CheckCircle />,
//               title: "Review Process",
//               text:
//                 "All submitted abstracts are peer-reviewed for relevance, originality, and clarity."
//             },
//             {
//               icon: <Award />,
//               title: "Benefits of Participation",
//               items: [
//                 "International presentation opportunity",
//                 "Certificate of Presentation",
//                 "Conference proceedings inclusion",
//                 "Networking with global experts",
//                 "Visa support letter"
//               ]
//             }
//           ].map((section, idx) => (
//             <section key={idx}>
//               <div className="flex items-center gap-3 mb-2">
//                 <div className="p-2 rounded text-[#C9AB63]">
//                   {section.icon}
//                 </div>
//                 <h3 className="text-2xl font-semibold text-[#1F2327]">
//                   {section.title}
//                 </h3>
//               </div>

//               {section.items && (
//                 <ul className="space-y-1 ml-10 mt-2">
//                   {section.items.map((item, i) => (
//                     <li key={i} className="flex gap-3 text-black">
//                       <ChevronRight className="w-4 h-4 text-[#C9AB63] mt-1" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               {section.text && (
//                 <p className="ml-10 text-[#4B5563] mt-2 leading-relaxed">
//                   {section.text}
//                 </p>
//               )}
//             </section>
//           ))}
//         </div>

//         {/* CTAs */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-10 border-t border-[#E5E7EB]">
//           <Link
//             to="/register"
//             className="flex items-center justify-center gap-2 px-8 py-4 bg-[#C9AB63] text-[#1F2327] font-semibold hover:bg-[#D4B46A] transition"
//           >
//             Register Now <ArrowRight className="w-4 h-4" />
//           </Link>

//           <Link
//             to="/AbstractSubmission"
//             className="flex items-center justify-center gap-2 px-8 py-4 border border-[#2F3439] text-[#2F3439] font-semibold hover:bg-[#2F3439] hover:text-white transition"
//           >
//             Abstract Submission
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutTheCall;












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
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SectionBlock = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="relative pl-10">
    {/* Vertical Accent */}
    <span className="absolute left-0 top-1 h-full w-[2px] bg-[#C9AB63]/40" />

    <div className="mb-3 flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center border border-[#E5E7EB] bg-white rounded-sm">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-[#1F2327]">
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
        className="flex items-start gap-3 text-[#2F3439] leading-relaxed hover:text-[#1F2327] transition"
      >
        <ChevronRight className="w-4 h-4 text-[#C9AB63] mt-1 shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

const AboutTheCall: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Call for Papers | AI, ML & Robotics Conference 2026 Rome</title>
        <meta
          name="description"
          content="Submit your research paper for AIMLR 2026 in Rome. Peer-reviewed conference proceedings and global academic exposure."
        />
        <link
          rel="canonical"
          href="https://roboticsaisummit.com/call-for-papers"
        />
      </Helmet>

      <section className="bg-[#FAFAFA] py-8">
        <div className="max-w-5xl mx-auto px-6 text-[#2F3439]">

          {/* Header */}
          <header className="mb-16">
            <h2 className="text-4xl font-bold text-[#1F2327]">
              Call for Abstracts
            </h2>
            <p className="mt-4 text-lg text-[#4B5563] max-w-3xl">
              Submit your research and participate in AIMLR 2026 — a global forum
              for Artificial Intelligence, Machine Learning and Robotics.
            </p>
            <div className="mt-6 h-[1px] w-full bg-[#E5E7EB]" />
          </header>

          {/* About */}
          <div className="mb-14 bg-white border border-[#E5E7EB] p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center border border-[#E5E7EB] bg-white rounded-sm">
                <FileText className="w-5 h-5 text-[#C9AB63]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#1F2327]">
                About the Call
              </h3>
            </div>
            <p className="text-[#4B5563] leading-relaxed max-w-4xl">
              AIMLR 2026 invites researchers, academicians, industry professionals
              and students to submit abstracts for presentation in Rome, Italy,
              with both in-person and virtual participation options.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-14">

            <SectionBlock
              icon={<Users className="w-5 h-5 text-[#C9AB63]" />}
              title="Who Can Submit?"
            >
              <List
                items={[
                  "Professors & Academicians",
                  "Researchers & Scientists",
                  "PhD Scholars & Postdoctoral Researchers",
                  "Postgraduate & Undergraduate Students",
                  "Industry Professionals",
                ]}
              />
            </SectionBlock>

            <SectionBlock
              icon={<Upload className="w-5 h-5 text-[#C9AB63]" />}
              title="What Can Be Submitted?"
            >
              <List
                items={[
                  "Research Abstract (150–300 words)",
                  "Original or ongoing research work",
                  "Theoretical, experimental or applied research",
                  "Interdisciplinary contributions",
                ]}
              />
            </SectionBlock>

            <SectionBlock
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
            </SectionBlock>

            <SectionBlock
              icon={<Presentation className="w-5 h-5 text-[#C9AB63]" />}
              title="Presentation Types"
            >
              <List
                items={[
                  "Oral Presentation",
                  "Poster Presentation",
                  "Virtual Presentation",
                ]}
              />
            </SectionBlock>

            <SectionBlock
              icon={<CheckCircle className="w-5 h-5 text-[#C9AB63]" />}
              title="Review Process"
            >
              <p className="text-[#4B5563] max-w-3xl leading-relaxed mt-3">
                All submitted abstracts undergo a peer-review process conducted
                by the conference review committee, focusing on relevance,
                originality and clarity.
              </p>
            </SectionBlock>

            <SectionBlock
              icon={<Award className="w-5 h-5 text-[#C9AB63]" />}
              title="Benefits of Participation"
            >
              <List
                items={[
                  "International presentation opportunity",
                  "Certificate of Presentation",
                  "Inclusion in conference proceedings",
                  "Networking with global experts",
                  "Visa support letter (where applicable)",
                ]}
              />
            </SectionBlock>
          </div>

          {/* CTA */}
          <div className="mt-20 pt-10 border-t border-[#E5E7EB] flex flex-col sm:flex-row gap-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C9AB63] text-[#1F2327] font-semibold hover:bg-[#D4B46A] transition"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/AbstractSubmission"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#2F3439] text-[#2F3439] font-semibold hover:bg-[#2F3439] hover:text-white transition"
            >
              Abstract Submission
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutTheCall;
