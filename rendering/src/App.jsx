import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      price: 59.99,
      description:
        "Over-ear wireless headphones with noise isolation and 30-hour battery life.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      rating: { rate: 4.6, count: 320 },
    },
    {
      id: 2,
      title: "Minimal White Sneakers",
      price: 79.99,
      description:
        "Comfortable everyday sneakers with a modern minimalist design.",
      category: "fashion",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      rating: { rate: 4.4, count: 210 },
    },
    {
      id: 3,
      title: "Smart Fitness Watch",
      price: 129.99,
      description: "Track heart rate, sleep, and daily activities with ease.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      rating: { rate: 4.7, count: 540 },
    },
    {
      id: 4,
      title: "Leather Backpack",
      price: 94.5,
      description:
        "Premium leather backpack perfect for work, college, and travel.",
      category: "bags",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
      rating: { rate: 4.5, count: 180 },
    },
    {
      id: 5,
      title: "Mechanical Keyboard",
      price: 89.99,
      description:
        "RGB mechanical keyboard with blue switches for a satisfying typing experience.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
      rating: { rate: 4.8, count: 610 },
    },
    {
      id: 6,
      title: "Ceramic Coffee Mug",
      price: 14.99,
      description:
        "Elegant ceramic mug suitable for coffee, tea, and hot chocolate.",
      category: "home",
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a",
      rating: { rate: 4.3, count: 95 },
    },
    {
      id: 7,
      title: "Gaming Mouse",
      price: 49.99,
      description:
        "High-precision gaming mouse with customizable RGB lighting.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
      rating: { rate: 4.6, count: 430 },
    },
    {
      id: 8,
      title: "Classic Sunglasses",
      price: 34.99,
      description: "UV-protected stylish sunglasses for everyday wear.",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      rating: { rate: 4.2, count: 165 },
    },
    {
      id: 9,
      title: "Modern Desk Lamp",
      price: 39.99,
      description:
        "LED desk lamp with adjustable brightness and color temperature.",
      category: "home",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      rating: { rate: 4.5, count: 142 },
    },
    {
      id: 10,
      title: "Wireless Speaker",
      price: 69.99,
      description:
        "Portable Bluetooth speaker with rich bass and waterproof design.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
      rating: { rate: 4.7, count: 380 },
    },
    {
      id: 11,
      title: "Denim Jacket",
      price: 64.99,
      description: "Timeless denim jacket crafted with premium-quality fabric.",
      category: "fashion",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
      rating: { rate: 4.4, count: 205 },
    },
    {
      id: 12,
      title: "Travel Suitcase",
      price: 119.99,
      description:
        "Lightweight hard-shell suitcase with smooth spinner wheels.",
      category: "travel",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      rating: { rate: 4.6, count: 276 },
    },
    {
      id: 13,
      title: "Running Shoes",
      price: 99.99,
      description: "Breathable running shoes with excellent cushioning.",
      category: "sports",
      image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
      rating: { rate: 4.8, count: 492 },
    },
    {
      id: 14,
      title: "Notebook Journal",
      price: 12.99,
      description:
        "Hardcover notebook with premium pages for journaling and notes.",
      category: "stationery",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db",
      rating: { rate: 4.5, count: 130 },
    },
    {
      id: 15,
      title: "DSLR Camera",
      price: 799.99,
      description:
        "Professional DSLR camera with interchangeable lens support.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      rating: { rate: 4.9, count: 740 },
    },
    {
      id: 16,
      title: "Office Chair",
      price: 189.99,
      description:
        "Ergonomic office chair with lumbar support and adjustable height.",
      category: "furniture",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      rating: { rate: 4.6, count: 321 },
    },
    {
      id: 17,
      title: "Indoor Plant",
      price: 24.99,
      description:
        "Beautiful low-maintenance indoor plant for home decoration.",
      category: "home",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
      rating: { rate: 4.3, count: 98 },
    },
    {
      id: 18,
      title: "Stainless Steel Water Bottle",
      price: 21.99,
      description: "Insulated bottle that keeps drinks cold for 24 hours.",
      category: "lifestyle",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      rating: { rate: 4.7, count: 254 },
    },
    {
      id: 19,
      title: "Tablet Stand",
      price: 18.99,
      description:
        "Foldable aluminum stand compatible with tablets and smartphones.",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
      rating: { rate: 4.4, count: 167 },
    },
    {
      id: 20,
      title: "Cotton Hoodie",
      price: 44.99,
      description: "Soft cotton hoodie with a relaxed fit for all-day comfort.",
      category: "fashion",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      rating: { rate: 4.5, count: 290 },
    },
  ]);

  const deleteProduct = (id) => {
    let products2 = products.filter((product) => product.id !== id);
    setProducts(products2);
  };

  const renderProducts = products.map((product) => {
    return (
      <Card key={product.id} product={product} deleteProduct={deleteProduct} />
    );
  });

  return (
    <div className="p-10 flex flex-wrap justify-center gap-10">
      {renderProducts}
    </div>
  );
};

export default App;
