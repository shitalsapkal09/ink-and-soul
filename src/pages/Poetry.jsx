import "./Poetry.css";
import { Link } from "react-router-dom";

function Poetry() {
  return (
    <div className="poetry-page">

      {/* BACK TO HOME */}
      <Link
        to="/my-world"
        className="back-link"
      >
        ← My World
      </Link>

      {/* HEADING */}
      <h1>
        Poetry Collection
      </h1>

      <p className="poetry-subtitle">
        Words written from the heart, in three beautiful languages.
      </p>

      {/* LANGUAGE CARDS */}
      <div className="poetry-grid">

        {/* MARATHI */}
        <Link
          to="/poetry/marathi"
          className="card-link"
        >
          <div className="poetry-card">

            <h2>मराठी</h2>

            <p>
              शब्दांत गुंफलेल्या भावना,
              विचार आणि मनातल्या गोष्टी.
            </p>

            <span>
              Explore →
            </span>

          </div>
        </Link>

        {/* HINDI */}
        <Link
          to="/poetry/hindi"
          className="card-link"
        >
          <div className="poetry-card">

            <h2>हिंदी</h2>

            <p>
              दिल से निकले एहसास,
              ख़याल और अनकही बातें।
            </p>

            <span>
              Explore →
            </span>

          </div>
        </Link>

        {/* ENGLISH */}
        <Link
          to="/poetry/english"
          className="card-link"
        >
          <div className="poetry-card">

            <h2>English</h2>

            <p>
              Poems and thoughts woven with
              feelings, memories and dreams.
            </p>

            <span>
              Explore →
            </span>

          </div>
        </Link>

      </div>

      {/* BACK TO HOME */}
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