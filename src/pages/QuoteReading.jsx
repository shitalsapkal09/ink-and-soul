import "./QuoteReading.css";
import { useParams, Link } from "react-router-dom";

import quotesAndShayari from "../data/quotesAndShayari";

function QuoteReading() {
  const { id } = useParams();

  const quote = quotesAndShayari.find(
    (item) => item.id === id
  );

  if (!quote) {
    return (
      <div className="quote-reading-page">

        <h1>Quote Not Found</h1>

        <Link to="/quotes" className="quote-back">
          ← Back to Quotes
        </Link>

      </div>
    );
  }

  return (
    <div className="quote-reading-page">

      <Link
        to="/quotes"
        className="quote-back top-quote-back"
      >
        ← Back to Quotes
      </Link>

      <div className="quote-reading-card">

        <div className="quote-full-content">
          {quote.content
            .split("\n")
            .map((line, index) => (
              <p key={index}>
                {line}
              </p>
            ))}
        </div>

        <p className="quote-author">
          __Shital🌷
        </p>

      </div>

      {/* Interaction Section */}

      <div className="quote-actions">

        <button className="quote-action-button">
          ❤️ Like
        </button>

        <button className="quote-action-button">
          👎 Dislike
        </button>

        <button className="quote-action-button">
          🔗 Share
        </button>

      </div>

      {/* Comments Section */}

      <div className="quote-comments">

        <h2>💬 Comments</h2>

        <textarea
          placeholder="Write your thoughts..."
          rows="4"
        ></textarea>

        <button className="quote-comment-button">
          Post Comment
        </button>

      </div>

    </div>
  );
}

export default QuoteReading;