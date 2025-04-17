"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./style.module.css";

const ThemeTogle = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    savedTheme === "dark"
      ? (setIsDark(true), document.body.classList.add("dark-mode"))
      : (setIsDark(false), document.body.classList.remove("dark-mode"));
  }, []);

  const toggleTheme = () => {
    setIsDark((prevState) => {
      const newThemeValue = !prevState;
      newThemeValue
        ? (document.body.classList.add("dark-mode"),
          localStorage.setItem("theme", "dark"))
        : (document.body.classList.remove("dark-mode"),
          localStorage.setItem("theme", "light"));

      return newThemeValue;
    });
  };

  return (
    <button onClick={toggleTheme} className={styles.buttonPosition}>
      <Image
        src={isDark ? "/sun.svg" : "/moon.svg"}
        alt={isDark ? "Light mode" : "Dark mode"}
        width={24}
        height={24}
      />
    </button>
  );
};

export default ThemeTogle;
