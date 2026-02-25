import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ConferenceData } from '../types/conference';

interface ConferenceContextType {
  data: ConferenceData | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const ConferenceContext = createContext<ConferenceContextType | undefined>(undefined);

export const useConference = () => {
  const context = useContext(ConferenceContext);
  if (!context) {
    throw new Error('useConference must be used within a ConferenceProvider');
  }
  return context;
};

interface ConferenceProviderProps {
  children: ReactNode;
}

const CACHE_KEY = 'conferenceData';
const CACHE_TIMESTAMP_KEY = 'conferenceDataTimestamp';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Helper function to get cached data
const getCachedData = (): ConferenceData | null => {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
};

// Helper function to check if cache is valid
const isCacheValid = (): boolean => {
  const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
  if (!timestamp) return false;
  const cacheAge = Date.now() - parseInt(timestamp);
  return cacheAge < CACHE_DURATION;
};

export const ConferenceProvider: React.FC<ConferenceProviderProps> = ({ children }) => {
  // Initialize from localStorage if available
  const [data, setData] = useState<ConferenceData | null>(() => getCachedData());
  const [loading, setLoading] = useState(!getCachedData()); // Don't show loading if we have cached data
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (showLoading = true) => {
    try {
      // Only show loading spinner if no cached data exists
      if (showLoading && !data) {
        setLoading(true);
      }
      setError(null);

      const response = await fetch('https://backendconf.roboticsaisummit.com/api/admin/conference-data/pharma');
      if (!response.ok) {
        throw new Error('Failed to fetch conference data');
      }
      const conferenceData: ConferenceData = await response.json();

      // Cache in localStorage
      localStorage.setItem(CACHE_KEY, JSON.stringify(conferenceData));
      localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());

      setData(conferenceData);
    } catch (err) {
      // Only show error if no cached data available
      if (!data) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }
      console.error('Failed to fetch conference data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const cachedData = getCachedData();
    
    if (cachedData && isCacheValid()) {
      // Cache is valid, use it and fetch in background without loading state
      setData(cachedData);
      setLoading(false);
      fetchData(false); // Refresh in background
    } else if (cachedData) {
      // Cache exists but expired, show cached data immediately and refresh
      setData(cachedData);
      setLoading(false);
      fetchData(false); // Refresh in background
    } else {
      // No cache, fetch with loading state
      fetchData(true);
    }
  }, []);

  const refetch = () => {
    fetchData(true);
  };

  return (
    <ConferenceContext.Provider value={{ data, loading, error, refetch }}>
      {children}
    </ConferenceContext.Provider>
  );
};