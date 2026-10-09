import "./RecentlyPublished.css";
import { Link } from "react-router-dom";

function RecentlyPublished() {
  const recentPosts = [
    {
      id: "parijaat",
      title: "पारिजात",
      category: "Marathi Poetry",
      description:
        "साधेपणातलं सौंदर्य आणि वागण्यातून दरवळणारा सुगंध शिकवणारी एक सुंदर कविता.",
      link: "/writing/marathi/parijaat",
    },

    
{
  id: "chandrाची-aas",
  title: "चंद्राची आस",
  category: "Marathi Quote",
  description:
    "एखाद्या गोष्टीचं अप्रूप ती सहज मिळू लागली की कसं कमी होतं, हे सांगणारा एक भावस्पर्शी विचार.",
  link: "/writing/quote/chandrाची-aas",
},
    {
      id: "tya-4-divasantli-ti",
      title: "त्या ४ दिवसांतली ती",
      category: "Marathi Story",
      description:
        "चार दिवसांची वेदना, परंपरांचे बंधन आणि एका मुलीचा देवीसमोर उभा राहिलेला एकच प्रश्न — खरंच मी अशुद्ध आहे का?",
      link: "/writing/story/tya-4-divasantli-ti",
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