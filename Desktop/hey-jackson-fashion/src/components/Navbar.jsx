import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useEffect, useState } from "react";
import {
  FaHeart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const [cartIsPopping, setCartIsPopping] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {
    if (cartCount === 0) return;

    setCartIsPopping(false);

    const restartTimer = setTimeout(() => {
      setCartIsPopping(true);
    }, 20);

    const stopTimer = setTimeout(() => {
      setCartIsPopping(false);
    }, 600);

    return () => {
      clearTimeout(restartTimer);
      clearTimeout(stopTimer);
    };
  }, [cartCount]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="top-bar">
      <div className="navbar-mobile-row">
        <Link
          to="/"
          className="logo-box"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Hey Jackson Fashion Logo"
            className="logo"
          />
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() =>
            setMenuOpen((currentValue) => !currentValue)
          }
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav
        id="primary-navigation"
        className={
          menuOpen
            ? "nav-links nav-links-open"
            : "nav-links"
        }
      >
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link
          to="/products"
          onClick={closeMenu}
        >
          Shop
        </Link>

        <Link
          to="/wishlist"
          className="navbar-wishlist-link"
          onClick={closeMenu}
        >
          <FaHeart className="navbar-wishlist-icon" />

          <span>Wishlist</span>

          {wishlistCount > 0 && (
            <span className="wishlist-count">
              {wishlistCount}
            </span>
          )}
        </Link>

        <Link
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </Link>

        <Link
          to="/cart"
          className="navbar-cart-link"
          onClick={closeMenu}
        >
          🛒 Cart

          {cartCount > 0 && (
            <span
              className={`cart-count ${
                cartIsPopping ? "pop" : ""
              }`}
            >
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;