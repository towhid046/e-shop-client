import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import useToGetPublicData from "../../hooks/useToGetPublicData";
import SectionHeading from "./../../components/shared/SectionHeading/SectionHeading";
import Product from "../../components/unique/Product/Product";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import Button from "./../../components/shared/Button/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ProductsPage: React.FC = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useToGetPublicData({ queryKeyName: "products", url: "/products" });
  useScrollToTop();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return (
      <h2 className="text-xl font-semibold text-gray-400 py-12 text-center">
        {error}
      </h2>
    );
  }
  if(!products?.length){
    return <div className="text-2xl font-semibold text-gray-400 min-h-[80vh] flex justify-center items-center">Products Not Found</div>
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
          <p className="font-semibold">Page 1 of 8</p>
          <div className="flex items-center gap-2">
            <Button>
              <IoIosArrowBack className="my-1" />
            </Button>
            <Button>
              <IoIosArrowForward className="my-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
