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
  AlertCircle
} from "lucide-react";
import EndFooter from "./EndFooter";

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
      className={`flex flex-col rounded-xl border bg-white p-8 shadow-sm transition hover:shadow-lg ${
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
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#2b3267] px-6 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-opacity-90"
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

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-[#2b3267] sm:text-5xl">
              Book Your Passes Now
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Join industry leaders and innovators. Choose the perfect pass to unlock your conference experience.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {passes.map((pass) => (
              <PassCard key={pass.name} pass={pass} onBookNow={handleBookNow} />
            ))}
          </div>

          {/* ------------------------------------------------ */}
          {/* CONTENT SECTIONS */}
          {/* ------------------------------------------------ */}

          <div className="mt-24 space-y-12 text-slate-700">
            
            <Section icon={<Ticket className="text-indigo-600" />} title="Registration Categories Explained">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                        <h4 className="font-semibold text-[#2b3267] mb-2">Delegate</h4>
                        <p className="text-sm text-slate-600">For industry professionals, corporate attendees, and general visitors looking to network and attend sessions.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                        <h4 className="font-semibold text-[#2b3267] mb-2">Speaker</h4>
                        <p className="text-sm text-slate-600">Strictly for individuals whose abstracts have been accepted for oral presentation. ID verification required.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                        <h4 className="font-semibold text-[#2b3267] mb-2">Poster Presenter</h4>
                        <p className="text-sm text-slate-600">For researchers presenting visual posters. Includes access to poster sessions and main conference areas.</p>
                    </div>
                </div>
            </Section>

            <Section icon={<Calendar className="text-indigo-600" />} title="Important Dates & Deadlines">
               <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-indigo-200">
                     <div className="p-2">
                        <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold">Early Bird</p>
                        <p className="text-2xl font-bold text-[#2b3267] mt-1">Ends Aug 30</p>
                        <p className="text-xs text-slate-500 mt-1">Save up to 20%</p>
                     </div>
                     <div className="p-2">
                        <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold">Regular Registration</p>
                        <p className="text-2xl font-bold text-[#2b3267] mt-1">Ends Oct 15</p>
                        <p className="text-xs text-slate-500 mt-1">Standard pricing applies</p>
                     </div>
                     <div className="p-2">
                        <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold">Late / On-Spot</p>
                        <p className="text-2xl font-bold text-[#2b3267] mt-1">After Oct 15</p>
                        <p className="text-xs text-slate-500 mt-1">Additional fees apply</p>
                     </div>
                  </div>
               </div>
            </Section>

            <div className="grid md:grid-cols-2 gap-12">
                <Section icon={<Users className="text-indigo-600" />} title="Student Discounts">
                    <p className="mb-4">
                        We offer a <strong>30% discount</strong> for currently enrolled undergraduate and graduate students.
                    </p>
                    <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-md">
                        <p className="text-sm text-orange-800">
                            <strong>Note:</strong> A valid University ID card and a letter from the Head of Department must be uploaded during registration or emailed to support@conference.com within 24 hours of booking.
                        </p>
                    </div>
                </Section>

                <Section icon={<Users className="text-indigo-600" />} title="Group Discounts">
                    <p className="mb-4">Planning to attend with your team? We offer special rates for group bookings.</p>
                    <ul className="space-y-2 mb-4">
                        <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                            <span>Group of 3-5</span>
                            <span className="font-bold text-[#2b3267]">10% Off</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-slate-200 pb-2">
                            <span>Group of 6-10</span>
                            <span className="font-bold text-[#2b3267]">15% Off</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Group of 10+</span>
                            <span className="font-bold text-[#2b3267]">20% Off</span>
                        </li>
                    </ul>
                </Section>
            </div>

            <Section icon={<ShieldX className="text-red-500" />} title="Refund & Cancellation Policy">
                <div className="space-y-4">
                    <p>We understand that plans change. Here is our cancellation timeline:</p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                        <li>Cancellations received <strong>60 days prior</strong> to the event: <span className="text-emerald-600 font-medium">100% Refund</span> (minus $50 processing fee).</li>
                        <li>Cancellations received <strong>30-59 days prior</strong>: <span className="text-orange-500 font-medium">50% Refund</span>.</li>
                        <li>Cancellations received <strong>less than 30 days prior</strong>: <span className="text-red-500 font-medium">No Refund</span>.</li>
                    </ul>
                    <div className="flex items-start gap-3 mt-4 text-sm text-slate-500 bg-slate-100 p-3 rounded">
                        <AlertCircle size={18} className="mt-0.5 shrink-0" />
                        <p>Registrations are transferable to a colleague at any time for free. Please email us to update the attendee name.</p>
                    </div>
                </div>
            </Section>

            <div className="grid md:grid-cols-2 gap-12">
                 <Section icon={<FileText className="text-indigo-600" />} title="Visa Invitation Letters">
                    <p className="mb-4">
                        Invitation letters for Visa applications are issued only after successful registration and full payment.
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-sm bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                        <li>Complete your registration and payment.</li>
                        <li>Log in to your dashboard using the credentials sent to your email.</li>
                        <li>Navigate to the "Visa Letter" section.</li>
                        <li>Fill in your Passport details and download the official letter instantly.</li>
                    </ol>
                </Section>

                <Section icon={<CreditCard className="text-indigo-600" />} title="Payment Methods">
                    <p className="mb-6">We accept secured payments via Stripe and Direct Bank Transfer.</p>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded border border-slate-200 shadow-sm">
                            <span className="font-bold text-slate-700">VISA</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded border border-slate-200 shadow-sm">
                            <span className="font-bold text-slate-700">MasterCard</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded border border-slate-200 shadow-sm">
                            <span className="font-bold text-slate-700">Amex</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded border border-slate-200 shadow-sm">
                            <span className="font-bold text-slate-700">PayPal</span>
                        </div>
                    </div>
                </Section>
            </div>

            <Section icon={<HelpCircle className="text-indigo-600" />} title="Frequently Asked Questions">
                <div className="space-y-4">
                    <FAQItem question="Can I pay on-site?" answer="On-site registration is available but will be charged at the 'Late' rate. We highly recommend booking online." />
                    <FAQItem question="Is accommodation included?" answer="No, registration fees strictly cover access to the conference, meals, and kits. Accommodation must be booked separately." />
                    <FAQItem question="Do I get a certificate?" answer="Yes, all attendees (Delegates, Speakers, and Poster Presenters) will receive an official certificate of participation." />
                    <FAQItem question="Are meals Halal/Vegetarian friendly?" answer="Yes, our buffet includes Vegetarian, Vegan, and Halal options. Please specify allergies during checkout." />
                </div>
            </Section>

          </div>
        </div>
      </section>

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