import Categories from "@/components/layout/home/category";
import PopularProducts from "@/components/layout/home/PopularProducts";
import PrimaryContainer from "@/components/layout/PrimaryContainer";
import InformationCard from "@/components/ui/InformationCart";
import { informationCards } from "@/lib/constants/cards";
import { Button } from "@mui/material";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-image-hero text-white">
        <div className="flex flex-col items-center justify-center gap-4 max-w-2xl">
          <h1 className="text-4xl font-black">
            به <span className="text-btn">شمع خانه</span> خوش آمدید
          </h1>
          <p className="text-lg font-medium text-center px-2 md:px-0">
            به دنیای جادویی شمع خانه خوش آمدید. جایی که هر شمع، داستانی از نور و
            گرما را روایت می‌کند. مجموعه‌ای بی‌نظیر از دکوری‌جات منحصر به فرد و
            شمع‌های دست‌ساز که با عشق و ظرافت طراحی شده‌اند تا خانه شما را به
            مکانی خاص و دلنشین تبدیل کنند.
          </p>

          <div className="flex  items-center justify-center gap-4">
            <Button
              size="large"
              variant="outlined"
              startIcon={<FaShoppingCart />}
              color="primary"
            >
              فروشگاه
            </Button>
            <Button
              size="large"
              startIcon={<FaUserPlus />}
              variant="contained"
              color="primary"
            >
              ثبت نام
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <PrimaryContainer className="md:py-16 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {informationCards.map((card, index) => (
            <InformationCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </PrimaryContainer>

      <div className="py-10   ">
        <Categories />
      </div>

      <PopularProducts />
    </main>
  );
}
