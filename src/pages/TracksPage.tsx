import React from 'react';
import MobileSidebarMenu from '../components/MobileSidebarMenu';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const topics = [
  'Nursing Research',
  'Nursing Informatics',
  'Oncology Nursing',
  'Clinical Nursing',
  'Pediatric Nursing',
  'Public Health Nursing',
  'Cardiac Nursing',
  'Geriatric Nursing',
  'Midwifery and Womens Health',
  'Nursing and Healthcare',
  'Occupational Health Nursing',
  'Psychiatric and Mental Health Nursing',
  'Gynecology and Obstetrics Nursing',
  'Community and Home Health Nursing',
  'Emergency and Ambulatory Care Nursing',
  'Evidence-Based Nursing',
  'Anaesthesia and PeriAnesthesia Nursing',
  'Men in Nursing',
  'Nursing Education',
  'Medical Surgical Nursing',
];

const TracksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Left sidebar (keeps existing MobileSidebarMenu) */}
          <aside className="lg:col-span-3 col-span-1">
            <div className="sticky top-20">{/* make it sticky on large screens */}
              <div className="bg-gray-50 rounded-md h-full p-4 border border-gray-100">
                <MobileSidebarMenu />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9 col-span-1">

            {/* Topic Cards Grid */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conference Tracks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {topics.map((t, i) => (
                  <div
                    key={i}
                    className="bg-[#008fb6] rounded-md text-white px-6 py-5 shadow hover:shadow-lg transition flex items-center justify-between"
                  >
                    <span className="text-lg font-medium">{i + 1}. {t}</span>
                    <ArrowRight size={20} />
                  </div>
                ))}
              </div>
            </section>

            {/* Venue & Details Section */}
            <section className="bg-white rounded-md p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="text-indigo-600" size={28} />
                <h3 className="text-xl font-semibold text-gray-900">Conference Venue</h3>
              </div>

              <p className="text-gray-700 mb-3">The conference will takes place in the following dates and location:</p>
              <p className="font-semibold text-gray-800 mb-2">Venue Address: Hilton Boston/Woburn</p>
              <p className="text-gray-700 mb-3">2 Forbes Road, Woburn, Massachusetts, 01801, USA</p>

              <p className="font-semibold text-gray-800 mb-2">Conference Dates:</p>
              <p className="text-gray-700 mb-4">July 28-30, 2026</p>

              {/* <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>The Hotel staff will only provide general information about the hotel and guest rooms; and are not responsible for any specific details about the conference.</li>
                <li>Please mention the conference name, dates along with the organizer “Magnus Group”, if you wish to contact the hotel reception.</li>
              </ul> */}

              {/* Simple embedded map */}
              <div className="mt-4 w-full rounded overflow-hidden">
                <iframe
                  title="venue-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24186.06017162793!2d-71.1622766!3d42.4973665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e372d5e4dea6b5%3A0x6cdbd7fcd11ef0e7!2sHilton%20Boston%2FWoburn!5e0!3m2!1sen!2sus!4v1660000000000"
                  width="100%"
                  height="360"
                  className="border-0"
                  loading="lazy"
                />
              </div>

            </section>

          </main>

        </div>
      </div>
    </div>
  );
};

export default TracksPage;
