import "./Marathi.css";
import { Link } from "react-router-dom";
import marathiPoems from "../data/marathiPoems";

function Marathi() {
  // Exact order wanted on the Marathi page
  const poemOrder = [
    "premachya-vatevarati",
    "ek-premkahani",
    "apurn-ti",
    "prematil-kavita",
    "mulich-patra-aaisathi",
    "aakrosh",
    "paus-aani-aathvan",
    "junya-natyanchi-odh",
  ];

  // Arrange poems according to the exact order above
  const orderedPoems = poemOrder
    .map((id) => marathiPoems.find((poem) => poem.id === id))
    .filter(Boolean);

  return (
    <div className="marathi-page">

      <Link
        to="/poetry"
        className="back-link"
      >
        ← Poetry Collection
      </Link>

      <h1>मराठी लेखन</h1>

      <p className="marathi-subtitle">
        मनात उमटलेल्या भावना, विचार आणि शब्दांची एक सुंदर दुनिया.
      </p>

      <div className="marathi-grid">

        {orderedPoems.map((poem, index) => (
          <div
            className="marathi-card"
            key={poem.id}
          >

            {/* Recently Published badge only on first poem */}
            {index === 0 && (
              <div className="recent-badge">
                ✨ Recently Published
              </div>
            )}

            <h2>
              {poem.title}
            </h2>

            <Link
              to={`/writing/marathi/${poem.id}`}
            >
              Read →
            </Link>

          </div>
        ))}

      </div>

      <Link
        to="/poetry"
        className="back-link"
      >
        ← Back to Poetry
      </Link>

    </div>
  );
}

export default Marathi;