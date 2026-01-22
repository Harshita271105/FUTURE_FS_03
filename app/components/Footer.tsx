export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-pink-500 mb-4">MYNTRA</h2>
          <p className="text-sm text-gray-400">
            Your one-stop destination for fashion, kids wear, and beauty.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">SHOP</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/listing" className="hover:text-pink-500">Women</a></li>
            <li><a href="/men" className="hover:text-pink-500">Men</a></li>
            <li><a href="/kids" className="hover:text-pink-500">Kids</a></li>
            <li><a href="/beauty" className="hover:text-pink-500">Beauty</a></li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">ABOUT</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-500 cursor-pointer">About Us</li>
            <li className="hover:text-pink-500 cursor-pointer">Careers</li>
            <li className="hover:text-pink-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-pink-500 cursor-pointer">Terms</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">CONTACT</h3>
          <p className="text-sm text-gray-400 mb-2">support@myntra.com</p>
          <p className="text-sm text-gray-400">+91 98765 43210</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © 2026 Myntra Redesign Project. All rights reserved.
      </div>
    </footer>
  );
}
