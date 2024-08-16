import { IoCartOutline } from "react-icons/io5";
import useAuth from "./../../../../hooks/useAuth";
const Cart = () => {
  const { productIds, setIsToggle } = useAuth();

  return (
    <div className="relative">
      <button onClick={() => setIsToggle(true)} className="inline-block">
        <div className="indicator mt-2">
          <IoCartOutline className="text-2xl cursor-pointer" />
          <span className="indicator-item badge badge-secondary">
            {productIds.length}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Cart;
