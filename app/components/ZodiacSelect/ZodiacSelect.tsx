"use client";

import React, { useEffect } from "react";
import { zodiacOptions } from "../../data/zodiacData";
import { ZodiacOption } from "../../types/zodiac";
import { useDispatch, useSelector } from "react-redux";
import { setZodiac } from "../../store/zodiacSlice";
import { RootState } from "../../store";
import { ZodiacSelectProps } from "../../types/zodiac";
import Image from "next/image";
import styles from "./styles.module.css";

const ZodiacSelect: React.FC<ZodiacSelectProps> = ({ onZodiacChange }) => {
  const dispatch = useDispatch();
  const selectedZodiac = useSelector((state: RootState) => state.zodiac);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedIndex = zodiacOptions.findIndex(
      (option) => option.value === selectedValue
    );
    dispatch(setZodiac({ name: selectedValue, index: selectedIndex }));
    onZodiacChange();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const zodiacParam = params.get("zodiac");

    if (zodiacParam) {
      const selectedIndex = zodiacOptions.findIndex(
        (option) => option.value === zodiacParam
      );
      if (selectedIndex !== -1) {
        dispatch(setZodiac({ name: zodiacParam, index: selectedIndex }));
      }
    }
  }, [dispatch]);

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="zodiac">
          Choose your zodiac sign:
        </label>
        <select
          className={styles.select}
          id="zodiac"
          name="zodiac"
          value={selectedZodiac.name}
          onChange={handleChange}
        >
          {zodiacOptions.map((zodiac: ZodiacOption) => (
            <option
              className={styles.option}
              key={zodiac.value}
              value={zodiac.value}
            >
              {zodiac.label}
            </option>
          ))}
        </select>
      </div>
      <Image
        className={styles.image}
        src={`/zodiacImages/${selectedZodiac.name}.svg`}
        alt={selectedZodiac.name}
        width={100}
        height={100}
      />
    </div>
  );
};

export default ZodiacSelect;
