import React from "react";
import { Link } from "react-router-dom"; // если без роутера — замени на <a>

function ProductCard({ product, to = `/product/${product.id}` }) {
  if (!product) return null;

  return (
    <div className="relative  ">
      {/* картинка */}
      <div className="group relative w-[350px] h-[478px] overflow-hidden bg-gray-100">
        <img
          src={product.img}
          alt={product.title}
          loading="lazy"
          className="
            w-full h-full object-cover
            transition-all duration-500
            brightness-100 group-hover:brightness-100 group-hover:scale-105
          "
        />

        {/* оверлей со стрелкой */}
        <Link
          to={to}
          aria-label={`Перейти к товару ${product.title}`}
          className="
      absolute inset-0
      flex items-center justify-center
      bg-[#6E9C9F]/[0.64] 
      opacity-0
      transition-opacity duration-300
      group-hover:opacity-100
    "
        >
          <span className="text-white text-2xl">→</span>
        </Link>
      </div>

      {/* название + цена */}
      <div className="mt-4 text-center">
        <div className="text-[20px] font-['Raleway']">{product.title}</div>
        <div className="mt-1 space-x-2">
          {product.oldPrice && (
            <span className=" text-[15px] text-[#9C9C9C] font-['Raleway'] line-through">
              ${product.oldPrice}
            </span>
          )}
          <span className="text-[15px] text-[#998E78] font-['Raleway']">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ProductsShowcase({ ids = [], data = [], buildLink }) {
  const list = ids
    .map((id) => data.find((p) => p.id === Number(id)))
    .filter(Boolean);

  return (
    <section className="w-full">
      <div className="grid grid-cols-[350px_350px_350px]  gap-[30px]">
        {list.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            to={buildLink ? buildLink(p) : `/product/${p.id}`}
          />
        ))}
      </div>
    </section>
  );
}
