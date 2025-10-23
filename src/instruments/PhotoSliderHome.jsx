import React, { useState } from "react";

import slide1 from "../assets/forSliderHome1.jpg";
import slide2 from "../assets/forSliderHome2.jpg";
import slide3 from "../assets/forSliderHome3.jpg";


export default function PhotoSliderHome() {
 
  const slides = [
    { src: slide1, alt: "Слайд 1" },
    { src: slide2, alt: "Слайд 2" },
    { src: slide3, alt: "Слайд 3" },
  ];

  // 3) Поточний індекс слайду
  const [index, setIndex] = useState(1);

  // 4) Перемикання по колу
  const prev = () => setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  // 5) Перехід по кліку на «точку»
  const goTo = (i) => setIndex(i);

  return (
    <div className="relative w-[729px] h-[487px] ">
      {/* ОБГОРТКА СЛАЙДЕРА */}
      
        {/* Висота блока: підлаштуй під свій дизайн */}
        <div className="relative w-[729px] h-[487px] ">
          {/* ВСІ СЛАЙДИ (накладені один на одного) */}
          {slides.map((s, i) => (
            <img
              key={i}
              src={s.src}
              alt={s.alt}
              className={[
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                i === index ? "opacity-100" : "opacity-0",
              ].join(" ")}
              draggable={false}
            />
          ))}

          {/* ЛІВА СТРІЛКА */}
          <button
            onClick={prev}
            aria-label="Попередній слайд"
            className="absolute left-[-50px] top-1/2 text-4xl hover:text-gray-300 transition-colors"
          >
            ←
          </button>

          {/* ПРАВА СТРІЛКА */}
          <button
            onClick={next}
            aria-label="Наступний слайд"
            className="absolute right-[-50px] top-1/2 text-4xl hover:text-gray-300 transition-colors "
          >
            →
          </button>
        </div>
      

      {/* НИЖНЯ НАВІГАЦІЯ (3 кнопки/"точки") */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[61px] flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Перейти до слайду ${i + 1}`}
            className={[
              "h-[4px] w-[30px]  transition-all",
              i === index ? "bg-[#FFFFFF]" : "bg-[#FFFFFF5C] hover:bg-gray-300",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
