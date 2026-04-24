import "./index.css";
import { MouseEvent, useState } from "react";
import { GalleryPropsType } from "@_types";
import { useInView } from "@hooks/useInView";

export default function Gallery({ data, id }: Readonly<GalleryPropsType>) {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    rootMargin: "200px", // preload before visible
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      id={id}
      ref={ref}
      className="relative container transition-opacity duration-700 ease-in"
    >
      {isVisible ? (
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={(e) => setMousePosition({ x: 0, y: e.clientY })}
        >
          <div
            className="indicator top-[-15px]"
            style={{ left: mousePosition.x }}
          />

          <div className="gallery">
            {data.map((el) => (
              <div className="gallery-item cursor-pointer" key={el.src}>
                <img
                  src={el.src}
                  alt={`img-${el.src}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-[300px] opacity-0" />
      )}
    </div>
  );
}
