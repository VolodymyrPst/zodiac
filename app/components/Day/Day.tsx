import React from "react";
import Image from "next/image";
import { DayProps } from "../../types/zodiac";
import styles from "./styles.module.css";
import { pointsName } from "@/app/data/pointsName";
import { PointName } from "@/app/enums/pointName";

const Day = ({ day, date, points }: DayProps) => {
  return (
    <div className={styles.day}>
      <h3>{day}</h3>
      <p>{date}</p>
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
