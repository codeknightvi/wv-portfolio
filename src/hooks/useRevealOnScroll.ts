import { createElement, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";

export default function useRevealOnScroll({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref: MutableRefObject<null> = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });
    if (ref.current) {
      scrollObserver.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`;

  return createElement(
    "div",
    {
      ref,
      className: classes,
    },
    children,
  );
}
