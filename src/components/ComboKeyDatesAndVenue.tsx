
import React from "react";
import Header from "./Header";
import EndFooter from "./EndFooter";
import { useConference } from "../contexts/ConferenceContext";

const ComboKeyDatesAndVenue: React.FC = () => {
  const { data } = useConference();
  const importantDates = data?.importantDates || [];

  const getDateByType = (type: string) => {
    const found = importantDates.find((d: any) => d.dateType === type);
    return found ? found.date : "TBA";
  };

  const cards = [
    {
      title: "Conference Dates",
      bgColor: "#1F2327",
      data: [{ date: getDateByType("Conference Dates") }],
    },
    {
      title: "Submission Deadline",
      bgColor: "#2F3439",
      data: [{ date: getDateByType("Submission Deadline") }],
    },
    {
      title: "Notification of Acceptance",
      bgColor: "#c9aa63c8",
      data: [{ date: getDateByType("Notification of Acceptance") }],
    },
    {
      title: "Final Paper Submission",
      bgColor: "#6B6F74",
      data: [{ date: getDateByType("Final Paper Submission") }],
    },
  ];


  return (
    <section>
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center mb-12 pt-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-black-900">
            Important Dates
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-2 text-sm sm:text-base">
            Mark your calendar for the key milestones of PharmaTech 2026
          </p>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-3xl overflow-hidden"
            >
              {/* Card Header */}
              <div
                className="text-white text-center font-semibold py-4 text-sm sm:text-base"
                style={{ backgroundColor: card.bgColor }}
              >
                {card.title}
              </div>

              {/* Card Body */}
              <div className="p-6 text-center">
                {card.data.map((item, idx) => (
                  <p
                    key={idx}
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700"
                  >
                    {item.date}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <EndFooter />
      </div>
    </section>
  );
};

export default ComboKeyDatesAndVenue;
