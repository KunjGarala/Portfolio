import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`transition-colors duration-200 ${
        isActive
          ? "text-black font-bold border-b-2 border-purple-900"
          : "text-gray-600 hover:text-black"
      }`}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Kunj Garala
        </Link>
        <nav className="hidden md:flex space-x-4 text-[18px] font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </nav>

        <button
          className="md:hidden p-2 rounded-full bg-primary/10 text-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-t"
        >
          <nav className="flex flex-col p-4 space-y-2">
            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
            <NavLink to="/portfolio" onClick={toggleMenu}>Portfolio</NavLink>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;