import ProductCard from "@/components/features/productCard";
import SkeletonLoading from "@/components/features/productCard/skeletonCard";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    image: string;
  };
};

interface IProductsProps {
  products: Product[];
}

const Products = ({ products }: IProductsProps) => {
  return products.length > 0 ? (
    products.map((product: Product) => (
      <div
        key={product.id}
        className="flex flex-col justify-between bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <ProductCard product={product} />
      </div>
    ))
  ) : (
    [...Array(12)].map((_, i) => <SkeletonLoading key={i} />)
  );
};

export default Products;
