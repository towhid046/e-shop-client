import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { CiFilter } from "react-icons/ci";

const priceRangeOptions = [
  { value: "0-1000", label: "Under $1000" },
  { value: "1000-1500", label: "$1000 to $1500" },
  { value: "1500-2000", label: "$1500 to $2000" },
  { value: "2000-2500", label: "$2000 to $2500" },
  { value: "2500-3000", label: "$2500 to $3000" },
  { value: "3000-3500", label: "$3000 to $3500" },
  { value: "3500-4000", label: "$3500 to $4000" },
  { value: "4000-", label: "Over $4000" },
];

interface FilterComponentProps {
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setPriceRange: React.Dispatch<React.SetStateAction<string>>;
}
const FilterComponent = ({
  setBrand,
  setCategory,
  setPriceRange,
}: FilterComponentProps) => {
  const axiosInstance = useAxios();
  const [brandOptions, setBrandOptions] = useState<string[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<string[]>([]);

  useEffect(() => {
    const loadProductCount = async () => {
      try {
        const brandRes = await axiosInstance.get("/product-brand-names");
        const categoryRes = await axiosInstance.get("/product-category-names");
        setBrandOptions(brandRes.data);
        setCategoryOptions(categoryRes.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadProductCount();
  }, []);

  return (
    <div className="p-4 border rounded mx-4 bg-white mb-5">
      <div className="flex items-center gap-1">
        <h2 className="text-lg font-semibold mb-2">Filter Products</h2>
        <CiFilter className="text-xl" />
      </div>
      <div className="md:flex items-center md:flex-row gap-3">
        {/* Select Brand Filter */}
        <div className="flex-1 w-full">
          <label className="block text-md font-semibold text-gray-400 mb-2">
            Brand Name
          </label>
          <div className="relative">
            <select
              defaultValue={""}
              onChange={(e) => setBrand(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-primary-color focus:ring focus:ring-primary-color focus:ring-opacity-50"
            >
              <option className="text-gray-500" value={""}>
                All Brands
              </option>
              {brandOptions &&
                brandOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 7l3-3 3 3M7 13l3 3 3-3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Select Brand Filter */}
        <div className="flex-1 w-full">
          <label className="block text-md font-semibold text-gray-400 mb-2">
            Category
          </label>
          <div className="relative">
            <select
              defaultValue={""}
              onChange={(e) => setCategory(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-primary-color focus:ring focus:ring-primary-color focus:ring-opacity-50"
            >
              <option className="text-gray-500" value={""}>
                All Categories
              </option>
              {categoryOptions &&
                categoryOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 7l3-3 3 3M7 13l3 3 3-3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Select Brand Filter */}
        <div className="flex-1 w-full">
          <label className="block text-md font-semibold text-gray-400 mb-2">
            Price Range
          </label>
          <div className="relative">
            <select
              defaultValue={""}
              onChange={(e) => setPriceRange(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-primary-color focus:ring focus:ring-primary-color focus:ring-opacity-50"
            >
              <option className="text-gray-500" value={""}>
                All Prices
              </option>
              {priceRangeOptions &&
                priceRangeOptions.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 7l3-3 3 3M7 13l3 3 3-3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
