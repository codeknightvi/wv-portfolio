import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
type TypewriterProps = { title: string; content: string; delay: number };

export default function Typewriter({ title, content, delay }: Readonly<TypewriterProps>) {
  const [currentContent, setCurrentContent] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [linkVisible, setLinkVisible] = useState(false);

  useEffect(() => {
    if (currentIndex < content.length) {
      const timeout = setTimeout(() => {
        setCurrentContent((prevText) => prevText + content[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
      return () => {
        clearTimeout(timeout);
      };
    }
    if (currentIndex === content.length) {
      setLinkVisible(true);
    }
  }, [currentIndex, delay, content]);

  return (
    <span className="md:absolute md:top-[50%] md:left-[50%] md:origin-center md:translate-x-[-50%] md:translate-y-[-50%] md:transform">
      <b>{title}</b>
      <br />
      {currentContent}
      {linkVisible ? (
        <Link to={"/home"}>
          <u>Here</u>
        </Link>
      ) : null}
    </span>
  );
}
