import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import Navbar from "@/components/layout/Navbar";
import PageLogger from "@/components/PageLogger";

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
      <body>
        <Providers>
          <Navbar />
          {children}
          {/* <PageLogger />  //! TODO: uncomment this when the page logger is ready */}
        </Providers>
      </body>
    </html>
  );
}
