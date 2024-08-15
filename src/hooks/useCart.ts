import { useEffect, useState } from "react";

const useCart = () => {
  const [carts, setCarts] = useState<string[]>([]);
  useEffect(() => {
    const ids = localStorage.getItem("productsId")
      ? JSON.parse(localStorage.getItem("productsId"))
      : [];
      setCarts(ids);
  }, []);
  return { carts };
};

export default useCart;
