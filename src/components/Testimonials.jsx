import { motion } from "framer-motion";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { testimonials } from "../data/testimonials";
import "../styles/Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <motion.div
        className="testimonials-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="testimonials-eyebrow">
          PET PARENT LOVE
        </p>

        <h2>What Pet Parents Are Saying</h2>

        <p className="testimonials-description">
          Stories from stylish pups and the people
          who love them.
        </p>
      </motion.div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.article
            className="testimonial-card"
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: index * 0.12,
            }}
          >
            <div className="testimonial-image-wrap">
              <img
                src={testimonial.image}
                alt={`${testimonial.name} testimonial`}
                loading="lazy"
              />
            </div>

            <div className="testimonial-content">
              <div
                className="testimonial-stars"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {Array.from({
                  length: testimonial.rating,
                }).map((_, starIndex) => (
                  <FaStar key={starIndex} />
                ))}
              </div>

              <h3>{testimonial.title}</h3>

              <p className="testimonial-review">
                “{testimonial.review}”
              </p>

              <div className="testimonial-customer">
                <div>
                  <strong>{testimonial.name}</strong>

                  <span>
                    {testimonial.location}
                  </span>
                </div>

                <div className="verified-purchase">
                  <FaCheckCircle />
                  Verified Purchase
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="testimonials-summary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="summary-stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <strong>5.0 out of 5</strong>

        <span>
          Loved by fashionable pets and their
          families
        </span>
      </motion.div>
    </section>
  );
}

export default Testimonials;