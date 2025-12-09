import { useState } from "react";

export function useHoveredPoint() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleOnMouseEnter = (index: number | null) => {
    if (index !== null && typeof index === "number") {
      setHoveredId(index);
    } else {
      setHoveredId(null);
    }
  };

  return {
    hoveredId,
    handleOnMouseEnter,
  };
}
