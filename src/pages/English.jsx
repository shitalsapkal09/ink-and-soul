import "./English.css";
import { Link } from "react-router-dom";
import englishPoems from "../data/englishPoems";

function English() {
  return (
    <div className="language-page">

      <Link to="/poetry" className="back-link">
        ← Poetry Collection
      </Link>

      <h1>English Poetry</h1>

      <p className="language-subtitle">
        Poems and thoughts woven with feelings, memories and dreams.
      </p>

      <div className="poems-container">

        {englishPoems.map((poem) => (
          <article
            className="poem-card"
            key={poem.id}
          >

            <h2>
              {poem.title}
            </h2>

            <Link
              to={`/writing/english/${poem.id}`}
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

export default English;