"use client";

import { useParams } from "next/navigation";

const DATA: Record<string, any[]> = {
  women: [
    { id: "1", name: "Floral Summer Dress", price: 1299, image: "/images/women1.png" },
    { id: "2", name: "Maxi Evening Dress", price: 1799, image: "/images/women2.png" },
    { id: "3", name: "Casual Cotton Dress", price: 999, image: "/images/women3.png" },
    { id: "4", name: "Party Wear Dress", price: 2199, image: "/images/women4.png" },
    { id: "5", name: "Wrap Style Midi Dress", price: 1599, image: "/images/women5.png" },
    { id: "6", name: "A-Line Office Dress", price: 1399, image: "/images/women6.png" },
  ],
  men: [
    { id: "1", name: "Men’s Casual Shirt", price: 1499, image: "/images/men1.png" },
    { id: "2", name: "Slim Fit Denim Jacket", price: 2499, image: "/images/men2.png" },
    { id: "3", name: "Printed Cotton T-Shirt", price: 799, image: "/images/men3.png" },
    { id: "4", name: "Formal Office Coat", price: 1699, image: "/images/men4.png" },
  ],
  kids: [
    { id: "1", name: "Kids Printed T-Shirt and Shorts", price: 599, image: "/images/kids1.png" },
    { id: "2", name: "Kids Party Dress", price: 1299, image: "/images/kids2.png" },
    { id: "3", name: "Cotton T-Shirt and Shorts Set", price: 899, image: "/images/kids3.png" },
    { id: "4", name: "Kids Cotton Printed Shirt", price: 1499, image: "/images/kids4.png" },
  ],
  beauty: [
    { id: "1", name: "Hydrating Face Cream", price: 899, image: "/images/beauty1.png" },
    { id: "2", name: "Matte Finish Lipstick", price: 699, image: "/images/beauty2.png" },
    { id: "3", name: "Vitamin C Serum", price: 1299, image: "/images/beauty3.png" },
    { id: "4", name: "Herbal Face Cleanser", price: 599, image: "/images/beauty4.png" },
  ],
};

export default function ProductDetailPage() {
  const params = useParams();
  const category = params.category as string;
  const id = params.id as string;

  const product = DATA[category]?.find((p) => p.id === id);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 md:px-10 py-10">
      <div className="bg-white rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[450px] object-cover rounded-lg"
        />

        <div>
          <h1 className="text-4xl font-bold mb-3">{product.name}</h1>
          <p className="text-pink-600 text-2xl font-bold mb-6">₹{product.price}</p>

          <p className="font-semibold mb-2">Select Size</p>
          <div className="flex gap-3 mb-8">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="border px-4 py-2 rounded-md hover:border-pink-600 hover:text-pink-600"
              >
                {size}
              </button>
            ))}
          </div>

          <button className="bg-pink-600 text-white px-8 py-3 rounded-md hover:bg-pink-700">
            Add to Bag
          </button>
        </div>
      </div>
    </main>
  );
}
