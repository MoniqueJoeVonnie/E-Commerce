import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RECENTLY_VIEWED_KEY =
  "heyJacksonRecentlyViewed";

function RecentlyViewed({
  currentProductId,
}) {
  const [
    recentProducts,
    setRecentProducts,
  ] = useState([]);

  useEffect(() => {
    function loadRecentlyViewed() {
      let storedProducts = [];

      try {
        const savedProducts =
          localStorage.getItem(
            RECENTLY_VIEWED_KEY
          );

        storedProducts = savedProducts
          ? JSON.parse(savedProducts)
          : [];

        if (!Array.isArray(storedProducts)) {
          storedProducts = [];
        }
      } catch (error) {
        console.error(
          "Unable to load recently viewed products:",
          error
        );

        storedProducts = [];
      }

      const filteredProducts =
        storedProducts.filter(
          (item) =>
            item?.id &&
            item.id !== currentProductId
        );

      setRecentProducts(
        filteredProducts.slice(0, 4)
      );
    }

    loadRecentlyViewed();
  }, [currentProductId]);

  if (recentProducts.length === 0) {
    return null;
  }

  return (
    <section className="recently-viewed-section">
      <div className="recently-viewed-heading">
        <p className="section-eyebrow">
          KEEP EXPLORING
        </p>

        <h2 className="section-title">
          Recently Viewed
        </h2>
      </div>

      <div className="recently-viewed-grid">
        {recentProducts.map((product) => {
          const productImage =
            product.image ||
            product.selectedImage ||
            product.variants?.[0]
              ?.gallery?.[0] ||
            "";

          return (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="recently-viewed-card"
            >
              <div className="recently-viewed-image-wrapper">
                {productImage ? (
                  <img
                    src={productImage}
                    alt={product.name}
                    className="recently-viewed-image"
                  />
                ) : (
                  <div className="recently-viewed-placeholder">
                    Image unavailable
                  </div>
                )}
              </div>

              <div className="recently-viewed-info">
                <h3>{product.name}</h3>

                {product.price && (
                  <p>{product.price}</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default RecentlyViewed;