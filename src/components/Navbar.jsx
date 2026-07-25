import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        Ink & Soul
      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation Menu */}
      <ul className={`menu ${menuOpen ? "menu-open" : ""}`}>

        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/poetry" onClick={closeMenu}>
            Poetry Collection
          </Link>
        </li>

        <li>
          <Link to="/stories" onClick={closeMenu}>
            Story Collection
          </Link>
        </li>

        <li>
          <Link to="/quotes" onClick={closeMenu}>
            Quotes & Shayari
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={closeMenu}>
            The Heart Behind the Ink
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={closeMenu}>
            Let's Connect
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;