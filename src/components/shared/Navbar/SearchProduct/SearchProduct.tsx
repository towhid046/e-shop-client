import React, { useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import { Link } from "react-router-dom";

const SearchProduct: React.FC = () => {
  const axiosInstance = useAxios();
  const [searchText, setSearchText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<object[]>([]);
  const handleSearchProducts: React.ChangeEventHandler<
    HTMLInputElement
  > = async (e): Promise<void> => {
    e.preventDefault();
    const searchValue = e.target.value;
    setIsLoading(true);
    setSearchText(searchValue);
    try {
      if (searchValue) {
        const res = await axiosInstance.get(`/products?search=${searchValue}`);
        return setProducts(res.data);
      }
      setProducts([]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full relative">
      <form className="w-full">
        <label
          className={`border px-6 py-2 rounded-full flex items-center gap-2  focus-within:border-primary-color focus-within:border-opacity-50`}
        >
          <input
            onChange={handleSearchProducts}
            type="text"
            className="w-full focus:outline-none"
            placeholder="Search by name"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </form>

      {searchText && !products.length && (
        <>
          <ul className="space-y-2 bg-base-100 p-5 rounded absolute w-full top-[100%] py-12">
            {isLoading ? (
              <div className="text-center">
                <span className="loading loading-spinner loading-sm"></span>
              </div>
            ) : (
              <div className="text-center">
                <span className="text-gray-400 italic font-semibold text-xl">
                  No Products Found
                </span>
              </div>
            )}
          </ul>
        </>
      )}

      {/* for search result */}
      {products?.length > 0 && searchText && (
        <ul className="space-y-2 bg-base-100 p-5 rounded absolute w-full top-[100%]">
          {products.map((product) => (
            <Link
              onClick={() => setSearchText(null)}
              to={`/product-details/${product._id}`}
            >
              <li
                key={product._id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={product.image}
                    className="w-12 h-12 rounded"
                    alt="product Img"
                  />
                  <p className="hover:underline">{product.name}</p>
                </div>
                <strong className="hover:underline">
                  Price: ${product.price}
                </strong>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchProduct;