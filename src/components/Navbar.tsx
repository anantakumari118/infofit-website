import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<"services" | "about" | null>(null);

  return (
    <header className="relative z-50 bg-white border-b">
      <div onMouseLeave={() => setOpenMenu(null)} className="relative">
        {/* TOP BAR */}
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Infofit Software" className="h-10" />
          </Link>

          {/* NAV ITEMS */}
          <nav className="hidden md:flex items-center gap-10">
            <span
              onMouseEnter={() => setOpenMenu("services")}
              className={`cursor-pointer font-medium ${
                openMenu === "services"
                  ? "text-pink-600"
                  : "text-gray-800 hover:text-pink-600"
              }`}
            >
              Our Services
            </span>

            <span
              onMouseEnter={() => setOpenMenu("about")}
              className={`cursor-pointer font-medium ${
                openMenu === "about"
                  ? "text-pink-600"
                  : "text-gray-800 hover:text-pink-600"
              }`}
            >
              About Us
            </span>

            <Link to="/industries" className="text-gray-800 hover:text-pink-600">
              Industries
            </Link>

            {/* ✅ CHANGED HERE */}
            <Link to="/products" className="text-gray-800 hover:text-pink-600">
              Products
            </Link>

            <Link to="/careers" className="text-gray-800 hover:text-pink-600">
              Careers
            </Link>
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="bg-pink-600 text-white px-6 py-3 rounded-full
            text-sm font-medium hover:opacity-90"
          >
            Get in Touch
          </Link>
        </div>

        {/* MEGA MENU */}
        {openMenu && (
          <div className="fixed left-0 right-0 top-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-3 gap-16">

              {/* LEFT */}
              <div>
                <h3 className="text-3xl font-semibold mb-6">
                  {openMenu === "services" ? "Our Services" : "About Us"}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  We deliver future-ready digital solutions helping enterprises
                  innovate, scale and transform.
                </p>

                <Link
                  to={openMenu === "services" ? "/services" : "/about"}
                  className="inline-block mt-8 text-pink-400 hover:underline"
                >
                  Explore more →
                </Link>
              </div>

              {/* COLUMN 2 */}
              <div className="space-y-4">
                <p className="uppercase text-xs text-gray-400">Capabilities</p>
                <p className="hover:text-pink-400 cursor-pointer">
                  Web & Application Development
                </p>
                <p className="hover:text-pink-400 cursor-pointer">
                  Mobile App Development
                </p>
                <p className="hover:text-pink-400 cursor-pointer">
                  UI / UX Design
                </p>
                <p className="hover:text-pink-400 cursor-pointer">
                  Custom Software Solutions
                </p>
              </div>

              {/* COLUMN 3 */}
              <div className="space-y-4">
                <p className="uppercase text-xs text-gray-400">Focus Areas</p>
                <p className="hover:text-pink-400 cursor-pointer">Startups</p>
                <p className="hover:text-pink-400 cursor-pointer">Healthcare</p>
                <p className="hover:text-pink-400 cursor-pointer">Logistics</p>
                <p className="hover:text-pink-400 cursor-pointer">
                  Enterprise Solutions
                </p>
              </div>

            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
