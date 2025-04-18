"use client";
import React, { useState } from "react";

const RangeToggle = () => {
  const [range, setRange] = useState<number>(3);

  const handleChange = () => {
    setRange(range === 3 ? 7 : 3);
  };
  return (
    <div>
      <button onClick={handleChange}>
        {range === 3 ? "Forecast for 7" : "Forecast for 3"}
      </button>
    </div>
  );
};

export default RangeToggle;
