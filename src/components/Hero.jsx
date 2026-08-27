import { Link } from "react-router-dom";

import leftImage from "../assets/hero-left.png";
import rightImage from "../assets/hero-right.png";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT IMAGE */}
      <img
        src={leftImage}
        alt=""
        className="hero-left-image"
      />

      {/* RIGHT IMAGE */}
      <img
        src={rightImage}
        alt=""
        className="hero-right-image"
      />

      {/* YOUR EXISTING HERO CONTENT */}
      <div className="hero-content">

        <div className="hero-top-line">
          ── ♡ ──
        </div>

        <h1>Ink & Soul</h1>

        <div className="hero-divider">
          ── ◇ ──
        </div>

        <h2>❧ Poetry • Stories • Emotions ❧</h2>

        <p>
          Explore heartfelt poems and meaningful stories written from the soul.
        </p>

        <Link to="/my-world" className="hero-button">
          Welcome to My World
        </Link>

      </div>

    </section>
  );
}

export default Hero;