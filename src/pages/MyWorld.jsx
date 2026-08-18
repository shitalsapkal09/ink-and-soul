import "./MyWorld.css";
import { Link, useNavigate } from "react-router-dom";

function MyWorld() {
  const navigate = useNavigate();

  return (
    <section className="my-world-page">

      {/* Back Button */}
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

      {/* Heading */}
      <div className="my-world-header">

        <p className="my-world-small-title">
          A LITTLE PIECE OF MY SOUL
        </p>

        <h1>Welcome to My World</h1>

        <div className="world-divider">
          <span>❦</span>
        </div>

        <p className="my-world-subtitle">
          A little world of words, emotions, thoughts and stories —
          written from the heart and gathered with love.
        </p>

      </div>

      {/* Cards */}
      <div className="world-grid">

        {/* Poetry */}
        <Link
          to="/poetry"
          className="world-card-link"
        >
          <div className="world-card">

            <div className="world-card-icon">
              ✍
            </div>

            <h2>Poetry</h2>

            <p>
              Words that turn emotions into verses,
              feelings into poetry, and thoughts into stories.
            </p>

            <span>
              Explore Poetry →
            </span>

          </div>
        </Link>

        {/* Quotes */}
        <Link
          to="/quotes"
          className="world-card-link"
        >
          <div className="world-card">

            <div className="world-card-icon">
              ❝
            </div>

            <h2>Quotes & Thoughts</h2>

            <p>
              Little thoughts, feelings and truths
              captured in a few meaningful words.
            </p>

            <span>
              Explore Thoughts →
            </span>

          </div>
        </Link>

        {/* Stories */}
        <Link
          to="/stories"
          className="world-card-link"
        >
          <div className="world-card">

            <div className="world-card-icon">
              ♡
            </div>

            <h2>Stories</h2>

            <p>
              Stories born from emotions, experiences,
              imagination and the little moments of life.
            </p>

            <span>
              Explore Stories →
            </span>

          </div>
        </Link>

      </div>

      {/* Bottom Quote */}
      <div className="world-bottom-quote">
        <p>
          "Some things are too beautiful to be spoken,
          so I write them."
        </p>

        <span>— Ink & Soul</span>
      </div>

    </section>
  );
}

export default MyWorld;