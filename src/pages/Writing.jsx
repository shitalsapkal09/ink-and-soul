import "./Writing.css";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import marathiPoems from "../data/marathiPoems";
import hindiPoems from "../data/hindiPoems";
import englishPoems from "../data/englishPoems";
import stories from "../data/stories";
import quotesShayari from "../data/quotesShayari";

function Writing() {
  const { language, id } = useParams();

  // Decide which collection to use
  let writings = [];
  let backPath = "/poetry";

  if (language === "marathi") {
    writings = marathiPoems;
    backPath = "/poetry/marathi";
  }

  else if (language === "hindi") {
    writings = hindiPoems;
    backPath = "/poetry/hindi";
  }

  else if (language === "english") {
    writings = englishPoems;
    backPath = "/poetry/english";
  }

  else if (language === "story") {
    writings = stories;
    backPath = "/stories";
  }

  else if (language === "quote") {
    writings = quotesShayari;
    backPath = "/quotes";
  }

  // Find the selected writing
  const writing = writings.find(
    (item) => item.id === id
  );

  // Like / Dislike state
  const [reaction, setReaction] = useState(null);

  // Share state
  const [shared, setShared] = useState(false);

  // If writing doesn't exist
  if (!writing) {
    return (
      <div className="writing-page">

        <Link
          to={backPath}
          className="writing-back top-back"
        >
          ← Back to Collection
        </Link>

        <h1>Writing Not Found</h1>

      </div>
    );
  }

  // =============================
  // Handle Like
  // =============================

  function handleLike() {
    setReaction(
      reaction === "like" ? null : "like"
    );
  }

  // =============================
  // Handle Dislike
  // =============================

  function handleDislike() {
    setReaction(
      reaction === "dislike" ? null : "dislike"
    );
  }

  // =============================
  // Handle Share
  // =============================

  async function handleShare() {

    const shareData = {
      title: writing.title,
      text: `Read "${writing.title}" on Ink & Soul`,
      url: window.location.href,
    };

    try {

      // Use browser's native share option
      if (navigator.share) {

        await navigator.share(shareData);

        setShared(true);

      } else {

        // Fallback: Copy link to clipboard
        await navigator.clipboard.writeText(
          window.location.href
        );

        setShared(true);

      }

      // Reset Share button after 2 seconds
      setTimeout(() => {
        setShared(false);
      }, 2000);

    } catch (error) {

      console.log(
        "Share cancelled or unavailable."
      );

    }
  }

  // =============================
  // Show Writing
  // =============================

  return (
    <div className="writing-page">

      {/* Back Button */}

      <Link
        to={backPath}
        className="writing-back top-back"
      >
        ← Back to Collection
      </Link>


      {/* Writing Title */}

      <h1>
        {writing.title}
      </h1>


      {/* Author */}

      <p className="writing-author">
        __Shital🌷
      </p>


      {/* Writing Content */}

      <div className="writing-content">

        {writing.content
          .split("\n")
          .map((line, index) => (
            <p key={index}>
              {line}
            </p>
          ))}

      </div>


      {/* Like / Dislike / Share */}

      <div className="writing-actions">

        {/* Like */}

        <button
          className={`action-button ${
            reaction === "like" ? "active" : ""
          }`}
          onClick={handleLike}
        >
          {reaction === "like"
            ? "❤️ Like"
            : "♡ Like"}
        </button>


        {/* Dislike */}

        <button
          className={`action-button ${
            reaction === "dislike" ? "active" : ""
          }`}
          onClick={handleDislike}
        >
          {reaction === "dislike"
            ? "👎 Dislike"
            : "♧ Dislike"}
        </button>


        {/* Share */}

        <button
          className={`action-button ${
            shared ? "active" : ""
          }`}
          onClick={handleShare}
        >
          {shared
            ? "✓ Shared"
            : "♧ Share"}
        </button>

      </div>

    </div>
  );
}

export default Writing;