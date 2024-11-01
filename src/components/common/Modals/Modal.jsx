import { CheckBadgeIcon } from "@heroicons/react/16/solid";
import { isMobile, isTablet } from "react-device-detect";
import StartNewOrder from "../../Buttons/StartNewOrderBtn";

const Modal = ({ visible, list, orderTotal }) => {
  const getDeviceType = () => {
    if (isMobile) {
      return "mobile";
    } else if (isTablet) {
      return "tablet";
    } else {
      return "desktop";
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const device = getDeviceType();

  return (
    <div
      className={`${
        visible ? "flex" : "hidden"
      } items-center justify-center h-full w-full fixed left-0 top-0 bg-black/50`}
    >
      <div
        className={`flex max-h-[90vh] overflow-y-auto flex-col gap-4 bg-white px-7 py-6 rounded-lg ${
          device === "mobile"
            ? "w-[90%]"
            : device === "tablet"
            ? "w-[70%]"
            : "w-[50%]"
        }`}
      >
        <CheckBadgeIcon className="text-green-400 w-8 h-8" />
        <h1 className="text-2xl font-bold">Order Confirmed</h1>
        <h3 className="text-rose-300 text-xs font-medium">
          We Hope you enjoy your food!
        </h3>
        <div className="flex flex-col gap-3 p-3 rounded-lg bg-rose-50/80">
          {list.map((item, index) => (
            <div
              key={index}
              className="flex justify-between p-2 border-b items-center min-w-[300px]"
            >
              <div className="flex items-center gap-2">
                <img
                  src={item.image[device]}
                  alt={item.image[device]}
                  className="w-8 rounded-md"
                />
                <div className="flex flex-col gap-1">
                  <h1 className="text-xs font-bold">{item.name}</h1>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xs font-bold text-orange-700">
                      {item.quantity}x
                    </h2>
                    <h2 className="text-xs text-[#ad8985]">@ ${item.price}</h2>
                  </div>
                </div>
              </div>
              <h2 className="text-xs font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </h2>
            </div>
          ))}
          <div className="flex items-center justify-between py-1">
            <h1 className="text-xs">Order Total</h1>
            <h1 className="font-bold text-2xl">${orderTotal}</h1>
          </div>
        </div>
        <StartNewOrder action={() => refreshPage(true)} />
      </div>
    </div>
  );
};

export default Modal;
