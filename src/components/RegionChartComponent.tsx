



// // import React from "react";

// // const RegionChart = () => (
// //   <div className="w-full h-full overflow-hidden flex min-h-[200px] sm:min-h-[280px] md:min-h-[340px]">
// //     {/* Middle East */}
// //     <div className="w-1/4 bg-[#242559] text-white flex flex-col">
// //       <h2 className="text-xl md:text-4xl font-bold ml-4 mt-4">30%</h2>
// //       <p className="text-sm md:text-lg ml-4">Europe</p>
// //     </div>
// //     {/* Asia */}
// //     <div className="w-1/4 bg-[#37477d] text-white flex flex-col">
// //       <h2 className="text-xl md:text-4xl font-bold ml-4 mt-4">28%</h2>
// //       <p className="text-sm md:text-lg ml-4">Asia</p>
// //     </div>
// //     {/* Europe + USA + Canada */}
// //     <div className="w-1/2 relative bg-[#FF9D2E] bg-[repeating-linear-gradient(135deg,#3b4f86,#ffffff_2px,#3b4f86_2px,#3c5087_20px)] text-white flex flex-col justify-center items-center">
// //       {/* Europe text with transparent black backdrop for visibility */}
// //       <div className="absolute top-4 left-4 z-10 px-3 py-1">
// //         <h2 className="text-xl md:text-4xl font-bold text-white">22%</h2>
// //         <p className="text-sm md:text-lg text-white">Middle East</p>
// //       </div>
// //       {/* USA block */}
// //       <div className="absolute bottom-0 right-0 w-[68%] h-[68%] bg-[#3e548b] flex flex-col rounded-b-xl pl-4 pt-4 z-0">
// //         <h2 className="text-md md:text-2xl font-bold text-white drop-shadow">17%</h2>
// //         <p className="text-xs md:text-sm text-white drop-shadow">USA</p>
// //         {/* Canada block */}
// //         <div className="absolute bottom-0 right-0 w-[55%] h-[55%] bg-[#46629b] flex flex-col rounded-br-xl pl-4 pt-4">
// //           <h2 className="text-xs md:text-md font-bold text-white drop-shadow">3%</h2>
// //           <p className="text-[10px] md:text-xs text-white drop-shadow">Canada</p>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // );

// // // export default RegionChart;


// // // --- JobLevelChart Component ---
// // const JobLevelChart = () => (
// //   <div className="w-full overflow-hidden shadow bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
// //     <div className="bg-[#59c1ac] px-3 md:px-6 pt-6 pb-3 w-full">
// //       <div className="font-semibold text-base md:text-lg mb-2 text-black">By Job Level</div>
// //       <div className="flex items-end gap-3">
// //         <span className="text-4xl md:text-[56px] font-semibold leading-tight text-black">72%</span>
// //         <div className="flex flex-col pb-2">
// //           <div className="text-xs md:text-base text-black">Professor / PhD /Doctor / Academic</div>
// //         </div>
// //       </div>
// //     </div>
// //     <div className="bg-[#71D6C3] px-3 md:px-6 py-4 md:py-5 border-t border-[#f4f4f4] w-full">
// //       <div className="font-semibold text-lg md:text-xl text-black">10.0%</div>
// //       <div className="text-xs md:text-base text-black">Heads / Manager</div>
// //     </div>
// //     <div className="bg-[#b1ece0] px-3 md:px-6 py-4 md:py-5 border-t border-[#f4f4f4] w-full">
// //       <div className="font-semibold text-lg md:text-xl text-black">10.0%</div>
// //       <div className="text-xs md:text-base text-black">Senior Data Scientists & Engineers</div>
// //     </div>
// //     <div className="bg-[#e2f7f2] px-3 md:px-6 py-4 md:py-5 border-t border-[#f4f4f4] w-full">
// //       <div className="font-semibold text-lg md:text-xl text-black">4.0%</div>
// //       <div className="text-xs md:text-base text-black">C-Level / Director / VP / Founder</div>
// //     </div>
// //     <div className="bg-[#fafefd] px-3 md:px-6 py-4 md:py-5 border-t border-[#f4f4f4] w-full">
// //       <div className="font-semibold text-lg md:text-xl text-black">4.0%</div>
// //       <div className="text-xs md:text-base text-black">Developers</div>
// //     </div>
// //   </div>
// // );

// // // --- CompanySizeChart Component ---
// // const CompanySizeChart = () => (
// //   <div className="w-full flex overflow-hidden bg-white shadow min-h-[250px] md:min-h-[350px] lg:min-h-[400px]" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
// //     {/* Left side (Up to 1000) */}
// //     <div className="w-1/2 flex flex-col justify-between bg-[#f4f4f4] p-3 md:p-6">
// //       <div className="font-semibold text-base md:text-lg text-black mb-2">By Company Size</div>
// //       <div className="mt-auto">
// //         <div className="text-3xl md:text-[48px] font-semibold text-black leading-none mb-2">34%</div>
// //         <div className="text-xs md:text-lg text-black">up to 1000</div>
// //       </div>
// //     </div>
// //     {/* Right side (split top/bottom) */}
// //     <div className="w-1/2 flex flex-col">
// //       {/* Top: 1,000-10,000 */}
// //       <div className="flex-1 flex flex-col items-end justify-start bg-[#929292] p-3 md:p-6">
// //         <div className="text-xl md:text-[32px] font-semibold text-white leading-none mb-2">13%</div>
// //         <div className="text-xs md:text-lg text-white">1,000-10,000</div>
// //       </div>
// //       {/* Bottom: 10,000 & over */}
// //       <div className="flex-1 flex flex-col items-end justify-end bg-[#d1d1d1] p-3 md:p-6">
// //         <div className="text-xl md:text-[32px] font-semibold text-white leading-none mb-2">13%</div>
// //         <div className="text-xs md:text-lg text-white">10,000 & over</div>
// //       </div>
// //     </div>
// //   </div>
// // );

// // // --- SectorChart Component ---Academics
// // const sectors = [
// //   { label: "Academics", percent: 70 },
// //   { label: "Technology", percent: 15 },
// //   { label: "Startups", percent: 8},
// //   { label: "Government & Public sector", percent: 6 },
// //   { label: "Investors, Advisory & Consulting", percent: 5 },
// //   { label: "Enterprises/Corporates", percent: 4 },
// //   { label: "Others (Associations, Media, Independent Developers)", percent: 2 }
// // ];

// // const SectorChart = () => (
// //   <div className="w-full overflow-hidden bg-white py-0 md:py-4 pr-3 md:pr-6 pl-3 md:pl-8" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
// //     <div className="font-semibold text-base md:text-lg text-black mb-4 md:mb-6 mt-0 md:mt-2">By Sector</div>
// //     <div className="space-y-4 md:space-y-6">
// //       {sectors.map((item, idx) => (
// //         <div key={idx} className="flex items-center gap-2 md:gap-4">
// //           <div className="flex-grow">
// //             <div className="text-xs md:text-[15px] font-medium text-black mb-1">{item.label}</div>
// //             <div className="w-full bg-[#f4f4f4] h-[10px] md:h-[16px] rounded overflow-hidden relative">
// //               <div
// //                 className="h-full"
// //                 style={{
// //                   width: `${item.percent}%`,
// //                   background: "linear-gradient(90deg, #6e40d8 0%, #34bbff 100%)"
// //                 }}
// //               ></div>
// //             </div>
// //           </div>
// //           {/* <div className="w-9 md:w-14 text-right text-xs md:text-[18px] text-black font-medium">{item.percent}%</div> */}
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // );

// // // --- Dashboard Layout ---
// // function Dashboard() {
// //   return (
// //     <section className="max-w-7xl mx-auto py-4 md:py-6 px-2 md:px-5 space-y-5 md:space-y-9" aria-label="Participant Demographics">
    
// //             {/* <h1
// //         style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
// //         className="text-center text-2xl md:text-3xl font-bold mb-4"
// //       >
        
// //         WHO'S PARTICIPATING THE CONFERENCE, 2026
// //       </h1> */}

// //       <h2 className="text-3xl font-bold text-[#00488B] mb-6 text-center">
// //             WHO'S PARTICIPATING IN AIMLR 2026 CONFERENCE
// //       </h2>
      
// //       {/* Top Row */}
// //       <div className="flex flex-col md:flex-row gap-5 md:gap-8">
// //         <div className="md:flex-[2] w-full min-w-0">
// //           <RegionChart />
// //         </div>
// //         <div className="md:flex-1 w-full min-w-0 mt-4 md:mt-0">
// //           <JobLevelChart />
// //         </div>
// //       </div>
// //       {/* Bottom Row */}
// //       <div className="flex flex-col md:flex-row gap-5 md:gap-8">
// //         <div className="w-full md:flex-1 min-w-0">
// //           <CompanySizeChart />
// //         </div>
// //         <div className="w-full md:flex-[2] min-w-0 mt-4 md:mt-0">
// //           <SectorChart />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Dashboard;











// import React from "react";

// /* ===================== DATA ===================== */

// const regions = [
//   { label: "Europe", value: 30 },
//   { label: "Asia", value: 28 },
//   { label: "Middle East", value: 22 },
//   { label: "USA", value: 17 },
//   { label: "Canada", value: 3 },
// ];

// const jobLevels = [
//   { label: "Professor / PhD / Academic", value: 72 },
//   { label: "Heads / Managers", value: 10 },
//   { label: "Senior Engineers & Scientists", value: 10 },
//   { label: "C-Level / Director / Founder", value: 4 },
//   { label: "Developers", value: 4 },
// ];

// const companySizes = [
//   { label: "Up to 1,000 employees", value: 34 },
//   { label: "1,000 – 10,000 employees", value: 13 },
//   { label: "10,000+ employees", value: 13 },
// ];

// const sectors = [
//   { label: "Academics", value: 70 },
//   { label: "Technology", value: 15 },
//   { label: "Startups", value: 8 },
//   { label: "Government & Public Sector", value: 6 },
//   { label: "Advisory & Consulting", value: 5 },
//   { label: "Enterprises / Corporates", value: 4 },
//   { label: "Others", value: 2 },
// ];

// /* ===================== UI BLOCKS ===================== */

// const Section = ({ title, children }: any) => (
//   <div>
//     <h3 className="text-xl font-semibold text-[#111] mb-6">{title}</h3>
//     {children}
//   </div>
// );

// const Divider = () => (
//   <div className="w-full h-px bg-[#E2E2E2] my-6" />
// );

// /* ===================== CHARTS ===================== */

// // REGION – Ranked List
// const RegionList = () => (
//   <ul className="space-y-4">
//     {regions.map((r) => (
//       <li key={r.label} className="flex items-center justify-between">
//         <span className="text-[#555]">{r.label}</span>
//         <span className="text-2xl font-semibold text-[#111]">
//           {r.value}%
//         </span>
//       </li>
//     ))}
//   </ul>
// );

// // JOB LEVEL – Emphasis + Breakdown
// const JobLevelSummary = () => (
//   <div>
//     <div className="mb-6">
//       <div className="text-5xl font-semibold text-[#3F444A]">72%</div>
//       <div className="text-[#6B6F74] mt-1">
//         Professors / PhD / Academics
//       </div>
//     </div>

//     <Divider />

//     <ul className="space-y-3">
//       {jobLevels.slice(1).map((j) => (
//         <li key={j.label} className="flex justify-between text-sm">
//           <span className="text-[#555]">{j.label}</span>
//           <span className="text-[#111] font-medium">{j.value}%</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// // COMPANY SIZE – Vertical Timeline Style
// const CompanySizeTimeline = () => (
//   <div className="space-y-6 border-l-2 border-[#C9AB63] pl-6">
//     {companySizes.map((c) => (
//       <div key={c.label}>
//         <div className="text-2xl font-semibold text-[#111]">
//           {c.value}%
//         </div>
//         <div className="text-[#6B6F74]">{c.label}</div>
//       </div>
//     ))}
//   </div>
// );

// // SECTOR – Clean Horizontal Bars (No Gradient)
// const SectorBars = () => (
//   <div className="space-y-5">
//     {sectors.map((s) => (
//       <div key={s.label}>
//         <div className="flex justify-between text-sm mb-1">
//           <span className="text-[#555]">{s.label}</span>
//           <span className="text-[#111] font-medium">{s.value}%</span>
//         </div>
//         <div className="w-full h-2 bg-[#EAEAEA]">
//           <div
//             className="h-full bg-[#3F444A]"
//             style={{ width: `${s.value}%` }}
//           />
//         </div>
//       </div>
//     ))}
//   </div>
// );

// /* ===================== DASHBOARD ===================== */

// export default function Dashboard() {
//   return (
//     <section className="bg-[#FFFFFF] py-20 px-6">
//       <div className="max-w-7xl mx-auto space-y-16">

//         {/* Title */}
//         <h2 className="text-3xl font-semibold text-center text-[#111]">
//           WHO’S PARTICIPATING IN AIMLR 2026
//         </h2>

//         {/* Top Row */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           <Section title="Participants by Region">
//             <RegionList />
//           </Section>

//           <Section title="Participants by Job Level">
//             <JobLevelSummary />
//           </Section>
//         </div>

//         {/* Bottom Row */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           <Section title="Participants by Company Size">
//             <CompanySizeTimeline />
//           </Section>

//           <Section title="Participants by Sector">
//             <SectorBars />
//           </Section>
//         </div>

//       </div>
//     </section>
//   );
// }




import React from "react";

/* ===================== DATA ===================== */

const regions = [
  { label: "Europe", value: 30 },
  { label: "Asia", value: 28 },
  { label: "Middle East", value: 22 },
  { label: "USA", value: 17 },
  { label: "Canada", value: 3 },
];

const jobLevels = [
  { label: "Professor / PhD / Academic", value: 72 },
  { label: "Heads / Managers", value: 10 },
  { label: "Senior Engineers & Scientists", value: 10 },
  { label: "C-Level / Director / Founder", value: 4 },
  { label: "Developers", value: 4 },
];

const companySizes = [
  { label: "Up to 1,000 employees", value: 34 },
  { label: "1,000 – 10,000 employees", value: 13 },
  { label: "10,000+ employees", value: 13 },
];

const sectors = [
  { label: "Academics", value: 70 },
  { label: "Technology", value: 15 },
  { label: "Startups", value: 8 },
  { label: "Government & Public Sector", value: 6 },
  { label: "Advisory & Consulting", value: 5 },
  { label: "Enterprises / Corporates", value: 4 },
  { label: "Others", value: 2 },
];

/* ===================== SHARED UI ===================== */

const Section = ({ title, children }: any) => (
  <div>
    <h3 className="text-lg font-semibold text-[#111] mb-2">
      {title}
    </h3>
    <div className="w-10 h-[2px] bg-[#C9AB63] mb-6" />
    {children}
  </div>
);

const Divider = () => (
  <div className="w-full h-px bg-[#E2E2E2] my-6" />
);

/* ===================== VISUAL BLOCKS ===================== */

// REGION — Ranked Editorial List
const RegionList = () => (
  <ul className="space-y-4">
    {regions.map((r) => (
      <li key={r.label} className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#C9AB63]" />
          <span className="text-[#555]">{r.label}</span>
        </div>
        <span className="text-xl font-semibold text-[#111]">
          {r.value}%
        </span>
      </li>
    ))}
  </ul>
);

// JOB LEVEL — Highlight + Breakdown
const JobLevelSummary = () => (
  <div >
    <div className="mb-8">
      <div className="text-xs uppercase tracking-wide text-[#6B6F74] mb-1">
        Primary Group
      </div>
      <div className="text-5xl font-semibold text-[#3F444A]">
        72%
      </div>
      <div className="text-[#6B6F74] mt-1">
        Professors / PhD / Academics
      </div>
    </div>

    <Divider />

    <ul className="space-y-3 mt-6">
      {jobLevels.slice(1).map((j) => (
        <li key={j.label} className="flex justify-between text-sm">
          <span className="text-[#555]">{j.label}</span>
          <span className="font-medium text-[#111]">{j.value}%</span>
        </li>
      ))}
    </ul>
  </div>
);

// COMPANY SIZE — Vertical Timeline
const CompanySizeTimeline = () => (
  <div className="relative space-y-8">
    <div className="absolute left-1 top-0 bottom-0 w-px bg-[#E2E2E2]" />
    {companySizes.map((c) => (
      <div key={c.label} className="pl-6 relative">
        <span className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#C9AB63]" />
        <div className="text-2xl font-semibold text-[#111]">
          {c.value}%
        </div>
        <div className="text-[#6B6F74]">{c.label}</div>
      </div>
    ))}
  </div>
);

// SECTOR — Clean Bars
const SectorBars = () => (
  <div className="space-y-6">
    {sectors.map((s) => (
      <div key={s.label}>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-[#555]">{s.label}</span>
          <span className="font-medium text-[#111]">{s.value}%</span>
        </div>
        <div className="w-full h-3 bg-[#EAEAEA] rounded-full">
          <div
            className="h-full bg-[#3F444A] rounded-full"
            style={{ width: `${s.value}%` }}
          />
        </div>
      </div>
    ))}
  </div>
);

/* ===================== MAIN DASHBOARD ===================== */

export default function Dashboard() {
  return (
    <section className="bg-[#F3F3F3] py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Title */}
        <h2 className="text-3xl font-semibold text-center text-[#111]">
          WHO’S PARTICIPATING IN AIMLR 2026
        </h2>

        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Section title="Participants by Region">
            <RegionList />
          </Section>

          <Section title="Participants by Job Level" className="bg-white p-6">
            <JobLevelSummary />
          </Section>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Section title="Participants by Company Size">
            <CompanySizeTimeline />
          </Section>

          <Section title="Participants by Sector">
            <SectorBars />
          </Section>
        </div>

      </div>
    </section>
  );
}
