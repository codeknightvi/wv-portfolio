import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
type TypewriterProps = { text: string; delay: number };

export default function Typewriter({ text, delay }: Readonly<TypewriterProps>) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [linkVisible, setLinkVisible] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => {
        clearTimeout(timeout);
      };
    }
    if (currentIndex === text.length) {
      setLinkVisible(true);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className="md:absolute md:top-[50%] md:left-[50%] md:origin-center md:translate-x-[-50%] md:translate-y-[-50%] md:transform">
      {currentText}
      {linkVisible ? (
        <Link to={"/home"}>
          <u>Explore</u>
        </Link>
      ) : null}
    </span>
  );
}
