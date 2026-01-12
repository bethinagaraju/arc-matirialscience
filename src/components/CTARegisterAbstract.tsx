// import React from 'react';
// import { Link } from 'react-router-dom';
// import { UserPlus, FileText, ArrowRight } from 'lucide-react';
// import { motion } from 'framer-motion';

// const CTARegisterAbstract: React.FC = () => {
//   return (
//     <motion.section
//       className="py-12 px-4"
//       initial={{ opacity: 0, y: 12 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//     >
//       <div className="container mx-auto max-w-5xl">
//         <div className="bg-[#282c61] text-white shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">

//           {/* Left text */}
//           <div className="flex-1 text-center md:text-left">
//             <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "'Manrope', sans-serif" }}>
//               Ready to join AIMLR 2026?
//             </h2>
//             <p className="text-indigo-100 text-sm md:text-base max-w-2xl">
//               Secure your spot today or submit your research — two quick actions to become part of the global AI, ML & Robotics community.
//             </p>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
//             <Link to="/register" className="w-full sm:w-auto" title="Register for AIMLR 2026 Conference" aria-label="Register for AIMLR 2026 Conference">
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="flex items-center gap-3 justify-center px-5 py-3 font-semibold bg-white text-indigo-800 shadow hover:shadow-md transition-all w-full sm:w-auto"
//                 title="Register for AIMLR 2026 Conference"
//                 aria-label="Register for AIMLR 2026 Conference"
//               >
//                 <UserPlus className="w-5 h-5 text-indigo-700" title="Register for AIMLR 2026 Conference" aria-label="Register for AIMLR 2026 Conference" />
//                 <span>Register</span>
//                 <ArrowRight className="w-4 h-4 text-indigo-700 ml-1" title="Register for AIMLR 2026 Conference" aria-label="Register for AIMLR 2026 Conference" />
//               </motion.button>
//             </Link>

//             <Link to="/AbstractSubmission" className="w-full sm:w-auto" title="Submit Abstract for AIMLR 2026 Conference" aria-label="Submit Abstract for AIMLR 2026 Conference">
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="flex items-center gap-3 justify-center px-5 py-3 font-semibold bg-transparent border border-white text-white hover:bg-white/10 transition-all w-full sm:w-auto"
//                 title="Submit Abstract for AIMLR 2026 Conference"
//                 aria-label="Submit Abstract for AIMLR 2026 Conference"
//               >
//                 <FileText className="w-5 h-5 text-white/90" />
//                 <span>Abstract Submission</span>
//                 <ArrowRight className="w-4 h-4 text-white ml-1"/>
//               </motion.button>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default CTARegisterAbstract;







import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTARegisterAbstract: React.FC = () => {
  return (
    <motion.section
      className="py-6 px-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="bg-[#3F444A] px-8 py-8 md:px-14 md:py-8 flex flex-col lg:flex-row items-center gap-10">

          {/* Text Block */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Ready to join AIMLR 2026?
            </h2>

            <p className="text-[#D1D5D8] text-lg max-w-xl">
              Secure your place at AIMLR 2026 or submit your research and
              contribute to the global discussion on Artificial Intelligence,
              Machine Learning, and Robotics.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* Register */}
            <Link
              to="/register"
              title="Register for AIMLR 2026 Conference"
              aria-label="Register for AIMLR 2026 Conference"
            >
              <motion.span
                whileHover={{ y: -2 }}
                className="
                  inline-flex items-center gap-3

                  text-white
                  font-semibold
                  px-10 py-2.5
                  transition
                  hover:bg-[#B9984F]
                "

                style={{ backgroundImage: "linear-gradient(90deg, rgba(201, 170, 99, 0.99) 0%, rgba(201, 170, 99, 0.94) 39%, rgba(201, 170, 99, 0.77) 100%, rgba(201, 170, 99, 0.95) 65%)" }}
              >
                Register
                <ArrowRight size={16} />
              </motion.span>
            </Link>

            {/* Abstract */}
            <Link
              to="/AbstractSubmission"
              title="Submit Abstract for AIMLR 2026 Conference"
              aria-label="Submit Abstract for AIMLR 2026 Conference"
            >
              <motion.span
                whileHover={{ y: -2 }}
                className="
                  inline-flex items-center gap-3
                  border border-white
                  text-white
                  font-semibold
                  px-10 py-2
                  transition
                  hover:bg-white hover:text-[#3F444A]
                "
              >
                Abstract Submission
                <ArrowRight size={16} />
              </motion.span>
            </Link>

          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default CTARegisterAbstract;
