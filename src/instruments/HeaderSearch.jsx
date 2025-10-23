import { useEffect, useMemo, useRef, useState } from "react";
import "../styles/headersearch.css";
import products from "../Products/products";

export default function HeaderSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const DEBOUNCE_MS = 300;
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), DEBOUNCE_MS);
    return () => clearTimeout(t);
  }, [query]);
  // фильтруем товары по debouncedQuery и только если длина >= 3
  const filteredProducts = products
    .filter(
      (item) =>
        debouncedQuery.length >= 3 &&
        item.title.toLowerCase().startsWith(debouncedQuery.toLowerCase())
    )
    .slice(0, 5);

  // ✅ закрываем поиск только при клике вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={rootRef} className={`search-container ${open ? "open" : ""}`}>
      {/* иконка для открытия */}
      <img
        src="/images/lupa.png"
        alt="Поиск"
        className="lupa"
        onClick={() => setOpen((prev) => !prev)}
      />

      {/* input для ввода */}
      <input
        type="text"
        className="search-input"
        placeholder="Поиск товара..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus={open}
      />

      {/* выпадающий список */}
      {open && query && (
        <ul className="search-results" onMouseDown={(e) => e.preventDefault()}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <li
                key={item.id}
                className="search-item"
                onClick={() => {
                  setQuery(item.title);
                }}
              >
                <img src={item.img} alt={item.title} />
                <span>
                  {item.title} — {item.price} грн
                </span>
              </li>
            ))
          ) : (
            <li>Ничего не найдено</li>
          )}
        </ul>
      )}
    </div>
  );
}
