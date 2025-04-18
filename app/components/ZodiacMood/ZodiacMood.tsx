"use client";
import React, { useEffect } from "react";
import { ZodiacMoodProps } from "../../types/zodiac";
import { definitionDeviation } from "../../utils/definitionDeviation";
import { useGetCatFactQuery } from "../../services/catFactApi";
import Image from "next/image";
import styles from "./style.module.css";

const ZodiacMood: React.FC<ZodiacMoodProps> = ({ day }) => {
  if (!day) return null;

  const { data: catFactData, error, isLoading, refetch } = useGetCatFactQuery();

  useEffect(() => {
    refetch();
  }, [day, refetch]);

  const res = definitionDeviation(
    day.points.health,
    day.points.career,
    day.points.couple
  );

  return (
    <div className={styles.content}>
      <div className={styles.image}>
        <Image
          src={`/${res.type}.svg`}
          alt={`/${res.type}`}
          width={100}
          height={100}
        />
      </div>
      <div>
        <h3>
          {day.day}, {day.date}
        </h3>
        <p>
          <strong>Health:</strong> {day.points.health}
        </p>
        <p>
          <strong>Career:</strong> {day.points.career}
        </p>
        <p>
          <strong>Love:</strong> {day.points.couple}
        </p>
        {res.average > 20 ? (
          <p>
            <strong>Cat Fact:</strong>
            {isLoading
              ? "Loading cat fact..."
              : error
              ? "Something went wrong."
              : catFactData?.fact || "No cat fact available"}
          </p>
        ) : (
          <p>Do your best.</p>
        )}
      </div>
    </div>
  );
};

export default ZodiacMood;
