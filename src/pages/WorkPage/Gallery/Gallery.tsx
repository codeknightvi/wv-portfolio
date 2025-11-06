import "./index.css";
import { MouseEvent, useRef, useState } from "react";
import { GalleryPropsType } from "@_types";

export default function Gallery({ data, id }: GalleryPropsType) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef?.current?.getBoundingClientRect();

    if (rect) {
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <div
      id={id}
      ref={containerRef}
      className="container transition-opacity ease-in duration-700 relative"
      onMouseMove={(ev: MouseEvent) => handleMouseMove(ev)}
      onMouseLeave={(ev: MouseEvent) =>
        setMousePosition({ x: 0, y: ev.clientY })
      }
    >
      <div
        className="indicator top-[-15px]"
        style={{
          left: mousePosition.x,
        }}
      />

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
