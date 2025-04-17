import React from "react";
import Image from "next/image";
import { pointsName, PointName } from "@/app/data/pointsName";

import { DayProps } from "../../types/zodiac";

import styles from "./styles.module.css";

const Day = ({ day, date, points }: DayProps) => {
  return (
    <div className={styles.day}>
      <h3>{day}</h3>
      <p aria-label="Date of forecast">{date}</p>
      <div className={styles.content}>
        {pointsName.map((name: PointName) => (
          <div key={name} className={styles.points}>
            <Image src={`/${name}.svg`} alt={name} width={20} height={20} />
            <span>{points[name]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
