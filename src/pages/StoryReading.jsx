import "./StoryReading.css";
import { useParams, Link } from "react-router-dom";

import stories from "../data/stories";

function StoryReading() {
  const { id } = useParams();

  const story = stories.find(
    (item) => item.id === id
  );

  if (!story) {
    return (
      <div className="story-reading-page">

        <h1>Story Not Found</h1>

        <Link
          to="/stories"
          className="story-back"
        >
          ← Back to Stories
        </Link>

      </div>
    );
  }

  return (
    <div className="story-reading-page">

      {/* Back Button */}

      <Link
        to="/stories"
        className="story-back top-story-back"
      >
        ← Back to Stories
      </Link>


      {/* Story Title */}

      <h1>{story.title}</h1>


      {/* Author */}

      <p className="story-author">
        __Shital🌷
      </p>


      {/* Full Story */}

      <div className="story-content">

        {story.content
          .replace("__Shital🌷", "")
          .split("\n")
          .map((line, index) => (

            <p key={index}>
              {line}
            </p>

          ))}

      </div>


      {/* Interaction Section */}

      <div className="story-actions">

        <button className="story-action-button">
          ❤️ Like
        </button>

        <button className="story-action-button">
          👎 Dislike
        </button>

        <button className="story-action-button">
          🔗 Share
        </button>

      </div>


      {/* Comments Section */}

      <div className="story-comments">

        <h2>💬 Comments</h2>

        <textarea
          placeholder="Write your thoughts about this story..."
          rows="4"
        ></textarea>

        <button className="story-comment-button">
          Post Comment
        </button>

      </div>

    </div>
  );
}

export default StoryReading;