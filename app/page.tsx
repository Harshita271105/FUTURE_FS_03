export const metadata = {
  title: "Myntra Redesign | Home",
  description:
    "Discover a modern Myntra redesign featuring curated fashion for women, men, kids, and beauty categories.",
};
export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-pink-50 to-pink-100 text-center py-28 px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Fashion That Defines You
        </h1>

        <p className="text-gray-700 text-lg mb-10">
          Discover curated styles across fashion, lifestyle, and beauty
        </p>

        {/* CATEGORY QUICK LINKS */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/listing"
            className="px-6 py-3 border border-gray-900 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            Women
          </a>

          <a
            href="/men"
            className="px-6 py-3 border border-gray-900 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            Men
          </a>

          <a
            href="/kids"
            className="px-6 py-3 border border-gray-900 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            Kids
          </a>

          <a
            href="/beauty"
            className="px-6 py-3 border border-gray-900 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition"
          >
            Beauty
          </a>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="px-6 md:px-10 py-20 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Trend First</h3>
            <p className="text-gray-600">
              Stay ahead with curated fashion drops
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
            <p className="text-gray-600">
              Premium styles from trusted brands
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">All-in-One</h3>
            <p className="text-gray-600">
              Fashion, kids, and beauty in one place
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
