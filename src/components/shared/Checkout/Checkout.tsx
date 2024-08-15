import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";

const Checkout = () => {
  const { setIsToggle } = useAuth();
  const { carts } = useCart();
  return (
    <div className="fixed top-0 w-full min-h-screen z-50">
      <div className="w-full grid grid-cols-4">
        <div
          onClick={() => setIsToggle(false)}
          className="cursor-pointer min-h-screen bg-black bg-opacity-80 col-span-3"
        ></div>
        <ul className="space-y-2 min-h-screen bg-base-100 p-7 col-span-1">
          {carts?.map((item) => (
            <li className="flex justify-between items-center">
              <span>X</span>
              <span>Product Name</span>
              <strong>Price: $2400</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Checkout;
