import React from "react";
import {
  FileText,
  Users,
  Upload,
  Presentation,
  Award,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const CallForSpeakers: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-sans text-gray-800">

      {/* Page Header */}
      <div className="mb-12 border-b-2 border-[#304278] pb-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          CALL FOR SPEAKERS – AIMLR 2026
        </h2>
        <p className="mt-2 text-gray-500 text-lg">
          Submit your research and join the global conversation on AI, ML, and Robotics.
        </p>
      </div>

      {/* About the Call */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-6 h-6 text-blue-900" />
          <h3 className="text-2xl font-bold text-gray-900">About the Call</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          AIMLR-2026 invites distinguished academicians, industry experts, and researchers to deliver keynote, invited, or technical talks at the conference.
        </p>
      </div>

      <div className="grid gap-4">

        {/* Speaker Categories */}
        <section>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg text-blue-900">
              <Presentation className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Speaker Categories</h3>
          </div>
          <ul className="space-y-1 ml-2 md:ml-12">
            {[
              "Keynote Speakers",
              "Invited Speakers",
              "Session Speakers"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
                <span className="leading-relaxed text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-gray-100" />

        {/* Who Can Apply? */}
        <section>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg text-blue-900">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Who Can Apply?</h3>
          </div>
          <ul className="space-y-1 ml-2 md:ml-12">
            {[
              "Senior Professors",
              "Industry Leaders",
              "Research Scientists",
              "Subject-matter Experts"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
                <span className="leading-relaxed text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-gray-100" />

        {/* What to Submit? */}
        <section>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg text-blue-900">
              <Upload className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">What to Submit?</h3>
          </div>
          <ul className="space-y-1 ml-2 md:ml-12">
            {[
              "Speaker biography (short)",
              "Proposed talk title",
              "Brief abstract or outline (optional)"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
                <span className="leading-relaxed text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-gray-100" />

        {/* Speaker Benefits */}
        <section>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg text-blue-900">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Speaker Benefits</h3>
          </div>
          <ul className="space-y-1 ml-2 md:ml-12">
            {[
              "Speaker Certificate",
              "Global recognition",
              "Networking with international participants",
              "Featured profile on conference website"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#272b5f] mt-0.5 shrink-0" />
                <span className="leading-relaxed text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-16 border-t pt-8">

        <Link to="/register" className="flex items-center justify-center gap-2 px-8 py-3 bg-[#304278] text-white font-semibold rounded hover:bg-[#304278] transition-colors">
          Register Now <ArrowRight className="w-4 h-4" />
        </Link>

        <Link to="/AbstractSubmission" className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded hover:border-[#0091b5] hover:text-[#0091b5] transition-colors">
          👉 Apply as Speaker
        </Link>
      </div>
    </div>
  );
};

export default CallForSpeakers;