// components/features/productCard/skeletonCard.js
import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="bg-zinc-400 relative rounded-lg shadow-md p-4 h-full animate-pulse">
      {/* اسکلتون تصویر */}
      <div className="bg-gray-300 rounded-lg w-full h-48 mb-4"></div>

      {/* اسکلتون عنوان */}
      <div className="bg-gray-300 w-3/4 h-6 mb-2 rounded"></div>

      {/* اسکلتون توضیحات */}
      <div className="bg-gray-300 w-5/6 h-16 mb-4 rounded"></div>

      {/* اسکلتون قیمت */}
      <div className="bg-gray-300 w-1/3 h-6 mb-2 rounded"></div>

      {/* اسکلتون دکمه‌ها */}
      <div className="flex gap-2 mt-4">
        <div className="bg-gray-300 w-16 h-10 rounded"></div>
        <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
