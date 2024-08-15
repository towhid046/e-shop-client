import React, { useEffect, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import SectionHeading from "./../../components/shared/SectionHeading/SectionHeading";
import Product from "../../components/unique/Product/Product";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import useAxios from "../../hooks/useAxios";
import PaginationComponent from "./PaginationComponent/PaginationComponent";
import FilterComponent from "./FilterComponent/FilterComponent";

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

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await axiosInstance.get(
          `/products?currentPage=${currentPage}&perPageView=${perPageView}&brand=${brand}&category=${category}`
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
  }, [currentPage, brand, category, priceRange]);

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
    }
  };
  const nextButtonHandler = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="container mx-auto pb-12">
      <SectionHeading title="Products" description="Discover Your Medicine" />

      <FilterComponent
        setBrand={setBrand}
        setCategory={setCategory}
        setPriceRange={setPriceRange}
      />
      {/* --------------------------- */}
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

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        prevButtonHandler={prevButtonHandler}
        nextButtonHandler={nextButtonHandler}
      />
    </section>
  );
};

export default ProductsPage;
