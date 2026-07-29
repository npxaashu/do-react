import axios from "axios";
import { ArrowLeft, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  async function getSingleProduct() {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
  }

  useEffect(() => {
    getSingleProduct();
  }, [product]);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-zinc-950">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Product Not Found</h2>

          <button
            onClick={() => navigate("/store")}
            className="mt-5 rounded-xl bg-emerald-500 px-5 py-3 font-medium text-black transition hover:bg-emerald-400"
          >
            Back to Store
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-zinc-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Store
        </button>

        {/* Product Container */}
        <div className="grid overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative flex min-h-[450px] items-center justify-center bg-zinc-950 p-8 sm:p-12">
            <span className="absolute left-6 top-6 rounded-full bg-zinc-800 px-4 py-2 text-sm font-medium capitalize text-zinc-300">
              {product.category}
            </span>

            <img
              src={product.image}
              alt={product.title}
              className="max-h-[450px] max-w-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            {/* Category */}
            <p className="text-sm font-medium uppercase tracking-wider text-emerald-400">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1.5">
                <Star size={17} className="fill-yellow-400 text-yellow-400" />

                <span className="font-medium text-yellow-400">
                  {product.rating?.rate}
                </span>
              </div>

              <span className="text-sm text-zinc-500">
                {product.rating?.count} customer reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-8">
              <p className="text-sm text-zinc-500">Price</p>

              <p className="mt-1 text-4xl font-bold text-emerald-400">
                ${product.price}
              </p>
            </div>

            {/* Description */}
            <div className="mt-8 border-t border-zinc-800 pt-8">
              <h2 className="text-lg font-semibold">Description</h2>

              <p className="mt-3 leading-7 text-zinc-400">
                {product.description}
              </p>
            </div>

            {/* Product Information */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-zinc-800 pt-8">
              <div className="rounded-xl bg-zinc-950 p-4">
                <p className="text-xs text-zinc-500">Category</p>

                <p className="mt-1 capitalize font-medium text-zinc-200">
                  {product.category}
                </p>
              </div>

              <div className="rounded-xl bg-zinc-950 p-4">
                <p className="text-xs text-zinc-500">Rating</p>

                <p className="mt-1 font-medium text-zinc-200">
                  {product.rating?.rate} / 5
                </p>
              </div>

              <div className="rounded-xl bg-zinc-950 p-4">
                <p className="text-xs text-zinc-500">Reviews</p>

                <p className="mt-1 font-medium text-zinc-200">
                  {product.rating?.count}
                </p>
              </div>

              <div className="rounded-xl bg-zinc-950 p-4">
                <p className="text-xs text-zinc-500">Product ID</p>

                <p className="mt-1 font-medium text-zinc-200">#{product.id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
