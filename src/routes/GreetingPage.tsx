import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { typeWriterPropsType } from "../types";
const TypeWriter = ({ text, delay }: typeWriterPropsType) => {
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
    <div className="text-2xl md:text-4xl centered">
      <TypeWriter
        text="Greeting! welcome to John's portfolio website you may proceed :) ==> "
        delay={40}
      />
    </div>
  );
};

export default GreetingPage;
