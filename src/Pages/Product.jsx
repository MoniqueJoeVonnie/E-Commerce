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
import { useState } from "react";




function ProductPage() {
  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [selectedSubcategory, setSelectedSubcategory] =
    useState("all");

const categories = [
  {
    label: "Pet Clothing",
    value: "clothing",
  },
  {
    label: "Pet Protectors",
    value: "shoes",
  },
  {
    label: "Harnesses and Leashes",
    value: "harnesses",
  },
  {
    label: "Accessories",
    value: "accessories",
  },
];

const clothingSubcategories = [
  {
    label: "All Clothing",
    value: "all",
  },
  {
    label: "Hoodies",
    value: "hoodies",
  },
  {
    label: "Tees",
    value: "tees",
  },
  {
    label: "Dresses",
    value: "dresses",
  },
  {
    label: "Matching",
    value: "matching",
  },
];

const filteredProducts = products.filter((product) => {
  if (selectedCategory === "all") {
    return true;
  }

  if (product.category !== selectedCategory) {
    return false;
  }

  if (
    selectedCategory === "clothing" &&
    selectedSubcategory !== "all"
  ) {
    return product.subcategory === selectedSubcategory;
  }

  return true;
});

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
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "product available"
                : "products available"}
            </p>
          </section>

        <div className="product-category-filters">
          <button
            type="button"
            className={
              selectedCategory === "all"
                ? "product-category-filter active"
                : "product-category-filter"
            }
            onClick={() => setSelectedCategory("all")}
          >
            All Products
          </button>

          {categories.map((category) => (
            <button
              key={category.value}
              type="button"
              className={
                selectedCategory === category.value
                  ? "product-category-filter active"
                  : "product-category-filter"
              }
              onClick={() => {
                setSelectedCategory(category.value);
                setSelectedSubcategory("all");
              }}
            >
              {category.label}
            </button>
          ))}
        </div>        

        {selectedCategory === "clothing" && (
          <div className="product-subcategory-filters">
            {clothingSubcategories.map((subcategory) => (
              <button
                key={subcategory.value}
                type="button"
                className={
                  selectedSubcategory === subcategory.value
                    ? "product-subcategory-filter active"
                    : "product-subcategory-filter"
                }
                onClick={() =>
                  setSelectedSubcategory(subcategory.value)
                }
              >
                {subcategory.label}
              </button>
            ))}
          </div>
        )}

          <div className="product-grid">
            {filteredProducts.map((product) => (
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