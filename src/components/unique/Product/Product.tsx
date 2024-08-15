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

const productImage = `https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600`;
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Button from "../../shared/Button/Button";

const Product = ({ product }: ProductProps) => {
  const {
    name,
    description,
    categories,
    price,
    _id,
    category,
    created_at,
    brand,
  } = product;
  return (
    <div className="border rounded">
      <figure className="overflow-hidden rounded">
        <Link to={`/product-details/${_id}`}>
          <img
            className="object-cover w-full h-60 rounded cursor-pointer hover:scale-125 transition duration-300 "
            src={productImage}
            alt="Image"
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
        <p className="text-gray-500">Date: {created_at.split('T')[0]}</p>
        <p className="text-gray-500">
          {description?.split("")?.slice(0, 20)?.join("")}...
          <small className="text-primary-color italic cursor-pointer">
            View more
          </small>
        </p>
      </Link>
      <div className="p-4">
        <Button customClass="w-full flex items-center gap-3 justify-center">
          Add to Cart <IoCartOutline className="text-lg" />{" "}
        </Button>
      </div>
    </div>
  );
};
export default Product;
