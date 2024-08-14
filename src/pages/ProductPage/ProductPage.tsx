import useScrollToTop from "../../hooks/useScrollToTop";
import useToGetPublicData from "../../hooks/useToGetPublicData";
import SectionHeading from "./../../components/shared/SectionHeading/SectionHeading";
import Product from "../../components/unique/Product/Product";

import React from "react";
const ProductsPage: React.FC = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useToGetPublicData({ queryKeyName: "products", url: "/products" });
  useScrollToTop();
  return (
    <section className="container mx-auto mb-12">
      <SectionHeading title="Products" description="Discover Your Medicine" />
      <div className="grid xl:grid-cols-4 px-4 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
