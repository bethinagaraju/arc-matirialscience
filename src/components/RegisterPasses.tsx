// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import Header from "./Header";
// // import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
// // import EndFooter from "./EndFooter";

// // const passes = [
// //   {
// //     name: "DELEGATE PASS",
// //     price: 899,
// //     oldPrice: 1299,
// //     isPopular: true,
// //     features: [
// //       { label: "3 Days Exhibition Access", included: true },
// //       { label: "3 Days Conference Access", included: true },
// //       { label: "Access to Official Event App", included: true },
// //       { label: "Complimentary Coffee & Tea", included: true },
// //       { label: "Lunch", included: true },
// //       { label: "Business Networking Zone", included: true },
// //       // { label: "VIP Food & Beverage", included: false },
// //       // { label: "VIP / Speaker Lounge Access", included: false },
// //       // { label: "VIP Registration Desk", included: false },
// //       // { label: "VIP Seats in Conference", included: false },
// //     ],
// //     planid: "plan_jfnD3Xi7TnAzV",
// //   },
// //   {
// //     name: "SPEAKER PASS",
// //     price: 799,
// //     oldPrice: 1199,
// //      // Highlight this pass
// //     features: [
// //       { label: "3 Days Exhibition Access", included: true },
// //       { label: "3 Days Conference Access", included: true },
// //       { label: "Access to Official Event App", included: true },
// //       { label: "Complimentary Coffee & Tea", included: true },
// //       { label: "Lunch", included: true },
// //       { label: "Business Networking Zone", included: true },
      
// //     ],
// //     planid: "plan_hLWCDW2D5cK92",
// //   },
// //   {
// //     name: "POSTER PASS",
// //     price: 499,
// //     oldPrice: 799,
// //     features: [
// //            { label: "3 Days Exhibition Access", included: true },
// //       { label: "3 Days Conference Access", included: true },
// //       { label: "Access to Official Event App", included: true },
// //       { label: "Complimentary Coffee & Tea", included: true },
// //       { label: "Lunch", included: true },
// //       { label: "Business Networking Zone", included: true },
// //       // { label: "Complimentary Coffee & Tea", included: false },
// //       // { label: "Lunch Box", included: false },
// //       // { label: "Business Networking Zone", included: false },
// //       // { label: "VIP Food & Beverage", included: false },
// //       // { label: "VIP / Speaker Lounge Access", included: false },
// //       // { label: "VIP Registration Desk", included: false },
// //       // { label: "VIP Seats in Conference", included: false },
// //     ],
// //     planid: "plan_qLhtFzRCezWpw",
// //   },
// // ];

// // function PassCard({ pass, onBookNow }) {
// //   return (
// //     <div
// //       className={`flex flex-col rounded-xl border bg-white p-8 shadow-sm transition hover:shadow-lg ${
// //         pass.isPopular ? "border-indigo-500" : "border-slate-200"
// //       }`}
// //     >
// //       <h3 className="text-2xl font-bold text-slate-800">{pass.name}</h3>
      
// //       {/* Price Section */}
// //       <div className="my-6 flex items-baseline gap-3">
// //         <span className="text-4xl font-extrabold text-[#2d366b]">${pass.price}</span>
// //         {/* <span className="text-xl font-medium text-slate-400 line-through">${pass.oldPrice}</span> */}
// //       </div>

// //       {/* Features List */}
// //       <ul className="space-y-3 text-slate-600">
// //         {pass.features.map((feature) => (
// //           <li key={feature.label} className="flex items-center gap-3">
// //             {feature.included ? (
// //               <CheckCircle2 size={20} className="text-emerald-500" />
// //             ) : (
// //               <XCircle size={20} className="text-slate-400" />
// //             )}
// //             <span className={!feature.included ? "text-slate-400 line-through" : ""}>
// //               {feature.label}
// //             </span>
// //           </li>
// //         ))}
// //       </ul>

// //       {/* Spacer to push button to the bottom */}
// //       <div className="mt-auto pt-8">
// //         <button
// //           onClick={() => onBookNow(pass)}
// //           className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2b3267] px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// //         >
// //           Register Now
// //           <ArrowRight size={20} />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // function RegisterPasses() {
// //   const navigate = useNavigate();

// //   const handleBookNow = (pass) => {
// //     // Navigate to checkout with the selected plan ID
// //     navigate("/checkout", { state: { registrationData: { planid: pass.planid } } });
// //   };

// //   return (
// //     <>
// //       <Header />
// //       <section className="bg-slate-50 py-16 sm:py-24">
// //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
// //           <div className="text-center">
// //             <h1 className="text-4xl font-bold tracking-tight text-[#2b3267] sm:text-5xl">
// //               Book Your Passes Now
// //             </h1>
// //             <p className="mt-4 text-lg leading-8 text-slate-600">
// //               Choose the perfect pass to unlock your conference experience.
// //             </p>
// //           </div>
          
// //           {/* Pricing Cards Grid */}
// //           <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
// //             {passes.map((pass) => (
// //               <PassCard key={pass.name} pass={pass} onBookNow={handleBookNow} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //       <EndFooter />
// //     </>
// //   );
// // }

// // export default RegisterPasses;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import {
//   CheckCircle2,
//   XCircle,
//   ArrowRight,
//   HelpCircle,
//   CreditCard,
//   FileText,
//   Users,
//   Percent,
//   ShieldX,
//   Ticket
// } from "lucide-react";
// import EndFooter from "./EndFooter";

// const passes = [
//   {
//     name: "DELEGATE PASS",
//     price: 899,
//     oldPrice: 1299,
//     isPopular: true,
//     features: [
//       { label: "3 Days Exhibition Access", included: true },
//       { label: "3 Days Conference Access", included: true },
//       { label: "Access to Official Event App", included: true },
//       { label: "Complimentary Coffee & Tea", included: true },
//       { label: "Lunch", included: true },
//       { label: "Business Networking Zone", included: true },
//     ],
//     planid: "plan_jfnD3Xi7TnAzV",
//   },
//   {
//     name: "SPEAKER PASS",
//     price: 799,
//     oldPrice: 1199,
//     features: [
//       { label: "3 Days Exhibition Access", included: true },
//       { label: "3 Days Conference Access", included: true },
//       { label: "Access to Official Event App", included: true },
//       { label: "Complimentary Coffee & Tea", included: true },
//       { label: "Lunch", included: true },
//       { label: "Business Networking Zone", included: true },
//     ],
//     planid: "plan_hLWCDW2D5cK92",
//   },
//   {
//     name: "POSTER PASS",
//     price: 499,
//     oldPrice: 799,
//     features: [
//       { label: "3 Days Exhibition Access", included: true },
//       { label: "3 Days Conference Access", included: true },
//       { label: "Access to Official Event App", included: true },
//       { label: "Complimentary Coffee & Tea", included: true },
//       { label: "Lunch", included: true },
//       { label: "Business Networking Zone", included: true },
//     ],
//     planid: "plan_qLhtFzRCezWpw",
//   },
// ];

// function PassCard({ pass, onBookNow }) {
//   return (
//     <div
//       className={`flex flex-col rounded-xl border bg-white p-8 shadow-sm transition hover:shadow-lg ${
//         pass.isPopular ? "border-indigo-500" : "border-slate-200"
//       }`}
//     >
//       <h3 className="text-2xl font-bold text-slate-800">{pass.name}</h3>

//       <div className="my-6 flex items-baseline gap-3">
//         <span className="text-4xl font-extrabold text-[#2d366b]">${pass.price}</span>
//       </div>

//       <ul className="space-y-3 text-slate-600">
//         {pass.features.map((feature) => (
//           <li key={feature.label} className="flex items-center gap-3">
//             {feature.included ? (
//               <CheckCircle2 size={20} className="text-emerald-500" />
//             ) : (
//               <XCircle size={20} className="text-slate-400" />
//             )}
//             <span className={!feature.included ? "text-slate-400 line-through" : ""}>
//               {feature.label}
//             </span>
//           </li>
//         ))}
//       </ul>

//       <div className="mt-auto pt-8">
//         <button
//           onClick={() => onBookNow(pass)}
//           className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2b3267] px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-opacity-90"
//         >
//           Register Now <ArrowRight size={20} />
//         </button>
//       </div>
//     </div>
//   );
// }

// function RegisterPasses() {
//   const navigate = useNavigate();

//   const handleBookNow = (pass) =>
//     navigate("/checkout", { state: { registrationData: { planid: pass.planid } } });

//   return (
//     <>
//       <Header />

//       <section className="bg-slate-50 py-16 sm:py-24">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-[#2b3267] sm:text-5xl">
//               Book Your Passes Now
//             </h1>
//             <p className="mt-4 text-lg leading-8 text-slate-600">
//               Choose the perfect pass to unlock your conference experience.
//             </p>
//           </div>

//           {/* Pricing Cards */}
//           <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {passes.map((pass) => (
//               <PassCard key={pass.name} pass={pass} onBookNow={handleBookNow} />
//             ))}
//           </div>

//           {/* ------------------------------------------------ */}
//           {/* NEW CONTENT SECTIONS BELOW */}
//           {/* ------------------------------------------------ */}

//           <div className="mt-20 space-y-16 text-slate-700">

//             <Section icon={<Ticket className="text-indigo-600" />} title="Registration Categories & Pricing" />

//             <Section icon={<Percent className="text-indigo-600" />} title="Early Bird / Regular / Late Fees" />

//             <Section icon={<CheckCircle2 className="text-indigo-600" />} title="What Each Pass Includes" />

//             <Section icon={<Users className="text-indigo-600" />} title="Student Discounts" />

//             <Section icon={<Users className="text-indigo-600" />} title="Group Discounts" />

//             <Section icon={<ShieldX className="text-red-500" />} title="Refund & Cancellation Policy" />

//             <Section icon={<FileText className="text-indigo-600" />} title="Visa Invitation Letter Information" />

//             <Section icon={<CreditCard className="text-indigo-600" />} title="Payment Methods" />

//             <Section icon={<HelpCircle className="text-indigo-600" />} title="FAQs" />

//           </div>
//         </div>
//       </section>

//       <EndFooter />
//     </>
//   );
// }

// // Reusable section component
// function Section({ title, icon }) {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">{icon} {title}</h2>
//       <p className="text-slate-600">Details will be updated soon.</p>
//     </div>
//   );
// }

// export default RegisterPasses;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  HelpCircle,
  CreditCard,
  FileText,
  Users,
  Percent,
  ShieldX,
  Ticket,
  Calendar,
  AlertCircle,
  Check
} from "lucide-react";
import EndFooter from "./EndFooter";
import PricingCompont from "./PricingCompont";
import NEWRegister from "./NEWRegister";

const passes = [
  {
    name: "DELEGATE PASS",
    price: 899,
    oldPrice: 1299,
    isPopular: true,
    features: [
      { label: "3 Days Exhibition Access", included: true },
      { label: "3 Days Conference Access", included: true },
      { label: "Access to Official Event App", included: true },
      { label: "Complimentary Coffee & Tea", included: true },
      { label: "Lunch", included: true },
      { label: "Business Networking Zone", included: true },
    ],
    planid: "plan_jfnD3Xi7TnAzV",
  },
  {
    name: "SPEAKER PASS",
    price: 799,
    oldPrice: 1199,
    features: [
      { label: "3 Days Exhibition Access", included: true },
      { label: "3 Days Conference Access", included: true },
      { label: "Access to Official Event App", included: true },
      { label: "Complimentary Coffee & Tea", included: true },
      { label: "Lunch", included: true },
      { label: "Business Networking Zone", included: true },
    ],
    planid: "plan_hLWCDW2D5cK92",
  },
  {
    name: "POSTER PASS",
    price: 499,
    oldPrice: 799,
    features: [
      { label: "3 Days Exhibition Access", included: true },
      { label: "3 Days Conference Access", included: true },
      { label: "Access to Official Event App", included: true },
      { label: "Complimentary Coffee & Tea", included: true },
      { label: "Lunch", included: true },
      { label: "Business Networking Zone", included: true },
    ],
    planid: "plan_qLhtFzRCezWpw",
  },
];

function PassCard({ pass, onBookNow }) {
  return (
    <div
      className={`flex flex-col border bg-white p-8 shadow-sm transition hover:shadow-lg ${
        pass.isPopular ? "border-indigo-500 ring-1 ring-indigo-500" : "border-slate-200"
      }`}
    >
      {pass.isPopular && (
        <span className="mb-4 inline-block w-fit rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold text-slate-800">{pass.name}</h3>

      <div className="my-6 flex items-baseline gap-3">
        <span className="text-4xl font-extrabold text-[#2d366b]">${pass.price}</span>
        {pass.oldPrice && (
            <span className="text-lg text-slate-400 line-through">${pass.oldPrice}</span>
        )}
      </div>

      <ul className="space-y-3 text-slate-600 mb-8">
        {pass.features.map((feature) => (
          <li key={feature.label} className="flex items-center gap-3">
            {feature.included ? (
              <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
            ) : (
              <XCircle size={20} className="text-slate-400 shrink-0" />
            )}
            <span className={!feature.included ? "text-slate-400 line-through" : ""}>
              {feature.label}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4">
        <button
          onClick={() => onBookNow(pass)}
          className="flex w-full items-center justify-center gap-2 bg-[#2b3267] px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-opacity-90"
        >
          Register Now <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

function RegisterPasses() {
  const navigate = useNavigate();

  const handleBookNow = (pass) =>
    navigate("/checkout", { state: { registrationData: { planid: pass.planid } } });

  return (
    <>
      <Header />
      {/* <PricingCompont /> */}
      <NEWRegister />





      <EndFooter />
    </>
  );
}

// Updated Reusable Section Component
function Section({ title, icon, children }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800">
        {icon} {title}
      </h2>
      <div className="text-slate-600 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

// Simple helper for FAQ items
function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between"
            >
                <h5 className="font-bold text-[#2b3267]">{question}</h5>
                <ArrowRight className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </button>
            {isOpen && (
                <div className="px-4 py-3 bg-white">
                    <p className="text-sm text-slate-600">{answer}</p>
                </div>
            )}
        </div>
    )
}

export default RegisterPasses;