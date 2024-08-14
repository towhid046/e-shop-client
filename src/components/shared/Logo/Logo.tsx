import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "react-router-dom";

const Logo:React.FC = () => {
  return (
    <Link to={"/"} className="flex items-center">
      {" "}
      <AiOutlineProduct className="text-3xl text-gray-400" />
      <h2 className="md:text-3xl text-2xl font-bold text-gray-500">E_shop</h2>
    </Link>
  );
};

export default Logo;
