import "./Quotes.css";
import { Link } from "react-router-dom";

import quotesShayari from "../data/quotesShayari";

function Quotes() {
  return (
    <div className="quotes-page">

      <h1>Quotes & Shayari</h1>

      <p className="quotes-subtitle">
        A collection of heartfelt quotes, shayari, and thoughts
        that speak what words sometimes cannot.
      </p>

      <div className="quotes-container">

        {quotesShayari.map((quote) => (
          <article
            className="quote-card"
            key={quote.id}
          >

            <h2>
              {quote.title}
            </h2>

            <p className="quote-preview">
              {quote.content.split("\n")[0]}
            </p>

            <Link
              to={`/writing/quote/${quote.id}`}
              className="quote-read-link"
            >
              Read →
            </Link>

          </article>
        ))}

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

export default Quotes;