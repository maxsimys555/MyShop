import React, { useEffect, useState } from "react";

export default function TextSlider({ slides, interval = 5000 }) {
  // Если не переданы слайды через пропсы, используем эти дефолтные
  const defaultSlides = [
    {
      title: "Что-то новенькое... Мы заждались тебя.",
      text: "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!",
    },
    {
      title: "Новые поступления в этом сезоне",
      text: "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.",
    },
    {
      title: "Включай новый сезон с WOMAZING",
      text: "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров",
    },
  ];

  
  const slidesToUse = defaultSlides;

  // индекс текущего слайда
  const [index, setIndex] = useState(0);
  // состояние паузы (при наведении мыши или фокусе)
  const [paused, setPaused] = useState(false);

  // функция переключения на следующий слайд
  const next = () => setIndex((i) => (i + 1) % slidesToUse.length);
  // функция переключения на предыдущий слайд
  const prev = () =>
    setIndex((i) => (i - 1 + slidesToUse.length) % slidesToUse.length);
  // функция перехода на конкретный слайд
  const goTo = (i) => setIndex(i % slidesToUse.length);

  // Автопрокрутка слайдов с учетом паузы
  useEffect(() => {
    if (paused) return; // если пауза, интервал не запускаем
    const id = setInterval(next, interval); // меняем слайд через заданный интервал
    return () => clearInterval(id); // чистим интервал при размонтировании или изменении зависимостей
  }, [paused, interval, slidesToUse.length]);

 

  return (
    <section
      className=""
      // при наведении мыши ставим паузу
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      // при фокусе (например через клавиатуру) тоже пауза
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Текстовый слайдер Womazing"
    >
      {/* Контейнер для слайдов */}
      <div className="absolute top-[355px] right-[807px] bottom-[2917px] left-[230px] w-full ">
        {slidesToUse.map((s, i) => (
          <article
            key={i}
            aria-hidden={i !== index} // для accessibility, скрываем неактивные слайды
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out   flex flex-col justify-center items-start ${
              i === index
                ? "opacity-100 translate-x-0" // активный слайд виден
                : "opacity-0 pointer-events-none -translate-x-4" // скрытый слайд
            }`}
          >
            {/* Заголовок слайда */}
            <h1 className="text-[55px] max-w-[585px] max-h-[122px] leading-none break-words">
              {s.title}
            </h1>
            {/* Текст слайда */}
            <p className="text-[20px] mt-[45px] max-w-[385px] max-h-[84px] text-right">
              {s.text}
            </p>
          </article>
        ))}
      </div>

      {/* Навигационные точки (dots) */}
      <div className="absolute top-[762px] left-[516px] bottom-[2801px] right-[970px] flex items-center gap-[12px]">
        <div className="flex-1" /> {/* пустой элемент, чтобы точки были справа */}
        <div className="flex items-center gap-3">
          {slidesToUse.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)} // переход на конкретный слайд по клику
              aria-label={`Перейти к слайду ${i + 1}`}
              aria-current={i === index} // для accessibility, текущий слайд
              className={`w-[30px] h-[4px]   transition-all duration-200  ${
                i === index
                  ? "scale-110 bg-gray-800" // активная точка
                  : "bg-gray-300 hover:bg-gray-400" // неактивные точки
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
