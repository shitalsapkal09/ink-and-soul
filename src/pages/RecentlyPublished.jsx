import "./RecentlyPublished.css";
import { Link } from "react-router-dom";

function RecentlyPublished() {
  const recentPosts = [
    {
      id: "dayalupanachi-kimmat",
      title: "चांगला होतो... म्हणून?",
      category: "Marathi Story",
      description:
        "चांगुलपणा, विश्वास आणि माणसांच्या खऱ्या चेहऱ्यांची जाणीव करून देणारी एक भावनिक गोष्ट.",
      link: "/writing/story/dayalupanachi-kimmat",
    },
  ];

  return (
    <div className="recent-page">

      <Link to="/my-world" className="back-link">
        ← My World
      </Link>

      <div className="recent-header">

        <span className="recent-icon">✦</span>

        <h1>Recently Published</h1>

        <p>
          Fresh words, new thoughts, and stories recently added to Ink & Soul.
        </p>

      </div>

      <div className="recent-container">

        {recentPosts.map((post) => (
          <article
            className="recent-card"
            key={post.id}
          >

            <span className="recent-category">
              {post.category}
            </span>

            <h2>
              {post.title}
            </h2>

            <p>
              {post.description}
            </p>

            <Link
              to={post.link}
              className="recent-read-link"
            >
              Read →
            </Link>

          </article>
        ))}

      </div>

      <Link
        to="/my-world"
        className="back-link bottom-back-link"
      >
        ← My World
      </Link>

    </div>
  );
}

export default RecentlyPublished;