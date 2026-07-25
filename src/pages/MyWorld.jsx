import "./MyWorld.css";
import { Link, useNavigate } from "react-router-dom";

function MyWorld() {
  const navigate = useNavigate();

  return (
    <div className="my-world-page">

      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>

      <h1>Welcome to My World</h1>

      <p className="my-world-subtitle">
        A little world of words, emotions, thoughts and stories.
      </p>

      <div className="world-grid">

        <Link to="/poetry" className="world-card-link">
          <div className="world-card">
            <h2>Poetry</h2>

            <p>
              Poems written from the heart, in beautiful languages.
            </p>

            <span>Explore →</span>
          </div>
        </Link>

        <Link to="/quotes" className="world-card-link">
          <div className="world-card">
            <h2>Quotes & Thoughts</h2>

            <p>
              Little thoughts and feelings captured in a few meaningful words.
            </p>

            <span>Explore →</span>
          </div>
        </Link>

        <Link to="/stories" className="world-card-link">
          <div className="world-card">
            <h2>Stories</h2>

            <p>
              Stories born from emotions, experiences, imagination and life.
            </p>

            <span>Explore →</span>
          </div>
        </Link>

      </div>

    </div>
  );
}

export default MyWorld;