import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";

const priceRangeOptions = [
  { value: "0-50", label: "Under $50" },
  { value: "50-100", label: "$50 to $100" },
  { value: "100-200", label: "$100 to $200" },
  { value: "200-500", label: "$200 to $500" },
  { value: "500-1000", label: "$500 to $1000" },
  { value: "1000+", label: "Over $1000" },
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
      <h2 className="text-lg font-semibold mb-4">Filter Products</h2>
      <div className="md:flex items-center md:flex-row gap-5">
        {/* Select Brand Filter */}
        <div className="mb-4 flex-1 w-full">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Brand Name
          </label>
          <div className="relative">
            <select
              defaultValue={""}
              onChange={(e) => setBrand(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-primary-color focus:ring focus:ring-primary-color focus:ring-opacity-50"
            >
              <option className="text-gray-500" value={""}>
                All
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
        <div className="mb-4 flex-1 w-full">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Category
          </label>
          <div className="relative">
            <select
              defaultValue={""}
              onChange={(e) => setCategory(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-primary-color focus:ring focus:ring-primary-color focus:ring-opacity-50"
            >
              <option className="text-gray-500" value={""}>
                All
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
        <div className="mb-4 flex-1 w-full">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Price Range
          </label>
          <div className="relative">
            <select
              defaultValue={""}
              onChange={(e) => setPriceRange(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-primary-color focus:ring focus:ring-primary-color focus:ring-opacity-50"
            >
              <option className="text-gray-500" value={""}>
                All
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
