

import React, { useState, useEffect } from 'react';
import { useConference } from '../contexts/ConferenceContext';
import { Timer } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const { data } = useConference();
  const [targetDate, setTargetDate] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // parse target date from conference importantDates (supports DD-MM-YYYY)
  useEffect(() => {
    const parseDate = (dateStr: string): Date | null => {
      if (!dateStr) return null;
      // Try ISO first
      const iso = new Date(dateStr);
      if (!isNaN(iso.getTime())) return iso;
      // Try DD-MM-YYYY or D-M-YYYY or YYYY-MM-DD
      const parts = dateStr.split(/[-/]/).map((p) => p.trim());
      if (parts.length === 3) {
        let day = parseInt(parts[0], 10);
        let month = parseInt(parts[1], 10);
        let year = parseInt(parts[2], 10);
        if (parts[0].length === 4) {
          // YYYY-MM-DD
          year = parseInt(parts[0], 10);
          month = parseInt(parts[1], 10);
          day = parseInt(parts[2], 10);
        }
        if (year < 100) year += 2000;
        if (!isNaN(year) && !isNaN(month) && !isNaN(day)) {
          return new Date(year, month - 1, day);
        }
      }
      return null;
    };

    try {
      const important = data?.importantDates ?? [];
      const conferenceStart = important.find((item: any) => (item.dateType || '').toLowerCase() === 'conference start date');
      if (conferenceStart?.date) {
        const parsed = parseDate(conferenceStart.date);
        if (parsed) {
          setTargetDate(parsed);
          return;
        }
      }
    } catch (e) {
      // ignore and leave targetDate null
    }

    // if parsing failed, keep targetDate null (existing UI will show countdown for fallback)
  }, [data]);

  // update timeLeft based on targetDate (or fallback)
  useEffect(() => {
    const calculateTimeLeft = () => {
      let conferenceDate: Date | null = targetDate;
      if (!conferenceDate) {
        // fallback hardcoded date used previously
        conferenceDate = new Date('2026-05-28T00:00:00');
      }

      const now = new Date();
      const difference = conferenceDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-slate-800">
          
          {/* Single Heading */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Timer className="w-10 h-10 text-red-600" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
              Time Remaining Until Conference Begins
            </h2>
          </div>

          {/* Timer Grid */}
          <div className="flex items-start gap-4 md:gap-8">
            <TimeUnit value={timeLeft.days} label="Days" />
            <div className="text-3xl md:text-5xl font-light text-slate-300 mt-1">:</div>
            <TimeUnit value={formatNumber(timeLeft.hours)} label="Hours" />
            <div className="text-3xl md:text-5xl font-light text-slate-300 mt-1">:</div>
            <TimeUnit value={formatNumber(timeLeft.minutes)} label="Minutes" />
            <div className="text-3xl md:text-5xl font-light text-slate-300 mt-1">:</div>
            <TimeUnit value={formatNumber(timeLeft.seconds)} label="Seconds" isActive={true} />
          </div>

        </div>
      </div>
    </div>
  );
};

// Sub-component for individual time blocks
const TimeUnit = ({ value, label, isActive = false }: { value: string | number, label: string, isActive?: boolean }) => (
  <div className="flex flex-col items-center">
    <div className={`text-4xl md:text-6xl font-extrabold tabular-nums ${isActive ? 'text-[#c9ab63]' : 'text-slate-900'}`}>
      {value}
    </div>
    <span className="text-xs md:text-sm uppercase tracking-widest text-slate-500 mt-2 font-medium">
      {label}
    </span>
  </div>
);

export default CountdownTimer;