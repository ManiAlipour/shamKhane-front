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

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex flex-col justify-between h-full">
      {/* تصویر محصول */}
      <div className="relative w-full h-48 bg-gray-50">
        <img
          src={product.images?.[0] || "/placeholder-image.jpg"}
          alt={product.title}
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* اطلاعات محصول */}
      <div className="flex flex-col px-4 py-2">
        {/* عنوان */}
        <h3
          className="text-sm md:text-base font-medium leading-tight mt-2 mb-1 text-gray-800 line-clamp-2"
          title={product.title}
        >
          {product.title}
        </h3>

        {/* قیمت */}
        <p className="text-md font-bold text-orange-500 mt-3">
          {product.price.toLocaleString("fa-IR")} تومان
        </p>
      </div>

      {/* دکمه خرید */}
      <div className="p-3">
        <button className="w-full py-2 text-sm lg:text-base font-medium bg-primary text-white  rounded hover:bg-secondary transition-colors duration-300">
          مشاهده بیشتر
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
