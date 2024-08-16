import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import { FaTimes } from "react-icons/fa";

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
        <ul className="space-y-2 min-h-screen bg-base-100 p-5 col-span-1">
          <div className="flex justify-between items-center mb-7">
            <h2 className="text-2xl font-semibold text-gray-600">Cart</h2>
            <button onClick={() => setIsToggle(false)}>
              <FaTimes className="text-xl text-gray-600 hover:text-red-400 transition duration-300" />
            </button>
          </div>
          {carts?.map((item) => (
            <li className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <figure>
                  <img
                    src="./../../../assets/images/hero-img.png"
                    className="w-16"
                    alt="Image"
                  />
                </figure>
                <div className="">
                  <p className="text-lg text-gray-600">Product Name</p>
                  <p className="text-gray-500">$2400</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <strong>$1200</strong>
                <button className="btn btn-sm btn-outline">X</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Checkout;
