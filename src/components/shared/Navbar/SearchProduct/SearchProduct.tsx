import React, { useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm/SearchForm";
import ProductRow from "./ProductRow/ProductRow";

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
      <SearchForm handleSearchProducts={handleSearchProducts} />

      {searchText && !products.length && (
        <>
          <ul className="space-y-2 bg-base-100 p-5 rounded absolute w-full top-[110%] py-12 shadow">
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
        <ul className="space-y-2 bg-base-100 p-5 rounded absolute w-full top-[110%] shadow">
          {products.map((product) => (
            <ProductRow product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchProduct;
