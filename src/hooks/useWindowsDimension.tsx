import { useState, useEffect } from "react";

function getWindowDimensions() {
  if (typeof globalThis === "undefined") {
    return { width: 0, height: 0 };
  }
  const { innerWidth: width, innerHeight: height } = globalThis;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}