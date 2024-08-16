import { Link } from "react-router-dom";
import { ProductProps } from "../../../../unique/Product/Product";

interface ProductRowProps {
  product: ProductProps;
  setSearchText: (value: string | null) => void;
}

const ProductRow: React.FC<ProductRowProps> = ({ product, setSearchText }) => {
  const { name, _id, image, price } = product;

  return (
    <Link
      to={`/product-details/${_id}`}
      className="inline-block"
      onClick={() => setSearchText(null)}
    >
      <li className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img src={image} className="w-12 h-12 rounded" alt="Product" />
          <p className="hover:underline">{name}</p>
        </div>
        <strong className="hover:underline">Price: ${price}</strong>
      </li>
    </Link>
  );
};

export default ProductRow;