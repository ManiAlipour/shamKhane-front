"use client";

import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useSearch, SearchResult } from "@/hooks/useSearch";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

export default function SearchBar() {
  const { query, setQuery, results, isLoading } = useSearch();
  const [isFocused, setIsFocused] = useState(false);

  const handleClear = () => {
    setQuery("");
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
  };

  const renderSearchResult = (result: SearchResult) => {
    switch (result.type) {
      case "product":
        const product = result.item as Product;
        return (
          <Link
            href={`/products/${product.id}`}
            className="flex items-center gap-3 p-2 hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 relative rounded-md overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium">{product.title}</h4>
              <p className="text-xs text-gray-500">
                {formatPrice(product.price)}
              </p>
            </div>
          </Link>
        );

      case "category":
        return (
          <Link
            href={`/products?category=${encodeURIComponent(
              result.item as string
            )}`}
            className="flex items-center gap-2 p-2 hover:bg-gray-50 transition-colors"
          >
            <span className="text-primary">دسته‌بندی:</span>
            <span className="text-sm">{result.item as string}</span>
          </Link>
        );

      case "tag":
        return (
          <Link
            href={`/products?tag=${encodeURIComponent(result.item as string)}`}
            className="flex items-center gap-2 p-2 hover:bg-gray-50 transition-colors"
          >
            <span className="text-primary">برچسب:</span>
            <span className="text-sm">{result.item as string}</span>
          </Link>
        );
    }
  };

  return (
    <div className="relative w-full max-w-xl group">
      <div
        className={`
        flex items-center w-full rounded-full 
        bg-gray-100 hover:bg-gray-50 
        transition-all duration-300 ease-in-out
        ${isFocused ? "ring-2 ring-primary shadow-lg" : ""}
      `}
      >
        <input
          className="
            w-full px-6 py-2.5 
            bg-transparent rounded-full
            text-gray-700 placeholder:text-gray-400
            focus:outline-none text-sm
          "
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            // Delay to allow clicking on results
            setTimeout(() => setIsFocused(false), 200);
          }}
          placeholder="جستجوی محصولات..."
        />

        {query && (
          <button
            onClick={handleClear}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <FaTimes className="text-lg" />
          </button>
        )}

        <button
          className="
          px-4 py-2 mr-1
          text-white bg-primary 
          rounded-full opacity-90 hover:opacity-100
          transition-all duration-300 ease-in-out
          flex items-center gap-2
        "
        >
          <FaSearch className="text-sm" />
          <span className="text-sm hidden sm:inline">جستجو</span>
        </button>
      </div>

      {/* Animated border effect */}
      <div
        className="
        absolute bottom-0 left-1/2 
        w-0 h-0.5 bg-primary
        group-hover:w-full group-hover:left-0 
        transition-all duration-300
      "
      ></div>

      {/* Search results */}
      {isFocused && query && (
        <div
          className="
          absolute top-full left-0 right-0 mt-2
          bg-white rounded-lg shadow-lg
          border border-gray-100
          py-2 z-50
          max-h-96 overflow-y-auto
        "
        >
          {isLoading ? (
            <div className="px-4 py-2 text-sm text-gray-500">
              در حال جستجو...
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {results.map((result, index) => (
                <div key={index}>{renderSearchResult(result)}</div>
              ))}
            </div>
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">
              نتیجه‌ای یافت نشد
            </div>
          )}
        </div>
      )}
    </div>
  );
}
