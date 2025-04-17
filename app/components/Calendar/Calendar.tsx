"use client";
import React, { useState, useCallback, useEffect } from "react";
import Day from "../Day/Day";
import { forecastGeneration } from "../../utils/forecastGeneration";
import { DayProps } from "../../types/zodiac";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ZodiacMood from "../ZodiacMood/ZodiacMood";
import ZodiacSelect from "../ZodiacSelect/ZodiacSelect";
import CopyLink from "../CopyLink/CopyLink";

import styles from "./style.module.css";

const Calendar = () => {
  const [range, setRange] = useState<number>(3);
  const [isZodiacChanging, setIsZodiacChanging] = useState(false);
  const [forecastDays, setForecastDays] = useState<DayProps[]>([]);
  const [selectedDay, setSelectedDay] = useState<DayProps | null>(null);
  const selectedZodiac = useSelector((state: RootState) => state.zodiac);

  const handleChange = useCallback(() => {
    setRange((prev) => (prev === 3 ? 7 : 3));
  }, []);

  useEffect(() => {
    const savedForecast = localStorage.getItem(`${selectedZodiac.name}`);

    if (savedForecast) {
      setForecastDays(JSON.parse(savedForecast));
    } else {
      const forecast = forecastGeneration(selectedZodiac.index);
      setForecastDays(forecast);
      localStorage.setItem(`${selectedZodiac.name}`, JSON.stringify(forecast));
    }
  }, [selectedZodiac]);

  const handleZodiacChange = () => {
    setIsZodiacChanging(true);
  };

  const handleDaySelection = (day: DayProps) => {
    setSelectedDay(day);
    setIsZodiacChanging(false);
  };

  return (
    <div className={styles.calendar}>
      <ZodiacSelect onZodiacChange={handleZodiacChange} />
      <button onClick={handleChange}>
        {range === 3 ? "Forecast for 7" : "Forecast for 3"}
      </button>
      <div style={{ display: "flex", gap: "2px", flexWrap: "wrap" }}>
        {forecastDays.slice(0, range).map((day, index) => (
          <li onClick={() => handleDaySelection(day)} key={index}>
            <Day key={index} {...day} />
          </li>
        ))}
      </div>
      {!isZodiacChanging && selectedDay && <ZodiacMood day={selectedDay} />}
      <CopyLink />
    </div>
  );
};

export default Calendar;
