import { useState, useEffect, useMemo } from "react";
import { Product, products } from "@/data/products";

export interface SearchResult {
  type: "product" | "category" | "tag";
  item: Product | string;
  highlight: string;
}

export function useSearch(initialQuery: string = "") {
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [isLoading, setIsLoading] = useState(false);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Search results with memoization
  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return [];

    const searchTerms = debouncedQuery.trim().toLowerCase().split(" ");
    const matches: SearchResult[] = [];
    const addedItems = new Set<string>();

    // Helper function to check if text matches search terms
    const matchesSearchTerms = (text: string) => {
      const normalizedText = text.toLowerCase();
      return searchTerms.every((term) => normalizedText.includes(term));
    };

    // Search in products
    products.forEach((product) => {
      if (addedItems.has(product.id)) return;

      const matchesTitle = matchesSearchTerms(product.title);
      const matchesDescription = matchesSearchTerms(product.description);
      const matchesTags = product.tags.some((tag) => matchesSearchTerms(tag));

      if (matchesTitle || matchesDescription || matchesTags) {
        matches.push({
          type: "product",
          item: product,
          highlight: matchesTitle
            ? product.title
            : matchesDescription
            ? product.description
            : product.tags.find((tag) => matchesSearchTerms(tag)) || "",
        });
        addedItems.add(product.id);
      }
    });

    // Search in categories
    const categories = [...new Set(products.map((p) => p.category))];
    categories.forEach((category) => {
      if (matchesSearchTerms(category)) {
        matches.push({
          type: "category",
          item: category,
          highlight: category,
        });
      }
    });

    // Search in tags
    const allTags = [...new Set(products.flatMap((p) => p.tags))];
    allTags.forEach((tag) => {
      if (matchesSearchTerms(tag)) {
        matches.push({
          type: "tag",
          item: tag,
          highlight: tag,
        });
      }
    });

    // Sort results by relevance
    return matches.sort((a, b) => {
      // Products come first
      if (a.type === "product" && b.type !== "product") return -1;
      if (b.type === "product" && a.type !== "product") return 1;

      // Then exact matches
      const aExact = a.highlight.toLowerCase() === debouncedQuery.toLowerCase();
      const bExact = b.highlight.toLowerCase() === debouncedQuery.toLowerCase();
      if (aExact && !bExact) return -1;
      if (bExact && !aExact) return 1;

      // Then by string length (shorter = better match)
      return a.highlight.length - b.highlight.length;
    });
  }, [debouncedQuery]);

  return {
    query,
    setQuery,
    results,
    isLoading: isLoading && query !== "",
  };
}
