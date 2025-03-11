"use client";

import { useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { addToCart } from "@/lib/store/features/cartSlice";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="hover:shadow-lg transition-shadow">
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt={product.name}
            className="h-48 object-cover"
          />
          <CardContent>
            <Typography variant="h6" component="h2" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Category: {product.category}
            </Typography>
            <Typography variant="h6" color="primary" gutterBottom>
              ${product.price.toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
