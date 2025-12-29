// import React from 'react';
// import Header from '../components/Header';
// import { Link } from 'react-router-dom';
// import { Calendar, MapPin, Users, Award, CheckCircle2 } from 'lucide-react';

// function PastConferencesPage() {
//   const pastConferences = [
//     {
//       year: 2024,
//       title: "ICAMLR 2024",
//       location: "Rome, Italy",
//       date: "July 25-27, 2024",
//       attendees: 500,
//       highlights: ["Keynote by Dr. Fei-Fei Li", "Breakthrough in autonomous systems", "500+ attendees"]
//     },
//     {
//       year: 2023,
//       title: "ICAMLR 2023",
//       location: "Paris, France",
//       date: "June 15-17, 2023",
//       attendees: 450,
//       highlights: ["AI ethics panel", "Robotics demonstrations", "International collaborations"]
//     },
//     {
//       year: 2022,
//       title: "ICAMLR 2022",
//       location: "Berlin, Germany",
//       date: "August 10-12, 2022",
//       attendees: 400,
//       highlights: ["Virtual reality integration", "Machine learning workshops", "Startup showcase"]
//     }
//   ];

//   return (
//     <div>
//       <Header />
//       <div className="relative text-white py-20 overflow-hidden" style={{ backgroundColor: '#312e81', backgroundImage: 'url("https://www.transparenttextures.com/patterns/checkered-pattern.png")' }}>
//         <div className="container mx-auto px-6 text-center relative z-10">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Past Conferences</h1>
//           <p className="text-xl text-indigo-200 max-w-2xl mx-auto font-light">
//             Explore the history of our successful conferences and the impact we've made in AI, ML, and Robotics.
//           </p>
//         </div>
//       </div>
//       <div className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="space-y-12">
//             {pastConferences.map((conference, index) => (
//               <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
//                 <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
//                   <div className="flex-1">
//                     <div className="flex items-center gap-3 mb-3">
//                       <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
//                         <Award className="w-6 h-6 text-indigo-600" />
//                       </div>
//                       <div>
//                         <h2 className="text-2xl font-bold text-gray-900">{conference.title}</h2>
//                         <span className="text-sm text-indigo-600 font-medium">{conference.year}</span>
//                       </div>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600 mb-4">
//                       <div className="flex items-center gap-2">
//                         <Calendar className="w-4 h-4 text-indigo-500" />
//                         <span className="text-sm">{conference.date}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <MapPin className="w-4 h-4 text-indigo-500" />
//                         <span className="text-sm">{conference.location}</span>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Users className="w-4 h-4 text-indigo-500" />
//                         <span className="text-sm">{conference.attendees}+ attendees</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="border-t pt-6">
//                   <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
//                     <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
//                     Key Highlights
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                     {conference.highlights.map((highlight, idx) => (
//                       <div key={idx} className="flex items-start gap-3">
//                         <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//                         <span className="text-gray-700 text-sm">{highlight}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
//         <div className="container mx-auto px-4 text-center">
//           <div className="max-w-3xl mx-auto">
//             <h2 className="text-4xl font-bold mb-6 text-white">Join Us This Year</h2>
//             <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
//               Building on the success of our past conferences, AIMLR 2026 promises to be our most impactful event yet. 
//               Be part of the next chapter in AI, ML, and Robotics innovation.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/register">
//                 <button className="bg-white text-indigo-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
//                   Register for AIMLR 2026
//                 </button>
//               </Link>
//               <Link to="/about">
//                 <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300">
//                   Learn More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PastConferencesPage;



import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp,
  Globe
} from 'lucide-react';
import EndFooter from '../components/EndFooter';

function PastConferencesPage() {
  const pastConferences = [
    {
      year: 2024,
      title: "ICAMLR 2024",
      location: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1000",
      date: "July 25-27, 2024",
      attendees: 500,
      highlights: ["Keynote by Dr. Fei-Fei Li", "Breakthrough in autonomous systems", "Record-breaking attendance"]
    },
    {
      year: 2023,
      title: "ICAMLR 2023",
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000",
      date: "June 15-17, 2023",
      attendees: 450,
      highlights: ["AI ethics panel discussion", "Live Robotics demonstrations", "New International collaborations"]
    },
    {
      year: 2022,
      title: "ICAMLR 2022",
      location: "Berlin, Germany",
      image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=1000",
      date: "August 10-12, 2022",
      attendees: 400,
      highlights: ["Virtual reality integration", "Machine learning workshops", "Startup innovation showcase"]
    }
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Header />
      
      {/* --- HERO SECTION --- */}
      <div className="relative text-white py-8 overflow-hidden" style={{ backgroundColor: '#312e81', backgroundImage: 'url("https://www.transparenttextures.com/patterns/classy-fabric.png")' }}>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-indigo-100">Our Legacy</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Past Conferences
          </h1>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
            Tracing the evolution of AI and Robotics through our history of global gatherings, scientific breakthroughs, and community growth.
          </p>
        </div>
      </div>

      {/* --- IMPACT STATS --- */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem icon={<Globe className="w-5 h-5" />} value="3" label="Continents Hosted" />
            <StatItem icon={<Users className="w-5 h-5" />} value="150+" label="Total Attendees" />
            <StatItem icon={<Award className="w-5 h-5" />} value="100+" label="Papers Published" />
            <StatItem icon={<TrendingUp className="w-5 h-5" />} value="25%" label="YoY Growth" />
          </div>
        </div>
      </div>

      {/* --- TIMELINE SECTION --- */}
      <div className="py-20 overflow-hidden">
        <div className="container mx-auto px-6 relative">
          
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 -translate-x-1/2"></div>

          <div className="space-y-24">
            {pastConferences.map((conf, index) => (
              <TimelineCard key={index} data={conf} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* --- CTA SECTION --- */}
      <div className="py-8 bg-indigo-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Write the Next Chapter With Us
          </h2>
          <p className="text-xl text-indigo-200 mb-4 max-w-2xl mx-auto">
            AIMLR 2026 promises to be our most impactful event yet. Don't just watch history happen—be part of the innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <button className="bg-white text-indigo-900 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center gap-2">
                Register for 2026 <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-transparent border border-indigo-400 text-indigo-100 font-semibold py-4 px-10 rounded-full hover:bg-indigo-800 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <EndFooter />

    </div>
  );
}

// --- SUB-COMPONENTS ---

function StatItem({ icon, value, label }) {
  return (
    <div className="flex items-center gap-4 justify-center md:justify-start">
      <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
      </div>
    </div>
  );
}

function TimelineCard({ data, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
      
      {/* Image Side */}
      <div className="w-full lg:w-1/2 group">
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 group-hover:-translate-y-2">
          <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-indigo-900/0 transition-colors duration-500 z-10"></div>
          <img 
            src={data.image} 
            alt={data.location} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          {/* Floating Year Badge */}
          <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg">
            <span className="text-2xl font-bold text-indigo-900">{data.year}</span>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2">
        <div className={`flex flex-col ${isEven ? 'lg:items-start text-left' : 'lg:items-end lg:text-right'}`}>
          
          <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-wider text-sm mb-2">
            <MapPin className="w-4 h-4" /> {data.location}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{data.title}</h2>
          
          <div className={`flex flex-wrap gap-6 text-gray-600 mb-8 ${isEven ? 'justify-start' : 'lg:justify-end'}`}>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-500" />
              <span className="font-medium">{data.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-500" />
              <span className="font-medium">{data.attendees}+ Attendees</span>
            </div>
          </div>

          <div className={`space-y-3 ${isEven ? '' : 'lg:flex lg:flex-col lg:items-end'}`}>
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Highlights</h4>
            {data.highlights.map((highlight, idx) => (
              <div key={idx} className={`flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm w-fit ${isEven ? '' : 'flex-row-reverse text-right'}`}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium text-sm">{highlight}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default PastConferencesPage;