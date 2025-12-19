import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "./Header";
import EndFooter from "./EndFooter";

const ComboKeyDatesAndVenue: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const conferenceOpenings = [
    { title: "Abstract Submission Opens", date: "October 30, 2025" },
    { title: "Registration Opens", date: "October 31, 2025" },
    { title: "Early Bird Registration", date: "December 17, 2025" },
  ];

  const registrationDeadlines = [
    { title: "Early Bird Registration", date: "December 17, 2025" },
    { title: "Mid Term Registration", date: "February 28, 2026" },
    { title: "On Spot Registration", date: "October 22, 2026" },
  ];

  const abstractDeadlines = [
    { title: "First Round Submission", date: "December 15, 2025" },
    { title: "Second Round Submission", date: "February 26, 2026" },
    { title: "Final Round Submission", date: "October 14, 2026" },
  ];

  const cards = [
    {
      title: "Conference Openings",
      bgColor: "#0c3e61",
      data: conferenceOpenings,
    },  
    {
      title: "Registration Deadlines",
      bgColor: "#0087b6",
      data: registrationDeadlines,
    },
    {
      title: "Abstract Submission Deadlines",
      bgColor: "#222222",
      data: abstractDeadlines,
    },
  ];

  return (
    <section>
      <Header />
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 pt-6">
          <h2 className="text-4xl font-bold text-[#2E376C]">
            Important Dates
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Mark your calendar for the key milestones of AIMLR 2026
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="shadow-xl"
            >
              <div
                className="text-white text-center font-semibold py-3 rounded-t-3xl"
                style={{ backgroundColor: card.bgColor }}
              >
                {card.title}
              </div>
              <div className="p-6 text-center space-y-5">
                {card.data.map((item, idx) => (
                  <div key={idx}>
                    <p className="font-semibold text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-gray-600">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-white shadow-xl border border-gray-200 rounded-3xl">
              <div
                className="text-white text-center font-semibold py-3 rounded-t-3xl"
                style={{ backgroundColor: cards[currentIndex].bgColor }}
              >
                {cards[currentIndex].title}
              </div>
              <div className="p-6 text-center space-y-5">
                {cards[currentIndex].data.map((item, idx) => (
                  <div key={idx}>
                    <p className="font-semibold">{item.title}</p>
                    <p>{item.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === 0 ? cards.length - 1 : currentIndex - 1
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === cards.length - 1 ? 0 : currentIndex + 1
                )
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <EndFooter/>
      </div>
      
    </section>
  );
};

export default ComboKeyDatesAndVenue;
