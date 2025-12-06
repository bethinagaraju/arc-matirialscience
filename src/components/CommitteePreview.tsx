import React from "react";
import { Link } from "react-router-dom";
import { Users, Mail, ExternalLink } from "lucide-react";

const committeeMembers = [
  {
    name: "Dr. John Smith",
    role: "General Chair",
    bio: "Expert in AI and Robotics with 20+ years of experience."
  },
  {
    name: "Dr. Jane Doe",
    role: "Program Chair",
    bio: "Leading researcher in machine learning and autonomous systems."
  },
  {
    name: "Prof. Michael Johnson",
    role: "Technical Chair",
    bio: "Specialist in robotics and human-robot interaction."
  },
  {
    name: "Dr. Sarah Wilson",
    role: "Publication Chair",
    bio: "Editor and researcher in AI ethics and frameworks."
  }
];

const CommitteePreview = () => {
  return (
    <section className="py-4 pt-10">
      {/* Title */}
      <div className="text-center mb-12 px-4">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Users className="w-4 h-4" />
          Leadership Team
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Organizing Committee
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Meet the distinguished experts leading the AI & Robotics Summit 2026.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
        {committeeMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group hover:-translate-y-2"
          >
            <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
            <p className="text-sm text-blue-600 font-medium mb-3">{member.role}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="text-center mt-12 space-x-4">
        <Link
          to="/committee"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          View Full Committee
          <ExternalLink className="w-4 h-4" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Mail className="w-4 h-4" />
          Contact Committee
        </Link>
      </div>
    </section>
  );
};

export default CommitteePreview;
