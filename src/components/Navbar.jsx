import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link
        to="/"
        className="logo"
        onClick={closeMenu}
      >
        Ink & Soul
      </Link>

      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* NAVIGATION MENU */}
      <ul
        className={`menu ${
          menuOpen ? "menu-open" : ""
        }`}
      >

        {/* HOME */}
        <li>
          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>

        {/* POETRY */}
        <li>
          <Link
            to="/poetry"
            onClick={closeMenu}
          >
            Poetry Collection
          </Link>
        </li>

        {/* STORIES */}
        <li>
          <Link
            to="/stories"
            onClick={closeMenu}
          >
            Story Collection
          </Link>
        </li>

        {/* QUOTES & SHAYARI */}
        <li>
          <Link
            to="/quotes"
            onClick={closeMenu}
          >
            Quotes & Shayari
          </Link>
        </li>

        {/* ABOUT */}
        <li>
          <Link
            to="/about"
            onClick={closeMenu}
          >
            The Heart Behind the Ink
          </Link>
        </li>

        {/* CONTACT */}
        <li>
          <Link
            to="/contact"
            onClick={closeMenu}
          >
            Let's Connect
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;