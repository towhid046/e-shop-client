import { Link } from "react-router-dom";
import { ProductProps } from "../../../../unique/Product/Product";
interface ProductRowProps {
  product: ProductProps;
  setSearchText: React.Dispatch<React.SetStateAction<string | null>>;
}
const ProductRow = ({ product, setSearchText }: ProductRowProps) => {
  const { name, _id, image, price } = product;
  return (
    <Link onClick={() => setSearchText(null)} to={`/product-details/${_id}`}>
      <li className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img src={image} className="w-12 h-12 rounded" alt="product Img" />
          <p className="hover:underline">{name}</p>
        </div>
        <strong className="hover:underline">Price: ${price}</strong>
      </li>
    </Link>
  );
};

export default ProductRow;
