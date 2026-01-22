export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        <a
          href="/"
          className="text-xl font-bold tracking-wide text-pink-600"
        >
          MYNTRA
        </a>

        <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-800">
          <a href="/listing" className="hover:text-pink-600 transition">
            Women
          </a>
          <a href="/men" className="hover:text-pink-600 transition">
            Men
          </a>
          <a href="/kids" className="hover:text-pink-600 transition">
            Kids
          </a>
          <a href="/beauty" className="hover:text-pink-600 transition">
            Beauty
          </a>
        </nav>
      </div>
    </header>
  );
}
