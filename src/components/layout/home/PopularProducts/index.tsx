import Products from "./Products";

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

async function fetchData() {
  try {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products?offset=0&limit=5"
    );
    const products = await response.json();

    if (!products) {
      return [];
    }

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}


const PopularProducts = async () => {
  const products: Product[] = await fetchData();
  return (
    <div className="container mx-auto px-4 lg:px-6">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 my-6 text-center">
        محصولات محبوب
      </h1>

      {/* ‍‍‍‍‍ریسپانسیو مشابه دیجی‌کالا */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        <Products products={products} />
      </div>
    </div>
  );
};



export default PopularProducts;
