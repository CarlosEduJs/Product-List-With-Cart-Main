import { useState } from "react";

import EmptyIllustration from "../../assets/images/illustration-empty-cart.svg";
import CarbonNeutral from "../../assets/images/icon-carbon-neutral.svg";
import { TrashIcon } from "@heroicons/react/16/solid";
import ConfirmerOrderBtn from "../Buttons/ConfirmerOrder";
import { useCart } from "../../context/CartContext";

import Modal from "../common/Modals/Modal";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const { cartItems, removeFromCart } = useCart();

  const handleShowModal = () => {
    setShowModal(true);
  }

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-xl min-w-fit max-h-fit">
      <Modal visible={showModal} list={cartItems} orderTotal={totalAmount} />
      <h1 className="text-[#c73a0f] font-bold">
        Your Cart ({cartItems.length})
      </h1>
      {cartItems.length <= 0 && (
        <div className="flex flex-col items-center">
          <img
            src={EmptyIllustration}
            alt="Empty Cart"
            className="w-20 m-auto"
          />
          <h3 className="text-[#ad8985] font-bold text-[10px] text-center">
            Your added items will appear here
          </h3>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="flex flex-col gap-1">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b"
            >
              <div className="flex flex-col gap-1">
                <h1 className="text-xs font-bold">{item.name}</h1>
                <div className="flex items-center gap-3">
                  <h2 className="text-xs font-bold text-orange-700">
                    {item.quantity}x
                  </h2>
                  <h2 className="text-xs text-[#ad8985]">@ ${item.price}</h2>
                  <h2 className="text-xs font-bold text-[#ad8985]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </h2>
                </div>
              </div>
              <TrashIcon
                onClick={() => removeFromCart(item.id)}
                className="w-4 h-4 cursor-pointer text-[#ad8985] transition-all hover:rotate-12"
              />
            </div>
          ))}
          <div className="flex items-center justify-between py-3">
            <h1 className="text-xs">Order Total</h1>
            <h1 className="font-bold text-2xl">${totalAmount}</h1>
          </div>
          <div className="flex items-center justify-center gap-2 bg-rose-50/80 py-3 rounded-md">
            <img src={CarbonNeutral} className="w-4 h-4 cursor-pointer" />
            <h1 className="text-xs">
              This is a{" "}
              <span className="font-bold text-xs">carbon-neutral</span> delivery
            </h1>
          </div>
          <ConfirmerOrderBtn action={handleShowModal} />

        </div>
      )}
    </div>
  );
};

export default Cart;
