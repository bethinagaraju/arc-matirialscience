import React from 'react';
import { Calendar, Clock, FileText, UserCheck } from 'lucide-react';

const KeyDatesSection: React.FC = () => {
  const conferenceDates = [
    { day: 'Wednesday', date: '28 July 2026', time: '08:00 – 16:00' },
    { day: 'Thursday', date: '29 July 2026', time: '08:30 – 16:00' },
    { day: 'Friday', date: '30 July 2026', time: '09:00 – 16:00' }
  ];

  const deadlines = [
    { title: 'Abstract Submission Deadline', date: 'March 15, 2026', icon: FileText, color: 'orange' },
    { title: 'Registration Deadline', date: 'June 15, 2026', icon: UserCheck, color: 'red' }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-32 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
            <Calendar className="w-8 h-8 text-indigo-600" />
          </div> */}
          <h2
            style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Key Dates
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mark your calendar for the most important dates of AIMLR 2026
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Conference Schedule */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Conference Schedule</h3>
            </div>

            <div className="space-y-4">
              {conferenceDates.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-400">
                  <div>
                    <p className="font-semibold text-gray-800">{item.day} {item.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Deadlines */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Important Deadlines</h3>
            </div>

            <div className="space-y-4">
              {deadlines.map((deadline, index) => {
                const IconComponent = deadline.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-400">
                    <div className={`w-10 h-10 bg-${deadline.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-5 h-5 text-${deadline.color}-600`} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{deadline.title}</p>
                      <p className="text-lg font-bold text-gray-900 mt-1">{deadline.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyDatesSection;