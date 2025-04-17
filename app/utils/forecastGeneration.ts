import { DayProps } from "../types/zodiac";

const calcScore = (value: number, index: number): number =>
  Math.floor(Math.abs(Math.cos(value + index) * 100) % 100);

export const forecastGeneration = (index: number): DayProps[] => {
  const days: DayProps[] = [];

  for (let i = 0; i < 7; i++) {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(nextDay.getDate() + i);

    days.push({
      day: nextDay.toLocaleDateString("en-US", { weekday: "long" }),
      date: nextDay.getDate(),
      points: {
        health: calcScore(nextDay.getDate(), index),
        career: calcScore(nextDay.getMonth() + nextDay.getDate(), index),
        couple: calcScore(nextDay.getFullYear() + nextDay.getDate(), index),
      },
    });
  }

  return days;
};
