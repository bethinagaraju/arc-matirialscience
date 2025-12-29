import React from "react";
import Header from "../components/Header";
import EndFooter from "../components/EndFooter";
import CallForSpeakers from "../components/CallForSpeakers";

const CallForSpeakersPage: React.FC = () => {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">

      <Header />

      {/* Main Section */}
      <section className="flex-grow py-6 px-4 sm:px-8 lg:px-16">

        <div className="flex flex-col lg:flex-row gap-8 items-start min-h-[600px]">

          {/* RIGHT CONTENT - Scrollable */}
          <div className="w-full flex-1 p-2 lg:pl-8 max-h-full overflow-y-auto">
            <CallForSpeakers />
          </div>

        </div>
      </section>

      <EndFooter />
    </div>
  );
};

export default CallForSpeakersPage;