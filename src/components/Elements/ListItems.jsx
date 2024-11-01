import data from "../../data/data.json";
import AddToCartBtn from "../Buttons/AddToCartBtn";
import { isMobile, isTablet } from 'react-device-detect';

const ListItems = () => {
  const getDeviceType = () => {
    if (isMobile) {
      return "mobile";
    } else if (isTablet) {
      return "tablet";
    } else {
      return "desktop";
    }
  };

  const device = getDeviceType();
  return (
    <div className="flex flex-col gap-4 p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold text-[#260f08] mb-3 text-center sm:text-left">Desserts</h1>
      <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col items-center sm:items-start p-4 rounded-lg"
          >
            <img
              src={item.image[device]}
              alt={item.image[device]}
              className="w-full max-w-[200px] rounded-md object-cover"
            />
            <AddToCartBtn item={item} />
            <div className="flex flex-col text-center sm:text-left mt-2">
              <h1 className="text-[#ad8985] text-xs sm:text-sm">{item.category}</h1>
              <h2 className="font-semibold text-sm sm:text-base">{item.name}</h2>
              <h3 className="text-[#c73a0f] text-sm sm:text-base font-semibold">
                ${item.price}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItems;
