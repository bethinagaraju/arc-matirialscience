// // import React from 'react';
// // import Header from '../components/Header';
// // import { ExternalLink, Award, Building, Users, Newspaper } from 'lucide-react';

// // function SponsorsPage() {
// //   const sponsors = [
// //     {
// //       src: "WhatsApp Image 2025-10-11 at 13.06.55_c7ee6430.jpg",
// //       alt: "Platinum Tabreed",
// //       link: "https://www.tabreed.ae/",
// //       type: "Platinum Sponsor",
// //     },
// //     {
// //       src: "ABB_logo.svg.png",
// //       alt: "Hydropower",
// //       link: "https://www.hydropower.energy/",
// //       type: "Platinum Sponsor",
// //     },
// //     {
// //       src: "Rockwell_Automation_logo_(2019).svg.png",
// //       alt: "Gold Hitachi",
// //       link: "https://www.hitachienergy.com/me/en",
// //       type: "Gold Sponsor",
// //     },
// //     {
// //       src: "Real-sense-logo-rgb.png",
// //       alt: "Gold IGC",
// //       link: "https://intelligent-globe.com/",
// //       type: "Gold Sponsor",
// //     },
// //     {
// //       src: "Yaskawa_logo.svg.png",
// //       alt: "Gold Siemens",
// //       link: "https://www.siemens-energy.com",
// //       type: "Silver Sponsor",
// //     },
// //     {
// //       src: "Figure-ai-logo.svg.png",
// //       alt: "Silver Minsait",
// //       link: "https://www.minsait.com/en",
// //       type: "Bronze Sponsor",
// //     },
// //     {
// //       src: "images.png",
// //       alt: "Abbnew 1",
// //       link: "javascript:void(0);",
// //       type: "Bronze Sponsor",
// //     },
// //     {
// //       src: "Untitled.png",
// //       alt: "Bronze PWC",
// //       link: "https://www.pwc.com/gx/en.html",
// //       type: "Bronze Sponsor",
// //     },
// //     {
// //       src: "Black_Full_Logo.webp",
// //       alt: "SUEZ",
// //       link: "javascript:void(0);",
// //       type: "Bronze Sponsor",
// //     },
// //   ];

// //   const universityLogos = [
// //     { src: 'uni01.png', alt: 'University 1' },
// //     { src: 'uni2.png', alt: 'University 2' },
// //     { src: 'uni3.png', alt: 'University 3' },
// //     { src: 'uni4.png', alt: 'University 4' },
// //     { src: 'uni5.png', alt: 'University 5' },
// //     { src: 'uni6.png', alt: 'University 6' },
// //     { src: 'uni7.png', alt: 'University 7' },
// //   ];

// //   const partners = [
// //     {
// //       label: 'Supported by',
// //       logo: 'gcea.png',
// //       alt: 'GCEA - Global Center for Energy Analysis',
// //     },
// //     {
// //       label: 'Official English News Partner',
// //       logo: 'the-national.png',
// //       alt: 'The National News',
// //     },
// //     {
// //       label: 'Host City',
// //       logo: 'Emblem_of_Italy.svg.webp',
// //       alt: 'Abu Dhabi Host City',
// //     },
// //     {
// //       label: 'Destination Partner',
// //       logo: 'Roma-Stemma-2.svg.png',
// //       alt: 'Abu Dhabi Convention & Exhibition Bureau',
// //     },
// //     {
// //       label: 'Venue Partner',
// //       logo: 'Crowne_Plaza_by_IHG_logo.svg.png',
// //       alt: 'ADNEC Centre Abu Dhabi',
// //     },
// //   ];

// //   return (
// //     <div>
// //       <Header />
// //       <div className="relative text-white py-20 overflow-hidden" style={{ backgroundColor: '#312e81', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-dot.png")' }}>
// //         <div className="container mx-auto px-6 text-center relative z-10">
// //           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Sponsors & Partners</h1>
// //           <p className="text-xl text-indigo-200 max-w-2xl mx-auto font-light">
// //             Meet the organizations and institutions supporting ICAMLR 2026 and driving innovation in AI, ML, and Robotics.
// //           </p>
// //         </div>
// //       </div>

// //       <div className="container mx-auto px-6 py-12">
// //         {/* Sponsors Section */}
// //         <section className="mb-16">
// //           <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Sponsors</h2>
// //           <div className="space-y-8">
// //             {['Platinum Sponsor', 'Gold Sponsor', 'Silver Sponsor', 'Bronze Sponsor'].map((type) => {
// //               const typeSponsors = sponsors.filter(sponsor => sponsor.type === type);
// //               if (typeSponsors.length === 0) return null;
// //               return (
// //                 <div key={type} className="bg-white rounded-lg shadow-md p-6">
// //                   <h3 className="text-2xl font-semibold mb-4 text-center text-indigo-700">{type}</h3>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                     {typeSponsors.map((sponsor, index) => (
// //                       <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
// //                         <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
// //                           <img src={sponsor.src} alt={sponsor.alt} className="h-16 w-auto object-contain" />
// //                           <ExternalLink className="h-5 w-5 text-gray-500" />
// //                         </a>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </section>

// //         {/* University Partners Section */}
// //         <section className="mb-16">
// //           <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">University Partners</h2>
// //           <div className="bg-white rounded-lg shadow-md p-6">
// //             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //               {universityLogos.map((logo, index) => (
// //                 <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
// //                   <img src={logo.src} alt={logo.alt} className="h-16 w-auto object-contain" />
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Partners Section */}
// //         <section>
// //           <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Partners</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {partners.map((partner, index) => (
// //               <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
// //                 <p className="text-sm font-medium text-gray-600 mb-2">{partner.label}</p>
// //                 <img src={partner.logo} alt={partner.alt} className="h-16 w-auto object-contain mx-auto" />
// //               </div>
// //             ))}
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SponsorsPage;


// import React from 'react';
// import Header from '../components/Header';
// import { ExternalLink } from 'lucide-react';
// import EndFooter from '../components/EndFooter';

// function SponsorsPage() {
//   const sponsors = [
//     { src: "WhatsApp Image 2025-10-11 at 13.06.55_c7ee6430.jpg", alt: "Platinum Tabreed", link: "https://www.tabreed.ae/", type: "Platinum Sponsor" },
//     { src: "ABB_logo.svg.png", alt: "Hydropower", link: "https://www.hydropower.energy/", type: "Platinum Sponsor" },
//     { src: "Rockwell_Automation_logo_(2019).svg.png", alt: "Gold Hitachi", link: "https://www.hitachienergy.com/me/en", type: "Gold Sponsor" },
//     { src: "Real-sense-logo-rgb.png", alt: "Gold IGC", link: "https://intelligent-globe.com/", type: "Gold Sponsor" },
//     { src: "Yaskawa_logo.svg.png", alt: "Gold Siemens", link: "https://www.siemens-energy.com", type: "Silver Sponsor" },
//     { src: "Figure-ai-logo.svg.png", alt: "Silver Minsait", link: "https://www.minsait.com/en", type: "Bronze Sponsor" },
//     { src: "images.png", alt: "Abbnew 1", link: "javascript:void(0);", type: "Bronze Sponsor" },
//     { src: "Untitled.png", alt: "Bronze PWC", link: "https://www.pwc.com/gx/en.html", type: "Bronze Sponsor" },
//     { src: "Black_Full_Logo.webp", alt: "SUEZ", link: "javascript:void(0);", type: "Bronze Sponsor" },
//   ];

//   const universityLogos = [
//     { src: 'uni01.png', alt: 'University 1' },
//     { src: 'uni2.png', alt: 'University 2' },
//     { src: 'uni3.png', alt: 'University 3' },
//     { src: 'uni4.png', alt: 'University 4' },
//     { src: 'uni5.png', alt: 'University 5' },
//     { src: 'uni6.png', alt: 'University 6' },
//     { src: 'uni7.png', alt: 'University 7' },
//   ];

//   const partners = [
//     { label: 'Supported by', logo: 'gcea.png', alt: 'GCEA - Global Center for Energy Analysis' },
//     { label: 'Official English News Partner', logo: 'the-national.png', alt: 'The National News' },
//     { label: 'Host City', logo: 'Emblem_of_Italy.svg.webp', alt: 'Italy City' },
//     { label: 'Destination Partner', logo: 'Roma-Stemma-2.svg.png', alt: 'Rome Destination' },
//     { label: 'Venue Partner', logo: 'Crowne_Plaza_by_IHG_logo.svg.png', alt: 'Venue Partner' },
//   ];

//   return (
//     <div>
//       <Header />

//       {/* ---- BANNER (UNTOUCHED) ---- */}
//       <div className="relative text-white py-20 overflow-hidden"
//         style={{ backgroundColor: '#312e81', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-dot.png")' }}>
//         <div className="container mx-auto px-6 text-center relative z-10">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Sponsors & Partners</h1>
//           <p className="text-xl text-indigo-200 max-w-2xl mx-auto font-light">
//             Meet the organizations and institutions supporting ICAMLR 2026 and driving innovation in AI, ML, and Robotics.
//           </p>
//         </div>
//       </div>

//       {/* ---- CONTENT ---- */}
//       <div className="container mx-auto px-6 py-16">

//         {/* ---- SPONSORS ---- */}
//         <section className="mb-20">
//           {/* <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Sponsors</h2> */}

//           <div className="space-y-16">
//             {['Platinum Sponsor', 'Gold Sponsor', 'Silver Sponsor', 'Bronze Sponsor'].map(type => {
//               const filtered = sponsors.filter(s => s.type === type);
//               if (!filtered.length) return null;

//               return (
//                 <div key={type}>
//                   <h3 className="text-2xl font-semibold text-center uppercase tracking-wide text-indigo-700 mb-8">
//                     {type}
//                   </h3>

//                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center justify-center max-w-fit mx-auto">
//                     {filtered.map((sponsor, index) => (
//                       <a
//                         key={index}
//                         href={sponsor.link}
//                         target="_blank"
//                         className="group bg-white rounded-xl border border-gray-200 shadow-sm p-6 w-full flex justify-center items-center hover:shadow-xl hover:scale-105 transition-all"
//                       >
//                         <img src={sponsor.src} alt={sponsor.alt}
//                           className="h-16 w-auto object-contain transition-all duration-300" />
//                         <ExternalLink className="h-5 w-5 text-gray-400 ml-2 opacity-0 group-hover:opacity-100 transition-all" />
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* ---- UNIVERSITIES ---- */}
//         <section className="mb-20">
//           {/* <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">University Partners</h2> */}
// <h3 className="text-2xl font-semibold text-center uppercase tracking-wide text-indigo-700 mb-8">
//                     University Partners
//                   </h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center justify-center max-w-fit mx-auto">
//             {universityLogos.map((logo, index) => (
//               <div key={index}
//                 className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all w-full flex justify-center">
//                 <img src={logo.src} alt={logo.alt}
//                   className="h-14 transition-all duration-300" />
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ---- PARTNERS ---- */}
//         <section className="mb-28">
//           {/* <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Partners</h2> */}
// <h3 className="text-2xl font-semibold text-center uppercase tracking-wide text-indigo-700 mb-8">
//                     Our Partners
//                   </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center max-w-fit mx-auto">
//             {partners.map((partner, index) => (
//               <div key={index}
//                 className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 text-center hover:shadow-xl hover:scale-105 transition-all">
//                 <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">{partner.label}</p>
//                 <img src={partner.logo} alt={partner.alt}
//                   className="h-14 mx-auto transition-all duration-300" />
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//       <EndFooter />
//     </div>
//   );
// }

// export default SponsorsPage;




import React from 'react';
import Header from '../components/Header';
import EndFooter from '../components/EndFooter';
import { 
  ExternalLink, 
  Target, 
  Megaphone, 
  Users, 
  Handshake, 
  Check, 
  Download, 
  Send 
} from 'lucide-react';

function SponsorsPage() {
  // --- DATA: Existing Sponsors (Preserved) ---
  const sponsors = [
    { src: "WhatsApp Image 2025-10-11 at 13.06.55_c7ee6430.jpg", alt: "Platinum Tabreed", link: "https://www.tabreed.ae/", type: "Platinum Sponsor" },
    { src: "ABB_logo.svg.png", alt: "Hydropower", link: "https://www.hydropower.energy/", type: "Platinum Sponsor" },
    { src: "Rockwell_Automation_logo_(2019).svg.png", alt: "Gold Hitachi", link: "https://www.hitachienergy.com/me/en", type: "Gold Sponsor" },
    { src: "Real-sense-logo-rgb.png", alt: "Gold IGC", link: "https://intelligent-globe.com/", type: "Gold Sponsor" },
    { src: "Yaskawa_logo.svg.png", alt: "Gold Siemens", link: "https://www.siemens-energy.com", type: "Silver Sponsor" },
    { src: "Figure-ai-logo.svg.png", alt: "Silver Minsait", link: "https://www.minsait.com/en", type: "Bronze Sponsor" },
    { src: "images.png", alt: "Abbnew 1", link: "javascript:void(0);", type: "Bronze Sponsor" },
    { src: "Untitled.png", alt: "Bronze PWC", link: "https://www.pwc.com/gx/en.html", type: "Bronze Sponsor" },
    { src: "Black_Full_Logo.webp", alt: "SUEZ", link: "javascript:void(0);", type: "Bronze Sponsor" },
  ];

  const universityLogos = [
    { src: 'uni01.png', alt: 'University 1' },
    { src: 'uni2.png', alt: 'University 2' },
    { src: 'uni3.png', alt: 'University 3' },
    { src: 'uni4.png', alt: 'University 4' },
    { src: 'uni5.png', alt: 'University 5' },
    { src: 'uni6.png', alt: 'University 6' },
    { src: 'uni7.png', alt: 'University 7' },
  ];

  const partners = [
    { label: 'Supported by', logo: 'gcea.png', alt: 'GCEA' },
    { label: 'Official English News Partner', logo: 'the-national.png', alt: 'The National News' },
    { label: 'Host City', logo: 'Emblem_of_Italy.svg.webp', alt: 'Italy City' },
    { label: 'Destination Partner', logo: 'Roma-Stemma-2.svg.png', alt: 'Rome Destination' },
    { label: 'Venue Partner', logo: 'Crowne_Plaza_by_IHG_logo.svg.png', alt: 'Venue Partner' },
  ];

  // --- DATA: New Sections ---
  const benefits = [
    { icon: <Target className="w-8 h-8 text-indigo-600" />, title: "Brand Visibility", desc: "Showcase your brand to a global audience of industry leaders and innovators." },
    { icon: <Users className="w-8 h-8 text-indigo-600" />, title: "Targeted Networking", desc: "Connect directly with decision-makers, researchers, and potential clients." },
    { icon: <Megaphone className="w-8 h-8 text-indigo-600" />, title: "Thought Leadership", desc: "Position your organization as a leader in AI and Robotics through speaking slots." },
    { icon: <Handshake className="w-8 h-8 text-indigo-600" />, title: "Strategic Partnerships", desc: "Forge new alliances with universities, tech firms, and government bodies." },
  ];

  const packages = [
    {
      name: "Silver",
      price: "$5,000",
      features: ["3x2m Exhibition Space", "2 Conference Passes", "Logo on Website & App", "Quarter Page Ad in Booklet"],
      highlight: false
    },
    {
      name: "Gold",
      price: "$10,000",
      features: ["6x3m Exhibition Space", "5 Conference Passes", "Speaking Slot (20 mins)", "Half Page Ad in Booklet", "Social Media Spotlight"],
      highlight: false
    },
    {
      name: "Platinum",
      price: "$20,000",
      features: ["6x6m Prime Island Booth", "10 Conference Passes", "Keynote Speaking Slot", "Full Page Ad in Booklet", "VIP Dinner Access", "Exclusive Branding Rights"],
      highlight: true
    }
  ];

  return (
    <div>
      <Header />

      {/* 1. HERO BANNER */}
      <div className="relative text-white py-12 overflow-hidden"
        style={{ backgroundColor: '#2b3267', backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-dot.png")' }}>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Partner With Innovation</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto font-light leading-relaxed">
            Join ICAMLR 2026 as a sponsor or exhibitor. Elevate your brand in the world of Artificial Intelligence and Machine Learning.
          </p>
          <div className="mt-8">
            <a href="#contact-form" className="inline-block bg-white text-[#2b3267] font-bold px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors">
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 space-y-24">

        {/* 2. WHY SPONSOR */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Why Sponsor ICAMLR?</h2>
            <p className="text-slate-600 mt-2">Unlock exclusive opportunities to grow your business.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-4">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2b3267] mb-2">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. SPONSORSHIP PACKAGES */}
        <section id="packages">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Sponsorship Packages</h2>
            <p className="text-slate-600 mt-2">Choose the tier that best fits your marketing goals.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, i) => (
              <div key={i} className={`relative flex flex-col p-8 rounded-2xl border ${pkg.highlight ? 'border-indigo-600 shadow-xl scale-105 bg-white z-10' : 'border-slate-200 bg-slate-50 text-slate-600'}`}>
                {pkg.highlight && (
                   <div className="absolute top-0 right-0 -mt-3 mr-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                     Best Value
                   </div>
                )}
                <h3 className="text-2xl font-bold text-[#2b3267]">{pkg.name}</h3>
                <div className="my-4">
                    <span className="text-4xl font-extrabold text-slate-900">{pkg.price}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <Check className={`w-5 h-5 shrink-0 ${pkg.highlight ? 'text-indigo-600' : 'text-slate-400'}`} />
                            <span className="text-sm">{feat}</span>
                        </li>
                    ))}
                </ul>
                <a href="#contact-form" className={`w-full py-3 rounded-lg font-semibold text-center transition-colors ${pkg.highlight ? 'bg-[#2b3267] text-white hover:bg-opacity-90' : 'bg-white border border-slate-300 hover:bg-slate-50'}`}>
                    Choose {pkg.name}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 4. EXHIBITOR INFORMATION */}
        <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                 {/* Decorative background element */}
                 <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-18,87.9,-3.8C85.7,10.4,78.6,23.3,70,35.2C61.4,47.1,51.3,58,39.8,65.8C28.3,73.6,15.4,78.3,1.3,76.1C-12.8,73.8,-26.7,64.6,-39.7,55.5C-52.7,46.4,-64.8,37.4,-73.2,25.5C-81.6,13.6,-86.3,-1.2,-83.1,-14.8C-79.9,-28.4,-68.8,-40.8,-56.3,-48.6C-43.8,-56.4,-29.9,-59.6,-16.9,-62.3C-3.9,-65,9.1,-67.2,21.8,-70.8L44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Exhibitor Information</h2>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                        Showcase your latest technologies, products, and services to an engaged audience. The exhibition area is located centrally, ensuring high footfall during coffee breaks and networking sessions.
                    </p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                            <span>Standard Booth shell scheme (Walls, Fascia Name, Power)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                            <span>Dedicated Exhibitor listing in the App</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                            <span>Lead retrieval system support</span>
                        </li>
                    </ul>
                    <button className="flex items-center gap-2 text-indigo-300 hover:text-white transition-colors font-semibold">
                        <Download className="w-5 h-5" /> Download Floor Plan & Prospectus
                    </button>
                </div>
                
                <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-white/5 backdrop-blur-sm p-2">
                   {/* Contextual image for exhibition layout */}
                   

[Image of exhibition hall floor plan layout]

                   <div className="p-4 text-center">
                        <p className="text-sm text-slate-400">Interactive Floor Plan View</p>
                   </div>
                </div>
            </div>
        </section>

        {/* 5. CURRENT SPONSORS (Preserving Logic) */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Our Current Sponsors</h2>
            <div className="h-1 w-20 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="space-y-16">
            {['Platinum Sponsor', 'Gold Sponsor', 'Silver Sponsor', 'Bronze Sponsor'].map(type => {
              const filtered = sponsors.filter(s => s.type === type);
              if (!filtered.length) return null;
              return (
                <div key={type}>
                  <h3 className="text-xl font-semibold text-center uppercase tracking-widest text-indigo-400 mb-8">{type}s</h3>
                  <div className="flex flex-wrap gap-8 justify-center items-center">
                    {filtered.map((sponsor, index) => (
                      <a key={index} href={sponsor.link} target="_blank" rel="noreferrer"
                        className="group bg-white rounded-xl border border-slate-200 p-6 w-48 h-32 flex justify-center items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                        <img src={sponsor.src} alt={sponsor.alt} className="max-h-16 max-w-full object-contain transition-all duration-300" />
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink size={14} className="text-slate-400" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. MEDIA & UNIVERSITY PARTNERS */}
        <div className="grid lg:grid-cols-2 gap-16">
            {/* Media Partners */}
            <section>
                <h3 className="text-2xl font-bold text-[#2b3267] mb-8 flex items-center gap-2">
                    <Megaphone className="w-6 h-6" /> Media & Partners
                </h3>
                <div className="grid grid-cols-2 gap-6">
                    {partners.map((partner, index) => (
                    <div key={index} className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 text-center hover:shadow-md transition-all flex flex-col items-center justify-center h-40">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">{partner.label}</p>
                        <img src={partner.logo} alt={partner.alt} className="h-12 object-contain" />
                    </div>
                    ))}
                </div>
            </section>

            {/* University Partners */}
            <section>
                <h3 className="text-2xl font-bold text-[#2b3267] mb-8 flex items-center gap-2">
                    <Users className="w-6 h-6" /> University Partners
                </h3>
                <div className="grid grid-cols-3 gap-4">
                    {universityLogos.map((logo, index) => (
                    <div key={index} className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center aspect-square">
                        <img src={logo.src} alt={logo.alt} className="w-full h-auto object-contain" />
                    </div>
                    ))}
                </div>
            </section>
        </div>

        {/* 7. BECOME A SPONSOR FORM */}
        <section id="contact-form" className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-[#2b3267] p-6 text-white text-center">
                <h2 className="text-2xl font-bold">Become a Sponsor</h2>
                <p className="text-indigo-200 text-sm mt-1">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>
            <div className="p-8 md:p-10">
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                            <input type="text" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4 border" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
                            <input type="text" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4 border" placeholder="Tech Innovations Ltd." />
                        </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                            <input type="email" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4 border" placeholder="john@company.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                            <input type="tel" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4 border" placeholder="+1 (555) 000-0000" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Interested Package</label>
                        <select className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4 border bg-white">
                            <option>Select a package...</option>
                            <option>Platinum Sponsorship</option>
                            <option>Gold Sponsorship</option>
                            <option>Silver Sponsorship</option>
                            <option>Exhibition Only</option>
                            <option>Custom / Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
                        <textarea rows="4" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3 px-4 border" placeholder="Tell us about your requirements..."></textarea>
                    </div>

                    <button type="submit" className="w-full bg-indigo-600 text-white font-bold text-lg py-4 rounded-lg shadow-lg hover:bg-indigo-700 transition-all flex justify-center items-center gap-2">
                        <Send size={20} /> Submit Inquiry
                    </button>
                </form>
            </div>
        </section>

      </div>
      <EndFooter />
    </div>
  );
}

export default SponsorsPage;