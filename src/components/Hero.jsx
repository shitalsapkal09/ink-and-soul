import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <h1>Ink & Soul</h1>

      <h2>❦ Poetry • Stories • Emotions ❦</h2>

      <p>
        Explore heartfelt poems and meaningful stories written from the soul.
      </p>

      <div className="hero-buttons">
        <Link to="/my-world" className="hero-button">
          Welcome to My World
        </Link>
      </div>

    </section>
  );
}

export default Hero;