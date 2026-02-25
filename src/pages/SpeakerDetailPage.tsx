


import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Building2,
  Linkedin,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
// import Header from "../components/Header";

export default function SpeakerDetailPage() {
  const { id } = useParams(); // slug from URL
  const [activeTab, setActiveTab] = useState("priorities");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://backendconf.roboticsaisummit.com/api/speakers/slug/${id}/full`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <>
      <Header />
      {/* <div className="p-10">Loading...</div> */}
    </>
  );
  if (!data) return (
    <>
      <Header />
      <div className="p-10">Speaker not found</div>
    </>
  );

  const speaker = data.speaker;
  const aboutSection = speaker.sections?.[0];

  return (
    <>
      <Header />
      <section className="bg-[#f6f7f9] min-h-screen antialiased">
        {/* TOP BAR */}
        <div className="container mx-auto px-4 pt-8 pb-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              to="/speakers"
              className="inline-flex items-center justify-center gap-2 text-sm
              border-2 border-black bg-white
              shadow-[6px_6px_0px_0px_black]
              hover:translate-x-[2px] hover:translate-y-[2px]
              hover:shadow-[3px_3px_0px_0px_black]
              uppercase tracking-wide font-bold
              h-12 px-6 py-3 rounded-[5px] text-[#004E5A]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </div>

          <nav className="flex items-center gap-2 text-sm text-[#444] font-medium">
            <Link to="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/speakers" className="hover:text-black transition-colors">
              Speakers
            </Link>
            <span>/</span>
            <span className="text-black font-semibold" style={{ color: "#c9ab63" }}>
              {speaker.name}
            </span>
          </nav>
        </div>

        {/* MAIN */}
        <div className="container mx-auto px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* LEFT */}
            <div className="lg:col-span-1">
              <div className="border border-gray-200 bg-white shadow-sm sticky top-24 rounded-[5px]">
                <div className="p-7">
                  <img
                    src={speaker.imagePath}
                    alt={speaker.name}
                    className="w-full aspect-square object-cover mb-6"
                  />

                    <h1 className="text-2xl font-normal tracking-tight mb-2" style={{ fontFamily: "Familjen Grotesk, sans-serif", fontWeight: "700" }}>
                      {speaker.name}
                    </h1>

                  <div className="flex items-center gap-2 text-gray-600 mb-4 font-medium">
                    <Building2 className="w-4 h-4" />
                    <span>{speaker.university}</span>
                  </div>

                  {speaker.partnerLogo && (
                    <img
                      src={speaker.partnerLogo}
                      alt="logo"
                      className="h-12 w-auto object-contain mb-6"
                    />
                  )}

                  <div className="h-[1px] w-full bg-black my-6" />

                  {/* LinkedIn */}
                  {speaker.linkedin && speaker.linkedin !== " " && (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm
                      border-[3px] border-gray-200 uppercase tracking-wide font-bold
                      h-12 px-6 py-4 w-full rounded-[5px]
                      shadow-[6px_6px_0px_0px_black]
                      hover:translate-x-[2px] hover:translate-y-[2px]
                      hover:shadow-[3px_3px_0px_0px_black]"
                      style={{fontFamily:"Familjen Grotesk, sans-serif", color: "#c9ab63"}}
                    >
                      <Linkedin className="w-4 h-4 " />
                      View LinkedIn Profile
                      <ExternalLink className="w-3 h-3 ml-auto" />
                    </a>
                  )}

                  {/* Pills */}
                  {/* <div className="pt-3 space-y-2">
                    <div className="w-full py-2 text-xs font-bold tracking-wide rounded-full bg-[#f2c94c] text-center">
                      Speaking at {data.speakingSections?.length || 0} session
                    </div>
                    <div className="w-full py-2 text-xs font-bold tracking-wide rounded-full bg-[#f2c94c] text-center">
                      Attending 1 event
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* ABOUT */}
              {aboutSection?.content && (
                <div className="border border-gray-200 bg-white shadow-sm">
                  <div className="p-7">
                    <h2
                      className="text-xl font-bold tracking-tight text-black mb-4"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#c9ab63" }}
                    >
                      About
                    </h2>
                    <p className="text-sm text-gray-600 mb-3 font-medium">
                      {aboutSection.content}
                    </p>
                  </div>
                </div>
              )}

              {/* NETWORKING */}
              {(aboutSection?.priorities ||
                aboutSection?.currentFocus ||
                aboutSection?.futureFocus) && (
                <div className="border border-gray-200 bg-white shadow-sm">
                  <div className="p-7">
                    <h2
                      className="text-xl font-bold tracking-tight text-black mb-4"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#c9ab63" }}
                    >
                      Networking Insights
                    </h2>

                    <div className="grid grid-cols-3 p-1 text-gray-600 font-medium">
                      <button
                        onClick={() => setActiveTab("priorities")}
                        className={`py-2 text-sm ${
                          activeTab === "priorities"
                            ? "bg-[#c9ab63] text-white shadow-sm font-semibold"
                            : ""
                        }`}
                      >
                        Priorities
                      </button>

                      <button
                        onClick={() => setActiveTab("current")}
                        className={`py-2 text-sm ${
                          activeTab === "current"
                            ? "bg-[#c9ab63] text-white shadow-sm font-semibold"
                            : ""
                        }`}
                      >
                        Current Focus
                      </button>

                      <button
                        onClick={() => setActiveTab("future")}
                        className={`py-2 text-sm ${
                          activeTab === "future"
                            ? "bg-[#c9ab63] text-white shadow-sm font-semibold"
                            : ""
                        }`}
                      >
                        Future Focus
                      </button>
                    </div>

                    <div className="text-sm text-[#444] mb-3 font-medium mt-4">
                      {activeTab === "priorities" && aboutSection.priorities}
                      {activeTab === "current" && aboutSection.currentFocus}
                      {activeTab === "future" && aboutSection.futureFocus}
                    </div>
                  </div>
                </div>
              )}

              {/* SESSIONS */}
              {data.speakingSections?.length > 0 && (
                <div className="border bg-[#ffffff] shadow-sm">
                  <div className="p-7">
                    <h2
                      className="text-xl font-bold tracking-tight text-black mb-4"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#c9ab63" }}
                    >
                      Speaking Sessions
                    </h2>

                    {data.speakingSections.map((s) => (
                      <div key={s.id} className="border border-black mb-4">
                        <div className="p-5">
                            <h3 className="font-bold tracking-tight text-lg mb-2" style={{ color: "#c9ab63" }}>
                            {s.title}
                          </h3>

                          <p className="text-sm text-[#444] mb-3 font-medium">
                            {s.description}
                          </p>

                          <div className="flex items-center gap-2 text-sm text-[#c9ab63] font-medium">
                            {s.date && <Calendar className="w-4 h-4" />}
                            {s.date}
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
