import { useEffect, useState } from "react";

export function useIsVisible(target: any) {
  const [_isIntersecting, setIntersecting] = useState(false);
  const [isVisible, _setIsVisible] = useState(false); // store visibility status

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
    observer.observe(target.current);
    return () => {
      observer.disconnect();
    };
  }, [target]);

  return isVisible;
}
