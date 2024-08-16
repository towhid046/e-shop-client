import React, { useEffect, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import SectionHeading from "./../../components/shared/SectionHeading/SectionHeading";
import Product from "../../components/unique/Product/Product";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import useAxios from "../../hooks/useAxios";
import PaginationComponent from "./PaginationComponent/PaginationComponent";
import FilterComponent from "./FilterComponent/FilterComponent";
import SortingComponent from "./SortingComponent/SortingComponent";

const ProductsPage: React.FC = () => {
  useScrollToTop();
  const axiosInstance = useAxios();
  const [products, setProducts] = useState<object[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPageView = 8;
  const totalPages = Math.ceil(totalProducts / perPageView);

  const [brand, setBrand] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");

  const [sortOrderPrice, setSortOrderPrice] = useState<string>("");
  const [sortOrderDate, setSortOrderDate] = useState<string>("");

  useEffect(() => {
    const loadProducts = async () => {
      const minPrice = priceRange ? Number(priceRange.split("-")[0]) : "";
      const maxPrice = priceRange ? Number(priceRange.split("-")[1]) : "";
      try {
        const res = await axiosInstance.get(
          `/products?currentPage=${currentPage}&perPageView=${perPageView}&brand=${brand}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortOrderPrice=${sortOrderPrice}&sortOrderDate=${sortOrderDate}`
        );
        setProducts(res.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    loadProducts();
  }, [currentPage, brand, category, priceRange, sortOrderPrice, sortOrderDate]);

  useEffect(() => {
    const loadProductCount = async () => {
      try {
        const { data } = await axiosInstance.get("/products-count");
        setTotalProducts(data.productCount);
      } catch (error) {
        console.error(error);
      }
    };
    loadProductCount();
  }, []);

  const prevButtonHandler = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setIsLoading(true);
    }
  };
  const nextButtonHandler = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setIsLoading(true);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="container mx-auto pb-12">
      <SectionHeading title="Products" description="Discover Your Medicine" />

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1">
          <FilterComponent
            setBrand={setBrand}
            setCategory={setCategory}
            setPriceRange={setPriceRange}
          />
        </div>
        <div className="flex-1">
          <SortingComponent
            setSortOrderPrice={setSortOrderPrice}
            setSortOrderDate={setSortOrderDate}
          />
        </div>
      </div>
      {!products?.length && (
        <div className="text-2xl font-semibold text-gray-400 min-h-[60vh] flex justify-center items-center">
          Products Not Found
        </div>
      )}

      <div className="grid xl:grid-cols-4 px-4 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products?.length &&
          products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>

      <div className={`${(brand || category || priceRange) && "hidden"}`}>
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          prevButtonHandler={prevButtonHandler}
          nextButtonHandler={nextButtonHandler}
        />
      </div>
    </section>
  );
};

export default ProductsPage;
