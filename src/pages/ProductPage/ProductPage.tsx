import React, { useEffect, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import SectionHeading from "./../../components/shared/SectionHeading/SectionHeading";
import Product from "../../components/unique/Product/Product";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import Button from "./../../components/shared/Button/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useAxios from "../../hooks/useAxios";
const ProductsPage: React.FC = () => {
  useScrollToTop();
  const axiosInstance = useAxios();
  const [products, setProducts] = useState<object[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPageView = 2;
  const totalPages = Math.ceil(totalProducts / perPageView);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await axiosInstance.get(
          `/products?currentPage=${currentPage}&perPageView=${perPageView}`
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
  }, [currentPage]);

  useEffect(() => {
    const loadProductCount = async () => {
      const { data } = await axiosInstance.get("/products-count");
      setTotalProducts(data.productCount);
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

  if (!products?.length) {
    return (
      <div className="text-2xl font-semibold text-gray-400 min-h-[80vh] flex justify-center items-center">
        Products Not Found
      </div>
    );
  }

  return (
    <section className="container mx-auto pb-12">
      <SectionHeading title="Products" description="Discover Your Medicine" />
      <div className="grid xl:grid-cols-4 px-4 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products?.length &&
          products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>

      <div className="flex justify-end px-4 pt-8">
        <div className="flex items-center gap-4">
          <p className="font-semibold">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <Button
              clickHandler={prevButtonHandler}
              isDisabled={currentPage < 2}
            >
              <IoIosArrowBack className="my-1" />
            </Button>
            <Button
              clickHandler={nextButtonHandler}
              isDisabled={currentPage >= totalPages}
            >
              <IoIosArrowForward className="my-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
