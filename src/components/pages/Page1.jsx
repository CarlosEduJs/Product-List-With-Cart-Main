import ListItems from "../Elements/ListItems";
import Cart from "../Elements/Cart";

const Page1 = () => {
  return (
    <div className="flex justify-center gap-5 px-[5rem] py-[4rem] max-lg:flex-col max-sm:px-2">
      <ListItems />
      <Cart />
    </div>
  );
};

export default Page1;
