import { MouseEvent, useState } from "react";
import "./index.css";
import { GalleryType } from "@_types";

type GalleryPropsType = {
  data: GalleryType[];
  id: string;
  isVisible?: boolean;
  ref?: Node;
};

export default function Gallery({ data, id }: GalleryPropsType) {
  const [MousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (ev: MouseEvent) => {
    setMousePosition({ x: ev.pageX, y: ev.pageY });
  };

  return (
    <div
      id={id}
      className={`container transition-opacity ease-in duration-700`}
      onMouseMove={(ev: MouseEvent) => handleMouseMove(ev)}
    >
      <div
        className="indicator absolute top-[-15px]"
        style={{ left: `${MousePosition.x - 69}px` }}
      ></div>
      {/* map */}
      <div className="gallery">
        {data.map((el) => (
          <div className="gallery-item cursor-pointer" key={el.src}>
            <img src={el.src} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}
