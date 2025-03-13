export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "شمع معطر وانیلی",
    description: "شمع معطر با رایحه وانیل مناسب برای فضای داخلی",
    price: 45000,
    category: "شمع معطر",
    tags: ["وانیل", "معطر", "شمع", "دکوری"],
    image: "/images/vanilla-candle.jpg",
  },
  {
    id: "2",
    title: "شمع استوانه‌ای ساده",
    description: "شمع استوانه‌ای سفید مناسب برای دکوراسیون",
    price: 35000,
    category: "شمع ساده",
    tags: ["ساده", "سفید", "استوانه‌ای", "دکوری"],
    image: "/images/white-candle.jpg",
  },
  // اضافه کردن محصولات بیشتر
];
