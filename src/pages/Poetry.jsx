import "./Poetry.css";
import { Link, useNavigate } from "react-router-dom";

function Poetry() {
  const navigate = useNavigate();

  return (
    <div className="poetry-page">

      <button
        className="back-button"
        onClick={() => navigate("/my-world")}
      >
        
      </button>

      <h1>Poetry Collection</h1>

      <p className="poetry-subtitle">
        Words written from the heart, in three beautiful languages.
      </p>

      <div className="poetry-grid">

        <Link to="/poetry/marathi" className="card-link">
          <div className="poetry-card">
            <h2>मराठी</h2>
            <p>
              शब्दांत गुंफलेल्या भावना, विचार आणि मनातल्या गोष्टी.
            </p>
            <span>Explore →</span>
          </div>
        </Link>

        <Link to="/poetry/hindi" className="card-link">
          <div className="poetry-card">
            <h2>हिंदी</h2>
            <p>
              दिल से निकले एहसास, ख़याल और अनकही बातें।
            </p>
            <span>Explore →</span>
          </div>
        </Link>

        <Link to="/poetry/english" className="card-link">
          <div className="poetry-card">
            <h2>English</h2>
            <p>
              Poems and thoughts woven with feelings, memories and dreams.
            </p>
            <span>Explore →</span>
          </div>
        </Link>

      </div>

        <Link
        to="/my-world"
        className="back-link"
      >
        ← My World
      </Link>

    </div>
  );
}

export default Poetry;