import homepageVideo from "../assets/homepage-video.mp4";
import "./Hero.css";

function Hero() {
  return (
    <section className="banner">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src={homepageVideo}
          type="video/mp4"
        />

        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default Hero;