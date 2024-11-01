const ConfirmerOrderBtn = ({ action }) => {
  return (
    <button
      onClick={action}
      className="mt-2 rounded-full p-2 font-semibold text-sm text-white bg-[#c73a0f] hover:bg-orange-800"
    >
      Confirm Order
    </button>
  );
};

export default ConfirmerOrderBtn;
