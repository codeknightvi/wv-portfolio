import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, optionsRef.current);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
