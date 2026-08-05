import { Link } from "react-router-dom";
import { products } from "../data/products";

function CompleteTheLook({ relatedProductIds }) {
  if (
    !Array.isArray(relatedProductIds) ||
    relatedProductIds.length === 0
  ) {
    return null;
  }

  const relatedProducts =
    relatedProductIds
      .map((relatedId) =>
        products.find(
          (item) => item.id === relatedId
        )
      )
      .filter(Boolean);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="complete-look-section">
      <div className="complete-look-heading">
        <p className="section-eyebrow">
          STYLED TOGETHER
        </p>

        <h2 className="section-title">
          Complete the Look
        </h2>

        <p className="complete-look-description">
          Finish your pup&apos;s signature style
          with these hand-selected favorites.
        </p>
      </div>

      <div className="complete-look-grid">
        {relatedProducts.map(
          (relatedProduct) => {
            const relatedImage =
              relatedProduct.recommendationImage ||
              relatedProduct.image ||
              null;

            return (
              <Link
                key={relatedProduct.id}
                to={`/products/${relatedProduct.id}`}
                className="complete-look-card"
              >
                {relatedImage && (
                  <img
                    src={relatedImage}
                    alt={relatedProduct.name}
                    loading="lazy"
                  />
                )}

                <h3>{relatedProduct.name}</h3>

                <p>{relatedProduct.price}</p>
              </Link>
            );
          }
        )}
      </div>
    </section>
  );
}

export default CompleteTheLook;