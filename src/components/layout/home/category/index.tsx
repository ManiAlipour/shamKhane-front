import Link from "next/link";
import React from "react";

const categories = [
  {
    id: 1,
    title: "شمع",
    description: "نگاهی به تمامی شمع های ما!",
    imageUrl: "/images/candle.jpg",
    slug: "candles",
  },
  {
    id: 2,
    title: "شمع معطر",
    description: "شمع معطر، لحظات آرامش و دلنشین برای خانه شما.",
    imageUrl: "/images/scented-candle.jpg",
    slug: "scented-candles",
  },
  {
    id: 3,
    title: "لوازم تزئینی",
    description: "زیبایی خانه ی شما اینجاست!",
    imageUrl: "/images/Decorative.jpeg",
    slug: "decorative-items",
  },
  {
    id: 4,
    title: "لوازم جانبی شمع",
    description: "لوازم جانبی شمع، تکمیل‌کننده‌ی زیبایی و جذابیت هر فضای شما",
    imageUrl: "/images/Candle-accessories.jpg",
    slug: "candle-accessories",
  },
  {
    id: 5,
    title: "مجموعه‌های ست شده تزئینی",
    description:
      "مجموعه‌های تزئینی ما، هماهنگی و زیبایی را به فضای شما هدیه می‌دهند.",
    imageUrl: "/images/Decorative-sets1.jpg",
    slug: "decorative-sets",
  },
];

export default function Categories() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center gap-3">
        <span className="text-3xl font-bold">دسته بندی های محصولات</span>
        <small>
          لیستی از خدمات ما به شما! دنبال کدوم یک از محصولات زیر میگردید؟
        </small>
      </div>
      <div className="grid w-full sm:w-3/4 mx-auto min-h-[80lvh] grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {categories.map((category, index) => (
          <Link
            href={`/products?slug=${category.slug}`}
            key={category.id}
            className={`relative flex flex-col overflow-hidden rounded-lg shadow-lg group 
                      ${index === 0 ? "lg:col-span-1 lg:row-span-2" : ""}
                      ${index === 2 ? "lg:col-span-2" : ""}
                      ${index === 3 ? "lg:col-span-2" : ""}
                      `}
            style={{
              backgroundImage: `url(${category.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300 ease-in-out opacity-0 lg:group-hover:opacity-100">
              <h3 className="text-xl font-bold hidden lg:block">
                {category.title}
              </h3>
              <p className="mt-2 hidden lg:block">{category.description}</p>
            </div>
            <div className="lg:hidden bg-black bg-opacity-50 text-white p-2">
              <h3 className="text-lg font-bold">{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
