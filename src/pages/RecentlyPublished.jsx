import "./RecentlyPublished.css";
import { Link } from "react-router-dom";

function RecentlyPublished() {
  const recentPosts = [
    {
      id: "kathiparyantcha-pravas",
      title: "काठीपर्यंतचा प्रवास",
      category: "Marathi Story",
      description:
        "दुचाकीवर सुरू झालेला प्रेमाचा प्रवास काठीपर्यंत सोबत निभावणारी एक हृदयस्पर्शी कथा.",
      link: "/writing/story/kathiparyantcha-pravas",
    },

    {
      id: "chai-aur-ishq",
      title: "चाय से मोहब्बत",
      category: "Quotes & Shayari",
      description:
        "चाय से मोहब्बत है साहब, उसका साथ आख़िरी घूँट तक निभाएँगे।",
      link: "/writing/quote/chai-aur-ishq",
    },

    {
      id: "ab-ghar-jaane-ka-man-nahi-karta",
      title: "अब घर जाने का मन नहीं करता",
      category: "Hindi Poetry",
      description:
        "कभी-कभी घर वही रहता है, लेकिन हम बदल जाते हैं।",
      link: "/writing/hindi/ab-ghar-jaane-ka-man-nahi-karta",
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