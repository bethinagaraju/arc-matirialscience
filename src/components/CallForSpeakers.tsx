// import React from "react";
// import {
//   FileText,
//   Users,
//   Upload,
//   Presentation,
//   Award,
//   ChevronRight,
//   ArrowRight
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const CallForSpeakers: React.FC = () => {
//   return (
//     <div className="max-w-5xl mx-auto px-6 py-12 font-sans text-gray-800">

//       {/* Page Header */}
//       <div className="mb-12 border-b-2 border-[#304278] pb-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
//           CALL FOR SPEAKERS – AIMLR 2026
//         </h2>
//         <p className="mt-2 text-gray-500 text-lg">
//           Submit your research and join the global conversation on AI, ML and Robotics.
//         </p>
//       </div>

//       {/* About the Call */}
//       <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
//         <div className="flex items-center gap-3 mb-4">
//           <FileText className="w-6 h-6 text-blue-900" />
//           <h3 className="text-2xl font-bold text-gray-900">About the Call</h3>
//         </div>
//         <p className="text-gray-700 leading-relaxed">
//           AIMLR 2026 invites distinguished academicians, industry experts, and researchers to deliver keynote, invited, or technical talks at the conference.
//         </p>
//       </div>

//       <div className="grid gap-4">

//         {/* Speaker Categories */}
//         <section>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-lg text-blue-900">
//               <Presentation className="w-6 h-6" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">Speaker Categories</h3>
//           </div>
//           <ul className="space-y-1 ml-2 md:ml-12">
//             {[
//               "Keynote Speakers",
//               "Invited Speakers",
//               "Session Speakers"
//             ].map((item, idx) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
//                 <span className="leading-relaxed text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <hr className="border-gray-100" />

//         {/* Who Can Apply? */}
//         <section>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-lg text-blue-900">
//               <Users className="w-6 h-6" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">Who Can Apply?</h3>
//           </div>
//           <ul className="space-y-1 ml-2 md:ml-12">
//             {[
//               "Senior Professors",
//               "Industry Leaders",
//               "Research Scientists",
//               "Subject-matter Experts"
//             ].map((item, idx) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
//                 <span className="leading-relaxed text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <hr className="border-gray-100" />

//         {/* What to Submit? */}
//         <section>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-lg text-blue-900">
//               <Upload className="w-6 h-6" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">What to Submit?</h3>
//           </div>
//           <ul className="space-y-1 ml-2 md:ml-12">
//             {[
//               "Speaker biography (short)",
//               "Proposed talk title",
//               "Brief abstract or outline (optional)"
//             ].map((item, idx) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
//                 <span className="leading-relaxed text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </section>

//         <hr className="border-gray-100" />

//         {/* Speaker Benefits */}
//         <section>
//           <div className="flex items-center gap-3">
//             <div className="p-2 rounded-lg text-blue-900">
//               <Award className="w-6 h-6" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">Speaker Benefits</h3>
//           </div>
//           <ul className="space-y-1 ml-2 md:ml-12">
//             {[
//               "Speaker Certificate",
//               "Global recognition",
//               "Networking with international participants",
//               "Featured profile on conference website"
//             ].map((item, idx) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
//                 <span className="leading-relaxed text-gray-700">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </section>

//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row gap-4 mt-16 border-t pt-8">

//         <Link to="/register" className="flex items-center justify-center gap-2 px-8 py-3 bg-[#304278] text-white font-semibold rounded hover:bg-[#304278] transition-colors">
//           Register Now <ArrowRight className="w-4 h-4" />
//         </Link>

//         <Link to="/AbstractSubmission" className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded hover:border-[#0091b5] hover:text-[#0091b5] transition-colors">
//           Apply as Speaker
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CallForSpeakers;




import React from "react";
import {
  FileText,
  Users,
  Upload,
  Presentation,
  Award,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ---------- Reusable UI Blocks ---------- */

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

/* ---------- Main Component ---------- */

const CallForSpeakers: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] py-8">
      <div className="max-w-5xl mx-auto px-6 text-[#2A2E33]">

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-[#1C1F23]">
            Call for Speakers – AIMLR 2026
          </h1>
          <p className="mt-4 text-lg text-[#6B7280] max-w-3xl">
            AIMLR 2026 invites distinguished academicians, industry experts, and
            researchers to deliver keynote, invited, or technical talks.
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
            Speakers play a central role in shaping the academic and professional
            dialogue at AIMLR 2026 by sharing expertise, insights, and
            advancements in AI, ML, and Robotics.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">

          <Section
            icon={<Presentation className="w-5 h-5 text-[#C9AB63]" />}
            title="Speaker Categories"
          >
            <List
              items={[
                "Keynote Speakers",
                "Invited Speakers",
                "Session Speakers",
              ]}
            />
          </Section>

          <Section
            icon={<Users className="w-5 h-5 text-[#C9AB63]" />}
            title="Who Can Apply?"
          >
            <List
              items={[
                "Senior Professors",
                "Industry Leaders",
                "Research Scientists",
                "Subject-matter Experts",
              ]}
            />
          </Section>

          <Section
            icon={<Upload className="w-5 h-5 text-[#C9AB63]" />}
            title="What to Submit?"
          >
            <List
              items={[
                "Short speaker biography",
                "Proposed talk title",
                "Brief abstract or outline (optional)",
              ]}
            />
          </Section>

          <Section
            icon={<Award className="w-5 h-5 text-[#C9AB63]" />}
            title="Speaker Benefits"
          >
            <List
              items={[
                "Official Speaker Certificate",
                "Global recognition and visibility",
                "Networking with international participants",
                "Featured speaker profile on conference website",
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
            Apply as Speaker
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CallForSpeakers;
