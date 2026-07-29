import { Star } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/store/${product.id}`)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-xl hover:shadow-black/30"
    >
      {/* Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-zinc-950 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <span className="absolute left-3 top-3 rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium capitalize text-zinc-300">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-semibold text-white">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-3 text-sm text-zinc-400">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-2 py-1">
            <Star size={15} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-zinc-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Bottom */}
        <div className="mt-auto flex items-center justify-between pt-6">
          <div>
            <p className="text-xs text-zinc-500">Price</p>
            <h3 className="text-2xl font-bold text-emerald-400">
              ${product.price}
            </h3>
          </div>

          <button className="rounded-xl bg-emerald-500 px-5 py-2.5 font-medium text-black transition hover:bg-emerald-400 active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
