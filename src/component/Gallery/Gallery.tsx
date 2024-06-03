import { MouseEvent, useState } from "react";
import "./index.css";
import { galleryPropsType } from "../../types";

const Gallery = ({ data, id }: galleryPropsType) => {
  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (ev: MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: ev.pageX, y: ev.pageY });
  };

  return (
    <div
      id={id}
      // ref={ref}
      className={`container transition-opacity ease-in duration-700}`}
      onMouseMove={(ev: any) => handleMouseMove(ev)}
    >
      <div
        className={`indicator absolute top-[-15px] `}
        style={{ left: `${MousePosition.x - 69}px` }}
      ></div>
      {/* map */}
      <div className="gallery">
        {data.map((el) => (
          <div className="gallery-item cursor-pointer " key={el.src}>
            <img src={el.src} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
