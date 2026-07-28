import { Link, useParams } from "react-router-dom";
import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { products } from "../data/products";
import { useWishlist } from "../context/WishlistContext";
import "../styles/ProductPage.css";
import Footer from "../components/Footer";
import PageMeta from "../components/PageMeta";



function CategoryPage() {
  const { categoryName } = useParams();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const categoryTitles = {
    clothing: "Pet Clothing",
    shoes: "Pet Shoes",
    harnesses: "Harnesses & Leashes",
    accessories: "Accessories",
    "combo-deals": "Combo Deals",
  };

  const pageTitle =
    categoryTitles[categoryName] || categoryName;

  const categoryProducts = products.filter(
  (product) =>
    product.category === categoryName
);

  return (
    <>
      <PageMeta
        title={`${pageTitle} | Hey Jackson! Fashion`}
        description={`Shop ${pageTitle.toLowerCase()} from Hey Jackson! Fashion and discover stylish products designed for fashionable pets.`}
      />
      <main className="product-page">
        <Link to="/" className="back-link">
      ← Back to Home
        </Link>

        <section className="category-hero">
          <p className="page-eyebrow">
            CURATED COLLECTION
          </p>

          <h1 className="page-title">
            {pageTitle}
          </h1>

          <p className="page-description">
            Explore premium styles handpicked for fashionable pets.
          </p>

          <p className="category-count">
            {categoryProducts.length}{" "}
            {categoryProducts.length === 1
              ? "product available"
              : "products available"}
          </p>
      </section>

        <div className="product-grid">
          {categoryProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              className="shop-product-card"
              key={product.id}
            >
              <div className="product-image-wrap">
                <button
                  type="button"
                  className={
                    isInWishlist(product.id)
                      ? "wishlist-btn active"
                      : "wishlist-btn"
                  }
                  aria-label={
                    isInWishlist(product.id)
                      ? `Remove ${product.name} from wishlist`
                      : `Add ${product.name} to wishlist`
                  }
                  aria-pressed={isInWishlist(
                    product.id
                  )}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    toggleWishlist(product);
                  }}
                >
                  {isInWishlist(product.id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="shop-product-info">
                <h3>{product.name}</h3>

                <p className="shop-product-category">
                  {pageTitle}
                </p>

                <p className="shop-product-price">
                  {product.price}
                </p>

                <p className="variation-note">
                  🐾 Colors & Sizes Available
                </p>

                {product.variants?.length > 0 && (
                  <div className="color-swatches">
                    {product.variants.map(
                      (variant) => (
                        <span
                          key={variant.name}
                          className="color-swatch"
                          style={{
                            backgroundColor:
                              variant.swatch,
                          }}
                          title={variant.name}
                        />
                      )
                    )}
                  </div>
                )}

                {product.sizes?.length > 0 && (
                  <p className="size-preview">
                    {product.sizes.join(" • ")}
                  </p>
                )}

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

export default CategoryPage;