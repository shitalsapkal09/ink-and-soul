import "../App.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Ink & Soul</h1>

      <p className="subtitle">
        ❦ Poetry • Stories • Emotions ❦
      </p>

      <p className="hero-text">
        Explore heartfelt poems and meaningful stories
        written from the soul.
      </p>

      <div className="hero-buttons">
        <button
          className="hero-button"
          onClick={() => {
            window.location.href = "/my-world";
          }}
        >
          Welcome to My World
        </button>
      </div>
    </section>
  );
}

export default Hero;