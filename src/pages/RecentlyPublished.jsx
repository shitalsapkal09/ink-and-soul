import "./RecentlyPublished.css";
import { Link } from "react-router-dom";

function RecentlyPublished() {
  const recentPosts = [
    {
      id: "aapal",
      title: "आपलं?...",
      category: "Marathi Poetry",
      description:
        "दोन मनांची कहाणी... पण जातीच्या भिंती, समाजाची भीती आणि दुसऱ्यांच्या निर्णयांमध्ये अडकलेलं एक अपुरं नातं.",
      link: "/writing/marathi/aapal",
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
          <article className="recent-card" key={post.id}>

            <span className="recent-category">
              {post.category}
            </span>

            <h2>{post.title}</h2>

            <p>{post.description}</p>

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