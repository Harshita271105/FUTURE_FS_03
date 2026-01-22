"use client";

export default function MenPage() {
  const products = [
    { id: 1, name: "Men’s Casual Shirt", price: 1499 },
    { id: 2, name: "Slim Fit Denim Jacket", price: 2499 },
    { id: 3, name: "Printed Cotton T-Shirt", price: 799 },
    { id: 4, name: "Formal Office Coat", price: 1699 },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 md:px-10 py-10">
      <h1 className="text-4xl font-bold mb-3">Men Collection</h1>
      <p className="text-gray-600 mb-10">
        Everyday essentials and statement styles
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <a
            key={p.id}
            href={`/product/men/${p.id}`}
            className="bg-white rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 p-4 block"
          >
            <img
              src={`/images/men${p.id}.png`}
              alt={p.name}
              className="h-52 w-full object-cover rounded-lg mb-4 cursor-pointer transition-all duration-300 hover:scale-105"
            />
            <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
            <p className="text-pink-600 font-bold">₹{p.price}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
