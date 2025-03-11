"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import api from "@/lib/utils/axios";

export default function PageLogger() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentUrl =
      pathname +
      (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    console.log("Current Page URL:", currentUrl);

    // You can also send this to your analytics service or API
    try {
      api.post(`${process.env.NEXT_PUBLIC_API_URL}/analytics/track/pageview`, {
        url: currentUrl,
        referrer: document.referrer || "",
        date: Date.now(),
      });
    } catch (error) {
      console.error("Error logging page view:", error);
    }
  }, [pathname, searchParams]);

  return null;
}
