// // import React, { useState } from "react";
// // import { ChevronDown, ChevronUp } from "lucide-react";

// // const FAQS = () => {
// //   const faqItems = [
// //     {
// //       title: "When & Where",
// //       content: `
// //         AIMLR 2026 will be held during July 28-30, 2026.
// //         The conference will take place in Hybrid mode — participants may join in-person
// //         at Crowne Plaza - St. Peter’s Rome, Italy or virtually from home or work.
// //       `,
// //     },
// //     {
// //       title: "Registration / Accommodation",
// //       content: `
// //         Registration opens on October 31, 2025.
// //         You can register through the official registration page.
// //         Registration covers sessions, conference kit, certificates and meals 
// //         (depending on category).
// //       `,
// //     },
// //     {
// //       title: "Submissions / Sessions and Workshops",
// //       content: `
// //         Abstracts can be submitted online or via email.
// //         A submission template is available for download.
// //         You may submit more than one proposal but may not present more than two papers.
// //       `,
// //     },
// //     {
// //       title: "Presentations",
// //       content: `
// //         Oral presentations are limited to 20–25 minutes including Q&A.
// //         Poster size allowed is 1m x 1m.
// //         English is the official language of the conference.
// //       `,
// //     },
// //   ];

// //   const [openIndex, setOpenIndex] = useState(null);

// //   const toggleItem = (index) => {
// //     setOpenIndex(openIndex === index ? null : index);
// //   };

// //   return (
// //     <div className="max-w-5xl mx-auto px-6 py-12">
// //       <h2 className="text-3xl font-bold mb-10 text-gray-900">
// //         Frequently Asked Questions
// //       </h2>

// //       <div className="space-y-4">
// //         {faqItems.map((item, index) => (
// //           <div key={index} className="border rounded-lg overflow-hidden">
// //             <button
// //               onClick={() => toggleItem(index)}
// //               className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-900 bg-gray-100 hover:bg-gray-200"
// //             >
// //               {item.title}
// //               {openIndex === index ? <ChevronUp /> : <ChevronDown />}
// //             </button>

// //             {openIndex === index && (
// //               <div className="p-4 bg-white text-gray-700 leading-relaxed">
// //                 {item.content.split("\n").map((line, i) => (
// //                   <p key={i} className="mb-2">
// //                     {line}
// //                   </p>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FAQS;



// import React, { useState } from "react";
// import { Minus, Plus } from "lucide-react";

// const FAQS = () => {
//   // State to track which FAQ item is open. 
//   // We use the index of the item. 'null' means all are closed.
//   const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one

//   const toggleItem = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqItems = [
//     {
//       title: "WHEN & WHERE",
//       content: (
//         <div className="space-y-4">
//           <div>
//             <h4 className="font-bold text-gray-900">When will the conference take place?</h4>
//             <p>AIMLR 2026 will be held during <strong>July 28-30, 2026</strong>.</p>
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900">Where will the conference be held?</h4>
//             <p>
//               AIMLR 2026 will be held in Hybrid mode, participants can join <strong>In Person</strong> at <strong>Crowne Plaza - St. Peter’s Rome, Italy</strong> or <strong>Virtually</strong> from home or work.
//             </p>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "REGISTRATION / ACCOMMODATION",
//       content: (
//         <div className="space-y-4">
//           <div>
//             <h4 className="font-bold text-gray-900">When does registration open?</h4>
//             <p>Registration for AIMLR 2026 Conference opens on <strong>October 31, 2025</strong>.</p>
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900">Where do I go to register for the AIMLR 2026 conference?</h4>
//             <p>You can register for the conference via our <a href="#" className="text-blue-600 hover:underline">online registration form</a>.</p>
//           </div>
          
//           <div>
//             <h4 className="font-bold text-gray-900 mb-2">What are the registration rates?</h4>
//             <div className="overflow-x-auto">
//               <table className="w-full md:w-2/3 border-collapse border border-gray-300 text-sm">
//                 <thead>
//                   <tr className="bg-gray-50">
//                     <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
//                     <th className="border border-gray-300 px-4 py-2 text-left">Price in USD</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="border border-gray-300 px-4 py-2">Presenter (In-Person)</td>
//                     <td className="border border-gray-300 px-4 py-2">739 USD</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 px-4 py-2">Listener (In-Person)</td>
//                     <td className="border border-gray-300 px-4 py-2">839 USD</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 px-4 py-2">Presenter (Virtual)</td>
//                     <td className="border border-gray-300 px-4 py-2">439 USD</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 px-4 py-2">Listener (Virtual)</td>
//                     <td className="border border-gray-300 px-4 py-2">539 USD</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-bold text-gray-900">How can I reserve a hotel room, and what are the rates?</h4>
//             <p>
//               You can reserve hotel from our online registration link, for detailed information visit: <a href="#" className="text-blue-600 hover:underline">Accommodation Page</a>.
//             </p>
//           </div>

//           <div>
//             <h4 className="font-bold text-gray-900">What does my registration cost cover?</h4>
//             <p className="font-semibold mt-2">For In-Person Participants:</p>
//             <ul className="list-disc pl-5 mt-1 space-y-1">
//               <li>Full access to all conference sessions</li>
//               <li>Conference kit (includes name tag, program booklet)</li>
//               <li>E-Copy of Abstract Book</li>
//               <li>Daily lunch and coffee breaks throughout the conference</li>
//               <li>Certificate of participation issued by the Organizing Committee</li>
//             </ul>
//           </div>
          
//           <div>
//              <h4 className="font-bold text-gray-900">How do I get a receipt for my registration?</h4>
//              <p>You will get the payment receipt from conference secretary within 2 to 4 business days. For further information contact secretary@roboticsaisummit.com</p>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "SUBMISSIONS / SESSIONS AND WORKSHOPS",
//       content: (
//         <div className="space-y-4">
//           <div>
//             <h4 className="font-bold text-gray-900">How to submit an Abstract?</h4>
//             <p>Send us your abstracts as per the sample template in Abstract Submission page or you can directly email to conference secretary.</p>
//             <p className="mt-1"><a href="#" className="text-blue-600 hover:underline">Download Abstract Template Here</a></p>
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900">Where do I go to submit an abstract?</h4>
//             <p>You may submit proposals online via our Abstract Submission Portal or you can directly email to conference secretary.</p>
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900">Do you have any template for paper submission?</h4>
//             <p>Yes, we have a template for abstract submission. Please <a href="#" className="text-blue-600 hover:underline">download from this link</a>.</p>
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900">May I submit more than one proposal?</h4>
//             <p>Yes. You may submit more than one proposal and participate in more than one session either in oral or poster session. However, you may not present more than two papers during the conference.</p>
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900">When will I know if my paper has been accepted?</h4>
//             <p>Once you submit the abstract, we will let you know the acceptance in 2-4 business days. If you are not receiving the acceptance of abstract, please contact at: secretary@roboticsaisummit.com</p>
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900">Can I still present without attending the conference?</h4>
//             <p>You can participate in Virtual mode without attending the conference In Person.</p>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "PRESENTATIONS",
//       content: (
//         <div className="space-y-4">
//           <div>
//             <h4 className="font-bold text-gray-900">How much time will be given for an oral presenter?</h4>
//             <p>Each Oral Presenter will have 20-25 minutes for presentation including Q/A session.</p>
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900">I am presenting a poster, what are the requirements? / What is the size of a poster?</h4>
//             <p><strong>Poster Dimensions:</strong> The display area for each poster on the poster board is 1 m wide by 1 m high.</p>
//             <p className="mt-1 text-sm text-gray-600">
//               All posters should be prepared in advance and brought to the conference by the presenters. The conference organizers are NOT able to receive any posters by mail in advance, print or transport posters. There will NOT be facilities on-site for printing or composing posters.
//             </p>
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900">What language should I speak during presentation?</h4>
//             <p>The working language of the conference is English.</p>
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900">Do I get a translator during my presentation?</h4>
//             <p>Translators will not be available during presentations. If you wish you can get your own translator.</p>
//           </div>
//           <div>
//             <h4 className="font-bold text-gray-900">Can I bring my own laptop for presentation?</h4>
//             <p>Taking the timelines and technical set up into consideration, using personal laptops are not recommended unless under unavoidable conditions.</p>
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "POLICIES & GENERAL INFORMATION",
//       content: (
//         <div className="space-y-4">
//            <p className="italic text-gray-500">
//              Note: Participants registered as “Listeners” or “Accompanying Persons” are not eligible to present papers (oral or poster).
//            </p>

//            <div>
//              <h4 className="font-bold text-gray-900">For Virtual Participants</h4>
//              <ul className="list-disc pl-5 mt-1 space-y-1">
//                <li>Opportunity to present remotely from home or work</li>
//                <li>Access to all presentations</li>
//                <li>E-Abstract Book and Program</li>
//                <li>E-Certificate for participation</li>
//              </ul>
//            </div>

//            <div>
//              <h4 className="font-bold text-gray-900">When do I get my Conference materials?</h4>
//              <p>Conference materials will be provided online after completion of conference.</p>
//            </div>
           
//            <div>
//              <h4 className="font-bold text-gray-900">I will not be presenting any work at the Conference. May I attend the event?</h4>
//              <p>We welcome participants who are not presenting work under listener category.</p>
//            </div>

//            <div>
//              <h4 className="font-bold text-gray-900">Are there any discounts for group registration?</h4>
//              <p>Yes, we have discounts for group participants. For information and discount codes please contact conference secretary in email: secretary@roboticsaisummit.com</p>
//            </div>

//            <div>
//              <h4 className="font-bold text-gray-900 mb-2">What is the cancellation and refund policy?</h4>
//              <ul className="list-disc pl-5 space-y-1">
//                <li>All cancellation requests must be submitted in writing via email to the Conference Secretary.</li>
//                <li>Cancellations made <strong>before 90 days</strong> of the conference start date will be eligible for a full refund, minus a $100 administrative fee.</li>
//                <li>Cancellations made <strong>within 90 days</strong> of the conference start date are non-refundable. However, the registration may be transferred to a future edition of the conference.</li>
//                <li>Registration transfers are allowed until <strong>October 22, 2026</strong>. No transfer requests will be accepted after this date.</li>
//                <li>All approved refunds will be processed during the second week following the conclusion of the conference.</li>
//              </ul>
             
//              <div className="mt-4 text-xs text-gray-500 leading-snug border-t pt-2">
//                <strong>Note:</strong> The above refund and cancellation policy does not apply if the event is postponed, rescheduled, or disrupted due to circumstances beyond the organizer’s control (natural disasters, pandemics, strikes, etc.). In these situations, fees will automatically transfer to the rescheduled event.
//              </div>
//            </div>
//         </div>
//       ),
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-0 font-sans">
//       <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">
//         Frequently Asked Questions
//       </h2>

//       <div className="space-y-4">
//         {faqItems.map((item, index) => {
//           const isOpen = openIndex === index;
//           return (
//             <div key={index} className="border border-gray-200 shadow-sm rounded-sm overflow-hidden">
//               <button
//                 onClick={() => toggleItem(index)}
//                 className="w-full flex justify-between items-center px-4 py-3 text-left font-bold text-white bg-[#0091b5] hover:bg-[#007a99] transition-colors"
//               >
//                 <span className="uppercase tracking-wide">{item.title}</span>
//                 {/* Icons: Minus if open, Plus if closed (or generic open/close indicator) */}
//                 {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
//               </button>

//               {isOpen && (
//                 <div className="p-6 bg-white text-gray-700 leading-relaxed text-[15px] animate-in slide-in-from-top-2 duration-200">
//                   {item.content}
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FAQS;



import React from "react";

const FAQS = () => {
  const faqItems = [
    {
      title: "WHEN & WHERE",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900">When will the conference take place?</h4>
            <p>AIMLR 2026 will be held during <strong>July 28-30, 2026</strong>.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Where will the conference be held?</h4>
            <p>
              AIMLR 2026 will be held in Hybrid mode, participants can join <strong>In Person</strong> at <strong>Crowne Plaza - St. Peter’s Rome, Italy</strong> or <strong>Virtually</strong> from home or work.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "REGISTRATION / ACCOMMODATION",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900">When does registration open?</h4>
            <p>Registration for the AIMLR 2026 Conference is <strong>now open</strong>.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Where do I go to register for the AIMLR 2026 conference?</h4>
            <p>You can register for the conference via our <a href="#" className="text-blue-600 hover:underline">online registration form</a>.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-2">What are the registration rates?</h4>
            <div className="overflow-x-auto">
              <table className="w-full md:w-2/3 border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Price (In Person)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Price (Virtual)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Speaker</td>
                    <td className="border border-gray-300 px-4 py-2">679 EUR</td>
                    <td className="border border-gray-300 px-4 py-2">379 EUR</td>
                  </tr>

                   <tr>
                    <td className="border border-gray-300 px-4 py-2">Poster</td>
                    <td className="border border-gray-300 px-4 py-2">499 EUR</td>
                    <td className="border border-gray-300 px-4 py-2">299 EUR</td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Delegate</td>
                    <td className="border border-gray-300 px-4 py-2">749 EUR</td>
                    <td className="border border-gray-300 px-4 py-2">399 EUR</td>
                  </tr>


                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Listener</td>
                    <td className="border border-gray-300 px-4 py-2">749 EUR</td>
                    <td className="border border-gray-300 px-4 py-2">399 EUR</td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Student</td>
                    <td className="border border-gray-300 px-4 py-2">359 EUR</td>
                    <td className="border border-gray-300 px-4 py-2">199 EUR</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900">How can I reserve a hotel room, and what are the rates?</h4>
            <p>
              You can reserve hotel from our online registration link, for detailed information visit: <a href="/register" className="text-blue-600 hover:underline">Accommodation Page</a>.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900">What does my registration cost cover?</h4>
            <p className="font-semibold mt-2">For In-Person Participants:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Full access to all conference sessions</li>
              <li>Conference kit (includes name tag, program booklet)</li>
              <li>E-Copy of Abstract Book</li>
              <li>Daily lunch and coffee breaks throughout the conference</li>
              <li>Certificate of participation issued by the Organizing Committee</li>
            </ul>
          </div>
          
          <div>
             <h4 className="font-bold text-gray-900">How do I get a receipt for my registration?</h4>
             <p>You will get the payment receipt from conference secretary within 2 to 4 business days. For further information contact secretary@roboticsaisummit.com</p>
          </div>
        </div>
      ),
    },
    {
      title: "SUBMISSIONS / SESSIONS AND WORKSHOPS",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900">How to submit an Abstract?</h4>
            <p>Send us your abstracts as per the sample template in Abstract Submission page or you can directly email to conference secretary.</p>
            <p className="mt-1"><a href="https://roboticsaisummit.com/abstract-submission-sample.pdf" className="text-blue-600 hover:underline">Download Abstract Template Here</a></p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Where do I go to submit an abstract?</h4>
            <p>You may submit proposals online via our <a href="/AbstractSubmission" className="text-blue-600 hover:underline">Abstract Submission Portal</a> or you can directly email to conference secretary.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Do you have any template for paper submission?</h4>
            <p>Yes, we have a template for abstract submission. Please <a href="https://roboticsaisummit.com/abstract-submission-sample.pdf" className="text-blue-600 hover:underline">download from this link</a>.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">May I submit more than one proposal?</h4>
            <p>Yes. You may submit more than one proposal and participate in more than one session either in oral or poster session. However, you may not present more than two papers during the conference.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">When will I know if my paper has been accepted?</h4>
            <p>Once you submit the abstract, we will let you know the acceptance in 2-4 business days. If you are not receiving the acceptance of abstract, please contact at: secretary@roboticsaisummit.com</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Can I still present without attending the conference?</h4>
            <p>You can participate in Virtual mode without attending the conference In Person.</p>
          </div>
        </div>
      ),
    },
    {
      title: "PRESENTATIONS",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-900">How much time will be given for an oral presenter?</h4>
            <p>Each Oral Presenter will have 20-25 minutes for presentation including Q/A session.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">I am presenting a poster, what are the requirements? / What is the size of a poster?</h4>
            <p><strong>Poster Dimensions:</strong> The display area for each poster on the poster board is 1 m wide by 1 m high.</p>
            <p className="mt-1 text-sm text-gray-600">
              All posters should be prepared in advance and brought to the conference by the presenters. The conference organizers are NOT able to receive any posters by mail in advance, print or transport posters. There will NOT be facilities on-site for printing or composing posters.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">What language should I speak during presentation?</h4>
            <p>The working language of the conference is English.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Do I get a translator during my presentation?</h4>
            <p>Translators will not be available during presentations. If you wish you can get your own translator.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Can I bring my own laptop for presentation?</h4>
            <p>Taking the timelines and technical set up into consideration, using personal laptops are not recommended unless under unavoidable conditions.</p>
          </div>
        </div>
      ),
    },
    {
      title: "POLICIES & GENERAL INFORMATION",
      content: (
        <div className="space-y-4">
           <p className="italic text-gray-500">
             Note: Participants registered as “Listeners” or “Accompanying Persons” are not eligible to present papers (oral or poster).
           </p>

           <div>
             <h4 className="font-bold text-gray-900">For Virtual Participants</h4>
             <ul className="list-disc pl-5 mt-1 space-y-1">
               <li>Opportunity to present remotely from home or work</li>
               <li>Access to all presentations</li>
               <li>E-Abstract Book and Program</li>
               <li>E-Certificate for participation</li>
             </ul>
           </div>

           <div>
             <h4 className="font-bold text-gray-900">When do I get my Conference materials?</h4>
             <p>Conference materials will be provided online after completion of conference.</p>
           </div>
           
           <div>
             <h4 className="font-bold text-gray-900">I will not be presenting any work at the Conference. May I attend the event?</h4>
             <p>We welcome participants who are not presenting work under listener category.</p>
           </div>

           <div>
             <h4 className="font-bold text-gray-900">Are there any discounts for group registration?</h4>
             <p>Yes, we have discounts for group participants. For information and discount codes please contact conference secretary in email: secretary@roboticsaisummit.com</p>
           </div>

           <div>
             <h4 className="font-bold text-gray-900 mb-2">What is the cancellation and refund policy?</h4>
             <ul className="list-disc pl-5 space-y-1">
               <li>All cancellation requests must be submitted in writing via email to the Conference Secretary.</li>
               <li>Cancellations made <strong>before 90 days</strong> of the conference start date will be eligible for a full refund, minus a $100 administrative fee.</li>
               <li>Cancellations made <strong>within 90 days</strong> of the conference start date are non-refundable. However, the registration may be transferred to a future edition of the conference.</li>
               <li>Registration transfers are allowed until <strong>May 29, 2026</strong>. No transfer requests will be accepted after this date.</li>
               <li>All approved refunds will be processed during the second week following the conclusion of the conference.</li>
             </ul>
             
             <div className="mt-4 text-xs text-gray-500 leading-snug border-t pt-2">
               <strong>Note:</strong> The above refund and cancellation policy does not apply if the event is postponed, rescheduled, or disrupted due to circumstances beyond the organizer’s control (natural disasters, pandemics, strikes, etc.). In these situations, fees will automatically transfer to the rescheduled event.
             </div>
           </div>
        </div>
      ),
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-0 font-sans">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-8">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-gray-200 shadow-sm overflow-hidden">
            {/* Header - Now just a static div, not a button */}
            <div
              className="w-full flex justify-between items-center px-4 py-3 text-left font-bold text-white"
              style={{
              background: "linear-gradient(90deg,rgba(47, 52, 57, 0.92) 0%, rgba(58, 63, 67, 0.92) 39%, rgba(71, 75, 79, 0.5) 100%, rgba(24, 28, 31, 0.93) 65%)"
              }}
            >
              <span className="uppercase tracking-wide">{item.title}</span>
            </div>

            {/* Content - Always visible */}
            <div className="p-6 bg-white text-gray-700 leading-relaxed text-[15px]">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;