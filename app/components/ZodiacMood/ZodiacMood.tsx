"use client";
import React, { useState, useEffect } from "react";
import { ZodiacMoodProps } from "../../types/zodiac";
import Image from "next/image";
import { definitionDeviation } from "../../utils/definitionDeviation";
import { fetchCatFact } from "../../utils/fetchFacts";

import styles from "./style.module.css";

const ZodiacMood: React.FC<ZodiacMoodProps> = ({ day }) => {
  const [catFact, setCatFact] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  if (!day) return;

  useEffect(() => {
    if (!day) return;

    const getFact = async () => {
      setIsLoading(true);
      try {
        const fact = await fetchCatFact();
        setCatFact(fact);
      } catch (error) {
        console.error("Error fetching fact:", error);
        setCatFact("Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    };

    getFact();
  }, [day]);

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
            <strong>Cat Fact:</strong>{" "}
            {isLoading ? "Loading cat fact..." : catFact}
          </p>
        ) : (
          <p>Do your best.</p>
        )}
      </div>
    </div>
  );
};

export default ZodiacMood;
