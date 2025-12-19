// // // // // // import React from 'react';
// // // // // // import axios from 'axios';

// // // // // // const NEWRegister: React.FC = () => {
// // // // // //   const handleSubmit = async () => {
// // // // // //     try {
// // // // // //       const payload = {
// // // // // //         title: 'Mr',
// // // // // //         fullName: 'Raj',
// // // // // //         phone: '9999999999',
// // // // // //         email: 'raj@gmail.com',
// // // // // //         institute: 'ABC College',
// // // // // //         country: 'India',
// // // // // //         registrationType: 'Speaker',
// // // // // //         presentationType: 'Oral',
// // // // // //         numberOfNights: 2,
// // // // // //       };

// // // // // //       const res = await axios.post('http://localhost:8080/api/registration/create', payload);

// // // // // //       const { checkoutUrl, referenceId } = res.data;

// // // // // //       // Redirect to Whop
// // // // // //       window.location.href = `${checkoutUrl}?ref=${referenceId}`;
// // // // // //     } catch (err) {
// // // // // //       // eslint-disable-next-line no-console
// // // // // //       console.error('Registration error', err);
// // // // // //       alert('Registration failed. Please try again.');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="py-8 px-4">
// // // // // //       <button
// // // // // //         onClick={handleSubmit}
// // // // // //         className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
// // // // // //       >
// // // // // //         Proceed to Payment
// // // // // //       </button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default NEWRegister;






// // // // // import React from 'react';
// // // // // import axios from 'axios';

// // // // // const NEWRegister: React.FC = () => {

// // // // //   const handleSubmit = async () => {
// // // // //     try {
// // // // //       const payload = {
// // // // //         fullName: 'Raj',
// // // // //         email: 'raj@gmail.com',
// // // // //       };

// // // // //       const res = await axios.post(
// // // // //         'http://localhost:8080/api/registration/create',
// // // // //         payload
// // // // //       );

// // // // //       const { checkoutUrl, referenceId } = res.data;

// // // // //       // ✅ Store referenceId for later verification
// // // // //       localStorage.setItem('referenceId', referenceId);

// // // // //       // ✅ Redirect to Whop (DO NOT modify URL)
// // // // //       window.location.href = checkoutUrl;

// // // // //     } catch (err) {
// // // // //       console.error('Registration error', err);
// // // // //       alert('Registration failed. Please try again.');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="py-8 px-4">
// // // // //       <button
// // // // //         onClick={handleSubmit}
// // // // //         className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
// // // // //       >
// // // // //         Proceed to Payment
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default NEWRegister;






// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';

// // // // // Interface matching your Backend Entity
// // // // interface FormData {
// // // //   planId: string;
// // // //   conferenceCode: string;
// // // //   title: string;
// // // //   fullName: string;
// // // //   email: string;
// // // //   phone: string;
// // // //   institute: string;
// // // //   country: string;
// // // //   registrationType: string;
// // // //   presentationType: string;
// // // //   numberOfNights: number;
// // // //   numberOfGuests: number;
// // // // }

// // // // const NEWRegister: React.FC = () => {
// // // //   const [loading, setLoading] = useState(false);

// // // //   // Initial State
// // // //   const [formData, setFormData] = useState<FormData>({
// // // //     planId: 'plan_HcVxJS4fF80A2', // 🔑 Your Whop Plan ID
// // // //     conferenceCode: 'AI-ROBO-2026',
// // // //     title: 'Dr.',
// // // //     fullName: '',
// // // //     email: '',
// // // //     phone: '',
// // // //     institute: '',
// // // //     country: '',
// // // //     registrationType: 'Speaker',
// // // //     presentationType: 'Oral',
// // // //     numberOfNights: 0,
// // // //     numberOfGuests: 0,
// // // //   });

// // // //   // Handle Input Change
// // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prev) => ({
// // // //       ...prev,
// // // //       [name]: name === 'numberOfNights' || name === 'numberOfGuests' ? Number(value) : value,
// // // //     }));
// // // //   };

// // // //   // Handle Form Submission
// // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // //     e.preventDefault(); // Prevent page reload
// // // //     if (loading) return;
// // // //     setLoading(true);

// // // //     try {
// // // //       console.log('Sending Payload:', formData);

// // // //       // 🚀 API Call to Spring Boot
// // // //       const res = await axios.post(
// // // //         'http://localhost:8080/api/registration/create',
// // // //         formData
// // // //       );

// // // //       console.log('API Response:', res.data);

// // // //       const { checkoutUrl, stateId } = res.data;

// // // //       // ✅ Store stateId for tracking if needed
// // // //       if (stateId) {
// // // //         localStorage.setItem('registrationStateId', stateId);
// // // //       }

// // // //       // ✅ Redirect to Whop Checkout
// // // //       if (checkoutUrl) {
// // // //         window.location.href = checkoutUrl;
// // // //       } else {
// // // //         alert('Error: No checkout URL received.');
// // // //       }

// // // //     } catch (err) {
// // // //       console.error('Registration error', err);
// // // //       alert('Registration failed. Please check console for details.');
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-xl mx-auto py-8 px-4">
// // // //       <h2 className="text-2xl font-bold mb-6 text-center">Conference Registration</h2>
      
// // // //       <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
        
// // // //         {/* Full Name */}
// // // //         <div>
// // // //           <label className="block text-sm font-medium text-gray-700">Full Name</label>
// // // //           <input
// // // //             type="text"
// // // //             name="fullName"
// // // //             value={formData.fullName}
// // // //             onChange={handleChange}
// // // //             required
// // // //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
// // // //             placeholder="John Doe"
// // // //           />
// // // //         </div>

// // // //         {/* Email */}
// // // //         <div>
// // // //           <label className="block text-sm font-medium text-gray-700">Email Address</label>
// // // //           <input
// // // //             type="email"
// // // //             name="email"
// // // //             value={formData.email}
// // // //             onChange={handleChange}
// // // //             required
// // // //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
// // // //             placeholder="john@example.com"
// // // //           />
// // // //         </div>

// // // //         {/* Phone */}
// // // //         <div>
// // // //           <label className="block text-sm font-medium text-gray-700">Phone Number</label>
// // // //           <input
// // // //             type="tel"
// // // //             name="phone"
// // // //             value={formData.phone}
// // // //             onChange={handleChange}
// // // //             required
// // // //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
// // // //             placeholder="+1 234 567 890"
// // // //           />
// // // //         </div>

// // // //         {/* Institute */}
// // // //         <div>
// // // //           <label className="block text-sm font-medium text-gray-700">Institute / Organization</label>
// // // //           <input
// // // //             type="text"
// // // //             name="institute"
// // // //             value={formData.institute}
// // // //             onChange={handleChange}
// // // //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
// // // //           />
// // // //         </div>

// // // //         {/* Registration Type */}
// // // //         <div>
// // // //           <label className="block text-sm font-medium text-gray-700">Registration Type</label>
// // // //           <select
// // // //             name="registrationType"
// // // //             value={formData.registrationType}
// // // //             onChange={handleChange}
// // // //             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
// // // //           >
// // // //             <option value="Speaker">Speaker</option>
// // // //             <option value="Listener">Listener</option>
// // // //             <option value="Student">Student</option>
// // // //           </select>
// // // //         </div>

// // // //         {/* Plan ID (Hidden or Visible depending on logic) */}
// // // //         <div>
// // // //            <label className="block text-sm font-medium text-gray-700">Plan ID (Testing)</label>
// // // //            <input
// // // //              type="text"
// // // //              name="planId"
// // // //              value={formData.planId}
// // // //              onChange={handleChange}
// // // //              className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm p-2 border"
// // // //            />
// // // //         </div>

// // // //         {/* Submit Button */}
// // // //         <button
// // // //           type="submit"
// // // //           disabled={loading}
// // // //           className={`w-full text-white px-4 py-3 rounded-md font-bold transition-colors ${
// // // //             loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
// // // //           }`}
// // // //         >
// // // //           {loading ? 'Processing...' : 'Proceed to Payment'}
// // // //         </button>

// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default NEWRegister;



// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // // Interface matching Backend Entity
// // // interface FormData {
// // //   planId: string;
// // //   conferenceCode: string;
// // //   title: string;
// // //   fullName: string;
// // //   email: string;
// // //   phone: string;
// // //   institute: string;
// // //   country: string;
// // //   registrationType: string;
// // //   presentationType: string;
// // //   numberOfNights: number;
// // //   numberOfGuests: number;
// // // }

// // // const NEWRegister: React.FC = () => {
// // //   const [loading, setLoading] = useState(false);

// // //   // Initial State
// // //   const [formData, setFormData] = useState<FormData>({
// // //     planId: 'plan_HcVxJS4fF80A2', // Whop Plan ID
// // //     conferenceCode: 'AI-ROBO-2026', // FIXED
// // //     title: 'Dr.',
// // //     fullName: '',
// // //     email: '',
// // //     phone: '',
// // //     institute: '',
// // //     country: '',
// // //     registrationType: 'Speaker',
// // //     presentationType: 'Oral',
// // //     numberOfNights: 0,
// // //     numberOfGuests: 0,
// // //   });

// // //   // Handle Input Change
// // //   const handleChange = (
// // //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// // //   ) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prev) => ({
// // //       ...prev,
// // //       [name]:
// // //         name === 'numberOfNights' || name === 'numberOfGuests'
// // //           ? Number(value)
// // //           : value,
// // //     }));
// // //   };

// // //   // Handle Form Submission
// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     if (loading) return;
// // //     setLoading(true);

// // //     try {
// // //       console.log('Sending Payload:', formData);

// // //       const res = await axios.post(
// // //         'http://localhost:8080/api/registration/create',
// // //         formData
// // //       );

// // //       console.log('API Response:', res.data);

// // //       const { checkoutUrl, stateId } = res.data;

// // //       if (stateId) {
// // //         localStorage.setItem('registrationStateId', stateId);
// // //       }

// // //       if (checkoutUrl) {
// // //         window.location.href = checkoutUrl;
// // //       } else {
// // //         alert('Checkout URL not received');
// // //       }
// // //     } catch (error) {
// // //       console.error('Registration failed', error);
// // //       alert('Registration failed. Check console.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-xl mx-auto py-10 px-4">
// // //       <h2 className="text-2xl font-bold mb-6 text-center">
// // //         Conference Registration
// // //       </h2>

// // //       <form
// // //         onSubmit={handleSubmit}
// // //         className="space-y-4 bg-white p-6 shadow rounded-lg"
// // //       >
// // //         {/* Conference Code (Fixed) */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">
// // //             Conference Code
// // //           </label>
// // //           <input
// // //             type="text"
// // //             name="conferenceCode"
// // //             value={formData.conferenceCode}
// // //             disabled
// // //             className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 p-2 border cursor-not-allowed"
// // //           />
// // //         </div>

// // //         {/* Title */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">
// // //             Title
// // //           </label>
// // //           <select
// // //             name="title"
// // //             value={formData.title}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // //           >
// // //             <option>Mr.</option>
// // //             <option>Ms.</option>
// // //             <option>Mrs.</option>
// // //             <option>Dr.</option>
// // //             <option>Prof.</option>
// // //           </select>
// // //         </div>

// // //         {/* Full Name */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">
// // //             Full Name
// // //           </label>
// // //           <input
// // //             type="text"
// // //             name="fullName"
// // //             value={formData.fullName}
// // //             onChange={handleChange}
// // //             required
// // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // //           />
// // //         </div>

// // //         {/* Email */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">
// // //             Email
// // //           </label>
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={formData.email}
// // //             onChange={handleChange}
// // //             required
// // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // //           />
// // //         </div>

// // //         {/* Phone */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">
// // //             Phone
// // //           </label>
// // //           <input
// // //             type="tel"
// // //             name="phone"
// // //             value={formData.phone}
// // //             onChange={handleChange}
// // //             required
// // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // //           />
// // //         </div>

// // //         {/* Institute */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">
// // //             Institute / Organization
// // //           </label>
// // //           <input
// // //             type="text"
// // //             name="institute"
// // //             value={formData.institute}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // //           />
// // //         </div>

// // //         {/* Country */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">
// // //             Country
// // //           </label>
// // //           <input
// // //             type="text"
// // //             name="country"
// // //             value={formData.country}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // //           />
// // //         </div>

// // //         {/* Registration Type */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">
// // //             Registration Type
// // //           </label>
// // //           <select
// // //             name="registrationType"
// // //             value={formData.registrationType}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // //           >
// // //             <option value="Speaker">Speaker</option>
// // //             <option value="Listener">Listener</option>
// // //             <option value="Student">Student</option>
// // //           </select>
// // //         </div>

// // //         {/* Presentation Type */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">
// // //             Presentation Type
// // //           </label>
// // //           <select
// // //             name="presentationType"
// // //             value={formData.presentationType}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // //           >
// // //             <option value="Oral">Oral</option>
// // //             <option value="Poster">Poster</option>
// // //             <option value="Virtual">Virtual</option>
// // //           </select>
// // //         </div>

// // //         {/* Number of Nights */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">
// // //             Number of Nights
// // //           </label>
// // //           <input
// // //             type="number"
// // //             name="numberOfNights"
// // //             value={formData.numberOfNights}
// // //             onChange={handleChange}
// // //             min={0}
// // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // //           />
// // //         </div>

// // //         {/* Number of Guests */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">
// // //             Number of Guests
// // //           </label>
// // //           <input
// // //             type="number"
// // //             name="numberOfGuests"
// // //             value={formData.numberOfGuests}
// // //             onChange={handleChange}
// // //             min={0}
// // //             className="mt-1 block w-full rounded-md border-gray-300 p-2 border"
// // //           />
// // //         </div>

// // //         {/* Plan ID (Visible for Testing) */}
// // //         <div>
// // //           <label className="block text-sm font-medium text-gray-700">
// // //             Plan ID
// // //           </label>
// // //           <input
// // //             type="text"
// // //             name="planId"
// // //             value={formData.planId}
// // //             onChange={handleChange}
// // //             className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 p-2 border"
// // //           />
// // //         </div>

// // //         {/* Submit Button */}
// // //         <button
// // //           type="submit"
// // //           disabled={loading}
// // //           className={`w-full text-white px-4 py-3 rounded-md font-bold ${
// // //             loading
// // //               ? 'bg-gray-400 cursor-not-allowed'
// // //               : 'bg-indigo-600 hover:bg-indigo-700'
// // //           }`}
// // //         >
// // //           {loading ? 'Processing...' : 'Proceed to Payment'}
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default NEWRegister;








// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import pricingData from "./pricing.json";

// // /* ---------------- TYPES ---------------- */

// // interface PricingItem {
// //   planId: string;
// //   registrationType: string;
// //   presentationType: string;
// //   nights: number;
// //   price: number;
// // }

// // interface FormData {
// //   planId: string;
// //   conferenceCode: string;
// //   title: string;
// //   fullName: string;
// //   email: string;
// //   phone: string;
// //   institute: string;
// //   country: string;
// //   registrationType: "registrationOnly" | "withAccommodation" | "virtual";
// //   presentationType: string;
// //   numberOfNights: number;
// //   numberOfGuests: number;
// // }

// // /* ---------------- COMPONENT ---------------- */

// // const NEWRegister: React.FC = () => {
// //   const [loading, setLoading] = useState(false);
// //   const [price, setPrice] = useState<number>(0);

// //   const [formData, setFormData] = useState<FormData>({
// //     planId: "",
// //     conferenceCode: "AI-ROBO-2026",
// //     title: "",
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     institute: "",
// //     country: "",
// //     registrationType: "withAccommodation",
// //     presentationType: "Poster",
// //     numberOfNights: 0,
// //     numberOfGuests: 0,
// //   });

// //   /* ---------------- HELPERS ---------------- */

// //   const findPlan = () => {
// //     const plans = pricingData.pricing as PricingItem[];

// //     const match = plans.find(
// //       (p) =>
// //         p.registrationType === formData.registrationType &&
// //         p.presentationType === formData.presentationType &&
// //         p.nights === formData.numberOfNights
// //     );

// //     if (match) {
// //       setFormData((prev) => ({ ...prev, planId: match.planId }));
// //       setPrice(match.price);
// //     } else {
// //       setFormData((prev) => ({ ...prev, planId: "" }));
// //       setPrice(0);
// //     }
// //   };

// //   /* ---------------- EFFECTS ---------------- */

// //   useEffect(() => {
// //     findPlan();
// //   }, [
// //     formData.registrationType,
// //     formData.presentationType,
// //     formData.numberOfNights,
// //   ]);

// //   /* ---------------- HANDLERS ---------------- */

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// //   ) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]:
// //         name === "numberOfNights" || name === "numberOfGuests"
// //           ? Number(value)
// //           : value,
// //     }));
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!formData.planId) {
// //       alert("No valid plan found");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const res = await axios.post(
// //         "http://localhost:8080/api/registration/create",
// //         formData
// //       );
// //       window.location.href = res.data.checkoutUrl;
// //     } catch (err) {
// //       alert("Registration failed");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   /* ---------------- UI ---------------- */

// //   return (
// //     <div className="max-w-4xl mx-auto p-6">
// //       {/* HEADER */}
// //       <div className="bg-white rounded-xl shadow p-6 mb-6 grid md:grid-cols-3 gap-4 text-sm">
// //         <div>
// //           <p className="font-semibold">Conference Date</p>
// //           <p>May 29–31, 2026</p>
// //         </div>
// //         <div>
// //           <p className="font-semibold">Location</p>
// //           <p>DoubleTree by Hilton Tokyo Ariake</p>
// //         </div>
// //         <div>
// //           <p className="font-semibold">Registration Deadline</p>
// //           <p>March 30, 2026</p>
// //         </div>
// //       </div>

// //       <form onSubmit={handleSubmit} className="space-y-6">
// //         {/* BASIC DETAILS */}
// //         <div className="bg-white p-6 rounded-xl shadow grid md:grid-cols-2 gap-4">
// //           <select name="title" onChange={handleChange} className="border p-2 rounded">
// //             <option value="">Select Title (Optional)</option>
// //             <option>Mr.</option>
// //             <option>Ms.</option>
// //             <option>Dr.</option>
// //             <option>Prof.</option>
// //           </select>

// //           <input name="fullName" placeholder="Full Name *" required onChange={handleChange} className="border p-2 rounded" />
// //           <input name="phone" placeholder="Phone Number *" required onChange={handleChange} className="border p-2 rounded" />
// //           <input name="email" type="email" placeholder="Email Address *" required onChange={handleChange} className="border p-2 rounded" />
// //           <input name="institute" placeholder="Institute / Organization *" onChange={handleChange} className="border p-2 rounded" />
// //           <input name="country" placeholder="Country *" onChange={handleChange} className="border p-2 rounded" />
// //         </div>

// //         {/* REGISTRATION TYPE */}
// //         <div className="bg-white p-6 rounded-xl shadow space-y-3">
// //           <p className="font-semibold">Registration Type *</p>
// //           {["registrationOnly", "withAccommodation", "virtual"].map((type) => (
// //             <label key={type} className="block">
// //               <input
// //                 type="radio"
// //                 name="registrationType"
// //                 value={type}
// //                 checked={formData.registrationType === type}
// //                 onChange={handleChange}
// //               />{" "}
// //               {type === "withAccommodation"
// //                 ? "Registration + Accommodation"
// //                 : type === "virtual"
// //                 ? "Virtual"
// //                 : "Registration Only"}
// //             </label>
// //           ))}
// //         </div>

// //         {/* PRESENTATION TYPE */}
// //         <div className="bg-white p-6 rounded-xl shadow space-y-3">
// //           <p className="font-semibold">Presentation Type *</p>
// //           {["Speaker", "Poster", "Listener", "Delegate", "Student"].map((p) => (
// //             <label key={p} className="mr-4">
// //               <input
// //                 type="radio"
// //                 name="presentationType"
// //                 value={p}
// //                 checked={formData.presentationType === p}
// //                 onChange={handleChange}
// //               />{" "}
// //               {p}
// //             </label>
// //           ))}
// //         </div>

// //         {/* ACCOMMODATION */}
// //         {formData.registrationType === "withAccommodation" && (
// //           <div className="bg-blue-50 p-6 rounded-xl space-y-4">
// //             <p className="font-semibold">Accommodation Options</p>

// //             <select name="numberOfGuests" onChange={handleChange} className="border p-2 rounded w-full">
// //               <option value={0}>0 (Just Me)</option>
// //               <option value={1}>1 Guest</option>
// //               <option value={2}>2 Guests</option>
// //             </select>

// //             <select name="numberOfNights" onChange={handleChange} className="border p-2 rounded w-full">
// //               <option value={0}>0 Nights</option>
// //               <option value={1}>1 Night</option>
// //               <option value={2}>2 Nights</option>
// //               <option value={3}>3 Nights</option>
// //             </select>
// //           </div>
// //         )}

// //         {/* PRICING SUMMARY */}
// //         <div className="bg-white p-6 rounded-xl shadow">
// //           <p className="font-semibold mb-2">Pricing Summary</p>
// //           <p>Price: €{price}</p>
// //           <p className="text-sm text-gray-600">Plan ID: {formData.planId}</p>
// //         </div>

// //         {/* SUBMIT */}
// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold"
// //         >
// //           {loading ? "Processing..." : "Register & Pay"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default NEWRegister;
















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import pricingData from "./pricing.json";

// /* ---------------- TYPES ---------------- */

// interface PricingItem {
//   planId: string;
//   registrationType: string;
//   presentationType: string;
//   nights: number;
//   price: number;
// }

// interface FormData {
//   planId: string;
//   conferenceCode: string;
//   title: string;
//   fullName: string;
//   email: string;
//   phone: string;
//   institute: string;
//   country: string;
//   registrationType: "registrationOnly" | "withAccommodation" | "virtual";
//   presentationType: string;
//   numberOfNights: number;
//   numberOfGuests: number;
// }

// /* ---------------- COMPONENT ---------------- */

// const NEWRegister: React.FC = () => {
//   const [loading, setLoading] = useState(false);
//   const [price, setPrice] = useState<number>(0);

//   const [formData, setFormData] = useState<FormData>({
//     planId: "",
//     conferenceCode: "AI-ROBO-2026",
//     title: "",
//     fullName: "",
//     email: "",
//     phone: "",
//     institute: "",
//     country: "",
//     registrationType: "withAccommodation",
//     presentationType: "Poster",
//     numberOfNights: 0,
//     numberOfGuests: 0,
//   });

//   /* ---------------- HELPERS ---------------- */

//   const findPlan = () => {
//     const plans = pricingData.pricing as PricingItem[];

//     const match = plans.find(
//       (p) =>
//         p.registrationType === formData.registrationType &&
//         p.presentationType === formData.presentationType &&
//         p.nights === formData.numberOfNights
//     );

//     if (match) {
//       setFormData((prev) => ({ ...prev, planId: match.planId }));
//       setPrice(match.price);
//     } else {
//       setFormData((prev) => ({ ...prev, planId: "" }));
//       setPrice(0);
//     }
//   };

//   /* ---------------- EFFECTS ---------------- */

//   useEffect(() => {
//     findPlan();
//   }, [
//     formData.registrationType,
//     formData.presentationType,
//     formData.numberOfNights,
//   ]);

//   /* ---------------- HANDLERS ---------------- */

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;

//     setFormData((prev) => {
//       // 🔑 RESET nights & guests when registration type changes
//       if (name === "registrationType") {
//         return {
//           ...prev,
//           registrationType: value as FormData["registrationType"],
//           numberOfNights: 0,
//           numberOfGuests: 0,
//         };
//       }

//       return {
//         ...prev,
//         [name]:
//           name === "numberOfNights" || name === "numberOfGuests"
//             ? Number(value)
//             : value,
//       };
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.planId) {
//       alert("No valid plan found");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "http://localhost:8080/api/registration/create",
//         formData
//       );
//       window.location.href = res.data.checkoutUrl;
//     } catch (err) {
//       alert("Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ---------------- UI ---------------- */

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* HEADER */}
//       <div className="bg-white rounded-xl shadow p-6 mb-6 grid md:grid-cols-3 gap-4 text-sm">
//         <div>
//           <p className="font-semibold">Conference Date</p>
//           <p>May 29–31, 2026</p>
//         </div>
//         <div>
//           <p className="font-semibold">Location</p>
//           <p>DoubleTree by Hilton Tokyo Ariake</p>
//         </div>
//         <div>
//           <p className="font-semibold">Registration Deadline</p>
//           <p>March 30, 2026</p>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* BASIC DETAILS */}
//         <div className="bg-white p-6 rounded-xl shadow grid md:grid-cols-2 gap-4">
//           <select
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           >
//             <option value="">Select Title (Optional)</option>
//             <option>Mr.</option>
//             <option>Ms.</option>
//             <option>Dr.</option>
//             <option>Prof.</option>
//           </select>

//           <input
//             name="fullName"
//             value={formData.fullName}
//             placeholder="Full Name *"
//             required
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />

//           <input
//             name="phone"
//             value={formData.phone}
//             placeholder="Phone Number *"
//             required
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />

//           <input
//             name="email"
//             value={formData.email}
//             type="email"
//             placeholder="Email Address *"
//             required
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />

//           <input
//             name="institute"
//             value={formData.institute}
//             placeholder="Institute / Organization *"
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />

//           <input
//             name="country"
//             value={formData.country}
//             placeholder="Country *"
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />
//         </div>

//         {/* REGISTRATION TYPE */}
//         <div className="bg-white p-6 rounded-xl shadow space-y-3">
//           <p className="font-semibold">Registration Type *</p>
//           {["registrationOnly", "withAccommodation", "virtual"].map((type) => (
//             <label key={type} className="block">
//               <input
//                 type="radio"
//                 name="registrationType"
//                 value={type}
//                 checked={formData.registrationType === type}
//                 onChange={handleChange}
//               />{" "}
//               {type === "withAccommodation"
//                 ? "Registration + Accommodation"
//                 : type === "virtual"
//                 ? "Virtual"
//                 : "Registration Only"}
//             </label>
//           ))}
//         </div>

//         {/* PRESENTATION TYPE */}
//         <div className="bg-white p-6 rounded-xl shadow space-y-3">
//           <p className="font-semibold">Presentation Type *</p>
//           {["Speaker", "Poster", "Listener", "Delegate", "Student"].map((p) => (
//             <label key={p} className="mr-4">
//               <input
//                 type="radio"
//                 name="presentationType"
//                 value={p}
//                 checked={formData.presentationType === p}
//                 onChange={handleChange}
//               />{" "}
//               {p}
//             </label>
//           ))}
//         </div>

//         {/* ACCOMMODATION */}
//         {formData.registrationType === "withAccommodation" && (
//           <div className="bg-blue-50 p-6 rounded-xl space-y-4">
//             <p className="font-semibold">Accommodation Options</p>

//             <select
//               name="numberOfGuests"
//               value={formData.numberOfGuests}
//               onChange={handleChange}
//               className="border p-2 rounded w-full"
//             >
//               <option value={0}>0 (Just Me)</option>
//               <option value={1}>1 Guest</option>
//               <option value={2}>2 Guests</option>
//             </select>

//             <select
//               name="numberOfNights"
//               value={formData.numberOfNights}
//               onChange={handleChange}
//               className="border p-2 rounded w-full"
//             >
//               <option value={0}>0 Nights</option>
//               <option value={1}>1 Night</option>
//               <option value={2}>2 Nights</option>
//               <option value={3}>3 Nights</option>
//             </select>
//           </div>
//         )}

//         {/* PRICING SUMMARY */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <p className="font-semibold mb-2">Pricing Summary</p>
//           <p>Price: €{price}</p>
//           <p className="text-sm text-gray-600">
//             Plan ID: {formData.planId || "N/A"}
//           </p>
//         </div>

//         {/* SUBMIT */}
//         <button
//           type="submit"
//           disabled={loading || !formData.planId}
//           className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold disabled:bg-gray-400"
//         >
//           {loading ? "Processing..." : "Register & Pay"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NEWRegister;






import React, { useEffect, useState } from "react";
import axios from "axios";
import pricingData from "./pricing.json";

/* ---------------- TYPES ---------------- */

interface PricingItem {
  planId: string;
  registrationType: string;
  presentationType: string;
  nights: number;
  price: number;
}

interface FormData {
  planId: string;
  conferenceCode: string;
  title: string;
  fullName: string;
  email: string;
  phone: string;
  institute: string;
  country: string;
  registrationType: "registrationOnly" | "withAccommodation" | "virtual";
  presentationType: string;
  numberOfNights: number;
  numberOfGuests: number;
}

/* ---------------- CAPTCHA HELPERS ---------------- */

const generateCaptcha = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

/* ---------------- COMPONENT ---------------- */

const NEWRegister: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState<number>(0);

  // CAPTCHA
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const isCaptchaValid = captchaInput === captcha;

  const [formData, setFormData] = useState<FormData>({
    planId: "",
    conferenceCode: "AI-ROBO-2026",
    title: "",
    fullName: "",
    email: "",
    phone: "",
    institute: "",
    country: "",
    registrationType: "withAccommodation",
    presentationType: "Poster",
    numberOfNights: 0,
    numberOfGuests: 0,
  });

  /* ---------------- PLAN LOGIC ---------------- */

  const findPlan = () => {
    const plans = pricingData.pricing as PricingItem[];

    const match = plans.find(
      (p) =>
        p.registrationType === formData.registrationType &&
        p.presentationType === formData.presentationType &&
        p.nights === formData.numberOfNights
    );

    if (match) {
      setFormData((prev) => ({ ...prev, planId: match.planId }));
      setPrice(match.price);
    } else {
      setFormData((prev) => ({ ...prev, planId: "" }));
      setPrice(0);
    }
  };

  useEffect(() => {
    findPlan();
  }, [
    formData.registrationType,
    formData.presentationType,
    formData.numberOfNights,
  ]);

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (name === "registrationType") {
        return {
          ...prev,
          registrationType: value as FormData["registrationType"],
          numberOfNights: 0,
          numberOfGuests: 0,
        };
      }

      return {
        ...prev,
        [name]:
          name === "numberOfNights" || name === "numberOfGuests"
            ? Number(value)
            : value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.planId) {
      alert("No valid plan found");
      return;
    }

    if (!isCaptchaValid) {
      alert("Invalid captcha");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://backendconf.roboticsaisummit.com/api/registration/create",
        formData
      );
      window.location.href = res.data.checkoutUrl;
    } catch {
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* HEADER */}
      <div className="bg-white rounded-xl shadow p-6 grid md:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="font-semibold">Conference Date</p>
          <p>May 29–31, 2026</p>
        </div>
        <div>
          <p className="font-semibold">Location</p>
          <p>DoubleTree by Hilton Tokyo Ariake</p>
        </div>
        <div>
          <p className="font-semibold">Registration Deadline</p>
          <p>March 30, 2026</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* BASIC DETAILS */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Personal Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <select name="title" value={formData.title} onChange={handleChange} className="border p-2 rounded">
              <option value="">Select Title</option>
              <option>Mr.</option>
              <option>Ms.</option>
              <option>Dr.</option>
              <option>Prof.</option>
            </select>
            <input name="fullName" value={formData.fullName} placeholder="Full Name *" required onChange={handleChange} className="border p-2 rounded" />
            <input name="phone" value={formData.phone} placeholder="Phone *" required onChange={handleChange} className="border p-2 rounded" />
            <input name="email" value={formData.email} type="email" placeholder="Email *" required onChange={handleChange} className="border p-2 rounded" />
            <input name="institute" value={formData.institute} placeholder="Institute / Organization" onChange={handleChange} className="border p-2 rounded" />
            <input name="country" value={formData.country} placeholder="Country" onChange={handleChange} className="border p-2 rounded" />
          </div>
        </section>

        {/* REGISTRATION TYPE */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Registration Type</h3>
          {["registrationOnly", "withAccommodation", "virtual"].map((type) => (
            <label key={type} className="block">
              <input type="radio" name="registrationType" value={type} checked={formData.registrationType === type} onChange={handleChange} />{" "}
              {type === "withAccommodation" ? "Registration + Accommodation" : type === "virtual" ? "Virtual" : "Registration Only"}
            </label>
          ))}
        </section>

        {/* PRESENTATION TYPE */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Presentation Type</h3>
          {["Speaker", "Poster", "Listener", "Delegate", "Student"].map((p) => (
            <label key={p} className="mr-4">
              <input type="radio" name="presentationType" value={p} checked={formData.presentationType === p} onChange={handleChange} /> {p}
            </label>
          ))}
        </section>

        {/* ACCOMMODATION */}
        {formData.registrationType === "withAccommodation" && (
          <section className="bg-blue-50 p-6 rounded-xl">
            <h3 className="font-semibold mb-3">Accommodation Options</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <select name="numberOfGuests" value={formData.numberOfGuests} onChange={handleChange} className="border p-2 rounded">
                <option value={0}>0 Guests</option>
                <option value={1}>1 Guest</option>
                <option value={2}>2 Guests</option>
              </select>
              <select name="numberOfNights" value={formData.numberOfNights} onChange={handleChange} className="border p-2 rounded">
                <option value={0}>0 Nights</option>
                <option value={1}>1 Night</option>
                <option value={2}>2 Nights</option>
                <option value={3}>3 Nights</option>
              </select>
            </div>
          </section>
        )}

        {/* CAPTCHA */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-3">Security Verification</h3>
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-gray-900 text-white px-4 py-2 tracking-widest rounded font-mono text-lg">
              {captcha}
            </div>
            <button
              type="button"
              onClick={() => setCaptcha(generateCaptcha())}
              className="px-3 py-2 bg-gray-200 rounded"
            >
              ↻
            </button>
          </div>
          <input
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
            placeholder="Enter captcha"
            className="border p-2 rounded w-full"
          />
        </section>

        {/* PRICING */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Pricing Summary</h3>
          <p className="text-lg font-bold">€{price}</p>
          <p className="text-sm text-gray-600">Plan ID: {formData.planId || "N/A"}</p>
        </section>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading || !formData.planId || !isCaptchaValid}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold disabled:bg-gray-400"
        >
          {loading ? "Processing..." : "Register & Pay"}
        </button>
      </form>
    </div>
  );
};

export default NEWRegister;
