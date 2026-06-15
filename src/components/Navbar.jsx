import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "bg-[#D4AF37] text-black px-4 py-2 rounded-lg font-semibold transition"
      : "px-4 py-2 hover:text-[#D4AF37] transition";

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#ebf0f8] text-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="GenZInvest"
            className="w-62 h-19 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-3 text-lg font-medium">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

           <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

         

          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          {/* <Link
            to="/contact"
            className="ml-3 bg-[#011A41] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#02285f] transition"
          >
            Get Started
          </Link> */}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[#011A41]"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#ebf0f8] border-t border-[#D4AF37]/20 shadow-lg">
          <div className="flex flex-col py-3">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-6 py-3 transition ${
                  isActive
                    ? "bg-[#D4AF37] text-black font-semibold"
                    : "hover:bg-[#D4AF37]/20"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-6 py-3 transition ${
                  isActive
                    ? "bg-[#D4AF37] text-black font-semibold"
                    : "hover:bg-[#D4AF37]/20"
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-6 py-3 transition ${
                  isActive
                    ? "bg-[#D4AF37] text-black font-semibold"
                    : "hover:bg-[#D4AF37]/20"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-6 py-3 transition ${
                  isActive
                    ? "bg-[#D4AF37] text-black font-semibold"
                    : "hover:bg-[#D4AF37]/20"
                }`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-6 py-3 transition ${
                  isActive
                    ? "bg-[#D4AF37] text-black font-semibold"
                    : "hover:bg-[#D4AF37]/20"
                }`
              }
            >
              Contact
            </NavLink>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mx-6 mt-3 text-center bg-[#011A41] text-white py-3 rounded-lg font-semibold hover:bg-[#02285f] transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}