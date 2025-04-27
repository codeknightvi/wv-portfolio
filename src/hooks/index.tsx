import { useEffect, useState } from "react";

export function useIsVisible(target: React.RefObject<Element>) {
  const [_, setIntersecting] = useState(false);
  const [isVisible] = useState(false); // store visibility status

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return isVisible;
}
