import React from "react";
import Header from "../components/Header";
import MobileSidebarMenu from "../components/MobileSidebarMenu";
import CommitteePage from "./CommitteePage";
import EndFooter from "../components/EndFooter";

const ScrollCommiteePage: React.FC = () => {
  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      
      {/* Header */}
      <Header />

      {/* Main Section */}
      <section className="flex-grow py-6 px-4 sm:px-8 lg:px-16">

        <div className="flex flex-col lg:flex-row gap-8 items-start min-h-[600px]">

          <div className="hidden lg:block w-full lg:w-[20%] p-2 relative">
            <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-120px)]">
              <MobileSidebarMenu />
            </div>
          </div>


          {/* RIGHT CONTENT (Scrollable independently) */}
          <div className="w-full flex-1 p-2 lg:pl-8 max-h-full overflow-y-auto">
            <CommitteePage />
          </div>

        </div>

      </section>

      {/* Footer */}
      <EndFooter />
    </div>
  );
};

export default ScrollCommiteePage;
