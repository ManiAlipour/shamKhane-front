import type { IconType } from "react-icons";
import { FaCheck, FaGift, FaPhone } from "react-icons/fa";

interface InformationCard {
  title: string;
  description: string;
  icon: IconType;
}

export const informationCards: InformationCard[] = [
  {
    title: "پشتیبانی 24 ساعته",
    description:
      "پشتیبانی ۲۴ ساعته ما همیشه در کنار شماست تا تجربه‌ای بدون دغدغه را برایتان فراهم کنیم.",
    icon: FaPhone,
  },
  {
    title: "تضمین کیفیت",
    description:
      "ما با افتخار تضمین می‌کنیم که هر محصولی که ارائه می‌دهیم، حاصل دقت، کیفیت و عشق به رضایت مشتری است.",
    icon: FaCheck,
  },
  {
    title: "ارسال رایگان",
    description:
      "برای سفارش‌های بالای ۵۰۰ هزار تومان، ارسال رایگان هدیه‌ای از طرف ما به شماست.",
    icon: FaGift,
  },
];
