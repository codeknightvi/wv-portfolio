import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type TypeWriterProps = { text: string; delay: number };

const TypeWriter = ({ text, delay }: TypeWriterProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [linkVisible, setLinkVisivle] = useState(false);
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
      setLinkVisivle(true);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      {linkVisible ? (
        <Link to={"/home"}>
          <u>Explore</u>
        </Link>
      ) : null}
    </span>
  );
};
const GreetingPage = () => {
  return (
    <div className="pt-10 md:pt-0 text-2xl md:text-4xl centered md:absolute md:top-[50%] md:left-[50%] md:transform md:translate-y-[-50%] md:translate-x-[-50%] md:origin-center	">
      <TypeWriter
        text="Greeting! welcome to John's portfolio website you may proceed :) ==> "
        delay={40}
      />
    </div>
  );
};

export default GreetingPage;
