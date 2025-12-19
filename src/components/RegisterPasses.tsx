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




          {/* <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-[#2b3267] sm:text-5xl">
              Book Your Passes Now
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Join industry leaders and innovators. Choose the perfect pass to unlock your conference experience.
            </p>
          </div>


          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {passes.map((pass) => (
              <PassCard key={pass.name} pass={pass} onBookNow={handleBookNow} />
            ))}
          </div> */}



            


            {/* <Section icon={<Ticket className="text-indigo-600" />} title="Registration Categories Explained">
    <ul className="list-disc pl-6 space-y-4 text-slate-700">
        <li>
            <span className="font-semibold text-[#2b3267]">Delegate:</span>
            <span className="ml-1">For industry professionals, corporate attendees, and general visitors looking to network and attend sessions.</span>
        </li>

        <li>
            <span className="font-semibold text-[#2b3267]">Speaker:</span>
            <span className="ml-1">Strictly for individuals whose abstracts have been accepted for oral presentation. ID verification required.</span>
        </li>

        <li>
            <span className="font-semibold text-[#2b3267]">Poster Presenter:</span>
            <span className="ml-1">For researchers presenting visual posters. Includes access to poster sessions and main conference areas.</span>
        </li>
    </ul>
</Section> */}




            {/* <Section icon={<Calendar className="text-indigo-600" />} title="Important Dates & Deadlines">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        <div className="p-2">
            <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold">Early Bird</p>
            <p className="text-2xl font-bold text-[#2b3267] mt-1">Ends Aug 30</p>
            <p className="text-xs text-slate-600 mt-1">Save up to 20%</p>
        </div>

        <div className="p-2">
            <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold">Regular Registration</p>
            <p className="text-2xl font-bold text-[#2b3267] mt-1">Ends Oct 15</p>
            <p className="text-xs text-slate-600 mt-1">Standard pricing applies</p>
        </div>

        <div className="p-2">
            <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold">Late / On-Spot</p>
            <p className="text-2xl font-bold text-[#2b3267] mt-1">After Oct 15</p>
            <p className="text-xs text-slate-600 mt-1">Additional fees apply</p>
        </div>

    </div>
</Section> */}


            {/* <div className="grid md:grid-cols-2 gap-12">
                <Section icon={<Users className="text-indigo-600" />} title="Student Discounts">
                    <p className="mb-4">
                        We offer a <strong>30% discount</strong> for currently enrolled undergraduate and graduate students.
                    </p>
                    <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                        <p className="text-sm text-orange-800">
                            <strong>Note:</strong> A valid University ID card and a letter from the Head of Department must be uploaded during registration or emailed to support@conference.com within 24 hours of booking.
                        </p>
                    </div>
                </Section>



                <Section icon={<Users className="text-indigo-600" />} title="Group Discounts">
    <p className="mb-4 text-gray-600">
        Planning to attend with your team? We offer special rates for group bookings.
    </p>

    <div className="overflow-hidden border border-gray-200 rounded-lg">
        <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Group Size</th>
                    <th className="px-4 py-3 font-semibold text-gray-700 border-b border-gray-200 text-right">Discount</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
                <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-600">3 - 5 Attendees</td>
                    <td className="px-4 py-3 text-right font-bold text-[#2b3267]">10% Off</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-600">6 - 10 Attendees</td>
                    <td className="px-4 py-3 text-right font-bold text-[#2b3267]">15% Off</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-600">10+ Attendees</td>
                    <td className="px-4 py-3 text-right font-bold text-[#2b3267]">20% Off</td>
                </tr>
            </tbody>
        </table>
    </div>
</Section>


            </div> */}



            {/* <Section icon={<ShieldX className="text-red-500" />} title="Refund & Cancellation Policy">
    <div className="space-y-4">
        <p className="text-gray-600">We understand that plans change. Here is our cancellation timeline:</p>
        

        <div className="border border-gray-200 rounded overflow-hidden">
            <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                    <tr>
                        <th className="px-4 py-3">Timeframe</th>
                        <th className="px-4 py-3">Refund Policy</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="px-4 py-3">60 days prior</td>
                        <td className="px-4 py-3 text-emerald-600 font-medium">
                            100% Refund <span className="text-gray-500 font-normal text-xs">(minus $50 fee)</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3">30-59 days prior</td>
                        <td className="px-4 py-3 text-orange-500 font-medium">
                            50% Refund
                        </td>
                    </tr>
                    <tr>
                        <td className="px-4 py-3">Less than 30 days prior</td>
                        <td className="px-4 py-3 text-red-500 font-medium">
                            No Refund
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div className="flex items-start gap-3 mt-4 text-sm text-slate-500 bg-slate-50 p-3 rounded border border-slate-100">
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-slate-400" />
            <p>Registrations are transferable to a colleague at any time for free. Please email us to update the attendee name.</p>
        </div>
    </div>
</Section> */}




            {/* <div className="grid md:grid-cols-2 gap-12">
    

    <Section icon={<FileText className="text-indigo-600" />} title="Visa Invitation Letters">
        <p className="mb-6 text-gray-600 leading-relaxed">
            Invitation letters are issued only after successful registration. Follow these steps:
        </p>
        <div className="space-y-4">
            {[
                "Complete your registration and full payment.",
                "Log in to your dashboard with email credentials.",
                "Navigate to the 'Visa Letter' section.",
                "Enter Passport details to generate the letter instantly."
            ].map((step, index) => (
                <div key={index} className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold font-mono">
                        {index + 1}
                    </span>
                    <p className="text-gray-700 text-sm leading-snug pt-0.5">{step}</p>
                </div>
            ))}
        </div>
    </Section>


    <Section icon={<CreditCard className="text-indigo-600" />} title="Payment Methods">
        <p className="mb-6 text-gray-600 leading-relaxed">
            We ensure secure transactions via Stripe and Bank Transfer. Accepted methods include:
        </p>
        <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                <span><strong>Credit/Debit Cards</strong> (Visa, MasterCard, Amex)</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                <span><strong>Digital Wallets</strong> (PayPal, Stripe)</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
                <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                <span><strong>Direct Bank Transfer</strong> (Invoice provided)</span>
            </li>
        </ul>
        
        <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400">
                * All payments are processed in USD. Secure 256-bit SSL encryption.
            </p>
        </div>
    </Section>

</div> */}

            {/* <Section icon={<HelpCircle className="text-indigo-600" />} title="Frequently Asked Questions">
                <div className="space-y-4">
                    <FAQItem question="Can I pay on-site?" answer="On-site registration is available but will be charged at the 'Late' rate. We highly recommend booking online." />
                    <FAQItem question="Is accommodation included?" answer="No, registration fees strictly cover access to the conference, meals, and kits. Accommodation must be booked separately." />
                    <FAQItem question="Do I get a certificate?" answer="Yes, all attendees (Delegates, Speakers, and Poster Presenters) will receive an official certificate of participation." />
                    <FAQItem question="Are meals Halal/Vegetarian friendly?" answer="Yes, our buffet includes Vegetarian, Vegan, and Halal options. Please specify allergies during checkout." />
                </div>
            </Section> */}



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