import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

const Cart = ({
  cartItems,
  setCartItems,
  //   increaseQuantity,
  //   decreaseQuantity,
  //   removeFromCart,
}) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center gap-4 px-6">
        <ShoppingCart size={70} className="text-zinc-700" />

        <h2 className="text-3xl font-bold text-white">Your Cart is Empty</h2>

        <p className="max-w-md text-center text-zinc-400">
          Looks like you haven't added any products yet.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[2fr_380px]">
      {/* Cart Items */}

      <div className="space-y-5">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 sm:flex-row"
          >
            {/* Image */}

            <div className="flex h-40 w-full items-center justify-center rounded-xl bg-zinc-950 p-4 sm:w-40">
              <img
                src={item.image}
                alt={item.title}
                className="h-full object-contain"
              />
            </div>

            {/* Info */}

            <div className="flex flex-1 flex-col">
              <span className="mb-2 text-xs uppercase tracking-wide text-emerald-400">
                {item.category}
              </span>

              <h3 className="text-lg font-semibold text-white">{item.title}</h3>

              <p className="mt-3 text-2xl font-bold text-emerald-400">
                ${item.price}
              </p>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-5">
                {/* Quantity */}

                <div className="flex items-center rounded-xl border border-zinc-700">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="p-3 transition hover:bg-zinc-800"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="min-w-12 text-center">{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="p-3 transition hover:bg-zinc-800"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                {/* Remove */}

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
                >
                  <Trash2 size={18} />
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}

      <aside className="sticky top-6 h-fit rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="mb-6 text-2xl font-bold text-white">Order Summary</h2>

        <div className="space-y-4 text-zinc-300">
          <div className="flex justify-between">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-emerald-400">Free</span>
          </div>

          <hr className="border-zinc-700" />

          <div className="flex justify-between text-xl font-bold text-white">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button className="mt-8 w-full rounded-xl bg-emerald-500 py-3 font-semibold text-black transition hover:bg-emerald-400">
          Proceed to Checkout
        </button>
      </aside>
    </section>
  );
};

export default Cart;
