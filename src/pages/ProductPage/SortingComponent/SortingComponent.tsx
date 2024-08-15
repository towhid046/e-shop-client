import { BiSort } from "react-icons/bi";
interface SortingComponentProps {
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}
const SortingComponent = ({ setSortOrder }: SortingComponentProps) => {
  return (
    <div className="p-4 border rounded mx-4 bg-white mb-5">
      <div className="flex items-center gap-1">
        <h2 className="text-lg font-semibold mb-2">Sort Products</h2>
        <BiSort className="text-xl" />
      </div>
      <div className="md:flex items-center md:flex-row gap-3">
        {/* Select Brand Filter */}
        <div className="flex-1 w-full">
          <label className="block text-md font-semibold text-gray-400 mb-2">
            Sort By Price
          </label>
          <div className="relative">
            <select
              defaultValue={""}
              onChange={(e) => setSortOrder(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-primary-color focus:ring focus:ring-primary-color focus:ring-opacity-50"
            >
              <option className="text-gray-500" value={""}>
                Sort By Price
              </option>
              <option className="text-gray-500" value={"low-to-high"}>
                Price Low to High
              </option>
              <option className="text-gray-500" value={"high-to-low"}>
                Price High to Low
              </option>
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
            Brand Name
          </label>
          <div className="relative">
            <select
              defaultValue={""}
              //   onChange={(e) => setCategory(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-primary-color focus:ring focus:ring-primary-color focus:ring-opacity-50"
            >
              <option className="text-gray-500" value={""}>
                All Categories
              </option>
              {/* {categoryOptions &&
                categoryOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))} */}
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

export default SortingComponent;
