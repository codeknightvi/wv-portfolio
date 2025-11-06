import { useState } from "react";

export function useHoveredPoint() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleOnMouseEnter = (index: number | null) => {
    if (index !== null && typeof index === "number") {
      setHoveredIndex(index);
    } else {
      setHoveredIndex(null);
    }
  };

  return {
    hoveredIndex,
    handleOnMouseEnter,
  };
}
