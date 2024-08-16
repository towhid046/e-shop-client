export interface ProductProps {
  _id: string;
  name: string;
  description: string;
  image: string;
  categories: string;
  price: number;
  ratings: number;
  created_at: string;
}

import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Button from "../../shared/Button/Button";
import useAuth from "./../../../hooks/useAuth";
import swal from "sweetalert";

const Product = ({ product }: ProductProps) => {
  const { user, handleAddToCart, productIds, setIsToggle } = useAuth();
  const navigate = useNavigate();

  const {
    name,
    image,
    description,
    categories,
    price,
    _id,
    category,
    created_at,
    brand,
    ratings,
  } = product;

  const handleAddToCartButton = (id: string): void => {
    if (!user) {
      swal({
        title: "Login first!",
        text: "To add product in the cart you should login first",
        icon: "info",
        buttons: true,
      }).then((login) => {
        if (login) {
          return navigate("/login");
        }
      });
    } else {
      handleAddToCart(id);
    }
  };

  return (
    <div className="border rounded flex justify-between flex-col">
      <figure className="overflow-hidden rounded">
        <Link to={`/product-details/${_id}`}>
          <img
            className="object-cover w-full h-60 rounded cursor-pointer hover:scale-125 transition duration-300 "
            src={image}
            alt={name}
          />
        </Link>
      </figure>
      <Link
        to={`/product-details/${_id}`}
        className="inline-block space-y-1 p-4"
      >
        <h2 className="text-xl font-bold text-gray-700">{name}</h2>
        <h4 className="text-gray-600 text-md">
          {categories?.primaryCategory?.name}
        </h4>
        <h3 className="text-lg font-bold text-primary-color">
          Price: ${price}{" "}
        </h3>
        <p className="text-gray-500">Category: {category}</p>
        <p className="text-gray-500">Brand: {brand}</p>
        <p className="text-gray-500">Rating: {ratings}</p>
        <p className="text-gray-500">Date: {created_at.split("T")[0]}</p>
        <p className="text-gray-500">
          {description?.split("")?.slice(0, 20)?.join("")}...
          <small className="text-primary-color italic cursor-pointer">
            View more
          </small>
        </p>
      </Link>
      <div className="p-4">
        {productIds.includes(_id) && user ? (
          <button
            onClick={() => setIsToggle(true)}
            className="w-full flex px-4 py-2 bg-gray-800 hover:bg-gray-700 transition duration-300 text-white rounded items-center gap-3 justify-center"
          >
            View Cart <IoCartOutline className="text-lg" />{" "}
          </button>
        ) : (
          <Button
            clickHandler={() => handleAddToCartButton(_id)}
            customClass="w-full flex items-center gap-3 justify-center"
          >
            Add to Cart <IoCartOutline className="text-lg" />{" "}
          </Button>
        )}
      </div>
    </div>
  );
};
export default Product;
