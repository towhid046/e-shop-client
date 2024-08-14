const productImage = `https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600`;
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Button from "../../shared/Button/Button";

// interface ProductProps {

// }

const Product = ({ product }) => {
  const { name, description, categories, price, _id } = product;
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
      <div className="space-y-1 p-4">
        <h2 className="text-xl font-bold text-gray-700">{name}</h2>
        <h4 className="text-gray-600 text-md">
          {categories?.primaryCategory?.name}
        </h4>
        <h3 className="text-lg font-bold text-primary-color">
          Price: ${price}{" "}
        </h3>
        <p className="text-gray-500">
          {description?.split("")?.slice(0, 20)?.join("")}...
          <small className="text-primary-color italic cursor-pointer">
            View more
          </small>
        </p>
      </div>
      <div className="p-4">
        <Button customClass="w-full flex items-center gap-3 justify-center">
          Add to Cart <IoCartOutline className="text-lg" />{" "}
        </Button>
      </div>
    </div>
  );
};
export default Product;
