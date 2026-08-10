import "./Hindi.css";
import { Link } from "react-router-dom";
import hindiPoems from "../data/hindiPoems";

function Hindi() {
  return (
    <div className="language-page">

      <Link to="/poetry" className="back-link">
        ← Poetry Collection
      </Link>

      <h1>Hindi Poetry</h1>

      <p className="language-subtitle">
        दिल से निकले एहसास, ख़याल और अनकही बातें।
      </p>

      <div className="poems-container">

        {hindiPoems.map((poem) => (
          <article
            className="poem-card"
            key={poem.id}
          >

            <h2>
              {poem.title}
            </h2>

            <Link
              to={`/writing/hindi/${poem.id}`}
              className="poem-read-link"
            >
              Read →
            </Link>

          </article>
        ))}

      </div>

      <Link
        to="/poetry"
        className="back-link"
      >
        ← Poetry Collection
      </Link>

    </div>
  );
}

export default Hindi;