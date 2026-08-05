import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import youtubeVideo from "../assets/Splash Page_Doggie Fashion Runway.mp4";
import tiktokVideo from "../assets/EatSleepPlayPoopRepeat_Finished.mp4";
import facebookImage from "../assets/Fluffy poodles in a stylish room.png";

import "../styles/SocialShowcase.css";

const socialPlatforms = [
  {
    id: "youtube",
    name: "YouTube",
    description:
      "Watch Jackson’s fashion shows, product features, and stylish adventures.",
    icon: FaYoutube,
    buttonText: "Watch on YouTube",
    url: "https://youtube.com/@heyjackson.?si=9jU_8PEuJnodFni8",
    mediaType: "video",
    media: youtubeVideo,
  },
  {
    id: "tiktok",
    name: "TikTok",
    description:
      "See playful fashion moments, outfit reveals, and behind-the-scenes clips.",
    icon: FaTiktok,
    buttonText: "Watch on TikTok",
    url: "https://vt.tiktok.com/ZTA5DSJfe/",
    mediaType: "video",
    media: tiktokVideo,
  },
  {
    id: "facebook",
    name: "Facebook",
    description:
      "Follow community updates, new product announcements, and fashionable pup inspiration.",
    icon: FaFacebookF,
    buttonText: "Follow on Facebook",
    url: "https://www.facebook.com/profile.php?id=61589440963008",
    mediaType: "image",
    media: facebookImage,
  },
];

function SocialShowcase() {
  return (
    <section className="social-showcase">
      <motion.div
        className="social-showcase-heading"
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        <p className="social-showcase-eyebrow">
          SEE JACKSON IN ACTION
        </p>

        <h2>Follow the Adventure</h2>

        <p className="social-showcase-description">
          Discover fashion shows, playful moments,
          product launches, and behind-the-scenes
          adventures from Hey Jackson! Fashion.
        </p>
      </motion.div>

      <div className="social-showcase-grid">
        {socialPlatforms.map(
          (platform, index) => {
            const PlatformIcon = platform.icon;

            return (
              <motion.article
                className={`social-platform-card social-${platform.id}`}
                key={platform.id}
                initial={{
                  opacity: 0,
                  y: 32,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
              >
                <div className="social-platform-media">
                  {platform.mediaType ===
                  "video" ? (
                    <video
                      src={platform.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={`${platform.name} video preview`}
                    />
                  ) : (
                    <img
                      src={platform.media}
                      alt="Fashionable poodles featured on the Hey Jackson! Fashion Facebook page"
                      loading="lazy"
                    />
                  )}

                  <div className="social-platform-badge">
                    <PlatformIcon />
                  </div>
                </div>

                <div className="social-platform-content">
                  <div className="social-platform-title">
                    <PlatformIcon />

                    <h3>{platform.name}</h3>
                  </div>

                  <p>{platform.description}</p>

                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-platform-button"
                    aria-label={`${platform.buttonText}, opens in a new tab`}
                  >
                    <PlatformIcon />

                    {platform.buttonText}
                  </a>
                </div>
              </motion.article>
            );
          }
        )}
      </div>
    </section>
  );
}

export default SocialShowcase;