import "./Stories.css";
import { Link } from "react-router-dom";

import stories from "../data/stories";

function Stories() {
  // stories.js is already arranged from latest to oldest
  const latestStories = stories;

  return (
    <div className="stories-page">

      <h1>Story Collection</h1>

      <p className="stories-subtitle">
        Stories born from thoughts, emotions, experiences and imagination.
      </p>

      <div className="stories-container">

        {latestStories.map((story, index) => (
          <article
            className="story-card"
            key={story.id}
          >

            {/* Show badge only on the latest story */}
            {index === 0 && story.recent === true && (
              <div className="recent-badge">
                ✨ Recently Published
              </div>
            )}

            <h2>
              {story.title}
            </h2>

            <Link
              to={`/writing/story/${story.id}`}
              className="story-read-link"
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

export default Stories;