import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f0f14] to-[#1a1a24] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <img src={logo} alt="Infofit Software" className="h-12 mb-4" />

          <p className="text-sm leading-relaxed">
            Building future-ready digital solutions, empowering tomorrow’s
            enterprises through innovation, technology and trust.
          </p>

          <div className="mt-4 space-y-1 text-sm">
            <a href="tel:+919205493889" className="hover:text-indigo-400 transition block">
              📞 +91-9205493889
            </a>
            <a href="mailto:info@infofitsoftware.com" className="hover:text-indigo-400 transition block">
              ✉️ info@infofitsoftware.com
            </a>
          </div>

          {/* SOCIAL */}
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/company/infofit-software-solution-opc-private-limited/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-indigo-400 transition"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-indigo-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-indigo-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/industries" className="hover:text-indigo-400 transition">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-indigo-400 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-indigo-400 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-indigo-400 transition">
                Cloud & Infrastructure
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-indigo-400 transition">
                Data, AI & Analytics
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-indigo-400 transition">
                Digital Engineering
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-indigo-400 transition">
                Customer Success
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-indigo-400 transition">
                Enterprise Applications
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-indigo-400 transition">
                Cybersecurity
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-indigo-400 transition">
                Who We Are
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-indigo-400 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-400 transition">
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Infofit Software Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
