import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import Navbar from "@/components/Navbar";
import PageLogger from "@/components/PageLogger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "شمع خانه",
  description: "Find the perfect candles and home appliances for your space",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa-IR" dir="rtl" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          {/* <PageLogger />  //! TODO: uncomment this when the page logger is ready */}
        </Providers>
      </body>
    </html>
  );
}
