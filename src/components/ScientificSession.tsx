import React from 'react';
import { Link } from 'react-router-dom';
import { useConference } from '../contexts/ConferenceContext';

const ScientificSession: React.FC = () => {
  const { data, loading, error } = useConference();

  const defaultSessions = [
    'TOPIC-A',
    'TOPIC - B',
    'TOPIC - C',
    'TOPIC - D',
    'TOPIC - E',
    'TOPIC - F',
    'TOPIC - G',
    'TOPIC - H',
    'TOPIC - I',
    'TOPIC - J',
    'TOPIC - k',
    'TOPIC - L',
    'TOPIC - M',
    'TOPIC - N',
    'TOPIC - O',
    'TOPIC - P',
    'TOPIC - Q',
  ];

  const topicsList: string[] = data?.topics?.map((t: any) => t.topicName) ?? defaultSessions;

  if (loading) {
    return (
      <section className="bg-white py-6 px-6">
        <div className="max-w-7xl mx-auto text-center">Loading topics...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-6 px-6">
        <div className="max-w-7xl mx-auto text-center text-red-600">Error loading topics: {error}</div>
      </section>
    );
  }

  return (
    <section className="bg-[#FFFFFF] py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-12 text-[#111]">PharmaTech 2026 CONFERENCE TOPICS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {topicsList.map((session, index) => (
            <div
              key={index}
              className={`text-[#D1D5D8] text-sm px-6 py-4 border border-[#6B6F74] transition-colors hover:bg-[#3A3F45]`}
              style={{
                background: 'linear-gradient(90deg, rgba(47, 52, 57, 1) 0%, rgba(24, 28, 31, 0.85) 100%, rgba(71, 75, 79, 0.5) 69%)',
              }}
            >
              {session}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link to="/register" className="text-center bg-[#C9AB63] text-white font-semibold text-sm py-4 tracking-wide hover:bg-[#B9984F] transition">
            REGISTRATION
          </Link>

          <Link to="/AbstractSubmission" className="text-center bg-[#3F444A] text-white font-semibold text-sm py-4 tracking-wide hover:bg-[#2F3439] transition">
            ABSTRACT SUBMISSION
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScientificSession;
