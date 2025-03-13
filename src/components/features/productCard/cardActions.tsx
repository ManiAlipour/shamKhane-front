"use client";
import { RootState } from "@/lib/store/store";
import { addToCart } from "@/lib/store/features/cartSlice";
import { FaRegGrinHearts } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

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

interface IProductActionProps {
  product: Product;
}

function CardActions({ product }: IProductActionProps) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const isInCart = () => {
    return cart.items.some((item) => item.id === product.id.toString());
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id.toString(),
        name: product.title,
        price: product.price,
        image: product.images[0],
        quantity: 1,
      })
    );
  };

  return (
    <div className="flex flex-col gap-2">
      {/* دکمه افزودن به سبد خرید */}
      <button
        onClick={handleAddToCart}
        className={`flex items-center justify-center gap-2 transition-all duration-300 py-3 px-6 rounded-lg 
      font-medium text-white shadow-md ${
        isInCart()
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-500"
      }`}
        title="افزودن به سبد خرید"
        disabled={isInCart()} // زمانی که محصول داخل سبد خرید است غیر فعال باشد
      >
        <MdAddShoppingCart size={22} />
        <span>
          {isInCart() ? "محصول در سبد خرید است" : "افزودن به سبد خرید"}
        </span>
      </button>

      {/* دکمه علاقه‌مندی */}
      <button
        onClick={() => {}}
        className="flex items-center justify-center gap-2 transition-all duration-300 py-3 px-6 rounded-lg 
      font-medium text-gray-600 hover:text-red-600 shadow-md border border-gray-300 hover:border-red-600"
        title="افزودن به علاقه‌مندی‌ها"
      >
        <FaRegGrinHearts size={22} />
        <span>افزودن به علاقه‌مندی‌ها</span>
      </button>
    </div>
  );
}

export default CardActions;
