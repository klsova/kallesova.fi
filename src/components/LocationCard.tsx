"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic"; 
import { FaRegMap, FaSun, FaMoon } from "react-icons/fa";

const Map = dynamic(() => import("./Map"), { 
  ssr: false,
  loading: () => <div className="map-loading">Loading...</div>,
});

interface LocationCardProps {
  city: string;
  country: string;
  timezone: string;
  lat: number;
  lng: number;
}

export default function LocationCard({ city, country, timezone, lat, lng }: LocationCardProps) {
  const [time, setTime] = useState<string>("");
  const [isDaytime, setIsDaytime] = useState<boolean>(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-GB", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const hour = parseInt(now.toLocaleTimeString("en-GB", { timeZone: timezone, hour: 'numeric', hour12: false }));
      setIsDaytime(hour >= 6 && hour < 18);
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  if (!time) return null; 

  return (
    <div className="location-card">
      <div className="card-header">
        <div className="header-left">
            <FaRegMap className="header-icon" />
            <span>Currently Based In</span>
        </div>
      </div>

      <div className="map-wrapper">
        <Map lat={lat} lng={lng} />
        <div className="map-overlay-text">{city}</div>
      </div>

      <div className="card-footer">
        <div className="footer-location">
          <span className="text-city">{city}, </span>
          <span className="text-country">{country}</span>
        </div>
        <div className="footer-time">
          {isDaytime ? <FaSun className="time-icon" /> : <FaMoon className="time-icon" />}
          <span className="time-text">{time}</span>
        </div>
      </div>
    </div>
  );
}