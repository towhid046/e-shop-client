import { IoCartOutline } from "react-icons/io5";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import Button from "./../../components/shared/Button/Button";
import { useLoaderData } from "react-router-dom";
import SectionHeading from "./../../components/shared/SectionHeading/SectionHeading";
import useScrollToTop from "../../hooks/useScrollToTop";
const productImage = `https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600`;

const ProductDetailsPage: React.FC = () => {
  useScrollToTop();
  const { name, description, categories, price,category, created_at, brand } = useLoaderData();

  return (
    <div className="px-4 mb-12">
      <SectionHeading title={`Details of ${name}`} description={description} />
      <div className="container mx-auto p-4 md:p-6 rounded border px-4">
        <div className="flex flex-col md:flex-row  rounded overflow-hidden ">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              className="object-cover w-full h-64 md:h-full"
              src={productImage}
              alt="Product"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 p-4 md:p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-700">
                {name}
              </h1>
              <h4 className="text-md md:text-lg text-gray-600">
                {categories?.primaryCategory?.name}
              </h4>
              <h2 className="text-xl md:text-2xl font-bold text-primary-color">
                Price: ${price}
              </h2>
              <p className="text-gray-500">Category: {category}</p>
              <p className="text-gray-500">Brand: {brand}</p>
              <p className="text-gray-500">Date: {created_at.split("T")[0]}</p>
              <p className="text-gray-600">{description}</p>
              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button>
                  <IoRemoveCircleOutline className="text-2xl md:text-3xl text-primary-color hover:text-red-500 transition duration-300" />
                </button>
                <span className="text-xl md:text-2xl">1</span>
                <button>
                  <IoAddCircleOutline className="text-2xl md:text-3xl text-primary-color hover:text-green-500 transition duration-300" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button customClass="w-full flex items-center gap-3 justify-center mt-4">
              Add to Cart <IoCartOutline className="text-lg" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
