// export default function ScientificSessions() {
//   const sessions = [
//     "Nursing Research",
//     "Nursing Informatics",
//     "Oncology Nursing",
//     "Clinical Nursing",
//     "Pediatric Nursing",
//     "Public Health Nursing",
//     "Geriatric Nursing",
//     "Midwifery and Women’s Health",
//     "Nursing and Healthcare",
//     "Occupational Health Nursing",
//     "Psychiatric & Mental Health Nursing",
//     "Gynecology & Obstetrics Nursing",
//     "Emergency & Ambulatory Care Nursing",
//     "Evidence-Based Nursing",
//     "Anesthesia & PeriAnesthesia Nursing"
//   ];

// import { Link } from "react-router-dom";

// export default function ScientificSessions() {



// const sessions = [
//   "Responsible & Ethical Artificial Intelligence",
//   "Explainable AI (XAI) for Real-World Applications",
//   "Generative AI and Large Language Models (LLMs)",
//   "AI for Healthcare, Diagnosis & Medical Imaging",
//   "AI for Cybersecurity and Fraud Detection",
//   "AI in Smart Cities and Urban Development",
//   "Human-Centered AI and Trustworthy Systems",

//   "Deep Learning Architectures & Optimization",
//   "Reinforcement Learning and Decision Making",
//   "Federated Learning & Privacy-Preserving ML",

//   "Autonomous Robots and Intelligent Systems",
//   "Human-Robot Interaction (HRI)",
//   "AI-Driven Robotics for Industrial Automation",
//   "Swarm Robotics and Multi-Robot Systems",
//   "AI-Powered Drones and Autonomous Vehicles"
// ];





//   return (
//     <section className="w-full py-12 px-6 max-w-6xl mx-auto">
      
//       {/* Title */}
//       {/* <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#053047] mb-10">

//         CONFERENCE TOPICSa
//       </h2> */}


//           <h2 className="text-3xl font-bold text-[#00488B] mb-10 text-center">
//             AIMLR 2026 CONFERENCE TOPICS
//           </h2>

//       {/* Grid including buttons */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
//         {sessions.map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-gray-100 text-[#053047] font-medium p-4 border border-gray-300 hover:bg-gray-200 transition cursor-pointer text-sm"
//           >
//             {item}
//           </div>
//         ))}


// <Link to="/AbstractSubmission" className="w-full md:w-auto" title="Submit Abstract for AIMLR 2026 Conference" aria-label="Submit Abstract for AIMLR 2026 Conference">
//   <button className="p-4 w-full text-center font-semibold bg-[#053047] text-white hover:bg-[#07456a] transition" title="Submit Abstract for AIMLR 2026 Conference" aria-label="Submit Abstract for AIMLR 2026 Conference">
//     Submit Abstract
//   </button>
// </Link>

// {/* Button 2 */}
// <Link to="/sessions" className="w-full md:w-auto" title="View All Sessions at AIMLR 2026 Conference" aria-label="View All Sessions at AIMLR 2026 Conference">
//   <button className="p-4 w-full text-center font-semibold border border-[#053047] bg-[#394a81] text-white hover:bg-[#2e3b6b] transition" title="View All Sessions at AIMLR 2026 Conference" aria-label="View All Sessions at AIMLR 2026 Conference">
//     View All Sessions
//   </button>
// </Link>

// {/* Button 3 */}
// <Link to="/register" className="w-full md:w-auto" title="Register for AIMLR 2026 Conference" aria-label="Register for AIMLR 2026 Conference">
//   <button className="p-4 w-full text-center font-semibold bg-[#0282b8] text-white hover:bg-[#036a97] transition" title="Register for AIMLR 2026 Conference" aria-label="Register for AIMLR 2026 Conference">
//     Register
//   </button>
// </Link>

//       </div>
//     </section>
//   );
// }









import { Link } from "react-router-dom";

export default function ScientificSessions() {
  const sessions = [
    "Responsible & Ethical Artificial Intelligence",
    "Explainable AI (XAI) for Real-World Applications",
    "Generative AI and Large Language Models (LLMs)",
    "AI for Healthcare, Diagnosis & Medical Imaging",
    "AI for Cybersecurity and Fraud Detection",
    "AI in Smart Cities and Urban Development",
    "Human-Centered AI and Trustworthy Systems",
    "Deep Learning Architectures & Optimization",
    "Reinforcement Learning and Decision Making",
    "Federated Learning & Privacy-Preserving ML",
    "Autonomous Robots and Intelligent Systems",
    "Human-Robot Interaction (HRI)",
    "AI-Driven Robotics for Industrial Automation",
    "Swarm Robotics and Multi-Robot Systems",
    "AI-Powered Drones and Autonomous Vehicles",
  ];

  return (
    <section className="bg-[#FFFFFF] py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-[#111] mb-12 text-center">
          AIMLR 2026 CONFERENCE TOPICS
        </h2>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {sessions.map((item, idx) => (
            <div
              key={idx}
              className="
                bg-[#2F3439]
                text-[#f6f7f7]
                text-sm
                px-6 py-4
                border border-[#6B6F74]
                transition-colors
                hover:bg-[#3A3F45]
                cursor-pointer
              "
            >
              {item}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">

          <Link
            to="/AbstractSubmission"
            className="
              text-center

              text-white
              font-semibold
              text-sm
              py-4
              tracking-wide

              transition
            "
            style={{ backgroundImage: "linear-gradient(90deg, rgba(201, 170, 99, 0.99) 0%, rgba(201, 170, 99, 0.94) 39%, rgba(201, 170, 99, 0.77) 100%, rgba(201, 170, 99, 0.95) 65%)" }}
          >
            SUBMIT ABSTRACT
          </Link>



          <Link
            to="/register"
            className="
              text-center
              border border-[#6B6F74]
              bg-transparent
              text-[#111]
              font-semibold
              text-sm
              py-4
              tracking-wide
              hover:bg-[#E5E5E5]
              transition
            "
          >
            REGISTER
          </Link>


                    <Link
            to="/sessions"
            className="
              text-center
              bg-[#3F444A]
              text-white
              font-semibold
              text-sm
              py-4
              tracking-wide
              hover:bg-[#2F3439]
              transition
            "
          >
            VIEW ALL SESSIONS
          </Link>

        </div>

      </div>
    </section>
  );
}
