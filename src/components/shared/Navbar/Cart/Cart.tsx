import { IoCartOutline } from "react-icons/io5";
import useAuth from "./../../../../hooks/useAuth";
import useCart from "../../../../hooks/useCart";
const Cart = () => {
  const { productIds, setIsToggle } = useAuth();
  const { carts } = useCart();

  return (
    <div className="relative">
      <button onClick={() => setIsToggle(true)} className="inline-block">
        <div className="indicator mt-2">
          <IoCartOutline className="text-2xl cursor-pointer" />
          <span className="indicator-item badge badge-secondary">
            {productIds.length || carts.length}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Cart;
