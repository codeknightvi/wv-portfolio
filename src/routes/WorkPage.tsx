import { useEffect, useRef, useState } from "react";
import {
  rendered,
  rendered2,
  threeddesign,
  threeddesign2,
} from "../../public/Design/TU_work";
import Experience from "../component/Experience";
import Gallery from "../component/Gallery/Gallery";
import ProjectJumper from "../component/ProjectJumper";

const WorkPage = () => {
  const RevealOnScroll = ({ children }: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref: React.MutableRefObject<null | any> = useRef(null);

    useEffect(() => {
      const scrollObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          scrollObserver.unobserve(entry.target);
        }
      });
      scrollObserver.observe(ref.current);
      return () => {
        if (ref.current) {
          scrollObserver.unobserve(ref.current);
        }
      };
    }, []);

    const classes = `transition-opacity duration-1000 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`;

    return (
      <div ref={ref} className={classes}>
        {children}
      </div>
    );
  };

  return (
    <div className="mx-16">
      <Experience />
      <ProjectJumper />

      <div className="flex flex-col gap-y-6">
        <RevealOnScroll>
          <Gallery data={threeddesign} id={"3d"} />
        </RevealOnScroll>
        <RevealOnScroll>
          <Gallery data={threeddesign2} id={"3d2"} />
        </RevealOnScroll>
        <RevealOnScroll>
          <Gallery data={rendered} id={"render"} />
        </RevealOnScroll>
        <RevealOnScroll>
          <Gallery data={rendered2} id={"render2"} />
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default WorkPage;
