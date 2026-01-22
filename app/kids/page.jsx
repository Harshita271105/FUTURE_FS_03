"use client";

export default function KidsPage() {
  const products = [
    { id: 1, name: "Kids Printed T-Shirt and Shorts", price: 599 },
    { id: 2, name: "Kids Party Dress", price: 1299 },
    { id: 3, name: "Cotton T-Shirt and Shorts Set", price: 899 },
    { id: 4, name: "Kids Cotton Printed Shirt", price: 1499 },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 md:px-10 py-10">
      <h1 className="text-4xl font-bold mb-3">Kids Collection</h1>
      <p className="text-gray-600 mb-10">
        Comfortable, playful and fun styles
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <a
            key={p.id}
            href={`/product/kids/${p.id}`}
            className="bg-white rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 p-4 block"
          >
            <img
              src={`/images/kids${p.id}.png`}
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
