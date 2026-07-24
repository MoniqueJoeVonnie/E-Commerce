import { Link } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { products } from "../data/products";
import "../styles/ProductPage.css";
import Footer from "../components/Footer";
import { useWishlist } from "../context/WishlistContext";
import FadeImage from "../components/FadeImage";
import PageMeta from "../components/PageMeta";



function ProductPage() {
  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

    return (
      <>
      <PageMeta
        title="Shop Products | Hey Jackson! Fashion"
        description="Browse luxury pet clothing, harnesses, paw protectors, accessories, and fashionable essentials from Hey Jackson! Fashion."
      />
        <main className="product-page">
          <section className="category-hero">
            <p className="page-eyebrow">
              CURATED COLLECTION
            </p>

            <h1 className="page-title">
              Shop Products
            </h1>

            <p className="page-description">
              Explore premium styles handpicked for fashionable pets.
            </p>

            <p className="category-count">
              {products.length}{" "}
              {products.length === 1
                ? "product available"
                : "products available"}
            </p>
          </section>

          <div className="product-grid">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="shop-product-card"
              >
                <div className="product-image-wrap">
                  <button
                    type="button"
                    className={
                      isInWishlist(product.id)
                        ? "wishlist-btn active"
                        : "wishlist-btn"
                    }
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      toggleWishlist(product);
                    }}
                    aria-label={
                      isInWishlist(product.id)
                        ? `Remove ${product.name} from wishlist`
                        : `Add ${product.name} to wishlist`
                    }
                    aria-pressed={isInWishlist(product.id)}
                  >
                    {isInWishlist(product.id) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>

                 <FadeImage
                  src={product.image}
                  alt={product.name}
                  wrapperClassName="product-image-wrap"
                />
                </div>

                <div className="shop-product-info">
                  <h3>{product.name}</h3>

                  <p className="shop-product-category">
                    {product.category}
                  </p>

                  <p className="shop-product-price">
                    {product.price}
                  </p>

                  <p className="variation-note">
                    🐾 Colors & Sizes Available
                  </p>

                  <span className="quick-view-btn">
                    View Colors & Sizes →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </main>

        <Footer />
      </>
    );
  }

export default ProductPage;