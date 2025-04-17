"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const CopyLink = () => {
  const zodiac = useSelector((state: RootState) => state.zodiac);

  const getLinkCopy = () => {
    const url = new URL(window.location.href);
    url.searchParams.set("zodiac", zodiac.name);
    navigator.clipboard.writeText(url.toString());
  };

  return <button onClick={getLinkCopy}>Copy link</button>;
};

export default CopyLink;
