import {
  Link,
  useSearchParams,
} from "react-router-dom";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaHeart,
  FaRegHeart,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

import { useWishlist } from "../context/WishlistContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageMeta from "../components/PageMeta";
import { products } from "../data/products";
import "../styles/Search.css";

function Search() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const urlQuery =
    searchParams.get("q") || "";

  const [searchTerm, setSearchTerm] =
    useState(urlQuery);

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState("all");

  const [sortOption, setSortOption] =
    useState("featured");

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  useEffect(() => {
    setSearchTerm(urlQuery);
  }, [urlQuery]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm
      .trim()
      .toLowerCase();

    const matchingProducts =
      products.filter((product) => {
        const searchableText = [
          product.name,
          product.title,
          product.category,
          product.description,
          ...(product.colors || []),
          ...(product.sizes || []),
          ...(product.keywords || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        const matchesSearch =
          !normalizedSearch ||
          searchableText.includes(
            normalizedSearch
          );

        const matchesCategory =
          selectedCategory === "all" ||
          product.category?.toLowerCase() ===
            selectedCategory;

        return (
          matchesSearch &&
          matchesCategory
        );
      });

    const sortedProducts = [
      ...matchingProducts,
    ];

    function getProductPrice(product) {
      const numericPrice = parseFloat(
        String(product.price).replace(
          /[^0-9.]/g,
          ""
        )
      );

      return Number.isNaN(numericPrice)
        ? 0
        : numericPrice;
    }

    if (sortOption === "price-low") {
      sortedProducts.sort(
        (
          firstProduct,
          secondProduct
        ) =>
          getProductPrice(firstProduct) -
          getProductPrice(secondProduct)
      );
    }

    if (sortOption === "price-high") {
      sortedProducts.sort(
        (
          firstProduct,
          secondProduct
        ) =>
          getProductPrice(secondProduct) -
          getProductPrice(firstProduct)
      );
    }

    if (sortOption === "name") {
      sortedProducts.sort(
        (
          firstProduct,
          secondProduct
        ) => {
          const firstName =
            firstProduct.name ||
            firstProduct.title ||
            "";

          const secondName =
            secondProduct.name ||
            secondProduct.title ||
            "";

          return firstName.localeCompare(
            secondName
          );
        }
      );
    }

    return sortedProducts;
  }, [
    searchTerm,
    selectedCategory,
    sortOption,
  ]);

  function handleSearchChange(event) {
    const value = event.target.value;

    setSearchTerm(value);

    if (value.trim()) {
      setSearchParams({
        q: value,
      });
    } else {
      setSearchParams({});
    }
  }

  function clearSearch() {
    setSearchTerm("");
    setSearchParams({});
  }

  function resetSearchPage() {
    setSearchTerm("");
    setSelectedCategory("all");
    setSortOption("featured");
    setSearchParams({});
  }

  return (
    <>
      <PageMeta
        title={
          searchTerm.trim()
            ? `Search: ${searchTerm} | Hey Jackson! Fashion`
            : "Search Products | Hey Jackson! Fashion"
        }
        description={
          searchTerm.trim()
            ? `View search results for ${searchTerm} at Hey Jackson! Fashion.`
            : "Search Hey Jackson! Fashion for stylish pet clothing, harnesses, accessories, paw protectors, and more."
        }
      />

      <Navbar />

      <main className="search-page">
        <section className="search-hero">
          <p className="search-eyebrow">
            FIND YOUR FAVORITES
          </p>

          <h1>Search Products</h1>

          <p className="search-description">
            Search our collection of stylish
            clothing, accessories, harnesses,
            and paw protectors.
          </p>

          <div className="search-input-wrapper">
            <FaSearch
              className="search-input-icon"
            />

            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search by product, category, color, or size..."
              aria-label="Search products"
              autoFocus
            />

            {searchTerm && (
              <button
                type="button"
                className="search-clear-button"
                onClick={clearSearch}
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </section>

        <section className="search-results-section">
          <div className="search-filters">
            <button
              type="button"
              className={
                selectedCategory === "all"
                  ? "filter-chip active"
                  : "filter-chip"
              }
              onClick={() =>
                setSelectedCategory("all")
              }
            >
              All
            </button>

            <button
              type="button"
              className={
                selectedCategory ===
                "clothing"
                  ? "filter-chip active"
                  : "filter-chip"
              }
              onClick={() =>
                setSelectedCategory(
                  "clothing"
                )
              }
            >
              Clothing
            </button>

            <button
              type="button"
              className={
                selectedCategory ===
                "harnesses"
                  ? "filter-chip active"
                  : "filter-chip"
              }
              onClick={() =>
                setSelectedCategory(
                  "harnesses"
                )
              }
            >
              Harnesses
            </button>

            <button
              type="button"
              className={
                selectedCategory ===
                "shoes"
                  ? "filter-chip active"
                  : "filter-chip"
              }
              onClick={() =>
                setSelectedCategory(
                  "shoes"
                )
              }
            >
              Paw Protectors
            </button>

            <button
              type="button"
              className={
                selectedCategory ===
                "accessories"
                  ? "filter-chip active"
                  : "filter-chip"
              }
              onClick={() =>
                setSelectedCategory(
                  "accessories"
                )
              }
            >
              Accessories
            </button>
          </div>

          <div className="search-results-header">
            <div className="search-results-heading">
              <p className="search-results-label">
                SEARCH RESULTS
              </p>

              <h2>
                {searchTerm
                  ? `Results for “${searchTerm}”`
                  : selectedCategory ===
                      "all"
                    ? "All Products"
                    : selectedCategory ===
                        "shoes"
                      ? "Paw Protectors"
                      : selectedCategory}
              </h2>
            </div>

            <div className="search-results-controls">
              <p className="search-result-count">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1
                  ? "product"
                  : "products"}
              </p>

              <label className="search-sort">
                <span>Sort By</span>

                <select
                  value={sortOption}
                  onChange={(event) =>
                    setSortOption(
                      event.target.value
                    )
                  }
                  aria-label="Sort search results"
                >
                  <option value="featured">
                    Featured
                  </option>

                  <option value="price-low">
                    Price: Low to High
                  </option>

                  <option value="price-high">
                    Price: High to Low
                  </option>

                  <option value="name">
                    Name: A–Z
                  </option>
                </select>
              </label>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="search-product-grid">
              {filteredProducts.map(
                (product) => (
                  <Link
                    to={`/products/${product.id}`}
                    className="search-product-card"
                    key={product.id}
                  >
                    <div className="search-product-image-wrapper">
                      <button
                        type="button"
                        className={
                          isInWishlist(
                            product.id
                          )
                            ? "search-wishlist-button active"
                            : "search-wishlist-button"
                        }
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();

                          toggleWishlist(
                            product
                          );
                        }}
                        aria-label={
                          isInWishlist(
                            product.id
                          )
                            ? `Remove ${
                                product.name ||
                                product.title
                              } from wishlist`
                            : `Add ${
                                product.name ||
                                product.title
                              } to wishlist`
                        }
                        aria-pressed={isInWishlist(
                          product.id
                        )}
                      >
                        {isInWishlist(
                          product.id
                        ) ? (
                          <FaHeart />
                        ) : (
                          <FaRegHeart />
                        )}
                      </button>

                      <img
                        src={
                          product.image ||
                          product.images?.[0]
                        }
                        alt={
                          product.name ||
                          product.title
                        }
                      />
                    </div>

                    <div className="search-product-info">
                      <p className="search-product-category">
                        {product.category}
                      </p>

                      <h3>
                        {product.name ||
                          product.title}
                      </h3>

                      <p className="search-product-price">
                        {product.price}
                      </p>
                    </div>
                  </Link>
                )
              )}
            </div>
          ) : (
            <div className="search-empty-state">
              <div className="search-empty-icon">
                <FaSearch />
              </div>

              <h2>No products found</h2>

              <p>
                We couldn’t find anything
                matching
                {searchTerm
                  ? ` “${searchTerm}”.`
                  : " the selected category."}{" "}
                Try a different product,
                color, size, or category.
              </p>

              <button
                type="button"
                onClick={resetSearchPage}
              >
                View All Products
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Search;