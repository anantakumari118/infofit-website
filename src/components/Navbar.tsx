import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<"services" | "about" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white border-b sticky top-0 backdrop-blur-sm bg-white/95">
      <div onMouseLeave={() => setOpenMenu(null)} className="relative">
        {/* TOP BAR */}
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Infofit Software" className="h-10" />
          </Link>

          {/* NAV ITEMS - DESKTOP */}
          <nav className="hidden md:flex items-center gap-10">
            <span
              onMouseEnter={() => setOpenMenu("services")}
              className={`cursor-pointer font-medium transition-colors ${
                openMenu === "services"
                  ? "text-indigo-600"
                  : "text-gray-800 hover:text-indigo-600"
              }`}
            >
              Our Services
            </span>

            <span
              onMouseEnter={() => setOpenMenu("about")}
              className={`cursor-pointer font-medium transition-colors ${
                openMenu === "about"
                  ? "text-indigo-600"
                  : "text-gray-800 hover:text-indigo-600"
              }`}
            >
              About Us
            </span>

            <Link to="/industries" className="text-gray-800 hover:text-indigo-600 transition-colors font-medium">
              Industries
            </Link>

            <Link to="/products" className="text-gray-800 hover:text-indigo-600 transition-colors font-medium">
              Products
            </Link>

            <Link to="/careers" className="text-gray-800 hover:text-indigo-600 transition-colors font-medium">
              Careers
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-full
              text-sm font-medium hover:opacity-90 shadow-lg transition-all hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-800 hover:text-indigo-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* MEGA MENU - DESKTOP */}
        {openMenu && (
          <div className="hidden md:block fixed left-0 right-0 top-20 bg-gradient-to-b from-gray-900 to-black text-white shadow-2xl">
            <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-16">

              {/* LEFT */}
              <div>
                <h3 className="text-3xl font-semibold mb-6">
                  {openMenu === "services" ? "Our Services" : "About Us"}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {openMenu === "services" 
                    ? "We deliver future-ready digital solutions helping enterprises innovate, scale and transform."
                    : "Learn about our mission, vision, and the team behind Infofit Software."}

                </p>

                <Link
                  to={openMenu === "services" ? "/services" : "/about"}
                  onClick={() => setOpenMenu(null)}
                  className="inline-flex items-center gap-2 mt-8 text-indigo-400 hover:text-indigo-300 transition font-medium"
                >
                  Explore more →
                </Link>
              </div>

              {/* COLUMN 2 */}
              <div className="space-y-4">
                <p className="uppercase text-xs text-gray-400 font-semibold mb-2">Capabilities</p>
                <Link 
                  to="/services" 
                  onClick={() => setOpenMenu(null)}
                  className="block hover:text-indigo-400 transition cursor-pointer"
                >
                  Web & Application Development
                </Link>
                <Link 
                  to="/services" 
                  onClick={() => setOpenMenu(null)}
                  className="block hover:text-indigo-400 transition cursor-pointer"
                >
                  Mobile App Development
                </Link>
                <Link 
                  to="/services" 
                  onClick={() => setOpenMenu(null)}
                  className="block hover:text-indigo-400 transition cursor-pointer"
                >
                  UI / UX Design
                </Link>
                <Link 
                  to="/services" 
                  onClick={() => setOpenMenu(null)}
                  className="block hover:text-indigo-400 transition cursor-pointer"
                >
                  Custom Software Solutions
                </Link>
              </div>

              {/* COLUMN 3 */}
              <div className="space-y-4">
                <p className="uppercase text-xs text-gray-400 font-semibold mb-2">Focus Areas</p>
                <Link 
                  to="/industries" 
                  onClick={() => setOpenMenu(null)}
                  className="block hover:text-indigo-400 transition cursor-pointer"
                >
                  Startups
                </Link>
                <Link 
                  to="/industries" 
                  onClick={() => setOpenMenu(null)}
                  className="block hover:text-indigo-400 transition cursor-pointer"
                >
                  Healthcare
                </Link>
                <Link 
                  to="/industries" 
                  onClick={() => setOpenMenu(null)}
                  className="block hover:text-indigo-400 transition cursor-pointer"
                >
                  Enterprise Solutions
                </Link>
                <Link 
                  to="/products" 
                  onClick={() => setOpenMenu(null)}
                  className="block hover:text-indigo-400 transition cursor-pointer"
                >
                  View Our Work
                </Link>
              </div>

            </div>
          </div>
        )}

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-white border-t z-40 overflow-y-auto">
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-indigo-600 font-medium py-2 transition-colors"
              >
                Our Services
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-indigo-600 font-medium py-2 transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/industries"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-indigo-600 font-medium py-2 transition-colors"
              >
                Industries
              </Link>
              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-indigo-600 font-medium py-2 transition-colors"
              >
                Products
              </Link>
              <Link
                to="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-indigo-600 font-medium py-2 transition-colors"
              >
                Careers
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium text-center mt-4"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
