import "./RecentlyPublished.css";
import { Link } from "react-router-dom";

function RecentlyPublished() {
  const recentPosts = [

    {
      id: "premachya-vatevarati",
      title: "प्रेमाच्या वाटेवरती...",
      category: "Marathi Poetry",
      description:
        "प्रेमाच्या वाटेवर सुरू झालेला प्रवास, नात्यांच्या वळणावर एक वेगळीच जाणीव देऊन जातो.",
      link: "/writing/marathi/premachya-vatevarati",
    },

    {
      id: "karmacha-hishob",
      title: "कर्माचा हिशोब",
      category: "Marathi Quote",
      description:
        "सगळ्या गोष्टी बोलून दाखवायची गरज नसते… कोण कसं वागलं, का वागलं—याचा हिशोब आपण नाही, कर्मच योग्य वेळी करतं.",
      link: "/writing/quotes/karmacha-hishob",
    },

    {
  id: "aaj-kal-ki-ladkiyan-badal-gayi-hain",

  title: "आज कल की लड़कियाँ बदल गई हैं…",

  category: "Hindi Story",

  description:
    "क्या सच में आज की लड़कियाँ बदल गई हैं, या बस उन्हें अपने सपनों और अपनी जिंदगी के लिए बोलने का मौका मिला है?",

  link: "/writing/story/aaj-kal-ki-ladkiyan-badal-gayi-hain",
}

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