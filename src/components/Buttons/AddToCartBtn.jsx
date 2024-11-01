import { useCart } from "../../context/CartContext";
import { useState } from "react";
import {
  ShoppingCartIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/16/solid";

const AddToCartBtn = ({ item }) => {
  const { addToCart, getQuantify, updateQuantity, cartItems } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

  return (
    <button
      className={`flex items-center justify-center rounded-full py-2 gap-2 w-[130px] border border-gray-400  relative top-[-1rem] mx-auto transition duration-300 ${
        isHovered
          ? "bg-[#c73a0f] border-none text-white"
          : "bg-white text-black"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="flex items-center gap-4">
          <MinusCircleIcon
            onClick={() => {
              if (cartItem.quantity > 0) {
                updateQuantity(cartItem.id, cartItem.quantity - 1);
              }
            }}
            className={`h-4 w-4 text-white transition-all hover:scale-125`}
          />
          <span className="text-sm font-bold">{getQuantify(item.id)}</span>
          <PlusCircleIcon
            onClick={() => addToCart(item)}
            className="h-4 w-4 text-white transition-all hover:scale-125"
          />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <ShoppingCartIcon className="w-3 h-3" />
          <h1 className="text-xs font-bold">Add To Cart</h1>
        </div>
      )}
    </button>
  );
};

export default AddToCartBtn;
